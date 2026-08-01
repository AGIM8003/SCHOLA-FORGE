import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  filterScope,
  reciprocalRankFusion,
  resolveMemoryConflict,
  evaluateCrag,
  detectFidelityFailures,
  repairFidelity,
  runRetrievalPipeline,
} from '../src/retrieval/index.js';

describe('SF-RGC-001 retrieval governance', () => {
  it('RFF-S blocks cross-tenant and memory-without-packet', () => {
    const r = filterScope(
      [
        { id: 'a', tenant_id: 'school-1', text: 'ok' },
        { id: 'b', tenant_id: 'school-2', text: 'foreign' },
        { id: 'c', source_kind: 'agent_memory', text: 'remembered' },
      ],
      { tenant_id: 'school-1', assurance_class: 'A1_TEACHER_SUPPORT' },
    );
    assert.equal(r.passed_count, 1);
    assert.equal(r.passed[0].id, 'a');
    assert.ok(r.blocked.some((b) => b.candidate_id === 'b'));
    assert.ok(r.blocked.some((b) => b.candidate_id === 'c'));
  });

  it('RRF uses k=60 and prefers higher trust bands', () => {
    const fused = reciprocalRankFusion({
      curriculum_registry: [{ id: 'doc-1' }],
      agent_memory: [{ id: 'doc-2' }],
    });
    assert.equal(fused.k, 60);
    assert.equal(fused.fused[0].id, 'doc-1');
  });

  it('memory never wins over signed claim', () => {
    const r = resolveMemoryConflict({
      memoryClaim: 'grade=A',
      signedClaim: 'grade=pending-human',
    });
    assert.equal(r.winner, 'signed');
    assert.equal(r.reason, 'MEMORY_NEVER_WINS');
    assert.equal(r.value, 'grade=pending-human');
  });

  it('CRAG returns INSUFFICIENT on empty set and blocks A4', () => {
    const empty = evaluateCrag([], { assurance_class: 'A1_TEACHER_SUPPORT' });
    assert.equal(empty.crag_state, 'INSUFFICIENT');
    assert.equal(empty.may_generate, false);

    const pipe = runRetrievalPipeline({
      request: { assurance_class: 'A4_CONSEQUENTIAL', tenant_id: 't1' },
      ranked_lists: { lexical: [{ id: 'x', tenant_id: 't1', text: 'x', authority_score: 1 }] },
    });
    assert.equal(pipe.ok, false);
    assert.equal(pipe.crag.crag_state, 'UNAUTHORIZED');
  });

  it('RFF-F detects qualifier loss and repairs', () => {
    const det = detectFidelityFailures({
      source_text: 'Allowed except for exams.',
      assembled_text: 'Allowed.',
    });
    assert.equal(det.ok, false);
    assert.ok(det.failures.includes('QUALIFIER_LOSS'));
    const fix = repairFidelity({
      source_text: 'Allowed except for exams.',
      assembled_text: 'Allowed.',
    });
    assert.equal(fix.ok, true);
    assert.match(fix.context.assembled_text, /except/i);
  });

  it('full pipeline issues evidence packet on HIGH_SUPPORT', () => {
    const result = runRetrievalPipeline({
      request: {
        request_id: 'r1',
        tenant_id: 'school-1',
        purpose: 'lesson_draft',
        assurance_class: 'A1_TEACHER_SUPPORT',
        community: 'BE-FL-EDU',
      },
      ranked_lists: {
        curriculum_registry: [
          {
            id: 'seg-1',
            tenant_id: 'school-1',
            community: 'BE-FL-EDU',
            purposes: ['lesson_draft'],
            text: 'Photosynthesis converts light to chemical energy.',
            authority_score: 0.95,
            claim_key: 'photosynthesis',
            relevant: true,
          },
        ],
      },
    });
    assert.equal(result.ok, true);
    assert.equal(result.crag.crag_state, 'HIGH_SUPPORT');
    assert.ok(result.evidence_packet.packet_id);
    assert.equal(result.output.evidence_packet_id, result.evidence_packet.packet_id);
  });
});
