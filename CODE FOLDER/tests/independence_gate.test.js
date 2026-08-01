import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createAssistanceContract,
  evaluateIndependence,
  recordCognitiveDebtSignal,
} from '../src/independence/index.js';

describe('SF-LIG-001 Learning Independence Gate (working)', () => {
  it('refuses to certify independence from AI-only success', () => {
    const r = evaluateIndependence({
      practice: { success: true, ai_assisted: true, hint_depth: 'partial_step' },
    });
    assert.equal(r.status, 'NOT_INDEPENDENT');
    assert.equal(r.cognitive_debt_signal, true);
    assert.equal(r.mastery_certified, false);
  });

  it('requires retention+transfer and never auto-certifies mastery', () => {
    const contract = createAssistanceContract();
    const pending = evaluateIndependence({
      contract,
      practice: { success: true, independent_success: true },
      independent_check: { success: true },
    });
    assert.equal(pending.status, 'PENDING');

    const ok = evaluateIndependence({
      contract,
      practice: { success: true, independent_success: true },
      independent_check: { success: true },
      retention_check: { success: true, offline: true },
      transfer_check: { success: true, novel_context: true },
    });
    assert.equal(ok.status, 'INDEPENDENT_SECURE_CANDIDATE');
    assert.equal(ok.mastery_certified, false);
    assert.equal(ok.teacher_certification_required, true);
  });

  it('cognitive debt signals are non-permanent and non-shaming', () => {
    const r = recordCognitiveDebtSignal([], { kind: 'repeated_ai_dependence' });
    assert.equal(r.entry.permanent_label, false);
    assert.equal(r.entry.shame_prohibited, true);
  });
});
