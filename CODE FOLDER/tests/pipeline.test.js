import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { runApplicationPipeline } from '../src/orchestrator/application_pipeline.js';

describe('application pipeline', () => {
  it('fail-closes on AI final grade', () => {
    const r = runApplicationPipeline({
      payload: { final_grade: 'A' },
      request: { assurance_class: 'A0_EXPLANATORY', tenant_id: 't1' },
      ranked_lists: {},
    });
    assert.equal(r.ok, false);
    assert.equal(r.reason, 'AI_CANNOT_ASSIGN_FINAL_GRADE');
  });

  it('runs teacher A1 + signed pilot + insight shadow; activation stays false', () => {
    const r = runApplicationPipeline({
      request: {
        tenant_id: 'school-1',
        purpose: 'lesson_draft',
        assurance_class: 'A1_TEACHER_SUPPORT',
        community: 'BE-FL-EDU',
      },
      jurisdiction_profile_input: { profile_id: 'BE-FL-EDU', school_type: 'secondary' },
      pilot_envelope_input: {
        community: 'BE-FL-EDU',
        school_type: 'secondary',
        education_level: 'SO',
        age_range: '12-14',
        sites: ['site-a'],
        duration_weeks: 8,
      },
      pilot_signature: {
        human_signer_id: 'board-1',
        governing_body_role: 'school_board',
      },
      teacher_support: { title: 'Water cycle', objective: 'Describe evaporation' },
      insight: {
        learner_ref: 'L-1',
        evidence: [{ polarity: 'strength', claim: 'Completed lab notes' }],
      },
      ranked_lists: {
        curriculum_registry: [
          {
            id: 'seg-1',
            tenant_id: 'school-1',
            community: 'BE-FL-EDU',
            purposes: ['lesson_draft'],
            text: 'Water cycle basics.',
            authority_score: 0.9,
            claim_key: 'water',
            relevant: true,
          },
        ],
      },
    });
    assert.equal(r.teacher.ok, true);
    assert.equal(r.pilot.envelope.signed, true);
    assert.equal(r.insight.ok, true);
    assert.equal(r.insight.summary.mode, 'SHADOW');
    assert.equal(r.accessibility.report.feature_id, 'SF-ACR-001');
    assert.equal(r.cybersecurity.report.feature_id, 'SF-CSE-001');
    assert.equal(r.activation_allowed, false);
    assert.equal(r.honest_markers.pilot_ready, false);
    assert.equal(r.honest_markers.production_approved, false);
  });
});
