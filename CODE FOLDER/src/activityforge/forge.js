/**
 * SF-AFG-001 — ActivityForge (working constrained activity engine)
 * Generates structured activity candidates, validates constraints,
 * requires teacher approval; never silently overwrites published versions.
 * STATUS: SOFTWARE WORKING FEATURE — not production-approved; not a patent grant.
 */

export const ACTIVITY_STATUSES = Object.freeze([
  'draft',
  'review',
  'approved',
  'published',
  'retired',
]);

const UNSAFE_MATERIALS = Object.freeze([
  'open_flame',
  'unsupervised_chemicals',
  'sharp_tools_without_supervision',
]);

/**
 * Create structured activity candidates from teacher intent + constraints.
 */
export function forgeActivities(input = {}) {
  if (!input.teacher_id) {
    return { ok: false, reason: 'TEACHER_ID_REQUIRED', candidates: [] };
  }
  if (!input.objective) {
    return { ok: false, reason: 'OBJECTIVE_REQUIRED', candidates: [] };
  }

  const constraints = normalizeConstraints(input.constraints || {});
  const base = buildCandidate(input, constraints, 'A');
  const offline = buildCandidate(input, { ...constraints, delivery_modes: ['offline'] }, 'B');
  offline.title = `${offline.title} (offline fallback)`;
  offline.delivery_modes = ['offline'];
  offline.device_requirements = [];
  offline.fallback = { mode: 'paper_pencil', required: true };

  const candidates = [base, offline].map((c) => validateActivity(c, constraints));
  const accepted = candidates.filter((c) => c.validation.ok);
  const rejected = candidates.filter((c) => !c.validation.ok);

  return {
    ok: accepted.length > 0,
    reason: accepted.length ? 'CANDIDATES_READY' : 'ALL_CANDIDATES_REJECTED',
    feature_id: 'SF-AFG-001',
    teacher_approval_required: true,
    publish_allowed: false,
    candidates: accepted,
    rejected,
    explainability: {
      why_proposed: 'Matched curriculum objective, duration, class size, and accessibility constraints.',
      sources: input.sources || [],
      assumptions: constraints.assumptions || [],
      unsatisfied: rejected.flatMap((r) => r.validation.failures),
      teacher_review_required: true,
    },
    production_approved: false,
  };
}

/**
 * Deterministic validators — reject impossible, unsafe, or policy-conflicting activities.
 */
export function validateActivity(activity, constraints = {}) {
  const failures = [];
  const c = { ...normalizeConstraints(constraints), ...activity };

  if (!activity.learning_objectives?.length && !activity.objective) {
    failures.push('MISSING_OBJECTIVE');
  }
  if (!Number.isFinite(activity.duration_minutes) || activity.duration_minutes <= 0) {
    failures.push('INVALID_DURATION');
  }
  if (constraints.duration_minutes && activity.duration_minutes > constraints.duration_minutes) {
    failures.push('EXCEEDS_AVAILABLE_TIME');
  }
  if (constraints.class_size && activity.class_size?.max < constraints.class_size) {
    failures.push('CLASS_SIZE_TOO_SMALL');
  }
  if (constraints.no_internet === true) {
    const needsNet =
      (activity.device_requirements || []).includes('internet') ||
      (activity.delivery_modes || []).includes('online_only');
    if (needsNet) failures.push('REQUIRES_INTERNET_WHEN_FORBIDDEN');
  }
  for (const m of activity.materials || []) {
    if (UNSAFE_MATERIALS.includes(m)) failures.push(`UNSAFE_MATERIAL:${m}`);
  }
  if (constraints.wheelchair_access === true) {
    const space = activity.space_requirements || [];
    if (space.includes('stairs_only') || space.includes('narrow_aisle_only')) {
      failures.push('INACCESSIBLE_SPACE');
    }
    if (!(activity.accessibility_adaptations || []).length) {
      failures.push('MISSING_ACCESSIBILITY_ADAPTATIONS');
    }
  }
  if (constraints.reading_support === true) {
    const a11y = activity.accessibility_adaptations || [];
    if (!a11y.some((a) => String(a).includes('reading') || String(a).includes('audio'))) {
      failures.push('MISSING_READING_SUPPORT');
    }
  }
  if (activity.assign_official_grade === true) {
    failures.push('OFFICIAL_GRADE_AUTOMATION_FORBIDDEN');
  }
  if (!activity.fallback) {
    failures.push('MISSING_FALLBACK');
  }
  if (!activity.safety_constraints?.length) {
    failures.push('MISSING_SAFETY_NOTES');
  }

  const validation = {
    ok: failures.length === 0,
    failures,
    checked_at_utc: new Date().toISOString(),
  };

  return {
    ...activity,
    validation,
    status: validation.ok ? activity.status || 'draft' : 'rejected',
  };
}

/**
 * Teacher selects/edits a candidate — still not published.
 */
export function approveActivity(candidate, approval = {}) {
  if (!candidate || candidate.validation?.ok !== true) {
    return { ok: false, reason: 'INVALID_OR_FAILED_CANDIDATE', activity: null };
  }
  if (!approval.teacher_id) {
    return { ok: false, reason: 'TEACHER_ID_REQUIRED', activity: null };
  }
  if (approval.approved !== true) {
    return {
      ok: true,
      reason: 'REJECTED_BY_TEACHER',
      activity: { ...candidate, status: 'retired', rejected_by: approval.teacher_id },
    };
  }

  const activity = {
    ...candidate,
    ...(approval.edits || {}),
    status: 'approved',
    approved_by: approval.teacher_id,
    approved_at_utc: approval.approved_at_utc || new Date().toISOString(),
    teacher_approval_required: false,
    publish_allowed: false,
    version: candidate.version || '0.1.0',
  };

  // Re-validate after edits
  const re = validateActivity(activity, approval.constraints || {});
  if (!re.validation.ok) {
    return { ok: false, reason: 'EDIT_FAILED_VALIDATION', activity: re };
  }

  return {
    ok: true,
    reason: 'TEACHER_APPROVED',
    activity: re,
    note: 'Approved draft; publish still requires explicit publishActivity call.',
  };
}

/**
 * Publish creates a new version; never silently overwrites prior published.
 */
export function publishActivity(activity, library = [], opts = {}) {
  if (!activity || activity.status !== 'approved') {
    return { ok: false, reason: 'APPROVED_ACTIVITY_REQUIRED', library };
  }
  if (!opts.publisher_id) {
    return { ok: false, reason: 'PUBLISHER_ID_REQUIRED', library };
  }

  const prior = library.filter(
    (a) => a.activity_family_id === activity.activity_family_id && a.status === 'published',
  );
  const nextVersion = bumpVersion(activity.version || '0.1.0');
  const published = {
    ...activity,
    status: 'published',
    version: nextVersion,
    published_by: opts.publisher_id,
    published_at_utc: new Date().toISOString(),
    prior_versions_preserved: prior.map((p) => ({
      activity_id: p.activity_id,
      version: p.version,
    })),
    silent_overwrite: false,
  };

  // Retire prior published variants of same family (explicit, not silent)
  const updatedLibrary = library.map((a) => {
    if (a.activity_family_id === activity.activity_family_id && a.status === 'published') {
      return { ...a, status: 'retired', retired_reason: 'SUPERSEDED_BY_NEW_VERSION' };
    }
    return a;
  });
  updatedLibrary.push(published);

  return {
    ok: true,
    activity: published,
    library: updatedLibrary,
    silent_overwrite: false,
  };
}

function normalizeConstraints(raw) {
  return {
    duration_minutes: raw.duration_minutes ?? raw.duration ?? null,
    class_size: raw.class_size ?? null,
    no_internet: raw.no_internet === true,
    wheelchair_access: raw.wheelchair_access === true,
    reading_support: raw.reading_support === true,
    age_range: raw.age_range || null,
    assumptions: raw.assumptions || [],
  };
}

function buildCandidate(input, constraints, suffix) {
  const duration = constraints.duration_minutes || input.duration_minutes || 35;
  const classSize = constraints.class_size || input.class_size || 24;
  const a11y = [];
  if (constraints.reading_support) {
    a11y.push('reading_support_cards', 'audio_read_aloud_option');
  }
  if (constraints.wheelchair_access) {
    a11y.push('step_free_routes', 'reachable_station_heights');
  }

  const delivery =
    constraints.delivery_modes ||
    (constraints.no_internet ? ['offline', 'print'] : ['offline', 'device_optional']);

  return {
    schema_id: 'ScholaForgeActivity/v1',
    feature_id: 'SF-AFG-001',
    activity_id: `afg-${Date.now()}-${suffix}`,
    activity_family_id: input.activity_family_id || `fam-${input.objective}`.slice(0, 48),
    title: input.title || `Activity: ${input.objective}`,
    version: '0.1.0',
    owner_scope: 'personal',
    objective: input.objective,
    learning_objectives: [input.objective],
    curriculum_links: input.curriculum_links || [],
    age_range: constraints.age_range || input.age_range || { min: 10, max: 14 },
    duration_minutes: duration,
    class_size: { min: 1, max: Math.max(classSize, 1) },
    delivery_modes: delivery,
    space_requirements: constraints.wheelchair_access
      ? ['step_free_classroom']
      : ['standard_classroom'],
    device_requirements: constraints.no_internet ? [] : ['optional_tablet'],
    materials: input.materials || ['paper', 'markers', 'worksheet'],
    teacher_instructions: [
      'State the objective',
      'Form groups',
      'Facilitate and observe evidence',
      'Close with reflection',
    ],
    learner_instructions: ['Follow group roles', 'Complete the task', 'Share one finding'],
    grouping_logic: { size: 4, mode: 'mixed' },
    accessibility_adaptations: a11y,
    safety_constraints: ['adult_supervision', 'no_hazardous_materials'],
    assessment_evidence: ['group_artifact', 'exit_ticket'],
    fallback: { mode: 'paper_pencil', required: true },
    assign_official_grade: false,
    risk_tier: 'M',
    status: 'draft',
    provenance: {
      generated_by: 'ActivityForge',
      teacher_id: input.teacher_id,
      sources: input.sources || [],
      created_at_utc: new Date().toISOString(),
    },
  };
}

function bumpVersion(v) {
  const parts = String(v).split('.').map((n) => parseInt(n, 10) || 0);
  while (parts.length < 3) parts.push(0);
  parts[1] += 1;
  parts[2] = 0;
  return parts.join('.');
}
