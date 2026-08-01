/**
 * ScholaForge policy gates — assurance classes + decision lock.
 * STATUS: SOFTWARE MVP — mirrors blueprint PART I-A.9 and PART I decision-lock.
 */

export const ASSURANCE_CLASSES = Object.freeze([
  'A0_EXPLANATORY',
  'A1_TEACHER_SUPPORT',
  'A2_LEARNER_PRACTICE',
  'A3_ASSESSMENT_SUPPORT',
  'A4_CONSEQUENTIAL',
]);

export function isAssuranceAllowed(assuranceClass, opts = {}) {
  const a = String(assuranceClass || '');
  if (!ASSURANCE_CLASSES.includes(a)) {
    return { allowed: false, reason: 'UNKNOWN_ASSURANCE_CLASS' };
  }
  if (a === 'A4_CONSEQUENTIAL') {
    return { allowed: false, reason: 'A4_NOT_APPROVED_IN_V15' };
  }
  if (a === 'A3_ASSESSMENT_SUPPORT' && opts.pilot_allows_a3 !== true) {
    return { allowed: false, reason: 'A3_OUTSIDE_INITIAL_PILOT' };
  }
  if (['A1_TEACHER_SUPPORT', 'A2_LEARNER_PRACTICE'].includes(a) && opts.pilot_charter_signed !== true) {
    return { allowed: false, reason: 'PILOT_CHARTER_REQUIRED', conditionally_designable: true };
  }
  return { allowed: true, reason: 'OK' };
}

export function evaluateDecisionLock(state = {}) {
  const missing = [];
  const required = [
    ['community', 'competent Belgian education Community'],
    ['school_type', 'school type'],
    ['curriculum_authority', 'curriculum authority'],
    ['controller_role', 'controller or processor role'],
    ['lawful_basis', 'lawful basis'],
    ['safeguarding_authority', 'safeguarding authority'],
    ['security_owner', 'security owner'],
    ['rollback_owner', 'rollback owner'],
  ];
  for (const [key, label] of required) {
    if (!state[key]) missing.push({ key, label });
  }
  const locked = missing.length > 0;
  return {
    schema_id: 'ScholaForgeDecisionLock/v1',
    decision_lock: locked,
    missing,
    prevents_activation: locked,
  };
}

/**
 * AI grading prohibition (SF-REQ-0001 / SF-POLICY-031).
 */
export function assertNoFinalGradeFromAi(payload = {}) {
  if (payload.final_grade != null || payload.ai_assigns_final_grade === true) {
    return {
      ok: false,
      reason: 'AI_CANNOT_ASSIGN_FINAL_GRADE',
      policy_refs: ['SF-REQ-0001', 'SF-POLICY-031'],
    };
  }
  return { ok: true, reason: 'OK' };
}
