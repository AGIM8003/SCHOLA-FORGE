/**
 * SF-RGC-001 — RFF-F Retrieval Fidelity Failure-Fix
 * STATUS: SOFTWARE MVP — detect/repair fidelity failures after CRAG.
 */

const DETECTORS = [
  {
    id: 'QUALIFIER_LOSS',
    test: (ctx) =>
      typeof ctx.source_text === 'string' &&
      /\bexcept\b/i.test(ctx.source_text) &&
      ctx.assembled_text &&
      !/\bexcept\b/i.test(ctx.assembled_text),
  },
  {
    id: 'CITATION_MISMATCH',
    test: (ctx) =>
      ctx.citation_span &&
      ctx.source_text &&
      !String(ctx.source_text).includes(String(ctx.citation_span)),
  },
  {
    id: 'VERSION_MIXING',
    test: (ctx) => Array.isArray(ctx.source_versions) && new Set(ctx.source_versions).size > 1,
  },
  {
    id: 'UNSUPPORTED_SYNTHESIS',
    test: (ctx) => ctx.claims_without_span === true,
  },
  {
    id: 'PERMISSION_LEAKAGE',
    test: (ctx) => ctx.permission_leak === true,
  },
  {
    id: 'STALE_SUBSTITUTION',
    test: (ctx) => ctx.used_stale_as_current === true,
  },
];

export function detectFidelityFailures(context = {}) {
  const failures = [];
  for (const d of DETECTORS) {
    if (d.test(context)) failures.push(d.id);
  }
  return {
    stage: 'RFF-F',
    failures,
    ok: failures.length === 0,
  };
}

export function repairFidelity(context = {}, detection = null) {
  const det = detection || detectFidelityFailures(context);
  if (det.ok) {
    return { stage: 'RFF-F', repaired: false, ok: true, context, failures: [] };
  }

  const next = { ...context };
  const actions = [];

  if (det.failures.includes('QUALIFIER_LOSS') && next.source_text) {
    next.assembled_text = next.source_text;
    actions.push('EXPAND_TO_SOURCE_SEGMENT');
  }
  if (det.failures.includes('VERSION_MIXING') && next.active_version) {
    next.source_versions = [next.active_version];
    actions.push('SWITCH_ACTIVE_VERSION');
  }
  if (det.failures.includes('UNSUPPORTED_SYNTHESIS')) {
    next.claims_without_span = false;
    next.assembled_text = null;
    actions.push('REMOVE_UNSUPPORTED_STATEMENT');
  }
  if (det.failures.includes('PERMISSION_LEAKAGE')) {
    next.permission_leak = false;
    next.assembled_text = null;
    actions.push('STRIP_LEAKED_CONTENT');
  }
  if (det.failures.includes('STALE_SUBSTITUTION')) {
    next.used_stale_as_current = false;
    next.assembled_text = null;
    actions.push('BLOCK_STALE_AS_CURRENT');
  }
  if (det.failures.includes('CITATION_MISMATCH')) {
    next.citation_span = null;
    actions.push('DROP_BAD_CITATION');
  }

  const recheck = detectFidelityFailures(next);
  return {
    stage: 'RFF-F',
    repaired: true,
    ok: recheck.ok,
    actions,
    failures: recheck.failures,
    context: next,
    escalate_human: !recheck.ok,
  };
}
