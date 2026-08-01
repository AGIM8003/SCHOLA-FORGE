/**
 * Software-only ScholaForge application pipeline (MVP-2).
 * Adds pilot charter, INSIGHT shadow, accessibility/security evidence stubs.
 * No production authority.
 */
import { isAssuranceAllowed, evaluateDecisionLock, assertNoFinalGradeFromAi } from '../policy/index.js';
import { runRetrievalPipeline } from '../retrieval/index.js';
import {
  compileJurisdictionProfile,
  profileToDecisionLockState,
  assessProfileCompleteness,
} from '../jurisdiction/index.js';
import { createShadowSpine } from '../evidence/index.js';
import { draftTeacherSupport, approveTeacherDraft } from '../teacher/index.js';
import {
  createPilotEnvelope,
  attemptSignPilot,
  pilotOptsFromEnvelope,
  isCapabilityAllowed,
} from '../pilot/index.js';
import { buildInsightShadowSummary } from '../insight/index.js';
import {
  createAccessibilityEvidenceStub,
  createCybersecurityEvidenceStub,
  assertNoFalseAccessibilityClaim,
  assertNoFalseSecurityClaim,
} from '../assurance/index.js';

export function runApplicationPipeline(input = {}) {
  const request = input.request || {};
  const gradeGate = assertNoFinalGradeFromAi(input.payload || {});
  if (!gradeGate.ok) {
    return {
      ok: false,
      fail_closed: true,
      stage: 'POLICY_GRADE',
      reason: gradeGate.reason,
      policy_refs: gradeGate.policy_refs,
    };
  }

  let jurisdictionResult = null;
  let lockState = input.jurisdiction || {};
  if (input.jurisdiction_profile_input) {
    jurisdictionResult = compileJurisdictionProfile(input.jurisdiction_profile_input);
    if (jurisdictionResult.ok) {
      lockState = {
        ...profileToDecisionLockState(jurisdictionResult.profile),
        ...(input.jurisdiction || {}),
      };
    }
  }

  let pilotResult = null;
  let pilotOpts = input.pilot || {};
  if (input.pilot_envelope_input) {
    pilotResult = createPilotEnvelope(input.pilot_envelope_input);
    if (input.pilot_signature) {
      const signed = attemptSignPilot(pilotResult.envelope, input.pilot_signature);
      pilotResult = {
        ...pilotResult,
        envelope: signed.envelope,
        sign: signed,
      };
    }
    pilotOpts = {
      ...pilotOptsFromEnvelope(pilotResult.envelope),
      ...pilotOpts,
    };
  }

  const lock = evaluateDecisionLock(lockState);
  const assurance = isAssuranceAllowed(request.assurance_class, pilotOpts);

  const accessibility = createAccessibilityEvidenceStub(input.accessibility || {});
  const cybersecurity = createCybersecurityEvidenceStub(input.cybersecurity || {});
  const acrClaim = assertNoFalseAccessibilityClaim(accessibility.report);
  const cseClaim = assertNoFalseSecurityClaim(cybersecurity.report);
  if (!acrClaim.ok || !cseClaim.ok) {
    return {
      ok: false,
      fail_closed: true,
      stage: 'ASSURANCE_CLAIM',
      reason: acrClaim.ok ? cseClaim.reason : acrClaim.reason,
      accessibility,
      cybersecurity,
    };
  }

  const spine = createShadowSpine();
  let teacher = null;
  let insight = null;

  if (input.insight) {
    const cap = pilotResult
      ? isCapabilityAllowed(pilotResult.envelope, 'INSIGHT_SHADOW')
      : { allowed: pilotOpts.pilot_charter_signed === true, reason: 'PILOT_OPTS' };
    if (!cap.allowed && !cap.designable) {
      insight = { ok: false, reason: cap.reason, summary: null };
    } else {
      insight = buildInsightShadowSummary({
        ...input.insight,
        tenant_id: request.tenant_id,
      });
      if (insight.ok) {
        spine.append({
          event_type: 'INSIGHT_SHADOW_SUMMARY',
          actor_role: 'teacher_or_assessor',
          purpose: 'insight_shadow',
          tenant_id: request.tenant_id,
          payload: {
            evidence_count: insight.summary.evidence_count,
            status: insight.summary.status,
          },
        });
      }
    }
  }

  if (request.assurance_class === 'A1_TEACHER_SUPPORT' || input.teacher_support) {
    teacher = draftTeacherSupport({
      request,
      pilot: pilotOpts,
      ranked_lists: input.ranked_lists || {},
      fidelity_context: input.fidelity_context,
      memory_conflict: input.memory_conflict,
      title: input.teacher_support?.title,
      objective: input.teacher_support?.objective,
    });

    if (teacher.ok && input.teacher_approval) {
      teacher = {
        ...teacher,
        approval: approveTeacherDraft(teacher.draft, input.teacher_approval),
      };
    }

    if (teacher.ok) {
      spine.append({
        event_type: 'TEACHER_SUPPORT_DRAFT',
        actor_role: 'teacher',
        purpose: request.purpose || 'lesson_draft',
        tenant_id: request.tenant_id,
        evidence_packet_id: teacher.draft?.evidence_packet_id,
        crag_state: teacher.draft?.crag_state,
        payload: {
          draft_status: teacher.draft?.status,
          approval_status: teacher.approval?.draft?.status || null,
        },
      });
    }

    return finalize({
      ok: teacher.ok && assurance.allowed !== false && (insight ? insight.ok !== false : true),
      fail_closed: !teacher.ok || assurance.allowed === false,
      lock,
      assurance,
      jurisdictionResult,
      pilotResult,
      pilotOpts,
      retrieval: teacher.retrieval || null,
      teacher,
      insight,
      spine,
      accessibility,
      cybersecurity,
    });
  }

  const retrieval = runRetrievalPipeline({
    request,
    ranked_lists: input.ranked_lists || {},
    fidelity_context: input.fidelity_context,
    memory_conflict: input.memory_conflict,
  });

  if (retrieval.evidence_packet) {
    spine.append({
      event_type: 'RETRIEVAL_EVIDENCE_PACKET',
      actor_role: request.role || 'system',
      purpose: request.purpose,
      tenant_id: request.tenant_id,
      evidence_packet_id: retrieval.evidence_packet.packet_id,
      crag_state: retrieval.evidence_packet.crag_state,
      payload: { ok: retrieval.ok },
    });
  }

  return finalize({
    ok: retrieval.ok && assurance.allowed !== false && (insight ? insight.ok !== false : true),
    fail_closed: retrieval.fail_closed || assurance.allowed === false,
    lock,
    assurance,
    jurisdictionResult,
    pilotResult,
    pilotOpts,
    retrieval,
    teacher: null,
    insight,
    spine,
    accessibility,
    cybersecurity,
  });
}

function finalize(ctx) {
  return {
    ok: ctx.ok,
    fail_closed: ctx.fail_closed,
    stage: 'APPLICATION_PIPELINE',
    activation_allowed: false,
    decision_lock: ctx.lock,
    assurance: ctx.assurance,
    jurisdiction: ctx.jurisdictionResult,
    profile_completeness: ctx.jurisdictionResult?.profile
      ? assessProfileCompleteness(ctx.jurisdictionResult.profile)
      : null,
    pilot: ctx.pilotResult,
    pilot_opts: ctx.pilotOpts,
    retrieval: ctx.retrieval,
    teacher: ctx.teacher,
    insight: ctx.insight,
    accessibility: ctx.accessibility,
    cybersecurity: ctx.cybersecurity,
    evidence_spine: ctx.spine.snapshot(),
    honest_markers: {
      production_approved: false,
      pilot_ready: false,
      release_authority_status: 'RELEASE_BLOCKED',
      evidence_spine_mode: 'SHADOW',
      insight_mode: ctx.insight?.summary?.mode || null,
    },
  };
}
