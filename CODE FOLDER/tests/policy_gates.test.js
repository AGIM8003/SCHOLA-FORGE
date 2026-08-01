import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  isAssuranceAllowed,
  evaluateDecisionLock,
  assertNoFinalGradeFromAi,
} from '../src/policy/index.js';

describe('policy gates', () => {
  it('blocks A4 and unsigned pilot for A1', () => {
    assert.equal(isAssuranceAllowed('A4_CONSEQUENTIAL').allowed, false);
    assert.equal(isAssuranceAllowed('A1_TEACHER_SUPPORT', {}).allowed, false);
    assert.equal(
      isAssuranceAllowed('A1_TEACHER_SUPPORT', { pilot_charter_signed: true }).allowed,
      true,
    );
  });

  it('decision lock when community missing', () => {
    const lock = evaluateDecisionLock({});
    assert.equal(lock.decision_lock, true);
    assert.ok(lock.missing.some((m) => m.key === 'community'));
  });

  it('AI cannot assign final grade', () => {
    const bad = assertNoFinalGradeFromAi({ final_grade: 'B' });
    assert.equal(bad.ok, false);
    assert.ok(bad.policy_refs.includes('SF-REQ-0001'));
    assert.equal(assertNoFinalGradeFromAi({}).ok, true);
  });
});
