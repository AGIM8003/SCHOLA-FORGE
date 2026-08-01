/**
 * SF-EVS-001 — Evidence Spine (shadow mode)
 * STATUS: SOFTWARE MVP — append-only shadow receipts; never official grades.
 */
import crypto from 'node:crypto';

export class EvidenceSpine {
  constructor(opts = {}) {
    this.mode = opts.mode || 'SHADOW';
    this.entries = [];
    if (this.mode !== 'SHADOW') {
      throw new Error('Only SHADOW mode authorized in CODE MVP-1');
    }
  }

  /**
   * Append a shadow evidence receipt.
   * Rejects official grade / consequential certification payloads.
   */
  append(event = {}) {
    if (event.official_grade != null || event.certification_decision != null) {
      return {
        ok: false,
        reason: 'OFFICIAL_GRADE_OR_CERTIFICATION_FORBIDDEN_IN_SHADOW',
        entry: null,
      };
    }
    if (event.ai_final_grade != null) {
      return {
        ok: false,
        reason: 'AI_FINAL_GRADE_FORBIDDEN',
        entry: null,
      };
    }

    const prev = this.entries.length
      ? this.entries[this.entries.length - 1].entry_hash
      : '0'.repeat(64);

    const body = {
      seq: this.entries.length + 1,
      feature_id: 'SF-EVS-001',
      mode: 'SHADOW',
      event_type: event.event_type || 'EVIDENCE_OBSERVED',
      actor_role: event.actor_role || null,
      purpose: event.purpose || null,
      tenant_id: event.tenant_id || null,
      evidence_packet_id: event.evidence_packet_id || null,
      crag_state: event.crag_state || null,
      payload: event.payload || {},
      human_review_required: event.human_review_required !== false,
      official_use_authorized: false,
      prev_hash: prev,
      recorded_at_utc: new Date().toISOString(),
    };

    const entry_hash = crypto.createHash('sha256').update(JSON.stringify(body)).digest('hex');
    const entry = { ...body, entry_hash };
    this.entries.push(entry);
    return { ok: true, entry };
  }

  verifyChain() {
    let prev = '0'.repeat(64);
    for (const e of this.entries) {
      if (e.prev_hash !== prev) return { ok: false, reason: 'PREV_HASH_MISMATCH', seq: e.seq };
      const { entry_hash, ...body } = e;
      const expected = crypto.createHash('sha256').update(JSON.stringify(body)).digest('hex');
      if (expected !== entry_hash) return { ok: false, reason: 'ENTRY_HASH_MISMATCH', seq: e.seq };
      if (e.official_use_authorized === true) {
        return { ok: false, reason: 'SHADOW_BROKEN_OFFICIAL_FLAG', seq: e.seq };
      }
      prev = entry_hash;
    }
    return { ok: true, length: this.entries.length };
  }

  snapshot() {
    return {
      schema_id: 'ScholaForgeEvidenceSpine/v1',
      feature_id: 'SF-EVS-001',
      mode: 'SHADOW',
      length: this.entries.length,
      chain: this.verifyChain(),
      tip_hash: this.entries.length ? this.entries[this.entries.length - 1].entry_hash : null,
      official_use_authorized: false,
    };
  }
}

export function createShadowSpine() {
  return new EvidenceSpine({ mode: 'SHADOW' });
}
