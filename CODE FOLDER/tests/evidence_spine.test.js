import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createShadowSpine, EvidenceSpine } from '../src/evidence/index.js';

describe('SF-EVS-001 Evidence Spine shadow mode', () => {
  it('only allows SHADOW mode', () => {
    assert.throws(() => new EvidenceSpine({ mode: 'OFFICIAL' }));
  });

  it('appends shadow receipts and verifies chain', () => {
    const spine = createShadowSpine();
    const a = spine.append({
      event_type: 'OBSERVATION',
      tenant_id: 'school-1',
      evidence_packet_id: 'p1',
      crag_state: 'HIGH_SUPPORT',
      payload: { note: 'draft only' },
    });
    assert.equal(a.ok, true);
    assert.equal(a.entry.official_use_authorized, false);
    spine.append({ event_type: 'TEACHER_REVIEW', tenant_id: 'school-1' });
    const snap = spine.snapshot();
    assert.equal(snap.mode, 'SHADOW');
    assert.equal(snap.chain.ok, true);
    assert.equal(snap.official_use_authorized, false);
  });

  it('rejects official grade and AI final grade payloads', () => {
    const spine = createShadowSpine();
    assert.equal(spine.append({ official_grade: 'B' }).ok, false);
    assert.equal(spine.append({ ai_final_grade: 'A' }).ok, false);
  });
});
