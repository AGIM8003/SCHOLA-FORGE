# SCHOLAFORGE_WHOLE_BODY_ENABLING_DISCLOSURE
**Version:** 1.0-DRAFT  
**Canonical body:** SYS-COMBO-001  
**Status:** ENABLEMENT_DRAFT — counsel must confirm sufficiency  
**Filing:** NOT_AUTHORIZED · **Novelty:** NOT_CONFIRMED  
**Code root:** `CODE FOLDER/`  
**Blueprint:** `SCHOLAFORGE.md` PART I-A + Whole-Body Uplift Specs v1/v2  

This disclosure is intended to enable a skilled team to reproduce the **organism** without undisclosed essential steps. Organs are not independent filing islands.

---

## 1. Component architecture

| Component | Path | Role |
|---|---|---|
| Constitutional control plane | `src/constitution/control_plane.js` | authorize + compileExecutionContract |
| Invariants INV-01…14 | `src/constitution/invariants.js` | Fail-closed constraint checks |
| Metabolism | `src/constitution/metabolism.js` | 14-stage session advancement |
| Organism runner | `src/constitution/organism.js` | End-to-end body demonstration |
| TIM | `src/tutoring/` | Assistance contract + attempts + hints |
| LIG | `src/independence/` | Independence evaluation |
| Assistance spine | `src/spine/assistance_integrity.js` | TIM→ledger→LIG→EVS |
| TwinTeach | `src/twinteach/` | Teacher-authority co-teaching |
| TwinTeach stop coupling | `src/ops/twinteach_stop.js` | Local disable + stop/rollback/degrade |
| MotionClass No-ID | `src/motionclass/noid.js` | Abstract events; identity reject |
| Evidence Spine | `src/evidence/` | Shadow receipts; reject official grades |
| MySAGA | `src/mysaga/store.js` + `attested.js` | Purpose-bound store + deletion |
| Portal | `src/portal/exchange.js` | Signed grants; tenant/purpose |
| Jurisdiction | `src/jurisdiction/` | Community profiles |
| Adversarial corpus | `src/adversarial/corpus200.js` | 200 cross-organ cases |
| Measurement | `src/measurement/effects.js` | Local technical-effect harness |

---

## 2. Fourteen-stage metabolic sequence

```text
INGEST → QUALIFY → AUTHORIZE → CONTRACT → ASSIST → ORCHESTRATE
→ OBSERVE → VERIFY → ATTEST → STORE → DELETE_OR_RETAIN
→ EXCHANGE → DEGRADE → RECOVER
```

Implementation: `METABOLISM_STAGES` in `metabolism.js`.  
Fail-closed at any stage may force `DEGRADE`.

---

## 3. State machines (summary)

### TwinTeach lesson states
`PREPARE → OPEN → TEACH → PROPOSE → APPROVE → CONDUCT → REFLECT → CLOSE`  
Emergency: `MANUAL_FALLBACK` via `emergencyDisable` / `disableAiWithStopRules`.

### TIM
Modes include `assessment_restricted` (attempt-before-help). Hint levels escalate under contract; `direct_solution` denied when prohibited.

### Activity Conductor
`READY → ACTIVE → DEGRADED`. Degraded rejects further motion ingest.

### MySAGA entry
Live → forgotten/tombstoned; replica sync of tombstoned IDs → `ANTI_RESURRECTION_BLOCK` (INV-09).

---

## 4. Sequence diagrams (textual)

### 4.1 Assistance integrity
```text
Teacher/contract → TIM start
Learner help without attempt → DENY ATTEMPT_REQUIRED
Learner attempt → help allowed under max hint
buildAssistanceLedger → evaluateIndependence (AI-assisted ⇒ NOT_INDEPENDENT)
Evidence Spine append official_grade → DENY
Evidence Spine append ASSISTANCE_INTEGRITY → OK (shadow)
```

### 4.2 Portal write
```text
External system → portalExchange
No grant → INV-10 deny
Wrong tenant/purpose → deny
apply_official_grade → INV-02 deny
Valid dry_run read → OK without applying consequential write
```

### 4.3 Attested deletion
```text
addPurposeBoundEntry(purpose,…) → attestedDelete → tombstone + receipt
Delayed replica with same entry_id → INV-09 block
```

---

## 5. Constitutional decision logic

`authorize(request, ctx)`:

1. Missing purpose / jurisdiction_profile_id / policy_id → INV-03 abstain  
2. Consequential without human_authority → INV-01 deny  
3. apply_ai_grade_as_official → INV-02 deny  
4. portal_write without capability_grant → INV-10 deny  
5. Else evaluateInvariants; violations → deny  

`compileExecutionContract` requires successful authorize; sets `shadow_grade_only: true`.

---

## 6. Signed contract and receipt schemas (fields)

### Execution contract (`ScholaForgeExecutionContract/v1`)
purpose, permitted_assistance[], prohibited_assistance[], data_boundary, model_boundary, teacher_authority_id, evidence_required, stop_conditions[], offline_fallback, shadow_grade_only, jurisdiction_profile_id, policy_id, expiry_utc, filing_authorized=false

### Deletion receipt (`ScholaForgeDeletionReceipt/v1`)
request_id, scope, eligible_objects[], lawful_holds[], destroyed_or_revoked_keys[], acknowledged_replicas[], unavailable_replicas[], unresolved_derivatives[], verification_result, anti_resurrection

### Portal grant (`ScholaForgePortalCapabilityGrant/v1`)
grant_id, profile, tenant_id, jurisdiction_profile_id, purpose, capabilities[], min_data, rate_limit, dry_run_supported, signed

### No-ID event (`ScholaForgeNoIdMotionEvent/v1`)
type ∈ abstract set, zone_id, count, object_id, group_id, confidence, identity_bearing=false, source_frame_retained=false

---

## 7. Jurisdiction resolution

- Profiles: Community-specific (e.g. BE-FL-EDU, BE-FR-EDU, BE-DE-EDU)  
- `BE-UNIVERSAL` rejected  
- Missing jurisdiction in authorize → fail-closed  

---

## 8. TIM-to-LIG integration

`runAssistanceIntegritySpine`:

1. assessment_restricted attempt gate  
2. help after attempt  
3. ledger from assistance_events  
4. INV-05 when certifying with assistance conflict  
5. LIG rejects AI-only mastery  
6. EVS rejects official grade; attests path  

---

## 9. Shadow-grade enforcement

Checked at:

- authorize (INV-02)  
- Evidence Spine append  
- portalExchange `apply_official_grade`  
- adversarial AUTH/EVS/PORT groups  

---

## 10. MotionClass data transformation

`transformNoIdEvent` rejects face, name, biometric, emotion, gait_signature, learner_id, camera_frame.  
Accepted abstract types only. Source frames not retained.

---

## 11. TwinTeach local stop

`disableAiWithStopRules`:

1. emergencyDisable TwinTeach  
2. stop-rule trigger `teacher_ai_disable`  
3. metabolism forceDegrade  
4. rollback drill receipt  
5. manual_teaching_available=true; remote provider cannot block  

---

## 12. MySAGA deletion and anti-resurrection

Purpose required; attestedDelete writes tombstone + receipt; `applyReplicaSync` of tombstoned IDs fails closed INV-09.

---

## 13. Interoperability grants

Profiles: OneRoster, LTI_Advantage, QTI, CASE, Open_Badges, CLR, OIDC, LOCAL_EDU.  
All writes/reads require matching tenant, purpose, capability.

---

## 14. Degraded-operation states

- TwinTeach MANUAL_FALLBACK  
- Metabolism DEGRADE (ai_enabled=false)  
- Activity Conductor DEGRADED  
- Essential manual teaching must remain available (INV-07)  

---

## 15. Recovery and rollback

`recover(session, { integrity_ok, anti_resurrection_check })`  
`runRollbackDrill` / stop rules preserve no partial high-impact writes.

---

## 16. Alternative embodiments

See `FALLBACK_EMBODIMENTS.md` A–E (assistance integrity; privacy classroom; attested memory; degraded runtime; constrained portal). Not automatic separate filings.

---

## 17. Failure matrices

Primary matrix: `evidence/RUNTIME_PACK/ADVERSARIAL_200.json` (200 cases).  
Verify with full hashes in `VERIFICATION_RECEIPT.json`.

---

## 18. How to reproduce (implementation team)

```bash
cd "CODE FOLDER"
npm ci
npm run validate
npm run uplift:p2
npm run evidence:receipt
```

Confirm hashes against `VERIFICATION_RECEIPT.json`.

---

## 19. Non-claims

```text
NOVELTY_NOT_CONFIRMED
FILING_NOT_AUTHORIZED
PATENT_NOT_GRANTED
PRODUCTION_NOT_APPROVED
INDEPENDENT_VERIFICATION_INCOMPLETE
FIELD_EFFECT_NOT_PROVEN
```
