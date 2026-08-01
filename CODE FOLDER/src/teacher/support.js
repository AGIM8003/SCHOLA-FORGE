/**
 * Teacher-support thin slice (assurance A1)
 * STATUS: SOFTWARE MVP — draft suggestions only; teacher must approve before learner issuance.
 */
import { isAssuranceAllowed } from '../policy/index.js';
import { runRetrievalPipeline } from '../retrieval/index.js';

/**
 * Draft a lesson-support suggestion for a teacher.
 * Never issues directly to learners.
 */
export function draftTeacherSupport(input = {}) {
  const request = {
    ...(input.request || {}),
    assurance_class: 'A1_TEACHER_SUPPORT',
    purpose: input.request?.purpose || 'lesson_draft',
  };

  const pilot = input.pilot || {};
  const assurance = isAssuranceAllowed('A1_TEACHER_SUPPORT', pilot);
  if (!assurance.allowed) {
    return {
      ok: false,
      fail_closed: true,
      reason: assurance.reason,
      learner_issuance_allowed: false,
      draft: null,
    };
  }

  const retrieval = runRetrievalPipeline({
    request,
    ranked_lists: input.ranked_lists || {},
    fidelity_context: input.fidelity_context,
    memory_conflict: input.memory_conflict,
  });

  if (!retrieval.ok) {
    return {
      ok: false,
      fail_closed: true,
      reason: retrieval.crag?.reason || 'RETRIEVAL_FAIL_CLOSED',
      retrieval,
      learner_issuance_allowed: false,
      draft: null,
    };
  }

  const segments = retrieval.output?.segments || [];
  const draft = {
    schema_id: 'ScholaForgeTeacherSupportDraft/v1',
    assurance_class: 'A1_TEACHER_SUPPORT',
    title: input.title || 'Teacher support draft',
    objective: input.objective || null,
    suggested_content: segments.map((s) => s.text).filter(Boolean),
    source_segment_ids: segments.map((s) => s.id),
    evidence_packet_id: retrieval.output.evidence_packet_id,
    crag_state: retrieval.output.crag_state,
    teacher_approval_required: true,
    learner_issuance_allowed: false,
    status: 'DRAFT_AWAITING_TEACHER',
    created_at_utc: new Date().toISOString(),
  };

  return {
    ok: true,
    fail_closed: false,
    reason: 'OK',
    retrieval,
    draft,
    learner_issuance_allowed: false,
  };
}

/**
 * Teacher approval gate before any learner-facing issuance.
 */
export function approveTeacherDraft(draft, approval = {}) {
  if (!draft || draft.status !== 'DRAFT_AWAITING_TEACHER') {
    return { ok: false, reason: 'INVALID_DRAFT_STATE', issuance: null };
  }
  if (!approval.teacher_id) {
    return { ok: false, reason: 'TEACHER_ID_REQUIRED', issuance: null };
  }
  if (approval.approved !== true) {
    return {
      ok: true,
      reason: 'REJECTED_BY_TEACHER',
      issuance: null,
      draft: { ...draft, status: 'REJECTED', rejected_by: approval.teacher_id },
    };
  }

  // Even after teacher approval, MVP-1 only marks READY_FOR_ISSUANCE.
  // Actual learner delivery remains outside this thin slice / pilot envelope.
  return {
    ok: true,
    reason: 'TEACHER_APPROVED_READY_FOR_ISSUANCE',
    draft: {
      ...draft,
      status: 'READY_FOR_ISSUANCE',
      approved_by: approval.teacher_id,
      approved_at_utc: approval.approved_at_utc || new Date().toISOString(),
      learner_issuance_allowed: false,
      note: 'Teacher approved draft; learner issuance still requires signed pilot activation path.',
    },
    issuance: null,
  };
}
