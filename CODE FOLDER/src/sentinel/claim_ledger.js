/**
 * Sentinel Claim Ledger — false-completion linter for ScholaForge.
 * STATUS: SOFTWARE MVP — blocks overclaim language.
 */

const FORBIDDEN_PATTERNS = [
  /\bPROJECT_COMPLETE\b/i,
  /\bPRODUCTION_READY\b/i,
  /\bPRODUCTION_APPROVED\b/i,
  /\bLEGALLY_APPROVED\b/i,
  /\bPILOT_READY\b/i,
  /\bSCHOOL_WIDE_PRODUCTION\b/i,
  /\bAI_FINAL_GRADE\b/i,
  /\bCONFORMITY_ASSESSMENT_COMPLETE\b/i,
  /\bIMPLEMENTATION_PROVEN\b/i,
  /\bPATENTABILITY_CONFIRMED\b/i,
  /\bNOVELTY_CONFIRMED\b/i,
  /\bAUTHORIZED_TO_FILE\b/i,
];

export function lintClaimText(text) {
  const denials = [];
  const src = String(text || '');
  for (const re of FORBIDDEN_PATTERNS) {
    if (re.test(src)) denials.push(`FALSE_COMPLETION:${re.source}`);
  }
  return {
    verdict: denials.length ? 'DENY' : 'ACCEPT',
    denials,
    claim_ledger: true,
  };
}

export function lintStatusObject(obj) {
  const denials = [];
  if (obj?.production_approved === true) denials.push('FALSE_COMPLETION:production_approved');
  if (obj?.pilot_ready === true) denials.push('FALSE_COMPLETION:pilot_ready');
  if (obj?.project_complete === true) denials.push('FALSE_COMPLETION:project_complete');
  if (obj?.filing_authorized === true) denials.push('FALSE_COMPLETION:filing_authorized');
  if (String(obj?.release_authority_status || '').toUpperCase() === 'RELEASE_GO') {
    denials.push('FALSE_COMPLETION:RELEASE_GO');
  }
  if (obj?.ai_may_assign_final_grade === true) {
    denials.push('FALSE_COMPLETION:ai_may_assign_final_grade');
  }
  return {
    verdict: denials.length ? 'DENY' : 'ACCEPT',
    denials,
    claim_ledger: true,
  };
}
