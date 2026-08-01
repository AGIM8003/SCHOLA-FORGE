import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { runClassroomIntegrationDemo } from '../src/demo/index.js';

describe('Classroom integration + adversarial demo', () => {
  it('proves ActivityForge + TwinTeach + TIM path with fail-closed adversaries', () => {
    const demo = runClassroomIntegrationDemo({ teacher_id: 't-demo' });
    assert.equal(demo.ok, true, `failed proofs: ${demo.failed?.join(',')}`);
    assert.equal(demo.patent_granted, false);
    assert.equal(demo.production_approved, false);
    assert.equal(demo.filing_authorized, false);
    assert.ok(demo.proven_count >= 12);
    assert.equal(demo.proofs.twinteach_emergency_manual_fallback, true);
    assert.equal(demo.proofs.activityforge_rejects_unsafe, true);
    assert.equal(demo.proofs.tim_attempt_before_help, true);
  });
});
