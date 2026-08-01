/**
 * SF-ACR-001 — Accessibility Conformance Report stub
 * STATUS: SOFTWARE MVP — tracks evidence state; never claims WCAG pass without receipts.
 */

export const ACR_STATES = Object.freeze([
  'NOT_STARTED',
  'IN_PROGRESS',
  'PARTIAL',
  'PASSED',
  'FAILED',
  'EXPIRED',
]);

export function createAccessibilityEvidenceStub(input = {}) {
  const report = {
    schema_id: 'ScholaForgeAccessibilityEvidence/v1',
    feature_id: 'SF-ACR-001',
    target_standard: input.target_standard || 'WCAG_2_2_AA',
    scope: input.scope || 'pilot_surfaces',
    disabled_user_panel: input.disabled_user_panel === true,
    automated_checks_run: input.automated_checks_run === true,
    manual_checks_run: input.manual_checks_run === true,
    open_critical_findings: input.open_critical_findings ?? null,
    status: input.status || 'NOT_STARTED',
    conformance_claimed: false,
    production_gate_passed: false,
    updated_at_utc: new Date().toISOString(),
  };

  return {
    ok: true,
    report,
    established: false,
    reason: assessAcr(report).reason,
  };
}

export function assessAcr(report = {}) {
  if (!ACR_STATES.includes(report.status)) {
    return { established: false, reason: 'INVALID_STATUS' };
  }
  if (report.conformance_claimed === true && report.status !== 'PASSED') {
    return { established: false, reason: 'FALSE_CONFORMANCE_CLAIM' };
  }
  if (report.status === 'PASSED') {
    if (!report.disabled_user_panel || !report.manual_checks_run) {
      return { established: false, reason: 'PASSED_WITHOUT_USER_EVIDENCE' };
    }
    if ((report.open_critical_findings || 0) > 0) {
      return { established: false, reason: 'CRITICAL_FINDINGS_OPEN' };
    }
    // Even with PASSED local evidence, MVP does not open production.
    return {
      established: true,
      reason: 'LOCAL_EVIDENCE_RECORDED_PRODUCTION_STILL_BLOCKED',
      production_gate_passed: false,
    };
  }
  return { established: false, reason: `STATUS_${report.status}` };
}

export function assertNoFalseAccessibilityClaim(report = {}) {
  if (report.conformance_claimed === true && report.status !== 'PASSED') {
    return { ok: false, reason: 'FALSE_CONFORMANCE_CLAIM' };
  }
  if (report.production_gate_passed === true) {
    return { ok: false, reason: 'PRODUCTION_GATE_CLAIM_FORBIDDEN_IN_MVP' };
  }
  return { ok: true, reason: 'OK' };
}
