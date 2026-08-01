/**
 * Constitutional control plane — fail-closed authorization for the whole body.
 * STATUS: SOFTWARE MVP · DISCLOSURE_READY · FILING_NOT_AUTHORIZED
 */
import { evaluateInvariants } from './invariants.js';

/**
 * Authorize an operation under jurisdiction + human authority + purpose.
 */
export function authorize(request = {}, ctx = {}) {
  const missing = [];
  if (!request.purpose) missing.push('purpose');
  if (!ctx.jurisdiction_profile_id) missing.push('jurisdiction');
  if (!ctx.policy_id) missing.push('policy');

  if (missing.length) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'INV-03_MISSING_' + missing.join('_').toUpperCase(),
      decision: 'ABSTAIN',
      may_automate: false,
      advisory_only: true,
    };
  }

  const consequential = request.consequential === true;
  const humanOk = ctx.human_authority === true;
  if (consequential && !humanOk) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'INV-01_HUMAN_AUTHORITY_REQUIRED',
      decision: 'DENY',
      may_automate: false,
      advisory_only: true,
    };
  }

  if (request.apply_ai_grade_as_official === true) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'INV-02_SHADOW_GRADE_ONLY',
      decision: 'DENY',
      may_automate: false,
      advisory_only: true,
      shadow_grade_required: true,
    };
  }

  if (request.portal_write === true && ctx.capability_grant !== true) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'INV-10_NO_CAPABILITY_GRANT',
      decision: 'DENY',
    };
  }

  const inv = evaluateInvariants({
    consequential,
    human_authority: humanOk,
    apply_ai_grade_as_official: request.apply_ai_grade_as_official === true,
    missing_jurisdiction: false,
    missing_purpose: false,
    missing_authority: consequential && !humanOk,
    missing_policy: false,
    portal_write: request.portal_write === true,
    capability_grant: ctx.capability_grant === true,
    claim_filing_authorized: request.claim_filing_authorized === true,
    claim_novelty_confirmed: request.claim_novelty_confirmed === true,
    claim_production_from_blueprint: request.claim_production_from_blueprint === true,
    evidence_receipt: true,
  });

  if (!inv.ok) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'INVARIANT_VIOLATION',
      violations: inv.violations,
      decision: 'DENY',
    };
  }

  return {
    ok: true,
    fail_closed: false,
    reason: 'AUTHORIZED',
    decision: consequential ? 'PERMIT_WITH_HUMAN' : 'PERMIT',
    may_automate: !consequential && request.allow_automate === true,
    advisory_only: request.advisory_only !== false && !consequential,
    jurisdiction_profile_id: ctx.jurisdiction_profile_id,
    policy_id: ctx.policy_id,
    filing_authorized: false,
    novelty_confirmed: false,
  };
}

/**
 * Compile a signed execution contract (P0 skeleton — signature is local hash stub).
 */
export function compileExecutionContract(input = {}) {
  const auth = authorize(input.request || {}, input.ctx || {});
  if (!auth.ok) {
    return { ok: false, reason: auth.reason, contract: null, auth };
  }

  const contract = {
    schema_id: 'ScholaForgeExecutionContract/v1',
    disclosure_id: 'SYS-COMBO-001',
    purpose: input.request.purpose,
    permitted_assistance: input.permitted_assistance || ['nudge', 'socratic_question'],
    prohibited_assistance: input.prohibited_assistance || ['direct_solution'],
    data_boundary: input.data_boundary || 'tenant_local',
    model_boundary: input.model_boundary || 'contract_pinned',
    teacher_authority_id: input.ctx?.teacher_id || null,
    evidence_required: true,
    stop_conditions: input.stop_conditions || ['teacher_disable', 'policy_deny', 'network_fail'],
    offline_fallback: input.offline_fallback !== false,
    shadow_grade_only: true,
    expiry_utc: input.expiry_utc || null,
    jurisdiction_profile_id: auth.jurisdiction_profile_id,
    policy_id: auth.policy_id,
    created_at_utc: new Date().toISOString(),
    filing_authorized: false,
  };

  return { ok: true, contract, auth };
}
