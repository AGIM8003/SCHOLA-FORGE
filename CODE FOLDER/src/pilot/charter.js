/**
 * SF-PIL-001 — Controlled Low-Risk Pilot Envelope (stub)
 * STATUS: SOFTWARE MVP — draft/sign metadata only; never implies production readiness.
 */

export const DEFAULT_ALLOWLIST = Object.freeze([
  'A0_EXPLANATORY',
  'A1_TEACHER_SUPPORT',
  'A2_LEARNER_PRACTICE',
  'RETRIEVAL_GOVERNANCE',
  'EVIDENCE_SPINE_SHADOW',
  'INSIGHT_SHADOW',
  'TEACHER_SUPPORT_DRAFT',
]);

export const DEFAULT_DENYLIST = Object.freeze([
  'A4_CONSEQUENTIAL',
  'OFFICIAL_GRADE_AUTOMATION',
  'ADMISSIONS_AUTOMATION',
  'PLACEMENT_AUTOMATION',
  'DISCIPLINE_AUTOMATION',
  'CERTIFICATION_AUTOMATION',
  'HEALTH_INFERENCE',
  'CAMERA_SECUREBOARD',
  'COMMERCIAL_LEARNER_DATA_SALE',
  'UNSUPERVISED_EXTERNAL_MENTOR',
]);

/**
 * Create a draft pilot envelope. Software never auto-activates production.
 */
export function createPilotEnvelope(input = {}) {
  const envelope = {
    schema_id: 'ScholaForgePilotEnvelope/v1',
    feature_id: 'SF-PIL-001',
    pilot_id: input.pilot_id || `pilot-${Date.now()}`,
    community: input.community || null,
    school_type: input.school_type || null,
    education_level: input.education_level || null,
    age_range: input.age_range || null,
    sites: input.sites || [],
    duration_weeks: input.duration_weeks ?? null,
    capability_allowlist: input.capability_allowlist || [...DEFAULT_ALLOWLIST],
    capability_denylist: input.capability_denylist || [...DEFAULT_DENYLIST],
    stop_rules: input.stop_rules || [
      'accessibility_blocker',
      'data_incident',
      'staff_capacity_breach',
      'harm_threshold_breach',
      'scope_creep_attempt',
    ],
    manual_fallback_required: true,
    shadow_mode_default: true,
    cameras_allowed: false,
    official_grade_replacement_allowed: false,
    status: 'DRAFT',
    signed: false,
    production_activatable: false,
    created_at_utc: new Date().toISOString(),
  };

  const completeness = assessPilotCompleteness(envelope);
  return {
    ok: true,
    envelope,
    completeness,
    pilot_ready: false,
    activation_allowed: false,
  };
}

export function assessPilotCompleteness(envelope = {}) {
  const missing = [];
  for (const key of [
    'community',
    'school_type',
    'education_level',
    'age_range',
    'duration_weeks',
  ]) {
    if (envelope[key] == null || envelope[key] === '') missing.push(key);
  }
  if (!Array.isArray(envelope.sites) || envelope.sites.length === 0) missing.push('sites');
  if (!Array.isArray(envelope.capability_allowlist) || envelope.capability_allowlist.length === 0) {
    missing.push('capability_allowlist');
  }
  return {
    complete: missing.length === 0,
    missing,
    signed: envelope.status === 'SIGNED' && envelope.signed === true,
    reason: missing.length
      ? 'INCOMPLETE_PILOT_ENVELOPE'
      : envelope.signed
        ? 'SIGNED_COMPLETE_NOT_PRODUCTION'
        : 'DRAFT_AWAITING_HUMAN_SIGNATURE',
  };
}

export function attemptSignPilot(envelope, signature = {}) {
  if (!signature?.human_signer_id || !signature?.governing_body_role) {
    return { ok: false, reason: 'GOVERNING_BODY_SIGNER_REQUIRED', envelope };
  }
  const completeness = assessPilotCompleteness(envelope);
  if (!completeness.complete) {
    return { ok: false, reason: 'INCOMPLETE_PILOT_ENVELOPE', missing: completeness.missing, envelope };
  }
  // Deny if denylist missing critical prohibitions
  const deny = new Set(envelope.capability_denylist || []);
  for (const required of ['OFFICIAL_GRADE_AUTOMATION', 'A4_CONSEQUENTIAL', 'CAMERA_SECUREBOARD']) {
    if (!deny.has(required)) {
      return { ok: false, reason: `DENYLIST_MISSING_${required}`, envelope };
    }
  }
  return {
    ok: true,
    reason: 'PILOT_CHARTER_SIGNED_METADATA_ONLY',
    envelope: {
      ...envelope,
      status: 'SIGNED',
      signed: true,
      signature: {
        human_signer_id: signature.human_signer_id,
        governing_body_role: signature.governing_body_role,
        signed_at_utc: signature.signed_at_utc || new Date().toISOString(),
      },
      production_activatable: false,
      pilot_ready: false,
    },
    pilot_ready: false,
    production_activatable: false,
  };
}

export function isCapabilityAllowed(envelope, capability) {
  const deny = new Set(envelope?.capability_denylist || DEFAULT_DENYLIST);
  if (deny.has(capability)) {
    return { allowed: false, reason: 'DENYLISTED' };
  }
  const allow = new Set(envelope?.capability_allowlist || DEFAULT_ALLOWLIST);
  if (!allow.has(capability)) {
    return { allowed: false, reason: 'NOT_ON_ALLOWLIST' };
  }
  if (envelope?.status !== 'SIGNED' || envelope?.signed !== true) {
    return { allowed: false, reason: 'PILOT_NOT_SIGNED', designable: true };
  }
  return { allowed: true, reason: 'OK' };
}

/**
 * Convert signed pilot envelope into policy opts used by isAssuranceAllowed.
 */
export function pilotOptsFromEnvelope(envelope) {
  return {
    pilot_charter_signed: envelope?.status === 'SIGNED' && envelope?.signed === true,
    pilot_allows_a3: false,
    pilot_id: envelope?.pilot_id || null,
  };
}
