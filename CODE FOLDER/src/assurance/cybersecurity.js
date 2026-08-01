/**
 * SF-CSE-001 — Cybersecurity Execution Assurance stub
 * STATUS: SOFTWARE MVP — tracks required evidence; never claims production security.
 */

export const CSE_STATES = Object.freeze([
  'NOT_STARTED',
  'IN_PROGRESS',
  'PARTIAL',
  'PASSED',
  'FAILED',
  'EXPIRED',
]);

export function createCybersecurityEvidenceStub(input = {}) {
  const report = {
    schema_id: 'ScholaForgeCybersecurityEvidence/v1',
    feature_id: 'SF-CSE-001',
    threat_model_present: input.threat_model_present === true,
    sbom_present: input.sbom_present === true,
    tenant_isolation_tested: input.tenant_isolation_tested === true,
    restore_drill_passed: input.restore_drill_passed === true,
    independent_pentest_passed: input.independent_pentest_passed === true,
    open_critical_findings: input.open_critical_findings ?? null,
    status: input.status || 'NOT_STARTED',
    production_security_claimed: false,
    production_gate_passed: false,
    updated_at_utc: new Date().toISOString(),
  };

  return {
    ok: true,
    report,
    established: false,
    reason: assessCse(report).reason,
  };
}

export function assessCse(report = {}) {
  if (!CSE_STATES.includes(report.status)) {
    return { established: false, reason: 'INVALID_STATUS' };
  }
  if (report.production_security_claimed === true) {
    return { established: false, reason: 'FALSE_PRODUCTION_SECURITY_CLAIM' };
  }
  if (report.status === 'PASSED') {
    const required = [
      'threat_model_present',
      'sbom_present',
      'tenant_isolation_tested',
      'restore_drill_passed',
    ];
    for (const key of required) {
      if (!report[key]) return { established: false, reason: `MISSING_${key.toUpperCase()}` };
    }
    if ((report.open_critical_findings || 0) > 0) {
      return { established: false, reason: 'CRITICAL_FINDINGS_OPEN' };
    }
    return {
      established: true,
      reason: 'LOCAL_EVIDENCE_RECORDED_PRODUCTION_STILL_BLOCKED',
      production_gate_passed: false,
      note: 'Independent pentest still required before any production consideration.',
      independent_pentest_passed: !!report.independent_pentest_passed,
    };
  }
  return { established: false, reason: `STATUS_${report.status}` };
}

export function assertNoFalseSecurityClaim(report = {}) {
  if (report.production_security_claimed === true || report.production_gate_passed === true) {
    return { ok: false, reason: 'PRODUCTION_SECURITY_CLAIM_FORBIDDEN_IN_MVP' };
  }
  return { ok: true, reason: 'OK' };
}
