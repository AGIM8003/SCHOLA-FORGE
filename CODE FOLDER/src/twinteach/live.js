/**
 * SF-TTL-001 — TwinTeach Live (working co-teaching runtime)
 * Teacher remains instructional authority; AI proposes only; class-visible
 * actions require approval; one-tap disable restores manual fallback.
 * STATUS: SOFTWARE WORKING FEATURE — not production-approved; not a patent grant.
 */

export const LESSON_STATES = Object.freeze([
  'PREPARE',
  'OPEN',
  'TEACH',
  'PROPOSE',
  'APPROVE',
  'CONDUCT',
  'REFLECT',
  'CLOSE',
  'MANUAL_FALLBACK',
]);

export const PROHIBITED_ACTIONS = Object.freeze([
  'AUTONOMOUS_GRADING',
  'DISCIPLINE_LEARNER',
  'EMOTION_INFERENCE',
  'COVERT_RECORDING',
  'CLASS_VISIBLE_WITHOUT_APPROVAL',
  'TAKE_CLASSROOM_CONTROL',
]);

const ADVANCE = Object.freeze({
  PREPARE: 'OPEN',
  OPEN: 'TEACH',
  TEACH: 'PROPOSE',
  PROPOSE: 'APPROVE',
  APPROVE: 'CONDUCT',
  CONDUCT: 'REFLECT',
  REFLECT: 'CLOSE',
});

/**
 * Start a TwinTeach Live lesson session under teacher authority.
 */
export function startTwinTeachLesson(input = {}) {
  if (!input.teacher_id) {
    return { ok: false, reason: 'TEACHER_ID_REQUIRED', session: null };
  }
  if (!input.objective) {
    return { ok: false, reason: 'OBJECTIVE_REQUIRED', session: null };
  }

  const session = {
    schema_id: 'ScholaForgeTwinTeachSession/v1',
    feature_id: 'SF-TTL-001',
    lesson_id: input.lesson_id || `ttl-${Date.now()}`,
    teacher_id: input.teacher_id,
    objective: input.objective,
    state: 'PREPARE',
    ai_enabled: true,
    class_visible_without_approval: false,
    proposals: [],
    overrides: [],
    receipts: [],
    sensing: {
      permitted: Array.isArray(input.permitted_sensors) ? [...input.permitted_sensors] : [],
      active: false,
      covert_recording: false,
    },
    policy: {
      no_autonomous_grading: true,
      no_discipline: true,
      no_emotion_inference: true,
      teacher_is_authority: true,
      emergency_disable_available: true,
    },
    created_at_utc: new Date().toISOString(),
    production_approved: false,
  };

  appendReceipt(session, { event: 'LESSON_PREPARED', teacher_id: input.teacher_id });
  return { ok: true, session };
}

/**
 * Advance lesson state machine. Teacher confirmation required to OPEN.
 */
export function advanceLesson(session, opts = {}) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  if (session.state === 'MANUAL_FALLBACK') {
    return { ok: false, reason: 'AI_DISABLED_MANUAL_FALLBACK', session };
  }
  if (session.state === 'CLOSE') {
    return { ok: false, reason: 'LESSON_CLOSED', session };
  }

  if (session.state === 'PREPARE' && opts.teacher_confirm !== true) {
    return { ok: false, reason: 'TEACHER_CONFIRM_REQUIRED_TO_OPEN', session };
  }

  if (session.state === 'OPEN') {
    session.sensing.active = (session.sensing.permitted || []).length > 0;
  }

  const next = ADVANCE[session.state];
  if (!next) return { ok: false, reason: 'NO_ADVANCE_FROM_STATE', session };

  session.state = next;
  appendReceipt(session, { event: 'STATE_ADVANCED', state: session.state });
  return { ok: true, session };
}

/**
 * AI proposes support. Never class-visible until teacher approval.
 */
export function proposeAssistance(session, proposal = {}) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  if (!session.ai_enabled || session.state === 'MANUAL_FALLBACK') {
    return { ok: false, reason: 'AI_DISABLED', proposal: null };
  }
  if (!['TEACH', 'PROPOSE', 'APPROVE', 'CONDUCT'].includes(session.state)) {
    return { ok: false, reason: 'PROPOSALS_NOT_ALLOWED_IN_STATE', proposal: null };
  }

  const action = proposal.action || 'SUGGEST_EXPLANATION';
  if (PROHIBITED_ACTIONS.includes(action) || isProhibitedIntent(proposal)) {
    appendReceipt(session, { event: 'PROPOSAL_BLOCKED', action, reason: 'PROHIBITED_ACTION' });
    return {
      ok: false,
      fail_closed: true,
      reason: 'PROHIBITED_ACTION',
      proposal: null,
    };
  }

  if (session.state === 'TEACH') session.state = 'PROPOSE';

  const item = {
    proposal_id: `prop-${session.proposals.length + 1}`,
    action,
    text: proposal.text || 'Alternative explanation available.',
    sources: Array.isArray(proposal.sources) ? proposal.sources : [],
    source_visible: true,
    class_visible: false,
    status: 'AWAITING_TEACHER',
    created_at_utc: new Date().toISOString(),
  };
  session.proposals.push(item);
  appendReceipt(session, {
    event: 'PROPOSAL_CREATED',
    proposal_id: item.proposal_id,
    class_visible: false,
  });

  return { ok: true, proposal: item, session };
}

/**
 * Teacher accepts, edits, delays, or rejects a proposal.
 */
export function resolveProposal(session, proposalId, decision = {}) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  const item = session.proposals.find((p) => p.proposal_id === proposalId);
  if (!item) return { ok: false, reason: 'PROPOSAL_NOT_FOUND' };
  if (item.status !== 'AWAITING_TEACHER') {
    return { ok: false, reason: 'PROPOSAL_ALREADY_RESOLVED', proposal: item };
  }

  const verdict = decision.verdict || 'reject';
  if (!decision.teacher_id || decision.teacher_id !== session.teacher_id) {
    return { ok: false, reason: 'TEACHER_AUTHORITY_REQUIRED' };
  }

  if (verdict === 'accept' || verdict === 'edit') {
    item.status = verdict === 'edit' ? 'EDITED_APPROVED' : 'APPROVED';
    if (verdict === 'edit' && decision.edited_text) item.text = decision.edited_text;
    item.class_visible = decision.make_class_visible === true;
    item.approved_by = decision.teacher_id;
    item.approved_at_utc = new Date().toISOString();
    session.state = 'APPROVE';
    session.overrides.push({
      type: 'TEACHER_APPROVAL',
      proposal_id: proposalId,
      at: item.approved_at_utc,
    });
    appendReceipt(session, {
      event: 'PROPOSAL_APPROVED',
      proposal_id: proposalId,
      class_visible: item.class_visible,
    });
    return { ok: true, proposal: item, session };
  }

  if (verdict === 'delay') {
    item.status = 'DELAYED';
    appendReceipt(session, { event: 'PROPOSAL_DELAYED', proposal_id: proposalId });
    return { ok: true, proposal: item, session };
  }

  item.status = 'REJECTED';
  item.class_visible = false;
  appendReceipt(session, { event: 'PROPOSAL_REJECTED', proposal_id: proposalId });
  return { ok: true, proposal: item, session };
}

/**
 * Conduct only after teacher-approved proposal (or empty conduct for timing).
 */
export function conductApproved(session, proposalId) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  if (!session.ai_enabled) return { ok: false, reason: 'AI_DISABLED_MANUAL_FALLBACK' };

  const item = session.proposals.find((p) => p.proposal_id === proposalId);
  if (!item || !['APPROVED', 'EDITED_APPROVED'].includes(item.status)) {
    return { ok: false, reason: 'APPROVED_PROPOSAL_REQUIRED' };
  }

  session.state = 'CONDUCT';
  appendReceipt(session, {
    event: 'CONDUCT_STARTED',
    proposal_id: proposalId,
    class_visible: item.class_visible,
  });
  return { ok: true, session, conducted: item };
}

/**
 * Emergency / one-tap disable — lesson continues in manual mode.
 */
export function emergencyDisable(session, teacherId) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  if (!session.policy.emergency_disable_available) {
    return { ok: false, reason: 'EMERGENCY_DISABLE_UNAVAILABLE' };
  }

  session.ai_enabled = false;
  session.state = 'MANUAL_FALLBACK';
  session.sensing.active = false;
  for (const p of session.proposals) {
    if (p.status === 'AWAITING_TEACHER') {
      p.status = 'CANCELLED_BY_DISABLE';
      p.class_visible = false;
    }
  }
  session.overrides.push({
    type: 'EMERGENCY_DISABLE',
    teacher_id: teacherId || session.teacher_id,
    at: new Date().toISOString(),
  });
  appendReceipt(session, {
    event: 'EMERGENCY_DISABLE',
    manual_fallback: true,
    teacher_id: teacherId || session.teacher_id,
  });

  return {
    ok: true,
    session,
    manual_fallback: true,
    lesson_continues: true,
  };
}

/**
 * Close lesson: destroy ephemeral sensing flags; seal receipt.
 */
export function closeLesson(session) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  session.sensing.active = false;
  session.sensing.ephemeral_destroyed = true;
  session.state = 'CLOSE';
  appendReceipt(session, { event: 'LESSON_CLOSED', sealed: true });
  return {
    ok: true,
    receipt: lessonReceipt(session),
    session,
  };
}

export function lessonReceipt(session) {
  return {
    schema_id: 'ScholaForgeTwinTeachReceipt/v1',
    feature_id: 'SF-TTL-001',
    lesson_id: session.lesson_id,
    teacher_id: session.teacher_id,
    state: session.state,
    ai_enabled: session.ai_enabled,
    proposal_count: session.proposals.length,
    approved_count: session.proposals.filter((p) =>
      ['APPROVED', 'EDITED_APPROVED'].includes(p.status),
    ).length,
    class_visible_without_approval: session.proposals.some(
      (p) => p.class_visible && !['APPROVED', 'EDITED_APPROVED'].includes(p.status),
    ),
    override_count: session.overrides.length,
    manual_fallback: session.state === 'MANUAL_FALLBACK' || session.ai_enabled === false,
    sources_always_visible: session.proposals.every((p) => p.source_visible === true),
    production_approved: false,
    receipt_count: session.receipts.length,
  };
}

function isProhibitedIntent(proposal) {
  const text = String(proposal.text || '').toLowerCase();
  if (proposal.autonomous_grade === true) return true;
  if (proposal.discipline === true) return true;
  if (proposal.emotion_inference === true) return true;
  if (proposal.covert === true) return true;
  if (proposal.class_visible === true && proposal.skip_approval === true) return true;
  if (text.includes('final grade') && proposal.assign_grade === true) return true;
  return false;
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
