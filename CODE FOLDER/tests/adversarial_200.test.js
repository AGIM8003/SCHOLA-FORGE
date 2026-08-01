import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildAdversarialCorpus, runAdversarialCorpus } from '../src/adversarial/index.js';
import { measureTechnicalEffects } from '../src/measurement/index.js';

describe('WP-P2 adversarial 200 + technical effects', () => {
  it('builds exactly 200 cases', () => {
    assert.equal(buildAdversarialCorpus().length, 200);
  });

  it('executes 200 cross-organ cases with zero failures', () => {
    const r = runAdversarialCorpus();
    assert.equal(r.total, 200);
    assert.equal(r.failed_count, 0, `failed: ${r.failed?.join(',')}`);
    assert.equal(r.filing_authorized, false);
  });

  it('measures technical effects without unexpected allows', () => {
    const m = measureTechnicalEffects();
    assert.equal(m.failed.length, 0, m.failed.join(','));
    assert.equal(m.filing_authorized, false);
  });
});
