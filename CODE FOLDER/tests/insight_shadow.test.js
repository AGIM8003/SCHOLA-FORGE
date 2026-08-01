import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildInsightShadowSummary } from '../src/insight/index.js';

describe('SF-INS-001 INSIGHT shadow', () => {
  it('builds shadow summary without grades', () => {
    const r = buildInsightShadowSummary({
      learner_ref: 'L-1',
      evidence: [
        { polarity: 'strength', claim: 'Completed fraction worksheet with examples' },
        { polarity: 'gap', claim: 'Transfer to word problems unproven' },
        { polarity: 'uncertain', claim: 'Oral explanation not observed' },
      ],
    });
    assert.equal(r.ok, true);
    assert.equal(r.summary.mode, 'SHADOW');
    assert.equal(r.summary.official_grade, null);
    assert.equal(r.summary.ai_may_assign_final_grade, false);
    assert.equal(r.summary.human_review_required, true);
  });

  it('rejects final grade and certification payloads', () => {
    assert.equal(buildInsightShadowSummary({ final_grade: 'B' }).ok, false);
    assert.equal(buildInsightShadowSummary({ official_grade: 'A' }).ok, false);
    assert.equal(buildInsightShadowSummary({ certification_decision: 'pass' }).ok, false);
  });
});
