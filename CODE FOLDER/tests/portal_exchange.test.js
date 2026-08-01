import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createPortalGrant, portalExchange, PORTAL_PROFILES } from '../src/portal/index.js';

describe('Constrained interoperability portal', () => {
  it('requires signed grant and known profile', () => {
    assert.ok(PORTAL_PROFILES.includes('OneRoster'));
    assert.equal(createPortalGrant({ profile: 'Nope' }).ok, false);
    const g = createPortalGrant({
      profile: 'LTI_Advantage',
      tenant_id: 't1',
      jurisdiction_profile_id: 'BE-FL-EDU',
      purpose: 'launch',
      capabilities: ['read'],
    });
    assert.equal(g.ok, true);
    assert.equal(portalExchange({ capability: 'read' }, null).reason, 'INV-10_NO_CAPABILITY_GRANT');
  });

  it('enforces tenant/purpose and blocks official grade writes', () => {
    const g = createPortalGrant({
      profile: 'OneRoster',
      tenant_id: 'school-1',
      jurisdiction_profile_id: 'BE-FL-EDU',
      purpose: 'roster_sync',
      capabilities: ['read', 'write'],
    });
    assert.equal(
      portalExchange(
        { capability: 'write', tenant_id: 'other', purpose: 'roster_sync' },
        g.grant,
      ).reason,
      'TENANT_BOUNDARY',
    );
    assert.equal(
      portalExchange(
        {
          capability: 'write',
          tenant_id: 'school-1',
          purpose: 'roster_sync',
          apply_official_grade: true,
        },
        g.grant,
      ).reason,
      'INV-02_SHADOW_GRADE_ONLY',
    );
    assert.equal(
      portalExchange(
        { capability: 'read', tenant_id: 'school-1', purpose: 'roster_sync', dry_run: true },
        g.grant,
      ).ok,
      true,
    );
  });
});
