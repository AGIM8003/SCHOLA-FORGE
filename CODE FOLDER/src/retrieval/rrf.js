/**
 * SF-RGC-001 — Reciprocal Rank Fusion
 * score(d) = SUM 1/(k + rank_i(d)); default k=60; memory never wins.
 */

const TRUST = Object.freeze({
  HIGHEST: 3,
  HIGH: 2,
  MEDIUM: 1,
  LOWEST: 0,
  BLOCKED: -1,
});

export function trustBand(retrieverId) {
  switch (retrieverId) {
    case 'curriculum_registry':
    case 'policy_store':
      return 'HIGHEST';
    case 'scholagraph':
    case 'lexical':
    case 'semantic':
    case 'offline_signed_pack':
      return 'HIGH';
    case 'learner_evidence':
      return 'MEDIUM';
    case 'agent_memory':
    case 'session_memory':
      return 'LOWEST';
    case 'other_tenant':
    case 'other_project':
      return 'BLOCKED';
    default:
      return 'MEDIUM';
  }
}

/**
 * @param {Record<string, Array<{id:string}>>} rankedLists map of retrieverId -> ordered candidates
 * @param {{k?: number}} opts
 */
export function reciprocalRankFusion(rankedLists = {}, opts = {}) {
  const k = Number.isFinite(opts.k) ? opts.k : 60;
  const scores = new Map();
  const meta = new Map();

  for (const [retrieverId, list] of Object.entries(rankedLists)) {
    const band = trustBand(retrieverId);
    if (band === 'BLOCKED') continue;
    const bandWeight = TRUST[band];
    (list || []).forEach((item, index) => {
      if (!item?.id) return;
      const rank = index + 1;
      const contrib = (1 / (k + rank)) * bandWeight;
      scores.set(item.id, (scores.get(item.id) || 0) + contrib);
      const m = meta.get(item.id) || { id: item.id, retrievers: [], item };
      m.retrievers.push({ retrieverId, rank, band });
      meta.set(item.id, m);
    });
  }

  const fused = [...scores.entries()]
    .map(([id, score]) => ({
      id,
      score,
      retrievers: meta.get(id).retrievers,
      item: meta.get(id).item,
    }))
    .sort((a, b) => b.score - a.score);

  return {
    stage: 'RRF',
    k,
    fused,
    rule: 'memory_never_wins_over_signed_sources',
  };
}

/**
 * Precedence check: if memory conflicts with signed source, signed wins.
 */
export function resolveMemoryConflict({ memoryClaim, signedClaim }) {
  if (!signedClaim) {
    return { winner: 'none', reason: 'NO_SIGNED_SOURCE', proceed: false };
  }
  if (memoryClaim && memoryClaim !== signedClaim) {
    return {
      winner: 'signed',
      reason: 'MEMORY_NEVER_WINS',
      value: signedClaim,
      proceed: true,
    };
  }
  return { winner: 'signed', reason: 'ALIGNED_OR_NO_MEMORY', value: signedClaim, proceed: true };
}
