import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { runAssistanceIntegritySpine } from '../src/spine/index.js';
import { disableAiWithStopRules } from '../src/ops/index.js';
import { startTwinTeachLesson, advanceLesson } from '../src/twinteach/index.js';
import { createMetabolismSession } from '../src/constitution/index.js';
import { runOrganismBody } from '../src/constitution/index.js';
import { transformNoIdEvent } from '../src/motionclass/index.js';
import { createAttestedMySaga, addPurposeBoundEntry, attestedDelete, applyReplicaSync } from '../src/mysaga/index.js';
import { portalExchange, createPortalGrant } from '../src/portal/index.js';
import { authorize } from '../src/constitution/index.js';

describe('Cross-organ adversarial body suite', () => {
  it('runs assistance integrity spine TIM→LIG→EVS', () => {
    const r = runAssistanceIntegritySpine();
    assert.equal(r.ok, true, r.failed?.join(','));
    assert.equal(r.mastery_certified, false);
  });

  it('wires TwinTeach disable to stop/rollback/degrade', () => {
    const ttl = startTwinTeachLesson({ teacher_id: 't1', objective: 'x' });
    advanceLesson(ttl.session, { teacher_confirm: true });
    const meta = createMetabolismSession();
    const d = disableAiWithStopRules(ttl.session, meta, {}, 't1');
    assert.equal(d.ok, true);
    assert.equal(d.manual_teaching_available, true);
    assert.equal(d.remote_provider_cannot_block, true);
    assert.ok(d.stop.triggered.includes('teacher_ai_disable'));
  });

  it('proves cross-organ fail-closed adversaries from uplift spec examples', () => {
    // wrong Community / missing jurisdiction on consequential
    assert.equal(
      authorize(
        { purpose: 'certify', consequential: true },
        { policy_id: 'p', human_authority: true },
      ).ok,
      false,
    );

    // MotionClass identity leak
    assert.equal(
      transformNoIdEvent({ type: 'zone_entered', learner_id: 'L9' }).reason,
      'IDENTITY_BEARING_FIELD_REJECTED',
    );

    // deleted MySAGA returns from replica
    const saga = createAttestedMySaga({ owner_ref: 'L' });
    const e = addPurposeBoundEntry(saga, { purpose: 'p', text: 'x' });
    attestedDelete(saga, e.entry.entry_id);
    assert.equal(
      applyReplicaSync(saga, { entry_id: e.entry.entry_id, purpose: 'p', text: 'x' }).invariant,
      'INV-09',
    );

    // portal sends official grade while shadow-only
    const g = createPortalGrant({
      profile: 'QTI',
      tenant_id: 't',
      jurisdiction_profile_id: 'BE-FL-EDU',
      purpose: 'assessment_exchange',
      capabilities: ['write'],
    });
    assert.equal(
      portalExchange(
        {
          capability: 'write',
          tenant_id: 't',
          purpose: 'assessment_exchange',
          apply_official_grade: true,
        },
        g.grant,
      ).reason,
      'INV-02_SHADOW_GRADE_ONLY',
    );
  });

  it('full organism body run remains green after P0/P1 uplift', () => {
    const run = runOrganismBody({ teacher_id: 't1' });
    assert.equal(run.ok, true, `failed: ${run.failed?.join(',')}`);
    assert.ok(run.proofs.motion_abstract_ok);
    assert.ok(run.proofs.inv09_anti_resurrection);
    assert.ok(run.proofs.portal_blocks_official_grade);
    assert.equal(run.filing_authorized, false);
  });
});
