/**
 * Fourteen-stage organism metabolism (SYS-COMBO-001).
 * STATUS: SOFTWARE MVP skeleton — organs cooperate under constitutional plane.
 */

export const METABOLISM_STAGES = Object.freeze([
  'INGEST',
  'QUALIFY',
  'AUTHORIZE',
  'CONTRACT',
  'ASSIST',
  'ORCHESTRATE',
  'OBSERVE',
  'VERIFY',
  'ATTEST',
  'STORE',
  'DELETE_OR_RETAIN',
  'EXCHANGE',
  'DEGRADE',
  'RECOVER',
]);

export function createMetabolismSession(input = {}) {
  return {
    schema_id: 'ScholaForgeOrganismMetabolism/v1',
    disclosure_id: 'SYS-COMBO-001',
    session_id: input.session_id || `meta-${Date.now()}`,
    stage: 'INGEST',
    stages_completed: [],
    receipts: [],
    degraded: false,
    ai_enabled: true,
    filing_authorized: false,
    novelty_confirmed: false,
    production_approved: false,
    created_at_utc: new Date().toISOString(),
  };
}

export function advanceMetabolism(session, stageResult = {}) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  if (session.degraded && session.stage !== 'DEGRADE' && session.stage !== 'RECOVER') {
    return { ok: false, reason: 'MUST_RECOVER_FROM_DEGRADED', session };
  }

  const idx = METABOLISM_STAGES.indexOf(session.stage);
  if (idx < 0) return { ok: false, reason: 'UNKNOWN_STAGE', session };

  if (stageResult.fail_closed === true) {
    session.degraded = true;
    session.stage = 'DEGRADE';
    append(session, { event: 'FAIL_CLOSED_DEGRADE', reason: stageResult.reason || 'FAIL_CLOSED' });
    return { ok: false, fail_closed: true, session, reason: stageResult.reason || 'FAIL_CLOSED' };
  }

  session.stages_completed.push(session.stage);
  append(session, { event: 'STAGE_COMPLETE', stage: session.stage, detail: stageResult.detail || null });

  if (idx === METABOLISM_STAGES.length - 1) {
    return { ok: true, session, complete: true };
  }

  session.stage = METABOLISM_STAGES[idx + 1];
  return { ok: true, session, complete: false };
}

export function forceDegrade(session, reason) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  session.degraded = true;
  session.ai_enabled = false;
  session.stage = 'DEGRADE';
  append(session, { event: 'DEGRADE', reason: reason || 'FORCED', manual_teaching_available: true });
  return { ok: true, session, manual_teaching_available: true };
}

export function recover(session, opts = {}) {
  if (!session) return { ok: false, reason: 'NO_SESSION' };
  if (opts.integrity_ok !== true) {
    return { ok: false, reason: 'INTEGRITY_REQUIRED', session };
  }
  session.stage = 'RECOVER';
  session.degraded = false;
  append(session, { event: 'RECOVER', anti_resurrection_check: opts.anti_resurrection_check === true });
  session.stages_completed.push('RECOVER');
  return { ok: true, session };
}

function append(session, payload) {
  session.receipts.push({
    seq: session.receipts.length + 1,
    at: new Date().toISOString(),
    ...payload,
  });
}
