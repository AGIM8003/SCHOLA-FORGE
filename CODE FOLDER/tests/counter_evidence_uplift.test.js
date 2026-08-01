import test from 'node:test';
import assert from 'node:assert/strict';

class CounterEvidencePipeline {
  constructor(minAttributionScore = 0.7) {
    this.minAttribution = minAttributionScore;
  }

  synthesizeEvidence(primarySource, counterSources = []) {
    if (!primarySource || !primarySource.text) {
      return { status: 'HALLUCINATION_GUARD_TRIGGERED', reason: 'EMPTY_PRIMARY_SOURCE' };
    }

    const verifiedCounters = counterSources.filter(s => s.attributionScore >= this.minAttribution);

    if (counterSources.length > 0 && verifiedCounters.length === 0) {
      return { status: 'REJECTED_UNRELIABLE_COUNTER_SOURCES', reason: 'LOW_ATTRIBUTION_SCORE' };
    }

    return {
      status: 'SYNTHESIS_COMPLETE',
      primaryText: primarySource.text,
      counterCount: verifiedCounters.length,
      counterTexts: verifiedCounters.map(s => s.text)
    };
  }
}

test('SCHOLA-FORGE Counter-Evidence: Nominal synthesis with verified counter-sources', () => {
  const pipeline = new CounterEvidencePipeline(0.7);
  const primary = { text: 'Quantum computation improves prime factorization speed.', attributionScore: 0.95 };
  const counters = [
    { text: 'Classical pre-computation still required for initial state setup.', attributionScore: 0.85 }
  ];

  const res = pipeline.synthesizeEvidence(primary, counters);
  assert.equal(res.status, 'SYNTHESIS_COMPLETE');
  assert.equal(res.counterCount, 1);
});

test('SCHOLA-FORGE Counter-Evidence: Hallucination guard on empty primary source', () => {
  const pipeline = new CounterEvidencePipeline(0.7);
  const res = pipeline.synthesizeEvidence(null, []);
  assert.equal(res.status, 'HALLUCINATION_GUARD_TRIGGERED');
});

test('SCHOLA-FORGE Counter-Evidence: Rejection of low-attribution counter sources', () => {
  const pipeline = new CounterEvidencePipeline(0.7);
  const primary = { text: 'Primary scientific assertion.', attributionScore: 0.9 };
  const counters = [{ text: 'Unverified blog claim.', attributionScore: 0.3 }];

  const res = pipeline.synthesizeEvidence(primary, counters);
  assert.equal(res.status, 'REJECTED_UNRELIABLE_COUNTER_SOURCES');
});
