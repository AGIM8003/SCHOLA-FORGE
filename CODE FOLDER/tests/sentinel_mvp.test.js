import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  EvidenceLedger,
  lintClaimText,
  lintStatusObject,
  evaluateGateMatrix,
  emitFinalStatus,
  renderOperatorSummary,
  AGENT_GATES,
} from '../src/sentinel/index.js';

const ALL_AGENT_GATES = Object.keys(AGENT_GATES);

describe('SENTINEL MVP', () => {
  it('evidence ledger appends and verifies chain', () => {
    const led = new EvidenceLedger();
    led.append('TEST', { a: 1 });
    led.append('TEST', { a: 2 });
    const snap = led.snapshot();
    assert.equal(snap.chain.ok, true);
    assert.equal(snap.length, 2);
  });

  it('claim ledger denies false-completion language', () => {
    const bad = lintClaimText('PRODUCTION_READY and PILOT_READY');
    assert.equal(bad.verdict, 'DENY');
    const good = lintClaimText('RELEASE_BLOCKED PRODUCTION_NOT_APPROVED PILOT_NOT_READY');
    assert.equal(good.verdict, 'ACCEPT');
  });

  it('status object lint blocks production_approved=true', () => {
    const r = lintStatusObject({ production_approved: true });
    assert.equal(r.verdict, 'DENY');
  });

  it('gate matrix stays RELEASE_BLOCKED when agent gates pass', () => {
    const receipts = Object.fromEntries(ALL_AGENT_GATES.map((id) => [id, { status: 'PASS' }]));
    const m = evaluateGateMatrix(receipts);
    assert.equal(m.agent_scope_complete, true);
    assert.equal(m.release_authority_status, 'RELEASE_BLOCKED');
    assert.equal(m.production_approved, false);
    assert.equal(m.finite_status, 'AGENT_SCOPE_CODE_MVP5_WHOLE_BODY_UPLIFT_EXTERNAL_BLOCKERS_OPEN');
    assert.equal(m.filing_authorized, false);
    assert.equal(m.patent_granted, false);
    assert.equal(m.external_gates.G_JURISDICTION.status, 'NOT_DECIDED');
  });

  it('FINAL_STATUS never authorizes production or pilot', () => {
    const receipts = Object.fromEntries(ALL_AGENT_GATES.map((id) => [id, { status: 'PASS' }]));
    const status = emitFinalStatus(receipts, { tip: 'test', branch: 'local' });
    assert.equal(status.production_approved, false);
    assert.equal(status.pilot_ready, false);
    assert.equal(status.ai_may_assign_final_grade, false);
    assert.equal(status.release_authority_status, 'RELEASE_BLOCKED');
    assert.match(renderOperatorSummary(status), /OPERATOR_SUMMARY/);
  });
});
