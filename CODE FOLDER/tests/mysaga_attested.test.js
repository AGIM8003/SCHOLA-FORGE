import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createAttestedMySaga,
  addPurposeBoundEntry,
  attestedDelete,
  applyReplicaSync,
} from '../src/mysaga/index.js';

describe('MySAGA attested deletion + anti-resurrection', () => {
  it('requires purpose and issues deletion receipt', () => {
    const s = createAttestedMySaga({ owner_ref: 'L', replicas: [{ id: 'r1' }] });
    assert.equal(addPurposeBoundEntry(s, { text: 'x' }).reason, 'PURPOSE_REQUIRED');
    const e = addPurposeBoundEntry(s, { purpose: 'journal', text: 'secret' });
    assert.equal(e.ok, true);
    const d = attestedDelete(s, e.entry.entry_id);
    assert.equal(d.ok, true);
    assert.equal(d.receipt.anti_resurrection, true);
    assert.ok(d.tombstone);
  });

  it('blocks resurrection from delayed replica (INV-09)', () => {
    const s = createAttestedMySaga({ owner_ref: 'L', replicas: [{ id: 'r1', available: true }] });
    const e = addPurposeBoundEntry(s, { purpose: 'note', text: 'a' });
    attestedDelete(s, e.entry.entry_id);
    const rez = applyReplicaSync(s, {
      entry_id: e.entry.entry_id,
      purpose: 'note',
      text: 'back',
    });
    assert.equal(rez.reason, 'ANTI_RESURRECTION_BLOCK');
    assert.equal(rez.invariant, 'INV-09');
  });
});
