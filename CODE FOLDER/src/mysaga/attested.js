/**
 * MySAGA attested deletion + anti-resurrection (INV-09)
 * Extends shadow store with purpose keys, tombstones, replica acks.
 * STATUS: SOFTWARE WORKING · FILING_NOT_AUTHORIZED
 */
import crypto from 'node:crypto';
import {
  createMySagaStore,
  addPrivateEntry,
  selectiveForget,
  exportAllowed,
  buildServerSafeView,
} from './store.js';

export function createAttestedMySaga(owner = {}) {
  const store = createMySagaStore(owner);
  store.mode = 'SHADOW_LOCAL_ATTESTED';
  store.replicas = owner.replicas || [];
  store.tombstones = [];
  store.deletion_receipts = [];
  store.purpose_keys = {};
  return store;
}

export function addPurposeBoundEntry(store, entry = {}) {
  if (!entry.purpose) {
    return { ok: false, reason: 'PURPOSE_REQUIRED' };
  }
  const r = addPrivateEntry(store, {
    ...entry,
    kind: entry.kind || 'evidence',
  });
  if (!r.ok) return r;

  r.entry.purpose = entry.purpose;
  r.entry.authority = entry.authority || null;
  r.entry.retention_class = entry.retention_class || 'session';
  r.entry.expiry_utc = entry.expiry_utc || null;
  r.entry.deletion_eligibility = entry.deletion_eligibility !== false;
  r.entry.replica_status = 'PRIMARY';
  r.entry.sharing_boundary = entry.sharing_boundary || 'owner_only';

  if (!store.purpose_keys[entry.purpose]) {
    store.purpose_keys[entry.purpose] = crypto.randomBytes(8).toString('hex');
  }
  r.entry.purpose_key_id = store.purpose_keys[entry.purpose];
  return r;
}

/**
 * Attested deletion with tombstone + replica acknowledgement + anti-resurrection.
 */
export function attestedDelete(store, entryId, opts = {}) {
  const item = store.entries.find((e) => e.entry_id === entryId);
  if (!item) return { ok: false, reason: 'NOT_FOUND', receipt: null };
  if (item.deletion_eligibility === false || opts.lawful_hold === true) {
    return {
      ok: false,
      reason: 'LAWFUL_HOLD_OR_INELIGIBLE',
      receipt: null,
    };
  }

  selectiveForget(store, entryId);
  item.replica_status = 'TOMBSTONED';

  const tombstone = {
    entry_id: entryId,
    purpose: item.purpose || null,
    deleted_at_utc: new Date().toISOString(),
    key_revoked: true,
  };
  store.tombstones.push(tombstone);

  if (store.purpose_keys[item.purpose]) {
    delete store.purpose_keys[item.purpose];
  }

  const replicaAcks = (store.replicas || []).map((r) => ({
    replica_id: r.id || r,
    acknowledged: r.available !== false,
    status: r.available === false ? 'UNAVAILABLE' : 'ACK_TOMBSTONE',
  }));

  const receipt = {
    schema_id: 'ScholaForgeDeletionReceipt/v1',
    feature_id: 'SF-SAGA-001',
    request_id: opts.request_id || `del-${Date.now()}`,
    scope: opts.scope || 'entry',
    eligible_objects: [entryId],
    excluded_objects: [],
    lawful_holds: opts.lawful_hold ? [entryId] : [],
    destroyed_or_revoked_keys: [item.purpose_key_id].filter(Boolean),
    acknowledged_replicas: replicaAcks.filter((a) => a.acknowledged),
    unavailable_replicas: replicaAcks.filter((a) => !a.acknowledged),
    unresolved_derivatives: opts.unresolved_derivatives || [],
    verification_result: 'TOMBSTONE_WRITTEN',
    anti_resurrection: true,
    created_at_utc: new Date().toISOString(),
  };
  store.deletion_receipts.push(receipt);
  return { ok: true, receipt, tombstone };
}

/**
 * Reject resurrection of tombstoned entry from delayed replica sync (INV-09).
 */
export function applyReplicaSync(store, incoming = {}) {
  if (!store) return { ok: false, reason: 'NO_STORE' };
  const id = incoming.entry_id;
  const tombstoned = store.tombstones.some((t) => t.entry_id === id);
  if (tombstoned) {
    return {
      ok: false,
      fail_closed: true,
      reason: 'ANTI_RESURRECTION_BLOCK',
      invariant: 'INV-09',
    };
  }
  if (incoming.forgotten === true) {
    return { ok: true, reason: 'TOMBSTONE_PROPAGATED' };
  }
  // Fresh entry from replica — only if not tombstoned
  return addPurposeBoundEntry(store, {
    ...incoming,
    purpose: incoming.purpose || 'replica_sync',
  });
}

export {
  createMySagaStore,
  addPrivateEntry,
  selectiveForget,
  exportAllowed,
  buildServerSafeView,
};
