/**
 * SF-LIG-001 — Learning Independence and Cognitive Debt Gate (working engine)
 * Proven behavior: AI-only success cannot certify independence; delayed/transfer checks required.
 */

export function createAssistanceContract(input = {}) {
  return {
    schema_id: 'ScholaForgeAssistanceContract/v1',
    feature_id: 'SF-LIG-001',
    ai_available: input.ai_available !== false,
    fade_after_successes: input.fade_after_successes ?? 2,
    require_independent_check: true,
    require_retention_check: input.require_retention_check !== false,
    require_transfer_check: input.require_transfer_check !== false,
    accessibility_support_distinct: true,
    created_at_utc: new Date().toISOString(),
  };
}

/**
 * Evaluate whether independent capability is proven.
 */
export function evaluateIndependence(input = {}) {
  const practice = input.practice || {};
  const independent = input.independent_check || null;
  const retention = input.retention_check || null;
  const transfer = input.transfer_check || null;
  const contract = input.contract || createAssistanceContract();

  const usedAiOnly =
    practice.success === true &&
    (practice.ai_assisted === true || (practice.hint_depth && practice.hint_depth !== 'none')) &&
    practice.independent_success !== true;

  if (usedAiOnly && !independent?.success) {
    return decide('NOT_INDEPENDENT', 'AI_ONLY_SUCCESS_CANNOT_CERTIFY', {
      cognitive_debt_signal: true,
      recommend: 'change_teaching_route',
    });
  }

  if (contract.require_independent_check && !independent) {
    return decide('PENDING', 'INDEPENDENT_CHECK_REQUIRED');
  }
  if (independent && independent.success !== true) {
    return decide('NOT_INDEPENDENT', 'INDEPENDENT_CHECK_FAILED', { cognitive_debt_signal: true });
  }

  if (contract.require_retention_check) {
    if (!retention) return decide('PENDING', 'RETENTION_CHECK_REQUIRED');
    if (retention.success !== true) {
      return decide('NOT_SECURE', 'RETENTION_CHECK_FAILED');
    }
    if (retention.offline !== true && retention.allow_online_only !== true) {
      return decide('PENDING', 'RETENTION_MUST_SUPPORT_OFFLINE_OR_EXPLICIT_EXCEPTION');
    }
  }

  if (contract.require_transfer_check) {
    if (!transfer) return decide('PENDING', 'TRANSFER_CHECK_REQUIRED');
    if (transfer.success !== true) return decide('NOT_SECURE', 'TRANSFER_CHECK_FAILED');
    if (!transfer.novel_context) {
      return decide('PENDING', 'TRANSFER_TASK_MUST_DIFFER_FROM_PRACTICE');
    }
  }

  return decide('INDEPENDENT_SECURE_CANDIDATE', 'CHECKS_PASSED', {
    cognitive_debt_signal: false,
    mastery_certified: false, // teacher must still certify
    teacher_certification_required: true,
  });
}

function decide(status, reason, extra = {}) {
  return {
    schema_id: 'ScholaForgeIndependenceGateResult/v1',
    feature_id: 'SF-LIG-001',
    status,
    reason,
    mastery_certified: false,
    ...extra,
    evaluated_at_utc: new Date().toISOString(),
  };
}

/**
 * Record cognitive-debt signal without shame/permanent label.
 */
export function recordCognitiveDebtSignal(history = [], event = {}) {
  const entry = {
    at: new Date().toISOString(),
    kind: event.kind || 'repeated_ai_dependence',
    severity: event.severity || 'moderate',
    permanent_label: false,
    shame_prohibited: true,
    teacher_route_suggested: true,
  };
  return {
    ok: true,
    history: [...history, entry],
    entry,
  };
}
