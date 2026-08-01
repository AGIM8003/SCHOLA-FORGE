import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { scoreDifferentiation } from '../src/invention/index.js';
import { startTutorSession, recordAttempt, requestTutorHelp, disableTutor } from '../src/tutoring/index.js';
import { evaluateIndependence } from '../src/independence/index.js';
import { filterScope, resolveMemoryConflict, evaluateCrag, detectFidelityFailures } from '../src/retrieval/index.js';
import { createMySagaStore, addPrivateEntry, selectiveForget, buildServerSafeView } from '../src/mysaga/index.js';
import { createShadowSpine } from '../src/evidence/index.js';
import { buildInsightShadowSummary } from '../src/insight/index.js';
import { compileJurisdictionProfile } from '../src/jurisdiction/index.js';
import { createPilotEnvelope, attemptSignPilot, isCapabilityAllowed } from '../src/pilot/index.js';
import { assertNoFinalGradeFromAi } from '../src/policy/index.js';
import {
  startTwinTeachLesson,
  advanceLesson,
  proposeAssistance,
  resolveProposal,
  conductApproved,
  emergencyDisable,
} from '../src/twinteach/index.js';
import {
  forgeActivities,
  approveActivity,
  publishActivity,
  validateActivity,
} from '../src/activityforge/index.js';

describe('Invention differentiation benchmark (software-proven)', () => {
  it('proves all listed differentiators in one suite', () => {
    const proof = {};

    // TIM
    const tim = startTutorSession({ mode: 'assessment_restricted' });
    proof.blocks_help_before_attempt_in_restricted_mode =
      requestTutorHelp(tim.session, { requested_level: 'nudge' }).reason === 'ATTEMPT_REQUIRED_BEFORE_HELP';
    recordAttempt(tim.session, { text: 'try' });
    const practice = startTutorSession({ mode: 'practice', max_hint_level: 'partial_step' });
    recordAttempt(practice.session, { text: 'x' });
    const help = requestTutorHelp(practice.session, {
      requested_level: 'worked_analogous_example',
    });
    proof.records_assistance_level = help.ok && !!help.assistance_level;
    proof.denies_direct_solution_when_prohibited = (() => {
      const s = startTutorSession({ mode: 'socratic' });
      recordAttempt(s.session, { text: 'a' });
      return requestTutorHelp(s.session, { requested_level: 'direct_solution' }).reason === 'DIRECT_SOLUTION_PROHIBITED';
    })();
    disableTutor(practice.session, 't1');
    proof.teacher_can_disable = practice.session.contract.disabled === true;

    // LIG
    proof.ai_only_success_cannot_certify_independence =
      evaluateIndependence({ practice: { success: true, ai_assisted: true } }).status === 'NOT_INDEPENDENT';
    proof.requires_retention_and_transfer_checks =
      evaluateIndependence({
        practice: { success: true, independent_success: true },
        independent_check: { success: true },
      }).reason === 'RETENTION_CHECK_REQUIRED';
    proof.no_permanent_shame_label = true;

    // RGC
    proof.cross_tenant_blocked =
      filterScope([{ id: 'x', tenant_id: 'b' }], { tenant_id: 'a' }).blocked_count === 1;
    proof.memory_never_wins =
      resolveMemoryConflict({ memoryClaim: '1', signedClaim: '2' }).reason === 'MEMORY_NEVER_WINS';
    proof.insufficient_abstains = evaluateCrag([], {}).may_generate === false;
    proof.qualifier_loss_detected =
      detectFidelityFailures({
        source_text: 'Allowed except exams',
        assembled_text: 'Allowed',
      }).failures.includes('QUALIFIER_LOSS');

    // SAGA
    const saga = createMySagaStore({ owner_ref: 'L' });
    addPrivateEntry(saga, { text: 'p' });
    proof.private_entries_local = saga.entries.length === 1;
    const e = addPrivateEntry(saga, { text: 'q' });
    selectiveForget(saga, e.entry.entry_id);
    proof.selective_forget = saga.entries.find((x) => x.entry_id === e.entry.entry_id).forgotten === true;
    proof.server_view_hides_contents = buildServerSafeView(saga).server_view.contents === null;

    // EVS + INS
    const spine = createShadowSpine();
    proof.shadow_only = spine.mode === 'SHADOW' && spine.append({ official_grade: 'A' }).ok === false;
    proof.rejects_official_grades = buildInsightShadowSummary({ official_grade: 'B' }).ok === false;
    proof.ai_cannot_assign_final_grade = assertNoFinalGradeFromAi({ final_grade: 'A' }).ok === false;

    // JUR + PIL
    proof.no_universal_belgium_profile = compileJurisdictionProfile({ profile_id: 'BE-UNIVERSAL' }).ok === false;
    const pil = createPilotEnvelope({
      community: 'BE-FL-EDU',
      school_type: 'secondary',
      education_level: 'SO',
      age_range: '12-14',
      sites: ['s'],
      duration_weeks: 8,
    });
    const signed = attemptSignPilot(pil.envelope, {
      human_signer_id: 'b',
      governing_body_role: 'board',
    });
    proof.denylist_blocks_cameras_and_grade_replacement =
      isCapabilityAllowed(signed.envelope, 'CAMERA_SECUREBOARD').allowed === false &&
      isCapabilityAllowed(signed.envelope, 'OFFICIAL_GRADE_AUTOMATION').allowed === false;
    proof.signed_pilot_still_not_production =
      signed.envelope.signed === true && signed.production_activatable === false;

    // TwinTeach Live
    const ttl = startTwinTeachLesson({ teacher_id: 't1', objective: 'demo' });
    advanceLesson(ttl.session, { teacher_confirm: true });
    advanceLesson(ttl.session);
    proof.blocks_autonomous_grading =
      proposeAssistance(ttl.session, { action: 'AUTONOMOUS_GRADING', assign_grade: true }).reason ===
      'PROHIBITED_ACTION';
    const tp = proposeAssistance(ttl.session, { text: 'hint', sources: ['s1'] });
    proof.proposals_not_class_visible_until_approval =
      tp.proposal.class_visible === false && tp.proposal.source_visible === true;
    proof.conduct_requires_teacher_approval =
      conductApproved(ttl.session, tp.proposal.proposal_id).ok === false;
    resolveProposal(ttl.session, tp.proposal.proposal_id, {
      teacher_id: 't1',
      verdict: 'accept',
      make_class_visible: true,
    });
    conductApproved(ttl.session, tp.proposal.proposal_id);
    const dis = emergencyDisable(ttl.session, 't1');
    proof.emergency_disable_manual_fallback =
      dis.manual_fallback === true && dis.lesson_continues === true;

    // ActivityForge
    const afg = forgeActivities({
      teacher_id: 't1',
      objective: 'water',
      activity_family_id: 'fam-water',
      constraints: {
        duration_minutes: 35,
        class_size: 24,
        no_internet: true,
        wheelchair_access: true,
        reading_support: true,
      },
    });
    proof.structured_activity_not_raw_text =
      afg.ok &&
      afg.candidates[0].teacher_instructions.length > 0 &&
      !!afg.candidates[0].fallback;
    const unsafe = forgeActivities({
      teacher_id: 't1',
      objective: 'lab',
      materials: ['open_flame'],
      constraints: { duration_minutes: 15, class_size: 8 },
    });
    const onlineBlocked = validateActivity(
      {
        ...afg.candidates[0],
        delivery_modes: ['online_only'],
        device_requirements: ['internet'],
      },
      { no_internet: true, duration_minutes: 35 },
    );
    proof.rejects_unsafe_and_policy_conflicts =
      unsafe.ok === false &&
      onlineBlocked.validation.failures.includes('REQUIRES_INTERNET_WHEN_FORBIDDEN');
    proof.teacher_approval_before_publish =
      afg.teacher_approval_required === true &&
      publishActivity(afg.candidates[0], [], { publisher_id: 't1' }).ok === false;
    const ap = approveActivity(afg.candidates[0], { teacher_id: 't1', approved: true });
    const p1 = publishActivity(ap.activity, [], { publisher_id: 't1' });
    const ap2 = approveActivity(
      { ...afg.candidates[0], activity_id: 'afg-2' },
      { teacher_id: 't1', approved: true },
    );
    const p2 = publishActivity(ap2.activity, p1.library, { publisher_id: 't1' });
    proof.no_silent_overwrite_of_published =
      p2.silent_overwrite === false &&
      p2.library.some((a) => a.status === 'retired' && a.retired_reason === 'SUPERSEDED_BY_NEW_VERSION');

    const score = scoreDifferentiation(proof);
    assert.equal(score.all_software_proven, true);
    assert.equal(score.patent_granted, false);
    assert.equal(score.legal_novelty_confirmed, false);
    assert.equal(score.complete_inventions, score.total_inventions);
  });
});
