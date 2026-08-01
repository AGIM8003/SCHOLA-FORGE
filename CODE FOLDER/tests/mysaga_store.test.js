import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createMySagaStore,
  addPrivateEntry,
  selectiveForget,
  exportAllowed,
  buildServerSafeView,
} from '../src/mysaga/index.js';

describe('SF-SAGA-001 MySAGA shadow store (working)', () => {
  it('keeps private entries and forbids server profiling share', () => {
    const store = createMySagaStore({ owner_ref: 'L1', tenant_id: 'school-1' });
    assert.equal(addPrivateEntry(store, { text: 'private goal', share_to_server: true }).ok, false);
    assert.equal(addPrivateEntry(store, { text: 'private goal' }).ok, true);
    const view = buildServerSafeView(store);
    assert.equal(view.server_view.contents, null);
    assert.equal(view.server_view.profiling_features, null);
  });

  it('selective forget removes content from export', () => {
    const store = createMySagaStore({ owner_ref: 'L1' });
    const a = addPrivateEntry(store, { text: 'keep' });
    const b = addPrivateEntry(store, { text: 'forget-me' });
    selectiveForget(store, b.entry.entry_id);
    const exp = exportAllowed(store);
    assert.equal(exp.ok, true);
    assert.equal(exp.export_package.entries.length, 1);
    assert.equal(exp.export_package.entries[0].entry_id, a.entry.entry_id);
    assert.equal(exp.export_package.server_profiling_payload, null);
  });
});
