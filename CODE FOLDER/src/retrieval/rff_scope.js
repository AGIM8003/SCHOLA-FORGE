/**
 * SF-RGC-001 — RFF-S Relevance / Scope Filter
 * STATUS: SOFTWARE MVP — fail-closed for out-of-scope / cross-tenant context.
 */

export function filterScope(candidates = [], request = {}) {
  const passed = [];
  const blocked = [];
  const tenant = request.tenant_id || null;
  const purpose = request.purpose || null;
  const community = request.community || null;
  const assurance = request.assurance_class || 'A0_EXPLANATORY';

  for (const c of candidates) {
    const reasons = [];
    if (c.tenant_id && tenant && c.tenant_id !== tenant) {
      reasons.push('CROSS_TENANT');
    }
    if (c.blocked === true) reasons.push('EXPLICIT_BLOCK');
    if (c.revoked === true) reasons.push('REVOKED');
    if (c.unsigned === true && assurance !== 'A0_EXPLANATORY') {
      reasons.push('UNSIGNED_SOURCE');
    }
    if (c.community && community && c.community !== community) {
      reasons.push('WRONG_COMMUNITY');
    }
    if (c.purposes && purpose && Array.isArray(c.purposes) && !c.purposes.includes(purpose)) {
      reasons.push('PURPOSE_MISMATCH');
    }
    if (c.is_prompt_injection === true) reasons.push('PROMPT_INJECTION');
    if (c.source_kind === 'agent_memory' && !c.evidence_packet_id) {
      reasons.push('MEMORY_WITHOUT_PACKET');
    }
    if (c.source_kind === 'safeguarding' && purpose !== 'safeguarding') {
      reasons.push('SAFEGUARDING_LEAK');
    }

    if (reasons.length) {
      blocked.push({ candidate_id: c.id, reasons });
    } else {
      passed.push(c);
    }
  }

  return {
    stage: 'RFF-S',
    passed,
    blocked,
    blocked_count: blocked.length,
    passed_count: passed.length,
  };
}
