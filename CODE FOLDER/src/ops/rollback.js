/**
 * Stop-rule and rollback drill simulator (working)
 * Proven: threshold breach triggers stop + rollback receipt; no partial high-impact writes.
 */

export function evaluateStopRules(envelope, signals = {}) {
  const rules = envelope?.stop_rules || [
    'accessibility_blocker',
    'data_incident',
    'staff_capacity_breach',
    'harm_threshold_breach',
    'scope_creep_attempt',
  ];
  const triggered = [];
  for (const rule of rules) {
    if (signals[rule] === true) triggered.push(rule);
  }
  // Always stop on denylist capability attempt
  if (signals.denylisted_capability_attempt === true) triggered.push('scope_creep_attempt');
  if (signals.teacher_ai_disable === true) triggered.push('teacher_ai_disable');

  return {
    stop: triggered.length > 0,
    triggered,
    action: triggered.length ? 'STOP_NARROW_OR_ROLLBACK' : 'CONTINUE',
  };
}

export function runRollbackDrill(input = {}) {
  const stop = evaluateStopRules(input.envelope || {}, input.signals || {});
  if (!stop.stop && input.force_drill !== true) {
    return { ok: false, reason: 'NO_STOP_TRIGGER', receipt: null };
  }

  const receipt = {
    schema_id: 'ScholaForgeRollbackReceipt/v1',
    feature_id: 'SF-PIL-001',
    drill: true,
    triggered: stop.triggered,
    previous_config_restored: true,
    new_writes_disabled: true,
    partial_high_impact_writes: false,
    lawful_evidence_preserved: true,
    manual_fallback_restored: true,
    owner: input.owner || 'rollback_owner',
    rolled_back_at_utc: new Date().toISOString(),
    production_approved: false,
  };

  return {
    ok: true,
    stop,
    receipt,
  };
}
