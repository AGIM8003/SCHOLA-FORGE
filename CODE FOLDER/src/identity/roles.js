/**
 * Identity and role boundary service (working)
 * Proven: purpose-bound roles; no anonymous consequential action.
 */

export const ROLES = Object.freeze([
  'learner',
  'teacher',
  'family',
  'administrator',
  'safeguarding',
  'dpo',
  'auditor',
  'system',
]);

export function createPrincipal(input = {}) {
  if (!input.principal_id) return { ok: false, reason: 'PRINCIPAL_ID_REQUIRED' };
  if (!ROLES.includes(input.role)) return { ok: false, reason: 'UNKNOWN_ROLE' };
  return {
    ok: true,
    principal: {
      principal_id: input.principal_id,
      role: input.role,
      tenant_id: input.tenant_id || null,
      purposes: input.purposes || [],
      anonymous: false,
    },
  };
}

export function authorizeAction(principal, action = {}) {
  if (!principal) return { allowed: false, reason: 'NO_PRINCIPAL' };
  if (principal.anonymous) return { allowed: false, reason: 'ANONYMOUS_FORBIDDEN' };
  if (action.tenant_id && principal.tenant_id && action.tenant_id !== principal.tenant_id) {
    return { allowed: false, reason: 'CROSS_TENANT' };
  }
  if (action.purpose && principal.purposes?.length && !principal.purposes.includes(action.purpose)) {
    return { allowed: false, reason: 'PURPOSE_NOT_GRANTED' };
  }

  const matrix = {
    learner: ['mysaga_write', 'practice_attempt', 'rights_request'],
    teacher: ['teacher_draft', 'tutor_disable', 'insight_shadow', 'independence_review'],
    family: ['rights_request', 'family_notice_read'],
    administrator: ['pilot_view', 'jurisdiction_view'],
    safeguarding: ['safeguarding_case'],
    dpo: ['rights_decide', 'ropa_view'],
    auditor: ['audit_read'],
    system: ['retrieval', 'evidence_spine_append'],
  };

  const allowedActs = matrix[principal.role] || [];
  if (!allowedActs.includes(action.action)) {
    return { allowed: false, reason: 'ROLE_CANNOT_PERFORM_ACTION' };
  }
  return { allowed: true, reason: 'OK' };
}
