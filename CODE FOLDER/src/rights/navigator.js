/**
 * SF-RRN-001 — Rights, Redress, and Remedy Navigator (working thin engine)
 */

export const ISSUE_CLASSES = Object.freeze([
  'privacy_access',
  'privacy_correction',
  'privacy_deletion',
  'assessment_appeal',
  'accessibility_barrier',
  'safeguarding_urgent',
  'harm_report',
  'general_question',
]);

const ROUTES = {
  privacy_access: { authority: 'dpo', sla_hours: 72, urgency: 'normal' },
  privacy_correction: { authority: 'dpo', sla_hours: 72, urgency: 'normal' },
  privacy_deletion: { authority: 'dpo', sla_hours: 72, urgency: 'normal' },
  assessment_appeal: { authority: 'teacher_then_academic_lead', sla_hours: 120, urgency: 'normal' },
  accessibility_barrier: { authority: 'accessibility_lead', sla_hours: 48, urgency: 'high' },
  safeguarding_urgent: { authority: 'safeguarding_lead', sla_hours: 1, urgency: 'critical', bypass_queue: true },
  harm_report: { authority: 'safeguarding_or_leadership', sla_hours: 24, urgency: 'high' },
  general_question: { authority: 'school_office', sla_hours: 120, urgency: 'low' },
};

export function openRightsRequest(input = {}) {
  const issue = input.issue_class;
  if (!ISSUE_CLASSES.includes(issue)) {
    return { ok: false, reason: 'UNKNOWN_ISSUE_CLASS' };
  }
  const route = ROUTES[issue];
  return {
    ok: true,
    request: {
      schema_id: 'ScholaForgeRightsRequest/v1',
      feature_id: 'SF-RRN-001',
      request_id: `rrn-${Date.now()}`,
      issue_class: issue,
      plain_language: input.plain_language || null,
      requester_role: input.requester_role || null,
      tenant_id: input.tenant_id || null,
      authority: route.authority,
      sla_hours: route.sla_hours,
      urgency: route.urgency,
      bypass_queue: !!route.bypass_queue,
      interim_protection: route.urgency === 'critical' ? 'immediate_human_triage' : null,
      status: 'OPEN',
      automatic_rejection_forbidden: true,
      retaliation_forbidden: true,
      opened_at_utc: new Date().toISOString(),
    },
  };
}

export function decideRightsRequest(request, decision = {}) {
  if (!request) return { ok: false, reason: 'NO_REQUEST' };
  if (!decision.officer_id) return { ok: false, reason: 'NAMED_OFFICER_REQUIRED' };
  if (decision.auto_reject === true) {
    return { ok: false, reason: 'AUTOMATIC_REJECTION_FORBIDDEN' };
  }
  return {
    ok: true,
    request: {
      ...request,
      status: decision.granted === false ? 'DENIED_WITH_REASONS' : 'DECIDED',
      decision: {
        officer_id: decision.officer_id,
        granted: decision.granted !== false,
        remedy: decision.remedy || null,
        reasons: decision.reasons || [],
        decided_at_utc: new Date().toISOString(),
      },
    },
  };
}
