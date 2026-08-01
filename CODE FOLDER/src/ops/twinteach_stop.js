/**
 * TwinTeach local disable ↔ stop-rule / rollback coupling (INV-06/07)
 */
import { emergencyDisable, lessonReceipt } from '../twinteach/index.js';
import { evaluateStopRules, runRollbackDrill } from '../ops/index.js';
import { forceDegrade } from '../constitution/metabolism.js';

/**
 * Teacher disable AI: TwinTeach emergency + stop rules + metabolism degrade.
 */
export function disableAiWithStopRules(session, metabolism, envelope = {}, teacherId) {
  if (!session) return { ok: false, reason: 'NO_TWINTEACH_SESSION' };

  const disabled = emergencyDisable(session, teacherId);
  const stop = evaluateStopRules(envelope, {
    harm_threshold_breach: false,
    scope_creep_attempt: false,
    denylisted_capability_attempt: false,
    staff_capacity_breach: false,
    accessibility_blocker: false,
    data_incident: false,
    teacher_ai_disable: true,
  });

  // Treat teacher AI disable as stop signal for AI path
  const stopForced = {
    ...stop,
    stop: true,
    triggered: [...(stop.triggered || []), 'teacher_ai_disable'],
    action: 'STOP_NARROW_OR_ROLLBACK',
  };

  let meta = null;
  if (metabolism) {
    meta = forceDegrade(metabolism, 'teacher_ai_disable');
  }

  const drill = runRollbackDrill({
    envelope,
    signals: { teacher_ai_disable: true },
    force_drill: true,
    owner: teacherId || 'teacher',
  });

  const receipt = lessonReceipt(session);

  return {
    ok: true,
    twinteach: disabled,
    stop: stopForced,
    metabolism: meta,
    rollback: drill,
    manual_teaching_available: true,
    remote_provider_cannot_block: true,
    lesson_continues: disabled.lesson_continues === true,
    receipt,
    filing_authorized: false,
  };
}
