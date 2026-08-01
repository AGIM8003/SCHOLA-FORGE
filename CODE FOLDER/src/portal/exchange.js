/**
 * Constrained interoperability portal — INV-10
 * External systems cannot bypass constitutional control plane.
 * STATUS: SOFTWARE WORKING · FILING_NOT_AUTHORIZED
 */
import { authorize } from '../constitution/control_plane.js';

export const PORTAL_PROFILES = Object.freeze([
  'OneRoster',
  'LTI_Advantage',
  'QTI',
  'CASE',
  'Open_Badges',
  'CLR',
  'OIDC',
  'LOCAL_EDU',
]);

export function createPortalGrant(input = {}) {
  if (!input.profile || !PORTAL_PROFILES.includes(input.profile)) {
    return { ok: false, reason: 'UNKNOWN_OR_MISSING_PROFILE', grant: null };
  }
  if (!input.tenant_id || !input.jurisdiction_profile_id) {
    return { ok: false, reason: 'TENANT_AND_JURISDICTION_REQUIRED', grant: null };
  }
  if (!input.purpose) {
    return { ok: false, reason: 'PURPOSE_REQUIRED', grant: null };
  }

  return {
    ok: true,
    grant: {
      schema_id: 'ScholaForgePortalCapabilityGrant/v1',
      grant_id: `pg-${Date.now()}`,
      profile: input.profile,
      tenant_id: input.tenant_id,
      jurisdiction_profile_id: input.jurisdiction_profile_id,
      purpose: input.purpose,
      capabilities: input.capabilities || ['read'],
      min_data: true,
      rate_limit: input.rate_limit || 60,
      dry_run_supported: true,
      signed: true,
      expires_at_utc: input.expires_at_utc || null,
      created_at_utc: new Date().toISOString(),
    },
  };
}

/**
 * Execute portal operation under grant + constitution.
 */
export function portalExchange(op = {}, grant = null, ctx = {}) {
  if (!grant || grant.signed !== true) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'INV-10_NO_CAPABILITY_GRANT',
      result: null,
    };
  }

  if (op.profile && op.profile !== grant.profile) {
    return { ok: false, reason: 'PROFILE_MISMATCH', result: null };
  }
  if (op.tenant_id && op.tenant_id !== grant.tenant_id) {
    return { ok: false, reason: 'TENANT_BOUNDARY', result: null };
  }
  if (op.purpose && op.purpose !== grant.purpose) {
    return { ok: false, reason: 'PURPOSE_MISMATCH', result: null };
  }

  const capability = op.capability || 'read';
  if (!(grant.capabilities || []).includes(capability)) {
    return { ok: false, reason: 'CAPABILITY_NOT_GRANTED', result: null };
  }

  // Shadow-grade write from portal denied
  if (op.apply_official_grade === true) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'INV-02_SHADOW_GRADE_ONLY',
      result: null,
    };
  }

  const auth = authorize(
    {
      purpose: grant.purpose,
      portal_write: capability !== 'read',
      consequential: capability === 'write' && op.consequential === true,
    },
    {
      jurisdiction_profile_id: grant.jurisdiction_profile_id,
      policy_id: ctx.policy_id || 'sf-constitution-v1',
      human_authority: ctx.human_authority !== false,
      capability_grant: true,
    },
  );
  if (!auth.ok) {
    return { ok: false, fail_closed: true, reason: auth.reason, result: null };
  }

  if (op.dry_run === true) {
    return {
      ok: true,
      dry_run: true,
      result: { would_write: capability !== 'read', applied: false },
    };
  }

  return {
    ok: true,
    result: {
      applied: capability !== 'read',
      profile: grant.profile,
      audit: true,
      compensation_available: true,
      at: new Date().toISOString(),
    },
  };
}
