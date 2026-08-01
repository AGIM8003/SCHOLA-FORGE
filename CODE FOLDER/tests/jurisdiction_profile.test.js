import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  listCanonicalProfiles,
  compileJurisdictionProfile,
  assessProfileCompleteness,
  attemptSignProfile,
} from '../src/jurisdiction/index.js';

describe('SF-JUR-001 jurisdiction profile', () => {
  it('lists three Community profiles and forbids universal Belgium', () => {
    const list = listCanonicalProfiles();
    assert.equal(list.length, 3);
    assert.ok(list.every((p) => p.production_activatable === false));
    const bad = compileJurisdictionProfile({ profile_id: 'BE-UNIVERSAL' });
    assert.equal(bad.ok, false);
  });

  it('compiles DRAFT only and keeps decision_lock until signed+complete', () => {
    const r = compileJurisdictionProfile({
      profile_id: 'BE-FL-EDU',
      school_type: 'secondary',
      education_level: 'SO',
    });
    assert.equal(r.ok, true);
    assert.equal(r.profile.status, 'DRAFT');
    assert.equal(r.production_activatable, false);
    assert.equal(r.decision_lock, true);
    assert.ok(r.completeness.missing.includes('community_authority'));
  });

  it('records human signature metadata without production activation', () => {
    const draft = compileJurisdictionProfile({
      profile_id: 'BE-FR-EDU',
      community_authority: 'FWB',
      school_type: 'primary',
      education_level: 'fond',
      funding_status: 'public',
      curriculum_authority: 'fwb-curr',
      inspection_authority: 'fwb-insp',
      qualification_authority: 'fwb-qual',
      staff_framework: 'fwb-staff',
      records_rules: 'fwb-records',
      complaints_authority: 'fwb-complaints',
      appeals_authority: 'fwb-appeals',
      data_protection_role: 'dpo',
      safeguarding_referral_map: 'map',
      health_and_food_authorities: 'health',
      procurement_regime: 'public',
      reviewed_by: 'counsel',
      review_date: '2026-07-20',
      expiry_date: '2027-07-20',
    });
    assert.equal(assessProfileCompleteness(draft.profile).complete, true);
    const signed = attemptSignProfile(draft.profile, {
      human_signer_id: 'gov-1',
      qualified_role: 'governing_body',
    });
    assert.equal(signed.ok, true);
    assert.equal(signed.profile.status, 'SIGNED');
    assert.equal(signed.production_activatable, false);
  });
});
