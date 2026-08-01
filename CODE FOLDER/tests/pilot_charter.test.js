import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createPilotEnvelope,
  attemptSignPilot,
  isCapabilityAllowed,
  DEFAULT_DENYLIST,
} from '../src/pilot/index.js';

describe('SF-PIL-001 pilot charter', () => {
  it('creates draft envelope with default deny list', () => {
    const r = createPilotEnvelope({ community: 'BE-FL-EDU' });
    assert.equal(r.envelope.status, 'DRAFT');
    assert.equal(r.pilot_ready, false);
    assert.ok(r.envelope.capability_denylist.includes('OFFICIAL_GRADE_AUTOMATION'));
    assert.ok(DEFAULT_DENYLIST.includes('CAMERA_SECUREBOARD'));
  });

  it('signs only when complete and keeps pilot_ready false', () => {
    const draft = createPilotEnvelope({
      community: 'BE-FL-EDU',
      school_type: 'secondary',
      education_level: 'SO',
      age_range: '12-14',
      sites: ['site-a'],
      duration_weeks: 8,
    });
    const signed = attemptSignPilot(draft.envelope, {
      human_signer_id: 'board-1',
      governing_body_role: 'school_board',
    });
    assert.equal(signed.ok, true);
    assert.equal(signed.envelope.signed, true);
    assert.equal(signed.pilot_ready, false);
    assert.equal(signed.production_activatable, false);
    const cap = isCapabilityAllowed(signed.envelope, 'A1_TEACHER_SUPPORT');
    assert.equal(cap.allowed, true);
    assert.equal(isCapabilityAllowed(signed.envelope, 'OFFICIAL_GRADE_AUTOMATION').allowed, false);
  });
});
