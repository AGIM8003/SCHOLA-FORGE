/**
 * Constitutional invariants INV-01 … INV-14
 * Executable constraints for the whole-body organism (SYS-COMBO-001).
 * STATUS: SOFTWARE MVP skeleton — DISCLOSURE_READY · FILING_NOT_AUTHORIZED
 */

export const INVARIANTS = Object.freeze([
  {
    id: 'INV-01',
    rule: 'No consequential learner decision without required human authority',
  },
  {
    id: 'INV-02',
    rule: 'AI-generated grades remain shadow until authorized human confirms',
  },
  {
    id: 'INV-03',
    rule: 'Missing jurisdiction, purpose, authority, evidence, or policy → abstain/degrade',
  },
  {
    id: 'INV-04',
    rule: 'Accessibility support is not prohibited cognitive assistance by mere presentation change',
  },
  {
    id: 'INV-05',
    rule: 'Independent mastery cannot certify when assistance ledger conflicts with contract',
  },
  {
    id: 'INV-06',
    rule: 'Remote AI provider cannot prevent local teacher from disabling AI',
  },
  {
    id: 'INV-07',
    rule: 'Disabling AI must not disable essential manual/offline teaching',
  },
  {
    id: 'INV-08',
    rule: 'Anonymous motion events must not become persistent identity/biometric profiles',
  },
  {
    id: 'INV-09',
    rule: 'Deleted eligible MySAGA records must not reappear via delayed sync',
  },
  {
    id: 'INV-10',
    rule: 'No external portal may operate outside signed capability grant',
  },
  {
    id: 'INV-11',
    rule: 'Lower-priority subsystem cannot override constitutional prohibition',
  },
  {
    id: 'INV-12',
    rule: 'Every consequential state transition reconstructable from evidence receipts',
  },
  {
    id: 'INV-13',
    rule: 'No feature may claim production readiness from blueprint completeness alone',
  },
  {
    id: 'INV-14',
    rule: 'No patent/filing claim represented as cleared without counsel authorization',
  },
]);

/**
 * Evaluate a proposed transition against constitutional invariants.
 * Fail-closed: any violation blocks the transition.
 */
export function evaluateInvariants(ctx = {}) {
  const violations = [];

  if (ctx.consequential === true && ctx.human_authority !== true) {
    violations.push('INV-01');
  }
  if (ctx.apply_ai_grade_as_official === true) {
    violations.push('INV-02');
  }
  if (
    ctx.missing_jurisdiction === true ||
    ctx.missing_purpose === true ||
    ctx.missing_authority === true ||
    ctx.missing_policy === true
  ) {
    violations.push('INV-03');
  }
  if (ctx.accessibility_support === true && ctx.treat_as_cognitive_cheat === true) {
    violations.push('INV-04');
  }
  if (ctx.certify_independence === true && ctx.assistance_ledger_conflicts === true) {
    violations.push('INV-05');
  }
  if (ctx.teacher_disable_ai === true && ctx.provider_blocks_disable === true) {
    violations.push('INV-06');
  }
  if (ctx.ai_disabled === true && ctx.manual_teaching_disabled === true) {
    violations.push('INV-07');
  }
  if (ctx.motion_event === true && ctx.persist_biometric_identity === true) {
    violations.push('INV-08');
  }
  if (ctx.deleted_eligible === true && ctx.resurrect_from_replica === true) {
    violations.push('INV-09');
  }
  if (ctx.portal_write === true && ctx.capability_grant !== true) {
    violations.push('INV-10');
  }
  if (ctx.subsystem_override_constitution === true) {
    violations.push('INV-11');
  }
  if (ctx.consequential === true && ctx.evidence_receipt !== true) {
    violations.push('INV-12');
  }
  if (ctx.claim_production_from_blueprint === true) {
    violations.push('INV-13');
  }
  if (ctx.claim_filing_authorized === true || ctx.claim_novelty_confirmed === true) {
    violations.push('INV-14');
  }

  return {
    ok: violations.length === 0,
    fail_closed: violations.length > 0,
    violations,
    filing_authorized: false,
    novelty_confirmed: false,
  };
}
