/**
 * WP-P2-03 — Technical-effect measurement harness against controlled baselines.
 */
import { transformNoIdEvent, createActivityConductor, ingestMotionEvent, degradeConductor } from '../motionclass/index.js';
import { runAssistanceIntegritySpine } from '../spine/index.js';
import { createShadowSpine } from '../evidence/index.js';
import { startTwinTeachLesson, advanceLesson } from '../twinteach/index.js';
import { disableAiWithStopRules } from '../ops/index.js';
import { createMetabolismSession, authorize } from '../constitution/index.js';
import {
  createAttestedMySaga,
  addPurposeBoundEntry,
  attestedDelete,
  applyReplicaSync,
} from '../mysaga/index.js';
import { createPortalGrant, portalExchange } from '../portal/index.js';

function measure(name, mechanism, fn) {
  const started = Date.now();
  const baseline = { unauthorized_success: 0, expected_block: 1 };
  let actual;
  try {
    actual = fn();
  } catch (e) {
    actual = { ok: false, error: String(e.message || e) };
  }
  const ms = Date.now() - started;
  return {
    mechanism: name,
    description: mechanism,
    baseline,
    input: actual.input || null,
    expected_result: actual.expected,
    actual_result: actual.actual,
    ok: actual.ok === true,
    latency_ms: ms,
    uncertainty: 'single-process local measurement; not multi-site field trial',
    failure_threshold: 'any unexpected allow is failure',
    reproducible_command: 'npm run measure:effects',
    evidence_receipt: true,
    filing_authorized: false,
  };
}

export function measureTechnicalEffects() {
  const rows = [];

  rows.push(
    measure('No-ID transformation', 'Identity-bearing data rejected', () => {
      const r = transformNoIdEvent({ type: 'zone_entered', face: 'x' });
      return {
        input: 'face field',
        expected: 'IDENTITY_BEARING_FIELD_REJECTED',
        actual: r.reason,
        ok: r.reason === 'IDENTITY_BEARING_FIELD_REJECTED',
      };
    }),
  );

  rows.push(
    measure('Activity Conductor degrade', 'State degrades under fault', () => {
      const c = createActivityConductor({ teacher_id: 't1' });
      ingestMotionEvent(c.conductor, { type: 'group_ready', group_id: 'g' });
      degradeConductor(c.conductor, 'network');
      const blocked = ingestMotionEvent(c.conductor, { type: 'zone_entered', zone_id: 'A' });
      return {
        expected: 'DEGRADED_MODE',
        actual: blocked.reason,
        ok: c.conductor.degraded === true && blocked.ok === false,
      };
    }),
  );

  rows.push(
    measure('TIM→LIG', 'Unsupported mastery certifications prevented', () => {
      const r = runAssistanceIntegritySpine();
      return {
        expected: 'mastery_certified=false',
        actual: r.mastery_certified,
        ok: r.ok && r.mastery_certified === false,
      };
    }),
  );

  rows.push(
    measure('Shadow-grade gate', 'Unauthorized official-grade writes prevented', () => {
      const s = createShadowSpine();
      const r = s.append({ official_grade: 'A' });
      return { expected: false, actual: r.ok, ok: r.ok === false };
    }),
  );

  rows.push(
    measure('TwinTeach stop', 'Time to deterministic manual state', () => {
      const t0 = Date.now();
      const ttl = startTwinTeachLesson({ teacher_id: 't1', objective: 'x' });
      advanceLesson(ttl.session, { teacher_confirm: true });
      const meta = createMetabolismSession();
      const d = disableAiWithStopRules(ttl.session, meta, {}, 't1');
      const elapsed = Date.now() - t0;
      return {
        expected: 'manual_teaching_available',
        actual: { available: d.manual_teaching_available, elapsed_ms: elapsed },
        ok: d.manual_teaching_available === true && elapsed < 2000,
      };
    }),
  );

  rows.push(
    measure('MySAGA deletion', 'Anti-resurrection success', () => {
      const s = createAttestedMySaga({ owner_ref: 'L' });
      const e = addPurposeBoundEntry(s, { purpose: 'p', text: 'x' });
      attestedDelete(s, e.entry.entry_id);
      const rez = applyReplicaSync(s, { entry_id: e.entry.entry_id, purpose: 'p', text: 'x' });
      return {
        expected: 'INV-09',
        actual: rez.invariant,
        ok: rez.invariant === 'INV-09',
      };
    }),
  );

  rows.push(
    measure('Portal', 'Unauthorized / cross-tenant blocked', () => {
      const g = createPortalGrant({
        profile: 'OneRoster',
        tenant_id: 'a',
        jurisdiction_profile_id: 'BE-FL-EDU',
        purpose: 'roster_sync',
        capabilities: ['write'],
      });
      const cross = portalExchange(
        { capability: 'write', tenant_id: 'b', purpose: 'roster_sync' },
        g.grant,
      );
      const grade = portalExchange(
        {
          capability: 'write',
          tenant_id: 'a',
          purpose: 'roster_sync',
          apply_official_grade: true,
        },
        g.grant,
      );
      return {
        expected: 'TENANT_BOUNDARY + INV-02',
        actual: { cross: cross.reason, grade: grade.reason },
        ok: cross.reason === 'TENANT_BOUNDARY' && grade.reason === 'INV-02_SHADOW_GRADE_ONLY',
      };
    }),
  );

  rows.push(
    measure('Jurisdiction lock', 'Wrong-profile / missing jurisdiction denied', () => {
      const r = authorize(
        { purpose: 'assist' },
        { policy_id: 'p', human_authority: true },
      );
      return {
        expected: 'INV-03',
        actual: r.reason,
        ok: String(r.reason).includes('INV-03'),
      };
    }),
  );

  const passed = rows.filter((r) => r.ok).length;
  return {
    schema_id: 'ScholaForgeTechnicalEffectsReport/v1',
    disclosure_id: 'SYS-COMBO-001',
    measured: rows.length,
    passed,
    failed: rows.filter((r) => !r.ok).map((r) => r.mechanism),
    rows,
    note: 'Local single-process measurements. Not multi-site field trials. Independent verification still required.',
    status_banner: [
      'DISCLOSURE_READY',
      'INDEPENDENT_VERIFICATION_INCOMPLETE',
      'NOVELTY_NOT_CONFIRMED',
      'FILING_NOT_AUTHORIZED',
    ],
    filing_authorized: false,
    measured_at_utc: new Date().toISOString(),
  };
}
