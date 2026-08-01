/**
 * SF-INS-001 — INSIGHT Evaluation (shadow mode only in MVP-2)
 * STATUS: SOFTWARE MVP — evidence summaries only; never official grades.
 */
import { assertNoFinalGradeFromAi } from '../policy/index.js';

/**
 * Build a shadow INSIGHT summary from evidence items.
 * Rejects any attempt to emit final grades or certification decisions.
 */
export function buildInsightShadowSummary(input = {}) {
  const gradeGate = assertNoFinalGradeFromAi(input);
  if (!gradeGate.ok) {
    return {
      ok: false,
      fail_closed: true,
      reason: gradeGate.reason,
      policy_refs: gradeGate.policy_refs,
      summary: null,
    };
  }
  if (input.official_grade != null || input.certification_decision != null) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'OFFICIAL_GRADE_OR_CERTIFICATION_FORBIDDEN_IN_SHADOW',
      summary: null,
    };
  }

  const evidence = Array.isArray(input.evidence) ? input.evidence : [];
  const strengths = evidence.filter((e) => e.polarity === 'strength').map((e) => e.claim);
  const gaps = evidence.filter((e) => e.polarity === 'gap').map((e) => e.claim);
  const uncertainties = evidence.filter((e) => e.polarity === 'uncertain').map((e) => e.claim);

  const summary = {
    schema_id: 'ScholaForgeInsightShadowSummary/v1',
    feature_id: 'SF-INS-001',
    mode: 'SHADOW',
    learner_ref: input.learner_ref || null,
    tenant_id: input.tenant_id || null,
    evidence_count: evidence.length,
    strengths,
    gaps,
    uncertainties,
    recommended_human_actions: input.recommended_human_actions || [
      'teacher_review',
      'collect_more_evidence_if_uncertain',
    ],
    official_grade: null,
    ai_may_assign_final_grade: false,
    human_review_required: true,
    status: 'SHADOW_SUMMARY_ONLY',
    created_at_utc: new Date().toISOString(),
  };

  return {
    ok: true,
    fail_closed: false,
    reason: 'OK',
    summary,
  };
}
