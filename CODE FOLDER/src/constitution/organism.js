/**
 * Whole-body metabolic runner — SYS-COMBO-001 organs under constitutional plane.
 * STATUS: SOFTWARE MVP · DISCLOSURE_READY · FILING_NOT_AUTHORIZED
 */
import { authorize, compileExecutionContract } from './control_plane.js';
import {
  createMetabolismSession,
  advanceMetabolism,
  METABOLISM_STAGES,
} from './metabolism.js';
import { evaluateInvariants } from './invariants.js';
import { runAssistanceIntegritySpine } from '../spine/index.js';
import {
  createActivityConductor,
  ingestMotionEvent,
  degradeConductor,
  transformNoIdEvent,
} from '../motionclass/index.js';
import {
  createAttestedMySaga,
  addPurposeBoundEntry,
  attestedDelete,
  applyReplicaSync,
} from '../mysaga/index.js';
import { createPortalGrant, portalExchange } from '../portal/index.js';
import {
  startTwinTeachLesson,
  advanceLesson,
} from '../twinteach/index.js';
import { disableAiWithStopRules } from '../ops/index.js';

/**
 * Run canonical body path including P0/P1 uplift organs.
 */
export function runOrganismBody(input = {}) {
  const proofs = {};
  const ctx = {
    jurisdiction_profile_id: input.jurisdiction_profile_id || 'BE-FL-EDU',
    policy_id: input.policy_id || 'sf-constitution-v1',
    human_authority: input.human_authority !== false,
    teacher_id: input.teacher_id || 'teacher-1',
    capability_grant: input.capability_grant === true,
  };

  const session = createMetabolismSession({ session_id: input.session_id });
  for (const _ of ['INGEST', 'QUALIFY']) {
    advanceMetabolism(session, { detail: 'ok' });
  }

  proofs.inv02_blocks_official_ai_grade =
    authorize(
      { purpose: 'grade', consequential: true, apply_ai_grade_as_official: true },
      ctx,
    ).reason === 'INV-02_SHADOW_GRADE_ONLY';

  proofs.inv01_requires_human =
    authorize(
      { purpose: 'certify_mastery', consequential: true },
      { ...ctx, human_authority: false },
    ).reason === 'INV-01_HUMAN_AUTHORITY_REQUIRED';

  proofs.inv10_portal_needs_grant =
    authorize(
      { purpose: 'export', portal_write: true },
      { ...ctx, capability_grant: false },
    ).reason === 'INV-10_NO_CAPABILITY_GRANT';

  const compiled = compileExecutionContract({
    request: { purpose: 'assisted_practice', consequential: false },
    ctx,
  });
  proofs.contract_compiled = compiled.ok === true;
  advanceMetabolism(session, { detail: 'authorized' });
  advanceMetabolism(session, { detail: 'contract', fail_closed: !compiled.ok });

  // ASSIST → VERIFY → ATTEST spine
  const spineRun = runAssistanceIntegritySpine({ topic: 'fractions' });
  proofs.tim_attempt_gate = spineRun.proofs.attempt_required === true;
  proofs.tim_assist_after_attempt = spineRun.proofs.help_after_attempt === true;
  proofs.lig_blocks_ai_only_mastery = spineRun.proofs.lig_rejects_assisted_as_mastery === true;
  proofs.inv05_ledger_conflict_blocks = spineRun.proofs.inv05_blocks_when_assisted === true;
  proofs.evs_rejects_official = spineRun.proofs.shadow_blocks_official === true;
  proofs.evs_attests = spineRun.proofs.evs_attests_path === true;
  advanceMetabolism(session, { detail: 'assist' });

  // ORCHESTRATE — TwinTeach + MotionClass
  const ttl = startTwinTeachLesson({
    teacher_id: ctx.teacher_id,
    objective: 'fractions',
  });
  advanceLesson(ttl.session, { teacher_confirm: true });
  advanceLesson(ttl.session);

  const cond = createActivityConductor({
    teacher_id: ctx.teacher_id,
    jurisdiction_profile_id: ctx.jurisdiction_profile_id,
    zones: ['A', 'B'],
  });
  proofs.motion_conductor_ok = cond.ok === true;
  const badFace = transformNoIdEvent({ type: 'zone_entered', face: 'img' });
  proofs.inv08_rejects_identity = badFace.reason === 'IDENTITY_BEARING_FIELD_REJECTED';
  const motion = ingestMotionEvent(cond.conductor, {
    type: 'zone_count_changed',
    zone_id: 'A',
    count: 4,
  });
  proofs.motion_abstract_ok = motion.ok === true && motion.event.identity_bearing === false;
  advanceMetabolism(session, { detail: 'orchestrate' });
  advanceMetabolism(session, { detail: 'observe' });
  advanceMetabolism(session, { detail: 'verify' });
  advanceMetabolism(session, { detail: 'attest' });

  // STORE / DELETE — attested MySAGA
  const saga = createAttestedMySaga({
    owner_ref: 'L1',
    replicas: [{ id: 'r1', available: true }, { id: 'r2', available: false }],
  });
  const entry = addPurposeBoundEntry(saga, {
    purpose: 'reflection',
    text: 'private note',
    authority: ctx.teacher_id,
  });
  proofs.mysaga_purpose_bound = entry.ok === true;
  const del = attestedDelete(saga, entry.entry.entry_id);
  proofs.mysaga_attested_delete = del.ok === true && del.receipt.anti_resurrection === true;
  const rez = applyReplicaSync(saga, {
    entry_id: entry.entry.entry_id,
    purpose: 'reflection',
    text: 'resurrect',
  });
  proofs.inv09_anti_resurrection = rez.reason === 'ANTI_RESURRECTION_BLOCK';
  advanceMetabolism(session, { detail: 'store' });
  advanceMetabolism(session, { detail: 'delete_or_retain' });

  // EXCHANGE — portal
  const grant = createPortalGrant({
    profile: 'OneRoster',
    tenant_id: 'school-1',
    jurisdiction_profile_id: ctx.jurisdiction_profile_id,
    purpose: 'roster_sync',
    capabilities: ['read', 'write'],
  });
  proofs.portal_grant_ok = grant.ok === true;
  const noGrant = portalExchange({ capability: 'write' }, null, ctx);
  proofs.portal_denies_without_grant = noGrant.reason === 'INV-10_NO_CAPABILITY_GRANT';
  const gradePortal = portalExchange(
    { capability: 'write', apply_official_grade: true, tenant_id: 'school-1', purpose: 'roster_sync' },
    grant.grant,
    ctx,
  );
  proofs.portal_blocks_official_grade = gradePortal.reason === 'INV-02_SHADOW_GRADE_ONLY';
  const okEx = portalExchange(
    { capability: 'read', tenant_id: 'school-1', purpose: 'roster_sync', dry_run: true },
    grant.grant,
    ctx,
  );
  proofs.portal_with_grant = okEx.ok === true;
  advanceMetabolism(session, { detail: 'exchange' });

  // DEGRADE — TwinTeach + stop rules + MotionClass
  const disabled = disableAiWithStopRules(ttl.session, session, {}, ctx.teacher_id);
  proofs.ttl_manual_fallback =
    disabled.manual_teaching_available === true && disabled.lesson_continues === true;
  proofs.inv07_manual_available = disabled.remote_provider_cannot_block === true;
  degradeConductor(cond.conductor, 'teacher_ai_disable');
  proofs.motion_degrades = cond.conductor.degraded === true;

  const filingClaim = evaluateInvariants({ claim_filing_authorized: true });
  proofs.inv14_blocks_filing_claim = filingClaim.violations.includes('INV-14');

  const failed = Object.entries(proofs)
    .filter(([, v]) => v !== true)
    .map(([k]) => k);

  return {
    schema_id: 'ScholaForgeOrganismBodyRun/v1',
    disclosure_id: 'SYS-COMBO-001',
    method: 'BODY_VS_BODY',
    version: '15.0.0-CODE-MVP-5',
    ok: failed.length === 0,
    proofs,
    proven_count: Object.keys(proofs).length - failed.length,
    required_count: Object.keys(proofs).length,
    failed,
    metabolism_stages: METABOLISM_STAGES,
    stages_completed: session.stages_completed,
    assistance_spine: { ok: spineRun.ok, lig: spineRun.lig?.status },
    status: ['DISCLOSURE_READY', 'NOVELTY_NOT_CONFIRMED', 'FILING_NOT_AUTHORIZED'],
    filing_authorized: false,
    novelty_confirmed: false,
    production_approved: false,
    implementation_status: 'IMPLEMENTATION_NOT_PROVEN',
  };
}
