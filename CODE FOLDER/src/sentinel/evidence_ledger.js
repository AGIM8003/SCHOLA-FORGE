/**
 * Sentinel Evidence Ledger — append-only software ledger.
 * STATUS: SOFTWARE MVP — not production assurance; RELEASE_BLOCKED.
 */
import crypto from 'node:crypto';

export class EvidenceLedger {
  constructor() {
    this.entries = [];
  }

  append(eventType, payload = {}) {
    const prev = this.entries.length
      ? this.entries[this.entries.length - 1].entry_hash
      : '0'.repeat(64);
    const body = {
      seq: this.entries.length + 1,
      event_type: eventType,
      payload,
      prev_hash: prev,
      recorded_at_utc: new Date().toISOString(),
    };
    const entry_hash = crypto
      .createHash('sha256')
      .update(JSON.stringify(body))
      .digest('hex');
    const entry = { ...body, entry_hash };
    this.entries.push(entry);
    return entry;
  }

  verifyChain() {
    let prev = '0'.repeat(64);
    for (const e of this.entries) {
      if (e.prev_hash !== prev) return { ok: false, reason: 'PREV_HASH_MISMATCH', seq: e.seq };
      const { entry_hash, ...body } = e;
      const expected = crypto.createHash('sha256').update(JSON.stringify(body)).digest('hex');
      if (expected !== entry_hash) return { ok: false, reason: 'ENTRY_HASH_MISMATCH', seq: e.seq };
      prev = entry_hash;
    }
    return { ok: true, length: this.entries.length };
  }

  snapshot() {
    return {
      schema_id: 'ScholaForgeEvidenceLedger/v1',
      length: this.entries.length,
      chain: this.verifyChain(),
      tip_hash: this.entries.length ? this.entries[this.entries.length - 1].entry_hash : null,
    };
  }
}
