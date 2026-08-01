/**
 * SF-RGC-001 — Controlling retrieval pipeline (PART I-A.3)
 * Order: RFF-S -> retrieve/fuse(RRF) -> CRAG -> RFF-F -> evidence packet
 */
import crypto from 'node:crypto';
import { filterScope } from './rff_scope.js';
import { reciprocalRankFusion, resolveMemoryConflict } from './rrf.js';
import { evaluateCrag, canGenerate } from './crag.js';
import { detectFidelityFailures, repairFidelity } from './rff_fidelity.js';

function packetId() {
  return crypto.randomBytes(8).toString('hex');
}

/**
 * @param {object} input
 * @param {object} input.request
 * @param {Record<string, object[]>} input.ranked_lists retriever -> candidates
 * @param {object} [input.fidelity_context]
 * @param {object} [input.memory_conflict]
 */
export function runRetrievalPipeline(input = {}) {
  const request = input.request || {};
  const assurance = request.assurance_class || 'A0_EXPLANATORY';

  if (assurance === 'A4_CONSEQUENTIAL') {
    return failClosed(request, 'A4_CONSEQUENTIAL_NOT_APPROVED', 'UNAUTHORIZED');
  }

  const allCandidates = Object.values(input.ranked_lists || {}).flat();
  const scope = filterScope(allCandidates, request);

  const scopedLists = {};
  const passedIds = new Set(scope.passed.map((c) => c.id));
  for (const [retrieverId, list] of Object.entries(input.ranked_lists || {})) {
    scopedLists[retrieverId] = (list || []).filter((c) => passedIds.has(c.id));
  }

  const rrf = reciprocalRankFusion(scopedLists, { k: request.rrf_k });
  const top = rrf.fused.slice(0, request.top_k || 5).map((f) => f.item);

  let memory = null;
  if (input.memory_conflict) {
    memory = resolveMemoryConflict(input.memory_conflict);
    if (!memory.proceed) {
      return failClosed(request, memory.reason, 'INSUFFICIENT', { scope, rrf, memory });
    }
  }

  const crag = evaluateCrag(top, request);
  if (!crag.may_generate) {
    return {
      ok: false,
      fail_closed: true,
      request,
      scope,
      rrf,
      crag,
      memory,
      evidence_packet: buildPacket(request, {
        selected: top,
        rejected: scope.blocked,
        crag_state: crag.crag_state,
        reason: crag.reason,
      }),
      output: null,
    };
  }

  const fidelityContext = {
    ...(input.fidelity_context || {}),
    source_text: input.fidelity_context?.source_text || top[0]?.text,
    assembled_text:
      input.fidelity_context?.assembled_text ??
      top.map((t) => t.text).filter(Boolean).join('\n'),
  };
  const detection = detectFidelityFailures(fidelityContext);
  const repair = repairFidelity(fidelityContext, detection);
  if (!repair.ok) {
    return {
      ok: false,
      fail_closed: true,
      request,
      scope,
      rrf,
      crag: { ...crag, crag_state: 'INSUFFICIENT', may_generate: false, fail_closed: true },
      rff_f: repair,
      memory,
      evidence_packet: buildPacket(request, {
        selected: top,
        rejected: scope.blocked,
        crag_state: 'INSUFFICIENT',
        reason: 'RFF_F_REPAIR_FAILED',
        fidelity_failures: repair.failures,
      }),
      output: null,
    };
  }

  const packet = buildPacket(request, {
    selected: top,
    rejected: scope.blocked,
    crag_state: crag.crag_state,
    reason: crag.reason,
    fidelity_actions: repair.actions || [],
  });

  return {
    ok: true,
    fail_closed: false,
    request,
    scope,
    rrf,
    crag,
    rff_f: repair,
    memory,
    evidence_packet: packet,
    output: {
      may_generate: canGenerate(crag.crag_state, assurance),
      crag_state: crag.crag_state,
      evidence_packet_id: packet.packet_id,
      segments: top.map((t) => ({ id: t.id, text: t.text || null, source_id: t.source_id || null })),
    },
  };
}

function buildPacket(request, parts) {
  return {
    schema_id: 'ScholaForgeEvidencePacket/v1',
    packet_id: packetId(),
    request_id: request.request_id || null,
    tenant_id: request.tenant_id || null,
    purpose: request.purpose || null,
    assurance_class: request.assurance_class || 'A0_EXPLANATORY',
    crag_state: parts.crag_state,
    reason: parts.reason || null,
    selected_segments: (parts.selected || []).map((s) => s.id),
    rejected_segments: parts.rejected || [],
    fidelity_failures: parts.fidelity_failures || [],
    fidelity_actions: parts.fidelity_actions || [],
    offline_degraded: !!request.offline_degraded,
    generated_at_utc: new Date().toISOString(),
  };
}

function failClosed(request, reason, cragState, extra = {}) {
  return {
    ok: false,
    fail_closed: true,
    request,
    crag: { stage: 'CRAG', crag_state: cragState, reason, may_generate: false, fail_closed: true },
    evidence_packet: buildPacket(request, {
      selected: [],
      rejected: [],
      crag_state: cragState,
      reason,
    }),
    output: null,
    ...extra,
  };
}

export { filterScope, reciprocalRankFusion, evaluateCrag, detectFidelityFailures, repairFidelity };
