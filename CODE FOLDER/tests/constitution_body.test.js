import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  evaluateInvariants,
  INVARIANTS,
  authorize,
  compileExecutionContract,
  runOrganismBody,
  METABOLISM_STAGES,
} from '../src/constitution/index.js';

describe('SYS-COMBO-001 whole-body constitution', () => {
  it('defines 14 invariants and 14 metabolism stages', () => {
    assert.equal(INVARIANTS.length, 14);
    assert.equal(METABOLISM_STAGES.length, 14);
  });

  it('fail-closes official AI grades and missing jurisdiction', () => {
    const g = authorize(
      { purpose: 'grade', consequential: true, apply_ai_grade_as_official: true },
      { jurisdiction_profile_id: 'BE-FL-EDU', policy_id: 'p1', human_authority: true },
    );
    assert.equal(g.ok, false);
    assert.equal(g.reason, 'INV-02_SHADOW_GRADE_ONLY');

    const m = authorize(
      { purpose: 'assist' },
      { policy_id: 'p1', human_authority: true },
    );
    assert.equal(m.ok, false);
    assert.match(m.reason, /INV-03/);
  });

  it('blocks filing/novelty claims via INV-14', () => {
    const r = evaluateInvariants({ claim_filing_authorized: true });
    assert.equal(r.ok, false);
    assert.ok(r.violations.includes('INV-14'));
  });

  it('compiles execution contract when authorized', () => {
    const c = compileExecutionContract({
      request: { purpose: 'practice' },
      ctx: {
        jurisdiction_profile_id: 'BE-FL-EDU',
        policy_id: 'p1',
        human_authority: true,
        teacher_id: 't1',
      },
    });
    assert.equal(c.ok, true);
    assert.equal(c.contract.shadow_grade_only, true);
    assert.equal(c.contract.filing_authorized, false);
  });

  it('runs whole-body organism path TIM→LIG→EVS under constitution', () => {
    const run = runOrganismBody({ teacher_id: 't1' });
    assert.equal(run.ok, true, `failed: ${run.failed?.join(',')}`);
    assert.equal(run.disclosure_id, 'SYS-COMBO-001');
    assert.equal(run.filing_authorized, false);
    assert.equal(run.novelty_confirmed, false);
    assert.ok(run.proofs.inv02_blocks_official_ai_grade);
    assert.ok(run.proofs.tim_attempt_gate);
    assert.ok(run.proofs.lig_blocks_ai_only_mastery);
    assert.ok(run.proofs.ttl_manual_fallback);
    assert.ok(run.status.includes('DISCLOSURE_READY'));
    assert.ok(run.status.includes('FILING_NOT_AUTHORIZED'));
  });
});
