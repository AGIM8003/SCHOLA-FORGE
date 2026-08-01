import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  forgeActivities,
  validateActivity,
  approveActivity,
  publishActivity,
} from '../src/activityforge/index.js';

describe('SF-AFG-001 ActivityForge', () => {
  it('forges structured candidates with accessibility and offline fallback', () => {
    const r = forgeActivities({
      teacher_id: 't1',
      objective: 'water conservation',
      constraints: {
        duration_minutes: 35,
        class_size: 24,
        no_internet: true,
        wheelchair_access: true,
        reading_support: true,
      },
    });
    assert.equal(r.ok, true);
    assert.equal(r.teacher_approval_required, true);
    assert.ok(r.candidates.length >= 1);
    const c = r.candidates[0];
    assert.ok(c.teacher_instructions.length > 0);
    assert.ok(c.accessibility_adaptations.length > 0);
    assert.ok(c.fallback);
    assert.equal(c.assign_official_grade, false);
  });

  it('rejects unsafe materials and internet when forbidden', () => {
    const unsafe = forgeActivities({
      teacher_id: 't1',
      objective: 'lab',
      materials: ['open_flame'],
      constraints: { duration_minutes: 20, class_size: 10 },
    });
    assert.equal(unsafe.ok, false);
    assert.ok(unsafe.rejected.some((x) => x.validation.failures.some((f) => f.includes('UNSAFE'))));

    const online = validateActivity(
      {
        learning_objectives: ['x'],
        duration_minutes: 20,
        class_size: { min: 1, max: 20 },
        delivery_modes: ['online_only'],
        device_requirements: ['internet'],
        materials: ['paper'],
        safety_constraints: ['adult_supervision'],
        fallback: { mode: 'paper' },
        accessibility_adaptations: [],
      },
      { no_internet: true },
    );
    assert.ok(online.validation.failures.includes('REQUIRES_INTERNET_WHEN_FORBIDDEN'));
  });

  it('requires teacher approval before publish and never silent-overwrites', () => {
    const forged = forgeActivities({
      teacher_id: 't1',
      objective: 'maps',
      activity_family_id: 'fam-maps',
      constraints: { duration_minutes: 30, class_size: 20 },
    });
    assert.equal(publishActivity(forged.candidates[0], [], { publisher_id: 't1' }).ok, false);

    const approved = approveActivity(forged.candidates[0], { teacher_id: 't1', approved: true });
    assert.equal(approved.ok, true);
    assert.equal(approved.activity.status, 'approved');

    const pub1 = publishActivity(approved.activity, [], { publisher_id: 't1' });
    assert.equal(pub1.ok, true);
    assert.equal(pub1.silent_overwrite, false);
    assert.equal(pub1.activity.status, 'published');

    const approved2 = approveActivity(
      { ...forged.candidates[0], activity_id: 'afg-new', version: '0.1.0' },
      { teacher_id: 't1', approved: true },
    );
    const pub2 = publishActivity(approved2.activity, pub1.library, { publisher_id: 't1' });
    assert.equal(pub2.ok, true);
    assert.equal(pub2.silent_overwrite, false);
    const retired = pub2.library.filter((a) => a.status === 'retired');
    assert.ok(retired.length >= 1);
    assert.equal(retired[0].retired_reason, 'SUPERSEDED_BY_NEW_VERSION');
  });

  it('rejects official grade automation on activity', () => {
    const bad = validateActivity({
      learning_objectives: ['x'],
      duration_minutes: 10,
      class_size: { min: 1, max: 10 },
      materials: [],
      safety_constraints: ['adult_supervision'],
      fallback: { mode: 'paper' },
      assign_official_grade: true,
    });
    assert.ok(bad.validation.failures.includes('OFFICIAL_GRADE_AUTOMATION_FORBIDDEN'));
  });
});
