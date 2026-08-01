/**
 * SF-RGC-001 — CRAG Corrective Retrieval-Augmented Generation
 * Unified states from blueprint PART I-A.4
 */

export const CRAG_STATES = Object.freeze([
  'HIGH_SUPPORT',
  'MEDIUM_SUPPORT',
  'LOW_SUPPORT',
  'CONFLICTING',
  'IRRELEVANT',
  'INSUFFICIENT',
  'UNAUTHORIZED',
  'STALE',
]);

const LEGACY = Object.freeze({
  HIGH: 'HIGH_SUPPORT',
  MEDIUM: 'MEDIUM_SUPPORT',
  LOW: 'LOW_SUPPORT',
  INSUFFICIENT_EVIDENCE: 'INSUFFICIENT',
});

export function normalizeCragState(state) {
  if (!state) return 'INSUFFICIENT';
  const s = String(state).toUpperCase();
  if (LEGACY[s]) return LEGACY[s];
  if (CRAG_STATES.includes(s)) return s;
  return 'INSUFFICIENT';
}

/**
 * Evaluate a candidate set and assign CRAG state.
 * @param {object[]} candidates
 * @param {object} request
 */
export function evaluateCrag(candidates = [], request = {}) {
  const assurance = request.assurance_class || 'A0_EXPLANATORY';

  if (!candidates.length) {
    return decide('INSUFFICIENT', 'EMPTY_CANDIDATE_SET', assurance);
  }

  if (candidates.some((c) => c.unauthorized === true)) {
    return decide('UNAUTHORIZED', 'UNAUTHORIZED_SEGMENT', assurance);
  }

  const active = candidates.filter((c) => c.status !== 'revoked');
  const stale = active.filter((c) => c.stale === true || c.status === 'superseded');
  const fresh = active.filter((c) => !c.stale && c.status !== 'superseded');

  if (!fresh.length && stale.length) {
    return decide('STALE', 'ONLY_STALE_SOURCES', assurance);
  }

  const claims = fresh.map((c) => c.claim_key).filter(Boolean);
  const uniqueClaims = new Set(claims);
  if (uniqueClaims.size > 1) {
    return decide('CONFLICTING', 'CONFLICTING_CLAIMS', assurance, {
      counter_evidence_required: true,
      claims: [...uniqueClaims],
    });
  }

  const relevance = fresh.filter((c) => c.relevant !== false);
  if (!relevance.length) {
    return decide('IRRELEVANT', 'NO_RELEVANT_SEGMENTS', assurance);
  }

  const supportScore = relevance.reduce((acc, c) => acc + (c.authority_score || 0.5), 0) / relevance.length;
  if (supportScore >= 0.8) return decide('HIGH_SUPPORT', 'STRONG_AUTHORITY', assurance);
  if (supportScore >= 0.55) return decide('MEDIUM_SUPPORT', 'PARTIAL_AUTHORITY', assurance);
  return decide('LOW_SUPPORT', 'WEAK_AUTHORITY', assurance);
}

function decide(state, reason, assurance, extra = {}) {
  const crag_state = normalizeCragState(state);
  const mayGenerate = canGenerate(crag_state, assurance);
  return {
    stage: 'CRAG',
    crag_state,
    reason,
    may_generate: mayGenerate,
    fail_closed: !mayGenerate,
    reformulate_allowed: ['LOW_SUPPORT', 'INSUFFICIENT', 'STALE', 'CONFLICTING'].includes(crag_state),
    ...extra,
  };
}

export function canGenerate(cragState, assuranceClass = 'A0_EXPLANATORY') {
  const s = normalizeCragState(cragState);
  if (assuranceClass === 'A4_CONSEQUENTIAL') return false;
  if (['UNAUTHORIZED', 'IRRELEVANT', 'INSUFFICIENT', 'STALE'].includes(s)) return false;
  if (s === 'LOW_SUPPORT' && ['A2_LEARNER_PRACTICE', 'A3_ASSESSMENT_SUPPORT'].includes(assuranceClass)) {
    return false;
  }
  if (s === 'CONFLICTING' && assuranceClass !== 'A0_EXPLANATORY') return false;
  if (assuranceClass === 'A3_ASSESSMENT_SUPPORT' && s !== 'HIGH_SUPPORT') return false;
  return ['HIGH_SUPPORT', 'MEDIUM_SUPPORT', 'LOW_SUPPORT', 'CONFLICTING'].includes(s);
}
