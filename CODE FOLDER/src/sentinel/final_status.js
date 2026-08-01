/**
 * Sentinel FINAL_STATUS emitter for ScholaForge.
 * STATUS: SOFTWARE MVP — never emits PRODUCTION_APPROVED, PILOT_READY, or patent grant.
 */
import { evaluateGateMatrix } from './gate_matrix.js';
import { lintStatusObject } from './claim_ledger.js';
import { EvidenceLedger } from './evidence_ledger.js';

export function emitFinalStatus(receipts = {}, meta = {}) {
  const matrix = evaluateGateMatrix(receipts);
  const status = {
    schema_id: 'ScholaForgeSentinelFinalStatus/v1',
    version: '15.0.0-CODE-MVP-5',
    project: 'SCHOLAFORGE',
    generated_at_utc: new Date().toISOString(),
    tip: meta.tip || null,
    branch: meta.branch || null,
    finite_status: matrix.finite_status,
    release_authority_status: 'RELEASE_BLOCKED',
    production_approved: false,
    pilot_ready: false,
    project_complete: false,
    filing_authorized: false,
    patent_granted: false,
    novelty_confirmed: false,
    disclosure_ready: true,
    disclosure_id: 'SYS-COMBO-001',
    method: 'BODY_VS_BODY',
    publication_hold: 'ACTIVE',
    ai_may_assign_final_grade: false,
    high_impact_ai_approved: false,
    agent_scope_complete: matrix.agent_scope_complete,
    gate_matrix: matrix,
    residuals: [
      'Belgian Community not selected',
      'legal conformity HUMAN_REVIEW_REQUIRED',
      'pilot charter unsigned',
      'accessibility evidence not established',
      'security assurance not established',
      'independent educational evidence not established',
      'patent filing NOT_AUTHORIZED / novelty NOT_CONFIRMED',
      'production NOT_APPROVED',
    ],
    ...meta.extra,
  };

  const lint = lintStatusObject(status);
  if (lint.verdict === 'DENY') {
    status.claim_ledger = lint;
    status.finite_status = 'CLAIM_LEDGER_DENY';
    status.agent_scope_complete = false;
  } else {
    status.claim_ledger = { verdict: 'ACCEPT', denials: [] };
  }

  const ledger = new EvidenceLedger();
  ledger.append('FINAL_STATUS_EMITTED', {
    finite_status: status.finite_status,
    agent_scope_complete: status.agent_scope_complete,
  });
  status.evidence_ledger = ledger.snapshot();
  return status;
}

export function renderOperatorSummary(status) {
  return [
    '# OPERATOR_SUMMARY — ScholaForge Sentinel MVP',
    '',
    `Finite status: \`${status.finite_status}\``,
    `Agent scope complete: ${status.agent_scope_complete}`,
    `Release: ${status.release_authority_status}`,
    `Production approved: ${status.production_approved}`,
    `Pilot ready: ${status.pilot_ready}`,
    `Filing authorized: ${status.filing_authorized}`,
    `Patent granted: ${status.patent_granted}`,
    `Novelty confirmed: ${status.novelty_confirmed}`,
    `Publication hold: ${status.publication_hold}`,
    '',
    '## Residuals (external)',
    ...status.residuals.map((r) => `- ${r}`),
    '',
    '## Honest markers',
    '- RELEASE_BLOCKED',
    '- PRODUCTION_NOT_APPROVED',
    '- PILOT_NOT_READY',
    '- FILING_NOT_AUTHORIZED',
    '- PATENT_NOT_GRANTED',
    '- AI cannot assign final grade',
    '',
  ].join('\n');
}
