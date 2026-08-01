/**
 * SF-SAGA-001 — MySAGA private educational twin (shadow / local-first MVP)
 * Proven behavior: private entries, selective forget, export control, no server profiling payload.
 */

import crypto from 'node:crypto';

export function createMySagaStore(owner = {}) {
  return {
    schema_id: 'ScholaForgeMySagaStore/v1',
    feature_id: 'SF-SAGA-001',
    owner_ref: owner.owner_ref || null,
    tenant_id: owner.tenant_id || null,
    mode: 'SHADOW_LOCAL',
    entries: [],
    server_profiling_payload_allowed: false,
    created_at_utc: new Date().toISOString(),
  };
}

export function addPrivateEntry(store, entry = {}) {
  if (!store) return { ok: false, reason: 'NO_STORE' };
  if (entry.share_to_server === true && store.server_profiling_payload_allowed !== true) {
    return { ok: false, reason: 'SERVER_PROFILING_FORBIDDEN' };
  }
  const item = {
    entry_id: crypto.randomBytes(6).toString('hex'),
    kind: entry.kind || 'journal',
    text: entry.text || '',
    tags: entry.tags || [],
    visibility: entry.visibility || 'private',
    exportable: entry.exportable !== false,
    created_at_utc: new Date().toISOString(),
    forgotten: false,
  };
  store.entries.push(item);
  return { ok: true, entry: item };
}

export function selectiveForget(store, entryId) {
  const item = store.entries.find((e) => e.entry_id === entryId);
  if (!item) return { ok: false, reason: 'NOT_FOUND' };
  item.forgotten = true;
  item.text = '';
  item.forgotten_at_utc = new Date().toISOString();
  return { ok: true, entry: item };
}

export function exportAllowed(store, opts = {}) {
  const live = store.entries.filter((e) => !e.forgotten && e.exportable);
  if (opts.include_forgotten) {
    return { ok: false, reason: 'FORGOTTEN_NOT_EXPORTABLE' };
  }
  return {
    ok: true,
    export_package: {
      owner_ref: store.owner_ref,
      mode: store.mode,
      entries: live.map((e) => ({
        entry_id: e.entry_id,
        kind: e.kind,
        text: e.text,
        tags: e.tags,
        visibility: e.visibility,
      })),
      server_profiling_payload: null,
      exported_at_utc: new Date().toISOString(),
    },
  };
}

export function buildServerSafeView(store) {
  // Main server may receive only non-private aggregates if ever enabled; MVP returns empty.
  return {
    ok: true,
    server_view: {
      tenant_id: store.tenant_id,
      private_entry_count: store.entries.filter((e) => !e.forgotten).length,
      contents: null,
      profiling_features: null,
      note: 'MySAGA private contents are not sent to main server profiling.',
    },
  };
}
