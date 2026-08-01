import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  transformNoIdEvent,
  createActivityConductor,
  ingestMotionEvent,
  degradeConductor,
} from '../src/motionclass/index.js';

describe('MotionClass No-ID + Activity Conductor', () => {
  it('rejects identity-bearing fields and accepts abstract events', () => {
    assert.equal(
      transformNoIdEvent({ type: 'zone_entered', face: 'x' }).reason,
      'IDENTITY_BEARING_FIELD_REJECTED',
    );
    assert.equal(
      transformNoIdEvent({ type: 'zone_entered', emotion: 'happy' }).reason,
      'IDENTITY_BEARING_FIELD_REJECTED',
    );
    const ok = transformNoIdEvent({ type: 'zone_count_changed', zone_id: 'A', count: 3 });
    assert.equal(ok.ok, true);
    assert.equal(ok.event.identity_bearing, false);
    assert.equal(ok.source_frame_destroyed, true);
  });

  it('runs conductor under constitution and degrades safely', () => {
    const c = createActivityConductor({ teacher_id: 't1', zones: ['A'] });
    assert.equal(c.ok, true);
    assert.equal(ingestMotionEvent(c.conductor, { type: 'group_ready', group_id: 'g1' }).ok, true);
    degradeConductor(c.conductor, 'network');
    assert.equal(c.conductor.degraded, true);
    assert.equal(ingestMotionEvent(c.conductor, { type: 'zone_entered', zone_id: 'A' }).ok, false);
  });
});
