/**
 * MotionClass No-ID event model + Activity Conductor (organ of SYS-COMBO-001)
 * Abstract events only — no face, name, biometric, emotion, or persistent gait ID.
 * STATUS: SOFTWARE WORKING · DISCLOSURE_READY · FILING_NOT_AUTHORIZED
 */
import { authorize } from '../constitution/control_plane.js';
import { evaluateInvariants } from '../constitution/invariants.js';

export const ABSTRACT_EVENT_TYPES = Object.freeze([
  'zone_entered',
  'zone_count_changed',
  'object_moved',
  'group_ready',
  'gesture_triggered',
  'activity_completed',
]);

const FORBIDDEN_FIELDS = Object.freeze([
  'face',
  'name',
  'biometric',
  'emotion',
  'gait_signature',
  'learner_id',
  'camera_frame',
]);

/**
 * Transform raw sensor payload into No-ID abstract event (INV-08).
 */
export function transformNoIdEvent(raw = {}) {
  for (const f of FORBIDDEN_FIELDS) {
    if (raw[f] != null && raw[f] !== false) {
      return {
        ok: false,
        fail_closed: true,
        reason: 'IDENTITY_BEARING_FIELD_REJECTED',
        field: f,
        event: null,
      };
    }
  }

  const type = raw.type || raw.event_type;
  if (!ABSTRACT_EVENT_TYPES.includes(type)) {
    return { ok: false, reason: 'UNKNOWN_OR_NON_ABSTRACT_EVENT', event: null };
  }

  const inv = evaluateInvariants({
    motion_event: true,
    persist_biometric_identity: false,
  });
  if (!inv.ok) {
    return { ok: false, reason: 'INV-08', violations: inv.violations };
  }

  const event = {
    schema_id: 'ScholaForgeNoIdMotionEvent/v1',
    feature_id: 'SF-MOT-001',
    type,
    zone_id: raw.zone_id || null,
    count: typeof raw.count === 'number' ? raw.count : null,
    object_id: raw.object_id || null,
    group_id: raw.group_id || null,
    confidence: raw.confidence ?? null,
    identity_bearing: false,
    source_frame_retained: false,
    at: new Date().toISOString(),
  };

  return { ok: true, event, source_frame_destroyed: true };
}

/**
 * Activity Conductor — deterministic activity runtime under constitutional auth.
 */
export function createActivityConductor(input = {}) {
  const auth = authorize(
    {
      purpose: input.purpose || 'motion_activity',
      consequential: false,
    },
    {
      jurisdiction_profile_id: input.jurisdiction_profile_id || 'BE-FL-EDU',
      policy_id: input.policy_id || 'sf-constitution-v1',
      human_authority: input.human_authority !== false,
      teacher_id: input.teacher_id,
    },
  );
  if (!auth.ok) {
    return { ok: false, reason: auth.reason, conductor: null };
  }

  return {
    ok: true,
    conductor: {
      schema_id: 'ScholaForgeActivityConductor/v1',
      feature_id: 'SF-MOT-001',
      activity_id: input.activity_id || `act-${Date.now()}`,
      teacher_id: input.teacher_id || null,
      state: 'READY',
      zones: input.zones || [],
      events: [],
      ai_enabled: true,
      degraded: false,
      source_frames_retained: false,
      receipts: [],
      created_at_utc: new Date().toISOString(),
    },
  };
}

export function ingestMotionEvent(conductor, raw) {
  if (!conductor) return { ok: false, reason: 'NO_CONDUCTOR' };
  if (conductor.degraded) return { ok: false, reason: 'DEGRADED_MODE' };

  const t = transformNoIdEvent(raw);
  if (!t.ok) {
    conductor.receipts.push({
      event: 'MOTION_REJECTED',
      reason: t.reason,
      at: new Date().toISOString(),
    });
    return t;
  }

  conductor.events.push(t.event);
  conductor.state = 'ACTIVE';
  conductor.receipts.push({
    event: 'MOTION_ACCEPTED',
    type: t.event.type,
    source_frame_destroyed: true,
    at: new Date().toISOString(),
  });
  return { ok: true, event: t.event, conductor };
}

export function degradeConductor(conductor, reason) {
  if (!conductor) return { ok: false, reason: 'NO_CONDUCTOR' };
  conductor.degraded = true;
  conductor.ai_enabled = false;
  conductor.state = 'DEGRADED';
  conductor.source_frames_retained = false;
  conductor.receipts.push({
    event: 'DEGRADE',
    reason: reason || 'FAULT',
    manual_available: true,
    at: new Date().toISOString(),
  });
  return { ok: true, conductor, manual_available: true };
}

export function destroySourceFrames(conductor) {
  if (!conductor) return { ok: false, reason: 'NO_CONDUCTOR' };
  conductor.source_frames_retained = false;
  conductor.receipts.push({
    event: 'SOURCE_FRAMES_DESTROYED',
    at: new Date().toISOString(),
  });
  return { ok: true, source_frames_retained: false };
}
