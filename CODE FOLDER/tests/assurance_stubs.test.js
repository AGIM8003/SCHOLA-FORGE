import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createAccessibilityEvidenceStub,
  assessAcr,
  assertNoFalseAccessibilityClaim,
  createCybersecurityEvidenceStub,
  assessCse,
  assertNoFalseSecurityClaim,
} from '../src/assurance/index.js';

describe('SF-ACR-001 / SF-CSE-001 evidence stubs', () => {
  it('accessibility starts not established and blocks false claims', () => {
    const a = createAccessibilityEvidenceStub();
    assert.equal(a.established, false);
    assert.equal(a.report.conformance_claimed, false);
    assert.equal(
      assertNoFalseAccessibilityClaim({ ...a.report, conformance_claimed: true }).ok,
      false,
    );
    const passedTooSoon = assessAcr({
      status: 'PASSED',
      disabled_user_panel: false,
      manual_checks_run: false,
      open_critical_findings: 0,
    });
    assert.equal(passedTooSoon.established, false);
  });

  it('cybersecurity requires core evidence and forbids production claims', () => {
    const c = createCybersecurityEvidenceStub({ status: 'IN_PROGRESS' });
    assert.equal(c.established, false);
    assert.equal(assertNoFalseSecurityClaim({ production_security_claimed: true }).ok, false);
    const partial = assessCse({
      status: 'PASSED',
      threat_model_present: true,
      sbom_present: true,
      tenant_isolation_tested: true,
      restore_drill_passed: false,
      open_critical_findings: 0,
      production_security_claimed: false,
    });
    assert.equal(partial.established, false);
  });
});
