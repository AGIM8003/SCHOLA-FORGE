/**
 * SF-TIM-001 — Tutoring Integrity Mode (working engine)
 * Proven behavior: attempt-before-answer, lowest sufficient hint, session receipts.
 * STATUS: SOFTWARE WORKING FEATURE — not production-approved; not a patent grant.
 */

export const TUTOR_MODES = Object.freeze([
  'practice',
  'socratic',
  'worked_example',
  'feedback',
  'assessment_restricted',
  'accessibility_support',
  'teacher_demo',
]);

export const HINT_LEVELS = Object.freeze([
  'none',
  'nudge',
  'socratic_question',
  'partial_step',
  'worked_analogous_example',
  'direct_solution', // only when policy permits
]);

export function createTutorContract(input = {}) {
  const mode = input.mode || 'practice';
  if (!TUTOR_MODES.includes(mode)) {
    return { ok: false, reason: 'UNKNOWN_MODE', contract: null };
  }
  const allowDirect =
    mode === 'teacher_demo' || mode === 'accessibility_support' || input.allow_direct_solution === true;
  const requireAttempt = mode === 'assessment_restricted' ? true : input.require_attempt !== false;

  return {
    ok: true,
    contract: {
      schema_id: 'ScholaForgeTutorContract/v1',
      feature_id: 'SF-TIM-001',
      mode,
      require_attempt_before_help: requireAttempt,
      max_hint_level: input.max_hint_level || (mode === 'assessment_restricted' ? 'socratic_question' : 'partial_step'),
      allow_direct_solution: allowDirect && mode !== 'assessment_restricted',
      record_assistance: true,
      teacher_can_disable: true,
      disabled: input.disabled === true,
      created_at_utc: new Date().toISOString(),
    },
  };
}

function hintRank(level) {
  return HINT_LEVELS.indexOf(level);
}

export function requestTutorHelp(session, request = {}) {
  if (!session?.contract) return { ok: false, reason: 'NO_CONTRACT' };
  if (session.contract.disabled) return { ok: false, reason: 'TEACHER_DISABLED' };

  const contract = session.contract;
  const attempts = session.attempts || [];
  const hasAttempt = attempts.some((a) => a && String(a.text || '').trim().length > 0);

  if (contract.require_attempt_before_help && !hasAttempt) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'ATTEMPT_REQUIRED_BEFORE_HELP',
      assistance_level: 'none',
      response: null,
      receipt: appendReceipt(session, {
        event: 'HELP_DENIED',
        reason: 'ATTEMPT_REQUIRED_BEFORE_HELP',
        requested_level: request.requested_level || null,
      }),
    };
  }

  let level = request.requested_level || 'nudge';
  if (!HINT_LEVELS.includes(level)) level = 'nudge';

  // Explicit denial when caller asks for a prohibited direct solution.
  if (level === 'direct_solution' && !contract.allow_direct_solution) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'DIRECT_SOLUTION_PROHIBITED',
      assistance_level: level,
      response: {
        type: 'abstain',
        message: 'Direct answers are not permitted in this mode. Try a smaller step or ask your teacher.',
        teacher_referral: true,
      },
      receipt: appendReceipt(session, {
        event: 'HELP_DENIED',
        reason: 'DIRECT_SOLUTION_PROHIBITED',
      }),
    };
  }

  // Always use lowest sufficient among requested and max
  if (hintRank(level) > hintRank(contract.max_hint_level)) {
    level = contract.max_hint_level;
  }

  if (level === 'direct_solution' && !contract.allow_direct_solution) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'DIRECT_SOLUTION_PROHIBITED',
      assistance_level: level,
      response: {
        type: 'abstain',
        message: 'Direct answers are not permitted in this mode. Try a smaller step or ask your teacher.',
        teacher_referral: true,
      },
      receipt: appendReceipt(session, {
        event: 'HELP_DENIED',
        reason: 'DIRECT_SOLUTION_PROHIBITED',
      }),
    };
  }

  const response = craftHelp(level, request);
  session.assistance_events = session.assistance_events || [];
  session.assistance_events.push({
    level,
    at: new Date().toISOString(),
    task_id: request.task_id || null,
  });

  return {
    ok: true,
    assistance_level: level,
    response,
    receipt: appendReceipt(session, {
      event: 'HELP_PROVIDED',
      assistance_level: level,
      task_id: request.task_id || null,
    }),
  };
}

function craftHelp(level, request) {
  const topic = request.topic || 'the problem';
  switch (level) {
    case 'none':
      return { type: 'none', message: 'Continue with your own attempt.' };
    case 'nudge':
      return { type: 'nudge', message: `What have you already tried on ${topic}?` };
    case 'socratic_question':
      return { type: 'socratic', message: `Which part of ${topic} is unclear: the goal, the given facts, or the next step?` };
    case 'partial_step':
      return { type: 'partial_step', message: `For ${topic}, first write the known values, then state one equation or rule that connects them.` };
    case 'worked_analogous_example':
      return {
        type: 'worked_analogous_example',
        message: `Here is a similar worked example (not your exact item). Mirror the structure, then retry yours.`,
      };
    case 'direct_solution':
      return {
        type: 'direct_solution',
        message: request.permitted_solution || 'Solution provided under permitted policy.',
        policy_note: 'Direct solution only when contract allows.',
      };
    default:
      return { type: 'abstain', message: 'Unable to help under current policy.' };
  }
}

export function startTutorSession(contractInput = {}) {
  const c = createTutorContract(contractInput);
  if (!c.ok) return c;
  return {
    ok: true,
    session: {
      session_id: `tim-${Date.now()}`,
      feature_id: 'SF-TIM-001',
      contract: c.contract,
      attempts: [],
      assistance_events: [],
      receipts: [],
      status: 'ACTIVE',
    },
  };
}

export function recordAttempt(session, attempt = {}) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  const entry = {
    text: attempt.text || '',
    reasoning: attempt.reasoning || null,
    at: new Date().toISOString(),
  };
  session.attempts.push(entry);
  appendReceipt(session, { event: 'ATTEMPT_RECORDED', has_text: !!entry.text.trim() });
  return { ok: true, attempt: entry };
}

export function disableTutor(session, teacherId) {
  if (!session?.contract?.teacher_can_disable) return { ok: false, reason: 'DISABLE_NOT_ALLOWED' };
  session.contract.disabled = true;
  session.status = 'DISABLED_BY_TEACHER';
  appendReceipt(session, { event: 'TEACHER_DISABLED', teacher_id: teacherId || null });
  return { ok: true, session };
}

export function sessionSummary(session) {
  return {
    schema_id: 'ScholaForgeTutorSessionReceipt/v1',
    feature_id: 'SF-TIM-001',
    session_id: session.session_id,
    mode: session.contract.mode,
    attempt_count: session.attempts.length,
    assistance_events: session.assistance_events,
    max_assistance_used: maxAssistance(session.assistance_events),
    disabled: !!session.contract.disabled,
    status: session.status,
    receipt_count: session.receipts.length,
  };
}

function maxAssistance(events = []) {
  let max = 'none';
  for (const e of events) {
    if (hintRank(e.level) > hintRank(max)) max = e.level;
  }
  return max;
}

function appendReceipt(session, payload) {
  const receipt = {
    seq: (session.receipts?.length || 0) + 1,
    at: new Date().toISOString(),
    ...payload,
  };
  session.receipts = session.receipts || [];
  session.receipts.push(receipt);
  return receipt;
}
