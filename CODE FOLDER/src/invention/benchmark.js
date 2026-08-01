/**
 * Invention differentiation benchmark — software-proven contrasts vs generic tutor/LMS.
 * Does NOT claim novelty legally confirmed or patent granted.
 */

export const INVENTION_CLAIMS = Object.freeze([
  {
    id: 'INV-TIM-001',
    title: 'Tutoring Integrity Mode with attempt-before-help and assistance receipts',
    feature_ids: ['SF-TIM-001'],
    differentiates_from: ['generic_chat_tutor', 'unbounded_answer_bots'],
    proven_behaviors: [
      'blocks_help_before_attempt_in_restricted_mode',
      'records_assistance_level',
      'teacher_can_disable',
      'denies_direct_solution_when_prohibited',
    ],
  },
  {
    id: 'INV-LIG-001',
    title: 'Learning Independence / Cognitive Debt Gate',
    feature_ids: ['SF-LIG-001'],
    differentiates_from: ['score_only_mastery_engines'],
    proven_behaviors: [
      'ai_only_success_cannot_certify_independence',
      'requires_retention_and_transfer_checks',
      'no_permanent_shame_label',
    ],
  },
  {
    id: 'INV-RGC-001',
    title: 'Governed educational retrieval (RFF-S / RRF / CRAG / RFF-F)',
    feature_ids: ['SF-RGC-001'],
    differentiates_from: ['unfiltered_rag_chat'],
    proven_behaviors: [
      'cross_tenant_blocked',
      'memory_never_wins',
      'insufficient_abstains',
      'qualifier_loss_detected',
    ],
  },
  {
    id: 'INV-SAGA-001',
    title: 'MySAGA private twin with selective forget and no server profiling payload',
    feature_ids: ['SF-SAGA-001'],
    differentiates_from: ['centralized_learner_profiling_stores'],
    proven_behaviors: [
      'private_entries_local',
      'selective_forget',
      'server_view_hides_contents',
    ],
  },
  {
    id: 'INV-EVS-INS-001',
    title: 'Evidence Spine + INSIGHT shadow without official grade automation',
    feature_ids: ['SF-EVS-001', 'SF-INS-001'],
    differentiates_from: ['auto_grading_suites'],
    proven_behaviors: [
      'shadow_only',
      'rejects_official_grades',
      'ai_cannot_assign_final_grade',
    ],
  },
  {
    id: 'INV-PIL-JUR-001',
    title: 'Belgian Community jurisdiction + controlled pilot envelope gates',
    feature_ids: ['SF-JUR-001', 'SF-PIL-001'],
    differentiates_from: ['one_size_eu_edtech_defaults'],
    proven_behaviors: [
      'no_universal_belgium_profile',
      'denylist_blocks_cameras_and_grade_replacement',
      'signed_pilot_still_not_production',
    ],
  },
  {
    id: 'INV-TTL-001',
    title: 'TwinTeach Live teacher-authority co-teaching runtime',
    feature_ids: ['SF-TTL-001'],
    differentiates_from: ['autonomous_classroom_ai_agents'],
    proven_behaviors: [
      'proposals_not_class_visible_until_approval',
      'blocks_autonomous_grading',
      'emergency_disable_manual_fallback',
      'conduct_requires_teacher_approval',
    ],
  },
  {
    id: 'INV-AFG-001',
    title: 'ActivityForge constrained generation with validation and no silent overwrite',
    feature_ids: ['SF-AFG-001'],
    differentiates_from: ['unstructured_lesson_chat_generators'],
    proven_behaviors: [
      'structured_activity_not_raw_text',
      'rejects_unsafe_and_policy_conflicts',
      'teacher_approval_before_publish',
      'no_silent_overwrite_of_published',
    ],
  },
]);

/**
 * @param {Record<string, boolean>} proofMap behaviorId -> demonstrated by tests/runtime
 */
export function scoreDifferentiation(proofMap = {}) {
  const rows = INVENTION_CLAIMS.map((claim) => {
    const proven = claim.proven_behaviors.filter((b) => proofMap[b] === true);
    const missing = claim.proven_behaviors.filter((b) => proofMap[b] !== true);
    return {
      id: claim.id,
      title: claim.title,
      feature_ids: claim.feature_ids,
      proven_count: proven.length,
      required_count: claim.proven_behaviors.length,
      complete: missing.length === 0,
      missing,
      patent_granted: false,
      novelty_confirmed: false,
      production_approved: false,
    };
  });

  const complete = rows.filter((r) => r.complete).length;
  return {
    schema_id: 'ScholaForgeInventionDifferentiationBenchmark/v1',
    version: '15.0.0-CODE-MVP-5',
    scored_at_utc: new Date().toISOString(),
    method: 'BODY_VS_BODY',
    canonical_disclosure: 'SYS-COMBO-001',
    note: 'Organ differentiators are subordinate organs of SYS-COMBO-001; not independent filing units.',
    inventions: rows,
    complete_inventions: complete,
    total_inventions: rows.length,
    all_software_proven: complete === rows.length,
    legal_novelty_confirmed: false,
    patent_granted: false,
    filing_authorized: false,
    production_approved: false,
  };
}
