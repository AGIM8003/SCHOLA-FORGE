/**
 * SF-JUR-001 — Belgian Education Jurisdiction Profile Compiler (stub)
 * STATUS: SOFTWARE MVP — never auto-signs; AI cannot determine legal applicability.
 */

export const CANONICAL_PROFILES = Object.freeze(['BE-FL-EDU', 'BE-FR-EDU', 'BE-DE-EDU']);

export const REQUIRED_FIELDS = Object.freeze([
  'profile_id',
  'community_authority',
  'school_type',
  'education_level',
  'funding_status',
  'official_languages',
  'curriculum_authority',
  'inspection_authority',
  'qualification_authority',
  'staff_framework',
  'records_rules',
  'complaints_authority',
  'appeals_authority',
  'data_protection_role',
  'safeguarding_referral_map',
  'health_and_food_authorities',
  'procurement_regime',
  'reviewed_by',
  'review_date',
  'expiry_date',
  'status',
]);

const COMMUNITY_DEFAULTS = Object.freeze({
  'BE-FL-EDU': {
    community_label: 'Flemish Community',
    official_languages: ['nl'],
    notes: 'Requires Flemish education authority, curriculum/attainment targets, and inspection route.',
  },
  'BE-FR-EDU': {
    community_label: 'French Community',
    official_languages: ['fr'],
    notes: 'Requires French-Community education authority, curriculum route, and inspection route.',
  },
  'BE-DE-EDU': {
    community_label: 'German-speaking Community',
    official_languages: ['de'],
    notes: 'Requires German-speaking Community education authority, curriculum route, and inspection route.',
  },
});

export function listCanonicalProfiles() {
  return CANONICAL_PROFILES.map((id) => ({
    profile_id: id,
    ...COMMUNITY_DEFAULTS[id],
    status: 'DECISION_LOCK',
    production_activatable: false,
  }));
}

/**
 * Compile a draft jurisdiction profile. Never returns SIGNED from software alone.
 */
export function compileJurisdictionProfile(input = {}) {
  const profile_id = input.profile_id;
  if (!CANONICAL_PROFILES.includes(profile_id)) {
    return {
      ok: false,
      reason: 'UNKNOWN_OR_UNIVERSAL_BELGIAN_PROFILE_FORBIDDEN',
      allowed_profiles: [...CANONICAL_PROFILES],
      profile: null,
    };
  }

  const defaults = COMMUNITY_DEFAULTS[profile_id];
  const profile = {
    schema_id: 'ScholaForgeJurisdictionProfile/v1',
    feature_id: 'SF-JUR-001',
    profile_id,
    community_label: defaults.community_label,
    community_authority: input.community_authority || null,
    school_type: input.school_type || null,
    education_level: input.education_level || null,
    funding_status: input.funding_status || null,
    official_languages: input.official_languages || defaults.official_languages,
    curriculum_authority: input.curriculum_authority || null,
    inspection_authority: input.inspection_authority || null,
    qualification_authority: input.qualification_authority || null,
    staff_framework: input.staff_framework || null,
    records_rules: input.records_rules || null,
    complaints_authority: input.complaints_authority || null,
    appeals_authority: input.appeals_authority || null,
    data_protection_role: input.data_protection_role || null,
    safeguarding_referral_map: input.safeguarding_referral_map || null,
    health_and_food_authorities: input.health_and_food_authorities || null,
    procurement_regime: input.procurement_regime || null,
    reviewed_by: input.reviewed_by || null,
    review_date: input.review_date || null,
    expiry_date: input.expiry_date || null,
    // Software may only emit DRAFT. Human signature is external.
    status: 'DRAFT',
    notes: defaults.notes,
    compiled_at_utc: new Date().toISOString(),
  };

  const completeness = assessProfileCompleteness(profile);
  return {
    ok: true,
    profile,
    completeness,
    decision_lock: !completeness.complete || profile.status !== 'SIGNED',
    production_activatable: false,
    ai_may_sign: false,
  };
}

export function assessProfileCompleteness(profile = {}) {
  const missing = [];
  for (const field of REQUIRED_FIELDS) {
    const v = profile[field];
    if (v == null || v === '' || (Array.isArray(v) && v.length === 0)) {
      missing.push(field);
    }
  }
  // status DRAFT is present but not sufficient for activation
  const signed = profile.status === 'SIGNED';
  return {
    complete: missing.length === 0,
    missing,
    signed,
    activatable: missing.length === 0 && signed,
    reason: missing.length
      ? 'INCOMPLETE_PROFILE'
      : signed
        ? 'SIGNED_COMPLETE'
        : 'DRAFT_AWAITING_HUMAN_SIGNATURE',
  };
}

/**
 * Attempt to mark signed — software rejects; requires external human receipt.
 */
export function attemptSignProfile(profile, signature = {}) {
  if (!signature?.human_signer_id || !signature?.qualified_role) {
    return {
      ok: false,
      reason: 'HUMAN_SIGNER_REQUIRED',
      profile_status: profile?.status || null,
    };
  }
  // Even with signer metadata, this MVP only records a pending signature package.
  // It does not flip production gates.
  return {
    ok: true,
    reason: 'SIGNATURE_PACKAGE_RECORDED_NOT_PRODUCTION_ACTIVATION',
    profile: {
      ...profile,
      status: 'SIGNED',
      signature: {
        human_signer_id: signature.human_signer_id,
        qualified_role: signature.qualified_role,
        signed_at_utc: signature.signed_at_utc || new Date().toISOString(),
        note: 'Software records signature metadata only; institutional authority remains external.',
      },
    },
    production_activatable: false,
  };
}

export function profileToDecisionLockState(profile) {
  if (!profile) {
    return {
      community: null,
      school_type: null,
      curriculum_authority: null,
    };
  }
  return {
    community: profile.profile_id || null,
    school_type: profile.school_type || null,
    curriculum_authority: profile.curriculum_authority || null,
    controller_role: profile.data_protection_role || null,
    safeguarding_authority: profile.safeguarding_referral_map || null,
  };
}
