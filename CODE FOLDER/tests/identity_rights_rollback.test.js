import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createPrincipal, authorizeAction } from '../src/identity/index.js';
import { openRightsRequest, decideRightsRequest } from '../src/rights/index.js';
import { runRollbackDrill } from '../src/ops/index.js';
import { createPilotEnvelope } from '../src/pilot/index.js';

describe('identity, rights, rollback (working)', () => {
  it('enforces purpose-bound roles', () => {
    const p = createPrincipal({
      principal_id: 't1',
      role: 'teacher',
      tenant_id: 'school-1',
      purposes: ['lesson_draft'],
    });
    assert.equal(authorizeAction(p.principal, { action: 'teacher_draft', tenant_id: 'school-1', purpose: 'lesson_draft' }).allowed, true);
    assert.equal(authorizeAction(p.principal, { action: 'safeguarding_case' }).allowed, false);
    assert.equal(authorizeAction(p.principal, { action: 'teacher_draft', tenant_id: 'other' }).allowed, false);
  });

  it('routes safeguarding urgently and forbids auto-reject', () => {
    const req = openRightsRequest({
      issue_class: 'safeguarding_urgent',
      plain_language: 'Immediate safety concern',
      requester_role: 'teacher',
    });
    assert.equal(req.request.bypass_queue, true);
    assert.equal(req.request.urgency, 'critical');
    assert.equal(decideRightsRequest(req.request, { auto_reject: true, officer_id: 'x' }).ok, false);
    assert.equal(decideRightsRequest(req.request, { officer_id: 'sg-1', granted: true, remedy: 'escalate' }).ok, true);
  });

  it('stop-rule drill produces rollback receipt without high-impact writes', () => {
    const pilot = createPilotEnvelope({
      community: 'BE-FL-EDU',
      school_type: 'secondary',
      education_level: 'SO',
      age_range: '12-14',
      sites: ['a'],
      duration_weeks: 8,
    });
    const drill = runRollbackDrill({
      envelope: pilot.envelope,
      signals: { data_incident: true },
      owner: 'security_owner',
    });
    assert.equal(drill.ok, true);
    assert.equal(drill.receipt.new_writes_disabled, true);
    assert.equal(drill.receipt.partial_high_impact_writes, false);
    assert.equal(drill.receipt.production_approved, false);
  });
});
