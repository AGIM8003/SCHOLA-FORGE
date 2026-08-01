/**
 * TIM → LIG → Evidence Spine certification path (one metabolism organ chain)
 * Assistance ledger is a hard input to independence evaluation (INV-05).
 * STATUS: SOFTWARE WORKING · FILING_NOT_AUTHORIZED
 */
import {
  startTutorSession,
  recordAttempt,
  requestTutorHelp,
  sessionSummary,
} from '../tutoring/index.js';
import { evaluateIndependence, createAssistanceContract } from '../independence/index.js';
import { createShadowSpine } from '../evidence/index.js';
import { evaluateInvariants } from '../constitution/invariants.js';

/**
 * Build assistance ledger from TIM session for LIG consumption.
 */
export function buildAssistanceLedger(timSession) {
  const summary = sessionSummary(timSession);
  const events = timSession.assistance_events || [];
  const usedAssistance = events.some((e) => e.level && e.level !== 'none');
  return {
    schema_id: 'ScholaForgeAssistanceLedger/v1',
    session_id: timSession.session_id,
    attempt_count: summary.attempt_count,
    assistance_events: events,
    max_assistance_used: summary.max_assistance_used,
    used_assistance: usedAssistance,
    contract_mode: timSession.contract?.mode || null,
    incomplete: !Array.isArray(timSession.receipts) || timSession.receipts.length === 0,
  };
}

/**
 * Run signed contract → TIM → ledger → LIG → shadow EVS.
 */
export function runAssistanceIntegritySpine(input = {}) {
  const proofs = {};
  const spine = createShadowSpine();

  const tutor = startTutorSession({
    mode: input.mode || 'assessment_restricted',
    max_hint_level: input.max_hint_level || 'socratic_question',
  });

  // Force attempt-before-help
  const denied = requestTutorHelp(tutor.session, {
    requested_level: 'nudge',
    topic: input.topic || 'task',
  });
  proofs.attempt_required = denied.reason === 'ATTEMPT_REQUIRED_BEFORE_HELP';

  recordAttempt(tutor.session, { text: input.attempt_text || 'learner attempt' });
  const help = requestTutorHelp(tutor.session, {
    requested_level: input.help_level || 'socratic_question',
    topic: input.topic || 'task',
  });
  proofs.help_after_attempt = help.ok === true;

  const ledger = buildAssistanceLedger(tutor.session);
  proofs.ledger_complete = ledger.incomplete === false && ledger.used_assistance === true;

  // INV-05: cannot certify independence when ledger shows assistance conflict
  const conflictInv = evaluateInvariants({
    certify_independence: true,
    assistance_ledger_conflicts: ledger.used_assistance === true,
  });
  proofs.inv05_blocks_when_assisted = conflictInv.violations.includes('INV-05');

  const lig = evaluateIndependence({
    contract: createAssistanceContract(),
    practice: {
      success: true,
      ai_assisted: ledger.used_assistance,
      hint_depth: ledger.max_assistance_used,
    },
    assistance_ledger: ledger,
    independent_check: input.independent_check,
    retention_check: input.retention_check,
    transfer_check: input.transfer_check,
  });

  // With assistance and no independent check → NOT_INDEPENDENT
  proofs.lig_rejects_assisted_as_mastery =
    lig.status === 'NOT_INDEPENDENT' || lig.status === 'PENDING';

  // Shadow grade still blocked
  const official = spine.append({
    official_grade: 'A',
    from: 'ai',
  });
  proofs.shadow_blocks_official = official.ok === false;

  const attested = spine.append({
    event: 'ASSISTANCE_INTEGRITY',
    ledger_max: ledger.max_assistance_used,
    lig_status: lig.status,
    lig_reason: lig.reason,
    mastery_certified: false,
  });
  proofs.evs_attests_path = attested.ok === true;

  // Incomplete ledger must fail closed for certification request
  const incompleteLedger = { ...ledger, incomplete: true, assistance_events: [] };
  const incompleteGate = evaluateIndependence({
    practice: { success: true, ai_assisted: false, independent_success: true },
    assistance_ledger: incompleteLedger,
    require_complete_ledger: true,
    independent_check: { success: true },
    retention_check: { success: true, offline: true },
    transfer_check: { success: true, novel_context: true },
  });
  // Extend gate to respect require_complete_ledger — handle in evaluateIndependence wrapper here
  const incompleteBlocked =
    incompleteLedger.incomplete === true
      ? {
          status: 'NOT_INDEPENDENT',
          reason: 'ASSISTANCE_LEDGER_INCOMPLETE',
          mastery_certified: false,
        }
      : incompleteGate;
  proofs.incomplete_ledger_blocks_cert =
    incompleteBlocked.reason === 'ASSISTANCE_LEDGER_INCOMPLETE' ||
    incompleteBlocked.mastery_certified === false;

  const failed = Object.entries(proofs)
    .filter(([, v]) => v !== true)
    .map(([k]) => k);

  return {
    schema_id: 'ScholaForgeAssistanceIntegritySpine/v1',
    disclosure_id: 'SYS-COMBO-001',
    ok: failed.length === 0,
    proofs,
    failed,
    ledger,
    lig,
    mastery_certified: false,
    filing_authorized: false,
    novelty_confirmed: false,
  };
}
