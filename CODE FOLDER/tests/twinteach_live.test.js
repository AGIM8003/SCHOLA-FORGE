import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  startTwinTeachLesson,
  advanceLesson,
  proposeAssistance,
  resolveProposal,
  conductApproved,
  emergencyDisable,
  closeLesson,
  lessonReceipt,
} from '../src/twinteach/index.js';

describe('SF-TTL-001 TwinTeach Live', () => {
  it('requires teacher id and objective', () => {
    assert.equal(startTwinTeachLesson({}).reason, 'TEACHER_ID_REQUIRED');
    assert.equal(startTwinTeachLesson({ teacher_id: 't1' }).reason, 'OBJECTIVE_REQUIRED');
  });

  it('blocks OPEN without teacher confirm and runs proposal→approve→conduct', () => {
    const { session } = startTwinTeachLesson({
      teacher_id: 't1',
      objective: 'fractions',
    });
    assert.equal(advanceLesson(session).reason, 'TEACHER_CONFIRM_REQUIRED_TO_OPEN');
    assert.equal(advanceLesson(session, { teacher_confirm: true }).ok, true);
    assert.equal(session.state, 'OPEN');
    advanceLesson(session);
    assert.equal(session.state, 'TEACH');

    const prop = proposeAssistance(session, {
      text: 'Use pizza slices',
      sources: ['curr:math'],
    });
    assert.equal(prop.ok, true);
    assert.equal(prop.proposal.class_visible, false);
    assert.equal(prop.proposal.source_visible, true);
    assert.equal(conductApproved(session, prop.proposal.proposal_id).ok, false);

    resolveProposal(session, prop.proposal.proposal_id, {
      teacher_id: 't1',
      verdict: 'accept',
      make_class_visible: true,
    });
    assert.equal(conductApproved(session, prop.proposal.proposal_id).ok, true);
    assert.equal(session.proposals[0].class_visible, true);
  });

  it('blocks prohibited autonomous grading and discipline', () => {
    const { session } = startTwinTeachLesson({ teacher_id: 't1', objective: 'x' });
    advanceLesson(session, { teacher_confirm: true });
    advanceLesson(session);
    const g = proposeAssistance(session, { action: 'AUTONOMOUS_GRADING', assign_grade: true });
    assert.equal(g.reason, 'PROHIBITED_ACTION');
    const d = proposeAssistance(session, { discipline: true, text: 'punish' });
    assert.equal(d.reason, 'PROHIBITED_ACTION');
  });

  it('emergency disable restores manual fallback and blocks further AI', () => {
    const { session } = startTwinTeachLesson({ teacher_id: 't1', objective: 'x' });
    advanceLesson(session, { teacher_confirm: true });
    advanceLesson(session);
    proposeAssistance(session, { text: 'hint', sources: [] });
    const dis = emergencyDisable(session, 't1');
    assert.equal(dis.manual_fallback, true);
    assert.equal(dis.lesson_continues, true);
    assert.equal(proposeAssistance(session, { text: 'nope' }).reason, 'AI_DISABLED');
    const closed = closeLesson(session);
    assert.equal(closed.ok, true);
    const r = lessonReceipt(session);
    assert.equal(r.manual_fallback, true);
    assert.equal(r.production_approved, false);
  });

  it('rejects resolve from non-authority teacher', () => {
    const { session } = startTwinTeachLesson({ teacher_id: 't1', objective: 'x' });
    advanceLesson(session, { teacher_confirm: true });
    advanceLesson(session);
    const prop = proposeAssistance(session, { text: 'a', sources: [] });
    const bad = resolveProposal(session, prop.proposal.proposal_id, {
      teacher_id: 'other',
      verdict: 'accept',
    });
    assert.equal(bad.reason, 'TEACHER_AUTHORITY_REQUIRED');
  });
});
