/**
 * Sentinel Gate Matrix — ScholaForge agent-scope software gates.
 */

export const AGENT_GATES = Object.freeze({
  G_IDENTITY: 'project identity path parity',
  G_SCHEMA: 'schemas validate',
  G_NPM: 'npm test suite',
  G_RETRIEVAL: 'retrieval governance pipeline SF-RGC-001',
  G_JURISDICTION: 'jurisdiction profile compiler SF-JUR-001',
  G_EVIDENCE_SPINE: 'Evidence Spine shadow mode SF-EVS-001',
  G_TEACHER_A1: 'teacher-support A1 thin slice',
  G_PILOT: 'pilot charter envelope SF-PIL-001',
  G_INSIGHT_SHADOW: 'INSIGHT shadow summaries SF-INS-001',
  G_ACR_STUB: 'accessibility evidence stub SF-ACR-001',
  G_CSE_STUB: 'cybersecurity evidence stub SF-CSE-001',
  G_TIM: 'Tutoring Integrity Mode SF-TIM-001',
  G_LIG: 'Learning Independence Gate SF-LIG-001',
  G_SAGA: 'MySAGA shadow store SF-SAGA-001',
  G_RIGHTS: 'Rights navigator SF-RRN-001',
  G_ROLLBACK: 'stop-rule rollback drill',
  G_INVENTION_BENCH: 'invention differentiation benchmark',
  G_TWINTEACH: 'TwinTeach Live SF-TTL-001',
  G_ACTIVITYFORGE: 'ActivityForge SF-AFG-001',
  G_CLASSROOM_DEMO: 'classroom integration adversarial demo',
  G_CONSTITUTION_BODY: 'SYS-COMBO-001 whole-body constitution metabolism',
  G_MOTIONCLASS: 'MotionClass No-ID SF-MOT-001',
  G_SAGA_ATTESTED: 'MySAGA attested deletion anti-resurrection',
  G_PORTAL: 'constrained interoperability portal',
  G_ASSIST_SPINE: 'TIM-LIG-EVS assistance integrity spine',
  G_CROSS_ORGAN: 'cross-organ adversarial body suite',
  G_ADVERSARIAL_200: '200-case cross-organ adversarial corpus',
  G_TECH_EFFECTS: 'technical-effect measurement harness',
  G_POLICY: 'assurance and decision-lock gates',
  G_CLAIM_LINT: 'false-completion claim ledger',
  G_PIPELINE: 'software-only orchestrator pipeline',
});

export const EXTERNAL_GATES = Object.freeze({
  G_JURISDICTION: 'NOT_DECIDED',
  G_LEGAL_CONFORMITY: 'HUMAN_REVIEW_REQUIRED',
  G_PILOT_CHARTER: 'UNSIGNED',
  G_ACCESSIBILITY_EVIDENCE: 'NOT_ESTABLISHED',
  G_SECURITY_ASSURANCE: 'NOT_ESTABLISHED',
  G_EDUCATIONAL_EVIDENCE: 'NOT_ESTABLISHED',
  G_PATENT_FILING: 'NOT_AUTHORIZED',
  G_NOVELTY: 'NOT_CONFIRMED',
  G_PRODUCTION: 'NOT_APPROVED',
  G_PUBLICATION: 'HOLD_ACTIVE',
});

export function evaluateGateMatrix(receipts = {}) {
  const agent = {};
  for (const [id, label] of Object.entries(AGENT_GATES)) {
    const r = receipts[id];
    agent[id] = {
      label,
      status: r?.status === 'PASS' ? 'PASS' : r?.status === 'SKIP' ? 'SKIP' : 'FAIL',
      detail: r?.detail || null,
    };
  }
  const agentPass = Object.values(agent).every((g) => g.status === 'PASS' || g.status === 'SKIP');
  const external = {};
  for (const [id, status] of Object.entries(EXTERNAL_GATES)) {
    external[id] = {
      status,
      owner:
        id === 'G_PUBLICATION' || id === 'G_LEGAL_CONFORMITY' || id === 'G_PATENT_FILING' || id === 'G_NOVELTY'
          ? 'human+counsel'
          : 'external',
    };
  }
  return {
    schema_id: 'ScholaForgeSentinelGateMatrix/v1',
    agent_scope_complete: agentPass,
    release_authority_status: 'RELEASE_BLOCKED',
    production_approved: false,
    pilot_ready: false,
    filing_authorized: false,
    patent_granted: false,
    agent_gates: agent,
    external_gates: external,
    finite_status: agentPass
      ? 'AGENT_SCOPE_CODE_MVP5_WHOLE_BODY_UPLIFT_EXTERNAL_BLOCKERS_OPEN'
      : 'AGENT_SCOPE_INCOMPLETE',
  };
}
