import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { draftTeacherSupport, approveTeacherDraft } from '../src/teacher/index.js';

const ranked = {
  curriculum_registry: [
    {
      id: 'seg-1',
      tenant_id: 'school-1',
      community: 'BE-FL-EDU',
      purposes: ['lesson_draft'],
      text: 'Fractions: equal parts of a whole.',
      authority_score: 0.92,
      claim_key: 'fractions',
      relevant: true,
    },
  ],
};

describe('Teacher-support A1 thin slice', () => {
  it('requires signed pilot charter', () => {
    const r = draftTeacherSupport({
      request: { tenant_id: 'school-1', community: 'BE-FL-EDU' },
      pilot: {},
      ranked_lists: ranked,
    });
    assert.equal(r.ok, false);
    assert.equal(r.learner_issuance_allowed, false);
  });

  it('creates draft awaiting teacher; never issues to learners', () => {
    const r = draftTeacherSupport({
      request: {
        tenant_id: 'school-1',
        community: 'BE-FL-EDU',
        purpose: 'lesson_draft',
      },
      pilot: { pilot_charter_signed: true },
      ranked_lists: ranked,
      title: 'Fractions intro',
      objective: 'Recognize equal parts',
    });
    assert.equal(r.ok, true);
    assert.equal(r.draft.status, 'DRAFT_AWAITING_TEACHER');
    assert.equal(r.draft.teacher_approval_required, true);
    assert.equal(r.draft.learner_issuance_allowed, false);
    assert.equal(r.learner_issuance_allowed, false);
  });

  it('teacher approval marks ready but still blocks automatic issuance', () => {
    const r = draftTeacherSupport({
      request: {
        tenant_id: 'school-1',
        community: 'BE-FL-EDU',
        purpose: 'lesson_draft',
      },
      pilot: { pilot_charter_signed: true },
      ranked_lists: ranked,
    });
    const approved = approveTeacherDraft(r.draft, { teacher_id: 't-1', approved: true });
    assert.equal(approved.ok, true);
    assert.equal(approved.draft.status, 'READY_FOR_ISSUANCE');
    assert.equal(approved.draft.learner_issuance_allowed, false);
    assert.equal(approved.issuance, null);
  });
});
