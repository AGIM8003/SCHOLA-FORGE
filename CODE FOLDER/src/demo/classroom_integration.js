/**
 * End-to-end classroom integration demo (software-proven path).
 * Wires ActivityForge → TwinTeach → Tutoring Integrity under teacher authority.
 * Adversarial checks: no class-visible without approval, no grade automation,
 * emergency disable, attempt-before-help.
 * STATUS: DEMO / PROOF — not production; not patent grant.
 */
import { forgeActivities, approveActivity, validateActivity } from '../activityforge/index.js';
import {
  startTwinTeachLesson,
  advanceLesson,
  proposeAssistance,
  resolveProposal,
  conductApproved,
  emergencyDisable,
  closeLesson,
  lessonReceipt,
} from '../twinteach/index.js';
import { startTutorSession, recordAttempt, requestTutorHelp } from '../tutoring/index.js';
import { assertNoFinalGradeFromAi } from '../policy/index.js';

/**
 * Run a scripted classroom scenario and return adversarial proof map.
 */
export function runClassroomIntegrationDemo(input = {}) {
  const teacher_id = input.teacher_id || 'teacher-demo-1';
  const proofs = {};
  const steps = [];

  // 1) ActivityForge — constrained water-conservation activity
  const forged = forgeActivities({
    teacher_id,
    objective: input.objective || 'water conservation',
    title: 'Water stewardship stations',
    constraints: {
      duration_minutes: 35,
      class_size: 24,
      no_internet: true,
      wheelchair_access: true,
      reading_support: true,
    },
    materials: ['paper', 'markers', 'worksheet'],
    sources: ['curriculum:env-7', 'school-policy:a11y'],
  });
  steps.push({ stage: 'ACTIVITYFORGE', ok: forged.ok, candidates: forged.candidates.length });

  proofs.activityforge_rejects_internet_when_forbidden =
    forged.ok &&
    forged.candidates.every((c) => !(c.device_requirements || []).includes('internet'));

  const approvedAct = approveActivity(forged.candidates[0], {
    teacher_id,
    approved: true,
  });
  proofs.activityforge_teacher_approval_required =
    forged.teacher_approval_required === true && approvedAct.ok === true;
  proofs.activityforge_structured_not_raw_text =
    !!approvedAct.activity?.teacher_instructions?.length &&
    !!approvedAct.activity?.accessibility_adaptations?.length &&
    !!approvedAct.activity?.fallback;

  // Adversarial: unsafe material rejected
  const unsafe = forgeActivities({
    teacher_id,
    objective: 'chemistry demo',
    constraints: { duration_minutes: 20, class_size: 12 },
    materials: ['open_flame'],
  });
  proofs.activityforge_rejects_unsafe =
    unsafe.ok === false &&
    unsafe.rejected.some((r) => r.validation.failures.some((f) => f.startsWith('UNSAFE')));

  // Explicit online-only candidate must fail under no_internet constraint
  const onlineCheck = validateActivity(
    {
      ...forged.candidates[0],
      delivery_modes: ['online_only'],
      device_requirements: ['internet'],
    },
    { no_internet: true, duration_minutes: 35 },
  );
  proofs.activityforge_validator_blocks_online_only =
    onlineCheck.validation.failures.includes('REQUIRES_INTERNET_WHEN_FORBIDDEN');

  // 2) TwinTeach Live lesson
  const started = startTwinTeachLesson({
    teacher_id,
    objective: approvedAct.activity.objective,
    lesson_id: 'demo-lesson-1',
    permitted_sensors: [],
  });
  advanceLesson(started.session, { teacher_confirm: true }); // OPEN
  advanceLesson(started.session); // TEACH
  steps.push({ stage: 'TWINTEACH_TEACH', state: started.session.state });

  const blockedGrade = proposeAssistance(started.session, {
    action: 'AUTONOMOUS_GRADING',
    assign_grade: true,
    text: 'Assign final grade A',
  });
  proofs.twinteach_blocks_autonomous_grading = blockedGrade.reason === 'PROHIBITED_ACTION';

  const prop = proposeAssistance(started.session, {
    action: 'SUGGEST_EXPLANATION',
    text: 'Show catchment diagram',
    sources: ['curriculum:env-7'],
  });
  proofs.twinteach_proposal_not_class_visible =
    prop.ok && prop.proposal.class_visible === false && prop.proposal.source_visible === true;

  const earlyConduct = conductApproved(started.session, prop.proposal.proposal_id);
  proofs.twinteach_conduct_requires_approval = earlyConduct.ok === false;

  resolveProposal(started.session, prop.proposal.proposal_id, {
    teacher_id,
    verdict: 'accept',
    make_class_visible: true,
  });
  const conducted = conductApproved(started.session, prop.proposal.proposal_id);
  proofs.twinteach_teacher_authority =
    conducted.ok === true && started.session.policy.teacher_is_authority === true;

  // 3) Tutoring integrity during lesson support
  const tutor = startTutorSession({ mode: 'assessment_restricted' });
  const denied = requestTutorHelp(tutor.session, { requested_level: 'nudge', topic: 'watershed' });
  proofs.tim_attempt_before_help = denied.reason === 'ATTEMPT_REQUIRED_BEFORE_HELP';
  recordAttempt(tutor.session, { text: 'rain to river' });
  const helped = requestTutorHelp(tutor.session, {
    requested_level: 'socratic_question',
    topic: 'watershed',
  });
  proofs.tim_help_after_attempt = helped.ok === true;

  // 4) Policy: AI cannot assign final grade mid-demo
  proofs.policy_no_final_grade = assertNoFinalGradeFromAi({ final_grade: 'A' }).ok === false;

  // 5) Emergency disable → manual fallback, lesson continues
  const disabled = emergencyDisable(started.session, teacher_id);
  proofs.twinteach_emergency_manual_fallback =
    disabled.manual_fallback === true && disabled.lesson_continues === true;
  const afterDisable = proposeAssistance(started.session, {
    text: 'should fail',
    sources: [],
  });
  proofs.twinteach_disabled_blocks_proposals = afterDisable.reason === 'AI_DISABLED';

  const closed = closeLesson(started.session);
  const receipt = lessonReceipt(started.session);
  proofs.twinteach_close_seals_receipt = closed.ok === true && receipt.feature_id === 'SF-TTL-001';

  const allProofKeys = Object.keys(proofs);
  const passed = allProofKeys.filter((k) => proofs[k] === true);
  const failed = allProofKeys.filter((k) => proofs[k] !== true);

  return {
    schema_id: 'ScholaForgeClassroomIntegrationDemo/v1',
    version: '15.0.0-CODE-MVP-4',
    ok: failed.length === 0,
    feature_ids: ['SF-AFG-001', 'SF-TTL-001', 'SF-TIM-001'],
    steps,
    proofs,
    proven_count: passed.length,
    required_count: allProofKeys.length,
    failed,
    activity: approvedAct.activity
      ? { id: approvedAct.activity.activity_id, status: approvedAct.activity.status }
      : null,
    twinteach_receipt: receipt,
    patent_granted: false,
    production_approved: false,
    filing_authorized: false,
  };
}
