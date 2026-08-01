import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  startTutorSession,
  recordAttempt,
  requestTutorHelp,
  disableTutor,
  sessionSummary,
} from '../src/tutoring/index.js';

describe('SF-TIM-001 Tutoring Integrity Mode (working)', () => {
  it('blocks help before attempt in assessment_restricted mode', () => {
    const s = startTutorSession({ mode: 'assessment_restricted' });
    const denied = requestTutorHelp(s.session, { requested_level: 'nudge', topic: 'fractions' });
    assert.equal(denied.ok, false);
    assert.equal(denied.reason, 'ATTEMPT_REQUIRED_BEFORE_HELP');
  });

  it('allows lowest sufficient help after attempt and records assistance', () => {
    const s = startTutorSession({ mode: 'practice', max_hint_level: 'partial_step' });
    recordAttempt(s.session, { text: 'I tried 1/2 + 1/4' });
    const help = requestTutorHelp(s.session, {
      requested_level: 'worked_analogous_example',
      topic: 'fractions',
    });
    assert.equal(help.ok, true);
    assert.equal(help.assistance_level, 'partial_step');
    const summary = sessionSummary(s.session);
    assert.equal(summary.max_assistance_used, 'partial_step');
    assert.ok(summary.assistance_events.length >= 1);
  });

  it('denies direct solution when prohibited and supports teacher disable', () => {
    const s = startTutorSession({ mode: 'socratic', allow_direct_solution: false });
    recordAttempt(s.session, { text: 'stuck' });
    const denied = requestTutorHelp(s.session, { requested_level: 'direct_solution' });
    assert.equal(denied.ok, false);
    assert.equal(denied.reason, 'DIRECT_SOLUTION_PROHIBITED');
    disableTutor(s.session, 'teacher-1');
    const after = requestTutorHelp(s.session, { requested_level: 'nudge' });
    assert.equal(after.reason, 'TEACHER_DISABLED');
  });
});
