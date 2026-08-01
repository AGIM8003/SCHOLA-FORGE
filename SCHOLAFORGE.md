---
project: SCHOLAFORGE
original_project_identity: "19. ScholaForge Belgium - Eu regulations"
project_code: 48
owner: "Agim Haxhijaha / VertoGroup.ai"
document: "Approval-Oriented Unified Explainable Benefit-for-All Master Blueprint"
version: "15.0"
status: MASTER_TARGET_BLUEPRINT
implementation_status: TARGET_SPECIFICATION
approval_status: CONDITIONAL_PILOT_ONLY
production_status: NOT_APPROVED
proof_boundary: IMPLEMENTATION_AND_CONFORMITY_NOT_PROVEN
canonical_project_name: SCHOLAFORGE
system_class: HUMAN_FIRST_EVIDENCE_CARRYING_EDUCATION_OPERATING_SYSTEM
primary_region: "Belgium / European Union"
jurisdiction_profiles:
  - BE-FL-EDU
  - BE-FR-EDU
  - BE-DE-EDU
deployment_scope:
  - CLASSROOM
  - SCHOOL
  - DISTRICT
  - NATIONAL
  - OFFLINE
  - HYBRID
  - CLOUD
languages:
  - Dutch
  - French
  - German
  - English
currentness_reviewed: "2026-07-20"
seed: 17
human_review_required: true
completeness_reconciled: "2026-07-20"
completeness_status: SOURCE_UNIVERSE_COMPLETE
retrieval_governance_control: "PART_I-A_SF-RGC-001"
rag_index_companion: "SCHOLAFORGE_RAG_INDEX.md"
source_hashes:
  unified_v14: "515cedaaa6dd0aad7fa3b020fe3a3fef54aa8561d14dfc979736be5763b209fe"
  critical_approval_audit: "7a85ca630f7e084f730b654ee8942df41474f6bc63a0309c9e2abce46cf0a11c"
---

# SCHOLAFORGE

## Approval-Oriented, Human-First, Evidence-Carrying School Operating System

**Complete Improved and Expanded Master Blueprint — Version 15.0**

| Field | Value |
|---|---|
| Canonical project name | **SCHOLAFORGE** |
| Original identity | **19. ScholaForge Belgium - Eu regulations** |
| Project code | **48** |
| Owner | **Agim Haxhijaha / VertoGroup.ai** |
| Blueprint status | **MASTER TARGET BLUEPRINT** |
| Strategic direction | **APPROVED AS TARGET ARCHITECTURE** |
| Initial pilot | **CONDITIONALLY APPROVABLE** |
| High-impact AI | **NOT APPROVED** |
| School-wide production | **NOT APPROVED** |
| Implementation evidence | **NOT ESTABLISHED** |
| Legal conformity | **HUMAN_REVIEW_REQUIRED** |
| Currentness | **20 July 2026** |
| Version 15 purpose | Convert audit blockers into buildable approval, assurance, pilot, and evidence architecture |

> **Truth boundary:** This file is a complete target specification. It does not prove that code exists, a school has deployed the system, tests passed, legal duties are satisfied, conformity assessment is complete, or educational benefits occurred.

> **Approval boundary:** Version 15 authorizes design, implementation, and preparation for a narrow low-risk pilot only. It does not authorize production use, automated consequential decisions, camera deployment, official grade replacement, or claims of legal approval.

> **Preservation boundary:** The complete feature-bearing version 14 blueprint is preserved later in this document. Version 15 adds a controlling approval-and-assurance layer. Where wording conflicts, the stricter version 15 safeguard governs.

# PART -1 — DOCUMENT MAP, SOURCE COMPLETENESS, AND FEATURE REGISTRY

## -1.1 Canonical reading order

Read this file in layers. Do not treat later preserved layers as higher authority than version 15.

| Order | Layer | Location | Purpose |
|---|---|---|---|
| 1 | Version 15 approval and assurance control plane | PART 0 through PART XIV | Controlling decisions, safeguards, pilot gates, evidence vocabulary |
| 1a | Version 15 governed retrieval control plane | PART I-A (`SF-RGC-001`) | Canonical RAG/CRAG/RRF/RFF order, vocabulary, and approval gates |
| 1b | Blueprint RAG index (companion file) | `SCHOLAFORGE_RAG_INDEX.md` | Task-based MUST/FALL/REF retrieval for agents |
| 2 | Version 14 unified benefit-for-all and explainability layer | PART XV → embedded PART 0–VII of v14 | Product authority, benefit gates, innovation portfolio, delivery |
| 3 | Version 13 evidence-backed delta | Inside preserved v14 → PART VIII / PART 0–0D | Research-backed architecture and delivery deltas |
| 4 | Version 13 complete whole-school blueprint | Inside preserved v14 → PART IX onward | Full plain-language and technical whole-school specification |

**Conflict rule:** Where any preserved layer conflicts with version 15, the stricter version 15 approval, rights, safety, privacy, accessibility, labour, health, cybersecurity, liability, or human-oversight rule governs.

## -1.2 Source universe completeness receipt

Audited on **20 July 2026** against sibling blueprint files in this folder.

| Source file | SHA-256 | Relationship to `SCHOLAFORGE.md` | Completeness result |
|---|---|---|---|
| `SCHOLAFORGE_UNIFIED_EXPLAINABLE_BENEFIT_FOR_ALL_MASTER_BLUEPRINT_v14.0.md` | `515cedaaa6dd0aad7fa3b020fe3a3fef54aa8561d14dfc979736be5763b209fe` | Preserved verbatim as PART XV body | **COMPLETE** — body hash-equivalent after YAML strip |
| `SCHOLAFORGE_DEEP_WEB_EVIDENCE_BACKED_MASTER_BLUEPRINT_v13.0.md` | `cab36b30e79553e2855cd8ab21dc592a05162e5bb33e4a09fd24760fabbd3842` | Embedded inside preserved v14 | **COMPLETE** — all H2 sections and SF-* IDs present |
| `SCHOLAFORGE_COMPLETE_BLUEPRINT_v13.0.md` | `b829df837448e300edede1a86519125ce3e6fda63825257f816047ef7f4f0c0b` | Embedded inside preserved v14 | **COMPLETE** — all H2 sections and SF-* IDs present |

### Reconciliation findings

| Check | Result |
|---|---|
| Unique SF-* IDs in sibling files missing from this file | **0** |
| Unique H2 section titles in sibling files missing from this file | **0** |
| Version 14 body preservation | **Exact match** (778,721 normalized characters) |
| Version 15-only assurance features added | **17** (SF-JUR-001 through SF-ARE-001, plus SF-RGC-001) |
| Total unique SF-* identifiers in this file | **155** |
| Content forgotten from siblings and requiring import | **None** |

### What was missing before this completeness pass (structural, not product content)

Sibling product content was already preserved. This pass adds navigation and proof artifacts that were absent:

1. Canonical document map and reading order.
2. Source-universe completeness receipt with live hashes.
3. Full feature registry index (155 IDs after SF-RGC-001).
4. Explicit Version 15 end marker after the preserved Version 14 close.

## -1.3 Complete feature registry index

Every ScholaForge feature, family, requirement, or policy identifier currently present in this blueprint:

| Feature ID | Canonical name | Layer |
|---|---|---|
| SF-AAM-001 | Approval Authority Matrix | v15 assurance |
| SF-ACI-001 | AI Contribution and Integrity Studio | v14/v13 product |
| SF-ACO-001 | Activity Conductor | v14/v13 product |
| SF-ACR-001 | Accessibility Conformance Report and User Evidence | v15 assurance |
| SF-ADG-001 | Authentic Demonstration Gateway | v14/v13 product |
| SF-AFG-001 | ActivityForge | v14/v13 product |
| SF-ALB-001 | Activities Library | v14/v13 product |
| SF-ALM-001 | Alumni and Lifelong Learning Mode | v14/v13 product |
| SF-ARC-001 | Accessibility Remediation Console | v14/v13 product |
| SF-ARE-001 | Approval Readiness Evidence Pack | v15 assurance |
| SF-ASIE-001 | Autonomous School Improvement Engine | v14/v13 product |
| SF-AST-001 | Assessment Studio | v14/v13 product |
| SF-AUR-001 | AI Use-Case, Classification, and Literacy Register | v15 assurance |
| SF-AWS-001 | Administrator Workspace | v14/v13 product |
| SF-BHL-001 | Shared Benefit and Harm Ledger | v14/v13 product |
| SF-BTG-001 | Benefit Threshold and Burden-Transfer Gate | v15 assurance |
| SF-CAP-001 | Commission Approval Pack Generator | v15 assurance |
| SF-CCC-001 | Community Contribution Commons | v14/v13 product |
| SF-CGN-001 | Career Genome | v14/v13 product |
| SF-CHR-001 | Climate, Health, and Resource Co-Benefit Optimizer | v14/v13 product |
| SF-CIL-001 | Collective Intelligence Layer | v14/v13 product |
| SF-COV-001 | Curriculum Coverage and Gap Engine | v14/v13 product |
| SF-CSE-001 | Cybersecurity Execution Assurance | v15 assurance |
| SF-CSY-001 | Class Symphony | v14/v13 product |
| SF-CUL-001 | Cultural and Jurisdiction Context Review | v14/v13 product |
| SF-DQC-001 | Digital Content Quality and Curriculum Assurance | v14/v13 product |
| SF-EAO-001 | Explainable AI Observatory | v14/v13 product |
| SF-ECL-001 | Educator AI Calibration Lab | v14/v13 product |
| SF-EDV-001 | EduVerse | v14/v13 product |
| SF-EEP-001 | Educational Effectiveness Proof Protocol | v15 assurance |
| SF-ELS-001 | Evidence-Linked Learning Spaces | v14/v13 product |
| SF-EOS-001 | Education Operating System | v14/v13 product |
| SF-EPE-001 | Expert Pathway Engine | v14/v13 product |
| SF-EUL-001 | EU Digital Product Law Control Plane | v15 assurance |
| SF-EVS-001 | Evidence Spine | v14/v13 product |
| SF-FAM-002 | Family Trust, Consent, and Rights Center | v14/v13 product |
| SF-FAM-01 | Personal Educational Intelligence | v14/v13 product |
| SF-FAM-02 | Teaching Design and Delivery | v14/v13 product |
| SF-FAM-03 | Classroom Interaction | v14/v13 product |
| SF-FAM-04 | Learning and Practice | v14/v13 product |
| SF-FAM-05 | Content and Resource Ecosystem | v14/v13 product |
| SF-FAM-06 | Curriculum and Knowledge | v14/v13 product |
| SF-FAM-07 | Assessment and Evidence | v14/v13 product |
| SF-FAM-08 | Collaboration and Community | v14/v13 product |
| SF-FAM-09 | Safety, Privacy, and Governance | v14/v13 product |
| SF-FAM-10 | Sovereignty and Offline Operation | v14/v13 product |
| SF-FAM-11 | Safe Experimentation | v14/v13 product |
| SF-FAM-12 | Retrieval and Knowledge Access | v14/v13 product |
| SF-FAM-13 | Analytics and Improvement | v14/v13 product |
| SF-FAM-14 | Administration and Operations | v14/v13 product |
| SF-FAM-15 | Interoperability and Portability | v14/v13 product |
| SF-FAM-16 | Accessibility and Inclusion | v14/v13 product |
| SF-FIP-001 | Family Intelligence Portal | v14/v13 product |
| SF-FSA-001 | Foundational Skill Accelerators | v14/v13 product |
| SF-GPE-001 | Guardian Policy Engine | v14/v13 product |
| SF-GWS-001 | Guardian and Family Workspace | v14/v13 product |
| SF-HBQ-001 | Health Boundary and Qualified Ownership | v15 assurance |
| SF-HDO-001 | Human Development Outcome Model | v14/v13 product |
| SF-HME-001 | Human Mentor Engine | v14/v13 product |
| SF-HPE-001 | Human Potential Engine | v14/v13 product |
| SF-HRP-001 | Human Relationship and Capacity Planner | v14/v13 product |
| SF-INP-001 | Innovation Passport | v14/v13 product |
| SF-INS-001 | INSIGHT Evaluation | v14/v13 product |
| SF-JUR-001 | Belgian Education Jurisdiction Profile Compiler | v15 assurance |
| SF-KGL-001 | Knowledge Galaxy | v14/v13 product |
| SF-KOE-001 | Knowledge Orchestration Engine | v14/v13 product |
| SF-LCG-001 | Living Competency Graph | v14/v13 product |
| SF-LDNA-001 | Learning DNA | v14/v13 product |
| SF-LIG-001 | Learning Independence and Cognitive Debt Gate | v14/v13 product |
| SF-LSF-001 | Life Skills Framework | v14/v13 product |
| SF-LST-001 | Lesson Studio | v14/v13 product |
| SF-LWS-001 | Learner Workspace | v14/v13 product |
| SF-MGD-001 | Memory Garden | v14/v13 product |
| SF-MME-001 | Motivation Without Manipulation Engine | v14/v13 product |
| SF-MOC-001 | MotionClass | v14/v13 product |
| SF-MON-001 | Model Operations and Post-Market Monitor | v14/v13 product |
| SF-MRC-001 | Module Retrieval Contract Standard | v14/v13 product |
| SF-NIM-001 | No-ID Motion Layer | v14/v13 product |
| SF-OCC-001 | Offline Content Channel Studio | v14/v13 product |
| SF-OER-001 | Opportunity Equity Router | v14/v13 product |
| SF-OMS-001 | OMEGA Seal Sandbox | v14/v13 product |
| SF-ONM-001 | Offline Neural Mesh | v14/v13 product |
| SF-OWS-001 | Oversight and Auditor Workspace | v14/v13 product |
| SF-PAC-001 | Procurement and Conformance Gate | v14/v13 product |
| SF-PAS-001 | Peer-Assisted Signed Synchronization | v14/v13 product |
| SF-PCA-001 | Participatory Co-Design Assembly | v14/v13 product |
| SF-PDE-001 | Passion Discovery Engine | v14/v13 product |
| SF-PER-001 | Public Evidence and Replication Commons | v14/v13 product |
| SF-PFD-001 | Procurement, Liability, Insurance, and Financial Dossier | v15 assurance |
| SF-PIL-001 | Controlled Low-Risk Pilot Envelope | v15 assurance |
| SF-PMR-001 | Private Mastery Routing | v14/v13 product |
| SF-POLICY-031 | Policy test ref: AI cannot assign final grade | v14/v13 product |
| SF-PRS-001 | Project Studio | v14/v13 product |
| SF-QST-001 | Quest Engine | v14/v13 product |
| SF-RBS-001 | Rubric Studio | v14/v13 product |
| SF-REQ-0001 | Requirement: AI cannot assign a final grade | v14/v13 product |
| SF-RET-001 | ScholaGraph Retrieval Fabric | v14/v13 product |
| SF-RGC-001 | Retrieval Governance Control Plane | v15 assurance |
| SF-ROP-001 | Processing, Data-Flow, and Legal Role Register | v15 assurance |
| SF-RQF-001 | Retrieval Quality Framework | v14/v13 product |
| SF-RRN-001 | Rights, Redress, and Remedy Navigator | v14/v13 product |
| SF-RSK-001 | Resilient School Cell Kit | v14/v13 product |
| SF-RSR-001 | Research and Outcome Registry | v14/v13 product |
| SF-SAB-001 | School Action Broker | v14/v13 product |
| SF-SAGA-001 | MySAGA | v14/v13 product |
| SF-SBG-001 | SecureBoard Guardian | v14/v13 product |
| SF-SCM-001 | Safeguarding Case Management and Escalation | v15 assurance |
| SF-SDT-001 | School Digital Twin | v14/v13 product |
| SF-SEI-001 | School Environment Intelligence | v14/v13 product |
| SF-SIM-001 | School Innovation Marketplace | v14/v13 product |
| SF-SLL-001 | Scientific Learning Lab | v14/v13 product |
| SF-SQC-001 | Source Quality Classification | v14/v13 product |
| SF-TCN-001 | Talent Constellation | v14/v13 product |
| SF-TCO-001 | Total Cost and Deployment Planner | v14/v13 product |
| SF-TIM-001 | Tutoring Integrity Mode | v14/v13 product |
| SF-TIQ-001 | Teacher Intervention Queue | v14/v13 product |
| SF-TRN-001 | Transitional Architecture | v14/v13 product |
| SF-TRN-002 | Teacher Adoption and Capability Academy | v14/v13 product |
| SF-TTL-001 | TwinTeach Live | v14/v13 product |
| SF-TWS-001 | Teacher Workspace | v14/v13 product |
| SF-UAE-001 | Universal Accessibility Engine | v14/v13 product |
| SF-UAS-001 | Universal Access Simulation Lab | v14/v13 product |
| SF-V13-001 | MySAGA 2.0 | v13 whole-school |
| SF-V13-002 | INSIGHT 2.0 | v13 whole-school |
| SF-V13-003 | Cognitive Independence Protocol | v13 whole-school |
| SF-V13-004 | Teacher Practice and Capacity System | v13 whole-school |
| SF-V13-005 | Board Evidence Room | v13 whole-school |
| SF-V13-006 | School Service Hub | v13 whole-school |
| SF-V13-007 | Knowledge Commons | v13 whole-school |
| SF-V13-008 | Research Desk | v13 whole-school |
| SF-V13-009 | Nourish | v13 whole-school |
| SF-V13-010 | Allergen Safety Gate | v13 whole-school |
| SF-V13-011 | MoveForge | v13 whole-school |
| SF-V13-012 | Participation Plan | v13 whole-school |
| SF-V13-013 | WorldLab | v13 whole-school |
| SF-V13-014 | Scouting and Fieldcraft Programme | v13 whole-school |
| SF-V13-015 | Campus Steward | v13 whole-school |
| SF-V13-016 | Indoor Environment Monitor | v13 whole-school |
| SF-V13-017 | Belonging and Attendance Navigator | v13 whole-school |
| SF-V13-018 | Arts and Performance Studio | v13 whole-school |
| SF-V13-019 | Club Foundry | v13 whole-school |
| SF-V13-020 | Student Democracy Forum | v13 whole-school |
| SF-V13-021 | Enterprise Studio | v13 whole-school |
| SF-V13-022 | Whole-School Evaluation Framework | v13 whole-school |
| SF-V13-023 | Domain Workspaces | v13 whole-school |
| SF-V13-024 | Meal Access Wallet | v13 whole-school |
| SF-V13-025 | Expedition Packet | v13 whole-school |
| SF-V13-026 | Accessibility Barrier Desk | v13 whole-school |
| SF-V13-027 | Workload Guard | v13 whole-school |
| SF-V13-028 | Independent Capability Check | v13 whole-school |
| SF-V13-029 | Retention and Transfer Engine | v13 whole-school |
| SF-V13-030 | Improvement Portfolio | v13 whole-school |
| SF-WKN-001 | World Knowledge Network | v14/v13 product |
| SF-WLG-001 | Workforce and Labour Governance | v15 assurance |
| SF-XPS-001 | Explainability Studio and Decision Story | v14/v13 product |

## -1.4 How to use sibling files after this blueprint

For agent retrieval while working on this blueprint, start with `SCHOLAFORGE_RAG_INDEX.md`, then apply PART I-A (`SF-RGC-001`) before relying on preserved KOE/ScholaGraph detail.

`SCHOLAFORGE.md` is the **single master target blueprint**.

The standalone v13 and v14 files remain archival sources for hash verification only. Do not implement from them when wording differs from this file. Implement from version 15 rules plus the preserved feature body under PART XV.


# PART 0 — VERSION 15 EXECUTIVE DECISION

## 0.1 Commission-style decision

ScholaForge is strategically valuable and unusually complete.

The architecture may continue.

A narrow pilot may proceed only after the mandatory pre-pilot evidence gates in this version are satisfied.

Full production approval remains blocked until implementation, independent testing, legal review, operational staffing, accessibility evidence, cybersecurity evidence, educational evidence, and governing-body approval exist.

### Decision table

| Decision domain | Version 15 decision |
|---|---|
| Human-first strategic direction | APPROVE |
| Architecture continuation | APPROVE WITH CONDITIONS |
| Low-risk teacher-support pilot | CONDITIONALLY APPROVABLE |
| Evidence Spine and INSIGHT in shadow mode | CONDITIONALLY APPROVABLE |
| Official grading automation | NOT APPROVED |
| Admissions, placement, discipline, or certification automation | NOT APPROVED |
| SecureBoard Guardian deployment | RESEARCH_GATED; EXCLUDED FROM INITIAL PILOT |
| Health or psychological inference | NOT APPROVED |
| School-wide production | NOT APPROVED |
| Public compliance claim | NOT APPROVED |
| Production-readiness claim | NOT APPROVED |

## 0.2 Version 15 design thesis

The next ScholaForge improvement is not more uncontrolled feature expansion.

It is conversion of the complete blueprint into a governed sequence of:

1. jurisdiction selection;
2. named institutional authority;
3. lawful and minimized data processing;
4. use-case-specific AI classification;
5. safe technical implementation;
6. accessible and manually recoverable workflows;
7. qualified professional ownership;
8. measurable benefit and harm thresholds;
9. independent educational validation;
10. procurement, insurance, and financial sustainability;
11. controlled pilot evidence;
12. signed go, hold, rollback, or stop decisions.

## 0.3 Version 15 precedence

1. Platform safety and applicable law.
2. Explicit version 15 approval and assurance rules.
3. The stricter child-rights, safeguarding, privacy, accessibility, labor, health, cybersecurity, liability, or human-oversight rule.
4. Signed jurisdiction profile.
5. Signed approval-authority decision.
6. Preserved version 14 authority layer.
7. Preserved version 13 and older feature details.
8. Unresolved consequential conflict results in `DECISION_LOCK` and fail-closed operation.

## 0.4 Universal approval state machine

```text
CONCEPT
  ↓
TARGET_SPECIFICATION
  ↓
JURISDICTION_SCOPED
  ↓
AUTHORITY_ASSIGNED
  ↓
LEGAL_AND_RIGHTS_REVIEWED
  ↓
ARCHITECTURE_APPROVED
  ↓
PROTOTYPE
  ↓
INDEPENDENTLY_TESTED
  ↓
PILOT_READY
  ↓
PILOTED
  ↓
VALIDATED
  ↓
LIMITED_PRODUCTION
  ↓
PRODUCTION_READY
```

Any stage may move to:

```text
DECISION_LOCK
PAUSED
SCOPE_REDUCED
ROLLED_BACK
SUSPENDED
RECALLED
RETIRED
```

Document completeness never advances a runtime state automatically.

# PART I — APPROVAL AND ASSURANCE CONTROL PLANE

## 1.1 Mandatory four-lens approval explanation

Every approval-sensitive segment must publish:

- **Learner and family view:** what happens, why, data used, choices, human authority, challenge and remedy.
- **Professional view:** educational or operational purpose, workflow, role, evidence, limits, and escalation.
- **Technical view:** bounded context, data ownership, interfaces, security, offline behavior, observability, failure, and rollback.
- **Commission and audit view:** jurisdiction, law and standard mappings, accountable authority, evidence grade, approval state, expiry, incidents, unresolved questions, and release receipt.

A friendly explanation may simplify language.

It may not conceal risk, legal uncertainty, data use, prohibited behavior, or missing evidence.

## 1.2 Approval dossier architecture

The approval-and-assurance control plane contains the following canonical services:

1. Jurisdiction Profile Compiler.
2. Approval Authority Matrix.
3. Processing and Legal Role Register.
4. AI Use-Case and Risk Register.
5. EU Digital Product Law Control Plane.
6. Educational Effectiveness Proof Protocol.
7. Benefit Threshold and Burden-Transfer Gate.
8. Workforce and Labour Governance.
9. Safeguarding Case Management.
10. Health Boundary and Qualified Ownership.
11. Accessibility Conformance Report.
12. Cybersecurity Execution Assurance.
13. Procurement, Liability, and Financial Dossier.
14. Commission Approval Pack.
15. Controlled Pilot Envelope.
16. Approval Readiness Evidence Pack.

## 1.3 Decision-lock policy

A `DECISION_LOCK` is mandatory when any of the following is unresolved:

- competent Belgian education Community;
- school type, age group, or curriculum authority;
- controller or processor role;
- lawful basis or special-category condition;
- AI provider/deployer classification;
- prohibited-practice or high-risk analysis;
- safeguarding authority;
- qualified health owner;
- accessibility alternative;
- staff capacity;
- security owner;
- procurement owner;
- insurance or liability allocation;
- pilot stop threshold;
- rollback owner.

A decision lock prevents activation of the affected capability.

# PART I-A - GOVERNED RETRIEVAL AND KNOWLEDGE INTEGRITY CONTROL PLANE

> **Controlling authority:** This Part is a Version 15 approval-and-assurance control. Where preserved version 14/13 wording on RAG, CRAG, RRF, RFF, KOE, or ScholaGraph conflicts with this Part, **this Part governs**.
>
> **Feature ID:** `SF-RGC-001` - Retrieval Governance Control Plane  
> **Depends on:** SF-KOE-001, SF-RET-001, SF-RQF-001, SF-MRC-001, SF-EVS-001, SF-AUR-001, SF-GPE-001  
> **Implementation status:** `TARGET_SPECIFICATION`  
> **Production status:** `NOT_APPROVED`

## I-A.1 Why this Part exists

Preserved layers already define Knowledge Orchestration, ScholaGraph, CRAG, RRF, and retrieval fidelity repair. They did not yet provide one Version 15 controlling vocabulary, one pipeline order, one RRF precedence model, or explicit approval gates for consequential AI.

This Part converts retrieval into an auditable integrity control, not a free-form search habit.

## I-A.2 Canonical acronym definitions

| Acronym | Canonical name in ScholaForge | Meaning | Alias note |
|---|---|---|---|
| **RAG** | Retrieval-Augmented Generation | Retrieve approved evidence before generation or recommendation | Unchanged |
| **CRAG** | Corrective Retrieval-Augmented Generation | Validate and correct the retrieved set before consequential use | Unchanged |
| **RRF** | Reciprocal Rank Fusion | Fuse ranked candidate lists without treating one retriever as sole authority | Unchanged; formula locked in I-A.5 |
| **RFF-S** | Relevance Feedback / Scope Filter | Drop out-of-scope, wrong-tenant, wrong-task, or contaminated context **before** fusion and generation | Aligns with AGIM publication "Relevance Feedback Filter" |
| **RFF-F** | Retrieval Fidelity Failure-Fix | Detect and repair fidelity failures in assembled context **after** CRAG | Preserved blueprint "RFF" means this stage |
| **RFF** | Dual-stage integrity pair | When used alone in Version 15, **RFF** means **RFF-S then later RFF-F** unless a stage is named | Ambiguous legacy uses are resolved by this rule |

No module may invent a third expansion of these acronyms without updating this Part.

## I-A.3 Controlling retrieval pipeline order

Every consequential retrieval path shall execute in this order:

```text
1. Purpose / role / jurisdiction resolve
2. RFF-S  - Relevance / Scope Filter (IN-SCOPE only)
3. Policy and permission pre-filter
4. Retrieval plan + candidate generation
     (lexical | semantic | graph | curriculum | metadata | offline local | exact ID)
5. RRF    - Reciprocal Rank Fusion
6. Policy post-filter + dedupe + diversity
7. Quality / freshness / context-fit scoring
8. Counter-evidence retrieval
9. CRAG   - Corrective evaluation and repair loop
10. Context assembly (bounded, cited spans)
11. RFF-F  - Retrieval Fidelity Failure-Fix
12. Evidence packet build
13. Generation / recommendation (only if gates pass)
14. Human review when required
15. Evidence Spine receipt + outcome feedback
```

**Hard rules:**

- Do not generate before CRAG and RFF-F succeed for the required assurance class.
- Do not skip RFF-S for "speed."
- Do not treat agent or model memory as a retriever that outranks signed sources.
- Offline mode may shorten candidate sources but may not skip RFF-S, CRAG, or RFF-F for consequential outputs.

## I-A.4 Unified CRAG state vocabulary

All modules shall emit one of these CRAG states. Older HIGH/MEDIUM/LOW labels map as shown.

| Canonical state | Legacy aliases | Required behavior |
|---|---|---|
| `HIGH_SUPPORT` | HIGH | Proceed; normal human review if purpose requires it |
| `MEDIUM_SUPPORT` | MEDIUM; partially sufficient | Proceed only with visible uncertainty and limited claims |
| `LOW_SUPPORT` | LOW; low quality | Reformulate, expand retrieval, or require human review; no consequential claim |
| `CONFLICTING` | conflicting | Retrieve counter-evidence; surface conflict; no silent merge |
| `IRRELEVANT` | irrelevant | Reject set; log; do not answer from it |
| `INSUFFICIENT` | INSUFFICIENT_EVIDENCE | Stop or request context; **never fabricate** |
| `UNAUTHORIZED` | - | Exclude; record denial; fail closed |
| `STALE` | - | Prefer active replacement; else warn and block consequential use |

Plain-language UIs may soften wording. They may not hide `CONFLICTING`, `UNAUTHORIZED`, `STALE`, or `INSUFFICIENT`.

## I-A.5 RRF formula and source precedence

### Formula

```text
score(d) = SUM_i  1 / (k + rank_i(d))
```

- Default `k = 60` unless a signed jurisdiction profile sets another value with evaluation evidence.
- Each `i` is an independent eligible retriever after RFF-S and policy pre-filter.
- Retrievers with zero permission or wrong tenant contribute **nothing**.

### Eligible retrievers (examples)

| Retriever | Typical content | Default trust band |
|---|---|---|
| Approved source registry / curriculum graph | Signed learning materials and standards | HIGHEST |
| Policy / safeguarding / rights store | Binding rules | HIGHEST |
| ScholaGraph concept and evidence edges | Grounded knowledge links | HIGH |
| Lexical / semantic indexes of approved corpora | Search candidates | HIGH |
| Offline school-cell store | Local approved pack | HIGH when pack signed |
| Learner evidence store | Purpose-bound evidence only | MEDIUM; never identity-surveillance |
| Session / agent memory | Temporary working context | **LOWEST** |
| Other school / other tenant / other project | Foreign context | **BLOCKED** |

### Precedence rules

1. **Signed jurisdiction and policy always win** over retrieval similarity.
2. **Approved curriculum/source registry wins** over informal web or memory.
3. **Live signed source version wins** over stale cache when hashes or validity windows disagree.
4. **Agent or model memory never wins** against a written approved source, policy, or evidence packet.
5. **Cross-tenant and cross-project candidates are blocked**, not down-ranked.
6. Commercial sponsorship may not appear as an RRF signal.

## I-A.6 RFF-S - Relevance / Scope Filter

RFF-S runs **before** candidate fusion.

### Pass (IN-SCOPE)

- current school tenant and lawful role;
- current purpose and module contract (SF-MRC-001);
- selected Belgian Community / curriculum profile;
- approved language and accessibility variants;
- signed offline pack for the same scope;
- counter-evidence explicitly requested by CRAG.

### Block (OUT-OF-SCOPE)

- other tenant, school, or project corpora;
- wrong Community curriculum editions presented as current;
- private MySAGA journals outside the purpose boundary;
- SecureBoard or safeguarding case content outside authorized workflow;
- revoked, experimental-as-production, or unsigned sources for consequential claims;
- prompt-injection payloads treated as instructions;
- agent memory that cannot be tied to a current evidence packet.

Blocked items are logged with reason codes. They are not silently omitted without a receipt when a user expected them.

## I-A.7 RFF-F - Retrieval Fidelity Failure-Fix

RFF-F runs **after** CRAG and context assembly.

### Detect

- qualifier or exception loss;
- citation/span mismatch;
- version mixing;
- unsupported synthesis;
- permission leakage;
- context truncation that changes duty;
- source inversion;
- stale substitution;
- translated meaning drift;
- tenant or role leakage.

### Repair

- expand surrounding segment;
- retrieve referenced clause;
- switch to active source version;
- rerun translation validation;
- remove unsupported statement;
- separate conflicting claims;
- escalate to human review;
- open a fidelity-failure case with repair receipt.

If repair fails, output class falls to `INSUFFICIENT` or human-only.

## I-A.8 Tenant, curriculum, and contamination CRAG checks

Before any consequential answer or action, CRAG shall verify:

1. **Tenant isolation** - no foreign school content in the selected set.
2. **Curriculum identity** - Community, stage, and subject match the request.
3. **Source approval** - every relied-upon segment is approved or explicitly marked provisional.
4. **Instruction boundary** - retrieved text is data, not executable instruction.
5. **Special-category and safeguarding boundary** - no leakage into ordinary teaching RAG.
6. **Freshness** - superseded policy or curriculum editions are not treated as current.

Failure of any check forces `UNAUTHORIZED`, `STALE`, `CONFLICTING`, or `INSUFFICIENT` - never silent proceed.

## I-A.9 Assurance classes and approval gates

| Assurance class | Examples | Minimum CRAG | RFF-S | RFF-F | Evidence packet | Human review |
|---|---|---|---|---|---|---|
| `A0_EXPLANATORY` | Non-binding help text | `MEDIUM_SUPPORT+` preferred | Required | Required | Required | Optional |
| `A1_TEACHER_SUPPORT` | Lesson draft, activity suggest | `MEDIUM_SUPPORT+` | Required | Required | Required | Teacher before learner issuance |
| `A2_LEARNER_PRACTICE` | Tutoring hints | `MEDIUM_SUPPORT+`; independence rules apply | Required | Required | Required | Per tutoring integrity mode |
| `A3_ASSESSMENT_SUPPORT` | Rubric assist, evidence summary | `HIGH_SUPPORT` for factual claims | Required | Required | Required | Qualified educator; AI never final grade |
| `A4_CONSEQUENTIAL` | Placement, certification, discipline, admissions, health-adjacent | **NOT APPROVED** in Version 15 | Fail closed | Fail closed | Required if ever researched | Mandatory human authority |

**Pilot gate:** A low-risk pilot may use `A0`-`A2` only when SF-PIL-001 envelope is signed and retrieval receipts are inspectable.

**Production gate:** School-wide production remains `NOT_APPROVED` until retrieval evaluation suites, tenant-isolation tests, and educational effectiveness evidence exist.

## I-A.10 Offline and degraded mode

When connectivity or cloud retrieval fails:

1. Use only the signed local pack and local indexes.
2. Keep RFF-S, CRAG, and RFF-F.
3. Mark evidence packet `offline_degraded: true`.
4. Prefer abstention over speculative completion for `A2+`.
5. Sync corrections through Peer-Assisted Signed Synchronization when back online.

## I-A.11 Minimum acceptance tests

1. Wrong-tenant document never appears in fused results.
2. Stale curriculum edition loses to current signed edition.
3. Memory contradicting signed policy loses every time.
4. `INSUFFICIENT` path returns abstention, not fabrication.
5. Conflicting sources surface both sides with citations.
6. Citation span matches the claim used.
7. RFF-F detects dropped "except ..." qualifier in a policy clause.
8. Prompt injection inside a retrieved PDF cannot escalate privilege.
9. Offline pack without signature cannot support `A2+`.
10. Assessment path cannot emit a final grade token from RAG alone.

## I-A.12 Observability and Evidence Spine events

Minimum events:

```text
retrieval.rff_s.blocked
retrieval.rrf.fused
retrieval.crag.state_assigned
retrieval.crag.repair_loop
retrieval.rff_f.failure_detected
retrieval.rff_f.repaired
retrieval.evidence_packet.issued
retrieval.gate.fail_closed
```

Every consequential output shall carry `evidence_packet_id` and `crag_state`.

## I-A.13 Relationship to preserved technical specs

| Preserved section | Still authoritative for | Overridden by this Part for |
|---|---|---|
| SF-KOE-001 Knowledge Orchestration Engine | Objects, APIs, segment model, deep workflows | Pipeline order, RFF meaning, CRAG vocabulary conflicts |
| SF-RET-001 ScholaGraph section 5A | Index design, multilingual, failure debugger detail | Simplified 4-state CRAG labels; any order conflicting with I-A.3 |
| SF-RQF-001 / SF-MRC-001 | Quality metrics and module contracts | Assurance class gates in I-A.9 |
| AGIM publication RAG/CRAG/RRF/RFF guidance | Publication packaging workflows | Product runtime semantics inside ScholaForge |

## I-A.14 Explainability requirement

Four-lens explanation is mandatory for retrieval-backed consequential suggestions:

- **Learner/family:** what sources were used, what was uncertain, what a human decided.
- **Professional:** purpose, CRAG state, rejected sources, required review.
- **Technical:** retrievers, RRF inputs, filters, packet hash, offline flag.
- **Audit:** tenant, jurisdiction, assurance class, gate decision, receipts, retention.

Friendly language may simplify. It may not hide weak evidence.

# PART II — CANONICAL APPROVAL REMEDIATION FEATURES

## SF-JUR-001 — Belgian Education Jurisdiction Profile Compiler

**Capability family:** Legal and Institutional Governance  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Before a school uses ScholaForge, the system identifies which Belgian education authority and school rules apply. People are not asked to rely on one vague Belgian profile.

### Why it exists

Education is a responsibility of Belgium's Flemish, French, and German-speaking Communities. Curriculum, inspection, qualifications, language, records, staffing, appeals, and recognition depend on the selected Community and school sector.

### End-to-end human and institutional workflow

1. The institution selects Community, location, school type, education level, funding status, official language, curriculum authority, qualification route, and inspection authority. 2. Qualified counsel and the competent education owner verify the profile. 3. The compiler produces a signed jurisdiction pack. 4. All affected policies, mappings, notices, retention rules, appeals, and release gates inherit the profile. 5. A change of school type or Community triggers re-evaluation.

### Technical identity

Bounded context: Jurisdiction Governance. Core objects: JurisdictionProfile, CommunityAuthority, SchoolSector, CurriculumAuthority, InspectionRoute, QualificationRoute, LanguageRule, RetentionRule, AppealAuthority, LegalSource, ReviewDate, Signature. Canonical profiles are `BE-FL-EDU`, `BE-FR-EDU`, and `BE-DE-EDU`. No profile is complete until school type and education level are selected.

### Human authority and AI boundary

A named legal owner and institutional governing body approve the profile. AI may retrieve and compare official sources, but it may not determine legal applicability or sign the profile.

### Safeguards and prohibited behavior

No universal Belgian default; no silent fallback to another Community; no automated legal conclusion; no production activation with an unsigned profile; no use of expired sources.

### Minimum acceptance tests

Profile generation for all three Communities; school-type differentiation; curriculum and inspection mapping; version change impact analysis; rejection of incomplete profiles; bilingual or multilingual notice verification.

### Success, harm, and stop measures

Unresolved jurisdiction fields; expired legal sources; incorrect authority mapping; appeals routed to the wrong body; language mismatch; profile change propagation failures.

### Dependencies

Official Community and institutional sources; legal counsel; curriculum authority; records owner; data-protection officer; approval authority matrix.

### Required approval evidence

Signed jurisdiction profile; legal-source register; school-scope decision; curriculum and qualification mapping; inspection route; retention schedule; complaints and appeals map; review date and expiry.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-AAM-001 — Approval Authority Matrix

**Capability family:** Institutional Governance  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Every important decision has a named human authority. The system shows who may approve, who may object, who may suspend, and where a person can appeal.

### Why it exists

Generic statements such as 'human review required' do not create accountability. Approval requires named roles, evidence, expiry, escalation, and signed receipts.

### End-to-end human and institutional workflow

1. Each consequential decision type is registered. 2. The institution assigns accountable, responsible, consulted, informed, appeal, and emergency-suspension roles. 3. Required evidence and quorum are defined. 4. The decision is signed and expires on a defined date. 5. Changes or incidents trigger review.

### Technical identity

Objects: DecisionType, AccountableRole, ResponsibleRole, ConsultedRole, InformedRole, AppealAuthority, SuspensionAuthority, EvidenceRequirement, Quorum, ApprovalReceipt, Expiry, Renewal. The service integrates with Guardian Policy Engine and Evidence Spine.

### Human authority and AI boundary

The governing body owns the matrix. Role holders may delegate only where policy explicitly allows it. AI may route requests and detect missing approvals; it cannot approve.

### Safeguards and prohibited behavior

No anonymous approval; no shared accounts; no self-approval where independence is required; no approval beyond role scope; no expired approval; no hidden override.

### Minimum acceptance tests

Pilot activation; AI use-case activation; model change; curriculum mapping; accessibility exception; mentor approval; safeguarding workflow; cloud provider; production release; emergency suspension; appeal routing.

### Success, harm, and stop measures

Approval without evidence; role vacancy; overdue renewal; conflicting approvals; unsupported delegation; emergency suspension latency.

### Dependencies

Jurisdiction profile; identity and role service; institutional governance; legal counsel; DPO; safeguarding lead; accessibility lead; security owner.

### Required approval evidence

Signed authority matrix; RACI and decision-rights map; approval receipt schema; role succession plan; emergency suspension procedure; renewal schedule.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-ROP-001 — Processing, Data-Flow, and Legal Role Register

**Capability family:** Privacy and Data Governance  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

People can see why their data is used, who is responsible, who receives it, how long it is kept, and how to correct or delete it where the law allows.

### Why it exists

Data-protection principles must be operationalized for every meaningful processing activity. A platform-level privacy statement is not sufficient.

### End-to-end human and institutional workflow

1. A data flow is proposed. 2. The owner records purpose, data, people, lawful basis, special-category condition, roles, recipients, locations, transfers, retention, automation, rights, and deletion propagation. 3. The DPO reviews risk and DPIA need. 4. The flow is approved before processing. 5. Material changes trigger re-approval.

### Technical identity

Objects: ProcessingActivity, Purpose, DataCategory, DataSubjectClass, Controller, JointController, Processor, Subprocessor, Recipient, LawfulBasis, Article9Condition, RetentionRule, Location, TransferMechanism, AutomatedDecisionFlag, RightsRoute, DPIA, DeletionPropagation, CorrectionPropagation, AuditReceipt.

### Human authority and AI boundary

The controller and DPO own the register. System owners supply technical truth. AI may identify gaps but may not choose a lawful basis.

### Safeguards and prohibited behavior

No purpose expansion; no broad legitimate-interest placeholder; no special-category processing without a condition; no hidden subprocessor; no indefinite retention; no deletion claim without propagation evidence.

### Minimum acceptance tests

Data-flow completeness; processor-chain verification; retention enforcement; access and correction; deletion propagation; international-transfer failure; purpose-change blocking; DPIA trigger tests.

### Success, harm, and stop measures

Unregistered flows; missing lawful basis; over-collection; stale retention; failed deletion; unauthorized recipient; cross-border transfer issue; rights-request delay.

### Dependencies

Jurisdiction profile; identity; consent and rights; vendor contracts; data inventory; DPO; legal counsel.

### Required approval evidence

Records of processing activities; data-flow diagrams; controller/processor allocation; DPIAs; transfer assessments; retention schedule; rights SLA; processor and subprocessor contracts.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-AUR-001 — AI Use-Case, Classification, and Literacy Register

**Capability family:** AI Governance  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Every use of AI has its own purpose, limits, human owner, risk review, training requirements, and stop control.

### Why it exists

The AI Act applies by intended purpose and role. Treating ScholaForge as one single AI system would hide materially different risks.

### End-to-end human and institutional workflow

1. A proposed AI use case declares intended purpose, people affected, data, model, provider/deployer roles, decision impact, human oversight, prohibited-practice analysis, high-risk analysis, transparency duties, metrics, incidents, and fallback. 2. Required staff complete role-specific AI-literacy evidence. 3. Approval is time-limited. 4. Model, purpose, provider, or data changes trigger reclassification.

### Technical identity

Objects: AIUseCase, IntendedPurpose, ProviderRole, DeployerRole, ImporterRole, DistributorRole, RiskClass, ProhibitedPracticeCheck, HighRiskCheck, TransparencyDuty, HumanOversightPlan, DataGovernancePlan, EvaluationPack, IncidentRoute, PostMarketPlan, LiteracyRequirement, Approval, Expiry.

### Human authority and AI boundary

Qualified legal, education, privacy, security, and institutional owners approve use cases. AI may assist documentation and monitoring; it may not classify itself as compliant.

### Safeguards and prohibited behavior

No platform-wide blanket approval; no hidden purpose change; no AI-only high-impact decision; no use by untrained accountable staff; no unregistered model or prompt path.

### Minimum acceptance tests

Prohibited-practice scenarios; high-risk classification branches; teacher override; unsupported output; model swap; provider outage; transparency notice; kill switch; training expiry.

### Success, harm, and stop measures

Unregistered use; expired approval; staff literacy gap; override failure; incident severity; unsupported output; subgroup harm; change without reclassification.

### Dependencies

AI inventory; model operations; approval authority matrix; jurisdiction profile; ROPA; security assurance; teacher academy.

### Required approval evidence

Complete AI use-case register; provider/deployer analysis; risk classification memo; human-oversight procedure; AI-literacy records; evaluation and incident packs; post-market monitoring plan.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-EUL-001 — EU Digital Product Law Control Plane

**Capability family:** Product Law, Liability, and Market Readiness  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

ScholaForge identifies which EU digital-product duties apply to each software package, device, school cell, sensor, cloud service, and update.

### Why it exists

AI governance alone is insufficient. Connected software and hardware may trigger cybersecurity, switching, product-liability, consumer, contract, or sector duties.

### End-to-end human and institutional workflow

1. Each distributed component is classified by product and service role. 2. Applicability for the Cyber Resilience Act, Data Act, product liability, AI Act, GDPR, accessibility, procurement, and sector rules is recorded. 3. Technical documentation, update support, vulnerability handling, switching, recall, and liability controls are assigned. 4. Qualified counsel signs conclusions.

### Technical identity

Objects: ProductComponent, EconomicOperatorRole, ApplicableInstrument, EssentialRequirement, TechnicalFile, SupportPeriod, VulnerabilityProcess, ConformityPath, SwitchingPlan, ExportProfile, RecallPlan, LiabilityOwner, InsurancePolicy, Indemnity, CorrectiveAction.

### Human authority and AI boundary

Legal counsel, product owner, security owner, procurement owner, and governing body approve. AI may maintain traceability and freshness alerts; it may not certify conformity.

### Safeguards and prohibited behavior

No CE or conformity claim without the applicable process; no unsupported security-update period; no switching claim without a tested export; no liability waiver that removes mandatory rights; no silent component substitution.

### Minimum acceptance tests

Component inventory; applicability branches; SBOM mapping; vulnerability disclosure; security update; cloud switching; functional equivalence; product recall; evidence preservation; insurer notification.

### Success, harm, and stop measures

Unknown component status; expired support; unpatched critical vulnerability; failed exit; missing technical file; uninsured liability; incomplete corrective action.

### Dependencies

Product architecture; vendor register; SBOM/VEX; legal counsel; procurement; insurance; security; Data Act export service.

### Required approval evidence

Applicability assessment; technical documentation index; CRA readiness plan; Data Act switching and export test; liability matrix; insurance and indemnity plan; defect, recall, and corrective-action procedure.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-EEP-001 — Educational Effectiveness Proof Protocol

**Capability family:** Educational Research and Assessment  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

A learning feature is approved only when learners become more capable, not merely faster at finishing tasks with AI.

### Why it exists

Immediate output quality can hide dependency, weak retention, or poor transfer. Educational benefit needs independent and delayed evidence.

### End-to-end human and institutional workflow

1. Every learning feature defines a theory of change. 2. Baseline and comparison conditions are selected. 3. Measures include unaided performance, delayed retention, transfer, misconception correction, confidence, independence, accessibility, workload, and subgroup equity. 4. Stop conditions and analysis are preregistered. 5. Independent reviewers interpret results. 6. Negative and inconclusive findings remain visible.

### Technical identity

Objects: TheoryOfChange, StudyProtocol, Baseline, Comparison, Outcome, HarmMetric, IndependenceCheck, RetentionCheck, TransferCheck, EquitySlice, AccessibilityMeasure, WorkloadMeasure, AnalysisPlan, Deviation, Result, EvidenceGrade, ScalingDecision.

### Human authority and AI boundary

Teachers, curriculum experts, researchers, accessibility reviewers, and governing authorities own educational conclusions. AI may administer low-risk tasks or summarize evidence; it cannot certify effectiveness.

### Safeguards and prohibited behavior

No causal claim beyond study strength; no outcome switching without disclosure; no suppression of negative results; no penalty for research refusal; no mastery claim based only on assisted work.

### Minimum acceptance tests

Unaided task; delayed retest; novel transfer; accessibility equivalence; subgroup analysis; teacher workload; false mastery; over-reliance; protocol-deviation visibility; replication.

### Success, harm, and stop measures

Learning gain; retention; transfer; misconception persistence; cognitive debt; equity gap; accessibility gap; workload; learner stress; teacher confidence; adverse events.

### Dependencies

Research registry; INSIGHT; learning independence gate; benefit/harm ledger; ethics and privacy review; school and curriculum authority.

### Required approval evidence

Preregistered protocol; baseline; ethics/privacy approval; data manifest; independent outcome report; equity analysis; negative-result publication; scale or stop decision.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-BTG-001 — Benefit Threshold and Burden-Transfer Gate

**Capability family:** Benefit-for-All Governance  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

A feature cannot help one group by quietly overloading, excluding, surveilling, or harming another.

### Why it exists

The existing Benefit and Harm Ledger requires enforceable thresholds, non-inferiority rules, owners, and remedies.

### End-to-end human and institutional workflow

1. For each stakeholder, the feature records baseline, intended benefit, minimum meaningful improvement, uncertainty, maximum tolerated harm, non-inferiority condition, stop threshold, remedy, and owner. 2. Evidence is monitored by group. 3. Any protected threshold breach pauses or narrows the release. 4. The governing panel records the decision.

### Technical identity

Objects: StakeholderGroup, Baseline, BenefitThreshold, HarmThreshold, NonInferiorityRule, BurdenTransfer, ConfidenceInterval, StopRule, Remedy, Owner, DecisionReceipt. No single composite score may override a protected threshold.

### Human authority and AI boundary

A multidisciplinary panel with learner, teacher, accessibility, privacy, support, leadership, and public-interest representation approves thresholds. AI may calculate metrics; it cannot decide that rights harm is acceptable.

### Safeguards and prohibited behavior

No monetization of dignity; no average benefit that conceals subgroup harm; no teacher workload transfer; no family convenience that discloses private learning; no cost reduction that weakens safety or human support.

### Minimum acceptance tests

Teacher-time saving versus review burden; average gain versus disability gap; lower cost versus meal or safety quality; improved attendance versus coercion; personalization versus privacy; energy savings versus indoor health.

### Success, harm, and stop measures

Threshold breaches; unresolved remedies; burden-transfer events; subgroup non-inferiority; teacher after-hours work; privacy incidents; accessibility parity; learner independence.

### Dependencies

Shared Benefit and Harm Ledger; participatory assembly; educational proof protocol; human capacity planner; accessibility report; rights navigator.

### Required approval evidence

Signed threshold register; stakeholder baseline; analysis plan; stop rules; remedy ownership; evidence dashboard; decision receipt.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-WLG-001 — Workforce and Labour Governance

**Capability family:** People, Labour, and Organizational Change  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Staff help design changes, receive protected training time, and are protected from hidden monitoring or unfair workload transfer.

### Why it exists

Teacher authority and human relationships cannot survive if technology changes roles without staffing, consultation, or workload evidence.

### End-to-end human and institutional workflow

1. Each capability produces a role-impact assessment. 2. Staff representatives review changed duties, training, decision queues, on-call expectations, support, psychosocial risk, and grievance routes. 3. Minimum staffing and maximum queues are set. 4. Activation requires capacity evidence and formal consultation. 5. Workload and relationship time are monitored.

### Technical identity

Objects: RoleImpact, WorkloadBaseline, TaskTransfer, StaffingMinimum, QueueLimit, TrainingAllocation, ProtectedTime, PsychosocialRisk, Consultation, RepresentativeDecision, Grievance, TelemetryProhibition, Renewal.

### Human authority and AI boundary

The employer and staff representatives own workforce decisions under applicable law and agreements. AI may forecast workload; it may not evaluate employee worth or make employment decisions.

### Safeguards and prohibited behavior

No covert productivity scoring; no keystroke or emotion monitoring; no training outside compensated time by default; no activation without qualified coverage; no punitive use of pilot feedback.

### Minimum acceptance tests

Net workload; after-hours work; queue saturation; staffing absence; training completion; grievance handling; role clarity; staff representative approval; telemetry access controls.

### Success, harm, and stop measures

Net time; relationship time; burnout indicators; support demand; backlog; training retention; turnover context; staff confidence; unresolved grievances.

### Dependencies

Jurisdiction profile; human capacity planner; approval authority matrix; teacher academy; institutional HR and staff representation.

### Required approval evidence

Role-design assessment; staffing model; protected training agreement; consultation receipt; psychosocial review; grievance process; telemetry prohibition; capacity sign-off.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-SCM-001 — Safeguarding Case Management and Escalation

**Capability family:** Safeguarding and Child Protection  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Safety concerns reach the right qualified person quickly. AI may help organize information, but a human decides what the concern means and what action is required.

### Why it exists

Safeguarding principles need a complete jurisdiction-specific operating workflow with roles, response times, evidence, referrals, and closure.

### End-to-end human and institutional workflow

1. A concern is reported through accessible channels. 2. Immediate danger triggers emergency procedures. 3. The designated safeguarding lead or deputy triages. 4. Interim protection, evidence preservation, parent-notification exceptions, external referral, vendor action, and support are recorded. 5. The case is reviewed and closed by authorized humans. 6. Recurrence-prevention actions are tracked.

### Technical identity

Objects: SafeguardingConcern, Reporter, TriageClass, ImmediateProtection, CaseOwner, EvidenceHold, ParentNoticeDecision, ExternalReferral, VendorEscalation, MentorRestriction, Outcome, ClosureReview, RecurrenceAction. Separate access domain and retention apply.

### Human authority and AI boundary

The designated safeguarding lead and legally competent authorities own decisions. AI may summarize, deduplicate, translate, or route under strict controls. It may not determine that abuse occurred or that a report is false.

### Safeguards and prohibited behavior

No automatic dismissal; no diagnosis; no disclosure to alleged perpetrators; no ordinary administrator access; no mixing with discipline scores; no use for marketing, analytics, or model training.

### Minimum acceptance tests

Immediate danger; out-of-hours report; deputy coverage; anonymous report; grooming; external mentor; AI-generated sexual-abuse material; evidence hold; parent-notification exception; police or child-protection referral; case closure.

### Success, harm, and stop measures

Time to acknowledgement; emergency latency; overdue cases; unauthorized access; missed escalation; repeat concern; support provided; evidence integrity; complainant safety.

### Dependencies

Jurisdiction profile; approval authority matrix; child-safe communication; identity; incident response; legal counsel; designated safeguarding lead.

### Required approval evidence

Signed safeguarding handbook; role and deputy roster; triage matrix; response SLAs; referral map; evidence and retention rules; training records; incident drill; independent safeguarding review.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-HBQ-001 — Health Boundary and Qualified Ownership

**Capability family:** Health, Wellbeing, Food, and Support Governance  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Health-related information and decisions stay with qualified people. The platform supports care but does not quietly become a medical or psychological diagnosis system.

### Why it exists

Food, allergies, movement, accessibility, environment, medication, wellbeing, and special support can involve health data and professional liability.

### End-to-end human and institutional workflow

1. Every health-adjacent feature identifies whether it processes health data or influences care. 2. A qualified professional owner, emergency route, lawful basis, record boundary, retention, and escalation are assigned. 3. Diagnostic and medical-device analyses are completed where relevant. 4. Families and learners receive role-appropriate notices. 5. Professional review and insurance are verified before activation.

### Technical identity

Objects: HealthAdjacentFeature, HealthDataFlag, QualifiedOwner, ScopeOfPractice, EmergencyProcedure, DiagnosticProhibition, MedicalDeviceAssessment, LawfulBasis, ClinicalEscalation, RecordBoundary, Retention, ConsentOrAuthority, LiabilityCoverage.

### Human authority and AI boundary

Qualified health, food-safety, disability, safeguarding, or other professionals own domain decisions. AI may provide approved administrative or educational support; it may not diagnose or prescribe.

### Safeguards and prohibited behavior

No diagnosis, treatment, medication change, mental-health classification, disability determination, or allergy decision by AI; no health data in general learner analytics; no use outside declared care purpose.

### Minimum acceptance tests

Allergy alert; food substitution; injury; medication; environmental alert; mental-health concern; special-support referral; professional handoff; emergency mode; record separation.

### Success, harm, and stop measures

Unauthorized health-data access; delayed escalation; incorrect advice; missing professional owner; expired qualification; liability gap; emergency response time; false reassurance.

### Dependencies

Jurisdiction profile; ROPA; safeguarding; Nourish; accessibility; environment intelligence; professional registers; insurance.

### Required approval evidence

Qualified-owner matrix; scope-of-practice rules; health-data DPIA; emergency procedures; liability and insurance evidence; professional review; medical-device applicability memo where relevant.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-ACR-001 — Accessibility Conformance Report and User Evidence

**Capability family:** Accessibility and Inclusion  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Every release shows which accessibility requirements were tested, what real users could complete, what problems remain, and what alternatives exist.

### Why it exists

Accessibility intent and automated scans do not prove conformance or real task success.

### End-to-end human and institutional workflow

1. Automated and manual tests run. 2. Critical journeys are tested with keyboard, screen readers, magnification, switch access, captions, cognitive supports, multiple languages, low-end devices, slow networks, offline packs, and print. 3. Disabled learners and staff participate. 4. Defects, severity, alternatives, owners, and expiry are published. 5. Blocking defects prevent release.

### Technical identity

Objects: ReleaseAccessibilityProfile, Requirement, TestMethod, AssistiveTechnology, UserScenario, Finding, Severity, Remediation, Alternative, Exception, Owner, Expiry, ConformanceStatement, EvidenceReceipt. Target: WCAG 2.2 AA and applicable EN 301 549 profile.

### Human authority and AI boundary

Accessibility specialists and affected users approve evidence. Automated tools identify issues but cannot certify usability or legal conformance.

### Safeguards and prohibited behavior

No unsupported 'fully accessible' claim; no diagnosis exposure; no expired exception; no inaccessible authentication or rights route; no lower competency standard merely because an alternative format is used.

### Minimum acceptance tests

Authentication; lesson creation; learner task; assessment; error recovery; timeouts; media; export; appeal; offline; print; multilingual; procurement; assistive-technology interoperability.

### Success, harm, and stop measures

Blocking defects; task completion; parity; remediation time; exception age; user-reported barriers; inaccessible fallback; regression rate.

### Dependencies

Universal Access Simulation Lab; Accessibility Remediation Console; procurement gate; design system; CI; disabled-user panel.

### Required approval evidence

Release-specific Accessibility Conformance Report; automated results; manual expert report; user-test evidence; unresolved issues; alternatives; exception approvals; remediation plan.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-CSE-001 — Cybersecurity Execution Assurance

**Capability family:** Security, Resilience, and Supply Chain  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Security promises must be demonstrated through tests, recovery drills, and independent review before schools rely on the system.

### Why it exists

The blueprint defines strong controls, but approval requires executed evidence for secure development, isolation, recovery, and incident response.

### End-to-end human and institutional workflow

1. Every release has threat models and security requirements. 2. Code and dependencies are scanned and reviewed. 3. SBOM/VEX, provenance, secrets, static, dynamic, tenant-isolation, authorization, prompt-injection, retrieval, model, and sandbox tests run. 4. Independent penetration testing covers critical surfaces. 5. Backup, restore, key rotation, ransomware, supplier compromise, and incident drills are executed. 6. Measured RTO and RPO are recorded.

### Technical identity

Objects: ThreatModel, SecurityRequirement, TestRun, Finding, SBOM, VEX, ProvenanceAttestation, PenTest, IsolationEvidence, RestoreDrill, IncidentExercise, RTO, RPO, VulnerabilityDisclosure, SupplierIncident, RiskAcceptance, ReleaseGate.

### Human authority and AI boundary

Security owner and independent testers approve evidence. Product owners accept only residual risk within defined authority. AI may assist detection and triage; it may not close critical findings autonomously.

### Safeguards and prohibited behavior

No fake test status; no production secret in logs; no unknown critical dependency; no unresolved critical isolation failure; no untested restore; no backdoor support account; no fail-open high-impact mode.

### Minimum acceptance tests

Tenant escape; privilege escalation; prompt injection; retrieval poisoning; model exfiltration; sandbox escape; offline trust expiry; key loss; ransomware; backup corruption; supplier compromise; vulnerability disclosure.

### Success, harm, and stop measures

Critical findings; exploitability; patch time; restore success; RTO/RPO; isolation pass rate; dependency freshness; secret exposure; incident detection and containment time.

### Dependencies

Secure development lifecycle; repositories and CI; product-law control plane; OMEGA; Offline Neural Mesh; identity and policy services; incident response.

### Required approval evidence

Threat models; secure-development evidence; SBOM/VEX; penetration report; red-team report; backup and restore receipt; incident exercise; vulnerability policy; residual-risk approvals.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-PFD-001 — Procurement, Liability, Insurance, and Financial Dossier

**Capability family:** Procurement and Sustainability  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Schools see the full five-year cost, contractual obligations, risks, insurance, service levels, exit route, and vendor continuity before committing.

### Why it exists

Feature lists do not establish affordability, public value, vendor viability, or a safe exit.

### End-to-end human and institutional workflow

1. The institution defines objective requirements and award criteria. 2. Vendors and internal teams submit total cost, staffing, training, accessibility, infrastructure, model, energy, support, incident, migration, insurance, liability, and exit assumptions. 3. Conformance and export are tested. 4. Financial viability, subprocessors, service levels, audit rights, deletion, termination assistance, and insolvency response are reviewed. 5. The governing body signs a value and risk decision.

### Technical identity

Objects: ProcurementProfile, Requirement, AwardCriterion, CostScenario, Assumption, FiveYearTCO, StaffingCost, AccessibilityCost, EnergyCost, MigrationCost, ExitCost, SLA, ServiceCredit, AuditRight, SubprocessorControl, Insurance, Indemnity, Escrow, InsolvencyPlan, ExitTest.

### Human authority and AI boundary

Procurement, finance, legal, security, accessibility, education, DPO, and governing-body owners approve. AI may compare structured submissions but may not award a public contract.

### Safeguards and prohibited behavior

No feature-count-only award; no hidden egress cost; no unverifiable savings; no vendor self-certification as sole evidence; no contract that blocks rights, audit, switching, or lawful deletion.

### Minimum acceptance tests

Five-year sensitivity; vendor failure; provider price change; model substitution; exit export; verified deletion; service outage; insurance claim; accessibility remediation cost; staff replacement and training cost.

### Success, harm, and stop measures

Forecast variance; hidden cost; vendor concentration; SLA breach; support burden; energy per useful task; exit readiness; insurance gap; non-conformance.

### Dependencies

Total Cost Planner; Procurement and Conformance Gate; Data Act switching; legal and product law; finance; security; accessibility.

### Required approval evidence

Approved procurement strategy; objective award criteria; five-year TCO; contract and DPA; SLA; insurance and indemnity matrix; vendor viability; exit and deletion test; continuity/escrow decision.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-CAP-001 — Commission Approval Pack Generator

**Capability family:** Approval and Public Accountability  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Decision-makers receive a clear, controlled approval pack instead of having to read the entire master blueprint.

### Why it exists

The master blueprint is a technical archive. Approval requires a concise evidence-led dossier with unresolved issues and signed decisions.

### End-to-end human and institutional workflow

1. The generator compiles current jurisdiction, scope, pilot, benefits, harms, laws, data roles, AI use cases, safeguarding, security, accessibility, evidence, workforce, finance, unresolved decisions, rollback, and opinions. 2. Each section links to source evidence. 3. Owners attest accuracy. 4. The governing body records go, hold, narrow, rollback, or reject.

### Technical identity

Objects: ApprovalCase, ExecutiveSummary, ScopeDecision, EvidenceIndex, UnresolvedDecision, Opinion, GoNoGoCriterion, RollbackPlan, Signature, Expiry, Revision. The pack is generated from structured registries, not manually copied claims.

### Human authority and AI boundary

The governing body owns the decision. Independent experts sign their own domains. AI may assemble and consistency-check the pack; it cannot decide approval.

### Safeguards and prohibited behavior

No omission of negative results; no stale evidence; no unsigned opinion represented as approval; no master-blueprint claim substituted for runtime proof; no raw personal data in commission packs.

### Minimum acceptance tests

Missing evidence; conflicting owner statements; expired report; unresolved blocker; failed rollback; negative pilot outcome; inaccessible pack; signature validation.

### Success, harm, and stop measures

Pack completeness; open blockers; evidence freshness; opinion coverage; decision turnaround; conditions tracked; rollback readiness.

### Dependencies

All version 15 registries; Evidence Spine; approval authority matrix; document control; independent review.

### Required approval evidence

Controlled eighteen-part approval pack; evidence index; signed opinions; open decision locks; go/no-go checklist; rollback and exit plan; governing-body decision.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-PIL-001 — Controlled Low-Risk Pilot Envelope

**Capability family:** Pilot Governance and Learning  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

The first pilot is deliberately small, reversible, and limited to low-risk support. It cannot silently expand into high-impact automation.

### Why it exists

Version 15 supports pilot learning, not premature production. Scope, exclusions, stop rules, evidence, staff capacity, and manual fallback must be explicit.

### End-to-end human and institutional workflow

1. Select one Belgian Community, school type, age range, small site group, duration, and approved capabilities. 2. Establish baseline, staff agreement, data and AI registers, safeguarding, accessibility, security, research, and rollback evidence. 3. Run in shadow or advisory mode where appropriate. 4. Monitor benefits and harms. 5. Stop, narrow, or roll back on threshold breach. 6. Publish results including negative findings. 7. A new decision is required for any expansion.

### Technical identity

Objects: PilotEnvelope, Site, Population, CapabilityAllowlist, CapabilityDenylist, Baseline, StopRule, ManualFallback, SupportPlan, ResearchProtocol, IncidentRoute, DailyReadiness, RollbackTrigger, OutcomeReport, ExpansionDecision.

### Human authority and AI boundary

The school governing body, DPO, safeguarding lead, staff representatives, accessibility lead, security owner, curriculum owner, and research owner approve within their domains.

### Safeguards and prohibited behavior

No cameras; no official grade replacement; no admissions, placement, discipline, certification, health inference, or commercial data use; no unsupervised external mentor; no consequential write by AI; no scope creep.

### Minimum acceptance tests

Capability allowlist; denylist enforcement; shadow mode; manual fallback; stop trigger; staff absence; data incident; accessibility blocker; model outage; rollback; negative result publication.

### Success, harm, and stop measures

Learning, workload, independence, accessibility, equity, incidents, privacy, support demand, family comprehension, stop events, rollback time.

### Dependencies

All mandatory pre-pilot gates; school sites; research protocol; support team; insurance; data, AI, security, accessibility, and safeguarding packs.

### Required approval evidence

Signed pilot charter; site and population scope; allowlist/denylist; baseline; research and rights approvals; support and staffing plan; stop rules; rollback drill; public result plan.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

## SF-ARE-001 — Approval Readiness Evidence Pack

**Capability family:** Release and Assurance  
**Implementation class:** `MVP_NOW`  
**Implementation status:** `TARGET_SPECIFICATION`  
**Production status:** `NOT_APPROVED`

### Learner and family explanation

Before a release advances, the system checks that every required evidence pack exists, is current, signed, and supported by real test results.

### Why it exists

The commission requires evidence across law, data protection, child rights, AI, safeguarding, security, accessibility, education, workforce, finance, interoperability, recovery, and governance.

### End-to-end human and institutional workflow

1. The release selects its risk and deployment profile. 2. Required evidence packs are generated. 3. Owners submit signed artifacts. 4. The service validates freshness, scope, signatures, unresolved findings, and dependencies. 5. Missing or failed evidence blocks advancement. 6. The final decision and conditions are recorded.

### Technical identity

Objects: EvidenceRequirement, EvidenceArtifact, Owner, Scope, TestReceipt, Signature, FreshnessRule, Finding, Condition, Dependency, GateResult, ReleaseDecision. Evidence states: NOT_RUN, FAILED, PARTIAL, PASSED, EXPIRED, NOT_APPLICABLE_WITH_JUSTIFICATION.

### Human authority and AI boundary

Domain owners sign their evidence. The release authority may not override mandatory legal, safety, safeguarding, accessibility, or critical security failures.

### Safeguards and prohibited behavior

No evidence-by-assertion; no blank `PASSED`; no expired report; no cross-scope reuse without justification; no claim that a tool-generated scan equals independent assurance.

### Minimum acceptance tests

Missing report; expired pen test; failed restore; unresolved safeguarding action; accessibility blocker; unsigned DPIA; stale AI classification; incomplete exit test; pilot evidence outside scope.

### Success, harm, and stop measures

Evidence completeness; freshness; test pass rate; independent coverage; unresolved conditions; decision lock count; rollback proof; time to remedy.

### Dependencies

All approval-control services; document signing; Evidence Spine; release management; independent reviewers.

### Required approval evidence

Jurisdiction and institutional scope; legal role matrix; DPIA; child-rights assessment; AI register; fundamental-rights review where applicable; safeguarding case; independent security report; accessibility report; curriculum and assessment validity; workforce report; preregistered pilot; independent educational outcome; equity analysis; procurement/financial dossier; insurance/liability; interoperability and cloud-exit test; backup/restore/rollback drill; incident exercise; staffed support model; signed governing-body decision.

### Failure, safe degradation, and rollback

If required jurisdiction, authority, lawful basis, professional ownership, evidence, accessibility, security, staff capacity, or rollback proof is missing, the capability shall remain disabled or return to the last validated manual or software workflow. Partial consequential writes are prohibited. The system shall preserve lawful evidence, explain the failure, identify the accountable owner, and create a signed rollback receipt.

### Explainability requirement

The learner/family, professional, technical, and commission views shall resolve to the same feature ID, version, intended purpose, data categories, authority, evidence grade, challenge route, approval state, and expiry.

# PART III — BELGIAN JURISDICTION PROFILES

## 3.1 Profile inheritance model

Every deployment shall inherit exactly one primary education-Community profile.

A cross-Community service shall maintain separate rule packs and shall not collapse them into one lowest-common-denominator profile.

### Required profile fields

```yaml
profile_id: BE-FL-EDU | BE-FR-EDU | BE-DE-EDU
community_authority: REQUIRED
school_type: REQUIRED
education_level: REQUIRED
funding_status: REQUIRED
official_languages: REQUIRED
curriculum_authority: REQUIRED
inspection_authority: REQUIRED
qualification_authority: REQUIRED
staff_framework: REQUIRED
records_rules: REQUIRED
complaints_authority: REQUIRED
appeals_authority: REQUIRED
data_protection_role: REQUIRED
safeguarding_referral_map: REQUIRED
health_and_food_authorities: REQUIRED
procurement_regime: REQUIRED
reviewed_by: REQUIRED
review_date: REQUIRED
expiry_date: REQUIRED
status: DRAFT | SIGNED | EXPIRED | SUSPENDED
```

## 3.2 `BE-FL-EDU`

**Plain explanation:** This profile applies only after a Flemish-Community school, school type, level, curriculum route, and governing authority are selected.

**Mandatory additions before activation:**

- competent Flemish education authority and inspection route;
- applicable attainment targets or curriculum framework;
- qualification and recognition route;
- language rules;
- pupil and staff records rules;
- complaints and appeals;
- staff and consultation framework;
- safeguarding referral map;
- health, food, facilities, and transport authorities;
- public procurement and subsidy conditions.

**Status:** `DECISION_LOCK` until populated and signed by qualified owners.

## 3.3 `BE-FR-EDU`

**Plain explanation:** This profile applies only after a French-Community school, school type, level, curriculum route, and governing authority are selected.

The same mandatory fields and evidence requirements as section 3.2 apply, using official French-Community and institutional sources.

**Status:** `DECISION_LOCK` until populated and signed by qualified owners.

## 3.4 `BE-DE-EDU`

**Plain explanation:** This profile applies only after a German-speaking-Community school, school type, level, curriculum route, and governing authority are selected.

The same mandatory fields and evidence requirements as section 3.2 apply, using official German-speaking-Community and institutional sources.

**Status:** `DECISION_LOCK` until populated and signed by qualified owners.

## 3.5 Cross-Community deployment

A cross-Community deployment requires:

- separate curriculum and qualification mappings;
- separate official-language and notice packs;
- separate inspection and appeals routes;
- explicit controller and processor allocations;
- conflict and precedence rules;
- data-separation and reporting rules;
- human review of every cross-profile transformation;
- independent verification that one Community's rules do not overwrite another's.

# PART IV — APPROVAL AUTHORITY AND EVIDENCE MATRICES

## 4.1 Minimum approval-authority matrix

| Decision | Accountable authority | Mandatory consultation | Evidence required | Appeal or review | Emergency suspension |
|---|---|---|---|---|---|
| Pilot activation | School governing body | DPO, safeguarding, staff representatives, accessibility, curriculum, security, families/learners as appropriate | Complete pre-pilot pack | Competent institutional authority | Principal plus designated emergency authority |
| Learner-data processing | Controller | DPO, legal, system owner | ROPA, lawful basis, DPIA where required | DPO/controller rights route | DPO/controller |
| AI use case | AI use-case authority | Legal, education, privacy, security, affected roles | AI register, evaluation, literacy, fallback | Governing body | AI kill-switch owner |
| Curriculum mapping | Curriculum authority | Teachers, qualification experts | Mapping evidence and coverage test | Curriculum review body | Curriculum authority |
| Assessment use | Qualified assessment authority | Teachers, accessibility, moderation | Validity, reliability, appeal, bias and accessibility | Assessment appeal body | Assessment owner |
| Accessibility exception | Accessibility authority | Affected users, product owner | Defect, alternative, owner, expiry | Governing body or statutory route | Accessibility authority |
| External mentor | Safeguarding and programme owners | Learner/family, legal, partner owner | Identity, checks, scope, supervision, insurance | Safeguarding lead | Safeguarding lead |
| Model change | Model operations owner | AI use-case owners, security, privacy, education | Evaluation, change impact, rollback | Release authority | Kill-switch owner |
| Cloud provider | Procurement authority | Legal, DPO, security, finance, accessibility | DPA, security, residency, exit, TCO | Governing body | Security or controller authority |
| Production release | Governing body | All domain owners | Complete approval readiness pack | Competent oversight authority | Defined emergency authority |

## 4.2 Evidence status vocabulary

- `NOT_RUN`
- `TOOL_REQUIRED`
- `HUMAN_REVIEW_REQUIRED`
- `PARTIAL`
- `FAILED`
- `PASSED`
- `EXPIRED`
- `NOT_APPLICABLE_WITH_SIGNED_JUSTIFICATION`
- `DECISION_LOCK`

No other status may be translated into `PASSED`.

# PART V — PROCESSING, AI, AND PRODUCT-LAW REGISTERS

## 5.1 Processing activity template

```yaml
processing_activity_id: REQUIRED
purpose: REQUIRED
data_subjects: []
data_categories: []
special_categories: []
lawful_basis: HUMAN_REVIEW_REQUIRED
article_9_condition: HUMAN_REVIEW_REQUIRED
controller: REQUIRED
joint_controllers: []
processors: []
subprocessors: []
recipients: []
storage_locations: []
international_transfers: []
retention_rule: REQUIRED
automated_decision_status: REQUIRED
rights_routes: []
dpia_status: NOT_ASSESSED
deletion_propagation: REQUIRED
correction_propagation: REQUIRED
security_profile: REQUIRED
owner: REQUIRED
review_date: REQUIRED
```

## 5.2 AI use-case template

```yaml
ai_use_case_id: REQUIRED
feature_id: REQUIRED
intended_purpose: REQUIRED
affected_people: []
provider_role: HUMAN_REVIEW_REQUIRED
deployer_role: HUMAN_REVIEW_REQUIRED
model_and_version: REQUIRED
data_categories: []
prohibited_practice_analysis: HUMAN_REVIEW_REQUIRED
high_risk_analysis: HUMAN_REVIEW_REQUIRED
transparency_duties: []
human_oversight: REQUIRED
accuracy_and_robustness_evidence: NOT_RUN
cybersecurity_evidence: NOT_RUN
data_governance_evidence: NOT_RUN
literacy_roles: []
incident_route: REQUIRED
post_market_monitoring: REQUIRED
fallback: REQUIRED
kill_switch: REQUIRED
approval_status: DECISION_LOCK
```

## 5.3 EU product component template

```yaml
component_id: REQUIRED
component_type: SOFTWARE | HARDWARE | CLOUD_SERVICE | EDGE_APPLIANCE | SENSOR | MODEL_PACKAGE | MOBILE_APP
economic_operator_roles: []
cra_applicability: HUMAN_REVIEW_REQUIRED
ai_act_applicability: HUMAN_REVIEW_REQUIRED
data_act_applicability: HUMAN_REVIEW_REQUIRED
product_liability_profile: HUMAN_REVIEW_REQUIRED
accessibility_profile: HUMAN_REVIEW_REQUIRED
support_period: REQUIRED
sbom: REQUIRED
vex: REQUIRED
vulnerability_disclosure: REQUIRED
switching_and_export: REQUIRED
recall_and_corrective_action: REQUIRED
insurance_owner: REQUIRED
technical_file_owner: REQUIRED
approval_status: DECISION_LOCK
```

# PART VI — MEASURABLE BENEFIT, HARM, AND EDUCATIONAL PROOF

## 6.1 Mandatory threshold schema

Each active capability shall define:

```yaml
stakeholder_group: REQUIRED
baseline: REQUIRED
intended_benefit: REQUIRED
minimum_meaningful_improvement: REQUIRED
acceptable_uncertainty: REQUIRED
maximum_tolerated_harm: REQUIRED
non_inferiority_condition: REQUIRED
stop_threshold: REQUIRED
remedy: REQUIRED
decision_owner: REQUIRED
measurement_frequency: REQUIRED
evidence_grade: REQUIRED
```

## 6.2 Non-transfer rules

A release fails when:

- teacher net workload materially worsens without an approved remedy;
- disabled learners experience a material task-success gap;
- learner independence worsens despite better assisted output;
- privacy risk increases outside an approved purpose;
- safeguarding capacity is insufficient;
- family access exposes protected learner information;
- lower operating cost reduces safety, meal quality, accessibility, or human support;
- energy reduction violates health or learning-environment constraints;
- average gains conceal material subgroup harm;
- a complaint or appeal route is inaccessible or nonfunctional.

## 6.3 Educational proof ladder

1. Usability and task completion.
2. Accuracy and groundedness.
3. Immediate learning evidence.
4. Independent performance.
5. Delayed retention.
6. Transfer to a new context.
7. Misconception correction.
8. Accessibility parity.
9. Subgroup equity.
10. Teacher workload and relationship-time effect.
11. Replication in another site.
12. Independent review.
13. Scale decision.

A feature may not claim validated educational effectiveness before stages 4 through 12 are addressed proportionately.

# PART VII — WORKFORCE, SAFEGUARDING, HEALTH, AND ACCESSIBILITY OPERATING CASES

## 7.1 Workforce minimums

Before pilot activation:

- every new task has a named role;
- workload baselines exist;
- maximum review and intervention queues are defined;
- training occurs in protected time;
- qualified absence coverage exists;
- staff representatives receive accessible evidence;
- psychosocial risks are reviewed;
- grievance and escalation routes exist;
- product telemetry is prohibited from covert employment evaluation;
- the school can operate manually during AI or platform failure.

## 7.2 Safeguarding operating handbook minimum

The handbook shall include:

- designated safeguarding lead and deputy;
- out-of-hours and emergency arrangements;
- mandatory-reporting rules;
- triage categories;
- response times;
- immediate protective actions;
- evidence preservation;
- parent-notification rules and exceptions;
- child-protection and police referral routes;
- mentor and partner controls;
- online grooming and exploitation scenarios;
- AI-generated child-sexual-abuse-material response;
- confidentiality and role-based access;
- case closure and recurrence prevention;
- training and exercise schedule.

## 7.3 SecureBoard Guardian controlling amendment

SecureBoard Guardian remains preserved as an invention specification.

Its current status is:

`RESEARCH_GATED — LEGAL_PATH_NOT_ESTABLISHED — EXCLUDED_FROM_INITIAL_PILOT — DISABLED_BY_DEFAULT`

It may not advance without:

- jurisdiction-specific legal opinion;
- camera-law analysis;
- DPIA;
- child-rights impact assessment;
- necessity and proportionality analysis;
- less-intrusive-alternative analysis;
- staff and representative consultation;
- safeguarding review;
- independent ethics review;
- physical security assessment;
- insurer approval;
- separate governing-body decision;
- independent test of key custody, quorum, minimum-window access, and deletion;
- public and age-appropriate notice;
- documented chilling-effect assessment.

Encryption and quorum do not establish lawfulness by themselves.

## 7.4 Health-adjacent boundaries

Every health-adjacent module shall:

- declare whether health data is processed;
- identify a qualified owner;
- state the allowed professional scope;
- prohibit diagnosis unless separately authorized and regulated;
- define emergency and clinical escalation;
- separate health records from general learner analytics;
- define lawful basis and retention;
- identify liability and insurance;
- disclose when the feature is informational only;
- remain manually operable.

## 7.5 Accessibility conformance minimum

Every release shall include:

- automated test results;
- manual expert review;
- keyboard-only results;
- screen-reader results;
- zoom and magnification results;
- switch or alternative-input results where applicable;
- captions and transcripts;
- cognitive-accessibility review;
- multilingual tests;
- low-end-device tests;
- slow-network tests;
- offline tests;
- print and paper tests;
- disabled learner and staff user tests;
- unresolved defects;
- alternatives;
- owners and expiry dates;
- a signed release-specific Accessibility Conformance Report.

# PART VIII — CYBERSECURITY, PROCUREMENT, LIABILITY, AND EXIT

## 8.1 Mandatory cybersecurity execution evidence

Before `PILOT_READY`:

- current threat models;
- secure-development lifecycle;
- code-review evidence;
- dependency provenance;
- SBOM and VEX;
- secret scanning;
- static and dynamic analysis;
- authorization and tenant-isolation tests;
- prompt-injection and retrieval-poisoning tests;
- model and data-exfiltration tests;
- OMEGA isolation tests where used;
- backup verification;
- full restore;
- key rotation;
- incident and ransomware exercises;
- supplier-compromise scenario;
- vulnerability disclosure process;
- measured RTO and RPO;
- owner and remediation date for every finding.

Independent penetration testing is mandatory before limited production.

## 8.2 Procurement dossier minimum

The dossier shall include:

- objective educational and operational requirements;
- standards and conformance requirements;
- five-year total cost;
- implementation and migration cost;
- training and replacement-staff cost;
- accessibility cost;
- local infrastructure and offline cost;
- model inference and energy cost;
- support and incident cost;
- exit and deletion cost;
- financial viability;
- insurance and indemnity;
- service levels and service credits;
- audit rights;
- subprocessor controls;
- termination assistance;
- Data Act switching and export plan where applicable;
- verified export and deletion;
- insolvency response;
- source or continuity escrow decision where justified;
- conflict-of-interest declarations.

## 8.3 Cloud and vendor exit test

The test shall demonstrate:

1. export of all contractually required data and metadata;
2. machine-readable, documented formats;
3. preservation of provenance and evidence;
4. credential and verification continuity;
5. import into an alternative or neutral environment;
6. functional-equivalence assessment where legally applicable;
7. deletion and residual-copy handling;
8. subprocessor deletion;
9. key and token revocation;
10. operation through a defined transition period;
11. cost and duration;
12. signed completion receipt.

# PART IX — CONTROLLED PILOT BLUEPRINT

## 9.1 Initial pilot scope

The version 15 recommended pilot is six to twelve months and includes only:

- Teacher Workspace and Lesson Studio;
- ActivityForge with human approval;
- source-quality classification and trusted content;
- Accessibility Remediation Console;
- Offline Content Channel Studio and Print Bridge;
- learner practice through Tutoring Integrity Mode;
- explicit learner help requests;
- Teacher Intervention Queue using declared learning events only;
- Evidence Spine in shadow mode;
- INSIGHT in shadow mode without official grade automation;
- learner explanation, correction, appeal, and remedy;
- teacher workload and relationship-time measurement;
- benefit-and-harm thresholds;
- complete manual fallback.

## 9.2 Explicit pilot exclusions

The pilot shall not include:

- SecureBoard Guardian or classroom cameras;
- official grade replacement;
- admissions, placement, discipline, certification, or pathway restriction by AI;
- health or psychological diagnosis or inference;
- unsupervised external mentorship;
- live workplace credential decisions;
- biometric attention or emotion analysis;
- broad commercial marketplace functions;
- automatic employee-performance analytics;
- consequential School Action Broker writes;
- large-scale cross-school learner intelligence;
- commercial use of learner data.

## 9.3 Pre-pilot hard gates

- one signed Belgian jurisdiction profile;
- one defined school type and age range;
- signed approval-authority matrix;
- complete ROPA for pilot flows;
- DPIA and child-rights assessment as required;
- complete pilot AI use-case register;
- safeguarding handbook and trained coverage;
- workforce agreement and capacity evidence;
- Accessibility Conformance Report;
- security evidence and restore drill;
- insurance and liability review;
- procurement and support plan;
- preregistered educational protocol;
- benefit and harm thresholds;
- family and learner notices;
- manual fallback and rollback drill;
- signed governing-body pilot decision.

## 9.4 Stop conditions

The pilot pauses or rolls back on:

- serious safeguarding event linked to the system;
- prohibited data use;
- material unauthorized access;
- inability to operate critical manual fallback;
- unresolved accessibility blocker;
- staff queue or workload threshold breach;
- material subgroup harm;
- learner-independence deterioration beyond threshold;
- persistent unsupported AI output above threshold;
- failed restore or evidence integrity;
- unapproved scope expansion;
- unregistered model or provider change;
- legal authority withdrawal;
- insurance or critical supplier failure.

## 9.5 Pilot outcomes

The final report shall include:

- implementation truth;
- site and population;
- deviations;
- learning, retention, transfer, and independence;
- accessibility;
- equity;
- teacher workload and relationship time;
- learner and family comprehension;
- incidents and complaints;
- security and reliability;
- offline performance;
- costs;
- negative and inconclusive findings;
- stop or rollback events;
- independent reviewer opinion;
- recommendation: stop, redesign, replicate, or narrowly expand.

# PART X — COMMISSION APPROVAL DOSSIER

## 10.1 Required eighteen-part pack

1. Executive approval case.
2. Jurisdiction and institutional scope.
3. Pilot definition and exclusions.
4. Stakeholder benefits, harms, and thresholds.
5. Legal-obligations matrix.
6. AI use-case register.
7. Data-flow and legal-role map.
8. Safeguarding operating case.
9. Security assurance case.
10. Accessibility Conformance Report.
11. Educational evidence protocol.
12. Workforce and capacity agreement.
13. Procurement and financial model.
14. Unresolved decision locks.
15. Go/no-go checklist.
16. Rollback and exit plan.
17. Signed multidisciplinary opinions.
18. Master blueprint as controlled appendix.

## 10.2 Mandatory evidence before limited production

| Evidence pack | Required status |
|---|---|
| Jurisdiction and institutional scope | SIGNED |
| Legal obligations and role matrix | SIGNED BY QUALIFIED COUNSEL |
| Data-protection impact assessment | APPROVED BY DPO AND CONTROLLER |
| Child-rights impact assessment | INDEPENDENTLY REVIEWED |
| AI use-case and risk register | COMPLETE |
| Fundamental-rights review where applicable | COMPLETE |
| Safeguarding operating case | APPROVED |
| Security architecture and penetration report | INDEPENDENTLY TESTED |
| Accessibility Conformance Report | USER-TESTED |
| Curriculum and assessment validity report | PROFESSIONALLY APPROVED |
| Teacher workload and capacity report | STAFF-REVIEWED |
| Pilot protocol and baseline | PREREGISTERED |
| Educational outcome report | INDEPENDENTLY EVALUATED |
| Equity and subgroup analysis | COMPLETE |
| Financial and procurement dossier | APPROVED |
| Insurance and liability matrix | APPROVED |
| Interoperability and cloud-exit test | PASSED |
| Backup, restore, and rollback drill | PASSED |
| Incident and breach exercise | PASSED |
| Production support model | STAFFED |
| Governing-body release decision | SIGNED |

## 10.3 Go/no-go decision

```yaml
decision_id: REQUIRED
release_or_pilot_scope: REQUIRED
jurisdiction_profile: REQUIRED
approved_capabilities: []
excluded_capabilities: []
conditions: []
open_decision_locks: []
evidence_index: REQUIRED
benefit_threshold_result: REQUIRED
harm_threshold_result: REQUIRED
accessibility_result: REQUIRED
security_result: REQUIRED
safeguarding_result: REQUIRED
workforce_result: REQUIRED
educational_result: REQUIRED
rollback_test_result: REQUIRED
decision: GO | NARROW | HOLD | ROLLBACK | REJECT
accountable_authority: REQUIRED
signatures: []
expiry_date: REQUIRED
```

# PART XI — DELIVERY PROGRAM

## 11.1 Work package sequence

### WP0 — Scope and authority

Deliver:

- selected Community and school scope;
- jurisdiction profile;
- approval-authority matrix;
- initial capability allowlist and denylist;
- decision-lock register.

### WP1 — Legal, privacy, child-rights, and AI registers

Deliver:

- ROPA and data-flow maps;
- DPIA decision and assessment;
- child-rights assessment;
- AI use-case register;
- provider/deployer analysis;
- AI-literacy programme;
- product-law applicability map.

### WP2 — Workforce, safeguarding, health, and accessibility

Deliver:

- workforce agreement;
- human-capacity plan;
- safeguarding handbook;
- health-qualified-owner map;
- Accessibility Conformance Report plan;
- disabled-user test panel.

### WP3 — Repository and architecture pre-audit

Before code changes:

- stack and package manager;
- lockfiles;
- scripts;
- test framework;
- lint and type-check;
- CI and deployment target;
- environment-variable names only;
- identity, data, routes, modules, and patterns;
- dependency and license review;
- SBOM baseline;
- current security findings.

### WP4 — Low-risk foundation build

Implement:

- identity and role boundaries;
- policy and purpose gateway;
- content and source registry;
- teacher planning;
- accessible learning spaces;
- offline and print packs;
- Evidence Spine in shadow mode;
- rights and remedy routes;
- observability and kill switches.

### WP5 — Verification and adversarial testing

Run:

- unit, integration, contract, end-to-end, accessibility, security, privacy, offline, performance, restore, rollback, and misuse tests;
- prompt injection;
- retrieval poisoning;
- unsupported claims;
- tenant isolation;
- data deletion propagation;
- manual fallback.

### WP6 — Staff rehearsal and pilot readiness

Deliver:

- protected training;
- Educator AI Calibration Lab scenarios;
- safeguarding and incident drills;
- restore and rollback drill;
- family and learner communication;
- support rota;
- commission pack.

### WP7 — Controlled pilot

Operate within the signed envelope.

No scope expansion without a new approval.

### WP8 — Independent evaluation

Publish positive, negative, and inconclusive findings.

### WP9 — Decision

Stop, redesign, replicate, or narrowly expand.

No automatic progression.

## 11.2 Build task grammar

Every implementation task shall contain:

```text
PART
TASK
STEPS
MUST_BE_TRUE
FILES_OR_MODULES
DATA_BOUNDARY
SECURITY_AND_PRIVACY
ACCESSIBILITY
OFFLINE_AND_MANUAL_FALLBACK
TESTS
OBSERVABILITY
FAILURE_MATRIX
ROLLBACK
EVIDENCE_RECEIPTS
OWNER
STATUS
```

## 11.3 No-fake-complete rule

No task may be marked complete without:

- changed artifact or code reference;
- commands or procedures used;
- test result;
- unresolved findings;
- rollback evidence;
- accountable owner;
- implementation status.

# PART XII — CURRENT LAW, GUIDANCE, AND STANDARD REGISTER

## 12.1 Official-source register reviewed 20 July 2026

| Topic | Official source | Evidence status | Version 15 use |
|---|---|---|---|
| Belgian Communities and education competence | https://www.belgium.be/en/about_belgium/government/communities | OFFICIAL GOVERNMENT INFORMATION | Separate BE-FL, BE-FR, and BE-DE profiles |
| EU AI Act | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai | CURRENT LAW / OFFICIAL INFORMATION | Use-case classification, oversight, transparency, literacy, post-market evidence |
| High-risk AI classification guidance | https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems | OFFICIAL GUIDANCE; LEGAL REVIEW REQUIRED | Intended-purpose analysis; do not infer blanket platform status |
| AI literacy | https://digital-strategy.ec.europa.eu/en/policies/ai-talent-skills-and-literacy | CURRENT AI ACT OBLIGATION | Role-specific literacy evidence |
| Belgian DPA AI and GDPR | https://www.dataprotectionauthority.be/publications/artificial-intelligence-systems-and-the-gdpr---a-data-protection-perspective.pdf | OFFICIAL DPA GUIDANCE | Lawfulness, fairness, transparency, purpose, minimization, rights, accountability |
| Children and GDPR | https://www.edpb.europa.eu/topics/key-gdpr-concepts/children_en | OFFICIAL EDPB INFORMATION | Age-appropriate information and extra protection |
| DPIA | https://www.edpb.europa.eu/topics/accountability-and-compliance-tools/data-protection-impact-assessment_en | OFFICIAL EDPB INFORMATION | Pre-processing high-risk assessment |
| Cyber Resilience Act | https://commission.europa.eu/news-and-media/news/safer-digital-future-new-cyber-rules-become-law-2024-12-10_en | CURRENT EU LAW / OFFICIAL INFORMATION | Product-component applicability and lifecycle cybersecurity |
| Data Act | https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained | CURRENT EU LAW / OFFICIAL INFORMATION | Switching, interoperability, exports, and service-provider duties |
| Product liability | https://commission.europa.eu/news-and-media/news/eu-adapts-product-liability-rules-digital-age-and-circular-economy-2024-12-09_en | CURRENT EU LAW / OFFICIAL INFORMATION | Software, AI, and digital-service liability analysis |
| 2026 educator AI and data guidance | https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/ethical-guidelines-for-educators-on-using-artificial-intelligence | OFFICIAL GUIDANCE | Teacher Academy and activation gates |
| 2026 digital content guidance | https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/digital-education-content-guidelines-and-framework | OFFICIAL GUIDANCE | Content quality and procurement |
| WCAG 2.2 | https://www.w3.org/TR/WCAG22/ | OFFICIAL STANDARD | Product accessibility target |
| EN 301 549 V3.2.1 | https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf | PUBLISHED HARMONISED EUROPEAN STANDARD; APPLICABILITY REVIEW REQUIRED | ICT accessibility and procurement evidence |

## 12.2 Currentness rule

All laws, guidance, standards, Community rules, official curricula, procurement conditions, security advisories, and model/provider details shall be refreshed before each approval decision.

A source register entry does not substitute for qualified legal, educational, security, accessibility, or professional review.

# PART XIII — CHANGE MANIFEST AND AUDIT JSON

## 13.1 CHANGE_MANIFEST_JSON

```json
{
  "project": "SCHOLAFORGE",
  "version": "15.0",
  "base_version": "14.0",
  "change_type": "ADDITIVE_APPROVAL_AND_ASSURANCE_REMEDIATION",
  "preserved_base_sha256": "515cedaaa6dd0aad7fa3b020fe3a3fef54aa8561d14dfc979736be5763b209fe",
  "audit_source_sha256": "7a85ca630f7e084f730b654ee8942df41474f6bc63a0309c9e2abce46cf0a11c",
  "new_control_features": [
    "SF-JUR-001",
    "SF-AAM-001",
    "SF-ROP-001",
    "SF-AUR-001",
    "SF-EUL-001",
    "SF-EEP-001",
    "SF-BTG-001",
    "SF-WLG-001",
    "SF-SCM-001",
    "SF-HBQ-001",
    "SF-ACR-001",
    "SF-CSE-001",
    "SF-PFD-001",
    "SF-CAP-001",
    "SF-PIL-001",
    "SF-ARE-001",
    "SF-RGC-001"
  ],
  "approval_decision": {
    "strategic_direction": "APPROVE",
    "architecture": "APPROVE_WITH_CONDITIONS",
    "low_risk_pilot": "CONDITIONALLY_APPROVABLE",
    "high_impact_ai": "NOT_APPROVED",
    "school_wide_production": "NOT_APPROVED"
  },
  "implementation_proof": "NOT_ESTABLISHED",
  "legal_conformity": "HUMAN_REVIEW_REQUIRED"
}
```

## 13.2 AUDIT_REPORT_JSON

```json
{
  "audit_scope": [
    "educational benefit",
    "learner rights",
    "teacher authority",
    "Belgian jurisdiction",
    "privacy",
    "AI governance",
    "child rights",
    "safeguarding",
    "workforce",
    "health boundaries",
    "accessibility",
    "cybersecurity",
    "procurement",
    "liability",
    "financial sustainability",
    "pilot evidence",
    "rollback",
    "retrieval_governance",
    "rag_crag_rrf_rff_consistency"
  ],
  "critical_blockers_converted_to_controls": 15,
  "new_feature_controls": 17,
  "remaining_runtime_evidence": "NOT_RUN",
  "production_ready": false,
  "pilot_ready": false,
  "human_review_required": true,
  "highest_priority_next_step": "SELECT_JURISDICTION_AND_COMPLETE_PRE_PILOT_EVIDENCE"
}
```

## 13.3 COMPLIANCE_CHECKLIST_JSON

```json
{
  "jurisdiction_profile_signed": false,
  "approval_authority_matrix_signed": false,
  "ropa_complete": false,
  "dpia_approved": false,
  "child_rights_assessment_reviewed": false,
  "ai_use_case_register_complete": false,
  "ai_literacy_evidence_complete": false,
  "safeguarding_case_approved": false,
  "workforce_agreement_complete": false,
  "health_ownership_complete": false,
  "accessibility_conformance_report_passed": false,
  "security_execution_evidence_passed": false,
  "independent_penetration_test_passed": false,
  "educational_protocol_preregistered": false,
  "benefit_harm_thresholds_signed": false,
  "procurement_financial_dossier_approved": false,
  "insurance_liability_approved": false,
  "cloud_exit_test_passed": false,
  "restore_and_rollback_drill_passed": false,
  "incident_exercise_passed": false,
  "pilot_charter_signed": false,
  "governing_body_decision_signed": false,
  "production_approval": false
}
```

# PART XIV — FINAL VERSION 15 STATUS

## 14.1 Current truthful state

- Blueprint architecture: **COMPLETE TARGET SPECIFICATION**
- Version 14 feature preservation: **COMPLETE**
- Sibling source-universe reconciliation: **COMPLETE**
- Feature registry index (155 IDs): **COMPLETE**
- Governed retrieval control plane (PART I-A / SF-RGC-001): **ADDED**
- Blueprint RAG index companion: **ADDED**
- Document map and reading order: **COMPLETE**
- Approval-audit remediation layer: **ADDED**
- Belgian Community selection: **NOT DECIDED**
- Implementation: **NOT PROVEN**
- Tests: **NOT RUN IN THIS DOCUMENT WORKFLOW**
- Independent educational evidence: **NOT ESTABLISHED**
- Accessibility conformance: **NOT ESTABLISHED**
- Security assurance: **NOT ESTABLISHED**
- Legal conformity: **HUMAN_REVIEW_REQUIRED**
- Pilot readiness: **NOT YET ESTABLISHED**
- Production readiness: **NOT ESTABLISHED**

## 14.2 Required next decision

Select:

- one Belgian education Community;
- one school type;
- one education level and age range;
- one curriculum and qualification route;
- one small pilot cohort;
- one accountable governing body.

Then execute work packages WP0 through WP6.

## 14.3 Final rule

ScholaForge shall not be approved because its blueprint is large or innovative.

It shall advance only when the selected scope is:

- lawful;
- educationally valid;
- accessible;
- safe;
- staffed;
- financially sustainable;
- independently tested;
- explainable;
- reversible;
- demonstrably beneficial without unacceptable burden transfer.

# PART XV — PRESERVED VERSION 14 MASTER BLUEPRINT

The following is the complete feature-bearing version 14 master blueprint preserved as the canonical product, architecture, whole-school, benefit-for-all, and technical foundation.

Where it conflicts with version 15, the stricter version 15 approval and assurance rule controls.

---

# SCHOLAFORGE

## Sovereign Human-Development, Evidence-Carrying School Operating System

**Unified Deep-Research, Explainable, Benefit-for-All Master Blueprint — Version 14.0**

| Field | Value |
|---|---|
| Canonical project name | **SCHOLAFORGE** |
| Original identity | **19. ScholaForge Belgium - Eu regulations** |
| Project code | **48** |
| Owner | **Agim Haxhijaha / VertoGroup.ai** |
| Status | **MASTER TARGET BLUEPRINT** |
| Implementation proof | **NOT ESTABLISHED** |
| Legal conformity | **HUMAN_REVIEW_REQUIRED** |
| Production readiness | **NOT ESTABLISHED** |
| Architecture decision | **Evidence-Carrying Human Development Commons built from federated local-first school cells** |
| Version 14 focus | One authority model · benefits for all · four-lens explainability · learning independence · participatory governance · opportunity equity · human-capacity protection |
| Currentness date | **20 July 2026** |

> **Truth boundary:** This is a complete target specification. It does not prove that software exists, tests passed, legal obligations were satisfied, integrations work, educational benefits occurred, or a production deployment is safe.

> **Preservation boundary:** Version 14 preserves the feature-bearing content of both uploaded version 13 blueprints. The version 14 authority layer resolves conflicts, adds new capabilities, and makes the combined specification easier to navigate. No earlier production or legal claim is revived.

# PART 0 — VERSION 14 EXECUTIVE DECISION AND DEEP EVALUATION

## 0.1 Executive decision

ScholaForge should be built as an **Evidence-Carrying Human Development Commons**.

It is more than an LMS, tutor, data platform, or school-management product.

It combines four mutually dependent planes:

1. **Human Development Plane** — foundations, independence, creativity, expertise, health, belonging, agency, contribution, and lifelong pathways.
2. **Teaching and Learning Plane** — teacher-led learning spaces, tutoring, activities, projects, assessment, evidence, accessibility, libraries, laboratories, movement, and field learning.
3. **Whole-School Service Plane** — identity, attendance, food, facilities, devices, schedules, administration, families, governance, finance, partners, and continuity.
4. **Trust and Sovereignty Plane** — rights, privacy, safeguarding, policy, explainability, Evidence Spine, model governance, interoperability, offline school cells, security, audit, rollback, and research.

The final measure is not the number of features.

The final measure is whether learners become more capable and independent while teachers, families, staff, communities, public institutions, and the environment also receive durable benefit without hidden harm.

## 0.2 Deep evaluation of the two version 13 blueprints

### Strengths preserved

- complete human-first educational philosophy;
- teacher authority and learner rights;
- private and reversible personalization;
- strong knowledge orchestration and evidence packets;
- authentic assessment and appeals;
- whole-school services including library, food, sport, expeditions, facilities, attendance, arts, clubs, enterprise, and student democracy;
- signature inventions including MySAGA, TwinTeach Live, MotionClass, No-ID Motion, SecureBoard Guardian, Offline Neural Mesh, OMEGA Seal, INSIGHT, and Evidence Spine;
- local-first and offline continuity;
- standards-oriented interoperability and learner portability;
- explicit failure, rollback, pilot, and release requirements;
- strong anti-surveillance and anti-manipulation boundaries.

### Structural weaknesses corrected in version 14

1. Two different version 13 documents existed in parallel.
2. The whole-school expansion and the evidence-backed product expansion were not governed by one precedence model.
3. Many segments were explainable, but the explanation format was not universal.
4. Feature breadth exceeded navigational clarity.
5. Earlier competitive percentages were not based on a common independent measurement instrument.
6. Immediate task performance could still be mistaken for durable learning.
7. Stakeholder benefit was measured by domain, but hidden burden transfer was not a release gate.
8. Participation by children, teachers, disabled users, families, and non-teaching staff was not a canonical product-governance subsystem.
9. Human capacity and relationship time were not hard architectural constraints.
10. Rights, appeals, corrections, accessibility complaints, and remedies remained distributed across multiple services.
11. Advanced inventions could distract from a smaller, testable first release.
12. Some currentness statements required a single authoritative 20 July 2026 register.

## 0.3 Version 14 precedence

1. Platform safety and applicable law.
2. Explicit version 14 rules.
3. The stricter child-rights, privacy, accessibility, safeguarding, labor, health, or human-oversight rule.
4. The preserved version 13 whole-school blueprint.
5. The preserved version 13 evidence-backed delta.
6. Older preserved feature details.
7. Unresolved high-impact conflicts require `DECISION_LOCK`.

No software component may treat a lower-priority statement as permission to weaken a higher-priority rule.

## 0.4 Evidence discipline

Use these evidence states:

- `CURRENT_LAW`;
- `OFFICIAL_STANDARD`;
- `OFFICIAL_GUIDANCE`;
- `DRAFT_GUIDANCE`;
- `INDEPENDENT_EVIDENCE`;
- `VENDOR_REPORTED`;
- `LOCAL_PILOT_EVIDENCE`;
- `TARGET_SPECIFICATION`;
- `UNKNOWN`;
- `REJECTED`.

Architecture novelty, implementation maturity, educational efficacy, legal conformity, security assurance, accessibility conformance, and deployment scale are separate judgments.

# PART I — BENEFIT FOR ALL FRAMEWORK

## 1.1 Non-transfer principle

A capability fails when it creates benefit for one stakeholder by silently transferring unacceptable cost, risk, exclusion, workload, surveillance, or loss of autonomy to another.

Examples:

- saving administrative time by increasing teacher review burden;
- improving task completion while weakening independent learning;
- reducing cost by lowering meal safety, accessibility, or human support;
- improving attendance metrics through coercion;
- improving engagement through manipulation;
- increasing personalization through permanent profiling;
- improving energy efficiency by harming indoor conditions;
- increasing data visibility by violating privacy.

## 1.2 Stakeholder benefit and harm matrix

| Stakeholder | Intended benefit | Principal harm to prevent | Required evidence |
|---|---|---|---|
| Learners | Stronger foundations, agency, accessible routes, authentic work, privacy, challenge rights, portable evidence | Dependency, profiling, exclusion, surveillance, pathway narrowing | Independent retention and transfer; opportunity access; accessibility; rights outcomes |
| Teachers | Less repetitive work, better evidence, usable planning, professional control, protected relationship time | Review overload, deskilling, surveillance, fragmented tools | Net workload; override quality; relationship time; confidence; support demand |
| Families and guardians | Clear progress, rights, multilingual communication, appropriate support | Overexposure of private learning, consent confusion, alert fatigue | Comprehension; correct access; response quality; complaint resolution |
| Support professionals | Purpose-bound evidence, coordinated accommodations, faster barrier resolution | Diagnosis leakage, role confusion, automation of professional judgment | Barrier closure; minimum disclosure; professional review; service latency |
| School leaders and boards | Reversible decisions, cost and risk visibility, whole-school evidence | Dashboard theatre, hidden uncertainty, premature scaling | Decision traceability; rollback readiness; unresolved risk; benefit distribution |
| Non-teaching staff | Integrated food, library, facilities, administration, and safety workflows | Work intensification, invisible labor, punitive metrics | Workload, incident prevention, service quality, staff participation |
| Community and employers | Safe contribution, mentorship, apprenticeships, verified competencies | Learner exploitation, recruitment pressure, IP extraction | Partner quality; safeguarding; learner choice; community value |
| Public authorities and qualification bodies | Inspectable evidence, interoperability, portability, rights and assurance records | False conformity claims, vendor lock-in, incompatible data | Conformance tests; export success; audit evidence; legal review status |
| Society and environment | Capable citizens, lifelong learning, community problem-solving, resilient and sustainable schools | Inequality, digital dependency, resource externalities | Equity, public value, resilience, health, environmental outcomes |

## 1.3 Multi-objective release gate

A release may advance only when:

- the educational benefit is explicit;
- affected stakeholders are identified;
- benefits and burdens are measured separately;
- child rights and best interests are reviewed;
- teacher and support capacity is sufficient;
- accessible and offline routes exist;
- independent learning is protected;
- privacy and data purpose are valid;
- no prohibited surveillance or manipulation is introduced;
- failure and rollback are tested;
- legal and professional reviews are complete where required;
- the evidence grade matches the claim.

## 1.4 Benefit portfolio

Every capability must identify at least one primary benefit and one non-negotiable guardrail in each applicable domain:

- learning;
- human relationships;
- agency;
- equity;
- accessibility;
- privacy;
- safety;
- staff workload;
- family trust;
- operational continuity;
- public accountability;
- environmental sustainability.

# PART II — UNIVERSAL EXPLAINABILITY STANDARD

## 2.1 Four-lens explanation

Every active, proposed, suspended, or retired capability must have four linked explanations.

### Lens A — Learner and family

Short sentences.

Explains what it is, why it exists, what data it uses, what a person can choose, who decides, and how to challenge it.

### Lens B — Professional

Explains the educational or operational purpose, workflow, authority, evidence, limitations, and professional responsibilities.

### Lens C — Technical

Defines bounded context, data ownership, states, APIs, events, security, privacy, offline behavior, observability, tests, and rollback.

### Lens D — Audit and assurance

Shows risk classification, legal owner, evidence grade, model and software versions, policy, approvals, incidents, unresolved questions, release status, and receipts.

## 2.2 Mandatory explainable segment card

Every segment must contain or inherit:

```text
CANONICAL NAME AND STABLE ID
ONE-SENTENCE PLAIN EXPLANATION
WHO BENEFITS
REAL-WORLD EXAMPLE
EXPECTED BENEFIT
EVIDENCE GRADE
HUMAN AUTHORITY
AI ROLE AND LIMIT
DATA USED
DATA PROHIBITED
ACCESSIBILITY
OFFLINE AND MANUAL CONTINUITY
FAILURE AND SAFE DEGRADATION
RIGHTS, CHALLENGE, AND REMEDY
SUCCESS MEASURES
HARM INDICATORS
DEPENDENCIES
IMPLEMENTATION STATUS
ROLLBACK
```

A concept-only feature is incomplete.

## 2.3 Explanation integrity

All four lenses must resolve to the same:

- feature ID;
- version;
- intended purpose;
- data categories;
- policy;
- model or deterministic process;
- human owner;
- evidence;
- uncertainty;
- challenge route;
- status.

A friendly explanation may simplify wording.

It may not hide a limitation, risk, data use, or unresolved decision.

## 2.4 Progressive disclosure

The default interface shows the shortest useful explanation.

A person can expand to:

1. why this appeared;
2. evidence used;
3. data and privacy;
4. human and AI roles;
5. alternatives;
6. uncertainty;
7. rights and challenge;
8. technical and audit detail.

## 2.5 Segment completeness gate

A segment cannot become `PILOT_READY` when any mandatory explanation field is missing.

# PART III — VERSION 14 INNOVATION PORTFOLIO

## 3.1 Best-of-five innovation branches

| Branch | Mechanism | Main benefit | Main risk | Decision |
|---|---|---|---|---|
| A — AI-personalized school | High personalization and tutoring | Fast individual support | Dependency, profiling, weak shared culture | Include only with independence and rights gates |
| B — Teacher-first learning spaces | Teacher-designed AI and evidence workflows | Immediate classroom fit | Can remain a tool layer | MVP foundation |
| C — Sovereign offline school cell | Local services, content, models, identity, sync | Resilience and privacy | Operational complexity | MVP infrastructure |
| D — Whole-school human ecosystem | Food, health, library, sport, campus, community, belonging | Benefits the whole person | Scope and governance burden | Phase by domain |
| E — Evidence-Carrying Human Development Commons | Integrates A-D with rights, evidence, participation, and benefit governance | Strongest durable benefit for all | Requires disciplined sequencing | **Selected synthesis** |

## 3.2 Selected innovation thesis

The most defensible innovation is not a single AI model.

It is the integrated mechanism by which:

- humans define purposes and rights;
- teachers design learning;
- learners receive private, reversible support;
- AI assistance fades when independence must be shown;
- whole-school services support health, access, belonging, and continuity;
- evidence follows important actions;
- people can understand and challenge decisions;
- open standards prevent lock-in;
- local school cells continue during failure;
- pilots publish benefits, harms, and uncertainty;
- scaling stops when one group is harmed.

## SF-BHL-001 — Shared Benefit and Harm Ledger

**Capability family:** Governance and Evaluation  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Shows who benefits, who carries cost or risk, and whether one group is being helped by harming another.

### Why it exists

ScholaForge measures many outcomes, but a complete system needs one cross-stakeholder ledger that prevents benefits for one group from becoming hidden burdens for learners, teachers, families, support staff, communities, or the environment.

### End-to-end human experience

Each pilot or release declares intended benefits, affected groups, possible harms, evidence sources, thresholds, owners, and rollback triggers. The ledger compares observed results with the declaration. A release pauses when a protected group crosses a harm threshold even when the headline metric improves.

### Technical explanation

Bounded context: Benefit Governance. Core objects: BenefitClaim, StakeholderGroup, BurdenTransfer, HarmThreshold, EquitySlice, EvidenceLink, Decision, Remedy, ReviewCycle. The ledger consumes aggregated outcome and incident evidence. It does not ingest raw personal records unless a lawful, minimized analysis requires them.

### Human authority and AI boundary

A multi-role review panel approves benefit claims, harm thresholds, and remedies. AI may summarize or detect patterns. It may not decide that a harm is acceptable.

### Safeguards and prohibited behavior

No single composite score. No monetization of dignity, rights, or safety. Small groups receive suppression and privacy protection. Conflicts and uncertainty stay visible.

### Acceptance tests

A simulated workload saving that increases teacher after-hours work must fail. A learning gain that excludes disabled learners must fail. A cost reduction that reduces meal safety must fail. Every failed gate must identify an owner and remedy.

### Success and harm measures

Benefit distribution, harm-threshold breaches, burden transfers, unresolved remedies, equity gaps, teacher workload, learner independence, accessibility parity, family comprehension, environmental impact.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-PCA-001 — Participatory Co-Design Assembly

**Capability family:** Rights and Product Governance  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Gives learners, teachers, families, disabled users, support staff, and community partners a real role in shaping the system.

### Why it exists

Child-centred and human-centred design require participation, not only consultation after decisions are made.

### End-to-end human experience

A proposed capability is explained in role-appropriate language. Participants review purpose, benefits, risks, data, controls, alternatives, and stop conditions. Their comments become tracked design decisions. A public response explains what changed, what did not, and why.

### Technical explanation

Bounded context: Participatory Governance. Objects: DesignProposal, ParticipantPanel, AccessibleBrief, Comment, DecisionResponse, MinorityPosition, Conflict, ConsentBoundary, ReviewReceipt. Integrates with the Improvement Portfolio and Evidence Spine.

### Human authority and AI boundary

The school or product owner remains accountable. The assembly has defined decision rights, escalation routes, and protected minority positions.

### Safeguards and prohibited behavior

Participation is accessible, age-appropriate, compensated where appropriate, and never used to infer political or psychological profiles. Refusal has no educational penalty.

### Acceptance tests

A learner panel can understand the proposal. A disabled-user panel can test the interaction. Minority objections remain visible. Every material proposal has a response receipt.

### Success and harm measures

Participation diversity, accessibility, response completeness, accepted changes, unresolved objections, participant comprehension, time to remedy.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-LIG-001 — Learning Independence and Cognitive Debt Gate

**Capability family:** Learning and AI Safety  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Checks that AI is helping a learner become more capable, not merely helping them finish work.

### Why it exists

Current research distinguishes better task performance from durable learning. ScholaForge needs a release gate for independent recall, retention, transfer, reasoning, and productive struggle.

### End-to-end human experience

A learning activity declares when AI is available, what help it may give, when assistance fades, and how independent capability will be checked. The learner practices with support, then completes delayed and novel-context checks. Repeated dependence triggers a different teaching route rather than punishment.

### Technical explanation

Bounded context: Cognitive Independence. Objects: AssistanceContract, Attempt, HintLevel, FadingPlan, IndependentCheck, RetentionCheck, TransferCheck, CognitiveDebtSignal, TeacherDecision. Integrates with Tutoring Integrity Mode, INSIGHT, and MySAGA.

### Human authority and AI boundary

Teachers set the pedagogical contract and interpret results. AI may choose the lowest permitted hint and propose fading. It cannot certify mastery.

### Safeguards and prohibited behavior

No shame, no permanent dependency label, no hidden attention tracking, no denial of accessibility support. Accessibility assistance is distinguished from cognitive substitution.

### Acceptance tests

A learner who succeeds only with AI cannot be marked independently secure. A delayed check must be possible offline. A transfer task must differ meaningfully from practice. Assistance history must be explainable.

### Success and harm measures

Independent success, retention, transfer, hint depth, answer leakage, teacher overrides, learner frustration, accessibility equivalence.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-OER-001 — Opportunity Equity Router

**Capability family:** Equity and Human Development  
**Implementation class:** `NEXT_RELEASE`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Finds fair routes to mentors, projects, equipment, clubs, trips, advanced work, and support without using deficit labels.

### Why it exists

Personalized tasks are not enough when access to valuable opportunities remains unequal.

### End-to-end human experience

The school declares available opportunities, prerequisites, capacity, accessibility, cost, transport, safeguarding, and selection rules. Learners can express interest or ask for alternatives. The router identifies access barriers and proposes support, reserved capacity, rotation, or additional provision. Humans approve consequential allocation.

### Technical explanation

Bounded context: Opportunity Access. Objects: Opportunity, EligibilityRule, LearnerInterest, Barrier, SupportPackage, AllocationProposal, HumanDecision, Appeal, EquityAudit. Uses minimized evidence and prohibits protected traits as negative opportunity filters.

### Human authority and AI boundary

Qualified staff own selection and support decisions. Learners can challenge missing or incorrect evidence.

### Safeguards and prohibited behavior

No destiny prediction, no permanent track, no secret ranking, no use of family income except to provide support, no commercial recruitment access.

### Acceptance tests

A learner can request an opportunity the system did not suggest. Accessibility and transport barriers generate support options. Allocation disparities are reviewed. Appeals propagate.

### Success and harm measures

Participation by group, unmet demand, barrier resolution, opportunity mobility, appeal outcomes, mentor quality, safeguarding incidents.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-HRP-001 — Human Relationship and Capacity Planner

**Capability family:** Teacher and School Capacity  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Protects the time and people needed for teaching, mentoring, care, safeguarding, and belonging.

### Why it exists

Technology can appear efficient while reducing human contact or shifting work onto teachers and support staff.

### End-to-end human experience

Every feature declares human tasks, decision load, training, support, relationship time, and escalation capacity. The planner simulates staffing and timetable impact before activation. It blocks rollout when required human capacity is missing.

### Technical explanation

Bounded context: Human Capacity. Objects: RoleDemand, DecisionQueue, RelationshipTime, TrainingRequirement, SupportCoverage, CapacityScenario, WorkloadRisk, Approval, Mitigation. Integrates with Daily Rhythm, Workload Guard, Teacher Academy, and School Digital Twin.

### Human authority and AI boundary

Leaders and staff representatives validate assumptions. AI may forecast queues or bottlenecks but may not evaluate employee worth.

### Safeguards and prohibited behavior

No productivity ranking, keystroke monitoring, emotion inference, or automated employment decision. Protected relationship time is a first-class constraint.

### Acceptance tests

A feature that saves planning time but creates excessive review work must show the net effect. Safeguarding and accessibility queues must have qualified coverage. Manual continuity must remain possible.

### Success and harm measures

Net workload, after-hours work, decision backlog, relationship time, staff confidence, support response time, turnover context, training completion.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-XPS-001 — Explainability Studio and Decision Story

**Capability family:** Explainability and Trust  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Explains every important feature and decision in language suited to the person reading it.

### Why it exists

A system is not truly explainable when only engineers can understand it or when a friendly summary hides technical limits.

### End-to-end human experience

For each segment or consequential action, the studio generates four linked views: learner/family, professional, technical, and audit. Users can move from the short explanation to evidence, data, rules, uncertainty, human authority, challenge, and rollback.

### Technical explanation

Bounded context: Explanation. Objects: SegmentCard, DecisionStory, AudienceProfile, EvidenceLink, PolicyTrace, DataTrace, ModelTrace, HumanAction, Uncertainty, ChallengeRoute, Version. Explanations are generated from signed structured facts, not free-form model memory.

### Human authority and AI boundary

Domain owners approve canonical explanations. Affected people can flag unclear or incorrect explanations.

### Safeguards and prohibited behavior

No fabricated rationale, no post-hoc justification, no hidden contradictory evidence, no exposure of another person’s data, and no simplification that changes legal or educational meaning.

### Acceptance tests

Every active feature has four views. Every consequential decision links to evidence and policy. Plain-language comprehension is user-tested. Technical and audit views reconcile to the same identifiers.

### Success and harm measures

Comprehension, correction rate, missing evidence, challenge success, explanation latency, cross-view consistency, user trust.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-RRN-001 — Rights, Redress, and Remedy Navigator

**Capability family:** Rights Operations  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Gives people one clear place to ask questions, correct data, appeal decisions, report harm, and receive a remedy.

### Why it exists

Rights are ineffective when they are scattered across privacy, assessment, safeguarding, accessibility, and technical support workflows.

### End-to-end human experience

A person chooses the issue in plain language. The navigator identifies the responsible authority, required evidence, urgency, service level, interim protection, and appeal route. It tracks decisions and confirms downstream corrections or remedies.

### Technical explanation

Bounded context: Rights Operations. Objects: RightsRequest, IssueClass, Authority, InterimMeasure, EvidenceBundle, Decision, Remedy, Appeal, PropagationReceipt, ServiceLevel. It orchestrates but does not replace legal, safeguarding, or professional judgment.

### Human authority and AI boundary

Named accountable officers decide requests. AI may classify and summarize, with confidence and human review.

### Safeguards and prohibited behavior

No retaliation, no dark patterns, no forced legal language, no automatic rejection, no exposure of sensitive complaints to unauthorized roles.

### Acceptance tests

A corrected assessment propagates to MySAGA and credentials. A deleted optional memory disappears from eligible stores. An urgent safety report bypasses ordinary queues. The user receives an understandable decision.

### Success and harm measures

Time to acknowledgement, time to remedy, overdue cases, propagation failures, appeal outcomes, accessibility, comprehension, repeat harm.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-CCC-001 — Community Contribution Commons

**Capability family:** Projects and Community  
**Implementation class:** `ADVANCED`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Connects learner work to real community needs while protecting safety, fairness, learning, and creator rights.

### Why it exists

Authentic contribution can make learning meaningful, but unmanaged partnerships can exploit learners or extract data and intellectual property.

### End-to-end human experience

A verified organization proposes a need. The school reviews educational purpose, safeguarding, workload, accessibility, data, IP, publication, and benefit sharing. Learners choose or decline. Work is supervised, evidenced, credited, and evaluated for community value and learner growth.

### Technical explanation

Bounded context: Community Contribution. Objects: Challenge, Partner, DueDiligence, LearningContract, SafeguardingPlan, DataBoundary, IPAgreement, ContributionEvidence, CommunityOutcome, ClosureReview.

### Human authority and AI boundary

Teachers, safeguarding staff, learners, and partners share defined decisions. No partner controls grading or pathway access.

### Safeguards and prohibited behavior

No unpaid substitution for staff, no covert recruitment, no commercialization without agreement, no public exposure by default, no penalty for declining.

### Acceptance tests

Partner identity and insurance are verified where required. IP and data terms are understandable. Accessible alternatives exist. The community confirms delivery and learners retain evidence.

### Success and harm measures

Learning transfer, community value, learner choice, partner quality, equity of access, incidents, creator-rights disputes.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-RSK-001 — Resilient School Cell Kit

**Capability family:** Sovereign Infrastructure  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Packages the minimum hardware, software, paper, people, and procedures needed to keep a school running through outages or emergencies.

### Why it exists

Offline capability is strongest when technical continuity, human procedures, power, content, identity, communications, and recovery are designed together.

### End-to-end human experience

A school selects its risk profile and receives a tested continuity package: local identity, curriculum, learning spaces, evidence, print packs, power assumptions, backup, recovery, update media, contact trees, and drills. The kit records what works at each degradation level.

### Technical explanation

Bounded context: Continuity. Objects: SchoolCellProfile, ServiceTier, HardwareBill, OfflinePack, TrustBundle, PowerBudget, RecoveryPlan, Drill, Defect, ReadinessReceipt. Integrates with Offline Neural Mesh and Campus Steward.

### Human authority and AI boundary

School leaders, IT, teachers, facilities, safeguarding, and accessibility roles approve the plan and rehearse it.

### Safeguards and prohibited behavior

No false 30-day claim without a tested local profile. No dependence on a single vendor, key holder, device type, or cloud service.

### Acceptance tests

Internet, cloud, identity provider, model, power, and device-loss scenarios. Restore from verified backup. Paper bridge and accessible alternatives. Signed update rollback.

### Success and harm measures

Continuity hours, drill success, recovery time, stale-policy exposure, data loss, accessibility coverage, spare capacity, energy use.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-UAS-001 — Universal Access Simulation Lab

**Capability family:** Accessibility and Inclusion  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Tests a feature with different abilities, languages, devices, bandwidth, and offline conditions before people are blocked.

### Why it exists

Compliance scans alone do not reveal whether a real learner can complete an educational task.

### End-to-end human experience

A feature is exercised through assistive technologies, keyboard and switch use, magnification, captions, plain language, multiple languages, low-end devices, slow networks, offline packs, print, and alternative evidence modes. Disabled learners and staff participate in validation.

### Technical explanation

Bounded context: Inclusive Quality. Objects: AccessScenario, DeviceProfile, AssistiveTechnology, Task, Finding, Severity, Remediation, HumanTest, Exception, ReleaseReceipt. Integrates with Accessibility Remediation Console and CI.

### Human authority and AI boundary

Accessibility specialists and affected users validate outcomes. Automated tools find issues but cannot certify usability.

### Safeguards and prohibited behavior

No collection of unnecessary diagnoses. No simulated persona replaces real user testing. Exceptions require owner, reason, alternative, and expiry.

### Acceptance tests

Complete critical tasks across representative profiles. Verify accessible authentication, errors, timeouts, offline and print. Confirm equal competency standards with alternative access routes.

### Success and harm measures

Task success, blocking defects, remediation time, exception age, parity, user-reported barriers, offline accessibility.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-ECL-001 — Educator AI Calibration Lab

**Capability family:** Teacher Professional System  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Lets teachers rehearse AI-supported teaching, test its limits, and decide when it should stay silent.

### Why it exists

Teacher training must include practical calibration, not only generic AI literacy.

### End-to-end human experience

Teachers use synthetic classes and OMEGA simulations to practice lesson planning, tutoring policies, intervention queues, assessment review, model failure, bias, prompt injection, privacy, and manual fallback. They compare AI proposals with professional decisions and record local rules.

### Technical explanation

Bounded context: Professional Simulation. Objects: Scenario, SyntheticClass, ModelConfiguration, TeacherDecision, Divergence, Debrief, CapabilityReadiness, Renewal. No real learner data is required.

### Human authority and AI boundary

Teachers own pedagogical calibration. Coaches support reflection. Results are not used for punitive employee ranking.

### Safeguards and prohibited behavior

Synthetic data, no hidden scoring, accessible training, protected time, role-specific renewal, and the right to refuse unsafe activation.

### Acceptance tests

Teacher can disable AI, detect unsupported claims, preserve learner rights, handle an outage, and explain the active policy.

### Success and harm measures

Readiness, confidence, error detection, override quality, support demand, workload, retention of training, classroom incidents.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-PER-001 — Public Evidence and Replication Commons

**Capability family:** Research and Validation  
**Implementation class:** `MVP_NOW`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Publishes what worked, what failed, and what remains uncertain so schools do not repeat the same mistakes.

### Why it exists

Innovation claims are unreliable when negative results, protocol changes, and context are hidden.

### End-to-end human experience

Approved pilots register questions, methods, outcomes, harms, equity measures, context, and stop rules. Results publish with data-protection controls, including negative or inconclusive findings. Other sites can replicate and compare.

### Technical explanation

Bounded context: Evidence Commons. Objects: Protocol, ContextProfile, OutcomeDefinition, HarmMetric, DatasetManifest, Analysis, Deviation, Result, Replication, EvidenceGrade, ScalingDecision.

### Human authority and AI boundary

Research, ethics, privacy, education, and stakeholder reviewers approve studies and interpretations.

### Safeguards and prohibited behavior

No covert experimentation, no penalty for non-participation, no publication of identifiable small groups, no causal claim beyond design strength.

### Acceptance tests

A result cannot appear without a protocol and provenance. Deviations are visible. Negative results remain searchable. Scaling requires local validation.

### Success and harm measures

Preregistration, replication, independent review, negative-result publication, harm detection, evidence-to-decision traceability.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


## SF-CHR-001 — Climate, Health, and Resource Co-Benefit Optimizer

**Capability family:** Whole-School Sustainability  
**Implementation class:** `NEXT_RELEASE`  
**Implementation proof:** `NOT_ESTABLISHED`

### Plain-language explanation

Improves energy, food, transport, buildings, and materials without sacrificing health, comfort, access, or learning.

### Why it exists

Schools need sustainability decisions that respect human conditions and do not optimize one resource in isolation.

### End-to-end human experience

The school defines constraints for indoor air, temperature, accessibility, food safety, learning time, transport, and cost. The optimizer compares scenarios, shows trade-offs, and routes decisions to qualified humans. Actual results recalibrate the model.

### Technical explanation

Bounded context: Sustainable Operations. Objects: ResourceFlow, HealthConstraint, AccessibilityConstraint, Scenario, Assumption, TradeOff, Approval, Outcome, Calibration. Integrates with Campus Steward, Nourish, WorldLab, MoveForge, and School Digital Twin.

### Human authority and AI boundary

Facilities, food, transport, health, accessibility, leadership, and community roles own decisions. AI only proposes scenarios.

### Safeguards and prohibited behavior

No comfort or meal-quality reduction disguised as sustainability. No individual movement surveillance. Environmental claims require measured evidence.

### Acceptance tests

Every scenario respects mandatory health and accessibility constraints. Assumptions and uncertainty are visible. Rollback exists for operational changes.

### Success and harm measures

Energy, emissions, waste, food quality, indoor conditions, travel equity, cost, downtime, learner and staff experience.

### Failure, degradation, and rollback

If required evidence, authority, safety, accessibility, privacy, or operational capacity is missing, the capability shall stop, narrow its scope, or return to the last validated manual or software workflow. It shall preserve lawful evidence, prevent partial high-impact writes, explain the reason, identify the owner, and create a rollback receipt.

### Explainability requirement

The feature shall publish a learner/family view, professional view, technical view, and audit view. All four views shall reference the same feature ID, version, evidence, policy, owner, challenge route, and implementation status.


# PART IV — UNIFIED ARCHITECTURE AND OPERATING MODEL

## 4.1 Reference architecture

```text
People and Community
  Learners · Teachers · Families · Support Staff · Leaders · Boards
  Librarians · Food Teams · Facilities · Mentors · Partners · Auditors
                              ↓
Role Workspaces and Explainability Studio
                              ↓
Human Development and Learning Services
  MySAGA · Mastery Routing · Learning Spaces · Tutoring · Activities
  INSIGHT · Projects · Credentials · Mentors · Opportunity Equity
                              ↓
Whole-School Services
  Attendance · Library · Food · Sport · WorldLab · Campus · Arts
  Clubs · Enterprise · Administration · Human Capacity · Rights
                              ↓
Knowledge and Evidence
  Curriculum Graph · Competency Graph · KOE · Source Registry
  Evidence Packets · Evidence Spine · Research Commons
                              ↓
Trust and Control
  Identity · Purpose Gateway · Guardian Policy · Consent · Safeguarding
  Model Operations · Access Simulation · Benefit/Harm Ledger · Audit
                              ↓
Sovereign Infrastructure
  School Cell · Offline Neural Mesh · Local Models · Signed Channels
  School Action Broker · Integrations · Backup · Recovery · Print
                              ↓
Regional/National Coordination
  Standards · Qualification Mapping · Aggregated Evidence · Revocation
  Public Reporting · Optional Federation · No universal learner database
```

## 4.2 Deterministic and probabilistic boundary

The deterministic control plane owns:

- identity;
- purpose;
- permissions;
- policy;
- consent;
- data minimization;
- workflow state;
- evidence receipts;
- human approvals;
- release gates;
- rollback;
- synchronization rules.

The probabilistic intelligence plane may:

- retrieve;
- summarize;
- translate;
- propose;
- adapt presentation;
- generate drafts;
- detect possible patterns;
- simulate alternatives.

It may not silently change permissions, apply consequential decisions, certify legal conformity, or overwrite authoritative evidence.

## 4.3 Canonical bounded contexts

1. Identity and Organization.
2. Rights, Consent, and Remedy.
3. Curriculum, Competency, and Knowledge.
4. Learning Experience and Tutoring.
5. Learner Evidence and MySAGA.
6. Assessment, Moderation, and Credentials.
7. Projects, Mentors, Apprenticeships, and Community.
8. Library and Research.
9. Food and Meal Safety.
10. Movement, Physical Education, and Sport.
11. WorldLab and External Learning.
12. Facilities, Environment, and Continuity.
13. Attendance, Belonging, and Support.
14. Arts, Clubs, Enterprise, and Student Democracy.
15. Teacher Practice and Human Capacity.
16. School Operations and Governance.
17. AI, Model, and Source Governance.
18. Benefit, Harm, Research, and Improvement.
19. Offline Infrastructure and Synchronization.
20. Interoperability, Procurement, and Portability.

## 4.4 Canonical release ladder

`CONCEPT → TARGET_SPECIFICATION → ARCHITECTURE_APPROVED → PROTOTYPE → PILOT_READY → PILOTED → VALIDATED → LIMITED_PRODUCTION → PRODUCTION_READY`

Any stage may move to:

`PAUSED → ROLLED_BACK → SUSPENDED → RETIRED`

No stage is inferred from document completeness.

# PART V — CURRENT RESEARCH, LAW, AND STANDARDS REGISTER

## 5.1 Research conclusions adopted

### Durable learning before output quality

The 2026 OECD Digital Education Outlook warns that general-purpose generative AI can improve immediate task performance without producing learning gains. Version 14 therefore requires independent, retention, and transfer checks.

### Teacher and learner co-creation

OECD, UNESCO, and European Commission guidance support purpose-built educational AI, human agency, teacher competence, learner competence, inclusion, and rigorous evaluation. ScholaForge treats teacher and learner co-design as infrastructure.

### Child-centred AI

UNICEF guidance requires systems to protect children, provide equitably for their needs and rights, and support participation. ScholaForge therefore adds the Participatory Co-Design Assembly and Benefit/Harm Ledger.

### Whole-school health

WHO 2026 guidance treats schools as platforms for equitable health, food safety, and healthy environments. Nourish, MoveForge, Campus Steward, and the whole-school scorecard remain core, not optional decoration.

### Libraries and information literacy

The IFLA–UNESCO School Library Manifesto 2025 strengthens the role of school libraries in literacy, critical thinking, creativity, and global citizenship. The Knowledge Commons remains a central domain.

### Work-based learning

Cedefop and the European quality framework support high-quality apprenticeships and smoother school-to-work transitions. ScholaForge requires safeguarding, quality assurance, learner choice, evidence, and withdrawal rights.

## 5.2 Source universe map

| Topic | Authority | Official source | Evidence state | Blueprint use |
|---|---|---|---|---|
| EU AI Act and high-risk guidance | European Commission | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai | CURRENT LAW / OFFICIAL GUIDANCE | Use-case register, provider/deployer analysis, human oversight, transparency, post-market evidence |
| Draft high-risk classification guidance | European Commission | https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems | DRAFT AS OF 2026-07-20 | Treat as interpretive draft; monitor final adoption; education high-risk timing noted by Commission |
| 2026 educator AI and data guidance | European Commission | https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/ethical-guidelines-for-educators-on-using-artificial-intelligence | OFFICIAL GUIDANCE | Teacher Academy, role readiness, ethical and pedagogical activation gates |
| 2026 digital education content guidance | European Commission | https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/digital-education-content-guidelines-and-framework | OFFICIAL GUIDANCE | Source quality, accessibility, curriculum fit, licensing, interoperability |
| Children and DPIA | European Data Protection Board | https://www.edpb.europa.eu/topics/key-gdpr-concepts/children_en | OFFICIAL GUIDANCE | Age-appropriate notices, specific protection, DPIA before likely high-risk processing |
| UNICEF Guidance on AI and Children 3.0 | UNICEF Innocenti | https://www.unicef.org/innocenti/media/11991/file/UNICEF-Innocenti-Guidance-on-AI-and-Children-3-2025.pdf | OFFICIAL CHILD-RIGHTS GUIDANCE | Protect, provide equitably, support participation; child-rights impact assessment |
| OECD Digital Education Outlook 2026 | OECD | https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html | OFFICIAL EVIDENCE SYNTHESIS | Purpose-built pedagogy, independence and transfer checks, teacher co-creation, rigorous trials |
| AI competency frameworks | UNESCO | https://unesdoc.unesco.org/ark:/48223/pf0000391104 | OFFICIAL FRAMEWORK | Teacher and learner AI competency pathways grounded in human agency and inclusion |
| School Library Manifesto 2025 | UNESCO / IFLA | https://www.unesco.org/en/articles/13th-ifap-council-strengthens-strategic-actions-and-adopts-school-library-manifesto | OFFICIAL MANIFESTO | Knowledge Commons, media and information literacy, inclusive access |
| Healthy school food environments 2026 | WHO | https://www.who.int/publications/i/item/9789240118324 | OFFICIAL GUIDELINE | Nourish food safety, healthy provision, standards and non-stigmatizing access |
| Health-promoting school implementation 2026 | WHO | https://www.who.int/publications/i/item/9789240118966 | OFFICIAL GUIDANCE | Whole-school health, equitable access, leadership, workforce and quality |
| Quality apprenticeships | Cedefop / EU framework | https://www.cedefop.europa.eu/en/themes/apprenticeships | OFFICIAL EU AGENCY EVIDENCE | Safeguarded work-based learning, quality assurance, mobility and transitions |
| WCAG 2.2 | W3C | https://www.w3.org/TR/WCAG22/ | W3C RECOMMENDATION | Product accessibility target; combine automation with manual and user testing |
| EN 301 549 | ETSI | https://labs.etsi.org/rep/HF/en301549/-/wikis/home | PUBLISHED BASELINE + EVOLVING DRAFTS | Procurement profile; pin published version and monitor revision |
| OneRoster 1.2 | 1EdTech | https://www.1edtech.org/standards/oneroster | FINAL STANDARD | Roster, resources and gradebook exchange |
| LTI 1.3 / LTI Advantage | 1EdTech | https://www.1edtech.org/standards/lti | FINAL STANDARD | Secure tool launch and service integration |
| QTI 3 | 1EdTech | https://www.1edtech.org/standards/qti/index | FINAL STANDARD FAMILY | Assessment item, test and results portability with accessibility support |
| CASE 1.1 | 1EdTech | https://www.1edtech.org/standards/case | FINAL STANDARD | Curriculum and competency identifiers and exchange |
| Open Badges 3.0 and CLR 2.0 | 1EdTech | https://www.1edtech.org/standards/open-badges | FINAL STANDARDS | Learner-controlled, verifiable achievements and lifelong records |
| AI RMF and GenAI profile | NIST | https://www.nist.gov/itl/ai-risk-management-framework | VOLUNTARY FRAMEWORK | Govern, map, measure and manage AI risks; not legal certification |

## 5.3 Currentness controls

- The legal and standards register is checked before procurement, pilot, release, and material change.
- Drafts are never treated as final.
- Standards versions are pinned.
- Conformance is tested, not claimed by name.
- Legal review remains `HUMAN_REVIEW_REQUIRED`.
- Research findings are not generalized beyond their context and design strength.

# PART VI — DELIVERY PROGRAM

## 6.1 Product slices

### Slice 0 — Reality and protection baseline

Inventory existing systems, contracts, data, roles, curriculum, devices, accessibility, connectivity, safeguarding, costs, and legal responsibilities.

### Slice 1 — Sovereign foundation

Identity, policy, rights, audit, curriculum graph, content channels, offline school cell, backup, recovery, and print bridge.

### Slice 2 — Teacher-first value

Teacher Workspace, Lesson Studio, ActivityForge, Evidence-Linked Learning Spaces, Accessibility Remediation, Source Quality, and Teacher Academy.

### Slice 3 — Learning independence and evidence

Tutoring Integrity, Cognitive Independence, learner tasks, Evidence Spine, INSIGHT shadow mode, AI Contribution Studio, and rights navigator.

### Slice 4 — Learner intelligence in shadow mode

MySAGA, Private Mastery Routing, correction, expiry, explanation, benefit/harm review, and no autonomous progression.

### Slice 5 — Whole-school services

Library, food, movement, WorldLab, campus, attendance, arts, clubs, enterprise, family rights, and human-capacity planning.

### Slice 6 — Pathways and contribution

Mentors, apprenticeships, Opportunity Equity Router, Community Contribution Commons, Innovation Passport, and portable credentials.

### Slice 7 — Advanced and research-gated capabilities

MotionClass, No-ID Motion, School Digital Twin, School Action Broker, collective intelligence, advanced OMEGA bridges, and SecureBoard Guardian.

## 6.2 Work-package grammar

Every work package must define:

```text
PART
TASK
STEPS
MUST-BE-TRUE
OWNER
DEPENDENCIES
DATA
SECURITY
PRIVACY
ACCESSIBILITY
OFFLINE
TESTS
EVIDENCE RECEIPTS
FAILURE MATRIX
ROLLBACK
STATUS
```

## 6.3 Initial work packages

| WP | Deliverable | MUST-BE-TRUE before closure |
|---|---|---|
| WP-00 | Repository and operational reality audit | Stack, owners, data, tests, environments, integrations, and unknowns are evidenced |
| WP-01 | Identity, purpose, rights, and policy foundation | No cross-tenant access; rights routes and audit receipts work |
| WP-02 | Curriculum, content, and knowledge foundation | Source authority, license, version, permission, and CASE mapping are testable |
| WP-03 | Teacher learning-space thin slice | Teacher can plan, publish, pause, run offline, and roll back |
| WP-04 | Accessibility and universal access | Critical tasks pass automated, manual, assistive-technology, low-end, offline, and user tests |
| WP-05 | Learning independence and evidence | AI-supported success is separate from independent, retention, and transfer evidence |
| WP-06 | MySAGA shadow mode | Correction, expiry, selective forgetting, export, and prohibition rules pass |
| WP-07 | Whole-school service pilots | Each domain has qualified owner, safety case, manual continuity, and separate data boundary |
| WP-08 | Interoperability and exit | OneRoster, LTI, QTI, CASE, credentials, deletion, and complete export pass conformance tests |
| WP-09 | Model and supply-chain operations | Inventory, SBOM, evaluation, incident, kill switch, and rollback work |
| WP-10 | Benefit, harm, and participatory governance | Stakeholder panel, thresholds, remedies, and burden-transfer tests work |
| WP-11 | Research and scaling | Protocol, harm metrics, independent review, negative results, and scale decision are recorded |

## 6.4 Seven-day validation sprint

### Day 1 — Identity and source lock

Verify project identity, source hashes, feature registry, conflicts, legal currentness, standards versions, and excluded legacy claims.

### Day 2 — Repository and architecture proof

Map real services, packages, data stores, environments, tests, deployment targets, and unknowns. No fake implementation state.

### Day 3 — Teacher and learner thin slice

Run one objective through planning, accessible content, learning space, tutoring, evidence, teacher review, explanation, and challenge.

### Day 4 — Offline and interoperability

Disconnect external services. Run a school-day slice. Export and re-import roster, curriculum, assessment, evidence, and credentials.

### Day 5 — Safety, accessibility, and AI failure

Test prompt injection, data leakage, unauthorized action, bias, model outage, low-end device, assistive technology, and manual fallback.

### Day 6 — Benefit and human-capacity rehearsal

Run the Benefit/Harm Ledger, participatory review, teacher workload model, learner independence checks, and remedy workflow.

### Day 7 — GAD-1 release diagnostic

Produce PASS, FAIL, BLOCKER, UNKNOWN, and HUMAN_REVIEW_REQUIRED findings with owners, evidence, rollback, and next decision.

## 6.5 Hard release gates

A release fails when:

- implementation status is unsupported;
- an affected person cannot understand the capability;
- independent learning is not measured where relevant;
- accessibility has a blocking defect without an equivalent route;
- human capacity is insufficient;
- a protected group crosses a harm threshold;
- a consequential action lacks human authority;
- a rights or remedy path is missing;
- offline/manual continuity is required but absent;
- data use is unnecessary or unauthorized;
- standards conformance or exit export fails;
- rollback is not demonstrated;
- legal or professional review is missing.

# PART VII — VERSION 14 SOURCE, CHANGE, AND ASSURANCE RECORD

## 7.1 Source merge receipts

| File | SHA-256 | Role |
|---|---|---|
| `SCHOLAFORGE_COMPLETE_BLUEPRINT_v13.0.md` | `b829df837448e300edede1a86519125ce3e6fda63825257f816047ef7f4f0c0b` | Complete whole-school canonical body |
| `SCHOLAFORGE_DEEP_WEB_EVIDENCE_BACKED_MASTER_BLUEPRINT_v13.0.md` | `cab36b30e79553e2855cd8ab21dc592a05162e5bb33e4a09fd24760fabbd3842` | Evidence-backed product, architecture, and delivery delta |

## 7.2 CHANGE_MANIFEST_JSON

```json
{
  "project": "SCHOLAFORGE",
  "version": "14.0",
  "date": "2026-07-20",
  "mode": "PRESERVE_MERGE_EXPAND_EXPLAIN_VALIDATE",
  "source_hashes": {
    "SCHOLAFORGE_COMPLETE_BLUEPRINT_v13.0.md": "b829df837448e300edede1a86519125ce3e6fda63825257f816047ef7f4f0c0b",
    "SCHOLAFORGE_DEEP_WEB_EVIDENCE_BACKED_MASTER_BLUEPRINT_v13.0.md": "cab36b30e79553e2855cd8ab21dc592a05162e5bb33e4a09fd24760fabbd3842"
  },
  "preserved_capability_count_minimum": 108,
  "new_v14_feature_count": 13,
  "new_v14_feature_ids": [
    "SF-BHL-001",
    "SF-PCA-001",
    "SF-LIG-001",
    "SF-OER-001",
    "SF-HRP-001",
    "SF-XPS-001",
    "SF-RRN-001",
    "SF-CCC-001",
    "SF-RSK-001",
    "SF-UAS-001",
    "SF-ECL-001",
    "SF-PER-001",
    "SF-CHR-001"
  ],
  "major_changes": [
    "unified two parallel version 13 blueprints under one precedence model",
    "added Benefit for All framework and non-transfer principle",
    "added four-lens universal explainability standard",
    "added learning independence and cognitive debt gate",
    "added participatory co-design and opportunity equity",
    "added human relationship and capacity planning",
    "added unified rights, redress, and remedy navigator",
    "added public evidence and replication commons",
    "updated official research, law, standards, food, health, library, apprenticeship, accessibility, and interoperability register",
    "preserved complete version 13 whole-school body and evidence-backed delta"
  ],
  "implementation_claimed": false,
  "production_readiness_claimed": false,
  "legal_conformity_claimed": false,
  "human_review_required": true
}
```

## 7.3 AUDIT_REPORT_JSON

```json
{
  "identity_preserved": true,
  "source_files_read": true,
  "source_hashes_recorded": true,
  "feature_bearing_content_preserved": true,
  "parallel_v13_conflict_resolved": true,
  "explainability_contract_added": true,
  "benefit_harm_governance_added": true,
  "learning_independence_gate_added": true,
  "participatory_governance_added": true,
  "rights_remedy_unified": true,
  "current_official_sources_reviewed": true,
  "tests_run_on_document": [
    "required term coverage",
    "balanced code fences",
    "front matter presence",
    "JSON parse",
    "source inclusion",
    "feature ID uniqueness"
  ],
  "software_tests_run": false,
  "deployment_verified": false,
  "legal_review_completed": false,
  "residual_status": "TARGET_SPECIFICATION"
}
```

## 7.4 COMPLIANCE_CHECKLIST_JSON

```json
{
  "teacher_authority_preserved": true,
  "learner_rights_preserved": true,
  "child_participation_specified": true,
  "no_autonomous_final_grading": true,
  "no_autonomous_discipline": true,
  "no_emotion_recognition": true,
  "no_biometric_attention_scoring": true,
  "no_permanent_destiny_profile": true,
  "purpose_limitation_specified": true,
  "data_minimization_specified": true,
  "dpia_trigger_specified": true,
  "child_rights_impact_review_specified": true,
  "accessibility_and_user_testing_specified": true,
  "offline_and_manual_continuity_specified": true,
  "open_standards_and_exit_specified": true,
  "learning_independence_specified": true,
  "benefit_harm_thresholds_specified": true,
  "human_capacity_gate_specified": true,
  "rights_redress_remedy_specified": true,
  "rollback_specified": true,
  "production_claim_made": false,
  "legal_certification_claim_made": false,
  "human_review_required": true
}
```

## 7.5 Final version 14 implementation directive

Implement the smallest coherent school slice first.

Do not begin by building every advanced invention.

Start with:

1. identity, rights, policy, and offline continuity;
2. curriculum and trusted content;
3. teacher planning and accessible learning spaces;
4. learner practice with independence checks;
5. evidence and human review;
6. explanation, challenge, and remedy;
7. benefit and harm measurement;
8. tested rollback.

A capability advances only when its real users can understand it, its owners can operate it, its evidence supports its claim, its risks are bounded, and the school can continue safely when it fails.

# PART VIII — PRESERVED VERSION 13 EVIDENCE-BACKED DELTA

> This section is preserved from the evidence-backed version 13 source. Version 14 rules supersede conflicts while retaining all unique feature specifications, architecture deltas, delivery packages, and audit content.

# PART 0 — DEEP-WEB EVALUATION AND EVIDENCE-BACKED EXPANSION

## 0. Version 13 authority and proof boundary

This version is the evidence-backed expansion of the complete version 12 blueprint.

It preserves the canonical name **SCHOLAFORGE** and the original identity **19. ScholaForge Belgium - Eu regulations**.

It preserves every feature-bearing section in version 12.

It also merges the unique competitive-gap requirements from the two uploaded text files.

This layer supersedes earlier unsupported percentage rankings and stale currentness statements.

It does not prove implementation.

It does not prove legal conformity.

It does not prove educational effectiveness.

It does not prove production readiness.

Required status:

`MASTER_TARGET_BLUEPRINT — TARGET_SPECIFICATION — IMPLEMENTATION_NOT_PROVEN`

### 0.1 Source merge receipts

| Input file | SHA-256 | Role in version 13 |
|---|---|---|
| SCHOLAFORGE_COMPLETE_MERGED_BLUEPRINT_v12.0.md | dc8b9f28362ea7330a5df8308133faa21705ea0b66746d13904eac3f1309c87b | Canonical full version 12 body and feature set |
| SCHOLAFORGE_COMPLETE_BLUEPRINT_v11.0.md | d1f8fd977fee160941ca708a5099df8c19662afd343e3f4964ffe682e5f3ff7f | Build-ready architecture, governance, delivery, and validation baseline |
| New Text Document.txt | 83ddddca593df9d34ca9015622721f7fe4ff756e0ec87a226f651d80648a210b | Signature inventions and deep technical feature detail |
| New Text Document (2).txt | d079220fdf0a99645a4633ebdc86c4e02e70b39bfb68486fb218cba3a0cbe504 | Competitive evaluation and gap-expansion donor |

### 0.2 Merge and conflict rule

1. Platform safety and applicable law win.
2. The explicit version 13 rule wins over earlier blueprint wording.
3. The stricter child-rights, privacy, accessibility, safeguarding, and human-oversight rule wins.
4. Version 12 remains the preserved canonical feature body.
5. The competitive-gap document is a donor for additions, not an authority for unsupported market scores.
6. Public competitor pages prove capability presence only.
7. Vendor outcome claims remain `VENDOR_REPORTED` until independently validated.
8. Draft guidance remains `DRAFT`.
9. Unresolved legal or identity conflicts require `DECISION_LOCK`.
10. No feature is operational without current runtime evidence.

## 1. Deep evaluation

### 1.1 Overall judgment

ScholaForge is already broader than a conventional LMS, tutor, adaptive-learning product, school dashboard, or AI-native school model.

Its strongest assets are:

- a complete human-development philosophy;
- learner rights and correction;
- teacher authority;
- private, evidence-bound personalization;
- knowledge orchestration;
- authentic assessment;
- projects, mentorship, and expertise pathways;
- offline school continuity;
- policy-as-code;
- Evidence Spine;
- open interoperability;
- rollback and transition architecture;
- explainable plain-language and technical views.

Its principal weakness is no longer feature breadth.

Its principal weakness is conversion from a very large blueprint into:

- a simpler product model;
- repository-ready bounded contexts;
- deployable work packages;
- measurable product slices;
- teacher adoption;
- standards conformance;
- operational evidence;
- independent educational validation.

### 1.2 Evidence discipline

Earlier documents used percentage rankings such as “96%” or “98%.”

Those numbers are removed as decision evidence.

No common, independently verified scoring instrument was supplied.

Architecture completeness, product maturity, deployment scale, and learning effectiveness are different dimensions.

Version 13 uses these states instead:

- `VERIFIED_PUBLIC_CAPABILITY`;
- `VENDOR_REPORTED_OUTCOME`;
- `INDEPENDENT_EVIDENCE`;
- `NOT_PUBLICLY_EVIDENCED`;
- `TARGET_SPECIFICATION`;
- `IMPLEMENTATION_NOT_EVALUATED`.

### 1.3 Public-market evidence matrix

| Public system | Verified public capability | Evidence caution | ScholaForge response |
|---|---|---|---|
| Alpha School | Two-hour adaptive mastery block; life-skills workshops; authentic live demonstrations | Official product pages confirm the model. Outcome claims are primarily vendor-reported. | Keep flexible foundation blocks; add Authentic Demonstration Gateway; do not copy a fixed two-hour promise. |
| SchoolAI | Teacher-designed AI Spaces; real-time classroom visibility; district controls; personal AI tutoring | Official product/help pages confirm capabilities. Research claims require protocol-level review. | Add Evidence-Linked Learning Spaces and a privacy-preserving Teacher Intervention Queue. |
| CENTURY | Adaptive pathways; micro-lessons; gap identification; teacher and guardian dashboards | Official pages confirm scope. Impact evidence varies by study and context. | Add Foundational Skill Accelerators and explicit mastery/evidence gates. |
| Khanmigo | Student tutor; teacher tools; adjustable student settings; chat-history visibility; disable/focus controls | Official Khan Academy pages confirm tools and controls. | Add Tutoring Integrity Mode, teacher-configurable policies, and session-level transparency. |
| Canvas | Course delivery; analytics; APIs; AI agents; accessibility checking and remediation | Official product/developer pages confirm capabilities. | Add Accessibility Remediation Console and a least-privilege School Action Broker. |
| Google Classroom | Classroom hub; AI teacher tools; practice sets; originality reports; administration | Official Google pages confirm capability presence. | Add AI Contribution and Integrity Studio and standards-based practice-set import/export. |
| Microsoft Learning Accelerators | Reading, numeracy, speaking, search and information-literacy coaching | Official Microsoft pages confirm focused skill accelerators. | Add a modular Foundational Skill Accelerator family with evidence and accessibility contracts. |
| Kolibri | Offline-first learning platform and distributable content channels | Official Learning Equality pages confirm offline-first architecture and channel distribution. | Add Offline Content Channel Studio and peer-assisted signed distribution. |

### 1.4 Material gap register

| Area | Finding | Version 13 action | Priority |
|---|---|---|---|
| Document architecture | Version 12 is comprehensive but repeats content across multiple parts. | Add a version 13 precedence layer, feature registry, source map, and implementation delta without deleting the preserved body. | HIGH |
| Competitive scoring | Earlier percentage rankings are not evidence-based and mix architecture with deployment maturity. | Replace percentages with source-specific evidence grades and separate capability presence, implementation, and efficacy. | HIGH |
| Classroom product loop | Strong modules exist, but no single canonical teacher-designed AI learning-space object joins planning, live delivery, evidence, and intervention. | Add Evidence-Linked Learning Spaces and Teacher Intervention Queue. | HIGH |
| Focused skill products | Broad learning architecture is stronger than focused reading, math, speaking, and search practice products. | Add modular Foundational Skill Accelerators. | HIGH |
| Authentic proof | Projects and exhibitions exist, but a standard demonstration-to-competency gate is incomplete. | Add Authentic Demonstration Gateway. | HIGH |
| AI authorship and integrity | AI contribution disclosure exists, but no complete due-process and reasoning-verification studio exists. | Add AI Contribution and Integrity Studio. | HIGH |
| Accessibility operations | Standards and tests exist, but teacher-facing remediation is incomplete. | Add Accessibility Remediation Console. | HIGH |
| Offline content operations | Offline cells exist, but content-channel authoring and field distribution need a mature product workflow. | Add Offline Content Channel Studio and peer-assisted signed sync. | HIGH |
| Procurement and conformance | Standards are named, but procurement must require tested, current conformance and exit rights. | Add Procurement and Conformance Gate. | HIGH |
| Agentic administration | No general-purpose AI agent should write directly to school systems. | Add a least-privilege School Action Broker with dry runs and approvals. | HIGH |
| Content quality | Source registry exists, but 2026 EU digital-content guidance needs an explicit selection and approval process. | Add Digital Content Quality and Curriculum Assurance. | HIGH |
| Model operations | Model registry exists, but ongoing evaluation, drift, incidents, and retirement require one operational service. | Add Model Operations and Post-Market Monitor. | HIGH |
| Teacher change management | Professional pathways exist, but feature-specific readiness, rehearsal, and renewal need hard release gates. | Add Teacher Adoption and Capability Academy. | HIGH |
| Economic deployment | Economic sections need reproducible scenarios, assumptions, and exit costs. | Add Total Cost and Deployment Planner. | MEDIUM |
| Outcome proof | Research is described, but preregistration, protocol deviations, negative results, and scale decisions need one registry. | Add Research and Outcome Registry. | HIGH |
| Lifelong continuity | Portability exists, but alumni and re-entry workflows need a canonical service. | Add Alumni and Lifelong Learning Mode. | MEDIUM |

## 2. Best-of-five expansion branches

ScholaForge must not stop at one acceptable architecture.

Five mechanism-divergent branches were evaluated.

| Branch | Mechanism | Strength | Primary risk | Recommended class |
|---|---|---|---|---|
| A — Teacher-First Evidence Spaces | Teacher-designed adaptive learning spaces, intervention queue, activity and lesson lifecycle | Fastest classroom value; low migration risk | Can remain a feature layer without deeper school transformation | MVP_NOW |
| B — Learner-Sovereign Intelligence | MySAGA, mastery routing, rights, portability, lifelong record | Strong differentiation and learner continuity | Sensitive data and profiling risk; requires careful evidence | NEXT_RELEASE |
| C — Proof-Carrying Education | Evidence Spine, INSIGHT, authentic demonstration, credentials, audit and appeal | Strong trust, qualification, and governance position | Higher implementation and moderation cost | MVP_NOW |
| D — Offline Federated School Cell | Local identity, content, models, policy, sync, print and peer relay | Sovereignty, resilience, and global relevance | Complex sync, operations, and update security | MVP_NOW |
| E — Networked Expertise Ecosystem | Mentors, apprenticeships, community challenges, innovation marketplace, world knowledge network | Deep human-development and real-world contribution | Safeguarding, logistics, partner quality, and legal complexity | ADVANCED |

### 2.1 Selected synthesis

The selected version 13 synthesis is:

> **Evidence-Carrying Adaptive School Cell**

It combines:

1. teacher-designed Evidence-Linked Learning Spaces;
2. learner-sovereign MySAGA and Private Mastery Routing;
3. Evidence Spine, INSIGHT, authentic demonstration, and portable credentials;
4. offline federated school cells with signed content channels;
5. safeguarded mentor, community, apprenticeship, and expert pathways.

The selected synthesis does not require every advanced feature in the first release.

The first release proves low-risk teacher support, accessible learning spaces, focused skill practice, evidence, offline continuity, and standards-based exchange.

## 3. Current legal, policy, standards, and evidence update

| Topic | Verified status at 20 July 2026 | Blueprint consequence |
|---|---|---|
| EU AI Act | In force. Education uses can be high-risk depending on intended purpose. Draft classification guidance published 19 May 2026; consultation closes 23 July 2026. | Classify each capability by intended purpose. Maintain provider/deployer analysis. No automatic platform-wide compliance claim. |
| AI-generated content transparency | Article 50 transparency obligations become applicable from 2 August 2026; Commission code work was still evolving during 2026. | Maintain AI contribution disclosure, provenance, labeling policy, and legal review. |
| Educator AI/data guidance | The Commission released updated educator guidance in March 2026. | Teacher Academy and release checklists must use the updated guidance. |
| Digital content quality | The Commission released 2026 guidance for informed selection of digital education content. | Digital Content Quality and Curriculum Assurance becomes a core gate. |
| Children and GDPR | Children receive specific protection; high-risk processing requires DPIA before processing. | Age-appropriate notices, data minimization, rights operations, and DPIA triggers are mandatory. |
| Accessibility | WCAG 2.2 is current and is ISO/IEC 40500:2025. EN 301 549 V3.2.1 remains the published/harmonised baseline at this review; monitor newer drafts. | Target WCAG 2.2 AA; procure and test against applicable EN 301 549; do not treat automated scans as conformance proof. |
| Interoperability | OneRoster 1.2, LTI 1.3/LTI Advantage, QTI 3, CASE, Open Badges 3.0, and CLR 2.0 are the selected profiles. | Require current conformance evidence, version pinning, validators, migration tests, and exit exports. |
| AI risk management | NIST AI RMF and GenAI profile remain useful voluntary frameworks; NIST notes AI RMF evolution. | Map governance/evaluation to current framework outcomes without presenting voluntary guidance as legal certification. |

### 3.1 Immediate version 13 policy changes

- Add an `AI_USE_CASE_REGISTER` rather than classifying the whole platform as one AI system.
- Separate provider, deployer, importer, distributor, school-controller, and processor responsibilities.
- Prohibit emotion recognition and biometric attention scoring in educational use.
- Require age-appropriate notices and child-rights review.
- Add a fundamental-rights impact assessment trigger where legally required.
- Add Article 50 AI contribution and generated-content transparency preparation.
- Add the 2026 educator AI/data guidance to teacher training.
- Add the 2026 digital-content quality guidance to source approval.
- Require QTI 3 rather than unspecified QTI for new assessment exchange.
- Require LTI 1.3/LTI Advantage for new tool integrations.
- Require current OneRoster 1.2 profiles.
- Treat WCAG 2.2 AA as the product target and applicable EN 301 549 as a procurement/legal profile.
- Monitor the emerging EN 301 549 revision without treating a draft as the active harmonised standard.

## 4. Canonical version 13 feature additions

The following feature cards are additive.

They do not replace existing ScholaForge capabilities.

## SF-ELS-001 — Evidence-Linked Learning Spaces

**Capability family:** Teaching and Classroom Intelligence  
**Implementation status:** `TARGET_SPECIFICATION`  
**Plain-language explanation:** A teacher creates one safe learning space. Each learner receives suitable support, challenge, language, and accessibility without the teacher building dozens of separate lessons.

### Why this capability exists

Current competitors demonstrate strong teacher-designed AI spaces. ScholaForge already has ActivityForge, TwinTeach Live, and Quest Engine, but it needs one canonical object that joins the lesson goal, permitted AI behavior, evidence, learner rights, and live teacher control.

### End-to-end human workflow

Teacher selects an objective, approved sources, age range, assessment boundaries, and accessibility profile. The space compiles a retrieval contract, tutoring policy, task variants, moderation rules, offline fallback, and evidence plan. Learners enter through pseudonymous session identities. The teacher sees help requests, stalled reasoning, policy denials, and evidence gaps—not hidden emotion scores. The teacher may pause, edit, fork, or close the space.

### Data boundary and prohibited data

Uses objective, curriculum links, approved content, learner task-need capsule, accessibility settings, session evidence, and teacher decisions. Prohibits private reflections, unrelated family data, hidden biometric signals, and cross-purpose profiling.

### Technical identity, APIs, and events

Bounded context: Learning Experience. Core objects: LearningSpace, SpaceVersion, Session, TaskVariant, RetrievalContract, TutorPolicy, EvidencePlan, TeacherOverride. APIs: POST /v1/spaces; POST /v1/spaces/{id}/publish; POST /v1/spaces/{id}/sessions; POST /v1/spaces/{id}/pause. Events: space.published, session.started, support.requested, policy.denied, teacher.overrode, session.closed.

### Failure, safe degradation, and rollback

When AI, retrieval, or network fails, the space switches to an approved static activity pack. When evidence is insufficient, it asks for human help or a diagnostic activity. It never invents learner state.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

A teacher can create, preview, publish, pause, duplicate, and roll back a space. Two learners receive different support without seeing labels. Unauthorized data never enters the session. Offline fallback works for a full lesson. Every consequential recommendation has an evidence packet.

### Success and harm measures

Teacher preparation time; learner completion with understanding; teacher override usefulness; unsupported-output rate; privacy incidents; accessibility equivalence; offline success.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-TIQ-001 — Teacher Intervention Queue

**Capability family:** Teaching and Classroom Intelligence  
**Implementation status:** `TARGET_SPECIFICATION`  
**Plain-language explanation:** The teacher sees who needs human help now, why help may be needed, and what evidence supports the signal.

### Why this capability exists

Real-time visibility is a strong market capability, but ungoverned dashboards can become surveillance. ScholaForge needs a queue based on declared learning events, not inferred emotion or covert attention scoring.

### End-to-end human workflow

Learning spaces emit bounded events such as repeated misconception, explicit help request, inaccessible content, stalled task, policy denial, or safety concern. A rules engine assigns urgency and confidence. The teacher sees the reason, source, recommended next action, and dismissal option. Dismissal, intervention, and outcomes become evidence for improving the rule.

### Data boundary and prohibited data

Uses current-session educational events and explicit learner requests. Prohibits camera-based engagement, emotion recognition, keystroke surveillance, cross-class behavioral scoring, and teacher performance monitoring.

### Technical identity, APIs, and events

Bounded context: Intervention. Objects: InterventionSignal, QueueItem, EvidenceLink, TeacherAction, Resolution. APIs: GET /v1/interventions?class_id=; POST /v1/interventions/{id}/acknowledge; POST /v1/interventions/{id}/resolve. Events: intervention.created, acknowledged, escalated, resolved, rule.suspended.

### Failure, safe degradation, and rollback

If confidence is low, the item is labelled uncertain. If the queue is unavailable, learners retain direct help controls and the class continues. Repeated false positives suspend the rule.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Explicit learner requests appear first. Low-confidence signals are visibly marked. No prohibited sensor data is accepted. A dismissed signal does not penalize a learner. The queue remains usable with 40 concurrent learners and degraded connectivity.

### Success and harm measures

Time to human help; false-positive rate; learner-initiated requests resolved; teacher trust; queue overload; disparity by language, disability, and demographic group.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-FSA-001 — Foundational Skill Accelerators

**Capability family:** Learning and Practice  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Learners receive focused coaching in reading, mathematics, speaking, search, and digital judgment.

### Why this capability exists

Microsoft, CENTURY, Khan Academy, and other platforms offer mature skill-specific practice. ScholaForge’s broad architecture needs focused, measurable accelerators that can be deployed early and validated independently.

### End-to-end human workflow

A teacher assigns an accelerator or a learner chooses an approved practice goal. The system performs a short accessible baseline, selects practice, provides step-sensitive feedback, records evidence, and schedules review. Teachers can inspect, adjust, or replace the sequence.

### Data boundary and prohibited data

Uses skill evidence, task responses, declared accessibility settings, and teacher-approved goals. Prohibits permanent ability labels and unrelated learner data.

### Technical identity, APIs, and events

Modules: Reading Accelerator, Numeracy Accelerator, Speaking Accelerator, Search and Information Literacy Accelerator, Writing Revision Accelerator. Shared interfaces: baseline(), next_activity(), explain(), record_evidence(), teacher_override(), export_qti().

### Failure, safe degradation, and rollback

When speech recognition is unreliable, use teacher, peer, text, or recorded alternatives. When adaptive confidence is low, revert to teacher-selected practice. No skill accelerator may alter official grades automatically.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Each accelerator has curriculum mapping, accessible alternatives, offline mode, teacher override, bias tests, and QTI 3 export. Progress estimates are reproducible from stored evidence.

### Success and harm measures

Learning gain; retention; transfer; practice completion; teacher time; accessibility parity; over-reliance; frustration; under-challenge.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-ADG-001 — Authentic Demonstration Gateway

**Capability family:** Assessment and Evidence  
**Implementation status:** `NEXT_RELEASE`  
**Plain-language explanation:** Learners prove important skills through a real demonstration, audience, project, or practical task.

### Why this capability exists

Alpha’s Test2Pass pattern highlights the value of authentic performance. ScholaForge already supports projects and exhibitions, but needs a standard gateway that connects demonstrations to competencies, safety, moderation, and recognized evidence.

### End-to-end human workflow

Teacher or pathway owner defines the competency, challenge, context, audience, safety controls, permissible support, and rubric. The learner rehearses, performs, receives human review, reflects, and may retry. Evidence is sealed and mapped to credentials only after moderation.

### Data boundary and prohibited data

Uses task specification, performance artifact, reviewer judgments, learner reflection, and moderation record. Prohibits audience popularity as a mastery score and prohibits hidden biometric analysis.

### Technical identity, APIs, and events

Objects: DemonstrationPlan, SafetyApproval, PerformanceSession, ReviewerPacket, ModerationResult, EvidenceReceipt. Supports live, recorded, simulated, workplace, and community modes.

### Failure, safe degradation, and rollback

Unsafe or inaccessible contexts block release. If a live event fails, an equivalent alternative is offered. Reviewer disagreement triggers moderation.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Every demonstration has an accessible equivalent where pedagogically valid, a rollback/cancellation plan, reviewer independence, provenance, and an appeal path.

### Success and harm measures

Competency validity; reviewer agreement; transfer evidence; learner agency; safety incidents; accessibility; retry success.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-ACI-001 — AI Contribution and Integrity Studio

**Capability family:** Assessment and Evidence  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Learners can show where AI helped, what they understood, and what work they personally did.

### Why this capability exists

Google originality tools and widespread generative AI use make simple plagiarism detection insufficient. ScholaForge needs an evidence model for authorship, reasoning, citation, model use, and oral or practical verification.

### End-to-end human workflow

An assignment declares permitted AI assistance. The learner may attach an AI-use record, source list, drafts, decisions, and corrections. The teacher reviews the artifact and, when needed, requests explanation, defense, or transfer task. The system records uncertainty rather than accusing automatically.

### Data boundary and prohibited data

Uses learner-submitted provenance, version history, cited sources, optional model receipts, and teacher review. Prohibits covert device surveillance, unreliable AI detectors as sole evidence, and automated misconduct findings.

### Technical identity, APIs, and events

Objects: AssignmentAIContract, ContributionDeclaration, DraftChain, SourceManifest, VerificationTask, IntegrityDecision, Appeal. Integrates with LTI 1.3, QTI 3, Open Badges, and Evidence Spine.

### Failure, safe degradation, and rollback

If provenance is missing, the status is UNVERIFIED, not GUILTY. Suspected misuse requires human due process. Model detectors are advisory only.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

A learner can disclose AI use without automatic penalty. A teacher can distinguish brainstorming, editing, generation, coding, and translation. Appeal and correction propagate to grade and credential records.

### Success and harm measures

False accusation rate; disclosure adoption; teacher review time; learner understanding; citation quality; successful oral/practical verification.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-ARC-001 — Accessibility Remediation Console

**Capability family:** Accessibility and Inclusion  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Teachers can find and fix accessibility problems before learners are blocked.

### Why this capability exists

Canvas and other mature platforms now provide course-level accessibility checking. ScholaForge has accessibility principles, but it needs a practical authoring and remediation workflow.

### End-to-end human workflow

The console scans a lesson, activity, assessment, media package, or learning space. It identifies missing text alternatives, poor structure, inaccessible interaction, language complexity, caption gaps, timing barriers, and offline barriers. It proposes fixes and shows previews for different assistive technologies. A human approves changes.

### Data boundary and prohibited data

Uses content and declared accessibility requirements. It does not expose diagnoses to content authors unless necessary and authorized.

### Technical identity, APIs, and events

Rules map to WCAG 2.2 AA, EN 301 549, QTI 3 accessibility, captions, transcripts, keyboard operation, print fallback, and cognitive-accessibility heuristics. Objects: AccessibilityFinding, RemediationAction, HumanApproval, Exception, TestReceipt.

### Failure, safe degradation, and rollback

Automated checks never claim full conformance. Unresolved blocking findings prevent publication unless an accountable exception is approved with an alternative.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Keyboard, screen reader, zoom, contrast, captions, focus order, timing, print, low bandwidth, and offline checks run in CI and manual review.

### Success and harm measures

Blocking defects per release; remediation time; assistive-technology task success; unresolved exceptions; learner-reported barriers.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-OCC-001 — Offline Content Channel Studio

**Capability family:** Offline and Sovereign Infrastructure  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Schools can prepare trusted learning libraries that work without the internet.

### Why this capability exists

Kolibri demonstrates mature offline-first content channels. ScholaForge has offline cells and packs, but needs a teacher-friendly channel creation, signing, distribution, and update workflow.

### End-to-end human workflow

A content steward selects approved resources, curriculum links, languages, accessibility variants, licenses, and expiry dates. The studio validates, packages, signs, and distributes the channel by local network, removable media, peer relay, or managed sync. Schools can pin versions and roll back.

### Data boundary and prohibited data

Uses public or authorized content metadata and packages. Learner personal data is not embedded in channels.

### Technical identity, APIs, and events

Objects: ContentChannel, ChannelVersion, ResourceManifest, LicenseRecord, Signature, RevocationList, DistributionReceipt. Supports differential updates, content-addressed storage, malware scanning, and air-gapped import.

### Failure, safe degradation, and rollback

Expired, revoked, corrupted, or unsigned channels are quarantined. Offline use displays freshness and jurisdiction limits.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

A school imports by USB, local hotspot, and delayed sync. A bad update rolls back. Duplicate resources deduplicate. License and provenance remain visible.

### Success and harm measures

Offline availability; update size; failed imports; stale-resource rate; storage efficiency; teacher findability; language coverage.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-PAC-001 — Procurement and Conformance Gate

**Capability family:** Interoperability and Governance  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** A school can verify that a product really works with required standards before buying it.

### Why this capability exists

Standards support is often claimed without conformance. 1EdTech explicitly distinguishes certification from self-asserted support.

### End-to-end human workflow

Procurement defines required profiles, versions, privacy terms, accessibility evidence, security evidence, data residency, export, incident response, and exit rights. Vendors submit certificates and test endpoints. ScholaForge validates and records exceptions. Non-conforming tools remain isolated or are rejected.

### Data boundary and prohibited data

Uses vendor evidence, test results, contracts, certificates, security advisories, and SBOMs. It does not expose learner data during conformance testing.

### Technical identity, APIs, and events

Profiles: OneRoster 1.2, LTI 1.3/LTI Advantage, QTI 3, CASE, Open Badges 3.0, CLR 2.0, OAuth/OIDC, WCAG 2.2, EN 301 549. Objects: ProcurementProfile, VendorSubmission, ConformanceRun, Exception, Approval, Expiry.

### Failure, safe degradation, and rollback

Expired certificates, unknown versions, or failed export tests block core-path approval. A temporary exception requires owner, expiry, compensating controls, and rollback.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Roster, launch, grade passback, assessment package, competency mapping, credential verification, accessibility, deletion, and exit export are tested.

### Success and harm measures

Certified integrations; exception age; failed conformance runs; vendor lock-in risk; incident rate; time to replace a tool.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-SAB-001 — School Action Broker

**Capability family:** Administration and Operations  
**Implementation status:** `ADVANCED`  
**Plain-language explanation:** AI can prepare school actions, but only approved actions reach real systems.

### Why this capability exists

Modern LMS products are adding agents that act across hundreds of APIs. ScholaForge needs a safer, provider-neutral action layer before allowing any agentic administration.

### End-to-end human workflow

A user requests an action. The broker resolves identity, purpose, policy, affected people, data, and required approvals. It generates a dry-run plan and impact preview. Low-risk reversible actions may execute under delegated authority. High-impact actions require human approval. Every write is idempotent and reversible where possible.

### Data boundary and prohibited data

Uses only the minimum fields required for the declared action. Prohibits hidden bulk exports, credential access, silent policy changes, and autonomous high-impact decisions.

### Technical identity, APIs, and events

Objects: ActionRequest, CapabilityGrant, DryRun, Approval, ExecutionReceipt, CompensationPlan. Uses short-lived scoped tokens, command allowlists, dual control, rate limits, idempotency keys, and event replay protection.

### Failure, safe degradation, and rollback

On policy, authorization, downstream, or verification failure, no partial high-impact action remains. Compensation or manual recovery starts automatically.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

An AI agent cannot grade, expel, admit, unlock SecureBoard, alter retention, or change model policy. A permitted draft message can be generated but not sent without approval when policy requires it.

### Success and harm measures

Action success; prevented unauthorized actions; rollback success; duplicate writes; approval latency; user trust.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-DQC-001 — Digital Content Quality and Curriculum Assurance

**Capability family:** Knowledge and Curriculum  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Teachers see whether digital content is accurate, suitable, accessible, licensed, and aligned before using it.

### Why this capability exists

The European Commission released 2026 guidance on selecting high-quality digital education content. ScholaForge needs a formal selection and approval workflow.

### End-to-end human workflow

A source enters quarantine. The system verifies identity, license, integrity, authority, date, curriculum fit, age suitability, accessibility, language, cultural context, advertising, privacy behavior, and offline rights. Human reviewers approve, limit, request changes, or reject.

### Data boundary and prohibited data

Uses source metadata and content. Learner data is not required.

### Technical identity, APIs, and events

Objects: SourceCandidate, QualityProfile, CurriculumCoverage, AccessibilityReview, CulturalReview, LicenseDecision, ApprovalVersion, WithdrawalNotice.

### Failure, safe degradation, and rollback

Unknown license, unresolved safety issue, hidden tracking, broken accessibility, or missing provenance blocks default publication.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

A withdrawn source disappears from active retrieval; prior evidence keeps provenance. Conflicting sources remain visible. Content updates trigger impact analysis.

### Success and harm measures

Approval cycle time; rejected-source reasons; stale content; coverage gaps; accessibility defects; teacher satisfaction.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-MON-001 — Model Operations and Post-Market Monitor

**Capability family:** AI Governance  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Schools can see which AI models are active, what changed, and whether a model should be paused.

### Why this capability exists

Version 12 defines model governance but needs a complete operating service for inventory, evaluation, incidents, change control, and retirement.

### End-to-end human workflow

Every model or provider enters the AI inventory with intended purpose, risk class, data path, region, license, tests, limitations, owner, and rollback. Pre-release evaluation covers accuracy, grounding, bias, security, privacy, accessibility, robustness, and educational suitability. Production telemetry is minimized and monitored. Threshold breaches pause the capability.

### Data boundary and prohibited data

Uses evaluation fixtures, synthetic data, approved de-identified samples, incident records, and limited production metrics. Prohibits uncontrolled reuse of learner data for training.

### Technical identity, APIs, and events

Objects: ModelCard, DeploymentProfile, EvaluationRun, RiskAcceptance, Incident, DriftSignal, KillSwitch, RetirementPlan. Aligns with EU AI Act obligations where applicable, NIST AI RMF, and ScholaForge’s pedagogical safety case.

### Failure, safe degradation, and rollback

Unknown model version, failed evaluation, expired approval, provider-region change, or critical advisory blocks release or triggers rollback.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Model swap, provider outage, prompt injection, data leakage, bias, multilingual fidelity, hallucination, unsupported claim, and kill-switch tests.

### Success and harm measures

Unsupported-output rate; severe incident rate; evaluation coverage; drift; rollback time; provider concentration; energy and cost per useful task.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-TRN-002 — Teacher Adoption and Capability Academy

**Capability family:** Teacher Professional System  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Teachers receive practical training, rehearsal, support, and protected time before a feature is activated.

### Why this capability exists

Technology adoption fails when tools are added without workflow redesign, confidence, or teacher ownership. The 2026 European educator guidance and OECD evidence reinforce the need for human capacity.

### End-to-end human workflow

Each role completes a short baseline, role-specific learning path, sandbox rehearsal, classroom simulation, supervised pilot, and evidence review. Teachers can certify readiness for specific capabilities rather than receiving one generic AI certificate.

### Data boundary and prohibited data

Uses training completion, self-assessment, demonstration evidence, and support requests. It is not used for punitive employment surveillance.

### Technical identity, APIs, and events

Objects: CapabilityPath, PracticeScenario, Demonstration, CoachReview, ReadinessStatus, Renewal. Integrates with OMEGA sandbox and release gates.

### Failure, safe degradation, and rollback

A school cannot enable a high-impact feature when accountable roles lack current training. Training can be paused or adapted for accessibility and language.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Every release package includes role training, rehearsal data, support contacts, and rollback drills.

### Success and harm measures

Teacher confidence; adoption quality; support burden; classroom incidents; time saved; after-hours workload.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-FAM-002 — Family Trust, Consent, and Rights Center

**Capability family:** Family and Community Partnership  
**Implementation status:** `NEXT_RELEASE`  
**Plain-language explanation:** Families can understand what the system does, manage permitted choices, and exercise rights without seeing private learner information.

### Why this capability exists

Family dashboards are common, but ScholaForge needs a rights-first center with age progression, plain language, multilingual access, consent separation, and challenge workflows.

### End-to-end human workflow

The center shows data categories, purposes, active features, AI involvement, school contacts, notices, consents where applicable, access history, correction requests, exports, and complaints. As learners mature, autonomy rules change according to law and policy.

### Data boundary and prohibited data

Uses relationship verification and the minimum family-facing information. Excludes private reflections, peer data, safeguarding details, raw analytics, and SecureBoard content.

### Technical identity, APIs, and events

Objects: FamilyRelationship, RightsNotice, ConsentDecision, DataSharePolicy, AccessReceipt, RequestCase, AgeTransitionRule.

### Failure, safe degradation, and rollback

Unverified relationships receive no access. Translation uncertainty routes high-impact communication to human review.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Consent is purpose-specific and revocable where applicable. A learner’s protected reflection never appears. Requests meet defined service levels.

### Success and harm measures

Comprehension; rights-request completion; mistaken access; translation quality; family trust; unresolved complaints.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-TCO-001 — Total Cost and Deployment Planner

**Capability family:** Economic and Deployment Model  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Schools can see the real cost, staffing, hardware, training, support, energy, and exit plan before committing.

### Why this capability exists

Version 12 names economic models but does not provide a complete decision engine. Cost opacity is a major deployment risk.

### End-to-end human workflow

A school enters size, devices, connectivity, languages, integrations, chosen features, support model, and sovereignty requirements. The planner compares integration-overlay, managed cloud, school-controlled cloud, regional cell, on-premises, and offline packages. It shows five-year cost ranges, dependencies, risks, staffing, migration, and exit costs.

### Data boundary and prohibited data

Uses institutional planning data, not learner records.

### Technical identity, APIs, and events

Objects: DeploymentScenario, CostAssumption, CapacityPlan, StaffingPlan, EnergyEstimate, VendorDependency, ExitPlan, SensitivityRun.

### Failure, safe degradation, and rollback

Unknown or vendor-provided assumptions are labelled. No single optimistic number is presented as fact.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Changing student count, offline duration, model use, or support level changes costs reproducibly. Export includes assumptions and uncertainty.

### Success and harm measures

Forecast error; hidden cost discovered; vendor concentration; energy per learner; support burden; exit readiness.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-RSR-001 — Research and Outcome Registry

**Capability family:** Research and Validation  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Every pilot states what it is trying to improve, what could harm learners, and what evidence will decide whether to continue.

### Why this capability exists

Competitor claims and internal enthusiasm are not enough. ScholaForge needs a preregistered evidence system that separates product use, educational outcomes, and causal claims.

### End-to-end human workflow

A study or pilot records question, intervention, comparison, population, lawful basis, outcomes, harms, equity measures, analysis plan, stop conditions, protocol deviations, and publication plan. Results include positive, negative, and inconclusive findings.

### Data boundary and prohibited data

Uses minimized, approved research data with purpose separation, retention, and withdrawal rules.

### Technical identity, APIs, and events

Objects: StudyProtocol, SiteApproval, DatasetManifest, AnalysisPlan, Deviation, Result, Replication, Decision. Supports federated analysis and aggregate publication.

### Failure, safe degradation, and rollback

Missing ethics/privacy review, unregistered outcome changes, or harm thresholds pause the study.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

A result cannot be published without protocol and provenance. Negative findings remain discoverable. Pilot success does not automatically authorize scale.

### Success and harm measures

Preregistered studies; independent evaluations; replication; harm detection; equity; decision reversals based on evidence.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-ALM-001 — Alumni and Lifelong Learning Mode

**Capability family:** Post-School Continuity  
**Implementation status:** `NEXT_RELEASE`  
**Plain-language explanation:** Learners can keep a portable, controlled record and continue learning after leaving school.

### Why this capability exists

The gap specification identifies lifelong continuity as underdeveloped. CLR and Open Badges support learner-controlled records.

### End-to-end human workflow

Before exit, the learner reviews what may transfer. The system creates a minimized transition vault containing credentials, competencies, portfolio references, accessibility preferences chosen by the learner, and verification endpoints. Alumni can add new credentials or return for approved learning without reopening restricted school records.

### Data boundary and prohibited data

Uses learner-approved portable records. Excludes private school notes, safeguarding records, raw chats, and unnecessary historic data.

### Technical identity, APIs, and events

Objects: TransitionVault, PortableCredential, LearnerKey, RevocationStatus, AlumniProfile, ReentryRequest.

### Failure, safe degradation, and rollback

Expired institution keys, revoked credentials, or identity uncertainty block verification until reviewed.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Export, import, revocation, selective disclosure, and deletion work across providers. The school cannot silently add new data after exit.

### Success and harm measures

Successful exports; verification success; learner control; reentry completion; privacy incidents.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-PAS-001 — Peer-Assisted Signed Synchronization

**Capability family:** Offline and Sovereign Infrastructure  
**Implementation status:** `ADVANCED`  
**Plain-language explanation:** Approved school devices can safely relay updates when direct internet access is weak or unavailable.

### Why this capability exists

The gap specification calls for peer-assisted synchronization. This strengthens Offline Neural Mesh but requires strict trust and conflict controls.

### End-to-end human workflow

A coordinator creates a signed transfer bundle. Managed peers exchange encrypted chunks through local network, removable media, or delay-tolerant links. Recipients verify manifest, signature, revocation list, tenant, sequence, and policy before import. Receipts later reconcile with the school cell.

### Data boundary and prohibited data

Content and policy updates may relay broadly. Personal events use tenant-scoped encryption and strict routing. Highly restricted records never use peer relay by default.

### Technical identity, APIs, and events

Objects: SyncBundle, ChunkManifest, RelayAuthorization, Receipt, Conflict, Revocation. Uses content addressing, forward integrity, replay protection, and bandwidth quotas.

### Failure, safe degradation, and rollback

Unknown peer, expired trust, sequence gap, or integrity failure quarantines the bundle. No silent destructive merge.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Air-gapped relay, duplicate bundle, revoked peer, corrupted chunk, clock drift, and conflict recovery tests.

### Success and harm measures

Delivery success; time to convergence; duplicate data; quarantined bundles; conflict resolution time.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-CUL-001 — Cultural and Jurisdiction Context Review

**Capability family:** Multilingual and Cross-Cultural Education  
**Implementation status:** `NEXT_RELEASE`  
**Plain-language explanation:** Learning content respects local context without hiding difficult facts or enforcing stereotypes.

### Why this capability exists

Translation alone is not localization. ScholaForge needs a review that separates language, curriculum, culture, law, and evidence.

### End-to-end human workflow

Content receives jurisdiction, language, historical context, cultural sensitivity, representation, terminology, and rights review. Reviewers can add context notes, alternative examples, disputed interpretations, or local legal restrictions without rewriting source history.

### Data boundary and prohibited data

Uses content and reviewer evidence. It does not use learner ethnicity, religion, or political views to restrict access.

### Technical identity, APIs, and events

Objects: ContextProfile, JurisdictionRule, RepresentationFinding, DisputeNote, Adaptation, ApprovalVersion.

### Failure, safe degradation, and rollback

High-impact cultural or legal uncertainty routes to qualified human review. The system preserves the original and adapted versions with provenance.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Multilingual fidelity, stereotype tests, historical dispute visibility, and curriculum equivalence.

### Success and harm measures

Correction rate; representation gaps; translation disputes; learner comprehension; reviewer diversity.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-COV-001 — Curriculum Coverage and Gap Engine

**Capability family:** Knowledge and Curriculum  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** Teachers can see what is covered, what is missing, what is duplicated, and what evidence exists.

### Why this capability exists

Adaptive content is only useful when schools can prove curriculum coverage and prerequisites.

### End-to-end human workflow

The engine maps approved resources, activities, assessments, projects, and evidence to CASE-aligned outcomes and local curriculum versions. It identifies uncovered outcomes, over-assessed areas, prerequisite breaks, stale mappings, and inaccessible evidence routes.

### Data boundary and prohibited data

Uses curriculum and resource metadata plus aggregate evidence. It does not need full learner profiles for coverage analysis.

### Technical identity, APIs, and events

Objects: CurriculumVersion, Outcome, Mapping, CoverageClaim, Gap, Redundancy, EvidenceRoute, ReviewerDecision.

### Failure, safe degradation, and rollback

Ambiguous mappings remain provisional. A model suggestion cannot publish a mapping without review.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Version changes trigger impact analysis. Coverage can be reconstructed from source mappings. Export supports CASE.

### Success and harm measures

Coverage; mapping confidence; stale links; duplicated workload; accessibility of evidence routes.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-SQC-001 — Source Quality Classification

**Capability family:** Knowledge Orchestration  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** The system shows whether a source is official, reviewed, current, contested, commercial, or weak.

### Why this capability exists

The gap specification requires explicit source-quality classes. This is essential for safe educational retrieval.

### End-to-end human workflow

At ingestion and retrieval, sources receive authority, provenance, freshness, review, conflict, license, and purpose classifications. The evidence packet records selected and rejected sources and reasons.

### Data boundary and prohibited data

Uses source metadata and content. No learner data is required.

### Technical identity, APIs, and events

States: AUTHORITATIVE, PRIMARY_RESEARCH, REVIEWED_SYNTHESIS, INSTITUTIONAL_GUIDANCE, VENDOR_PRIMARY, COMMUNITY, UNVERIFIED, REVOKED. These labels do not replace domain-specific review.

### Failure, safe degradation, and rollback

Unknown authority or license lowers support or blocks consequential use. A popular source cannot outrank an authoritative current source by relevance alone.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Conflicting dates, superseded policy, vendor claims, broken citations, and withdrawn sources are correctly classified.

### Success and harm measures

Unsupported claims; stale-source use; conflict detection; rejection accuracy; reviewer corrections.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-TIM-001 — Tutoring Integrity Mode

**Capability family:** Intelligent Tutoring  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** The tutor helps learners think without quietly doing the work for them.

### Why this capability exists

Purpose-built tutoring can support learning, but generative systems can encourage shortcutting and cognitive offloading.

### End-to-end human workflow

Assignments declare help boundaries. The tutor asks for an initial attempt, uses the lowest sufficient assistance, requests reasoning, introduces verification, and records assistance level. Direct answers may be restricted for active assessments. Teachers can inspect the policy and session summary.

### Data boundary and prohibited data

Uses current task, learner attempt, permitted evidence, and support settings. It does not use hidden emotion or unrelated history.

### Technical identity, APIs, and events

Modes: practice, Socratic, worked-example, feedback, assessment-restricted, accessibility support, teacher-demo. Objects: TutorContract, Attempt, HintStep, VerificationPrompt, Escalation, SessionReceipt.

### Failure, safe degradation, and rollback

If the tutor cannot ground an answer or the learner repeatedly requests prohibited help, it abstains and offers a teacher or approved resource.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

No direct answer before required attempt in restricted mode; citations match sources; assistance level is recorded; teacher disable/focus controls work.

### Success and harm measures

Reasoning quality; hint depth; transfer; unsupported answers; teacher referrals; over-reliance; learner frustration.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

---

## SF-MME-001 — Motivation Without Manipulation Engine

**Capability family:** Learner Agency  
**Implementation status:** `MVP_NOW`  
**Plain-language explanation:** The system supports purpose, progress, choice, belonging, and recovery without addictive tricks.

### Why this capability exists

The gap specification names motivation as a formal subsystem. ScholaForge has principles but needs enforceable design and experiment rules.

### End-to-end human workflow

A learner chooses or confirms goals, sees meaningful progress, selects approved options, receives non-comparative recognition, and can pause optional motivation features. Experiments require guardrails and cannot optimize only for engagement.

### Data boundary and prohibited data

Uses goal, progress, task choice, and voluntary feedback. Prohibits emotion inference, advertising, commercial profiling, and hidden variable rewards.

### Technical identity, APIs, and events

Objects: MotivationPolicy, Goal, Recognition, ChoiceSet, Experiment, HarmGuardrail, OptOut. Any experiment requires education, privacy, accessibility, and ethics approval.

### Failure, safe degradation, and rollback

If engagement rises while learning, wellbeing, or fairness worsens, the experiment stops. No dark-pattern fallback.

Rollback returns the capability to the previous signed configuration, preserves lawful evidence, disables new writes, and restores the manual or earlier validated workflow.

### Minimum acceptance tests

Opt-out is easy; no public capability leaderboard; no artificial urgency; experiments have stop conditions and rollback.

### Success and harm measures

Learning persistence; learner agency; belonging; recovery after failure; opt-out; stress; inequity; screen time.

**Release rule:** No status above `TARGET_SPECIFICATION` is permitted without implementation evidence, test receipts, owner approval, and a tested rollback.

# PART 0B — ARCHITECTURE DELTAS

## 5. New and strengthened bounded contexts

| Bounded context | Owns | Reads | Prohibited authority |
|---|---|---|---|
| Learning Experience | spaces, sessions, task variants, tutor contracts | curriculum, content, learner task-need capsule | final grades, discipline, diagnosis |
| Intervention | bounded learning signals and teacher actions | current session evidence | emotion, hidden attention, staff monitoring |
| Skill Accelerator | practice sequences and skill evidence | curriculum, accessibility, prior evidence | official certification without human review |
| Content Assurance | source quality, coverage, license, review, withdrawal | source registry, curriculum | learner profiling |
| Integrity | AI contribution, draft chain, verification, due process | assignments and evidence | automatic misconduct finding |
| Accessibility QA | findings, remediation, exceptions, test receipts | content and interfaces | diagnosis disclosure |
| Offline Content | channels, manifests, signatures, distribution | approved resources | personal-data channel embedding |
| Procurement | conformance profiles, vendor evidence, exceptions | standards and contracts | legal certification |
| Model Operations | model inventory, evaluations, incidents, retirement | approved telemetry and test data | self-release |
| Action Broker | dry runs, scoped actions, approvals, compensation | service APIs | autonomous high-impact school decisions |
| Outcome Research | protocols, analysis plans, results, stop decisions | approved study data | covert experimentation |

## 6. Reference runtime topology

```text
Learner / Teacher / Family / Mentor / Administrator
                         |
                 Role-Specific Workspaces
                         |
            API Gateway + School Action Broker
                         |
        Identity + Purpose + Policy + Rights Gate
                         |
  ---------------------------------------------------------
  | Learning Spaces | MySAGA | INSIGHT | Projects | Ops |
  ---------------------------------------------------------
         |                 |                 |
  Knowledge Orchestration | Evidence Spine  | Interop
         |                 |                 |
  Source / Curriculum / Content Assurance   |
         |                                   |
  Local School Cell <---- Signed Sync ----> Regional Plane
         |
  Offline Content Channels + Local Models + Print Bridge
```

### 6.1 Deterministic and probabilistic boundary

Deterministic services own:

- identity;
- policy;
- permissions;
- consent and rights;
- workflow state;
- event identity;
- versioning;
- evidence receipts;
- retention;
- synchronization;
- release gates.

Probabilistic services may:

- retrieve;
- rank;
- summarize;
- explain;
- generate drafts;
- propose task variants;
- identify possible misconceptions;
- estimate uncertainty.

Probabilistic services may not own final high-impact decisions.

## 7. API and event minimums

Every new API shall provide:

- versioned schema;
- authenticated actor;
- tenant and school scope;
- declared purpose;
- idempotency key for writes;
- policy decision reference;
- data classification;
- human approval reference where required;
- evidence receipt;
- explicit error code;
- retry safety;
- rollback or compensation reference.

Every event shall include:

```yaml
event_id: uuid
event_type: string
schema_version: string
tenant_id: uuid
school_id: uuid
actor_id: protected_reference
actor_role: string
purpose: string
feature_id: string
policy_decision_id: uuid
data_categories: []
source_references: []
model_reference: null
human_approval_reference: null
occurred_at: timestamp
recorded_at: timestamp
retention_class: string
integrity_hash: string
rollback_reference: null
```

## 8. Performance and resilience budgets

These are target budgets, not measured results.

| Path | Target |
|---|---|
| Local identity and policy p95 | under 300 ms |
| Learning-space open p95 on school LAN | under 2 seconds |
| Teacher intervention event visible p95 | under 3 seconds |
| Local content search p95 | under 1.5 seconds |
| First useful tutor signal p95 | under 5 seconds or visible progress |
| Offline channel verification | under 60 seconds per 5 GB on reference hardware |
| Acknowledged consequential event loss | zero |
| School-cell disconnected operation | 30 days target |
| Restore-point objective for core records | 15 minutes target |
| Recovery-time objective for school cell | 4 hours target |
| Accessibility blocking defects at release | zero without approved equivalent access |
| Provider swap | tested before production release |
| Rollback | one signed prior version available for every released package |

## 9. Observability without surveillance

Observe:

- service health;
- latency;
- error rate;
- policy denials;
- retrieval support;
- model version;
- accessibility failures;
- sync state;
- content freshness;
- teacher overrides;
- unresolved rights requests;
- educational outcome measures defined by approved studies.

Do not observe:

- covert emotional state;
- facial attention;
- voice stress;
- private reflections;
- staff productivity from clicks;
- learner worth;
- commercial engagement value.

# PART 0C — DELIVERY PROGRAM

## 10. Work packages

| Work package | Purpose | Core deliverables | MUST_BE_TRUE |
|---|---|---|---|
| WP-00 | Repository and evidence foundation | Repo audit; architecture decision records; schemas; CI; secrets baseline; dependency inventory | Repository reality is recorded; no fake commands or tests; all packages have owners and rollback. |
| WP-01 | Identity, rights, policy, and Evidence Spine | OIDC identity; role/purpose policy; consent/rights; event receipts; audit explorer | No consequential operation bypasses identity, policy, purpose, and evidence. |
| WP-02 | Curriculum, source quality, and content assurance | CASE graph; source registry; coverage engine; quality review; content withdrawal | Every active learning object maps to an approved curriculum/source version with provenance. |
| WP-03 | Teacher and learner workspaces | Role-specific navigation; learner agency; teacher planning; family boundary; accessibility defaults | Core workflows complete with keyboard, screen reader, low-bandwidth, and print fallbacks. |
| WP-04 | Learning spaces and intervention | Evidence-Linked Learning Spaces; ActivityForge integration; Teacher Intervention Queue; TwinTeach controls | Teacher can create, preview, launch, pause, and roll back a safe space; no surveillance signals. |
| WP-05 | Skill accelerators and tutoring integrity | Reading/numeracy/speaking/search accelerators; Socratic tutoring; focus modes; teacher disable | Each accelerator has evidence, transfer, bias, accessibility, and offline tests. |
| WP-06 | Assessment, integrity, demonstration, and credentials | INSIGHT; AI contribution studio; authentic demonstration; moderation; QTI; Open Badges/CLR | No consequential result is finalized by AI; appeals and corrections propagate. |
| WP-07 | Offline cell, content channels, and synchronization | Local authority; signed channels; delayed sync; peer relay; print bridge; restore | A school completes a full operational day disconnected and reconciles without losing evidence. |
| WP-08 | Accessibility, language, and cultural review | Remediation console; multilingual bridge; cultural context; QTI accessibility; EN 301 549 mapping | Blocking accessibility findings prevent release unless equivalent access is approved. |
| WP-09 | Interoperability, procurement, and migration | OneRoster; LTI; CASE; QTI; credentials; conformance gate; migration/exit drills | Standards claims are proven by validators/certificates and end-to-end tests. |
| WP-10 | AI model operations and action broker | Model inventory; evals; routing; provider swap; kill switch; dry-run administrative actions | Unknown or unapproved model/action cannot enter the core path. |
| WP-11 | Teacher academy and operational adoption | Role training; rehearsal; support; workload protection; certification by capability | High-impact features remain disabled until accountable roles demonstrate readiness. |
| WP-12 | Pilot, outcome registry, and release evidence | Preregistered pilot; harm/equity measures; independent review; release pack; rollback exercise | Scale decisions use observed evidence; negative and inconclusive results remain visible. |

## 11. PARTS → TASKS → STEPS → MUST-BE-TRUE execution grammar

### PART

A deployable capability slice with one owner and one rollback.

### TASK

A change that can be implemented and verified independently.

### STEP

One repository action or one human governance action.

### MUST-BE-TRUE

An observable condition that must pass before the next task starts.

### Example

```text
PART: Evidence-Linked Learning Space
TASK: Publish a teacher-approved space
STEPS:
1. Create versioned space schema.
2. Validate curriculum and source references.
3. Compile policy and retrieval contracts.
4. Generate offline fallback.
5. Run accessibility checks.
6. Preview learner variants.
7. Obtain teacher approval.
8. Publish signed version.
MUST-BE-TRUE:
- No prohibited data field exists.
- Every task variant maps to the same declared objective.
- Teacher can pause and roll back.
- Offline fallback opens.
- Evidence packet is generated.
- Accessibility blocking checks pass.
```

## 12. Seven-day validation sprint

### Day 1 — Source and identity lock

- verify all source hashes;
- freeze project identity;
- create capability registry;
- classify use cases;
- record conflicts;
- select one school pilot context.

### Day 2 — Repository and architecture proof

- audit repository if supplied;
- create bounded-context skeleton;
- define schemas and API contracts;
- create CI gates;
- produce threat and data-flow diagrams.

### Day 3 — Teacher and learner thin slice

- implement or prototype one learning space;
- create one teacher preview;
- create two learner variants;
- add direct help and challenge controls;
- add Evidence Spine receipt.

### Day 4 — Offline and interoperability proof

- run school cell disconnected;
- import one signed content channel;
- exchange one roster through OneRoster 1.2;
- launch one tool through LTI 1.3;
- import/export one QTI 3 assessment.

### Day 5 — Safety, accessibility, and model proof

- run prompt-injection tests;
- run prohibited-action tests;
- run model swap and kill-switch;
- run keyboard, screen-reader, zoom, captions, and print tests;
- confirm no emotion or hidden attention processing.

### Day 6 — Pilot rehearsal

- teacher rehearsal;
- learner usability;
- family rights explanation;
- incident and appeal tabletop;
- backup and rollback exercise.

### Day 7 — GAD-1 diagnostic

Deliver:

```text
STATUS: PARTIAL | BLOCKED | PILOT_CANDIDATE
FILES CHANGED:
COMMANDS RUN:
TESTS PASSED:
TESTS FAILED:
EVIDENCE CREATED:
LEGAL/PRIVACY/ACCESSIBILITY REVIEWS:
BLOCKERS:
ROLLBACK RESULT:
NEXT APPROVED TASK:
```

No production-ready claim is allowed.

## 13. Release ladder

| Gate | Required evidence | Failure result |
|---|---|---|
| G0 Identity | canonical name, project code, decision locks | stop |
| G1 Architecture | bounded contexts, data ownership, APIs, threat model | stop |
| G2 Human rights | learner rights, teacher authority, family boundaries, safeguarding | stop |
| G3 Privacy | lawful basis map, DPIA trigger, retention, deletion, rights tests | stop |
| G4 AI risk | use-case class, model inventory, evals, human oversight, kill switch | stop |
| G5 Accessibility | WCAG 2.2 AA verification and applicable EN 301 549 profile | stop or equivalent-access exception |
| G6 Interoperability | current profile tests and certificates/validators | isolate or reject integration |
| G7 Offline | disconnected day, sync, conflict, restore, print | stop offline claim |
| G8 Educational validity | preregistered pilot, outcome and harm evidence | revise, pause, or reject |
| G9 Operations | SLOs, incident response, backup, restore, owner, support | stop |
| G10 Release | signed evidence pack, approvals, rollback, training | release only within approved scope |

## 14. Pilot sequence

### Pilot 1 — Low-risk teacher support

- content assurance;
- lesson planning;
- accessibility remediation;
- offline content;
- no learner profiling;
- no automatic grading.

### Pilot 2 — Learning spaces and skill accelerators

- teacher-approved spaces;
- explicit learner help;
- focused practice;
- direct teacher intervention;
- no high-impact pathway decisions.

### Pilot 3 — Evidence and assessment support

- evidence organization;
- moderation;
- AI contribution declarations;
- authentic demonstrations;
- human final decisions.

### Pilot 4 — MySAGA and mastery routing

- purpose-bound learner vault;
- correction and forgetting;
- minimized task-need capsules;
- bias and under-challenge tests.

### Pilot 5 — School cell and ecosystem

- offline month;
- standards integrations;
- mentor/community workflows;
- procurement and exit drill.

### Research-gated only

- SecureBoard Guardian;
- advanced sensing;
- high-impact educational classification;
- automated administrative actions;
- large-scale collective intelligence;
- privacy-preserving cryptographic proofs.

# PART 0D — SOURCE UNIVERSE AND AUDIT

## 15. Source universe map

| Source | URL | Evidence grade | Use boundary |
|---|---|---|---|
| EU AI Act | https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng | AUTHORITATIVE | Legal text; use-case classification and obligations require qualified review. |
| Commission high-risk AI guidance | https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems | AUTHORITATIVE_CURRENT | Classification guidance; verify final status at every release gate. |
| Draft high-risk classification guidelines, 19 May 2026 | https://digital-strategy.ec.europa.eu/en/library/draft-commission-guidelines-classification-high-risk-ai-systems | AUTHORITATIVE_DRAFT | Draft, not final law. |
| 2026 educator AI and data guidelines | https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/ethical-guidelines-for-educators-on-using-artificial-intelligence | AUTHORITATIVE_GUIDANCE | Practical ethical decision support for educators. |
| 2026 digital education content guidelines | https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/digital-education-content-guidelines-and-framework | AUTHORITATIVE_GUIDANCE | Content quality and informed selection. |
| EDPB children | https://www.edpb.europa.eu/topics/key-gdpr-concepts/children_en | AUTHORITATIVE_GUIDANCE | Age-appropriate transparency and enhanced safeguards. |
| EDPB DPIA | https://www.edpb.europa.eu/topics/accountability-and-compliance-tools/data-protection-impact-assessment_en | AUTHORITATIVE_GUIDANCE | DPIA before likely high-risk processing. |
| UNESCO GenAI guidance | https://unesdoc.unesco.org/ark:/48223/pf0000386693 | HIGH | Human-centred, age-appropriate, privacy-aware education use. |
| OECD Digital Education Outlook 2026 | https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html | HIGH | Emerging evidence and purpose-built education uses. |
| NIST AI RMF | https://www.nist.gov/itl/ai-risk-management-framework | HIGH | Voluntary risk-management framework. |
| NIST CSF 2.0 | https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20 | HIGH | Cybersecurity outcome taxonomy. |
| WCAG 2.2 | https://www.w3.org/TR/WCAG22/ | AUTHORITATIVE_STANDARD | Accessibility baseline. |
| WCAG 2.2 ISO status | https://www.w3.org/press-releases/2025/wcag22-iso-pas/ | AUTHORITATIVE_STANDARD | ISO/IEC 40500:2025. |
| EN 301 549 V3.2.1 | https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf | AUTHORITATIVE_STANDARD | Current published/harmonised version at review; monitor newer drafts. |
| 1EdTech specifications | https://www.1edtech.org/specifications | AUTHORITATIVE_STANDARD | Conformance, not name-only support. |
| OneRoster 1.2 | https://www.1edtech.org/standards/oneroster | AUTHORITATIVE_STANDARD | Roster/course/grade exchange. |
| LTI 1.3 / LTI Advantage | https://www.1edtech.org/standards/lti/why-adopt-lti-1p3 | AUTHORITATIVE_STANDARD | Secure tool launch and services. |
| QTI 3 | https://www.1edtech.org/standards/qti/index | AUTHORITATIVE_STANDARD | Assessment exchange and accessibility. |
| CASE | https://www.1edtech.org/standards/case/about | AUTHORITATIVE_STANDARD | Machine-readable competencies and standards. |
| Open Badges / CLR | https://www.1edtech.org/standards/open-badges | AUTHORITATIVE_STANDARD | Verifiable achievements and learner records. |
| Alpha School program | https://alpha.school/the-program/ | VENDOR_PRIMARY | Capability presence only; outcome claims require independent review. |
| SchoolAI Spaces | https://schoolai.com/products/spaces | VENDOR_PRIMARY | Capability presence only. |
| SchoolAI Mission Control | https://schoolai.com/products/mission-control | VENDOR_PRIMARY | Capability presence only. |
| CENTURY | https://www.century.tech/ | VENDOR_PRIMARY | Capability presence only. |
| Khanmigo teacher tools | https://support.khanacademy.org/hc/en-us/articles/14799047733645-What-teacher-tools-are-available-on-Khanmigo | VENDOR_PRIMARY | Capability presence only. |
| Canvas tiers and AI | https://www.instructure.com/products/canvas-tiers | VENDOR_PRIMARY | Capability presence only. |
| Google Classroom | https://edu.google.com/intl/ALL_us/workspace-for-education/products/classroom/ | VENDOR_PRIMARY | Capability presence only. |
| Microsoft Learning Accelerators | https://www.microsoft.com/en-us/education/learning-tools/learning-accelerators | VENDOR_PRIMARY | Capability presence only. |
| Kolibri | https://learningequality.org/kolibri/about-kolibri/ | VENDOR_PRIMARY_OSS | Capability presence and offline architecture. |

## 16. Evidence grading rule

- `AUTHORITATIVE`: binding legal or official standards source.
- `AUTHORITATIVE_CURRENT`: current official implementation guidance.
- `AUTHORITATIVE_DRAFT`: official but not final.
- `HIGH`: recognized public institution or primary research.
- `VENDOR_PRIMARY`: valid for product capability presence, not independent outcome proof.
- `LOW`: marketing, unsupported comparison, or unverified third-party interpretation.
- `IRRELEVANT`: reject.

Counter-evidence is mandatory for:

- educational outcome claims;
- automatic assessment;
- profiling;
- accessibility;
- security;
- privacy;
- model selection;
- vendor lock-in;
- high-risk classification;
- camera or sensor use.

## 17. CHANGE_MANIFEST_JSON

```json
{
  "project": "SCHOLAFORGE",
  "original_project_identity": "19. ScholaForge Belgium - Eu regulations",
  "project_code": 48,
  "from_version": "12.0",
  "to_version": "13.0",
  "change_class": [
    "ADDITION",
    "TECHNICAL_IMPROVEMENT",
    "GOVERNANCE_IMPROVEMENT",
    "VALIDATION_UPDATE"
  ],
  "preserved": [
    "canonical identity",
    "all version 12 feature-bearing content",
    "teacher authority",
    "learner rights",
    "offline continuity",
    "anti-surveillance rules",
    "appeal and correction",
    "open export",
    "human review boundaries"
  ],
  "added_feature_ids": [
    "SF-ELS-001",
    "SF-TIQ-001",
    "SF-FSA-001",
    "SF-ADG-001",
    "SF-ACI-001",
    "SF-ARC-001",
    "SF-OCC-001",
    "SF-PAC-001",
    "SF-SAB-001",
    "SF-DQC-001",
    "SF-MON-001",
    "SF-TRN-002",
    "SF-FAM-002",
    "SF-TCO-001",
    "SF-RSR-001",
    "SF-ALM-001",
    "SF-PAS-001",
    "SF-CUL-001",
    "SF-COV-001",
    "SF-SQC-001",
    "SF-TIM-001",
    "SF-MME-001"
  ],
  "source_hashes": {
    "SCHOLAFORGE_COMPLETE_MERGED_BLUEPRINT_v12.0.md": "dc8b9f28362ea7330a5df8308133faa21705ea0b66746d13904eac3f1309c87b",
    "SCHOLAFORGE_COMPLETE_BLUEPRINT_v11.0.md": "d1f8fd977fee160941ca708a5099df8c19662afd343e3f4964ffe682e5f3ff7f",
    "New Text Document.txt": "83ddddca593df9d34ca9015622721f7fe4ff756e0ec87a226f651d80648a210b",
    "New Text Document (2).txt": "d079220fdf0a99645a4633ebdc86c4e02e70b39bfb68486fb218cba3a0cbe504"
  },
  "implementation_claim": "NOT_ESTABLISHED",
  "legal_conformity": "HUMAN_REVIEW_REQUIRED",
  "seed": 17
}
```

## 18. AUDIT_REPORT_JSON

```json
{
  "status": "PASS_WITH_BLOCKERS",
  "source_universe": {
    "uploaded_files": [
      "SCHOLAFORGE_COMPLETE_MERGED_BLUEPRINT_v12.0.md",
      "SCHOLAFORGE_COMPLETE_BLUEPRINT_v11.0.md",
      "New Text Document.txt",
      "New Text Document (2).txt"
    ],
    "web_source_classes": [
      "EU legal and policy",
      "EDPB",
      "UNESCO",
      "OECD",
      "NIST",
      "W3C",
      "ETSI",
      "1EdTech",
      "official competitor product pages"
    ]
  },
  "findings": {
    "strengths": [
      "broad human-development model",
      "dual explanation",
      "teacher authority",
      "learner rights",
      "proof-carrying decisions",
      "offline federation",
      "deep signature inventions"
    ],
    "material_gaps": [
      "unsupported comparative percentages",
      "repetition and navigation burden",
      "teacher-designed adaptive-space contract",
      "real-time non-surveillance intervention queue",
      "focused skill accelerators",
      "accessibility remediation workflow",
      "offline channel operations",
      "procurement conformance",
      "agent action broker",
      "model post-market operations",
      "teacher readiness gate",
      "preregistered outcome registry"
    ],
    "resolved_by_spec": true
  },
  "not_run": [
    "repository inspection",
    "implementation commands",
    "automated tests",
    "security assessment",
    "DPIA",
    "FRIA",
    "legal review",
    "1EdTech certification",
    "accessibility conformance audit",
    "classroom pilot"
  ],
  "blockers": [
    "No implementation repository was supplied.",
    "No school, jurisdictional deployment, controller/processor map, or procurement context was supplied.",
    "Draft 2026 AI Act classification guidance was not final at the review date.",
    "SecureBoard Guardian requires independent legal, child-rights, labor, safeguarding, privacy, and proportionality review before any activation."
  ],
  "evidence_grade": "TARGET_SPECIFICATION_ONLY",
  "production_ready": false
}
```

## 19. COMPLIANCE_CHECKLIST_JSON

```json
{
  "identity_preserved": true,
  "all_existing_features_preserved": true,
  "plain_and_technical_explanations": true,
  "teacher_final_authority": true,
  "learner_explanation_correction_appeal": true,
  "emotion_recognition_in_education_prohibited_by_design": true,
  "offline_and_manual_fallbacks": true,
  "data_minimization_and_purpose_limitation": true,
  "human_review_required_for_high_impact": true,
  "standards_support_requires_conformance_testing": true,
  "model_and_provider_replaceability": true,
  "supply_chain_and_sbom_required": true,
  "accessibility_target": "WCAG_2_2_AA_PLUS_APPLICABLE_EN_301_549",
  "legal_certification_claimed": false,
  "tests_passed_claimed": false,
  "production_ready_claimed": false
}
```

## 20. Final version 13 implementation directive

Build the smallest complete evidence-carrying school slice first.

Do not build every advanced invention at once.

Start with:

1. identity, purpose, policy, and Evidence Spine;
2. curriculum, source quality, and approved content;
3. teacher and learner workspaces;
4. one Evidence-Linked Learning Space;
5. one Foundational Skill Accelerator;
6. accessibility remediation;
7. offline content channel and print fallback;
8. one standards-based integration;
9. model inventory, evaluation, and kill switch;
10. preregistered pilot and rollback.

Preserve every deferred capability as `CORE_DEFERRED`.

Do not label deferred capabilities as removed.

Do not claim `DONE`, `VALIDATED`, `COMPLIANT`, or `PRODUCTION_READY` without evidence.

---

# PART IX — PRESERVED COMPLETE VERSION 13 WHOLE-SCHOOL BLUEPRINT

> This is the complete whole-school version 13 body, preserved as the canonical foundation. Version 14 adds authority, explainability, benefit governance, new innovation modules, and a current evidence layer without deleting its features.

# SCHOLAFORGE

## Sovereign, Human-First, Evidence-Carrying Education Operating System

**Complete Preserved and Expanded Whole-School Project Blueprint — Version 13.0**

| Field | Value |
|---|---|
| Canonical name | **SCHOLAFORGE** |
| Original identity | **19. ScholaForge Belgium - Eu regulations** |
| Project code | **48** |
| Owner | **Agim Haxhijaha / VertoGroup.ai** |
| Status | **MASTER TARGET BLUEPRINT** |
| Implementation proof | **NOT ESTABLISHED** |
| Legal conformity | **HUMAN_REVIEW_REQUIRED** |
| Production readiness | **NOT ESTABLISHED** |
| Document mode | Preserve · Merge · Explain · Structure · Implement · Verify · Roll back |
| Primary region | Belgium / European Union |
| Deployment model | Local-first, offline-capable, hybrid, and cloud-optional |
| Version 13 expansion | Assessment, MySAGA, library, food, sport, expeditions, facilities, attendance, board governance, and whole-school operating intelligence |

> **Version 13 preservation rule:** The complete version 12.0 blueprint is retained in this file as the canonical foundation. Part IX adds or strengthens capabilities. It does not authorize deletion, weakening, or silent renaming of any earlier feature.

> **Truth boundary:** This file defines the target project. It does not prove that code exists, tests passed, a school deployed the system, legal obligations were met, or a regulator approved the design.

## 0. Professional Merge Authority

This version merges two complete ScholaForge blueprints.

It preserves every feature-bearing section from both source files.

It replaces only superseded cover pages, old evaluation notes, old change manifests, and old final-status pages.

Those replaced pages did not define unique product capabilities.

### 0.1 Source files

| Source | Role in version 12.0 | SHA-256 |
|---|---|---|
| `Pasted markdown.md` | Signature inventions, dual explanations, deep technical specifications, retrieval architecture, feature registry, and supplementary design detail | `232bf09cabd2e2081dcdc27b916202a71384cb59cbf7a04988ffef2e87692e92` |
| `SCHOLAFORGE_COMPLETE_BLUEPRINT_v11.0.md` | Canonical human-first operating model, architecture, governance, delivery program, validation, and release gates | `d1f8fd977fee160941ca708a5099df8c19662afd343e3f4964ffe682e5f3ff7f` |

### 0.2 Precedence

When wording conflicts, use this order:

1. platform safety and applicable law;
2. the explicit rule in this version 12.0 merge layer;
3. the stricter child-safety, privacy, accessibility, or human-rights rule;
4. version 11.0 governance and implementation architecture;
5. version 9.0 invention and feature detail;
6. unresolved conflicts require a recorded `DECISION_LOCK`.

No capability is silently removed.

No legal claim is inferred from technical design.

### 0.3 Dual-explanation rule

Every important capability must be understandable in two ways.

**Plain-language explanation**

Use short sentences.

Explain the human purpose.

Avoid unnecessary technical words.

**Technical explanation**

Define services, data, permissions, states, interfaces, controls, tests, evidence, failure behavior, and rollback.

The plain explanation helps people understand the system.

The technical explanation helps teams build and verify it.

### 0.4 Document layers

| Part | Reader | Purpose |
|---|---|---|
| Part I | Learners, families, teachers, school leaders, policymakers | Short, plain-language explanation |
| Part II | Product, education, governance, legal, and engineering teams | Canonical governed master blueprint |
| Part III | Architects, inventors, security teams, AI teams | Signature inventions and deep specifications |
| Part IV | Product and implementation teams | Expanded product ecosystem |
| Part V | Knowledge, RAG, curriculum, and AI teams | Knowledge-orchestration deep companion |
| Part VI | Architects, auditors, and reviewers | Supplementary design and validation notes |
| Part VII | Legal, standards, procurement, and compliance teams | Currentness register |
| Part VIII | Release and audit teams | Merge manifest, audit report, and checklist |
| Part IX | Whole school community and implementation teams | Version 13 research-grounded whole-school expansion |

## 1. Executive Explanation

### 1.1 Plain-language view

ScholaForge is a new way to run a school.

It helps teachers teach.

It helps learners grow.

It keeps humans in control.

It connects knowledge, projects, skills, evidence, safety, and school operations.

It works with the internet.

It can also keep working without it.

It does not reduce a child to one score.

It does not let AI decide a child’s future.

It does not use hidden surveillance to control people.

It gives important decisions to qualified humans.

It records why important actions happened.

It supports correction, appeal, export, and rollback.

### 1.2 Technical view

ScholaForge is a federated, local-first, event-driven, policy-governed education operating system.

It combines:

- role-specific workspaces;
- curriculum and competency graphs;
- learner-controlled longitudinal intelligence;
- evidence-grounded retrieval;
- human-governed assessment;
- project and practical-learning runtimes;
- expert pathways;
- school operations;
- standards-based interoperability;
- offline school cells;
- signed synchronization;
- explainable AI;
- policy-as-code;
- append-only evidence receipts;
- privacy and rights workflows;
- observability;
- release gates;
- reversible deployment.

The selected reference model is a **federated school cell**.

Each school keeps essential authority and continuity.

Regional or national services coordinate only approved functions.

Critical educational work does not depend on one model provider or one cloud provider.

## 2. Innovation and Delivery Position

### 2.1 Innovation classes

| Class | Purpose | Initial scope |
|---|---|---|
| **MVP_NOW** | Prove low-risk educational value | Identity, workspaces, curriculum graph, knowledge retrieval, teacher planning, learner tasks, evidence, accessibility, offline continuity |
| **NEXT_RELEASE** | Expand daily school value | MySAGA, ActivityForge, INSIGHT support, family workspace, projects, credentials, interoperability |
| **ADVANCED** | Add distinctive school intelligence | TwinTeach Live, MotionClass, No-ID Motion, Digital Twin, expert pathways, environment intelligence, marketplace |
| **RESEARCH_GATED** | Test high-complexity or high-risk inventions | SecureBoard Guardian, advanced OMEGA bridges, privacy-preserving proofs, large-scale collective intelligence |

A feature moves forward only when its own evidence gate passes.

A successful prototype is not a production release.

### 2.2 Performance and resilience baseline

These are target design objectives.

They are not measured results.

| Capability | Target |
|---|---|
| Managed core availability | 99.9% monthly |
| Offline school continuity | 30 days without external connectivity |
| Local identity and policy decision p95 | Under 300 ms |
| Common local read p95 | Under 1 second |
| Common managed read p95 | Under 2 seconds |
| Common write acknowledgement p95 | Under 2 seconds |
| Tutor first useful signal p95 | Under 5 seconds or visible progress |
| Acknowledged consequential event loss | Zero |
| Accessibility target | WCAG 2.2 AA, plus applicable procurement rules |
| Model portability | No critical function permanently tied to one provider |
| Recovery | Tested backups, restores, rollback, and key-recovery ceremonies |

## 3. Two-Lens Feature Atlas

Each row explains the same capability twice.

The middle column is for non-technical readers.

The last column is for technical teams.

| Capability | Plain-language explanation | Technical explanation |
|---|---|---|
| **MySAGA** | Keeps one learner’s approved learning history private and useful. | A longitudinal learner-state service with provenance, expiry, correction, export, and purpose-bound access. |
| **Learning DNA** | Shows which learning conditions currently help a learner. | A time-bounded preference and support model. It is not a biological or fixed-intelligence profile. |
| **Talent Constellation** | Shows several developing strengths at the same time. | A multidimensional evidence view. It avoids one universal talent score. |
| **Passion Discovery** | Lets learners explore interests safely. | A governed exploration engine using short exposures, projects, reflection, and learner confirmation. |
| **Career Genome** | Shows many routes into study and work. | A pathway graph linking evidence, qualifications, costs, opportunities, and uncertainty. |
| **Human Potential Engine** | Helps a learner compare possible futures. | A scenario engine. It generates options, not destiny decisions. |
| **Innovation Passport** | Keeps verified evidence of meaningful creations. | A portable, rights-aware portfolio with authorship, provenance, licensing, and verification. |
| **Memory Garden** | Lets learners save selected learning memories. | A private, optional reflection store with sharing, deletion, export, and consent controls. |
| **Learner Agency Control Center** | Lets learners ask for more help or more challenge. | A rights interface for explanations, alternatives, correction, appeal, and human review. |
| **Goal Contracts** | Makes goals clear for learners and teachers. | A versioned agreement covering purpose, evidence, support, review, and change conditions. |
| **Recovery Pathways** | Helps learners return after difficulty or interruption. | A non-diagnostic support workflow with teacher review and reversible adaptations. |
| **Private Mastery Routing** | Gives different tasks without public labels. | A minimized task-need capsule routes learners by evidence, readiness, access needs, and uncertainty. |
| **Knowledge Orchestration Engine** | Finds the right knowledge for the right purpose. | A policy-governed retrieval planner using lexical, semantic, graph, RRF, CRAG, RFF, and evidence packets. |
| **ScholaGraph Retrieval Fabric** | Connects sources, concepts, competencies, and evidence. | A graph-backed retrieval fabric with permissions, temporal validity, provenance, and contradiction links. |
| **Curriculum Graph** | Shows what must be learned and what comes first. | A versioned graph of outcomes, prerequisites, evidence, qualification links, and jurisdiction. |
| **Competency Graph** | Shows what a capability means and how it is demonstrated. | A structured model of skills, levels, dependencies, equivalent evidence, and validity. |
| **Contradiction Graph** | Shows where credible sources disagree. | A conflict model that preserves competing claims and routes high-impact disputes to experts. |
| **Knowledge Decay Monitor** | Finds outdated or withdrawn knowledge. | A change-detection service for law, curriculum, science, safety guidance, licenses, and standards. |
| **Multilingual Learning Bridge** | Explains learning across languages. | A translation and vocabulary layer with confidence, human review, and separation of language from subject ability. |
| **Explanation Transformation Engine** | Explains one idea in several useful ways. | A controlled transformation service for level, modality, accessibility, analogy, examples, and professional context. |
| **Teacher Workspace** | Puts today’s teaching work in one place. | A role-based workspace for plans, learners, evidence, communications, controls, and approvals. |
| **Teacher Copilot** | Helps teachers prepare and adapt work. | A bounded drafting and retrieval assistant. It cannot make final consequential decisions. |
| **Lesson Studio** | Builds a lesson from approved knowledge and activities. | A versioned authoring workflow with objective mapping, accessibility, evidence, timing, and fallback. |
| **ActivityForge** | Creates usable classroom activities. | A constrained generator using curriculum, time, class, room, safety, accessibility, and evidence needs. |
| **Activities Library** | Stores reviewed activities that can be reused. | A signed, versioned repository with context, license, safety, accessibility, and outcome evidence. |
| **TwinTeach Live** | Supports a teacher during a live lesson. | A real-time co-teaching runtime with teacher approval, one-tap disable, source visibility, and manual fallback. |
| **Activity Conductor** | Keeps a multi-step activity synchronized. | A deterministic state machine for phases, devices, groups, timers, exceptions, and evidence capture. |
| **Class Symphony** | Shows the class learning state without ranking children. | A teacher control surface for activity phase, help requests, group needs, and required decisions. |
| **MotionClass** | Turns safe movement into part of learning. | An embodied-learning runtime with room checks, accessible alternatives, and teacher control. |
| **No-ID Motion Layer** | Uses movement without identifying people. | An edge pipeline that converts volatile sensor input into anonymous activity events. |
| **Quest Engine** | Turns learning goals into guided challenges. | A progression service for objectives, prerequisites, evidence, support, and reflection. |
| **Socratic Tutoring** | Helps learners reason instead of giving answers too quickly. | A question-led tutor with evidence grounding, hint control, uncertainty, and teacher referral. |
| **Step-Sensitive Assistance** | Gives only the amount of help that is needed. | A graduated assistance policy from encouragement to worked example and human referral. |
| **Misconception Atlas** | Helps teachers respond to common misunderstandings. | A reviewed knowledge base of causes, diagnostics, counterexamples, explanations, and corrections. |
| **Daily Rhythm Engine** | Builds a realistic school day. | A constraint-aware scheduler using age, curriculum, staff, rooms, access needs, transport, and offline status. |
| **INSIGHT Evaluation** | Explains what learning evidence really shows. | A human-governed evaluation pipeline for multiple evidence types, uncertainty, moderation, and appeal. |
| **Evidence Spine** | Connects every important result to its reason. | An append-only chain linking purpose, policy, source, model, human action, outcome, and rollback. |
| **Assessment Validity Engine** | Checks whether an assessment is fair and useful. | A pre-release evaluator for alignment, coverage, difficulty, accessibility, bias, reliability, and leakage. |
| **Credential Translation Engine** | Maps rich evidence to recognized qualifications. | A reviewed mapping service for curriculum, vocational, university, microcredential, and employer frameworks. |
| **Project Operating System** | Guides real projects from problem to reflection. | A project workflow for research, requirements, risk, budget, prototype, testing, iteration, and evidence. |
| **Project Studio** | Gives teams a place to build real work. | A collaborative workspace with milestones, decisions, artifacts, mentors, peer review, and publication controls. |
| **Maker and Lab Safety Engine** | Stops unsafe practical work. | A policy gate for age, supervision, tools, substances, protective equipment, rooms, and emergency procedures. |
| **Community Problem Marketplace** | Brings real community problems into school. | A verified challenge exchange with safeguarding, data, IP, contact, and publication controls. |
| **Scientific Learning Lab** | Supports real scientific inquiry. | A protocol service for questions, hypotheses, variables, ethics, reproducibility, analysis, and peer review. |
| **Team Formation Assistant** | Builds suitable teams without hidden profiling. | A transparent recommendation tool using project needs, availability, access, language, and learner preferences. |
| **Collaborative Problem-Solving Engine** | Helps teams think and work together. | A shared workflow for framing, roles, hypotheses, tasks, evidence, disagreement, synthesis, and review. |
| **Collective Intelligence Layer** | Combines group knowledge without erasing dissent. | A synthesis service that keeps attribution, consensus, minority positions, uncertainty, and evidence gaps. |
| **Life Capability Framework** | Teaches practical independence. | A competency framework for communication, finance, safety, citizenship, digital judgment, leadership, and service. |
| **Expert Pathway Engine** | Supports deep expertise without trapping learners. | A voluntary pathway service with foundations, mentors, authentic work, transfer routes, and qualification mappings. |
| **Mentor Network** | Connects learners with safe experts. | A verified and supervised network with identity, expertise, safeguarding, consent, boundaries, and suspension. |
| **Apprenticeship Orchestrator** | Makes workplace learning safer and clearer. | A governed workflow for eligibility, employer checks, insurance, tasks, supervision, incidents, evidence, and withdrawal. |
| **Family Workspace** | Shares useful information without exposing private learning. | A relationship-aware portal with age, consent, privacy, correction, revocation, and audit controls. |
| **Teacher Knowledge Commons** | Lets teachers share what works and what failed. | A provenance-aware resource commons with creator rights, context, evidence, review, and version history. |
| **School Operating Control Plane** | Connects learning and school operations. | A policy-governed orchestration layer for schedules, staff, rooms, devices, curriculum, evidence, and system health. |
| **School Digital Twin** | Tests changes before the school makes them. | A versioned simulation model for timetables, staffing, rooms, support, cost, access, energy, and uncertainty. |
| **Autonomous School Improvement Engine** | Suggests school improvements but cannot apply them alone. | An evidence-driven recommendation workflow with alternatives, equity review, pilot, approval, and rollback. |
| **School Environment Intelligence** | Checks whether rooms support learning. | A non-identifying sensor and reporting layer for temperature, air, noise, light, occupancy bands, and quality. |
| **Universal Accessibility Engine** | Adapts access without lowering expectations. | A user-controlled transformation and interface layer for visual, auditory, motor, cognitive, language, and bandwidth needs. |
| **AI Literacy Curriculum** | Teaches learners how to use and question AI. | A curriculum covering limits, hallucination, bias, privacy, verification, attribution, deepfakes, and accountability. |
| **Explainable AI Observatory** | Shows how important AI actions happened. | A trace console for models, prompts, retrieval, policies, uncertainty, human decisions, corrections, and incidents. |
| **Guardian Policy Engine** | Checks whether an action is allowed. | A policy-as-code decision service using role, purpose, age, data, consent, jurisdiction, model, and risk. |
| **SecureBoard Guardian** | Keeps emergency video sealed from routine viewing. | A threshold-encrypted evidence system with zero normal viewers, physical quorum, legal gate, and minimum-window export. |
| **OMEGA Seal Sandbox** | Lets learners experiment without reaching real school systems. | A capability-isolated execution environment with quotas, no default network, output inspection, and destruction. |
| **Child-Safe Communication Layer** | Keeps communication inside clear boundaries. | A verified-channel service with role limits, moderation, reporting, blocking, timing, and evidence preservation. |
| **Offline Neural Mesh** | Keeps school working when the internet fails. | A local-first identity, content, model, policy, event, and synchronization architecture. |
| **Local Model Foundry** | Runs approved AI models on school-controlled systems. | A signed model packaging and evaluation service with hardware profiles, rollback, and capability limits. |
| **Print and Paper Bridge** | Keeps essential work possible without devices. | A printable fallback for lessons, assessment, attendance, projects, evidence, communication, and emergencies. |
| **Education Operating System** | Connects ScholaForge and approved school systems. | A governed integration plane for identity, workflows, events, policy, contracts, interoperability, and health. |
| **Universal School Connector** | Moves data through approved standards. | A replaceable adapter layer for SIS, LMS, identity, timetable, library, assessment, credential, and reporting systems. |
| **EduVerse** | Provides a governed world of learning resources and experiences. | A curated content ecosystem with provenance, safety, accessibility, localization, rights, and offline packaging. |
| **World Knowledge Network** | Connects schools with trusted external knowledge. | A governed federation with universities, libraries, museums, labs, experts, and public institutions. |
| **Innovation Marketplace** | Lets schools exchange verified educational innovations. | A signed marketplace for activities, tools, processes, simulations, research, and learner inventions. |

## 4. Global Non-Negotiable Rules

1. Teachers remain responsible professionals.
2. Learners retain rights to explanation, correction, appeal, access, and appropriate challenge.
3. AI may support decisions. It may not independently make high-impact educational decisions.
4. Personalization must not become permanent profiling.
5. Accessibility support must not lower competency credit automatically.
6. Hidden emotion recognition and biometric attention scoring are prohibited.
7. Consequential outputs require evidence, policy checks, and human oversight.
8. Essential learning must continue during internet or model failure.
9. Every release requires tests, evidence, rollback, and accountable approval.
10. Legal, medical, financial, safeguarding, certification, and deployment claims require qualified human review.

---

# PART I — SHORT PLAIN-LANGUAGE BLUEPRINT

This part explains the project in direct language.

It is intentionally easier to read.

The governed technical rules appear in Part II and later parts.

## 0A. ScholaForge Foundational Declaration

ScholaForge does not assume that the current school model can be repaired only by adding better software.

It recognizes that many conventional structures were designed for standardization, administrative efficiency, age grouping, fixed schedules, uniform content delivery, and comparison through common tests. Those structures can produce positive outcomes, but they can also fail learners whose pace, abilities, interests, needs, or circumstances do not match the assumed middle.

ScholaForge therefore introduces a different destination:

> A human development system in which every learner builds strong foundations, discovers strengths, develops deep expertise, contributes meaningfully, and retains dignity, privacy, freedom, and the right to change direction.

This is not implemented by destroying existing education overnight.

Schools contain:

* learners who need continuity;
* teachers with professional expertise;
* legal responsibilities;
* public qualifications;
* families who need predictability;
* buildings and infrastructure;
* curriculum obligations;
* examination systems;
* staff contracts;
* safeguarding procedures;
* community trust.

ScholaForge therefore uses **progressive replacement**.

The existing system continues where necessary while new structures are introduced, tested, validated, improved, and gradually expanded. Features are added without silently removing established safeguards or qualifications.

The transition follows this rule:

> Preserve what protects people. Replace what unnecessarily limits human development.

---

## 0B. Human Potential First

Education exists to develop people.

Technology exists to support education.

AI exists to support people.

Data exists to improve learning.

No subsystem may reverse this order.

Every feature, policy, algorithm, workflow, and investment must answer:

> Does this help a human being grow without violating dignity, freedom, safety, privacy, fairness, or meaningful human relationships?

A feature that improves administrative efficiency but harms learners does not pass.

A feature that increases scores by creating fear, surveillance, dependency, or exclusion does not pass.

A feature that appears innovative but cannot explain its human benefit does not pass.

---

## 0C. The Twelve Principles of ScholaForge

### 1. Every Learner Can Grow

No learner is permanently defined by one result, diagnosis, behavior, language level, family background, or historical performance.

### 2. Personalization Without Stigma

Learners receive different routes, supports, and challenges without public ranking or humiliating labels.

### 3. Human Dignity Is Non-Negotiable

No person may be reduced to a score, prediction, risk category, or economic value.

### 4. Evidence Over Assumption

Important decisions rely on reviewable evidence, visible uncertainty, and correction mechanisms.

### 5. Human Accountability

AI may assist, organize, retrieve, simulate, and recommend. Humans remain accountable for consequential decisions.

### 6. Learning Through Creation

Learners deepen understanding by building, investigating, explaining, performing, teaching, and contributing.

### 7. Privacy by Design

Private information is minimized, purpose-bound, protected, and challengeable.

### 8. Accessibility From the Start

Inclusion is built into the original design rather than added after exclusion occurs.

### 9. Continuous Improvement

Learners, teachers, activities, policies, and the platform improve through evidence and reflection.

### 10. Community Over Isolation

Families, mentors, professionals, universities, public institutions, and communities can participate through governed roles.

### 11. Explainability by Default

Every consequential recommendation, pathway, evaluation, and intervention must be understandable and open to challenge.

### 12. Human Potential as the Final Outcome

The objective is not merely successful examination performance. It is the development of capable, ethical, creative, knowledgeable, resilient, and contributing human beings.

---

## 0D. What ScholaForge Replaces Gradually

ScholaForge does not begin by deleting the existing timetable, curriculum, classroom, examination, or teacher role.

It introduces alternatives in controlled stages.

| Conventional Pattern               | Transitional ScholaForge Pattern        | Long-Term ScholaForge Pattern                                        |
| ---------------------------------- | --------------------------------------- | -------------------------------------------------------------------- |
| one task for the class             | shared objective with selected variants | continuous private mastery routing                                   |
| fixed lesson sequence              | teacher-led adaptive lesson             | pathway-based learning journeys                                      |
| marks as primary evidence          | marks plus competency evidence          | rich mastery, contribution, and expertise profile                    |
| teacher as information transmitter | teacher as planner and coach            | teacher as learning architect, mentor, researcher, and ethical guide |
| age as main grouping rule          | age group plus flexible workshops       | dynamic grouping by objective, readiness, interest, and project      |
| subject isolation                  | interdisciplinary projects added        | connected knowledge and competency graph                             |
| end-of-term correction             | continuous feedback                     | continuous evidence and pathway adjustment                           |
| school-only learning               | approved external experiences           | school-community-university-industry learning ecosystem              |
| standard classroom                 | selected movement and project zones     | adaptive learning studios and creation environments                  |
| administrative data collection     | purpose-bound data                      | learner-controlled educational evidence ecosystem                    |

The transition does not assume that every conventional structure is harmful in every context. It identifies structures that should remain temporarily, structures that protect safety and continuity, and structures that can be replaced after evidence demonstrates a better alternative.

---

## 0E. ScholaForge as a Human Development Architecture

ScholaForge is not only school software.

It is an architecture connecting:

* foundational knowledge;
* personalized learning;
* projects;
* practical creation;
* mentorship;
* community contribution;
* scientific investigation;
* life skills;
* professional exploration;
* expertise development;
* wellbeing-supporting environments;
* transparent qualifications;
* lifelong learning records.

Learning may occur:

* in a classroom;
* at home;
* in a laboratory;
* in a workshop;
* in a library;
* in nature;
* in a community center;
* in a university;
* in a workplace;
* through an approved online environment;
* through independent creation.

The school remains a trusted center, but it is no longer the only recognized place where learning can happen.

---

## 0F. Reinvented Definitions

### Reinvented Curriculum

Curriculum becomes more than a list of content to cover.

```text
Human challenge
    ↓
Question
    ↓
Investigation
    ↓
Knowledge and skill acquisition
    ↓
Creation or application
    ↓
Evidence
    ↓
Competency
    ↓
Reflection
    ↓
Growth
```

Foundational knowledge remains mandatory where necessary. The difference is that learners encounter knowledge through meaningful routes and apply it in increasingly complex contexts.

### Reinvented Classroom

The classroom becomes a learning studio.

The teacher may:

* explain;
* orchestrate;
* mentor;
* observe;
* question;
* moderate;
* connect learners with experts;
* design challenges;
* evaluate evidence;
* protect the learning culture.

Learners may:

* investigate;
* build;
* discuss;
* practice;
* teach peers;
* perform;
* simulate;
* prototype;
* reflect;
* revise.

### Reinvented Teacher

The teacher is not removed.

The role expands into:

* learning architect;
* mentor;
* coach;
* ethical guide;
* community builder;
* activity designer;
* evidence reviewer;
* researcher;
* human inspiration;
* safeguarding authority.

AI reduces repetitive work so teachers can invest more time in human judgment and relationships.

### Reinvented Learner

The learner becomes:

* explorer;
* inventor;
* researcher;
* creator;
* collaborator;
* reflective thinker;
* teacher of others;
* community contributor;
* developing expert.

### Reinvented Success

Success includes:

* foundational mastery;
* deep domain knowledge;
* transfer;
* creativity;
* ethical judgment;
* communication;
* contribution;
* resilience;
* collaboration;
* independence;
* expertise;
* continued capacity to learn.

### Reinvented Time

Time becomes more flexible without removing structure.

Learners may need different amounts of time to reach the same foundation. Timetables gradually include:

* common instruction;
* focused workshops;
* personalized practice;
* project blocks;
* mentorship;
* deep-work periods;
* community learning;
* reflection and recovery.

---

## 0G. The Transition Covenant

ScholaForge adopts a formal transition covenant.

### It Will Preserve

* child safeguarding;
* teacher responsibility;
* recognized qualifications;
* legal duties;
* public accountability;
* accessibility rights;
* curriculum foundations;
* family communication;
* continuity for learners;
* appeal and correction;
* auditability;
* emergency procedures.

### It Will Gradually Replace

* one-size-fits-all task assignment;
* permanent ability grouping;
* opaque grading;
* purely passive instruction;
* repetitive administrative work;
* unnecessary surveillance;
* disconnected school software;
* rigid subject isolation;
* learning without application;
* qualifications that hide actual competencies;
* pathways determined by early labels.

### It Will Introduce Only After Validation

* automated recommendations;
* flexible grouping;
* expert pathways;
* external mentor participation;
* cross-school evidence;
* new credential models;
* school-wide operational optimization;
* collective intelligence;
* AI-supported planning;
* adaptive schedules.

---

## 0H. The Five-Layer Transition Model

### Layer 1 — Compatibility

ScholaForge operates alongside current systems.

It can import or connect to:

* curriculum standards;
* school information systems;
* timetables;
* assignments;
* grades;
* identity systems;
* family communication;
* recognized reporting.

**End result:** the school gains new capabilities without losing operational continuity.

### Layer 2 — Augmentation

Teachers gain:

* ActivityForge;
* Lesson Studio;
* TwinTeach;
* MySAGA;
* INSIGHT;
* accessibility support;
* retrieval;
* offline tools.

Existing lessons remain possible.

**End result:** teacher workload decreases and learning becomes more responsive.

### Layer 3 — Parallel Learning Pathways

Selected classes or subjects introduce:

* private mastery routing;
* project blocks;
* interdisciplinary quests;
* mentor participation;
* alternative evidence;
* flexible workshops.

Traditional reporting continues in parallel.

**End result:** the school can compare the new model with the old one without forcing immediate full conversion.

### Layer 4 — Structural Reorganization

After validation, the school can gradually reorganize:

* schedules;
* learning spaces;
* grouping;
* teacher teams;
* assessment cycles;
* community partnerships;
* expert pathways;
* qualification evidence.

**End result:** the operating model begins to reflect human development rather than uniform delivery.

### Layer 5 — Human Development School

The mature model uses:

* strong common foundations;
* personalized routes;
* deep expertise pathways;
* interdisciplinary challenges;
* real-world contribution;
* recognized competency evidence;
* learner-controlled growth records;
* human mentorship;
* school-community-university-industry collaboration.

**End result:** learners graduate with foundations, expertise, evidence, purpose, and the ability to continue learning.

---

## 0I. Expert Development Architecture

ScholaForge aims to produce capable general citizens and deep experts across many fields.

Expert development does not begin by narrowing children too early.

It follows a staged model.

### Stage 1 — Broad Foundations

Every learner develops:

* literacy;
* numeracy;
* scientific understanding;
* digital judgment;
* communication;
* ethics;
* civic understanding;
* physical development;
* artistic exposure;
* practical independence.

### Stage 2 — Guided Exploration

Learners experience many domains through:

* projects;
* laboratories;
* workshops;
* arts;
* debate;
* coding;
* engineering;
* care;
* entrepreneurship;
* nature;
* community service.

### Stage 3 — Strength Recognition

MySAGA, INSIGHT, teachers, mentors, and the learner identify:

* repeated strengths;
* sustained interests;
* unusual growth;
* high transfer;
* strong creative contribution;
* preferred working environments.

### Stage 4 — Focused Pathway

The learner enters deeper experiences in one or more fields while maintaining core foundations.

### Stage 5 — Apprenticeship and Mentorship

The learner works with:

* expert teachers;
* professionals;
* universities;
* research institutions;
* craftspeople;
* public services;
* approved employers.

### Stage 6 — Independent Contribution

The learner completes work that has value beyond the classroom:

* research;
* prototype;
* performance;
* publication;
* social project;
* business concept;
* engineering solution;
* artistic portfolio;
* community intervention.

### Stage 7 — Verified Expertise Profile

The learner receives an evidence-backed profile showing:

* foundations;
* advanced competencies;
* projects;
* mentor reviews;
* practical performance;
* contribution;
* uncertainty;
* future development needs.

This profile complements or maps to recognized qualifications during transition.

---

## 0J. Expert Pathway Families

ScholaForge must support many forms of excellence.

Initial pathway families include:

* mathematics and theoretical reasoning;
* science and research;
* engineering and robotics;
* computing and AI;
* medicine, health, and care;
* environmental systems;
* agriculture and food;
* architecture and construction;
* skilled trades and craftsmanship;
* language and communication;
* law, public service, and civic leadership;
* economics, finance, and entrepreneurship;
* arts, music, performance, and design;
* teaching and human development;
* psychology and social understanding;
* sport and physical performance;
* logistics and transport;
* media and public information;
* hospitality and community services;
* interdisciplinary invention.

A learner may combine pathways.

Examples:

* biology + design;
* mathematics + music;
* engineering + environmental science;
* language + diplomacy;
* care + robotics;
* arts + entrepreneurship.

---

## 0K. End-to-End Learner Development Journey

### Entry

1. The learner joins with minimum necessary information.
2. Existing qualifications and support needs are imported lawfully.
3. The learner and family receive understandable rights information.
4. MySAGA begins with uncertainty rather than assumptions.

### Foundation

1. The learner participates in shared foundational learning.
2. Private Mastery Routing adapts tasks.
3. Teachers confirm important interpretations.
4. INSIGHT collects competency evidence.

### Exploration

1. Quest Engine offers varied domains.
2. Passion Discovery identifies voluntary patterns.
3. Talent Constellation shows emerging strengths.
4. Learners can request new domains not suggested by the system.

### Development

1. Career Genome proposes exploration, not destiny.
2. Human Mentor Engine introduces safeguarded mentors.
3. Project Studio supports increasingly complex work.
4. Innovation Passport records verified contribution.
5. Memory Garden preserves learner-selected milestones.

### Expertise

1. The learner selects one or more focus pathways.
2. Expert teachers and mentors define progressive challenges.
3. School, university, industry, or community environments provide authentic experience.
4. INSIGHT verifies depth, independence, transfer, and contribution.
5. Human Potential Engine explains possible next steps.

### Graduation or Transition

The learner leaves with:

* recognized qualifications where required;
* foundational competency record;
* expertise profile;
* project and innovation portfolio;
* mentor and reviewer evidence;
* private mastery proofs;
* future pathway options;
* learner-controlled narrative of growth.

---

## 0L. End-to-End Teacher Transition Journey

### Phase 1 — Support

The teacher uses ScholaForge for planning, retrieval, accessibility, and activity creation.

### Phase 2 — Assisted Personalization

The teacher reviews task variants and MySAGA recommendations.

### Phase 3 — Evidence-Based Assessment

The teacher uses INSIGHT alongside existing grades.

### Phase 4 — Learning Architecture

The teacher designs project blocks, workshops, and interdisciplinary journeys.

### Phase 5 — Mentorship and Research

The teacher mentors pathways, collaborates with experts, and studies what improves learning.

### End Result

The teacher is not displaced.

The role becomes more professional, more creative, more relational, and less dominated by repetitive administration.

---

## 0M. Transition Governance

Every school transition requires:

* baseline assessment;
* learner and staff consultation;
* legal and policy mapping;
* safeguarding review;
* accessibility review;
* infrastructure assessment;
* pilot scope;
* success and harm indicators;
* teacher preparation;
* family communication;
* rollback conditions;
* independent review;
* staged expansion decision.

No school may claim transformation because software was installed.

Transformation is demonstrated only when:

* learning outcomes improve;
* learner harm decreases;
* access improves;
* teachers retain meaningful control;
* privacy is preserved;
* inequity is not increased;
* families understand the model;
* recognized progression remains available;
* failures are corrected.

## 1A. Dual-Blueprint Reading Model

ScholaForge is intentionally documented twice inside one blueprint.

### Blueprint A — Plain-Language Product Blueprint

This layer explains the project for:

* teachers;
* learners;
* families;
* school leaders;
* school boards;
* public authorities;
* investors;
* legal and privacy reviewers;
* people without software or AI expertise.

For every feature, it answers:

1. **What is it?**
2. **Why does it exist?**
3. **What problem does it solve in a real school?**
4. **What does a person actually experience?**
5. **Why is the design different from ordinary education software?**
6. **What is the real end result?**
7. **What could go wrong?**
8. **What protections prevent harm?**

### Blueprint B — Technical and Operational Blueprint

This layer explains the same system for:

* architects;
* developers;
* security teams;
* data teams;
* AI engineers;
* deployment teams;
* auditors;
* integrators;
* testing teams.

For every feature, it defines:

1. architecture;
2. data boundaries;
3. permissions;
4. states;
5. APIs;
6. events;
7. retrieval behavior;
8. security;
9. evidence;
10. tests;
11. failure handling;
12. rollback;
13. implementation status.

### One Feature, Two Explanations

The plain-language and technical layers are not separate products. They are two views of the same capability.

A feature is incomplete when:

* technical people can understand it but teachers cannot;
* teachers can understand the promise but engineers cannot determine how it works;
* benefits are described without safeguards;
* safeguards are described without the real educational purpose;
* a workflow is listed without explaining its final outcome.

### Mandatory Segment Explanation Contract

Every present and future ScholaForge segment must contain:

```text
PLAIN-LANGUAGE NAME
WHAT IT IS
WHY IT EXISTS
REAL-WORLD EXAMPLE
END-TO-END HUMAN EXPERIENCE
REAL END RESULT
WHO BENEFITS
WHAT IT MUST NEVER BECOME
TECHNICAL IDENTITY
DATA AND DECISION LOGIC
PERMISSIONS AND SAFEGUARDS
RETRIEVAL AND EVIDENCE
FAILURE AND RECOVERY
ACCEPTANCE TESTS
IMPLEMENTATION STATUS
```

This is a permanent documentation rule.

---

## PART A — PLAIN-LANGUAGE PRODUCT BLUEPRINT

## A1. ScholaForge in One Explanation

ScholaForge is a school platform designed around one basic reality:

> Children do not learn at the same speed, in the same way, or through the same strengths.

Most school systems organize teaching around the middle of a class. One lesson, one task, one pace, and one grading model are often given to everyone. This can work reasonably well for learners close to the assumed average. It can leave other learners behind, while also failing to challenge those who are ready to go further.

ScholaForge changes this without separating children into permanent labels.

Each learner receives:

* the same dignity;
* access to common educational goals;
* an individual route toward those goals;
* tasks appropriate to current readiness;
* support appropriate to actual need;
* opportunities to develop exceptional strengths;
* evidence-based recognition of progress.

The platform is not intended to decide a child’s value, intelligence, future, or social worth. It is intended to identify the most useful next learning step.

## A2. The Real End Result of ScholaForge

At the end of a school year, the intended result is not that every learner appears identical.

The intended result is that every learner can show:

* what they understand;
* what they can perform;
* how they improved;
* what support helped;
* which competencies they verified;
* which fields show strong potential;
* where more development is needed;
* what next pathway is suitable.

A learner may be strongest in mathematics, engineering, language, care, design, music, practical construction, science, leadership, sport, or another domain. ScholaForge is designed to help that strength become visible and develop, while still protecting foundational learning.

---

## A3. MySAGA — A Private Educational Twin

### What It Is

MySAGA is a private educational AI companion for one learner.

It remembers authorized learning evidence, notices patterns, helps the learner understand progress, and recommends the next useful task. It is not a public ranking profile and not a hidden permanent judgment.

### Why It Exists

A classroom teacher may be responsible for many learners at the same time. Even an excellent teacher cannot continuously remember every attempt, misunderstanding, strength, preferred explanation, and successful support method for every learner.

MySAGA helps preserve that context.

### Real-World Example

Two learners are studying fractions.

* Learner A understands visual models but struggles with written instructions.
* Learner B already understands basic fractions and needs a more abstract challenge.
* Learner C missed a prerequisite involving division.
* Learner D understands the concept and could apply it to cooking or engineering.

The class shares the same educational topic, but MySAGA helps each learner receive a suitable next task.

### What the Learner Experiences

The learner sees:

* a clear explanation of the goal;
* a task suited to current readiness;
* optional support;
* reasons the task was chosen;
* the ability to ask for more challenge or more help;
* visible progress;
* a way to correct the system.

The learner does not see labels such as “low intelligence,” “weak group,” or “inferior level.”

### Real End Result

The learner spends more time in productive challenge:

* not repeating work already mastered;
* not being abandoned with impossible work;
* not being defined by one old result;
* developing both foundations and personal strengths.

### What It Must Never Become

MySAGA must never become:

* a permanent intelligence score;
* a psychological diagnosis;
* a secret behavior profile;
* a disciplinary prediction engine;
* a tool that permanently limits opportunity;
* a commercial advertising profile;
* a replacement for teachers.

---

## A4. Private Mastery Routing — Different Task, Equal Dignity

> **Feature ID:** SF-PMR-001

### What It Is

Private Mastery Routing is the mechanism that gives different learners different task variants while preserving a shared class objective.

### Why It Exists

A median task is optimized for an imaginary average learner.

That creates three common problems:

1. some learners do not yet have the prerequisites;
2. some learners can succeed only with a different explanation or format;
3. some learners are ready for a deeper challenge but remain under-stimulated.

Giving everyone the same task may look equal, but it does not create equal opportunity to learn.

### The Core Reasoning

Fairness does not always mean sameness.

A wheelchair ramp and a staircase do not provide the same route, but they can provide equal access to the same building. In the same way, two learning tasks can differ while aiming at the same curriculum objective.

### Real-World Example

Shared objective:

> Understand proportional relationships.

Possible private variants:

* visual shopping comparison with guided examples;
* standard ratio calculations;
* a multi-step budget planning task;
* an engineering scaling problem;
* an algebraic proof or programming model.

Nobody in the class needs to know who received which readiness band.

### End-to-End Human Experience

1. The teacher selects the common learning objective.
2. MySAGA reviews only authorized evidence for each learner.
3. It estimates current readiness by domain, not by one permanent level.
4. It creates a minimized request for a suitable task.
5. The school system returns approved task variants.
6. Each learner receives a neutral-looking task.
7. The learner works with suitable support.
8. New evidence is produced.
9. MySAGA updates its confidence.
10. The teacher receives useful teaching insight without unnecessary exposure.
11. The next task can become easier, harder, differently explained, or differently expressed.

### Real End Result

The goal is maximum useful growth for each learner.

A lower starting point does not mean a permanently lower destination. A higher starting point does not guarantee automatic success. Every task is a next step, not a fixed identity.

### Protection Against Undermining Learners

The system must:

* avoid public levels;
* avoid IQ labels;
* avoid permanent tracks;
* permit challenge and correction;
* test for systematic under-challenging;
* offer opportunities to move upward whenever evidence supports it;
* distinguish knowledge difficulty from language, disability, interface, stress, or missing access;
* require human review for high-impact progression decisions.

### What the Main Server Receives

The main server receives only the minimum task requirement, not the learner’s complete private history.

Example:

```yaml
objective: proportional_reasoning
readiness: developing_application
challenge_target: reachable_extension
support:
  - visual_model
  - worked_example
evidence_format:
  - practical_solution
offline_required: true
excluded:
  - private_reflections
  - family_information
  - unrelated_grades
  - diagnostic_labels
```

### Real End Result at Year End

The learner receives an achievement profile that shows:

* shared foundational outcomes;
* domain-specific mastery;
* depth of performance;
* growth;
* independence;
* strengths;
* suitable future pathways.

---

## A5. INSIGHT Evaluation — Evidence-Calibrated Student Evaluation

> **Feature ID:** SF-INS-001

### What It Is

INSIGHT is the ScholaForge evaluation model.

It does not reduce a learner to one examination mark. It combines demonstrated competency, quality of evidence, level of independence, complexity, improvement, transfer, reviewer judgment, and uncertainty.

### Why It Exists

A single score can hide important differences.

Two learners may both receive 70%, but:

* one may understand deeply and make small calculation mistakes;
* one may memorize without understanding;
* one may require significant support;
* one may transfer the skill to a new problem;
* one may demonstrate the same competency through practical work rather than writing.

INSIGHT records what the learner can actually demonstrate.

### The Six Components

1. **Evidence Portfolio** — the work, performance, explanation, project, observation, or assessment evidence.
2. **Competency Mapping** — the curriculum skill the evidence may demonstrate.
3. **Double-Rater Review** — important decisions may be independently reviewed.
4. **Kappa Calibration Gate** — reviewer agreement is measured so the school evaluates reliability, not only the learner.
5. **Human Decision Receipt** — the accountable educator confirms the decision and explanation.
6. **Private Mastery Capsule** — a learner can prove mastery without exposing all raw marks or personal history.

### Real-World Example

A learner demonstrates scientific reasoning through:

* a laboratory investigation;
* an oral explanation;
* a written conclusion;
* correction after feedback;
* application to a new experiment.

INSIGHT can recognize the competency across multiple forms rather than depending on one timed written test.

### How Grading Works

The system considers:

* the targeted competency;
* complexity;
* accuracy;
* reasoning;
* independence;
* support used;
* improvement;
* transfer to a new situation;
* consistency across evidence;
* confidence in the decision.

AI may organize evidence and suggest a mapping. A qualified human remains accountable for consequential decisions.

### Why Two Reviewers Matter

Evaluation can vary between teachers.

For important decisions, two reviewers can independently assess the same evidence. Their agreement is measured using an approved reliability method such as Cohen’s kappa.

If agreement is too low:

* the system does not pretend the result is reliable;
* moderation occurs;
* the rubric may need clarification;
* additional evidence may be collected.

### Real End Result

The final result is not merely “78%.”

It is an understandable record showing:

* competencies demonstrated;
* evidence used;
* level of independence;
* depth;
* strengths;
* unresolved uncertainty;
* human decision;
* challenge route;
* privacy-preserving proof where needed.

### What It Must Never Become

INSIGHT must never:

* allow AI to silently issue final high-impact grades;
* confuse effort with mastery;
* punish disability-related formats;
* compare unrelated strengths through one universal intelligence score;
* hide uncertainty;
* prevent appeal;
* use emotion recognition;
* use private SAGA reflections as grading evidence without explicit lawful authorization.

---

## A6. ActivityForge and Activities Library

### What They Are

**ActivityForge** creates, adapts, validates, and improves educational activities.

**Activities Library** stores approved activities so teachers can find and reuse them.

### Why They Exist

Teachers often spend large amounts of time searching, rewriting, formatting, and adapting materials. Generic AI can produce ideas quickly, but those ideas may be unsafe, unrealistic, inaccessible, unlicensed, or unrelated to the curriculum.

ScholaForge combines generation with validation and teacher control.

### Real-World Example

A teacher requests:

> A 35-minute group activity about water conservation for 24 learners, with no internet, two learners needing reading support, and one wheelchair user.

ActivityForge retrieves:

* the curriculum objective;
* approved school resources;
* accessibility guidance;
* available classroom materials;
* similar successful activities.

It proposes structured variants and explains its choices.

### Real End Result

The teacher receives a usable activity rather than unstructured AI text:

* objective;
* timing;
* materials;
* instructions;
* grouping;
* differentiation;
* accessibility;
* safety;
* evidence;
* fallback;
* provenance.

The approved version can be reused and improved without silently replacing the version previously taught.

---

## A7. Lesson Studio

### What It Is

Lesson Studio is the complete planning environment from educational objective to reflection.

### Why It Exists

A lesson is more than content. It requires timing, sequence, explanation, practice, transitions, accessibility, resources, checking understanding, and fallback plans.

### Real End Result

The teacher enters the classroom with:

* a clear purpose;
* appropriate activities;
* personalized task variants;
* accessible materials;
* an offline fallback;
* an evidence plan;
* a live orchestration plan;
* a post-lesson reflection route.

---

## A8. TwinTeach Live

### What It Is

TwinTeach Live allows a teacher and AI assistant to work together during a lesson.

### Why It Exists

During teaching, a teacher cannot simultaneously explain, observe every learner, search resources, adapt every task, manage devices, and document evidence.

The AI can assist, but it must remain subordinate to the teacher.

### What It Does

It may:

* suggest an alternative explanation;
* find a relevant approved example;
* prepare a task variant;
* summarize class progress;
* flag missing evidence;
* offer accessibility support;
* prepare a transition.

### What It Must Never Do

It must not:

* take control of the classroom;
* discipline learners;
* make final grading decisions;
* speak or act without visible teacher authorization where required;
* secretly profile learners;
* replace professional judgment.

### Real End Result

The teacher gains more capacity for human teaching rather than becoming a supervisor of an autonomous machine.

---

## A9. MotionClass and No-ID Motion Layer

### What They Are

MotionClass makes physical classroom movement part of learning.

The No-ID Motion Layer detects movement patterns without identifying individual people.

### Why They Exist

Learning is not limited to sitting, reading, and clicking. Some concepts are better understood through movement, collaboration, positioning, physical models, or spatial challenges.

### Real-World Example

Learners stand in different zones to represent:

* phases of matter;
* positions in a debate;
* parts of a sentence;
* coordinates;
* historical alliances;
* possible solutions.

The system detects that zones are occupied without determining which named child is in each location.

### Real End Result

The classroom becomes an educational interface while avoiding facial recognition and persistent identity tracking.

---

## A10. Class Symphony and Activity Conductor

### What They Are

**Class Symphony** is the teacher-facing live classroom experience.

**Activity Conductor** is the engine coordinating devices, timing, groups, displays, motion zones, accessibility settings, and AI assistance.

### Why They Exist

A modern activity may involve:

* teacher display;
* learner devices;
* shared board;
* timers;
* groups;
* offline nodes;
* movement;
* task variants;
* evidence collection.

Without orchestration, the technology increases teacher workload.

### Real End Result

The teacher launches one coherent classroom experience instead of manually operating many disconnected tools.

---

## A11. Knowledge Galaxy and ScholaGraph Retrieval

### What They Are

**Knowledge Galaxy** is the visible map of curriculum, concepts, prerequisites, activities, evidence, and resources.

**ScholaGraph Retrieval Fabric** is the underlying system that finds the right information.

### Why They Exist

Ordinary search returns documents containing similar words. Education requires more:

* Is this source approved?
* Is it current?
* Is it suitable for this learner?
* Does it match the curriculum?
* Is it available offline?
* Is there a conflicting or newer source?
* Is the user permitted to see it?

### Real End Result

When ScholaForge recommends something, the user can inspect:

* what sources were used;
* why they were selected;
* which policy applied;
* whether evidence is strong or weak;
* whether a newer source exists;
* what the system could not confirm.

The platform returns **INSUFFICIENT EVIDENCE** rather than inventing an answer.

---

## A12. Quest Engine

### What It Is

Quest Engine organizes learning into meaningful missions and longer journeys.

### Why It Exists

Tasks can feel disconnected from purpose. Quests connect skills to challenges, projects, inquiry, teamwork, and real-world outcomes.

### Real End Result

Learners understand:

* what they are trying to achieve;
* why it matters;
* what evidence demonstrates success;
* what choices are available;
* how the mission connects to their strengths and future pathways.

It must not use addictive reward mechanics or punish learners for breaking streaks.

---

## A13. Learning DNA

### What It Is

Learning DNA is a transparent map of current learning evidence inside MySAGA.

### Why It Exists

A learner’s current state cannot be represented accurately by one grade.

### What It Contains

* verified competencies;
* current goals;
* evidence;
* uncertainty;
* temporary needs;
* preferred supports;
* learner corrections;
* teacher-confirmed observations.

### Real End Result

The learner and teacher see a changing map of learning, not a permanent judgment of the person.

---

## A14. EduVerse

### What It Is

EduVerse is the governed ecosystem for sharing educational resources, activities, lessons, assessments, simulations, prompts, and SAGA skills.

### Why It Exists

Schools repeatedly create valuable materials that remain isolated. Public sharing can help, but unmanaged sharing introduces licensing, quality, privacy, and safety problems.

### Real End Result

Schools can reuse high-quality content while preserving:

* ownership;
* license;
* provenance;
* version;
* approval;
* accessibility information;
* curriculum alignment;
* retirement and replacement history.

---

## A15. OMEGA Seal Sandbox

### What It Is

OMEGA Seal is a protected environment where learners and teachers can safely experiment with code, AI, simulations, files, and tools.

### Why It Exists

Experimentation is essential for learning, but unrestricted software and AI tools can access files, networks, personal data, or unsafe capabilities.

### Real End Result

Learners can explore and build while the system limits:

* data access;
* network access;
* executable capabilities;
* duration;
* storage;
* external effects.

A failed experiment remains contained.

---

## A16. Offline Neural Mesh

### What It Is

Offline Neural Mesh keeps core education and AI assistance working when the internet is unavailable or intentionally not used.

### Why It Exists

Education must not stop because:

* connectivity fails;
* cloud services are unavailable;
* a school has limited bandwidth;
* policy requires local processing;
* a family lacks stable internet.

### Real End Result

Lessons, approved resources, task routing, local AI assistance, evidence collection, and synchronization can continue locally. The user can always see what is current, what is stale, and what will synchronize later.

---

## A17. SecureBoard Guardian

### What It Is

SecureBoard Guardian preserves encrypted classroom safety evidence that nobody can normally view.

### Why It Exists

Schools may need evidence after exceptional violence, abuse, vandalism, or another serious incident. Ordinary camera systems create constant surveillance risk because administrators can often browse recordings.

SecureBoard separates recording from viewing.

### Real End Result

During normal operation:

> SEALED — ZERO VIEWERS.

A recording can be accessed only through the defined emergency process, including the five-person physically present school-board quorum and the required legal authorization gate.

It cannot be used for routine teacher evaluation, student monitoring, attendance, behavior scoring, or curiosity.

---

## A18. Guardian Policy Engine and Evidence Spine

### What They Are

**Guardian Policy Engine** decides whether an action is allowed before it occurs.

**Evidence Spine** records why an important action occurred and what supported it.

### Why They Exist

AI systems often perform actions first and explain later. ScholaForge reverses this:

1. identify purpose;
2. check permission;
3. minimize data;
4. require approval;
5. act;
6. create evidence.

### Real End Result

A school can answer:

* Who requested this?
* Why was it permitted?
* What data was used?
* What AI was involved?
* Who approved it?
* What result followed?
* Can it be challenged?
* Can it be rolled back?

---

## A19. Workspaces

### Teacher Workspace

The teacher sees planning, activities, lessons, live classroom control, evidence, assessments, collaboration, and reflection in one place.

**Real result:** less tool switching and more time for teaching.

### Learner Workspace

The learner sees goals, tasks, MySAGA, quests, feedback, projects, evidence, privacy controls, and progress.

**Real result:** the learner understands what to do, why it was selected, and how to improve.

### Family Workspace

Families see approved summaries, communication, support information, and rights controls.

**Real result:** meaningful involvement without exposing private learner reflections or sealed recordings.

### Administrator Workspace

Administrators manage school setup, users, policies, devices, content approval, models, interoperability, audit, and service health.

**Real result:** school-wide governance without unrestricted access to private content.

### Oversight Workspace

Authorized reviewers inspect controls, evidence, incidents, release gates, and non-content audit records.

**Real result:** independent accountability without creating universal surveillance access.

---

## A20. Complete Plain-Language End-to-End School Day

### Before the Lesson

1. The teacher selects a curriculum objective.
2. Lesson Studio retrieves approved resources.
3. ActivityForge proposes activities.
4. MySAGA privately determines suitable task variants.
5. The teacher reviews the plan.
6. Offline resources are prepared.

### During the Lesson

1. The teacher launches Class Symphony.
2. Activity Conductor coordinates devices and groups.
3. Learners receive private task variants.
4. TwinTeach Live provides teacher-controlled assistance.
5. MotionClass can turn physical space into part of the activity.
6. MySAGA provides private support.
7. Evidence is collected only for declared educational purposes.

### After the Lesson

1. Learners submit work and reflection.
2. INSIGHT maps evidence to competencies.
3. AI may suggest interpretations.
4. Teachers review consequential decisions.
5. Important evaluations can receive a second independent rating.
6. MySAGA updates the private learning twin.
7. Learners can inspect and challenge relevant records.
8. Teachers improve the activity or lesson for future use.

### At the End of the Term

1. Evidence is consolidated.
2. Competencies and growth are reviewed.
3. Strengths and future pathways are identified.
4. Uncertainty remains visible.
5. Private mastery proofs can be issued.
6. No learner is reduced to one opaque score.

---

## A21. Human Potential Engine — The Unifying ScholaForge Mission

> **Feature ID:** SF-HPE-001

### What It Is

The Human Potential Engine is the unifying layer that connects learning, strengths, projects, mentoring, progression, wellbeing, opportunity, and future pathways.

It does not try to predict a child’s destiny.

It helps the learner understand:

* what they have already demonstrated;
* what they are beginning to do well;
* what kinds of challenges produce strong growth;
* which interests continue over time;
* what opportunities could help them develop further;
* which future pathways may be worth exploring.

### Why It Exists

Most educational systems are structured around completion:

* finish the lesson;
* pass the test;
* complete the year;
* obtain the certificate.

That is necessary, but incomplete.

A learner may finish school without understanding:

* what they are unusually good at;
* where they made their greatest progress;
* which environments help them perform;
* which kinds of problems energize them;
* what meaningful pathways are available.

The Human Potential Engine turns years of educational evidence into a learner-controlled growth narrative.

### Real-World Example

A learner may show:

* strong spatial reasoning in design projects;
* persistence during engineering challenges;
* leadership during team missions;
* weaker performance in long written examinations;
* exceptional improvement when using visual planning.

The system does not conclude, “This learner must become an engineer.”

It explains:

> “Across several years, you repeatedly demonstrated strength in spatial design, practical problem-solving, and leading technical projects. Architecture, engineering, product design, robotics, or skilled construction may be worth exploring.”

### Real End Result

The learner leaves school with more than marks.

They leave with:

* verified competencies;
* evidence of growth;
* a portfolio;
* a record of projects and contributions;
* recognized strengths;
* human mentors;
* possible future pathways;
* the right to reject or correct the system’s interpretation.

### What It Must Never Become

It must never become:

* a destiny score;
* a social sorting engine;
* a replacement for personal choice;
* an automated career assignment system;
* a permanent low-opportunity profile;
* a commercial recruitment database;
* a reason to deny broad education.

---

## A22. Career Genome — Evidence-Based Pathway Exploration

> **Feature ID:** SF-CGN-001

### What It Is

Career Genome is a pathway-exploration system that connects demonstrated competencies, interests, projects, working preferences, and strengths to possible study and career families.

### Why It Exists

Traditional career guidance often depends on:

* a short questionnaire;
* a single counseling session;
* family expectations;
* stereotypes;
* incomplete knowledge of available pathways.

Career Genome uses long-term, explainable evidence while preserving human choice.

### Real-World Example

A learner consistently demonstrates:

* strong biological reasoning;
* empathy during collaborative projects;
* careful observation;
* interest in practical care;
* discomfort with highly abstract mathematics.

The system may suggest exploring:

* nursing;
* physiotherapy;
* laboratory support;
* occupational therapy;
* public health;
* environmental field work.

It also explains why each pathway appeared and what additional experiences would help test the fit.

### Real End Result

Career guidance becomes an exploration process rather than a one-time verdict.

The learner can:

* inspect evidence;
* try pathway simulations;
* meet mentors;
* complete short projects;
* reject suggestions;
* discover alternatives;
* update the profile over time.

---

## A23. Passion Discovery Engine

> **Feature ID:** SF-PDE-001

### What It Is

The Passion Discovery Engine identifies areas the learner repeatedly chooses, returns to, develops, or explores voluntarily.

### Why It Exists

Some learners know their interests early. Others have never encountered the activity that could awaken them.

Schools often measure required performance but not sustained voluntary curiosity.

### Reasoning

Interest is not inferred from attention cameras, emotional recognition, or hidden psychological profiling.

It is inferred only from transparent signals such as:

* voluntary project choices;
* repeated topic selection;
* self-initiated questions;
* optional extension work;
* portfolio patterns;
* learner-declared interests;
* teacher-confirmed observations.

### Real End Result

The system periodically asks:

> “You have chosen environmental design projects several times. Would you like to try a more advanced challenge, meet a mentor, or explore a related field?”

The learner remains free to say no.

---

## A24. Talent Constellation

> **Feature ID:** SF-TCN-001

### What It Is

Talent Constellation is a visual map of demonstrated and emerging strengths across multiple domains.

### Why It Exists

A single grade average hides the shape of a learner’s capabilities.

Two learners with the same average may have completely different profiles.

### What It Shows

* verified strengths;
* emerging strengths;
* growth over time;
* preferred evidence forms;
* breadth and depth;
* cross-domain combinations;
* uncertainty;
* untested areas.

### Real End Result

The learner sees a changing constellation rather than a rank.

For example:

* advanced spatial design;
* strong collaborative leadership;
* developing written argument;
* high practical problem-solving;
* untested musical composition.

The system does not treat untested as weak.

---

## A25. Human Mentor Engine

> **Feature ID:** SF-HME-001

### What It Is

The Human Mentor Engine connects learners with suitable people when human guidance would be more valuable than another AI response.

### Why It Exists

AI can explain, organize, and suggest. It cannot replace:

* lived experience;
* professional identity;
* trust;
* encouragement;
* moral responsibility;
* apprenticeship;
* human example.

### Mentor Types

* teacher;
* senior learner;
* school alumni;
* university student;
* professional;
* craftsperson;
* researcher;
* community volunteer;
* career counselor;
* approved industry partner.

### Real End Result

A learner interested in robotics may receive:

* an introduction to a local engineer;
* a supervised workshop;
* a short mentor conversation;
* a project review;
* a pathway explanation.

The platform facilitates the connection but does not expose the learner directly to unverified adults.

### Safeguards

* verified identity;
* safeguarding checks;
* institutional approval;
* supervised channels;
* time-limited access;
* recorded purpose;
* no private off-platform contact by default;
* reporting and removal mechanisms.

---

## A26. School Digital Twin

> **Feature ID:** SF-SDT-001

### What It Is

The School Digital Twin is a simulation of the school’s schedules, spaces, resources, devices, staffing, energy, accessibility, and operational constraints.

### Why It Exists

Schools frequently make changes before knowing their effects.

A timetable change may create:

* teacher overload;
* inaccessible room assignments;
* device shortages;
* overcrowded corridors;
* lost transition time;
* resource conflicts;
* transport problems.

### Real-World Example

Before changing the timetable, the school simulates:

* room capacity;
* teacher workload;
* learner movement;
* accessibility;
* meal periods;
* device availability;
* specialist room use;
* energy impact.

### Real End Result

Schools test important operational decisions before affecting real people.

### What It Must Never Become

It must not become a continuous behavioral replica of individual children.

Its primary purpose is operational simulation, not personal surveillance.

---

## A27. Education Operating System

> **Feature ID:** SF-EOS-001

### What It Is

The Education Operating System is the integration layer connecting learning, policy, identity, content, buildings, devices, families, transport, community, and school administration.

### Why It Exists

Schools often depend on many disconnected systems.

The same information is repeatedly entered, permissions become inconsistent, and no one can easily understand the full workflow.

### Real End Result

A school can define one governed process across systems.

Example:

> A new learner enrolls, receives authorized accounts, accessibility settings, curriculum access, offline content, device permissions, family communication, and policy notices without duplicating data across ten disconnected tools.

---

## A28. School Innovation Marketplace

> **Feature ID:** SF-SIM-001

### What It Is

The School Innovation Marketplace is a governed exchange for educational inventions, activities, tools, templates, projects, and validated school improvements.

### Why It Exists

Teachers and learners create valuable innovations, but those inventions are often lost inside one classroom.

### What Can Be Shared

* activities;
* lesson methods;
* simulations;
* accessibility adaptations;
* school process improvements;
* learner inventions;
* research protocols;
* open educational tools;
* OMEGA sandbox templates.

### Real End Result

Schools become producers of educational innovation, not only consumers.

Creators retain attribution, licensing choices, review history, and evidence.

---

## A29. Life Skills Framework

> **Feature ID:** SF-LSF-001

### What It Is

The Life Skills Framework recognizes competencies that traditional subjects often overlook.

### Domains

* communication;
* negotiation;
* collaboration;
* conflict resolution;
* financial literacy;
* digital judgment;
* entrepreneurship;
* ethics;
* leadership;
* critical thinking;
* decision-making;
* self-management;
* civic participation;
* practical independence.

### Why It Exists

Academic knowledge is necessary, but learners also need to navigate real life.

### Real End Result

Life skills become visible through evidence, projects, simulations, community work, and reflection rather than being reduced to vague behavior grades.

---

## A30. Living Competency Graph

> **Feature ID:** SF-LCG-001

### What It Is

The Living Competency Graph keeps curriculum and capability definitions connected to a changing world.

### Why It Exists

Curriculum, technology, industry, science, and society change.

A static competency framework becomes outdated.

### Real End Result

The system can show:

* which competencies are current;
* which have been superseded;
* what new capabilities are emerging;
* how existing learning connects to new fields;
* which school programs may need review.

No change becomes official without authorized human governance.

---

## A31. Scientific Learning Lab

> **Feature ID:** SF-SLL-001

### What It Is

Scientific Learning Lab allows schools to evaluate whether educational methods actually help.

### Why It Exists

Schools adopt new methods and technologies without always knowing whether they improve learning.

### Example Questions

* Does movement improve understanding of geometry?
* Does peer explanation improve writing?
* Does offline AI support reduce teacher workload?
* Which task format improves transfer?
* Does a new timetable reduce fatigue?

### Real End Result

Schools become learning organizations.

They can run ethical, approved, privacy-preserving evaluations and share aggregated findings.

### Safeguards

* ethics review;
* lawful basis;
* data minimization;
* no coercive experimentation;
* no disadvantage for refusal;
* preregistered outcomes where appropriate;
* publication of negative results;
* human interpretation.

---

## A32. Explainable AI Observatory

> **Feature ID:** SF-EAO-001

### What It Is

The Explainable AI Observatory is the school’s window into every AI-assisted recommendation and system behavior.

### What It Shows

* AI model used;
* purpose;
* input categories;
* retrieved sources;
* recommendation;
* alternatives considered;
* confidence;
* uncertainty;
* policy restrictions;
* human decision;
* later correction;
* performance over time.

### Why It Exists

AI should not be trusted because it appears intelligent.

It should be inspected because it affects real people.

### Real End Result

Teachers, leaders, auditors, and authorized users can understand where AI helps, where it fails, and whether it should remain active.

---

## A33. School Environment Intelligence

> **Feature ID:** SF-SEI-001

### What It Is

School Environment Intelligence monitors environmental conditions that may affect comfort, safety, and learning.

### Possible Signals

* temperature;
* air quality;
* carbon dioxide;
* lighting;
* noise level;
* room occupancy;
* schedule density;
* transition pressure;
* device reliability.

### Why It Exists

A learner may appear inattentive when the room is overheated, noisy, poorly ventilated, inaccessible, or exhausting.

### Real End Result

The school improves the environment instead of interpreting every difficulty as a problem inside the learner.

### Boundary

It is not a medical diagnostic system and does not infer individual emotional states.

---

## A34. Universal Accessibility Engine

> **Feature ID:** SF-UAE-001

### What It Is

The Universal Accessibility Engine makes accessibility part of the original design rather than an afterthought.

### Why It Exists

Traditional systems create one standard version and later add special accommodations.

This causes delay, stigma, and inconsistent quality.

### What It Can Adapt

* text complexity;
* language;
* visual layout;
* contrast;
* captions;
* audio;
* keyboard navigation;
* alternative input;
* timing;
* reading support;
* symbol support;
* task modality;
* offline and low-bandwidth format.

### Real End Result

More learners can participate through ordinary product controls without being publicly marked as exceptions.

---

## A35. Family Intelligence Portal

> **Feature ID:** SF-FIP-001

### What It Is

The Family Intelligence Portal gives families useful explanations instead of only marks and warnings.

### What Families Can Receive

* strengths;
* recent growth;
* current goals;
* completed projects;
* support suggestions;
* conversation prompts;
* approved home activities;
* attendance or communication notices;
* rights and correction pathways.

### Real End Result

Families understand how to support learning without gaining inappropriate access to private learner reflections, teacher-only notes, or sealed evidence.

---

## A36. World Knowledge Network

> **Feature ID:** SF-WKN-001

### What It Is

The World Knowledge Network allows schools to exchange educational resources, projects, evidence, and innovations across regions and countries.

### Why It Exists

Schools repeatedly solve the same problems in isolation.

### Real End Result

A school in one country can discover:

* an accessible science activity;
* a multilingual lesson;
* a climate project;
* an offline deployment pattern;
* evidence that an activity worked in a similar environment.

The network shares governed resources and aggregated learning, not private learner profiles.

---

## A37. Innovation Passport

> **Feature ID:** SF-INP-001

### What It Is

The Innovation Passport records significant learner creations and contributions.

### It May Include

* projects;
* prototypes;
* inventions;
* research;
* performances;
* competitions;
* community service;
* leadership;
* entrepreneurship;
* publications;
* patents or registered designs where applicable;
* peer collaboration;
* verified impact.

### Real End Result

A learner can present a rich record of contribution, not only a transcript of grades.

---

## A38. Autonomous School Improvement Engine

> **Feature ID:** SF-ASIE-001

### What It Is

The Autonomous School Improvement Engine identifies possible improvements in school operations and educational practice.

### Why It Exists

Schools collect data but often lack the time to turn it into coherent improvement proposals.

### What It May Recommend

* timetable changes;
* workload balancing;
* accessibility improvements;
* curriculum-gap review;
* activity replacement;
* device reallocation;
* room-use changes;
* energy reduction;
* policy clarification;
* staff-development priorities.

### Important Boundary

It may recommend, simulate, and explain.

It may not silently change staffing, policy, grading, access, or learner pathways.

### Real End Result

School leadership receives evidence-based options with predicted benefits, risks, affected groups, required approvals, and rollback plans.

---

## A39. Collective Intelligence Layer

> **Feature ID:** SF-CIL-001

### What It Is

The Collective Intelligence Layer learns from aggregated patterns across participating schools.

### Why It Exists

One school may not have enough evidence to discover that:

* an activity consistently works;
* a particular explanation helps a learner group;
* a deployment pattern fails;
* a resource is outdated;
* a timetable design causes problems.

### Real End Result

Participating schools improve together while retaining control of local data.

### Safeguards

* aggregation;
* privacy thresholds;
* differential privacy where appropriate;
* no school or learner re-identification;
* no public league tables;
* opt-in governance;
* provenance;
* local validation before adoption.

---

## A40. Memory Garden

> **Feature ID:** SF-MGD-001

### What It Is

Memory Garden is the human narrative layer of MySAGA.

### Why It Exists

A transcript remembers grades. It may forget:

* the first successful speech;
* the first robot;
* a difficult failure overcome;
* an important teacher comment;
* a project that changed the learner’s interests;
* a meaningful act of leadership;
* a personal reflection.

### Real End Result

The learner graduates with an optional, private, editable story of growth.

The learner decides what remains private, what is exported, and what is forgotten.

### What It Must Never Become

It must not become a permanent institutional diary that the learner cannot control.

---

## A41. How the Expansion Works as One System

These features are not independent decorations.

They form a connected growth cycle:

```text
MySAGA observes authorized learning evidence
        ↓
Private Mastery Routing selects the next useful challenge
        ↓
Activities, lessons, quests, mentors, and projects create experience
        ↓
INSIGHT evaluates demonstrated competency
        ↓
Learning DNA and Talent Constellation show development
        ↓
Passion Discovery and Career Genome propose exploration
        ↓
Innovation Passport and Memory Garden preserve meaningful achievement
        ↓
Human Potential Engine explains possible future pathways
        ↓
School Digital Twin and Improvement Engine improve the environment
        ↓
Scientific Learning Lab and Collective Intelligence test what works
        ↓
World Knowledge Network shares governed improvements
```

The final purpose is not optimization for the highest possible score.

The final purpose is:

> to help every learner develop foundations, discover strengths, make informed choices, and build a meaningful future without losing dignity, privacy, or human freedom.

---

# PART II — GOVERNED MASTER PROJECT BLUEPRINT

This is the canonical operating and implementation specification.

It preserves the full human-first school model.

It also defines architecture, data, AI, security, privacy, accessibility, interoperability, delivery, testing, evidence, and rollback.

## 0. DOCUMENT AUTHORITY AND EXECUTION RULE

This document is the canonical target architecture for ScholaForge version 12.0.

It preserves all previously defined ScholaForge capabilities and integrates the following major expansions:

* complete daily school operating model;
* learner agency and non-manipulative motivation;
* advanced AI tutoring;
* collaborative problem-solving;
* project, workshop, laboratory, and maker execution;
* practical life-capability education;
* mentorship and apprenticeship governance;
* authentic assessment and qualification translation;
* family participation with privacy boundaries;
* teacher professional systems;
* school leadership and operational control;
* healthy learning conditions;
* multilingual learning;
* accessibility and special educational support;
* AI literacy;
* cybersecurity and safeguarding;
* offline and low-resource deployment;
* interoperability and migration;
* economic deployment models;
* research validation;
* implementation phases;
* measurable release gates;
* complete human and technical workflows.

The implementing team shall not remove, weaken, rename, or silently replace existing capabilities.

Any future modification shall be classified as one of the following:

* ADDITION;
* CLARIFICATION;
* TECHNICAL IMPROVEMENT;
* GOVERNANCE IMPROVEMENT;
* SAFETY IMPROVEMENT;
* VALIDATION UPDATE;
* DEPRECATION WITH MIGRATION PLAN.

No capability may be described as operational unless implementation and validation evidence exists.

Required implementation-state labels:

* CONCEPT;
* TARGET_SPECIFICATION;
* ARCHITECTURE_APPROVED;
* PROTOTYPE;
* PILOT_READY;
* PILOTED;
* VALIDATED;
* LIMITED_PRODUCTION;
* PRODUCTION_READY;
* SUSPENDED;
* RETIRED.

## 1. EXECUTIVE VISION

ScholaForge is not an ordinary learning-management system, digital textbook, AI tutor, school dashboard, or automated grading product.

It is an end-to-end human-development and school-operating architecture.

Its purpose is to gradually replace the weakest characteristics of conventional education without abruptly destabilizing schools, teachers, learners, families, legal obligations, or recognized qualifications.

ScholaForge combines:

* foundational academic mastery;
* human mentorship;
* personalized learning;
* project execution;
* practical capability;
* creative production;
* scientific inquiry;
* professional pathways;
* life preparation;
* ethical reasoning;
* social contribution;
* learner agency;
* teacher authority;
* family partnership;
* explainable AI;
* privacy-preserving data use;
* evidence-bound decisions;
* offline continuity;
* qualification compatibility.

The system does not assume that every learner should learn the same subject:

* at the same speed;
* through the same explanation;
* in the same environment;
* with the same evidence method;
* for the same future purpose.

It also rejects the opposite error: removing shared knowledge, intellectual discipline, or educational structure in the name of personalization.

ScholaForge therefore combines a shared educational foundation with individualized development.

## 2. NON-TECHNICAL EXPLANATION

For learners, ScholaForge is a school that understands what they are learning, what they have demonstrated, what they are interested in, where they need support, and how their learning connects to real life.

For teachers, it is a professional control center that helps them plan, teach, adapt, assess, support, and improve without surrendering authority to artificial intelligence.

For families, it is a clear and respectful view of progress, goals, support needs, rights, and school communication without exposing private learner information unnecessarily.

For school leaders, it is an operating system that connects learning, staffing, schedules, curriculum, projects, evidence, safety, policies, infrastructure, and school improvement.

For governments and qualification bodies, it is an inspectable evidence system that can demonstrate what was taught, what was learned, how decisions were made, and which human authority approved consequential outcomes.

For society, it is a pathway from school knowledge to competent, responsible, innovative, and professionally prepared citizens.

## 3. TECHNICAL EXPLANATION

ScholaForge is a modular, event-driven, policy-governed educational platform composed of:

* identity and access services;
* consent and rights management;
* curriculum and competency graphs;
* learner-development services;
* knowledge orchestration;
* retrieval and evidence services;
* teacher workspaces;
* learner workspaces;
* family workspaces;
* assessment services;
* project and workshop services;
* mentorship and apprenticeship services;
* credential services;
* school operations;
* simulation and digital-twin services;
* offline synchronization;
* observability;
* governance;
* safety;
* security;
* interoperability;
* export and portability.

Consequential actions are controlled through:

* role-based access control;
* attribute-based access control;
* policy-as-code;
* evidence sufficiency checks;
* model-confidence thresholds;
* human approval gates;
* immutable receipts;
* appeal and correction workflows;
* rollback mechanisms.

The architecture supports:

* fully managed cloud deployment;
* school-controlled cloud;
* regional infrastructure;
* on-premises deployment;
* hybrid deployment;
* local school servers;
* intermittent connectivity;
* fully offline educational operation.

## 4. FOUNDATIONAL EDUCATIONAL DECLARATION

ScholaForge is based on twelve foundational declarations.

### 4.1 EVERY LEARNER CAN DEVELOP

Current performance is evidence of a learner’s present position, not proof of permanent capacity.

### 4.2 KNOWLEDGE MATTERS

Learner agency does not replace foundational knowledge. Independent thinking requires vocabulary, facts, concepts, methods, and intellectual discipline.

### 4.3 UNDERSTANDING MATTERS MORE THAN COMPLETION

Task completion is not accepted as proof of learning.

### 4.4 HUMAN DEVELOPMENT IS MULTIDIMENSIONAL

Education must develop:

* knowledge;
* reasoning;
* practical capability;
* communication;
* creativity;
* ethics;
* collaboration;
* independence;
* professional readiness;
* civic responsibility.

### 4.5 TEACHERS REMAIN RESPONSIBLE PROFESSIONALS

AI supports teachers. It does not replace their legal, ethical, pedagogical, or relational responsibilities.

### 4.6 LEARNERS HAVE RIGHTS

Learners have rights to:

* understandable decisions;
* privacy;
* correction;
* appeal;
* appropriate challenge;
* human support;
* accessibility;
* data portability;
* protection from manipulation;
* protection from permanent profiling.

### 4.7 PERSONALIZATION MUST NOT BECOME DETERMINISM

The system may propose possible pathways but may not declare a learner’s destiny.

### 4.8 ASSESSMENT MUST REPRESENT REAL CAPABILITY

Assessment must use multiple evidence types and acknowledge uncertainty.

### 4.9 FAILURE IS INFORMATION

Failure is evidence for adaptation and learning, not a permanent negative identity.

### 4.10 TECHNOLOGY MUST SERVE EDUCATION

Education shall not be redesigned merely to increase device use, automation, or data collection.

### 4.11 ACCESS MUST NOT DEPEND ON PERFECT CONNECTIVITY

Essential education must remain possible during internet, cloud, electricity, model, or infrastructure failure.

### 4.12 CHANGE MUST BE GRADUAL AND REVERSIBLE

Schools require staged transition, evidence, training, community understanding, and rollback.

## 5. PRIMARY OUTCOMES

ScholaForge shall produce learners capable of:

* reading critically;
* writing clearly;
* reasoning mathematically;
* understanding scientific methods;
* investigating evidence;
* solving unfamiliar problems;
* communicating ideas;
* collaborating responsibly;
* creating useful work;
* managing practical responsibilities;
* understanding digital systems;
* recognizing misinformation;
* learning independently;
* changing direction when evidence requires it;
* contributing to communities;
* entering further education, skilled work, entrepreneurship, research, public service, or creative professions.

The system shall not optimize solely for:

* examination scores;
* content completion;
* platform engagement;
* screen time;
* attendance without learning;
* superficial badges;
* institutional convenience.

## 6. SYSTEM ACTORS

### 6.1 LEARNER

Owns or controls appropriate parts of their learning identity, goals, portfolio, interests, optional reflections, and long-term evidence.

### 6.2 TEACHER

Plans and conducts learning, reviews evidence, adapts instruction, approves consequential educational actions, and maintains professional responsibility.

### 6.3 LEARNING SUPPORT PROFESSIONAL

Provides accessibility, language, special educational, counseling, or intervention support according to professional scope.

### 6.4 MENTOR

Provides domain guidance within verified qualifications, safeguarding rules, and communication boundaries.

### 6.5 FAMILY OR GUARDIAN

Receives appropriate information, provides consent where legally required, supports the learner, and participates in major decisions.

### 6.6 SCHOOL LEADER

Controls institutional settings, staffing, policy, school improvement, deployment scope, and operational decisions.

### 6.7 SAFEGUARDING OFFICER

Receives and investigates safeguarding concerns under applicable law and school procedures.

### 6.8 CURRICULUM OR SUBJECT EXPERT

Reviews content, mappings, assessments, and knowledge quality.

### 6.9 SYSTEM ADMINISTRATOR

Maintains infrastructure without gaining unnecessary access to educational or personal content.

### 6.10 AUDITOR OR REGULATOR

Receives authorized evidence about compliance, system behavior, educational decisions, and institutional controls.

### 6.11 COMMUNITY PARTNER

Provides approved projects, resources, expertise, or real-world opportunities.

### 6.12 EMPLOYER OR APPRENTICESHIP PARTNER

Offers governed workplace experiences and competency evidence.

### 6.13 RESEARCHER

Uses approved, minimized, and appropriately consented data for educational validation.

## 7. RIGHTS AND AUTHORITY MODEL

### 7.1 LEARNER RIGHTS

Every learner has the right to:

* know why an activity was recommended;
* request another explanation;
* request human help;
* challenge incorrect information;
* correct profile information;
* reject optional inferred interests;
* see significant AI involvement;
* appeal an assessment;
* change an educational pathway;
* access approved evidence about themselves;
* request export;
* request deletion where legally permitted;
* use accessibility accommodations;
* learn without behavioral manipulation;
* avoid compulsory biometric monitoring.

### 7.2 TEACHER AUTHORITY

Teachers retain final authority over:

* instructional adaptation;
* classroom implementation;
* approved activities;
* assessment interpretation;
* grades;
* intervention;
* referral;
* project suitability;
* student grouping;
* classroom safety.

### 7.3 FAMILY BOUNDARIES

Families may receive:

* progress summaries;
* current goals;
* required support;
* attendance information;
* upcoming decisions;
* official communications;
* applicable consent requests.

Families do not automatically receive:

* private learner reflections;
* protected peer information;
* confidential staff notes;
* sealed safeguarding evidence;
* unnecessary health information;
* optional mentor communications;
* raw behavioral analytics.

### 7.4 AI AUTHORITY LIMIT

AI may:

* retrieve;
* summarize;
* explain;
* propose;
* compare;
* generate drafts;
* identify possible inconsistencies;
* recommend review;
* adapt low-risk presentation.

AI may not independently:

* diagnose;
* punish;
* suspend;
* expel;
* classify disability;
* determine abuse;
* determine guilt;
* assign final grades;
* permanently restrict pathways;
* authorize dangerous work;
* expose protected information;
* make employment decisions.

## 8. COMPLETE SCHOLAFORGE CAPABILITY MAP

ScholaForge contains sixteen principal capability families.

1. Human Identity and Learner Development
2. Knowledge and Curriculum Orchestration
3. Teaching and Classroom Intelligence
4. Personalized and Adaptive Learning
5. Assessment and Evidence
6. Projects, Workshops, and Practical Creation
7. Expert Pathways and Professional Development
8. Life Capability and Human Independence
9. Collaboration and Collective Intelligence
10. Family and Community Partnership
11. Teacher Professional Development
12. School Operations and Improvement
13. Governance, Safety, and Security
14. Offline and Sovereign Infrastructure
15. Research and Validation
16. Transition, Deployment, and Ecosystem Integration

## 9. HUMAN IDENTITY AND LEARNER DEVELOPMENT

### 9.1 MYSAGA

PLAIN-LANGUAGE PURPOSE

MySAGA is the learner’s evolving learning story. It helps the learner and approved adults understand what has been learned, what evidence exists, which goals matter, and what possible next steps are available.

It is not a permanent personality label.

TECHNICAL PURPOSE

MySAGA is a learner-controlled longitudinal educational record built from:

* verified competency evidence;
* learner-selected goals;
* current curriculum progress;
* optional interests;
* projects;
* mentor input;
* teacher-reviewed observations;
* qualification mappings;
* accessibility preferences;
* learner corrections.

Required safeguards:

* evidence provenance;
* confidence values;
* data expiry;
* correction history;
* alternative interpretations;
* role-specific views;
* purpose limitation;
* selective forgetting;
* learner-visible logic.

MySAGA must clearly separate:

* verified fact;
* assessment result;
* teacher judgment;
* learner statement;
* AI inference;
* system recommendation;
* unknown information.

### 9.2 LEARNING DNA

PLAIN-LANGUAGE PURPOSE

Learning DNA describes educational conditions that currently help the learner understand and work effectively.

It does not describe biological DNA or fixed intelligence.

TECHNICAL PURPOSE

Learning DNA contains time-bounded, evidence-backed preferences and support observations such as:

* explanation format;
* practice spacing;
* preferred input methods;
* useful scaffolding;
* effective feedback timing;
* environmental needs;
* collaboration preferences;
* accessibility settings.

Every element requires:

* supporting evidence;
* date;
* confidence;
* owner;
* expiry or review date;
* learner correction;
* non-deterministic language.

### 9.3 TALENT CONSTELLATION

Maps multiple developing capabilities without reducing a learner to one score.

Possible domains include:

* analytical reasoning;
* spatial reasoning;
* communication;
* craftsmanship;
* creativity;
* scientific investigation;
* leadership;
* collaboration;
* technical execution;
* artistic expression;
* practical judgment;
* ethical reasoning.

The system displays patterns as changing constellations rather than rankings.

### 9.4 PASSION DISCOVERY

Helps learners explore interests through:

* short exposures;
* projects;
* expert conversations;
* simulations;
* practical activities;
* reflection;
* community problems.

Interest is learner-confirmed and may change.

### 9.5 CAREER GENOME

Shows multiple professional and educational pathways connected to:

* current competencies;
* selected interests;
* required qualifications;
* missing evidence;
* geographic availability;
* costs;
* labor-market information;
* apprenticeship opportunities;
* further education.

It must never state that a learner is “suitable” or “unsuitable” for an entire profession as a permanent conclusion.

### 9.6 HUMAN POTENTIAL ENGINE

PLAIN-LANGUAGE PURPOSE

The Human Potential Engine helps learners explore several possible futures and understand what each future requires.

TECHNICAL PURPOSE

The engine generates scenario-based development pathways using:

* learner aspirations;
* competency evidence;
* curriculum requirements;
* qualification rules;
* available opportunities;
* learner constraints;
* mentor and teacher input;
* current labor-market sources;
* uncertainty estimates.

Required output:

* possible pathway;
* required steps;
* current evidence;
* missing capabilities;
* alternative routes;
* risks;
* cost and time estimates;
* confidence;
* human reviewer;
* review date.

### 9.7 INNOVATION PASSPORT

Records meaningful evidence of:

* inventions;
* prototypes;
* experiments;
* publications;
* performances;
* community contributions;
* entrepreneurship;
* research;
* design;
* problem-solving;
* intellectual-property ownership.

### 9.8 MEMORY GARDEN

The Memory Garden is an optional, learner-controlled space for selected milestones, reflections, creations, and learning memories.

It is not part of routine scoring.

Learners may:

* keep entries private;
* share selected entries;
* delete optional entries;
* export content;
* withdraw consent.

### 9.9 LEARNER AGENCY CONTROL CENTER

Allows learners to:

* see why work was selected;
* choose approved alternatives;
* adjust challenge;
* request another learning format;
* propose projects;
* request a mentor;
* pause recommendations;
* challenge evidence;
* change a pathway;
* request human review.

### 9.10 GOAL CONTRACTS

Voluntary agreements between learner and teacher defining:

* goal;
* reason;
* expected evidence;
* support;
* learner responsibility;
* teacher responsibility;
* review date;
* modification conditions;
* completion criteria.

### 9.11 RECOVERY PATHWAYS

Structured support for:

* academic overload;
* repeated difficulty;
* absence;
* illness;
* family disruption;
* motivational loss;
* language transition;
* pathway regret;
* assessment anxiety;
* interrupted education;
* return to school.

The system proposes support but does not diagnose the learner.

## 10. KNOWLEDGE AND CURRICULUM ORCHESTRATION

### 10.1 KNOWLEDGE ORCHESTRATION ENGINE

PLAIN-LANGUAGE PURPOSE

The Knowledge Orchestration Engine finds, verifies, organizes, adapts, and explains knowledge for a specific learner, teacher, lesson, curriculum, age, language, and learning purpose.

TECHNICAL PURPOSE

The engine combines:

* intent analysis;
* query decomposition;
* curriculum mapping;
* competency mapping;
* source retrieval;
* evidence ranking;
* source contradiction analysis;
* knowledge graphs;
* jurisdiction filtering;
* temporal validity;
* accessibility adaptation;
* age suitability;
* language transformation;
* offline packaging;
* confidence calibration;
* abstention;
* human-review routing.

### 10.2 RETRIEVAL SEGMENTATION

Retrieved material shall be segmented according to meaning rather than arbitrary character size.

Required segment types:

* definition;
* concept;
* process;
* rule;
* exception;
* example;
* counterexample;
* evidence claim;
* formula;
* procedure;
* safety instruction;
* legal condition;
* historical interpretation;
* curriculum outcome;
* assessment criterion.

Each segment includes:

* segment identifier;
* source;
* location;
* semantic type;
* subject;
* difficulty;
* age suitability;
* jurisdiction;
* date;
* authority;
* review status;
* permissions.

### 10.3 QUERY DECOMPOSITION

Complex questions shall be divided into:

* core question;
* subquestions;
* prerequisite knowledge;
* disputed claims;
* current-information needs;
* jurisdictional conditions;
* required evidence types;
* prohibited assumptions.

### 10.4 SOURCE REGISTRY

Each source record contains:

* source identity;
* author;
* organization;
* publication date;
* version;
* jurisdiction;
* authority class;
* review status;
* permitted use;
* license;
* curriculum relevance;
* known conflicts;
* withdrawal status.

### 10.5 EVIDENCE PACKET

Every consequential knowledge output shall create an Evidence Packet containing:

* user purpose;
* interpreted question;
* selected sources;
* rejected sources;
* relevant passages;
* contradictions;
* assumptions;
* confidence;
* uncertainty;
* generated explanation;
* model used;
* human review requirement;
* timestamp;
* version.

### 10.6 CONTRADICTION GRAPH

When credible sources disagree, the system shall:

* identify the disagreement;
* preserve both claims;
* compare authority;
* compare date;
* compare jurisdiction;
* explain the uncertainty;
* avoid inventing a forced consensus;
* route high-impact disputes to a qualified reviewer.

### 10.7 KNOWLEDGE DECAY MONITOR

Detects possible outdated knowledge caused by:

* changed law;
* changed curriculum;
* scientific developments;
* withdrawn standards;
* corrected publications;
* updated safety guidance;
* broken sources;
* changed qualification requirements.

### 10.8 CURRICULUM GRAPH

Represents:

* curriculum outcomes;
* prerequisites;
* concepts;
* skills;
* evidence requirements;
* assessment criteria;
* age expectations;
* qualification relationships;
* cross-disciplinary links.

### 10.9 COMPETENCY GRAPH

Represents:

* competency definition;
* component skills;
* levels;
* observable evidence;
* assessment methods;
* dependencies;
* equivalent evidence;
* validity period;
* qualification mappings.

### 10.10 MULTILINGUAL LEARNING BRIDGE

Provides:

* bilingual explanations;
* domain vocabulary mapping;
* strong-language learning support;
* instructional-language transition;
* multilingual family communication;
* translation confidence;
* human review for high-impact communication.

The system shall not confuse language proficiency with subject knowledge.

### 10.11 EXPLANATION TRANSFORMATION ENGINE

Transforms approved content into:

* beginner explanation;
* expert explanation;
* analogy;
* worked example;
* counterexample;
* visual sequence;
* dialogue;
* story;
* simulation;
* practical activity;
* exam-oriented explanation;
* professional-domain explanation;
* plain-language version;
* accessible version.

### 10.12 PROMPT-INJECTION DEFENSE

Retrieved content is treated as untrusted data.

The engine shall:

* isolate embedded instructions;
* reject unauthorized commands;
* prevent retrieved text from modifying system policy;
* verify source identity;
* restrict tool access;
* log rejected instructions;
* preserve evidence for review.

## 11. TEACHING AND CLASSROOM INTELLIGENCE

### 11.1 TEACHER WORKSPACE

The Teacher Workspace contains:

* today’s classes;
* lesson objectives;
* learner support indicators;
* approved resources;
* assessments;
* projects;
* evidence awaiting review;
* communications;
* classroom controls;
* system explanations;
* professional resources.

### 11.2 TEACHER COPILOT

Supports:

* lesson planning;
* differentiation;
* resource retrieval;
* activity drafting;
* assessment drafting;
* rubric preparation;
* misconception analysis;
* accessibility adaptation;
* project design;
* family communication drafts;
* teacher reflection.

It cannot autonomously:

* assign final grades;
* punish learners;
* determine disability;
* close safeguarding cases;
* restrict a learner’s future;
* evaluate teacher employment.

### 11.3 TWINTEACH LIVE

PLAIN-LANGUAGE PURPOSE

TwinTeach Live acts as an additional instructional assistant during a lesson while the human teacher remains in control.

TECHNICAL PURPOSE

TwinTeach Live can:

* display explanations;
* generate examples;
* answer curriculum-grounded questions;
* provide vocabulary;
* support multilingual learners;
* generate checks for understanding;
* propose adaptations;
* provide offline fallback resources.

Required controls:

* teacher preview;
* teacher launch;
* one-tap disable;
* no hidden recording;
* no facial analysis;
* no biometric identification;
* model and source visibility;
* latency threshold;
* safe failure mode.

### 11.4 ACTIVITYFORGE

Generates and adapts learning activities using:

* curriculum objectives;
* learner age;
* available time;
* room;
* equipment;
* class size;
* accessibility;
* teacher expertise;
* safety;
* evidence needs;
* offline capability.

Every activity must contain:

* purpose;
* preparation;
* instructions;
* timing;
* resources;
* differentiation;
* accessibility;
* safety;
* evidence;
* reflection;
* fallback.

### 11.5 ACTIVITY CONDUCTOR

Coordinates multi-stage classroom activities.

Functions include:

* phase timing;
* group rotation;
* resource release;
* teacher checkpoints;
* movement transitions;
* evidence capture;
* exception handling;
* offline continuation.

### 11.6 CLASS SYMPHONY

Provides a teacher-controlled view of the class as a coordinated learning environment.

It shows:

* current activity phase;
* learner requests for help;
* group progress;
* resource needs;
* accessibility requirements;
* unresolved questions;
* required teacher decisions.

It shall not rank learners publicly or infer emotional states from surveillance.

### 11.7 MOTIONCLASS

Integrates safe movement into learning through:

* physical demonstrations;
* spatial reasoning;
* role-play;
* outdoor tasks;
* movement breaks;
* embodied science;
* mathematical positioning;
* collaborative movement activities.

Required safeguards:

* accessibility alternatives;
* non-camera mode;
* device-free mode;
* room-safety check;
* teacher control;
* equivalent non-movement option.

### 11.8 SOCRATIC TUTORING MODE

The AI tutor shall:

* ask calibrated questions;
* request reasoning;
* identify possible misconceptions;
* offer incremental hints;
* present alternative methods;
* distinguish confusion from uncertainty;
* refer to a teacher when evidence is insufficient.

### 11.9 STEP-SENSITIVE ASSISTANCE

Assistance levels:

1. encouragement;
2. restatement;
3. hint;
4. strategic question;
5. partial step;
6. worked example;
7. alternative method;
8. teacher referral.

The system shall use the lowest sufficient assistance level.

### 11.10 MISCONCEPTION ATLAS

Contains:

* misconception;
* likely causes;
* diagnostic questions;
* counterexamples;
* suitable explanations;
* teacher intervention;
* accessibility considerations;
* age suitability;
* evidence quality;
* correction history.

A single error shall never create a permanent learner label.

### 11.11 FOCUSED FOUNDATION BLOCK

A configurable academic block for:

* literacy;
* mathematics;
* science;
* language;
* digital judgment;
* curriculum-critical knowledge;
* adaptive practice;
* teacher mini-lessons;
* peer explanation;
* mastery checks;
* recovery support.

ScholaForge does not impose an arbitrary universal duration. Duration is determined by educational need, age, law, context, and evidence.

## 12. DAILY SCHOOL OPERATING MODEL

### 12.1 DAILY RHYTHM ENGINE

Generates editable school-day patterns based on:

* learner age;
* curriculum;
* school hours;
* teacher availability;
* rooms;
* equipment;
* accessibility;
* transport;
* cultural and religious requirements;
* project commitments;
* connectivity;
* support needs.

Required day templates:

* Conventional Transition Day;
* Foundation and Workshop Day;
* Project Studio Day;
* Research and Laboratory Day;
* Community Contribution Day;
* Expert Pathway Day;
* Apprenticeship Day;
* Examination Preparation Day;
* Recovery and Support Day;
* Fully Offline Day;
* Hybrid Home-School Day;
* Emergency Continuity Day.

### 12.2 EXAMPLE FOUNDATION AND WORKSHOP DAY

Phase 1:
Arrival, orientation, learner check-in, and daily goals.

Phase 2:
Focused foundation learning in literacy, mathematics, science, or language.

Phase 3:
Movement, reflection, and social reset.

Phase 4:
Teacher-led conceptual instruction.

Phase 5:
Workshop, project, laboratory, or practical capability.

Phase 6:
Collaborative problem-solving.

Phase 7:
Evidence capture and learner reflection.

Phase 8:
Teacher review and next-step planning.

### 12.3 FLEXIBILITY RULE

The schedule engine proposes. School leadership and teachers approve.

No generated timetable may assume:

* unavailable staff;
* unavailable rooms;
* nonexistent equipment;
* unauthorized working hours;
* impossible transport;
* inaccessible activities.

## 13. ASSESSMENT AND EVIDENCE

### 13.1 INSIGHT

PLAIN-LANGUAGE PURPOSE

INSIGHT determines what the evidence actually shows about learning and what remains uncertain.

TECHNICAL PURPOSE

INSIGHT combines:

* assessment results;
* project evidence;
* teacher observation;
* oral explanation;
* practical demonstration;
* learner reflection;
* peer feedback;
* mentor evidence;
* workplace evidence.

INSIGHT must distinguish:

* observed;
* inferred;
* verified;
* contradictory;
* insufficient;
* outdated;
* disputed.

### 13.2 EVIDENCE SPINE

The Evidence Spine is the traceable chain connecting:

* curriculum objective;
* learning activity;
* learner artifact;
* assessor;
* rubric;
* feedback;
* revision;
* moderation;
* competency conclusion;
* credential.

### 13.3 AUTHENTIC ASSESSMENT MODES

Supported methods:

* written assessment;
* oral defense;
* practical demonstration;
* experiment;
* research report;
* project;
* prototype;
* performance;
* teaching another learner;
* supervised simulation;
* portfolio review;
* workplace evidence;
* community contribution.

### 13.4 ASSESSMENT VALIDITY ENGINE

Before use, each assessment is checked for:

* objective alignment;
* content coverage;
* accessibility;
* difficulty;
* cultural bias;
* language load;
* prior teaching;
* scoring reliability;
* accommodation compatibility;
* answer leakage;
* AI-generation risk.

### 13.5 UNCERTAINTY-AWARE ASSESSMENT

Outcomes may include:

* demonstrated;
* strongly indicated;
* partially demonstrated;
* evidence inconsistent;
* not yet demonstrated;
* insufficient evidence;
* reassessment required.

The system shall not convert uncertainty into false precision.

### 13.6 MODERATION

Supports:

* second review;
* blind review;
* rubric calibration;
* assessor disagreement;
* expert review;
* evidence comparison;
* correction;
* appeal;
* version history.

### 13.7 APPEAL WORKFLOW

1. Learner or authorized representative submits appeal.
2. Original evidence is sealed.
3. Independent reviewer is assigned.
4. Assessment method and accessibility are checked.
5. Additional evidence may be permitted.
6. Decision is recorded.
7. Corrections propagate to dependent records.
8. Learner receives an understandable explanation.

### 13.8 AI-CONTRIBUTION DISCLOSURE

Artifacts may record:

* no AI use;
* AI brainstorming;
* AI explanation;
* AI editing;
* AI coding;
* AI media generation;
* AI content generation;
* human review completed.

The system evaluates the learner’s understanding, not only the quality of the final artifact.

### 13.9 CREDENTIAL TRANSLATION ENGINE

Maps ScholaForge evidence to:

* curriculum outcomes;
* national qualifications;
* vocational standards;
* university prerequisites;
* microcredentials;
* employer-readable competencies;
* digital credentials.

Each mapping includes:

* jurisdiction;
* framework version;
* mapping confidence;
* gaps;
* reviewer;
* approval date.

## 14. PROJECTS, WORKSHOPS, AND PRACTICAL CREATION

### 14.1 PROJECT OPERATING SYSTEM

Every project follows:

1. problem identification;
2. stakeholder analysis;
3. requirements;
4. constraints;
5. research;
6. evidence evaluation;
7. planning;
8. risk assessment;
9. budget and resources;
10. prototype;
11. testing;
12. failure analysis;
13. iteration;
14. documentation;
15. presentation;
16. reflection;
17. evidence review.

### 14.2 PROJECT STUDIO

Provides:

* project templates;
* team spaces;
* milestones;
* decision logs;
* evidence storage;
* mentor access;
* research tools;
* prototype records;
* peer review;
* publication controls.

### 14.3 MAKER AND LAB SAFETY ENGINE

Evaluates:

* learner age;
* supervision;
* tools;
* electricity;
* machinery;
* chemicals;
* biological risk;
* protective equipment;
* room suitability;
* emergency procedure;
* waste disposal;
* local legal requirements.

Unsafe instructions are blocked.

Qualified human approval is mandatory for regulated or hazardous work.

### 14.4 COMMUNITY PROBLEM MARKETPLACE

Verified organizations may submit real problems.

Every challenge requires:

* verified sponsor;
* educational purpose;
* safeguarding review;
* expected commitment;
* data requirements;
* intellectual-property terms;
* contact boundaries;
* publication permissions;
* conflict-of-interest declaration.

### 14.5 PUBLIC EXHIBITION MODE

Supports:

* project fairs;
* prototype demonstrations;
* research posters;
* performances;
* community presentations;
* portfolio defenses;
* expert panels;
* public speaking.

Public exposure requires appropriate learner and guardian control.

### 14.6 FAILURE LIBRARY

Stores protected evidence of:

* failed assumptions;
* unsuccessful tests;
* design errors;
* lessons learned;
* redesign decisions;
* recovery strategies.

Failure records shall not become permanent negative scoring.

### 14.7 SCIENTIFIC LEARNING LAB

Supports:

* research questions;
* hypotheses;
* experimental design;
* variables;
* controls;
* measurements;
* uncertainty;
* reproducibility;
* data analysis;
* peer review;
* scientific ethics;
* publication.

## 15. COLLABORATION AND COLLECTIVE INTELLIGENCE

### 15.1 TEAM FORMATION ASSISTANT

May consider:

* required project skills;
* learner-approved interests;
* availability;
* accessibility;
* language support;
* project roles;
* learner preferences;
* prior collaboration balance.

May not use:

* race;
* religion;
* hidden psychological profiles;
* family income;
* popularity;
* protected health information;
* political views.

Teachers approve consequential team assignments.

### 15.2 COLLABORATIVE PROBLEM-SOLVING ENGINE

Supports:

* shared problem definition;
* role selection;
* hypothesis generation;
* task decomposition;
* evidence collection;
* decision logs;
* disagreement records;
* peer review;
* synthesis;
* retrospective.

### 15.3 FAIR CONTRIBUTION EVIDENCE

Recognizes:

* planning;
* research;
* design;
* implementation;
* coordination;
* communication;
* conflict resolution;
* mentoring;
* testing;
* revision;
* presentation.

Contribution shall not be measured solely through clicks, keystrokes, messages, or screen time.

### 15.4 STRUCTURED DEBATE STUDIO

Supports:

* claim and evidence;
* opposing positions;
* ethical dilemmas;
* policy analysis;
* scientific disputes;
* historical interpretation;
* design review;
* legal reasoning.

### 15.5 COLLECTIVE INTELLIGENCE ENGINE

Aggregates group knowledge without erasing minority positions.

Required behavior:

* preserve source attribution;
* identify consensus;
* preserve dissent;
* show unresolved questions;
* identify evidence gaps;
* prevent majority opinion from being treated automatically as truth.

## 16. LIFE CAPABILITY AND HUMAN INDEPENDENCE

### 16.1 LIFE CAPABILITY FRAMEWORK

Domains:

* communication;
* collaboration;
* self-management;
* planning;
* decision-making;
* practical finance;
* entrepreneurship;
* civic responsibility;
* digital citizenship;
* media judgment;
* health literacy;
* safety awareness;
* environmental responsibility;
* household independence;
* mobility and navigation;
* legal awareness;
* relationship boundaries;
* conflict management;
* craftsmanship;
* creativity;
* leadership;
* service;
* ethical judgment.

### 16.2 WORKSHOP AND LIFE CAPABILITY BLOCK

Workshop examples:

* public speaking;
* negotiation;
* budgeting;
* contract comparison;
* first aid awareness;
* interview preparation;
* teamwork;
* civic participation;
* digital safety;
* media verification;
* household planning;
* entrepreneurship;
* environmental projects;
* practical repair;
* creative production.

### 16.3 PRACTICAL SIMULATION STUDIO

Simulation examples:

* create a household budget;
* compare service contracts;
* identify misinformation;
* plan a journey;
* organize an event;
* handle workplace conflict;
* prepare a job interview;
* design a small enterprise;
* understand public services;
* evaluate an online offer;
* respond to an emergency scenario.

The platform must state where professional legal, financial, medical, or emergency advice is required.

### 16.4 LIFE-CAPABILITY EVIDENCE

Evidence may include:

* demonstrated performance;
* supervised simulation;
* project application;
* reflection;
* mentor review;
* peer review;
* community application.

The system shall not generate a social-worth score.

## 17. EXPERT PATHWAYS AND PROFESSIONAL DEVELOPMENT

### 17.1 EXPERT PATHWAY ARCHITECTURE

Expert pathways combine:

* deep domain knowledge;
* foundational prerequisites;
* tools and methods;
* practical work;
* mentors;
* projects;
* public evidence;
* ethical standards;
* professional communication;
* qualification mapping.

### 17.2 PATHWAY STAGES

Stage 1: Exploration

Short exposure to domains, tools, problems, and professionals.

Stage 2: Foundation

Required knowledge and basic methods.

Stage 3: Guided Practice

Structured tasks with teacher or mentor support.

Stage 4: Independent Application

Learner completes increasingly complex tasks.

Stage 5: Real-World Project

Work responds to an authentic need.

Stage 6: Professional Review

External expert reviews the evidence.

Stage 7: Contribution

Learner creates something useful for others.

Stage 8: Transition

Evidence is mapped to further study, employment, entrepreneurship, or research.

### 17.3 MENTOR NETWORK GOVERNANCE

Requires:

* identity verification;
* expertise verification;
* safeguarding checks;
* communication boundaries;
* role definition;
* conflict-of-interest disclosure;
* supervision;
* learner consent;
* guardian consent where required;
* reporting;
* suspension;
* removal.

### 17.4 MENTOR MATCHING

Uses transparent factors:

* learner-approved interest;
* project need;
* domain;
* language;
* accessibility;
* location;
* availability;
* safeguarding constraints.

### 17.5 APPRENTICESHIP ORCHESTRATOR

Manages:

* legal eligibility;
* placement objectives;
* employer verification;
* insurance;
* safety;
* travel;
* permitted tasks;
* prohibited tasks;
* workplace mentor;
* school supervisor;
* attendance;
* competency evidence;
* incident reporting;
* learner feedback;
* withdrawal rights.

### 17.6 EXPERT CHALLENGE NETWORK

Verified experts may publish educational challenges.

Prohibited uses include:

* unpaid commercial exploitation;
* unauthorized recruitment;
* collection of learner data;
* intellectual-property abuse;
* discriminatory selection;
* unsupervised contact.

### 17.7 WORLD KNOWLEDGE NETWORK

Connects schools with:

* universities;
* laboratories;
* libraries;
* museums;
* professionals;
* companies;
* public institutions;
* craftspeople;
* community organizations;
* international learning networks.

Participation requires governance, source verification, and safeguarding.

## 18. FAMILY AND COMMUNITY PARTNERSHIP

### 18.1 FAMILY WORKSPACE

Provides:

* understandable progress;
* current goals;
* attendance;
* support suggestions;
* upcoming decisions;
* consent controls;
* communication;
* rights;
* appeal routes;
* school resources.

### 18.2 HOME SUPPORT MODE

Generates optional activities that are:

* low-cost;
* accessible;
* culturally respectful;
* possible without specialized equipment;
* aligned with current learning;
* non-punitive.

### 18.3 FAMILY LANGUAGE ACCESS

Supports:

* multilingual summaries;
* plain language;
* audio;
* captions;
* interpreter workflows;
* translation confidence;
* human review.

### 18.4 COMMUNITY PARTNERSHIP ENGINE

Manages:

* partner verification;
* agreements;
* safeguarding;
* project scope;
* intellectual property;
* learner contact;
* evidence;
* publication;
* feedback;
* suspension.

## 19. TEACHER PROFESSIONAL SYSTEM

### 19.1 TEACHER KNOWLEDGE COMMONS

Teachers may share:

* lessons;
* activities;
* rubrics;
* adaptations;
* projects;
* accessibility improvements;
* intervention strategies;
* failed approaches;
* local resources.

Every resource records:

* creator;
* license;
* context;
* review status;
* version;
* evidence;
* update history.

### 19.2 TEACHER RESEARCH WORKBENCH

Supports controlled classroom improvement studies.

Required fields:

* research question;
* baseline;
* intervention;
* consent;
* data minimization;
* comparison;
* outcome measures;
* harm indicators;
* interpretation;
* peer review;
* publication decision.

### 19.3 PROFESSIONAL LEARNING PATHWAYS

Teachers can develop expertise in:

* adaptive teaching;
* assessment;
* project learning;
* AI literacy;
* accessibility;
* multilingual education;
* mentoring;
* safeguarding;
* research;
* curriculum design;
* offline education.

### 19.4 WORKLOAD PROTECTION MONITOR

Measures whether ScholaForge changes:

* planning time;
* assessment time;
* administration;
* communication burden;
* tool switching;
* correction burden;
* after-hours work.

It shall not be used as a punitive employee-surveillance system.

## 20. SCHOOL OPERATIONS AND IMPROVEMENT

### 20.1 SCHOOL OPERATING CONTROL PLANE

Integrates:

* schedules;
* classes;
* staff;
* rooms;
* devices;
* curriculum;
* projects;
* mentors;
* apprenticeships;
* policies;
* assessments;
* safeguarding;
* infrastructure;
* evidence;
* qualifications;
* system health.

### 20.2 RESOURCE-CONSTRAINED PLANNING

Every proposal must account for:

* budget;
* staffing;
* teacher expertise;
* support staff;
* class size;
* rooms;
* devices;
* connectivity;
* transport;
* legal limits;
* equipment;
* accessibility.

### 20.3 SCHOOL DIGITAL TWIN

PLAIN-LANGUAGE PURPOSE

The School Digital Twin allows leaders to test possible changes before applying them in the real school.

TECHNICAL PURPOSE

It models:

* timetables;
* staffing;
* rooms;
* learner groups;
* project weeks;
* assessment load;
* transport;
* support demand;
* equipment;
* energy use;
* mentor availability.

Every simulation shall show:

* assumptions;
* confidence range;
* constraints;
* likely benefits;
* possible harms;
* missing data;
* alternative scenarios.

The Digital Twin cannot autonomously implement changes.

### 20.4 SCHOOL IMPROVEMENT ENGINE

Uses evidence to identify:

* curriculum gaps;
* workload pressure;
* accessibility barriers;
* resource bottlenecks;
* inconsistent assessment;
* engagement problems;
* infrastructure failures;
* unequal opportunities.

Improvement proposals require:

* evidence;
* affected users;
* cost;
* risk;
* responsible owner;
* success measure;
* rollback condition.

### 20.5 CHANGE IMPACT ENGINE

Evaluates possible effects on:

* learning;
* teacher workload;
* accessibility;
* equity;
* privacy;
* safeguarding;
* cost;
* infrastructure;
* qualifications;
* family understanding;
* legal compliance.

## 21. HEALTHY LEARNING CONDITIONS

### 21.1 LEARNING CONDITION CHECK-IN

Learners may voluntarily indicate:

* confused;
* overloaded;
* under-challenged;
* need a break;
* need teacher help;
* need accessibility support;
* unable to continue;
* concerned about safety.

The system routes support without making a medical diagnosis.

### 21.2 COGNITIVE LOAD GUARD

Identifies task-level problems such as:

* excessive instructions;
* unnecessary complexity;
* unsuitable vocabulary;
* unreadable layout;
* conflicting steps;
* too many simultaneous tasks;
* inaccessible media.

### 21.3 HEALTHY TECHNOLOGY MODE

Supports:

* screen breaks;
* paper alternatives;
* movement;
* outdoor learning;
* device-free collaboration;
* reduced notifications;
* ergonomic reminders;
* offline learning.

### 21.4 PROHIBITED WELLBEING SURVEILLANCE

ScholaForge shall not infer mental state through:

* facial recognition;
* emotion recognition;
* voice-stress analysis;
* hidden webcam monitoring;
* biometric attention scoring;
* compulsory wearable devices.

## 22. ACCESSIBILITY AND SPECIAL EDUCATIONAL SUPPORT

### 22.1 UNIVERSAL ACCESS PROFILE

May include:

* text presentation;
* contrast;
* audio;
* captions;
* keyboard access;
* switch access;
* simplified navigation;
* reduced motion;
* additional time;
* alternative evidence modes;
* assistive technology;
* reduced distraction.

The profile shall reveal diagnoses only where necessary and authorized.

### 22.2 ACCESSIBILITY TRANSFORMATION PIPELINE

Converts approved resources into:

* structured screen-reader content;
* captions;
* transcripts;
* audio descriptions;
* plain language;
* symbol-supported communication;
* keyboard-accessible interfaces;
* print versions;
* low-bandwidth versions;
* offline packages.

### 22.3 ACCOMMODATION INTEGRITY

An accommodation changes access, not the intended competency, unless an authorized educational plan defines a modified competency.

### 22.4 ACCESSIBILITY TESTING

Every release shall be evaluated for:

* keyboard navigation;
* screen readers;
* zoom;
* contrast;
* captions;
* focus order;
* input alternatives;
* cognitive accessibility;
* print use;
* offline accessibility.

## 23. AI LITERACY

### 23.1 AI LITERACY CURRICULUM

Learners shall study:

* what AI is;
* how models differ;
* limitations;
* hallucinations;
* bias;
* privacy;
* verification;
* prompting;
* source evaluation;
* copyright;
* attribution;
* deepfakes;
* manipulation;
* responsible automation;
* human accountability.

### 23.2 MODEL TRANSPARENCY PANEL

Authorized users can inspect:

* model category;
* model version;
* local or remote processing;
* data categories used;
* retrieved sources;
* confidence;
* known limitations;
* retention policy;
* human-review requirement.

### 23.3 MULTI-MODEL ROUTER

Selects models according to:

* task;
* privacy;
* learner age;
* language;
* accessibility;
* cost;
* offline status;
* risk;
* jurisdiction;
* approved capability.

The most powerful or cheapest model is not automatically selected.

## 24. GOVERNANCE, SAFETY, AND SECURITY

### 24.1 GUARDIAN POLICY ENGINE

Evaluates each significant action according to:

* user role;
* purpose;
* data category;
* learner age;
* consent;
* jurisdiction;
* risk;
* model;
* source;
* requested output;
* required approval.

Policy result:

* ALLOW;
* ALLOW_WITH_LIMITS;
* REQUIRE_HUMAN_APPROVAL;
* REQUIRE_ADDITIONAL_EVIDENCE;
* DENY;
* ESCALATE.

### 24.2 SECUREBOARD GUARDIAN

Protects exceptionally sensitive governance evidence.

Required controls:

* cryptographic sealing;
* multi-person authorization;
* access purpose;
* time-limited access;
* immutable receipt;
* access notification where lawful;
* automatic expiry;
* independent inspection;
* prohibition on routine evaluation use.

### 24.3 OMEGA SEAL

OMEGA Seal is the highest integrity state for critical educational evidence.

It may be used for:

* final qualification evidence;
* serious incident records;
* formal appeals;
* model-governance approvals;
* curriculum releases;
* independent validation reports.

An OMEGA-sealed record includes:

* cryptographic hash;
* signatories;
* timestamp;
* version;
* source chain;
* access policy;
* retention rule;
* revocation procedure.

### 24.4 CHILD-SAFE COMMUNICATION LAYER

Controls communication among:

* learners;
* teachers;
* mentors;
* experts;
* partners;
* AI systems.

Controls include:

* approved channels;
* identity verification;
* role boundaries;
* contact times;
* reporting;
* blocking;
* file restrictions;
* link scanning;
* moderation;
* emergency escalation;
* evidence preservation.

### 24.5 SAFEGUARDING ESCALATION MATRIX

Level 0:
Normal educational support.

Level 1:
Teacher attention.

Level 2:
Designated safeguarding review.

Level 3:
Urgent school response.

Level 4:
Emergency procedure.

AI may route information but cannot determine guilt, abuse, diagnosis, or legal outcome.

### 24.6 MODEL SUPPLY-CHAIN GOVERNANCE

Tracks:

* model origin;
* provider;
* license;
* deployment location;
* security review;
* training disclosures where available;
* version;
* vulnerabilities;
* updates;
* rollback;
* retirement.

### 24.7 DATA CLASSIFICATION

PUBLIC

Approved public educational content.

INTERNAL

Routine institutional information.

PERSONAL

Identifiable learner, teacher, family, or partner data.

SENSITIVE EDUCATIONAL

Assessment, support, accessibility, and intervention records.

HIGHLY RESTRICTED

Safeguarding, protected health, legal, or sealed records.

### 24.8 ZERO-TRUST PRINCIPLE

No user, device, model, plugin, source, or service is trusted solely because it is inside the network.

Access requires:

* verified identity;
* permitted role;
* permitted purpose;
* minimum data;
* current policy;
* evidence;
* logging.

## 25. OFFLINE AND SOVEREIGN INFRASTRUCTURE

### 25.1 OFFLINE SCHOOL PACKAGE

Contains:

* curriculum;
* approved resources;
* local search;
* local learner workspace;
* local teacher workspace;
* assessment;
* evidence storage;
* synchronization queue;
* backup;
* recovery;
* signed updates;
* local models where feasible.

### 25.2 OFFLINE NEURAL MESH

PLAIN-LANGUAGE PURPOSE

The Offline Neural Mesh allows authorized school devices and local servers to continue working and exchange approved updates when normal internet access is unavailable.

TECHNICAL PURPOSE

Required capabilities:

* device identity;
* encrypted synchronization;
* content signing;
* model signing;
* tenant separation;
* conflict resolution;
* malware scanning;
* trust revocation;
* priority synchronization;
* update rollback;
* offline audit continuity.

### 25.3 LOW-END DEVICE MODE

Supports:

* older laptops;
* shared tablets;
* limited memory;
* low storage;
* low bandwidth;
* intermittent power;
* printer-based learning;
* local school servers.

### 25.4 PRINT AND PAPER BRIDGE

Essential workflows must have printable fallback:

* lesson;
* activity;
* assessment;
* rubric;
* attendance;
* project plan;
* evidence form;
* family communication;
* emergency instruction.

### 25.5 SYNCHRONIZATION CONFLICT HANDLING

Conflict states:

* identical;
* non-conflicting merge;
* human review required;
* newer verified source;
* unauthorized modification;
* corrupted update;
* duplicate evidence;
* tenant violation.

No destructive automatic merge is permitted for consequential evidence.

## 26. INTEROPERABILITY, MIGRATION, AND PORTABILITY

### 26.1 UNIVERSAL SCHOOL CONNECTOR

Supports controlled integration with:

* student-information systems;
* LMS platforms;
* identity providers;
* timetable systems;
* libraries;
* assessment platforms;
* credential platforms;
* communication systems;
* government reporting systems.

### 26.2 LEGACY MIGRATION WORKBENCH

Imports:

* learner records;
* classes;
* curriculum;
* grades;
* attendance;
* accommodations;
* portfolios;
* teacher resources;
* qualification evidence.

Each migration creates:

* source inventory;
* field mapping;
* rejected data;
* duplicates;
* uncertainty;
* privacy review;
* verification sample;
* rollback package.

### 26.3 EXIT AND PORTABILITY GUARANTEE

Schools can export:

* learner records;
* portfolios;
* competency evidence;
* curriculum mappings;
* teacher resources;
* policies;
* audit evidence;
* credentials;
* configuration.

Learners can export authorized personal records in understandable and machine-readable forms.

## 27. USER EXPERIENCE AND SIMPLICITY

### 27.1 ROLE-SPECIFIC SIMPLICITY LAYER

Learner default view:

* today;
* purpose;
* activity;
* progress;
* support;
* privacy;
* help.

Teacher default view:

* class;
* objective;
* lesson;
* support needs;
* evidence;
* decisions;
* communication.

Family default view:

* progress;
* goals;
* support;
* communication;
* rights.

Administrator default view:

* operations;
* policy;
* approvals;
* incidents;
* system health.

### 27.2 ONE-ACTION START

A teacher can begin a basic lesson through:

1. select objective;
2. review generated plan;
3. launch.

Advanced settings remain available without overwhelming the default interface.

### 27.3 COMPLEXITY BUDGET

Every proposed feature must justify:

* user value;
* workflow impact;
* training need;
* cognitive burden;
* maintenance cost;
* overlap;
* measurable outcome.

Technical modularity must not create interface fragmentation.

## 28. MOTIVATION WITHOUT MANIPULATION

ScholaForge supports motivation through:

* meaningful goals;
* visible progress;
* autonomy;
* relevance;
* appropriate challenge;
* creation;
* belonging;
* contribution;
* recognition;
* reflection;
* recovery.

Prohibited:

* addictive reward loops;
* variable-reward manipulation;
* public capability leaderboards;
* shame-based comparison;
* artificial urgency;
* punishment for declining optional activities;
* emotional profiling for persuasion;
* commercial advertising;
* sale of learner attention;
* hidden engagement optimization.

## 29. INTELLECTUAL PROPERTY AND CREATOR RIGHTS

### 29.1 EDUCATIONAL CREATOR RIGHTS ENGINE

Tracks:

* creator;
* co-creators;
* AI contribution;
* source materials;
* license;
* permitted reuse;
* publication status;
* commercial rights;
* attribution.

### 29.2 LEARNER CREATION PROTECTION

Learner work shall not be:

* used for model training without valid authorization;
* commercially sold without agreement;
* publicly exposed by default;
* claimed by the school;
* reused without required attribution.

### 29.3 AI CONTENT PROVENANCE

Records:

* source material;
* generation model;
* generation date;
* relevant prompts where appropriate;
* human edits;
* license;
* review status;
* publication decision.

## 30. RESEARCH AND VALIDATION

### 30.1 SCHOLAFORGE EVIDENCE PROGRAM

Stage 0:
Architecture review.

Stage 1:
Laboratory prototype.

Stage 2:
Usability testing.

Stage 3:
Small classroom pilot.

Stage 4:
Multi-class pilot.

Stage 5:
Multi-school study.

Stage 6:
Independent evaluation.

Stage 7:
Longitudinal evaluation.

Stage 8:
Jurisdictional validation.

### 30.2 OUTCOME MEASURES

Measure:

* foundational learning;
* retention;
* knowledge transfer;
* problem-solving;
* creativity;
* communication;
* collaboration;
* learner agency;
* attendance;
* belonging;
* teacher workload;
* accessibility;
* privacy incidents;
* pathway mobility;
* real-world contribution;
* qualification success;
* post-school progression.

### 30.3 HARM INDICATORS

Measure:

* incorrect personalization;
* learner dependency;
* teacher deskilling;
* surveillance expansion;
* privacy leakage;
* bias;
* excessive screen use;
* workload increase;
* exclusion;
* inaccurate assessment;
* pathway narrowing;
* model failure;
* infrastructure failure;
* commercial exploitation.

### 30.4 COMPETITIVE CAPABILITY HARNESS

Maintain a capability comparison against:

* AI-native schools;
* adaptive-learning platforms;
* tutoring systems;
* project-learning platforms;
* competency systems;
* LMS platforms;
* credential systems;
* offline-learning systems;
* safeguarding platforms.

Capability status:

* PRESENT_AND_STRONGER;
* PRESENT_EQUIVALENT;
* PRESENT_BUT_WEAKER;
* PLANNED;
* NOT_PRESENT;
* NOT_RELEVANT;
* REJECTED_FOR_ETHICAL_REASON.

An ethically rejected competitor feature shall not automatically be treated as a deficiency.

## 31. TECHNICAL ARCHITECTURE

### 31.1 EXPERIENCE LAYER

* Learner Workspace;
* Teacher Workspace;
* Family Workspace;
* Mentor Workspace;
* Administrator Workspace;
* Auditor Workspace;
* offline client;
* print bridge;
* accessibility interface.

### 31.2 EDUCATION SERVICE LAYER

* MySAGA Service;
* Learning DNA Service;
* Talent Constellation Service;
* Passion Discovery Service;
* Human Potential Service;
* Daily Rhythm Engine;
* ActivityForge;
* TwinTeach Live;
* Project Operating System;
* Life Capability Service;
* Mentor Service;
* Apprenticeship Service;
* INSIGHT;
* Credential Service.

### 31.3 KNOWLEDGE LAYER

* Knowledge Orchestration Engine;
* Curriculum Graph;
* Competency Graph;
* Knowledge Graph;
* Source Registry;
* Evidence Packet Service;
* Contradiction Graph;
* Knowledge Decay Monitor;
* Translation Service;
* Accessibility Transformation Service.

### 31.4 GOVERNANCE LAYER

* Guardian Policy Engine;
* Consent Service;
* Rights Service;
* SecureBoard Guardian;
* OMEGA Seal;
* Safeguarding Router;
* Model Registry;
* Data Classification Service;
* Audit and Receipt Service.

### 31.5 OPERATIONS LAYER

* School Control Plane;
* Timetable Service;
* Resource Service;
* Device Service;
* School Digital Twin;
* School Improvement Engine;
* Change Impact Engine;
* Notification Service;
* Integration Gateway.

### 31.6 INFRASTRUCTURE LAYER

* cloud runtime;
* local school runtime;
* offline runtime;
* synchronization engine;
* storage;
* backup;
* recovery;
* key management;
* model runtime;
* observability;
* deployment management.

## 32. EVENT AND EVIDENCE CONTRACT

Every consequential event shall include:

EVENT_ID
EVENT_TYPE
TENANT_ID
SCHOOL_ID
ACTOR_ID
ACTOR_ROLE
LEARNER_ID_OR_PSEUDONYM
PURPOSE
FEATURE_ID
POLICY_DECISION
CONSENT_REFERENCE
DATA_CATEGORIES
MODEL_USED
MODEL_VERSION
SOURCE_REFERENCES
EVIDENCE_REFERENCES
CONFIDENCE
UNCERTAINTY
HUMAN_APPROVAL
OUTCOME
TIMESTAMP
SOFTWARE_VERSION
ROLLBACK_REFERENCE
RETENTION_RULE
INTEGRITY_HASH

## 33. CORE DATA ENTITIES

Required canonical entities:

* Person;
* Learner;
* Teacher;
* Family Member;
* Mentor;
* Organization;
* School;
* Class;
* Course;
* Curriculum;
* Curriculum Outcome;
* Competency;
* Learning Activity;
* Project;
* Evidence;
* Assessment;
* Rubric;
* Credential;
* Goal Contract;
* Pathway;
* Apprenticeship;
* Resource;
* Source;
* Knowledge Segment;
* Policy;
* Consent;
* Incident;
* Device;
* Model;
* Audit Receipt;
* Export Package.

Each entity requires:

* identifier;
* owner;
* tenant;
* classification;
* provenance;
* version;
* permissions;
* retention;
* integrity;
* deletion behavior.

## 34. COMPLETE END-TO-END WORKFLOWS

### 34.1 LEARNER ONBOARDING

1. School verifies identity.
2. Minimum necessary record is created.
3. Roles and permissions are assigned.
4. Learner and family receive understandable rights information.
5. Consent requirements are resolved.
6. Accessibility preferences are configured.
7. Existing records are imported with verification.
8. Initial learning baseline is planned.
9. Learner may state interests and goals.
10. MySAGA begins with explicit uncertainty.
11. Teacher reviews the initial profile.
12. Learner receives workspace access.

### 34.2 INITIAL LEARNING BASELINE

1. Curriculum and age expectations are loaded.
2. Existing evidence is reviewed.
3. Accessible baseline activities are selected.
4. Learner receives explanation of purpose.
5. Multiple evidence modes are used.
6. INSIGHT evaluates evidence sufficiency.
7. Teacher reviews conclusions.
8. Uncertainty remains visible.
9. Initial plan is created.
10. Review date is scheduled.

### 34.3 DAILY LEARNING

1. Daily Rhythm Engine proposes the schedule.
2. Teacher reviews and modifies it.
3. Learner sees today’s work and its purpose.
4. Foundation learning begins.
5. TwinTeach and ActivityForge provide approved support.
6. Learner may request another explanation or challenge level.
7. Teacher intervenes where needed.
8. Evidence is captured.
9. Learner reflects.
10. Teacher approves consequential updates.
11. MySAGA and INSIGHT receive verified evidence.

### 34.4 AI TUTORING

1. Learner submits a question.
2. Purpose and context are checked.
3. Policy and assessment restrictions are evaluated.
4. Knowledge Orchestration retrieves approved evidence.
5. Tutor selects the smallest sufficient assistance level.
6. Sources and uncertainty are displayed.
7. Learner responds.
8. Tutor checks understanding.
9. Insufficient confidence triggers teacher referral.
10. Interaction evidence is minimized and retained according to policy.

### 34.5 GROUP PROJECT

1. Problem is selected.
2. Safety and safeguarding are checked.
3. Team options are proposed.
4. Teacher approves the team.
5. Roles and expectations are agreed.
6. Research is performed.
7. Evidence and decisions are logged.
8. Prototype or output is developed.
9. Testing and failure analysis occur.
10. Contributions are reviewed fairly.
11. Team presents the result.
12. Individual understanding is assessed.
13. Evidence enters the Evidence Spine.

### 34.6 MENTOR SESSION

1. Learner or teacher requests mentorship.
2. Mentor registry is searched.
3. Matching logic is explained.
4. Safeguarding and consent are verified.
5. Session scope is defined.
6. Approved communication channel is opened.
7. Session occurs.
8. Only authorized evidence is recorded.
9. Learner and mentor provide feedback.
10. Concerns are routed appropriately.

### 34.7 APPRENTICESHIP

1. Opportunity is verified.
2. Legal and safety requirements are checked.
3. Learning objectives are defined.
4. Learner and family receive terms.
5. Consent and insurance are confirmed.
6. Workplace and school mentors are assigned.
7. Permitted and prohibited tasks are documented.
8. Placement begins.
9. Attendance and competency evidence are collected.
10. Incidents are reported.
11. Learner can withdraw.
12. Final evidence is reviewed and mapped.

### 34.8 ASSESSMENT AND APPEAL

1. Objective is selected.
2. Assessment validity is checked.
3. Accessibility is confirmed.
4. Assessment is delivered.
5. Evidence is captured.
6. AI contribution is disclosed.
7. Teacher assesses.
8. INSIGHT checks evidence consistency.
9. Result is communicated with explanation.
10. Learner may appeal.
11. Independent review occurs.
12. Corrected results propagate to dependent systems.

### 34.9 OFFLINE OPERATION

1. Connectivity failure is detected.
2. Local runtime activates.
3. Approved content remains available.
4. Learning and evidence continue locally.
5. Events enter the signed synchronization queue.
6. Conflicts are marked.
7. Connectivity returns.
8. Devices authenticate.
9. Updates are verified and scanned.
10. Conflicts are resolved.
11. Audit continuity is confirmed.

### 34.10 PATHWAY CHANGE

1. Learner requests change.
2. Current pathway evidence is summarized.
3. Reasons are discussed.
4. Alternative pathways are generated.
5. Required prerequisites and consequences are shown.
6. Teacher, mentor, and family participate where appropriate.
7. Learner retains relevant prior evidence.
8. New pathway is approved.
9. MySAGA updates without labeling the earlier pathway as failure.

### 34.11 GRADUATION AND TRANSITION

1. Evidence completeness is checked.
2. Qualification mappings are reviewed.
3. Learner selects portfolio content.
4. Credentials are issued.
5. Innovation Passport is finalized.
6. Optional records are retained or deleted by policy.
7. Learner-controlled Transition Vault is created.
8. Export package is verified.
9. School access transitions to alumni mode or closes.

## 35. CONVENTIONAL SCHOOL TRANSITION MODEL

ScholaForge shall be introduced gradually.

### 35.1 PHASE 0 — READINESS AND PROTECTION

* infrastructure audit;
* legal review;
* curriculum mapping;
* teacher consultation;
* family communication;
* learner-rights preparation;
* accessibility audit;
* baseline measurements;
* rollback plan.

### 35.2 PHASE 1 — TEACHER SUPPORT

Introduce:

* Teacher Workspace;
* Knowledge Orchestration;
* lesson planning;
* resource retrieval;
* accessibility transformation;
* communication support.

Existing school structures remain unchanged.

### 35.3 PHASE 2 — EVIDENCE AND PERSONALIZATION

Introduce:

* INSIGHT;
* Evidence Spine;
* MySAGA Core;
* learner agency;
* adaptive practice;
* authentic assessment pilots.

### 35.4 PHASE 3 — PROJECT AND WORKSHOP MODEL

Introduce:

* Project Studio;
* practical workshops;
* collaborative learning;
* Life Capability Framework;
* public demonstrations.

### 35.5 PHASE 4 — EXPERT PATHWAYS

Introduce:

* mentors;
* apprenticeships;
* Talent Constellation;
* Career Genome;
* Innovation Passport;
* expert challenges.

### 35.6 PHASE 5 — SCHOOL OPERATING TRANSFORMATION

Introduce:

* Daily Rhythm Engine;
* School Control Plane;
* School Digital Twin;
* School Improvement Engine;
* flexible schedules;
* expanded offline operation.

### 35.7 PHASE 6 — FULL SCHOLAFORGE SCHOOL

The school operates as an integrated human-development environment while maintaining legally required qualifications and public accountability.

### 35.8 ROLLBACK PRINCIPLE

Every phase requires:

* rollback trigger;
* responsible owner;
* protected data export;
* service fallback;
* user communication;
* educational continuity.

## 36. DEPLOYMENT PACKAGES

### PACKAGE A — TEACHER SUPPORT

* Teacher Workspace;
* Knowledge Orchestration;
* ActivityForge;
* accessibility;
* resource approval.

### PACKAGE B — ADAPTIVE LEARNING

* Learner Workspace;
* MySAGA Core;
* TwinTeach;
* learner agency;
* focused foundation block.

### PACKAGE C — EVIDENCE AND ASSESSMENT

* INSIGHT;
* Evidence Spine;
* moderation;
* appeals;
* credential mapping.

### PACKAGE D — PROJECT AND WORKSHOP SCHOOL

* Project Operating System;
* Maker Safety;
* Life Capability Framework;
* exhibitions;
* community problems.

### PACKAGE E — OFFLINE SOVEREIGN SCHOOL

* local runtime;
* offline content;
* Offline Neural Mesh;
* print bridge;
* synchronization.

### PACKAGE F — HUMAN DEVELOPMENT SCHOOL

* Talent Constellation;
* Passion Discovery;
* Human Potential Engine;
* Memory Garden;
* Innovation Passport;
* expert pathways.

### PACKAGE G — DISTRICT OR NATIONAL ECOSYSTEM

* multi-school governance;
* qualification integration;
* regional infrastructure;
* analytics with privacy;
* national curriculum mapping;
* independent audit.

## 37. ECONOMIC MODEL

### 37.1 TOTAL COST OF OWNERSHIP

Calculate:

* licensing;
* implementation;
* hardware;
* connectivity;
* local servers;
* storage;
* model inference;
* security;
* accessibility;
* training;
* support;
* migration;
* compliance;
* maintenance;
* replacement;
* exit.

### 37.2 DEPLOYMENT OPTIONS

* managed cloud;
* regional cloud;
* school-controlled cloud;
* on-premises;
* hybrid;
* fully offline;
* government-hosted;
* certified local integrator;
* open-core components.

No deployment model may weaken learner rights or governance.

## 38. NON-FUNCTIONAL REQUIREMENTS

### 38.1 AVAILABILITY

Critical teacher and learner functions shall target at least 99.9 percent availability in managed deployments, excluding planned maintenance.

### 38.2 OFFLINE CONTINUITY

Essential learning, assessment capture, and evidence storage must continue for at least thirty consecutive days without external connectivity when the offline package is correctly provisioned.

### 38.3 PERFORMANCE

Common interface actions should complete within two seconds under supported conditions.

Knowledge retrieval should provide an initial response or progress indication within five seconds.

### 38.4 ACCESSIBILITY

Interfaces shall target WCAG 2.2 AA or the applicable successor standard.

### 38.5 AUDITABILITY

Every consequential action shall produce a traceable receipt.

### 38.6 RECOVERABILITY

Critical services require tested backup, restoration, and rollback procedures.

### 38.7 DATA MINIMIZATION

Only data necessary for an explicit educational or legal purpose may be processed.

### 38.8 MODEL REPLACEABILITY

No critical educational function may depend permanently on one AI provider.

### 38.9 PORTABILITY

Schools and learners shall be able to export data in documented, usable formats.

### 38.10 LOCALIZATION

Language, curriculum, qualification, legal, and cultural settings shall be independently configurable.

## 39. PROHIBITED SYSTEM OUTCOMES

ScholaForge must never become:

* a surveillance school;
* a permanent child-scoring system;
* an automated disciplinary authority;
* a psychological diagnosis system;
* a career-destiny predictor;
* a teacher replacement;
* an examination-cheating engine;
* an advertising platform;
* a learner-data marketplace;
* a behavioral manipulation system;
* a public learner-ranking platform;
* a compulsory biometric system;
* a black-box pathway allocator;
* a vendor-lock-in system;
* an AI-first environment that removes human accountability.

## 40. IMPLEMENTATION PRIORITIES

### PRIORITY 0 — CANONICAL ARCHITECTURE

* feature registry;
* terminology normalization;
* data classification;
* rights model;
* role model;
* policy model;
* evidence contract;
* implementation-state registry.

### PRIORITY 1 — GOVERNED CORE

* identity;
* access;
* consent;
* Learner Workspace;
* Teacher Workspace;
* Family Workspace;
* Knowledge Orchestration;
* Guardian Policy Engine;
* audit receipts;
* accessibility;
* offline foundation.

### PRIORITY 2 — LEARNING CORE

* MySAGA;
* focused foundation block;
* ActivityForge;
* TwinTeach;
* INSIGHT;
* Evidence Spine;
* Daily Rhythm Engine.

### PRIORITY 3 — PROJECT AND HUMAN CAPABILITY

* Project Operating System;
* Life Capability Framework;
* collaboration;
* Maker Safety;
* community marketplace;
* exhibitions.

### PRIORITY 4 — EXPERT DEVELOPMENT

* Talent Constellation;
* Passion Discovery;
* Career Genome;
* mentors;
* apprenticeships;
* Human Potential Engine;
* Innovation Passport.

### PRIORITY 5 — SCHOOL TRANSFORMATION

* School Control Plane;
* School Digital Twin;
* School Improvement Engine;
* Offline Neural Mesh;
* World Knowledge Network;
* Collective Intelligence;
* district deployment.

## 41. RELEASE GATES

A capability may not advance when:

* purpose is unclear;
* responsible owner is missing;
* learner rights are undefined;
* data use is excessive;
* accessibility is untested;
* failure behavior is absent;
* rollback is impossible;
* evidence cannot be inspected;
* harm indicators are missing;
* acceptance tests fail;
* human review is absent for consequential decisions;
* operational claims exceed available proof.

Required gates:

### GATE 1 — Purpose and Ownership
### GATE 2 — Educational Architecture
### GATE 3 — Rights and Governance
### GATE 4 — Security and Privacy
### GATE 5 — Accessibility
### GATE 6 — Technical Verification
### GATE 7 — Usability
### GATE 8 — Pilot Approval
### GATE 9 — Independent Review
### GATE 10 — Production Authorization

## 42. MINIMUM ACCEPTANCE TEST CATALOGUE

### 42.1 LEARNER RIGHTS TESTS

* learner can see recommendation reason;
* learner can request human review;
* learner can correct optional profile information;
* learner can reject inferred interest;
* learner can export permitted records;
* learner can appeal assessment.

### 42.2 TEACHER AUTHORITY TESTS

* teacher can modify generated lesson;
* teacher can disable TwinTeach;
* AI cannot assign final grade;
* AI cannot initiate discipline;
* AI cannot publish learner work without approval.

### 42.3 KNOWLEDGE TESTS

* source provenance is visible;
* outdated sources are flagged;
* conflicting sources remain visible;
* unsupported answer triggers abstention;
* prompt injection is rejected;
* jurisdiction filters operate correctly.

### 42.4 ASSESSMENT TESTS

* insufficient evidence is not converted into mastery;
* accessibility settings are applied;
* appeal creates an independent review;
* corrections update dependent records;
* AI contribution is recorded.

### 42.5 OFFLINE TESTS

* school remains operational without internet;
* local evidence remains intact;
* synchronization resumes safely;
* unauthorized devices are rejected;
* conflicts are not silently overwritten.

### 42.6 SAFETY TESTS

* hazardous project instructions are blocked;
* mentor communication restrictions work;
* safeguarding escalation reaches authorized staff;
* protected records require appropriate authorization;
* prohibited biometric inference is absent.

### 42.7 PORTABILITY TESTS

* learner export is complete and readable;
* school export is complete;
* credentials remain verifiable;
* migration can be rolled back;
* vendor departure does not destroy evidence.

## 43. SUCCESS SCORECARD

ScholaForge shall be evaluated across:

Educational effectiveness: 20 percent
Learner agency and human development: 15 percent
Teacher usefulness and workload: 15 percent
Assessment validity and evidence: 10 percent
Accessibility and equity: 10 percent
Governance and learner rights: 10 percent
Safety and security: 5 percent
Offline continuity: 5 percent
Interoperability and portability: 5 percent
Implementation maturity and validation: 5 percent

No overall score may hide a critical failure in:

* safeguarding;
* learner rights;
* assessment integrity;
* privacy;
* accessibility;
* security.

## 44. FINAL SYSTEM DEFINITION

ScholaForge is a complete school operating architecture that:

* preserves foundational knowledge;
* personalizes without predetermining;
* develops practical and professional capability;
* supports teachers without replacing them;
* gives learners meaningful agency;
* includes families without violating learner privacy;
* uses evidence rather than opaque scoring;
* connects schoolwork to real-world contribution;
* supports expert pathways;
* operates online and offline;
* integrates with recognized qualifications;
* supports gradual school transformation;
* maintains human accountability;
* creates inspectable evidence;
* protects dignity, safety, accessibility, and freedom.

## 45. FINAL IMPLEMENTATION DIRECTIVE

The implementation team shall convert this blueprint into:

1. canonical requirements;
2. system architecture;
3. domain models;
4. user journeys;
5. interface specifications;
6. API contracts;
7. event contracts;
8. data classifications;
9. policy rules;
10. threat models;
11. accessibility criteria;
12. test suites;
13. deployment packages;
14. pilot plans;
15. validation protocols;
16. operational manuals;
17. rollback procedures;
18. evidence packs.

No section shall be implemented as a disconnected feature.

Every capability must connect to:

* a real educational purpose;
* a responsible human owner;
* a defined user workflow;
* permitted data;
* policy controls;
* evidence;
* safeguards;
* failure behavior;
* recovery;
* measurable outcomes;
* acceptance tests.

The project is complete at blueprint level only when every major capability is:

* understandable to non-technical stakeholders;
* technically specified;
* educationally justified;
* governed;
* testable;
* traceable;
* accessible;
* secure;
* reversible;
* implementable without inventing missing core behavior.

---

## PART II — BUILD-READY EXPANSION

## 46. PRODUCT BOUNDARY, MATURITY, AND DECISION RIGHTS

### 46.1 Product boundary

ScholaForge is the orchestration, evidence, governance, and human-development layer for a school ecosystem. It may integrate with, but shall not automatically replace:

- a statutory student information system;
- payroll or human-resources systems;
- government identity systems;
- emergency-services systems;
- clinical or psychological care systems;
- legally authoritative qualification registries;
- financial accounting systems;
- physical access-control systems;
- national examination platforms.

Replacement of any authoritative system requires a separate migration decision, legal review, data reconciliation plan, parallel run, rollback test, and owner approval.

### 46.2 Maturity model

| Level | Meaning | Required evidence |
|---|---|---|
| M0 — Concept | Educational intent only | Named owner and problem statement |
| M1 — Target specification | Architecture and controls documented | Traceable requirements and threat assumptions |
| M2 — Prototype | Non-production implementation | Demo, source revision, test log, known limitations |
| M3 — Pilot ready | Controlled real-user test approved | DPIA, safeguarding review, accessibility test, rollback |
| M4 — Piloted | Limited deployment completed | Outcome data, incidents, teacher and learner feedback |
| M5 — Validated | Independent evidence supports use | Replicated evaluation and unresolved-risk register |
| M6 — Limited production | Approved bounded deployment | SLOs, operations, support, security monitoring |
| M7 — Production ready | Release authority approves scale | Full gate pack, recovery drill, legal and security sign-off |
| M8 — Suspended | Use stopped pending review | Kill-switch receipt and remediation plan |
| M9 — Retired | Decommissioned | Export, deletion, archive, and dependency-removal evidence |

No feature inherits maturity from another feature. Maturity is assigned per capability, jurisdiction, deployment package, and version.

### 46.3 Decision rights

| Decision | Accountable role | Mandatory consultation | AI authority |
|---|---|---|---|
| Final grade | Authorized teacher or examination authority | Learner; moderator where required | Advisory only |
| Discipline | School authority under policy | Safeguarding and due-process roles | No decision authority |
| Pathway placement | Learner plus authorized education professional | Family where appropriate; accessibility support | Explainable recommendation only |
| Safeguarding escalation | Authorized safeguarding officer | Relevant statutory services | Signal routing only |
| Admission or access | Authorized institution | Legal and accessibility review | No autonomous determination |
| Credential issue | Authorized issuer | Assessor and moderator | Evidence validation only |
| Data retention | Data controller | DPO/legal/records owner | No authority |
| Model release | AI governance board | Security, education, privacy, accessibility | No self-release |
| School-wide rollout | Release authority | Teacher, learner, family, security, legal, operations representatives | No authority |

### 46.4 Decision-lock artifacts

A formal decision lock is required for:

- project rename;
- change to learner-rights guarantees;
- use of biometric or affective technologies;
- automatic grading beyond low-consequence formative feedback;
- centralization of school-controlled data;
- weakening offline continuity;
- new advertising, profiling, or commercial-data use;
- changing a human approval into an automated decision;
- replacement of an open export format with a proprietary-only format;
- production use of a new model family or external AI provider.

A decision lock records proposer, rationale, alternatives, affected rights, legal review, pilot evidence, dissent, approval, expiry, and rollback.

## 47. ARCHITECTURE OPTIONS AND SELECTED REFERENCE MODEL

### 47.1 Mechanism-divergent options

| Option | Description | Strengths | Weaknesses | Decision |
|---|---|---|---|---|
| A — Central modular monolith | One regional application and database | Fastest initial build, simple operations | Weak school sovereignty, outage concentration, scaling boundaries | Rejected as universal target |
| B — Cloud microservices | Independently scaled central services | Strong elastic scale and team autonomy | High operational complexity, weak offline behavior, costly observability | Partial use only |
| C — School-edge-only | Each school operates independently | Maximum sovereignty and continuity | Difficult district reporting, updates, collaboration, and credential verification | Rejected as sole model |
| D — Federated local-first cells | School cells operate locally and synchronize governed events with regional services | Balances sovereignty, scale, offline continuity, and portability | Complex sync and policy design | **Selected** |
| E — Integration overlay | ScholaForge remains a thin layer over existing LMS/SIS products | Low migration risk and fast pilots | Limited control over data, UX, evidence, and offline behavior | Supported as transition package |

### 47.2 Selected architecture principles

1. **Local educational continuity:** a school cell must continue essential learning and evidence capture during prolonged disconnection.
2. **Federated coordination:** district or national services receive only authorized events, aggregates, credentials, and policy updates.
3. **Modular deployment:** a small deployment may run as a modular application; high-scale components may be separated without changing domain contracts.
4. **Data ownership by bounded context:** one authoritative writer per domain object.
5. **Policy at the boundary:** authorization, consent, classification, jurisdiction, safeguarding, and purpose are evaluated before data or tool access.
6. **Evidence before inference:** consequential conclusions must point to inspectable evidence.
7. **Provider replaceability:** AI, search, object storage, identity, and messaging interfaces are abstracted.
8. **Open export:** no critical record exists only in a vendor-specific representation.
9. **Fail safe:** loss of AI or cloud connectivity must not block core teaching.
10. **Human authority:** architecture cannot bypass decision rights.

### 47.3 Reference deployment topology

```text
Learner / Teacher / Family / Mentor Devices
                 |
        Accessible Experience Layer
                 |
       School Cell Trust Boundary
  +--------------------------------------+
  | API Gateway + Identity Enforcement   |
  | Policy Decision / Consent / Rights   |
  | Learning + Assessment + Evidence     |
  | Project + Mentor + Operations        |
  | Local Knowledge Cache + Model Router |
  | Local Event Log + Sync Queue         |
  | Encrypted Local Data Stores          |
  +--------------------------------------+
                 |
     Mutually Authenticated Sync Channel
                 |
  +--------------------------------------+
  | Regional / District Coordination     |
  | Curriculum and Policy Distribution   |
  | Credential Verification              |
  | Approved Aggregate Analytics         |
  | Model and Content Registry           |
  | Incident and Update Coordination     |
  +--------------------------------------+
                 |
      Optional National / External Systems
  SIS · Qualification Registries · LTI Tools
  OneRoster · CASE · QTI · Open Badges · CLR
```

### 47.4 Trust zones

- **Z0 Public:** unauthenticated informational content.
- **Z1 User device:** browser, managed device, or offline client; never inherently trusted.
- **Z2 School application:** authenticated school cell services.
- **Z3 Sensitive education:** assessment, safeguarding, accommodations, and protected evidence.
- **Z4 Administration:** tenant configuration, identity, policy, and keys.
- **Z5 Regional coordination:** cross-school services with minimized data.
- **Z6 External provider:** AI, content, identity, or integration vendor.
- **Z7 Audit vault:** append-only receipts, key-separated and independently reviewable.

Cross-zone movement requires authenticated identity, explicit purpose, policy decision, data classification, minimum fields, encryption, and receipt generation.

## 48. BOUNDED CONTEXTS AND SERVICE CATALOG

### 48.1 Context rules

Each bounded context shall define:

- accountable product owner;
- authoritative data;
- public interfaces;
- emitted and consumed events;
- human approval points;
- privacy purpose;
- retention class;
- SLO;
- failure behavior;
- offline behavior;
- rollback method;
- acceptance suite.

### 48.2 Canonical contexts

| Context | Owns | Does not own | Key human gate |
|---|---|---|---|
| Identity and Tenancy | users, roles, organizations, memberships, assurance | grades, learning evidence | administrator approval for privileged roles |
| Rights, Consent, and Purpose | notices, consent where applicable, objections, restrictions, purpose grants | source educational records | controller/DPO-approved policy |
| Curriculum and Competency | frameworks, outcomes, mappings, prerequisites | learner mastery decisions | curriculum authority approval |
| Learning Orchestration | plans, activities, schedules, support requests | final assessment judgment | teacher approval of consequential plans |
| Knowledge and Source Integrity | sources, segments, provenance, retrieval indexes, contradictions | statutory curriculum authority | source curator approval |
| Tutoring and AI Assistance | sessions, prompts, assistance level, model route, safety result | grades, discipline, diagnoses | teacher referral and kill switch |
| Assessment and Evidence | assessment instances, evidence, rubrics, moderation, appeals | identity and credentials | authorized assessor final decision |
| Projects and Practical Learning | project plans, risks, resources, contributions, exhibitions | safeguarding case records | teacher/safety approval |
| Mentoring and Apprenticeship | mentor registry, matches, placements, session metadata | employment or insurance authority | safeguarding and placement approval |
| Credentials and Portability | credential issue, revocation, verification, export package | underlying assessment evidence ownership | authorized issuer |
| Safeguarding and Incident | cases, escalation, restricted communications, incident actions | general learning analytics | safeguarding officer |
| Accessibility and Accommodations | access needs, approved accommodations, transformation preferences | medical diagnosis | authorized support professional |
| School Operations | timetable, rooms, resources, devices, continuity status | educational judgment | school leader |
| Integration and Migration | connector configuration, mapping, reconciliation, import/export jobs | source-system truth | data owner sign-off |
| Offline Sync and Replication | device registration, event queues, conflict cases, sync checkpoints | domain decision policy | context owner for semantic conflicts |
| Audit and Evidence Receipts | immutable receipts, integrity proofs, release evidence | mutable domain data | independent audit access |

### 48.3 Service decomposition rule

Start with deployable modules aligned to the contexts above. Split a module into a separate service only when at least one condition is evidenced:

- independent scale requirement;
- distinct security or data-residency boundary;
- separate release cadence;
- offline placement requirement;
- failure-isolation need;
- independent statutory owner;
- measured performance bottleneck.

Microservices are not a maturity signal. Unnecessary service fragmentation is prohibited.

## 49. API, COMMAND, QUERY, AND EVENT CONTRACTS

### 49.1 API style

- External synchronous APIs use versioned HTTPS and JSON.
- Internal APIs may use equivalent typed protocols when interoperability and observability remain intact.
- Long-running operations return an operation identifier and status endpoint.
- Bulk exports are asynchronous, encrypted, integrity-checked, and resumable.
- Every write supports idempotency.
- Every resource supports optimistic concurrency through a version or entity tag.
- Every response includes a correlation identifier.
- Errors use a stable problem-detail schema.
- Sensitive field omission is preferable to redaction after retrieval.
- APIs do not expose model-provider-specific fields as canonical domain fields.

### 49.2 Required request metadata

```json
{
  "request_id": "uuid",
  "correlation_id": "uuid",
  "tenant_id": "uuid",
  "school_id": "uuid",
  "actor_id": "pseudonymous-or-internal-id",
  "actor_role": "teacher",
  "purpose": "deliver_formative_feedback",
  "legal_or_policy_basis_ref": "policy://learning-support/v3",
  "consent_ref": null,
  "client_version": "string",
  "offline_sequence": null
}
```

### 49.3 Authorization model

Authorization is the intersection of:

```text
authenticated identity
AND tenant membership
AND role permissions
AND resource relationship
AND purpose limitation
AND data classification clearance
AND jurisdiction rule
AND consent or alternative lawful basis where relevant
AND safeguarding restrictions
AND device/session assurance
AND time/context constraints
```

A role alone is never sufficient for protected data.

### 49.4 Scope examples

- `learning.plan.read:self`
- `learning.plan.write:assigned_class`
- `evidence.submit:self`
- `evidence.assess:assigned`
- `assessment.appeal:self`
- `safeguarding.case.read:authorized`
- `credential.issue:authorized_issuer`
- `policy.publish:tenant`
- `export.request:self`
- `model.release:governance_board`

### 49.5 Error contract

```json
{
  "type": "https://schemas.scholaforge.org/problems/policy-denied",
  "title": "Action denied by policy",
  "status": 403,
  "code": "POLICY_DENIED",
  "detail": "The requested evidence is outside the actor's permitted purpose.",
  "correlation_id": "uuid",
  "appeal_or_review_route": "/rights/review-requests",
  "safe_to_retry": false
}
```

Internal policy details that could expose safeguarding or security logic shall not be disclosed to unauthorized users.

### 49.6 Core command examples

| Command | Preconditions | Result | Human gate |
|---|---|---|---|
| `CreateLearningPlan` | learner active; curriculum loaded | draft plan | teacher approval |
| `RequestTutorHelp` | session allowed; assessment rules checked | bounded tutor response | referral on low confidence |
| `SubmitEvidence` | learner authorized; file scanned | immutable evidence version | assessor review |
| `RecordAssessmentDecision` | sufficient evidence; accommodation applied | assessment result | assessor signature |
| `OpenAppeal` | appeal window valid | sealed review case | independent reviewer |
| `MatchMentor` | verified mentor pool; consent/safeguarding complete | candidate matches | authorized approval |
| `IssueCredential` | requirements met; moderation complete | signed credential | issuer approval |
| `PublishPolicy` | tests pass; change approved | versioned policy | governance approval |
| `SynchronizeSchoolCell` | mutual trust and checkpoint valid | accepted events/conflicts | domain review for semantic conflict |

### 49.7 Event envelope

Events shall be immutable statements of what occurred, not instructions to repeat an action.

```json
{
  "specversion": "1.0",
  "id": "uuid",
  "type": "org.scholaforge.assessment.decision-recorded.v1",
  "source": "school-cell://school-id/assessment",
  "subject": "assessment/uuid",
  "time": "RFC3339 timestamp",
  "datacontenttype": "application/json",
  "tenant_id": "uuid",
  "school_id": "uuid",
  "actor_ref": "pseudonymous-id",
  "purpose": "record_assessment",
  "classification": "RESTRICTED_EDUCATION",
  "policy_decision_ref": "receipt-id",
  "consent_ref": null,
  "correlation_id": "uuid",
  "causation_id": "uuid",
  "schema_ref": "schema://assessment/decision-recorded/v1",
  "integrity": {
    "hash_algorithm": "sha-256",
    "content_hash": "hex"
  },
  "data": {}
}
```

### 49.8 Event delivery semantics

- At-least-once delivery is assumed.
- Consumers must be idempotent.
- Ordering is guaranteed only within an explicitly documented partition.
- Domain state cannot depend on global event order.
- Poison events enter a quarantine queue.
- Schema changes require backward-compatibility tests or versioned event types.
- Personal data in events is minimized; references are preferred.
- Audit events and domain events have distinct retention and access rules.

## 50. CANONICAL DATA MODEL AND LIFECYCLE

### 50.1 Identifier policy

- Internal identifiers are random, non-semantic, and immutable.
- Human-readable codes may change without changing identifiers.
- National identifiers are stored only when legally required and isolated from operational identifiers.
- Learner-facing exports use portable identifiers and do not reveal internal security identifiers.
- Cross-tenant identifiers are prohibited unless explicitly required for a governed federation.

### 50.2 Core relationships

```text
Organization 1---* School
School 1---* AcademicSession
Person 1---* Membership
Learner 1---* Enrollment
Teacher 1---* TeachingAssignment
CurriculumFramework 1---* Competency
Competency *---* LearningActivity
Learner 1---* LearningPlan
LearningPlan 1---* LearningPlanItem
Learner 1---* Evidence
Evidence *---* Competency
Assessment 1---* EvidenceLink
Assessment 1---* AssessmentDecision
AssessmentDecision 0---* Appeal
Project 1---* ProjectMembership
Mentor 1---* MentorVerification
Apprenticeship 1---* PlacementEvidence
Credential 1---* CredentialAlignment
Policy 1---* PolicyVersion
AIModel 1---* ModelRelease
ModelRelease 1---* EvaluationResult
ExportPackage 1---* ExportManifestItem
```

### 50.3 Minimum entity metadata

Every mutable domain entity includes:

- `id`;
- `tenant_id`;
- `school_id` when applicable;
- `version`;
- `status`;
- `created_at`;
- `created_by`;
- `updated_at`;
- `updated_by`;
- `classification`;
- `purpose_tags`;
- `retention_policy_ref`;
- `provenance_ref`;
- `integrity_state`;
- `deletion_state`;
- `jurisdiction_tags`.

### 50.4 Data classification

| Class | Examples | Default handling |
|---|---|---|
| PUBLIC | public curriculum descriptions, public school information | integrity protected |
| INTERNAL | staff guidance, generic lesson resources | authenticated access |
| EDUCATION_CONFIDENTIAL | plans, ordinary learning evidence, attendance | role/relationship/purpose control |
| RESTRICTED_EDUCATION | grades, appeals, accommodations, protected identity links | stronger authentication, field-level controls |
| SAFEGUARDING_RESTRICTED | safeguarding cases, protected communications | named-authority access, no general analytics |
| SECURITY_RESTRICTED | keys, vulnerability details, privileged logs | security team only |
| AGGREGATED_DEIDENTIFIED | approved statistical outputs | re-identification test required |

### 50.5 Retention schedule design

The following are policy templates, not universal legal periods:

| Record | Default design position | Required decision |
|---|---|---|
| Tutor conversation | minimize; short retention or no content retention | educational need and safeguarding exception |
| Learning activity telemetry | aggregate quickly; delete raw events | demonstrated necessity |
| Submitted evidence | retain while educationally and legally required | qualification and appeal rules |
| Assessment decision | authoritative retention | statutory and institutional rules |
| Safeguarding case | segregated retention | statutory safeguarding rules |
| Accommodation profile | review regularly; delete when no longer necessary | continuity and legal requirements |
| Mentor session content | do not record by default | explicit approved exception |
| Audit receipt | retain longer than mutable source when justified | audit, limitation, and security policy |
| Model prompt/output samples | sampled and de-identified where possible | evaluation necessity and opt-out |
| Export package | expire automatically after verified delivery | user-controlled extension where allowed |

Every deployment shall replace these design positions with an approved jurisdictional schedule.

### 50.6 Deletion states

- `ACTIVE`
- `RESTRICTED`
- `PENDING_DELETION`
- `LEGAL_HOLD`
- `TOMBSTONED`
- `DELETED`
- `ANONYMIZED`
- `ARCHIVED_AUTHORITY`

Deletion must propagate to indexes, caches, replicas, model-evaluation datasets, and queued exports. Immutable audit receipts may retain minimal non-content proof that a deletion occurred.

### 50.7 Data lineage

Every derived profile, recommendation, mastery estimate, or pathway suggestion shall retain:

- source evidence identifiers;
- algorithm or model version;
- feature transformation version;
- timestamp;
- confidence and limitations;
- human review status;
- supersession history;
- correction propagation status.

No derived attribute may become an unchallengeable fact.

## 51. AI SYSTEM, MODEL ROUTER, AND KNOWLEDGE-GROUNDING ARCHITECTURE

### 51.1 AI capability register

Every AI-enabled feature is registered before use with:

- use-case identifier;
- intended educational benefit;
- affected actors;
- decision impact;
- model provider and model release;
- training-data information available to the deployer;
- data categories sent to the model;
- tool permissions;
- knowledge sources;
- risk classification;
- prohibited-use checks;
- human oversight;
- evaluation suite;
- monitoring metrics;
- fallback behavior;
- kill switch;
- change owner;
- expiry and review date.

Unregistered AI use is blocked.

### 51.2 Risk tiers

| Tier | Example | Deployment rule |
|---|---|---|
| A0 — No AI | deterministic workflow | normal software controls |
| A1 — Low-consequence assistance | wording support, resource tagging | disclosure and quality tests |
| A2 — Learner-facing tutoring | explanations, hints, practice generation | grounding, age controls, teacher visibility, safety eval |
| A3 — Consequential recommendation | pathway, intervention, evidence sufficiency | human decision, impact assessment, bias testing, appeal |
| A4 — Legally sensitive/high-risk candidate | admission, access, formal learning-outcome evaluation | legal classification, high-risk control pack, independent review |
| AX — Prohibited | emotion recognition in education, social scoring, manipulative exploitation, autonomous discipline | must not be built or enabled |

Where uncertainty exists, use the higher tier until legal and governance review determines otherwise.

### 51.3 Prohibited AI practices

ScholaForge shall not provide:

- emotion recognition or affect inference in education settings;
- biometric categorization by sensitive traits;
- social scoring;
- subliminal or manipulative techniques that materially distort behavior;
- exploitation of age, disability, or vulnerability;
- automated disciplinary decisions;
- autonomous admission or exclusion;
- final grades generated without authorized human judgment;
- psychological or medical diagnosis;
- covert attention, honesty, or engagement scoring;
- prediction of criminality or dangerousness;
- permanent career destiny labels;
- advertising personalization based on learner profiles.

Narrow legal exceptions shall not be relied upon without documented counsel approval and a decision lock.

### 51.4 Model-router pipeline

```text
User request
  -> identity, role, age band, and purpose check
  -> assessment and safeguarding restriction check
  -> data minimization and redaction
  -> task classification
  -> approved knowledge retrieval
  -> source-quality and contradiction check
  -> model eligibility and residency check
  -> prompt construction from versioned template
  -> tool-permission check
  -> model execution
  -> output safety, citation, and uncertainty check
  -> pedagogical assistance-level check
  -> human-review or abstention route
  -> minimized evidence receipt
```

### 51.5 Assistance ladder

The tutoring runtime shall choose the least revealing level that supports learning:

1. encouragement;
2. restatement;
3. retrieval cue;
4. strategic question;
5. misconception-targeted hint;
6. partial step;
7. worked analogous example;
8. complete solution only when policy permits;
9. teacher referral;
10. safety or safeguarding stop.

The learner may request a different explanation, language, modality, or challenge level. The system shall not use friction or dark patterns to force continued AI interaction.

### 51.6 RAG and source integrity

Knowledge retrieval requires:

- approved source registry;
- jurisdiction and curriculum filters;
- source authority score;
- publication and review date;
- license and permitted-use status;
- segment-level provenance;
- contradiction retention;
- freshness policy;
- prompt-injection scanning;
- poisoned-content quarantine;
- answer-to-source entailment tests;
- abstention when evidence is insufficient.

Retrieved content is data, not executable instruction.

### 51.7 Model evaluation suites

Each model release must pass:

- curriculum factuality;
- citation correctness;
- age appropriateness;
- multilingual quality;
- accessibility transformation quality;
- pedagogical hint discipline;
- hallucination and abstention;
- bias and disparate-impact probes;
- self-harm and safeguarding routing;
- sexual-content and exploitation safeguards;
- bullying and harassment;
- cheating and assessment integrity;
- prompt injection and tool misuse;
- privacy leakage and memorization;
- jailbreak resistance;
- latency, availability, and cost;
- regression against the prior approved release.

Evaluation results are versioned and tied to the exact model, prompt, tool configuration, retrieval corpus, and policy version.

### 51.8 Model change control

A model or prompt change is treated as a release when it can alter educational behavior. Silent provider upgrades are not accepted for consequential features. The platform must support:

- model pinning where available;
- canary evaluation;
- shadow comparison without learner impact;
- rollback;
- provider failover;
- deterministic fallback content;
- emergency disablement by tenant and feature;
- notification of material behavior changes.

### 51.9 Human oversight interface

The responsible human shall be able to see:

- what the AI proposed;
- source evidence;
- uncertainty;
- policy checks;
- model and prompt version;
- learner-visible explanation;
- alternatives considered where consequential;
- how to override;
- how to report harm;
- how to disable the feature.

## 52. LEGAL, CHILD-RIGHTS, AND AI-GOVERNANCE CONTROL MAP

### 52.1 Legal boundary

This section is a design control map, not legal advice or certification. Each deployment requires counsel, data-protection, safeguarding, accessibility, labor, education-law, procurement, and records-management review.

### 52.2 EU-oriented baseline

For EU deployments, the release process shall map at least:

- GDPR controller/processor roles;
- lawful basis and purpose limitation;
- child-specific transparency;
- data-protection impact assessment triggers;
- data subject rights;
- international transfers;
- automated-decision and profiling restrictions;
- EU AI Act prohibited practices;
- AI literacy;
- high-risk classification for education use cases;
- deployer and provider responsibilities;
- fundamental-rights impact assessment where required;
- public-sector accessibility obligations;
- national education and safeguarding law;
- employment law for teacher monitoring;
- intellectual-property and database rights;
- public procurement and records law.

### 52.3 Current AI Act design implications

As of the currentness review date:

- AI literacy obligations and prohibited-practice rules are already applicable.
- Education is a named sensitive area for high-risk AI classification.
- AI used to determine access, admission, assignment, or evaluation of learning outcomes may require the high-risk control path.
- The official implementation timeline is evolving; release counsel must verify the applicable date and final guidance immediately before procurement, pilot, and production.
- ScholaForge shall build high-risk-grade controls early rather than waiting for the final enforcement date.

### 52.4 GDPR-oriented control requirements

- Child-facing privacy notices use age-appropriate language and visual support.
- Consent is not used as a universal default; lawful basis is selected per purpose and jurisdiction.
- Withdrawal of consent cannot invalidate processing that relies on another lawful basis, but the system must explain this clearly.
- A DPIA is required before processing likely to create high risk, including large-scale profiling, sensitive-data inference, persistent monitoring, or consequential AI.
- Data protection by design is part of architecture review, not a post-build document.
- The learner or authorized representative can access, correct, restrict, object, export, and request deletion where legally available.
- Rights requests are tracked without exposing protected safeguarding information.
- Processor and subprocessor changes trigger transfer, security, and contract review.

### 52.5 Fundamental-rights impact assessment

For consequential AI, the assessment shall address:

- dignity and autonomy;
- non-discrimination;
- privacy and data protection;
- freedom of thought and expression;
- child rights;
- disability rights and accommodation;
- access to education;
- due process and appeal;
- teacher professional autonomy;
- labor impacts;
- linguistic and cultural equity;
- environmental impact;
- cumulative impacts across years.

### 52.6 Mandatory human review

Human review is required for legal classification, DPIA approval, safeguarding design, assessment validity, qualification recognition, accessibility conformance, high-risk AI release, production authorization, and jurisdictional retention schedules.

## 53. SECURITY ARCHITECTURE AND THREAT MODEL

### 53.1 Security objectives

1. Protect children and other users from harm.
2. Prevent unauthorized access or disclosure.
3. Preserve evidence integrity and assessment trust.
4. Maintain school continuity.
5. Limit insider abuse.
6. Contain compromised devices or providers.
7. Prevent AI tools from exceeding authority.
8. Detect and recover from attacks.
9. Produce inspectable evidence without excessive surveillance.

### 53.2 Principal threat actors

- opportunistic external attacker;
- organized ransomware group;
- abusive insider;
- compromised learner or staff account;
- malicious external tool or content provider;
- supply-chain attacker;
- hostile model prompt or retrieved document;
- unauthorized family or mentor access;
- curious administrator exceeding need-to-know;
- peer harassment or impersonation;
- device thief;
- coercive authority seeking excessive data;
- accidental misconfiguration.

### 53.3 High-priority abuse cases

- changing or fabricating grades;
- accessing safeguarding records;
- exporting an entire learner population;
- impersonating a teacher or mentor;
- using AI to reveal protected data;
- poisoning curriculum sources;
- bypassing assessment restrictions;
- manipulating a learner pathway;
- covertly monitoring teacher or learner behavior;
- replacing approved models or prompts;
- distributing harmful maker instructions;
- tampering with offline sync;
- deleting evidence before appeal;
- credential forgery;
- ransomware in a school cell.

### 53.4 Identity and access controls

- standards-based single sign-on;
- phishing-resistant MFA for privileged and sensitive roles;
- age-appropriate authentication for learners;
- short-lived tokens;
- device and session risk checks;
- role plus relationship plus purpose authorization;
- just-in-time privilege elevation;
- dual approval for mass export, policy changes, and credential-signing keys;
- break-glass access with reason, expiry, notification, and audit;
- periodic access review;
- immediate revocation on role change;
- separate administrative identities;
- no shared privileged accounts.

### 53.5 Cryptography and key management

- encryption in transit and at rest;
- tenant or deployment key separation where risk justifies it;
- hardware-backed or equivalent protection for signing and root keys;
- key rotation and revocation;
- encrypted backups;
- signed software and content updates;
- signed credentials and export manifests;
- integrity hashes for evidence;
- crypto-agility plan;
- no custom cryptographic algorithms.

### 53.6 Application security

- secure development lifecycle;
- threat modeling per feature;
- code review;
- secret scanning;
- dependency and container scanning;
- static and dynamic analysis;
- API authorization tests;
- input validation and output encoding;
- content upload scanning;
- SSRF, injection, and deserialization protections;
- rate limits and abuse controls;
- security headers and browser isolation;
- penetration testing before consequential release;
- remediation SLAs based on severity and exposure.

### 53.7 AI and agent security

- tools disabled by default;
- allow-listed tool calls;
- argument validation;
- read/write separation;
- least-privilege service identities;
- no direct model access to credential, safeguarding, or administrative stores;
- prompt-injection detection;
- retrieval source trust;
- output data-loss prevention;
- tool-call simulation in tests;
- budget and recursion limits;
- human confirmation for consequential writes;
- complete tool-call receipts;
- emergency model and tool kill switches.

### 53.8 Security monitoring without surveillance

Monitor security-relevant events such as authentication failure, privilege changes, mass export, policy modification, malware detection, unusual sync behavior, and integrity failure. Do not monitor learner emotion, private thought, or general behavior under the label of security.

### 53.9 Incident response

Incident classes:

- safety or safeguarding;
- privacy breach;
- account compromise;
- assessment-integrity compromise;
- model behavior incident;
- harmful content;
- availability/ransomware;
- supply-chain compromise;
- credential-signing compromise;
- offline sync corruption.

Every class requires severity rules, owner, containment, evidence preservation, notification decision, user support, recovery, post-incident review, and preventive action.

### 53.10 Ransomware and continuity design

- immutable or logically isolated backups;
- school-cell restoration images;
- offline paper fallback;
- least-privilege service accounts;
- segmented networks;
- tested recovery;
- known-good content package;
- manual attendance and safeguarding procedures;
- credential-key revocation process;
- communications plan independent of the main platform.

## 54. PRIVACY, CONSENT, PURPOSE, AND RIGHTS OPERATIONS

### 54.1 Purpose registry

Every processing operation references an approved purpose with:

- purpose ID;
- plain-language explanation;
- data categories;
- subjects;
- controller;
- processor/subprocessor;
- lawful basis;
- recipients;
- retention;
- automated processing;
- risk tier;
- user rights;
- jurisdiction;
- approval and expiry.

A feature cannot access data merely because the data exists.

### 54.2 Consent design

Consent, when appropriate, shall be:

- specific;
- informed;
- understandable;
- freely given;
- granular;
- recorded;
- revocable;
- non-coercive;
- separated from non-consent lawful bases.

Refusing optional personalization must not remove access to core education.

### 54.3 Family and guardian access

Family access is attribute- and purpose-based, not a mirror of the learner account. The system supports:

- age and maturity transitions;
- court or safeguarding restrictions;
- multiple guardians with different rights;
- learner-private reflection areas where lawful;
- disclosure previews;
- language accessibility;
- emergency exceptions with audit;
- automatic expiry when authority changes.

### 54.4 Rights workflow

```text
Request received
 -> identity and authority verified
 -> scope clarified without unnecessary friction
 -> protected exceptions identified
 -> data located across systems, indexes, backups, and processors
 -> response package reviewed
 -> correction/restriction/deletion propagated
 -> requester receives understandable result
 -> dispute and supervisory escalation route offered
 -> completion receipt retained
```

### 54.5 Analytics governance

Analytics must use the least granular data that answers an approved question. Prohibited practices include:

- public learner ranking;
- teacher productivity scoring from simplistic telemetry;
- persistent engagement scoring;
- cross-purpose reuse;
- commercial profiling;
- re-identification of protected aggregates;
- hidden experimentation.

Small-cell suppression, differential privacy, aggregation thresholds, or equivalent controls shall be evaluated for district and national reporting.

## 55. ACCESSIBILITY AND INCLUSIVE DESIGN VERIFICATION

### 55.1 Baseline

- Target WCAG 2.2 AA for web and mobile experiences.
- Map applicable procurement and public-sector requirements to the currently harmonized EN 301 549 profile.
- Track successor standards without silently changing release criteria.
- Accessibility is required for generated content, AI tutoring, assessments, documents, exports, offline clients, and support channels.

### 55.2 Accessibility system requirements

- keyboard-only operation;
- visible focus;
- logical reading and focus order;
- screen-reader semantics;
- captions and transcripts;
- sign-language or interpretation support where required;
- text resizing and reflow;
- sufficient contrast;
- reduced motion;
- high-contrast and forced-color compatibility;
- accessible authentication;
- error prevention and recovery;
- plain-language mode;
- symbol-supported and easy-read modes;
- dyslexia-friendly options without unsupported claims;
- switch, voice, and alternative-input compatibility;
- accessible math, science, and code;
- accessible charts and data tables;
- multilingual screen-reader support;
- printable accessible alternatives.

### 55.3 Accessible assessment

An assessment cannot be released unless:

- intended construct is defined;
- accommodation does not invalidate the construct;
- timing, input, display, and response alternatives are supported;
- assistive technology is tested;
- proctoring does not introduce discriminatory or invasive monitoring;
- equivalent offline mode exists where required;
- appeal includes accommodation review.

### 55.4 Test matrix

At minimum test:

- automated accessibility rules;
- keyboard;
- screen reader on representative operating systems;
- magnification and reflow;
- voice control;
- reduced motion;
- color and non-color cues;
- cognitive walkthrough;
- real users with disabilities;
- generated content and AI responses;
- exported PDFs/documents;
- offline and low-end modes.

Automated checks alone cannot establish conformance.

## 56. INTEROPERABILITY AND PORTABILITY PROFILE

### 56.1 Standards baseline

Use open standards where they fit the use case:

| Need | Preferred profile |
|---|---|
| Rosters, enrollments, classes, and grade exchange | OneRoster 1.2 |
| Secure learning-tool launch and services | LTI 1.3 / LTI Advantage |
| Curriculum and competency frameworks | CASE 1.1 |
| Assessment item and test portability | QTI 3 |
| Verifiable microcredentials | Open Badges 3.0 |
| Comprehensive learner records | CLR 2.0 |
| Optional K–12 operational data exchange | Ed-Fi adapter, version selected per deployment |
| Identity | OpenID Connect and OAuth 2.x profiles |
| Bulk data export | documented JSON/CSV plus signed manifest |
| Events | CloudEvents-compatible envelope or documented equivalent |

A claim of formal conformance requires the relevant certification or test evidence; implementation of a similar shape is not sufficient.

### 56.2 Canonical mapping layer

The internal model remains independent of any one external standard. Every connector defines:

- source and target versions;
- field mapping;
- enum mapping;
- identifier strategy;
- required/optional fields;
- unsupported concepts;
- transformation loss;
- validation;
- reconciliation;
- error handling;
- retry;
- security;
- rate limits;
- export and rollback.

### 56.3 Migration reconciliation

For every import:

1. preserve original source identifier;
2. validate schema;
3. quarantine invalid records;
4. detect duplicates;
5. compare authoritative fields;
6. generate reconciliation report;
7. obtain owner approval;
8. commit in reversible batches;
9. verify counts and samples;
10. retain migration receipt.

### 56.4 Exit package

A complete exit package contains:

- machine-readable data;
- human-readable summaries;
- schema and data dictionary;
- competency and curriculum mappings;
- evidence files with checksums;
- credentials and verification material;
- policy and consent history where transferable;
- audit trail necessary to interpret records;
- deletion confirmation from the departing service;
- import validation tool or documented procedure.

## 57. RELIABILITY, OBSERVABILITY, BACKUP, AND RECOVERY

### 57.1 Service objectives

| Capability | Target design objective |
|---|---|
| Core school cell availability | 99.9% monthly in managed mode |
| Local offline learning | 30 days without external connectivity |
| Identity and policy decision p95 | under 300 ms within school cell |
| Common read action p95 | under 1 second locally; under 2 seconds managed |
| Common write acknowledgement p95 | under 2 seconds |
| Tutor first useful signal p95 | under 5 seconds or visible progress |
| Critical audit receipt loss | zero acknowledged consequential events |
| High-priority incident acknowledgement | deployment-specific, staffed target |
| School-cell restore | tested RTO target by package |
| Authoritative data recovery point | deployment-specific; near-zero for assessment decisions |

Targets become release SLOs only after load testing and capacity planning.

### 57.2 Observability fields

- correlation and causation identifiers;
- service and version;
- tenant and school pseudonymous identifiers;
- operation;
- outcome;
- latency;
- policy-decision reference;
- error code;
- model and prompt version where applicable;
- sync checkpoint;
- integrity state;
- data classification;
- no unnecessary content payload.

### 57.3 Telemetry minimization

Telemetry shall not include learner answer text, safeguarding narratives, assessment evidence, or tutor conversations by default. Diagnostic content collection requires a separate purpose, minimization, access restriction, expiry, and user notice where required.

### 57.4 Backup classes

- configuration and policy;
- transactional domain data;
- evidence objects;
- audit receipts;
- credential-signing material;
- search/vector indexes;
- school-cell images;
- connector configuration.

Indexes should be rebuildable from authoritative sources. Keys require separate protected backup and recovery ceremonies.

### 57.5 Recovery tests

- accidental deletion;
- corrupted database;
- lost school server;
- ransomware;
- compromised signing key;
- regional outage;
- identity-provider outage;
- AI-provider outage;
- failed software update;
- sync split-brain;
- malicious policy release;
- export-service failure.

A backup without a successful restore test is not accepted as recovery evidence.

## 58. OFFLINE CELL AND SYNCHRONIZATION PROTOCOL

### 58.1 Local authority

During disconnection, the school cell may authoritatively create:

- attendance and ordinary learning events;
- learner work and evidence;
- teacher-approved plans;
- local formative assessments;
- local safeguarding actions under school policy;
- device and continuity events.

It may not independently create or modify externally governed facts such as national qualification status, revoked credentials from another issuer, or regional policy versions beyond delegated authority.

### 58.2 Sync state machine

```text
CONNECTED
 -> DEGRADED
 -> OFFLINE_ACTIVE
 -> RECONNECTING
 -> AUTHENTICATING_PEER
 -> EXCHANGING_CHECKPOINTS
 -> VALIDATING_EVENTS
 -> APPLYING_NON_CONFLICTING
 -> CONFLICT_REVIEW
 -> VERIFIED_CONNECTED
```

### 58.3 Conflict classes

| Class | Example | Resolution |
|---|---|---|
| C0 Duplicate | same idempotency key | discard duplicate, retain receipt |
| C1 Commutative | independent evidence submissions | merge |
| C2 Last-authorized-write | non-consequential preference | policy-defined version resolution |
| C3 Human semantic conflict | two pathway approvals | human review |
| C4 Authority conflict | local vs statutory qualification status | authoritative external source |
| C5 Safety conflict | competing safeguarding restrictions | fail closed, safeguarding review |
| C6 Integrity failure | signature or hash mismatch | quarantine and incident |
| C7 Schema incompatibility | unknown event version | hold until compatible adapter |

No consequential conflict is silently resolved by timestamp alone.

### 58.4 Offline update safety

Content, model, and software packages require:

- signed manifest;
- version compatibility;
- malware scan;
- license manifest;
- rollback image;
- staged installation;
- health check;
- automatic rollback on critical failure;
- operator-visible change summary.

## 59. DELIVERY PROGRAM, WORK PACKAGES, AND MUST-BE-TRUE CONDITIONS

### 59.1 Program principles

- build the governed core before advanced personalization;
- deliver one school-operable slice at a time;
- retain full target scope while limiting current implementation;
- use feature flags and tenant-level kill switches;
- do not claim completion without test evidence;
- stop expansion when teacher workload, learner rights, safety, or accessibility regress.

### 59.2 Work package 0 — Foundation and governance

**Parts**

- project registry;
- requirements and traceability;
- identity and tenancy;
- policy, purpose, rights, and consent;
- data classification;
- audit receipts;
- accessibility design system;
- deployment and observability foundation.

**MUST-BE-TRUE**

- every privileged action is attributable;
- a policy denial is explainable;
- learner rights routes exist;
- no AI feature can run before registration;
- audit receipts survive service restart;
- tenant data isolation tests pass;
- emergency feature disablement works;
- baseline threat model and DPIA are approved for the pilot scope.

**Rollback**

Disable unfinished modules, restore prior policy version, revoke test credentials, remove pilot data using approved deletion workflow, and confirm no orphaned processor copies.

### 59.3 Work package 1 — Teacher support slice

**Parts**

- Teacher Workspace;
- curriculum/source registry;
- ActivityForge draft generation;
- resource approval;
- accessible export;
- no learner profiling required.

**MUST-BE-TRUE**

- teacher approves before learner publication;
- sources are visible;
- generated content can be edited or rejected;
- unsupported claims trigger abstention;
- workload study shows no material increase;
- accessible document output passes tests;
- AI outage leaves manual planning operational.

### 59.4 Work package 2 — Learner workspace and bounded tutoring

**Parts**

- Learner Workspace;
- daily plan;
- help request;
- assistance ladder;
- safe model router;
- teacher referral;
- learner feedback and report-harm route.

**MUST-BE-TRUE**

- no final grading or discipline;
- assessment mode restrictions are enforced;
- age-appropriate disclosure appears;
- harmful or uncertain output routes safely;
- learner can request another modality;
- optional personalization can be refused;
- tutor content retention follows policy;
- teacher can disable tutoring at learner, class, or tenant level.

### 59.5 Work package 3 — Evidence and assessment

**Parts**

- Evidence Spine;
- rubric management;
- assessment decision;
- moderation;
- appeal;
- correction propagation;
- export.

**MUST-BE-TRUE**

- evidence is versioned and tamper-evident;
- AI cannot sign final results;
- accommodations are applied and recorded;
- appeal seals the original decision;
- independent review is enforceable;
- corrections propagate deterministically;
- credential issue cannot precede required moderation.

### 59.6 Work package 4 — Projects, collaboration, and practical learning

**Parts**

- Project Studio;
- team roles;
- safety review;
- resource plan;
- contribution evidence;
- exhibitions;
- failure library.

**MUST-BE-TRUE**

- hazardous activities require approved controls;
- team analytics do not become public ranking;
- individual understanding is separately assessed;
- learners can report unfair contribution assessment;
- public sharing uses explicit approval and privacy review.

### 59.7 Work package 5 — Mentors and apprenticeships

**Parts**

- mentor verification;
- matching;
- communication controls;
- placement agreements;
- incident reporting;
- evidence and withdrawal.

**MUST-BE-TRUE**

- mentor identity and suitability are verified;
- communication boundaries are enforced;
- legal, insurance, and safeguarding requirements are approved;
- prohibited tasks are explicit;
- learner can withdraw without hidden penalty;
- incident escalation is tested.

### 59.8 Work package 6 — Offline sovereign school

**Parts**

- local deployment;
- content package;
- local identity cache;
- event log;
- sync;
- conflict review;
- recovery image;
- print bridge.

**MUST-BE-TRUE**

- 30-day continuity exercise passes;
- local evidence survives power loss;
- compromised device is rejected;
- conflicts are never silently overwritten;
- signed update rollback works;
- school staff can operate without specialist engineers.

### 59.9 Work package 7 — District and national coordination

**Parts**

- multi-school policy distribution;
- aggregate analytics;
- curriculum federation;
- credential verification;
- regional incident coordination;
- capacity and cost management.

**MUST-BE-TRUE**

- cross-school data is minimized;
- re-identification risk is tested;
- school continuity does not depend on the regional plane;
- tenant-specific law and policy remain enforceable;
- district analytics cannot expose individual protected records;
- independent audit access is operational.

### 59.10 Dependency graph

```text
WP0 Foundation
  -> WP1 Teacher Support
  -> WP2 Learner Tutoring
  -> WP3 Evidence and Assessment
  -> WP4 Projects
  -> WP5 Mentors/Apprenticeships
  -> WP6 Offline Sovereign School
  -> WP7 District/National Coordination

WP6 begins architecture work during WP0 but production release waits for
identity, policy, evidence, recovery, and conflict-resolution gates.
```

## 60. PILOT AND EDUCATIONAL VALIDATION DESIGN

### 60.1 Pilot principles

- voluntary where legally and operationally possible;
- no loss of educational entitlement for non-participants;
- representative accessibility and language needs;
- teacher co-design;
- learner voice;
- family transparency;
- independent ethics and privacy review where appropriate;
- pre-registered outcomes and harm indicators;
- rollback and support;
- no public league tables.

### 60.2 Pilot stages

| Stage | Scope | Exit evidence |
|---|---|---|
| P0 Laboratory | synthetic and staff-only | functional, security, accessibility, and AI evals |
| P1 Shadow | recommendations not shown or acted on | comparison and error analysis |
| P2 Assisted classroom | teacher-facing only | workload, usefulness, safety |
| P3 Limited learner | bounded classes and features | learning, agency, harm, equity |
| P4 Multi-school | varied contexts | interoperability, scale, transferability |
| P5 Controlled production | approved packages | SLO, incident, recovery, and governance evidence |

### 60.3 Evaluation questions

- Does the feature improve learning or merely increase activity?
- Does it reduce or increase teacher workload?
- Are gains evenly distributed?
- Does it preserve learner agency?
- Are accommodations effective?
- Does it change error patterns or misconceptions?
- Does it create dependency on AI?
- Does it alter family-school trust?
- Are there hidden opportunity costs?
- Can schools operate safely when the feature is removed?

### 60.4 Outcome measures

Use a balanced set:

- validated learning measures;
- delayed retention;
- transfer to new problems;
- quality of explanations;
- project quality;
- learner agency and self-regulation;
- teacher workload and professional control;
- accessibility success;
- attendance and participation, interpreted cautiously;
- safeguarding and harm incidents;
- appeal and correction rates;
- equity across protected and underserved groups;
- cost and energy per useful outcome;
- offline continuity;
- system reliability.

### 60.5 Stop conditions

Pause or stop the pilot for:

- safeguarding failure;
- serious privacy breach;
- discriminatory impact without rapid mitigation;
- invalid assessment;
- inaccessible core flow;
- teacher workload increase beyond the approved threshold;
- inability to explain consequential decisions;
- model behavior outside approved bounds;
- repeated harmful output;
- inability to restore or roll back;
- evidence tampering;
- legal or regulator instruction.

## 61. TEST STRATEGY AND REQUIREMENTS TRACEABILITY

### 61.1 Test layers

1. schema and contract tests;
2. unit tests;
3. policy decision tests;
4. integration tests;
5. migration tests;
6. offline/sync tests;
7. accessibility tests;
8. security tests;
9. model and RAG evaluations;
10. educational validity tests;
11. end-to-end role journeys;
12. resilience and recovery tests;
13. pilot outcome validation;
14. independent audit.

### 61.2 Traceability record

Every requirement has:

```json
{
  "requirement_id": "SF-REQ-0001",
  "statement": "AI cannot assign a final grade.",
  "owner": "assessment_product_owner",
  "risk": "critical",
  "design_refs": ["section://51", "section://48/assessment"],
  "control_refs": ["SF-CTRL-AI-014"],
  "test_refs": ["SF-E2E-ASSESS-009", "SF-POLICY-031"],
  "evidence_refs": [],
  "status": "TARGET_SPECIFICATION"
}
```

No critical requirement may be marked complete without executable or independently inspectable evidence.

### 61.3 Hard release gates

A release is blocked when any of the following is unresolved:

- critical safeguarding defect;
- critical authorization defect;
- cross-tenant data exposure;
- inaccessible core journey;
- unsupported legal classification;
- failed DPIA approval where required;
- final-decision automation beyond authority;
- untested rollback;
- unrecoverable evidence loss;
- unknown required dependency license or provenance;
- failed model safety regression;
- invalid migration reconciliation;
- missing incident owner;
- misleading operational claim.

### 61.4 Required end-to-end journeys

- learner onboarding and rights explanation;
- teacher creates and publishes an activity;
- learner requests bounded tutor help;
- inaccessible output is transformed;
- evidence submitted offline and synchronized;
- assessment decision and appeal;
- safeguarding escalation;
- mentor verification and session;
- credential issue and verification;
- learner export and deletion request;
- school migration and rollback;
- AI provider outage;
- compromised account containment;
- restore after ransomware simulation.

## 62. OPEN-SOURCE, VENDOR, AND SUPPLY-CHAIN GOVERNANCE

### 62.1 Selection policy

No package, model, dataset, container, plugin, or external service enters the core path without:

- identity and provenance;
- license review;
- maintenance status;
- vulnerability review;
- supported version;
- dependency graph;
- test evidence;
- data-flow review;
- update and rollback path;
- exit plan;
- accountable owner.

Unknown license or provenance blocks core use.

### 62.2 Build evidence

Each release produces:

- software bill of materials;
- model bill of materials;
- dataset/source register;
- dependency vulnerability report;
- license report;
- signed build provenance where feasible;
- artifact signatures;
- deployment manifest;
- configuration hash;
- policy bundle hash;
- model/prompt/corpus versions;
- exceptions and expiry dates.

### 62.3 Vendor contract requirements

Contracts should address:

- controller/processor roles;
- subprocessor notice and objection;
- data location and transfer;
- learner-data commercial-use prohibition;
- model-training prohibition unless expressly authorized;
- breach notification;
- audit rights;
- deletion;
- export;
- service continuity;
- accessibility;
- security testing;
- model change notice;
- incident cooperation;
- price and egress transparency;
- termination assistance;
- escrow or continuity options for critical services.

### 62.4 Reference-stack decision process

The blueprint intentionally does not bind to a particular database, identity provider, message bus, vector store, or model vendor before repository and deployment pre-audit. For each category, compare at least two maintained candidates against license, security, offline fit, operational complexity, community health, performance, accessibility impact, data residency, and exit cost.

## 63. RISK REGISTER

| ID | Risk | Impact | Leading indicator | Primary controls | Owner | Residual status |
|---|---|---|---|---|---|---|
| R01 | AI gives convincing false explanation | learning harm | citation/entailment failure | grounded retrieval, abstention, teacher referral | AI owner | Open |
| R02 | Profiling becomes destiny | autonomy harm | recommendation persistence | expiring inferences, learner correction, human review | learner-rights owner | Open |
| R03 | Teacher workload increases | adoption failure | time-on-task rise | co-design, workflow budgets, disable feature | product owner | Open |
| R04 | Accessibility regression | exclusion | failed assistive-tech test | hard gate, user testing | accessibility lead | Open |
| R05 | Safeguarding record exposure | severe harm | authorization anomaly | segregated store, named access, alerts | safeguarding/security | Open |
| R06 | Cross-tenant data leak | severe privacy harm | isolation test failure | tenant isolation, policy tests | security owner | Open |
| R07 | Offline conflict corrupts evidence | qualification harm | unresolved C3–C6 conflicts | signed log, conflict queue, review | sync owner | Open |
| R08 | Vendor lock-in | strategic/cost harm | export gaps | open standards, exit tests | procurement owner | Open |
| R09 | Biased pathway recommendation | unequal opportunity | subgroup error delta | impact tests, explanation, appeal | AI/education owner | Open |
| R10 | Model silently changes | uncontrolled behavior | provider version drift | pinning, canary, release gate | AI operations | Open |
| R11 | Ransomware disrupts school | continuity harm | backup/restore failure | segmentation, immutable backup, drills | operations | Open |
| R12 | Invalid assessment automation | qualification harm | human override rate | authority limits, moderation, appeal | assessment owner | Open |
| R13 | Excessive family access | learner privacy harm | disclosure complaints | scoped guardian rights | rights owner | Open |
| R14 | Mentor misuse | child safety harm | boundary violation | verification, communication controls | safeguarding owner | Open |
| R15 | Analytics re-identifies learners | privacy harm | small cohort queries | suppression, privacy testing | data owner | Open |
| R16 | Curriculum source poisoning | misinformation | source integrity failure | registry, signatures, quarantine | knowledge owner | Open |
| R17 | Legal timeline changes | compliance risk | new guidance/law | currentness review before gates | legal owner | Open |
| R18 | Cost or energy becomes unsustainable | program failure | unit-cost growth | budgets, model routing, local inference review | finance/architecture | Open |
| R19 | Over-complex architecture stalls delivery | execution failure | rising service count | modular-first rule | chief architect | Open |
| R20 | Evidence receipts become surveillance | trust harm | content-rich logs | minimization, access separation | privacy/security | Open |

Critical risks require an owner, treatment date, test, and explicit acceptance authority. “Open” is not acceptance.

## 64. SEVEN-DAY VALIDATION SPRINT

### Day 1 — Scope and authority

- choose one bounded pilot slice: teacher activity creation;
- identify school, learner-age range, jurisdiction, and responsible owners;
- freeze prohibited uses;
- create initial requirements and risk register;
- define success and stop signals.

**Evidence:** signed scope, decision-rights map, source universe, assumptions.

### Day 2 — Architecture and data

- model the teacher activity workflow;
- define data entities, classification, purpose, retention, APIs, and events;
- create threat model;
- design accessibility journey;
- define offline fallback.

**Evidence:** context diagram, data-flow diagram, schema draft, threat table.

### Day 3 — Prototype

- build or mock the smallest vertical slice;
- use approved synthetic or non-sensitive data;
- implement policy checks, source display, editing, and teacher approval;
- add kill switch and audit receipt.

**Evidence:** revision ID, deployment or demo receipt, known limitations.

### Day 4 — Verification

- run functional, policy, accessibility, security, and RAG tests;
- test AI outage and unsupported question;
- test export and deletion of prototype data.

**Evidence:** test log with pass/fail and defects.

### Day 5 — Human evaluation

- teacher usability session;
- accessibility review;
- learner-rights review;
- privacy and safeguarding tabletop;
- collect workload estimate and trust concerns.

**Evidence:** structured findings and dissent.

### Day 6 — Failure and rollback

- simulate bad model output;
- simulate source poisoning;
- revoke a role;
- roll back model/prompt/policy;
- restore prototype data;
- verify no false completion claim.

**Evidence:** recovery and rollback receipts.

### Day 7 — Gate decision

- compare success and failure signals;
- classify unresolved risks;
- decide stop, repair, repeat, or expand;
- create next work package only after approval.

**Evidence:** gate report, decision lock where needed, next-scope statement.

## 65. RELEASE EVIDENCE PACK

Every release candidate shall include:

1. project identity snapshot;
2. scope and excluded capabilities;
3. architecture decision records;
4. requirements traceability;
5. data-flow and trust-boundary diagrams;
6. AI capability register;
7. legal and regulatory review;
8. DPIA and fundamental-rights assessment where required;
9. accessibility conformance report;
10. threat model;
11. security test report;
12. supply-chain report and SBOM;
13. model/RAG evaluation report;
14. migration and interoperability report;
15. performance and capacity report;
16. backup/restore and disaster-recovery report;
17. offline/sync test report;
18. pilot outcome report;
19. open defects and accepted risks;
20. rollback plan and tested command/procedure;
21. support and incident runbook;
22. approval signatures;
23. deployment manifest and hashes;
24. post-release monitoring plan.

## 66. BUILD-AGENT EXECUTION PROMPT

```text
ROLE
You are the implementation agent for SCHOLAFORGE. The blueprint is a target
specification, not proof of implementation.

RULE 0 — REPOSITORY PRE-AUDIT
Before editing:
1. identify language, frameworks, package manager, lockfiles, scripts, tests,
   linting, type checking, CI, deployment target, environment-variable names,
   data stores, identity, routes, modules, and existing conventions;
2. do not invent repository facts;
3. report blockers and preserve the canonical project name.

EXECUTION ORDER
PARTS -> TASKS -> STEPS -> MUST-BE-TRUE -> TEST -> FIX -> RECEIPTS -> ROLLBACK

CURRENT SCOPE
Implement only the work package explicitly selected by the human release owner.
Do not silently implement later packages.

NON-NEGOTIABLES
- no autonomous final grades, discipline, admission, or safeguarding decision;
- no emotion recognition, biometric categorization, social scoring, or covert
  engagement scoring;
- no production claim without test and release evidence;
- no secret exposure;
- no destructive migration without backup, reconciliation, and rollback;
- no dependency with unknown license or provenance in the core path;
- no inaccessible core flow;
- no critical cloud dependency for approved offline functions;
- every consequential write produces an evidence receipt;
- every AI feature has a kill switch and registered model configuration.

FOR EACH TASK REPORT
TASK:
STATUS: COMPLETE | PARTIAL | BLOCKED | FAILED
FILES CHANGED:
COMMANDS RUN:
TESTS PASSED:
TESTS FAILED:
EVIDENCE CREATED:
SECURITY/PRIVACY IMPACT:
ACCESSIBILITY IMPACT:
ROLLBACK:
BLOCKERS:
NEXT TASK:

NO-FAKE-COMPLETE
Use COMPLETE only when MUST-BE-TRUE checks passed with current evidence.
Otherwise use PARTIAL, BLOCKED, or FAILED.
```

## 67. REFERENCE SCHEMAS

### 67.1 AI capability record

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://schemas.scholaforge.org/ai/capability-record.v1.json",
  "title": "ScholaForge AI Capability Record",
  "type": "object",
  "required": [
    "capability_id",
    "name",
    "intended_purpose",
    "risk_tier",
    "human_oversight",
    "kill_switch",
    "status"
  ],
  "properties": {
    "capability_id": {"type": "string"},
    "name": {"type": "string"},
    "intended_purpose": {"type": "string"},
    "affected_roles": {"type": "array", "items": {"type": "string"}},
    "risk_tier": {"enum": ["A0", "A1", "A2", "A3", "A4", "AX"]},
    "model_release_ref": {"type": ["string", "null"]},
    "prompt_version": {"type": ["string", "null"]},
    "corpus_version": {"type": ["string", "null"]},
    "data_categories": {"type": "array", "items": {"type": "string"}},
    "tool_permissions": {"type": "array", "items": {"type": "string"}},
    "human_oversight": {"type": "string"},
    "evaluation_suite_ref": {"type": ["string", "null"]},
    "kill_switch": {"type": "string"},
    "status": {
      "enum": [
        "CONCEPT",
        "TARGET_SPECIFICATION",
        "PROTOTYPE",
        "PILOT_READY",
        "PILOTED",
        "VALIDATED",
        "LIMITED_PRODUCTION",
        "PRODUCTION_READY",
        "SUSPENDED",
        "RETIRED"
      ]
    }
  },
  "additionalProperties": false
}
```

### 67.2 Evidence record

```json
{
  "evidence_id": "uuid",
  "learner_ref": "pseudonymous-id",
  "evidence_type": "artifact|observation|performance|reflection|external",
  "artifact_ref": "object://...",
  "competency_refs": ["competency-id"],
  "submitted_at": "RFC3339",
  "submitted_by": "actor-id",
  "provenance": {
    "source": "learner_submission",
    "device_ref": "device-id",
    "offline_sequence": 42
  },
  "ai_contribution": {
    "used": true,
    "disclosure": "brainstorming_and_language_support",
    "model_release_ref": "model-release-id"
  },
  "classification": "EDUCATION_CONFIDENTIAL",
  "retention_policy_ref": "retention://evidence/default",
  "integrity_hash": "hex",
  "status": "SUBMITTED"
}
```

### 67.3 Policy decision receipt

```json
{
  "receipt_id": "uuid",
  "decision": "PERMIT|DENY|REQUIRE_HUMAN_REVIEW",
  "policy_bundle_version": "string",
  "actor_ref": "pseudonymous-id",
  "action": "assessment.read",
  "resource_ref": "assessment/uuid",
  "purpose": "moderation",
  "classification": "RESTRICTED_EDUCATION",
  "matched_rules": ["rule-id"],
  "obligations": ["watermark", "no_download"],
  "timestamp": "RFC3339",
  "expires_at": "RFC3339",
  "integrity_hash": "hex"
}
```

## 68. RACI AND OPERATING GOVERNANCE

| Domain | Accountable | Responsible | Consulted | Informed |
|---|---|---|---|---|
| Educational architecture | Chief education officer | curriculum/product teams | teachers, learners, researchers | families, leaders |
| Learner rights | Rights/governance lead | product and policy teams | learner council, DPO, legal | all users |
| Safeguarding | Safeguarding authority | trained safeguarding staff | legal, security, school leaders | affected parties as allowed |
| Privacy | Data controller | DPO/privacy engineering | legal, security, product | users |
| Security | Security executive | security and engineering | DPO, operations, safeguarding | leadership |
| Accessibility | Accessibility lead | design, engineering, content | users with disabilities | procurement, leadership |
| AI governance | AI governance board | model, product, evaluation teams | education, legal, privacy, security | users |
| Assessment validity | Assessment authority | assessors and moderators | accessibility, curriculum | learners/families |
| Operations | Service owner | SRE/support | school IT, security | users |
| Release | Release authority | program management | all control owners | stakeholders |

No one person should approve their own critical control exception.

## 69. CURRENTNESS AND EXTERNAL EVIDENCE REGISTER

**Review date:** 2026-07-20  
**Use:** design grounding only; verify again at each legal, procurement, pilot, and production gate.

| Topic | Current design evidence | Blueprint implication |
|---|---|---|
| EU AI Act | [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) | education can be a high-risk area; prohibited practices and human oversight must be built in |
| AI Act implementation | [European Commission AI Act framework](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) and [high-risk guidelines/timeline](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems) | re-verify dates and final guidance before release |
| AI literacy/prohibitions | [First AI Act rules applicable](https://digital-strategy.ec.europa.eu/en/news/first-rules-artificial-intelligence-act-are-now-applicable) | staff AI literacy and prohibited-use controls are immediate program requirements |
| Children and GDPR | [EDPB children guidance](https://www.edpb.europa.eu/topics/key-gdpr-concepts/children_en) | age-appropriate transparency and enhanced protection |
| DPIA | [EDPB DPIA guidance](https://www.edpb.europa.eu/topics/accountability-and-compliance-tools/data-protection-impact-assessment_en) | complete DPIA before likely high-risk processing |
| Accessibility | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [EU public-sector accessibility summary](https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-public-sector-websites-and-mobile-apps.html) | WCAG 2.2 AA target plus applicable EN 301 549 procurement/legal mapping |
| Roster interoperability | [OneRoster 1.2](https://www.1edtech.org/standards/oneroster) | standard roster/grade exchange profile |
| Tool interoperability | [LTI 1.3](https://www.1edtech.org/standards/lti) | secure external learning-tool integration |
| Competency exchange | [CASE 1.1](https://standards.1edtech.org/case/?view=category) | machine-readable curriculum/competency frameworks |
| Assessment exchange | [QTI](https://www.1edtech.org/standards/qti) | portable accessible assessment content |
| Credentials | [Open Badges 3.0](https://standards.1edtech.org/open-badges/specifications/standards/v3p0) and [CLR 2.0](https://standards.1edtech.org/clr/?view=category) | learner-controlled, verifiable credential and record formats |
| Optional K–12 data model | [Ed-Fi Data Standard](https://docs.ed-fi.org/reference/data-exchange/data-standard/) | optional adapter; not mandatory global core |

## 70. CHANGE MANIFEST, AUDIT REPORT, AND COMPLIANCE CHECKLIST

### 70.1 CHANGE_MANIFEST_JSON

```json
{
  "project": "SCHOLAFORGE",
  "from_version": "10.0",
  "to_version": "11.0",
  "change_type": [
    "CLARIFICATION",
    "TECHNICAL_IMPROVEMENT",
    "GOVERNANCE_IMPROVEMENT",
    "SAFETY_IMPROVEMENT",
    "VALIDATION_UPDATE"
  ],
  "identity_preserved": true,
  "capabilities_removed": [],
  "major_additions": [
    "architecture option analysis and selected federated local-first model",
    "bounded contexts and service ownership",
    "API, event, authorization, and error contracts",
    "canonical data lifecycle and retention design",
    "AI capability register, risk tiers, model router, and evaluation lifecycle",
    "EU-oriented legal and child-rights control map",
    "security threat model and incident response",
    "privacy, consent, purpose, and rights operations",
    "accessibility verification system",
    "current education interoperability profiles",
    "offline synchronization state machine and conflict taxonomy",
    "work packages with MUST-BE-TRUE conditions and rollback",
    "pilot and educational validation design",
    "traceability and hard release gates",
    "supply-chain and vendor governance",
    "risk register",
    "seven-day validation sprint",
    "release evidence pack",
    "build-agent execution prompt",
    "reference schemas",
    "RACI",
    "currentness evidence register"
  ],
  "runtime_claims": "NONE",
  "implementation_status": "TARGET_SPECIFICATION"
}
```

### 70.2 AUDIT_REPORT_JSON

```json
{
  "project": "SCHOLAFORGE",
  "audit_date": "2026-07-20",
  "source_document": "SCHOLAFORGE blueprint version 10.0",
  "assessment": {
    "vision_and_educational_model": "STRONG",
    "human_rights_and_teacher_authority": "STRONG",
    "capability_coverage": "STRONG",
    "technical_build_readiness_before_upgrade": "PARTIAL",
    "technical_build_readiness_after_upgrade": "TARGET_SPECIFICATION_COMPLETE_NOT_IMPLEMENTED",
    "legal_certification": "NOT_PROVIDED",
    "runtime_validation": "NOT_RUN",
    "production_readiness": "NOT_CONFIRMED"
  },
  "material_residual_unknowns": [
    "target jurisdiction and school type",
    "repository and existing stack",
    "authoritative SIS/LMS/identity systems",
    "hosting and data-residency constraints",
    "statutory retention periods",
    "qualification authority requirements",
    "procurement budget and staffing",
    "selected AI and infrastructure providers",
    "pilot population and ethics approval requirements"
  ],
  "blockers_to_production": [
    "jurisdictional legal review",
    "DPIA and fundamental-rights assessment where required",
    "repository pre-audit",
    "security architecture implementation",
    "accessibility conformance testing",
    "model and RAG evaluations",
    "offline recovery and sync validation",
    "pilot evidence",
    "independent release approval"
  ],
  "evidence_grade": "DESIGN_EVIDENCE_ONLY",
  "human_review_required": true
}
```

### 70.3 COMPLIANCE_CHECKLIST_JSON

```json
{
  "project_identity_preserved": true,
  "learner_rights_preserved": true,
  "teacher_authority_preserved": true,
  "offline_scope_preserved": true,
  "anti_surveillance_rules_preserved": true,
  "no_final_grade_by_ai": true,
  "no_autonomous_discipline": true,
  "emotion_recognition_prohibited": true,
  "privacy_by_design_specified": true,
  "child_friendly_transparency_specified": true,
  "dpia_gate_specified": true,
  "accessibility_target_specified": true,
  "security_threat_model_specified": true,
  "rollback_specified": true,
  "open_export_specified": true,
  "supply_chain_gates_specified": true,
  "tests_and_receipts_specified": true,
  "production_claim_made": false,
  "legal_certification_claim_made": false,
  "runtime_tests_run": false
}
```

## 71. FINAL IMPLEMENTATION DIRECTIVE — VERSION 12.0

The implementation team shall treat this file as the integrated target blueprint and shall convert approved work packages into repository-specific specifications, code, policies, tests, runbooks, and evidence.

No capability is operational merely because it appears in this document.

A capability is ready to advance only when:

- the educational purpose is explicit;
- the human owner and decision rights are explicit;
- the bounded context and authoritative data are defined;
- API and event contracts are versioned;
- privacy, security, safeguarding, accessibility, and AI-risk controls are implemented;
- failure and offline behavior are known;
- tests pass;
- rollback is demonstrated;
- pilot evidence supports benefit;
- residual risk is accepted by the correct authority;
- release receipts are complete.

The final measure of ScholaForge is not the number of AI features, dashboards, profiles, or predictions. It is whether the system helps schools develop capable human beings while preserving dignity, freedom, evidence, professional judgment, safety, accessibility, and the ability to continue learning when technology fails.

---

**END OF SCHOLAFORGE COMPLETE IMPROVED AND EXPANDED END-TO-END PROJECT BLUEPRINT VERSION 12.0**

---

# PART III — SIGNATURE INVENTIONS AND DEEP TECHNICAL SPECIFICATIONS

This part keeps the detailed invention mechanisms.

It expands the governed master blueprint.

Where wording differs, Part II and the merge authority rules prevail.

## 2A. ScholaForge Innovation Portfolio — Recognizable Product Inventions

This section is the primary product-recognition layer. It prevents ScholaForge from being perceived as a generic LMS, chatbot wrapper, or compliance platform. Each invention has a stable name, a one-sentence definition, an operating model, boundaries, evidence requirements, and a measurable value hypothesis.

### 2A.1 Feature Segmentation Model

ScholaForge capabilities are divided into six recognizable families:

| Family                               | Purpose                                                                           | Signature inventions                                                              |
| ------------------------------------ | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Personal Intelligence                | Give every participant a private, evolving educational intelligence               | **MySAGA**, SAGA Memory Garden, SAGA Portability Capsule                          |
| Live Classroom Intelligence          | Make the physical classroom an adaptive human–AI environment                      | **TwinTeach Live**, MotionClass, Activity Conductor                               |
| Privacy-Preserving Classroom Sensing | Enable spatial interaction without behavioral surveillance                        | **No-ID Motion Layer**, **SecureBoard Guardian**, BoardVision Constrained Capture |
| Sovereign Continuity                 | Keep educational intelligence available without cloud dependence                  | **Offline Neural Mesh**, Local Model Foundry                                      |
| Safe Experimentation                 | Let teachers and learners explore powerful tools without exposing systems or data | **OMEGA Seal Sandbox**                                                            |
| Trust and Evidence                   | Make every meaningful AI action reviewable, contestable, and governable           | Evidence Spine, Pedagogical Safety Case, Policy Capsule                           |

These families are independently marketable but are designed to reinforce one another. The differentiator is the integrated system: personal intelligence operates inside a live, offline-capable, privacy-preserving classroom and can safely experiment inside sealed sandboxes while generating evidence.

---

### 2A.2 MySAGA — Evolving Personal Educational Intelligence

**Definition:** MySAGA is a private, role-aware, longitudinal educational intelligence that evolves with one user while remaining under that user’s and institution’s policy control.

**Who receives a SAGA:**

* Every learner.
* Every teacher.
* Every authorized support professional.
* Every administrator with a strictly role-bounded profile.
* Optional parent or guardian companion profiles where lawful and institutionally approved.

**What makes MySAGA different from a chatbot:**

1. It maintains a structured learning and practice history rather than merely storing conversation transcripts.
2. It distinguishes user-authored facts, institution-authored records, inferred hypotheses, and temporary session context.
3. It evolves through validated experiences, not unrestricted self-modification.
4. It can operate locally and continue functioning when internet access is unavailable.
5. It can explain which memories, curriculum objects, policies, and evidence informed a response.
6. It supports challenge, correction, selective forgetting, export, and transfer.
7. It never becomes the final authority for grading, discipline, admissions, placement, or safeguarding decisions.

**Core memory layers:**

* **Identity layer:** preferred language, accessibility settings, role, permissions, and communication style.
* **Learning-state layer:** mastered competencies, active goals, misconceptions, practice history, and confidence intervals.
* **Preference layer:** preferred examples, modalities, pace, and interface adaptations.
* **Reflection layer:** learner or teacher journals and self-assessments.
* **Institutional layer:** curriculum, timetable, assignments, approved resources, and local policy.
* **Hypothesis layer:** AI-generated interpretations marked as uncertain, expiring, and challengeable.
* **Ephemeral layer:** short-lived working context that is automatically discarded.

**Evolution logic:**

1. An interaction produces candidate observations.
2. The SAGA Memory Gate classifies each observation by source, sensitivity, purpose, confidence, and retention.
3. Deterministic rules reject prohibited or unnecessary memory.
4. Low-risk preferences may be stored automatically under policy.
5. Educational inferences require confidence thresholds, expiry, and visible uncertainty labels.
6. Consequential profile changes require teacher or user validation.
7. Every accepted change creates a signed memory receipt with source, policy, purpose, and rollback pointer.
8. The user can inspect, correct, freeze, export, or delete eligible memory.

**SAGA Memory Garden:**
A user-facing interface that shows memory as understandable categories rather than opaque embeddings. Users can:

* see what SAGA knows;
* see what SAGA only suspects;
* correct or dispute an item;
* choose what may follow them to another school;
* pause personalization;
* request forgetting;
* review who accessed institutional records.

**SAGA Portability Capsule:**
A signed, minimized export containing user-approved competencies, preferences, accessibility settings, and provenance. Raw chat histories, hidden prompts, and institution-restricted records do not transfer by default.

**Teacher SAGA:**
The teacher version learns teaching preferences, lesson structures, resource choices, classroom routines, and reflective practice. It may recommend but never silently enforce pedagogy.

**Learner SAGA:**
The learner version supports study planning, practice, reflection, accessibility, and continuity. It must not create covert psychological profiles or emotion labels.

**Success measures:**

* improved continuity across sessions and devices;
* fewer repeated setup actions;
* measurable learning benefit against a non-personalized baseline;
* high correction and transparency usability;
* low rate of harmful or stale memory;
* successful offline operation;
* successful export and deletion tests.

---

### 2A.3 TwinTeach Live — Human Teacher and AI Co-Teaching Runtime

**Definition:** TwinTeach Live is a real-time classroom co-teaching system in which the human teacher remains the authority while AI prepares, observes permitted signals, proposes activities, and manages supporting tasks.

**Operating roles:**

* **Teacher:** instructional authority and final decision-maker.
* **Teacher SAGA:** private planning and reflection partner.
* **Classroom Conductor:** coordinates lesson state, timing, activities, and approved devices.
* **Learner SAGAs:** provide private support without exposing individual content to the class.
* **Evidence Spine:** records material system actions and teacher overrides.

**Live lesson state machine:**

1. **Prepare:** load curriculum objective, lesson plan, accessibility profile, resources, and policy capsule.
2. **Open:** teacher confirms the lesson and activates only permitted sensors and services.
3. **Teach:** AI follows the declared lesson state without taking control of the classroom.
4. **Propose:** AI offers optional prompts, examples, grouping patterns, or activities.
5. **Approve:** teacher accepts, edits, delays, or rejects the proposal.
6. **Conduct:** approved activity is distributed to boards, displays, learner devices, or motion zones.
7. **Reflect:** teacher receives a post-lesson summary based on permitted evidence.
8. **Close:** ephemeral streams are destroyed, retained artifacts are sealed, and the lesson receipt is generated.

**Live capabilities:**

* generate alternative explanations during a lesson;
* produce multilingual or accessibility-adapted versions;
* create a quick formative activity;
* distribute tasks to groups;
* manage timers and classroom displays;
* detect technical issues and degraded offline services;
* privately support a learner through their SAGA;
* summarize board content and teacher-marked outcomes;
* propose follow-up work after teacher review.

**Authority boundaries:**

* no autonomous grading of consequential work;
* no disciplinary recommendations based on sensor data;
* no emotion inference;
* no covert recording;
* no automatic intervention visible to the class without teacher approval;
* no learner ranking from movement, camera, voice, or behavioral proxies.

**Emergency controls:**
A physical or always-visible software control must disable AI generation, sensing, recording, and device orchestration independently. The lesson must continue in manual mode.

**Success measures:**

* teacher time saved without loss of authority;
* reduced interruption during live teaching;
* high proposal acceptance quality;
* low false or distracting interventions;
* complete manual fallback;
* no hidden sensing or recording.

---

### 2A.4 MotionClass — The Classroom as an Educational Interface

**Definition:** MotionClass turns movement, zones, objects, and group position into voluntary educational interactions without identifying or profiling individuals.

**Example experiences:**

* learners move to answer zones for a physical poll;
* teams assemble around stations for a collaborative challenge;
* projected objects react to class movement;
* a geography activity uses floor zones as countries or regions;
* mathematics activities use body position for coordinates, scale, or geometry;
* language groups rotate through speaking, listening, and vocabulary stations;
* accessibility alternatives provide equivalent device, switch, voice, or teacher-assisted input.

**Event model:**
MotionClass processes abstract events such as:

* `zone_entered`;
* `zone_count_changed`;
* `object_moved`;
* `group_ready`;
* `gesture_triggered`;
* `activity_completed`.

The default event contains no face, name, biometric template, emotion label, or persistent movement signature.

**Activity Conductor:**
A deterministic runtime interprets activity definitions, validates safety constraints, receives abstract motion events, updates the shared display, and issues completion receipts.

**Activity package fields:**

* learning objective;
* age range;
* room layout;
* required zones and devices;
* permitted sensor classes;
* accessibility alternatives;
* maximum movement speed and density;
* teacher control points;
* scoring rules;
* data-retention rule;
* emergency stop behavior;
* validation fixtures.

**Safety constraints:**

* room calibration before use;
* no running requirement unless specifically approved;
* collision-aware zone spacing;
* maximum group density;
* accessible equivalent interaction;
* immediate teacher pause;
* no use for discipline, attendance enforcement, or psychological assessment.

**Success measures:**

* learning outcome compared with seated alternatives;
* participation distribution;
* accessibility equivalence;
* zero retained identity traces;
* low sensor error rate;
* successful emergency stop.

---

### 2A.5 No-ID Motion Layer — Non-Identification by Architecture

**Definition:** The No-ID Motion Layer is a sensing pipeline engineered to output only anonymous spatial events required by an approved activity.

**Privacy transformation pipeline:**

1. Raw sensor frames enter volatile memory inside the classroom edge device.
2. A local processor extracts coarse silhouettes, depth regions, object motion, or zone occupancy.
3. Identity-capable attributes are discarded before leaving the sensor boundary.
4. The processor emits only activity-specific abstract events.
5. Raw frames are never written to disk in normal mode.
6. Events expire at lesson close unless a documented aggregate is required.
7. An independent privacy test verifies that identity reconstruction is not reasonably possible from outputs.

**Permitted sensor patterns:**

* low-resolution depth sensors;
* thermal or infrared occupancy grids where lawful;
* pressure mats;
* local ultra-wideband tokens used voluntarily for an activity;
* device motion sensors;
* ordinary cameras only where the edge transformation is verified and raw frames cannot be accessed by application services.

**Explicitly prohibited:**

* facial recognition;
* gait recognition;
* emotion recognition;
* voiceprint identification;
* persistent body tracking across lessons;
* individual engagement scores;
* inference of disability, ethnicity, health, religion, or behavior risk;
* reuse of motion data for attendance, discipline, advertising, or staff monitoring.

**Fail-closed behavior:**
If the edge transformation cannot prove that raw images are being discarded, MotionClass must disable the visual sensor and fall back to non-visual inputs.

---

### 2A.6 SecureBoard Guardian — Quorum-Sealed Emergency Classroom Evidence

> **Feature ID:** SF-SBG-001
> **Recognition name:** SecureBoard Guardian
> **Feature family:** Privacy-Preserving Classroom Sensing
> **Status:** Flagship invention / target specification
> **One-line identity:** Cameras may capture safety evidence, but nobody can view, search, copy, export, or download it unless a formally authorized safety incident satisfies a physically co-present five-person school-board quorum and the required court or legal authorization.

#### 2A.6.1 Purpose

SecureBoard Guardian exists only to preserve trustworthy evidence for exceptional safety circumstances. It is not a classroom-observation product, teacher-evaluation product, parent-viewing product, behavioral analytics product, or lesson-replay product.

The design separates **capture** from **access**:

* capture may occur under a published institutional safety policy;
* access remains cryptographically impossible during normal operation;
* no ordinary administrator possesses a usable decryption key;
* an incident alone does not unlock a recording;
* a principal, IT administrator, teacher, vendor, or system owner cannot override the seal;
* release requires the complete emergency authorization ceremony.

#### 2A.6.2 Non-Negotiable Safety Principle

> **Record for protection; never open for observation.**

The system shall not support:

* live classroom viewing;
* remote monitoring;
* routine lesson review;
* teacher performance review;
* student discipline fishing expeditions;
* attendance inference;
* behavior, engagement, emotion, or productivity scoring;
* facial recognition, face search, biometric categorization, or persistent identity tracking;
* unrestricted guardian or parent access;
* ad hoc administrator playback;
* vendor support access to content;
* model training from recordings;
* background audio transcription;
* searchable person, speech, or behavior indexes.

#### 2A.6.3 Capture Boundary

SecureBoard Guardian uses **BoardVision Constrained Capture** as its sensing component.

The installation profile shall define:

1. the teaching board, projection surface, demonstration zone, entrances required for safety evidence, and other explicitly approved zones;
2. prohibited zones such as toilets, changing spaces, medical rooms, counseling rooms, and any space where recording would be disproportionate or unlawful;
3. hardware lens limits and fixed mounting;
4. visible privacy masks;
5. disabled automatic pan, tilt, zoom, face-following, and room-tracking functions;
6. a visible physical recording indicator that cannot be disabled in software;
7. local encryption before persistent storage;
8. an approved retention window followed by cryptographically verifiable destruction.

A school may choose a wider safety framing than board-only capture only after a documented necessity, proportionality, legal-basis, data-protection, safeguarding, and human-rights review. No such review is implied by this blueprint.

#### 2A.6.4 Normal-State Access Model: Zero Viewers

During normal operation:

* recordings are encrypted at creation;
* thumbnails are not generated;
* previews are not generated;
* speech-to-text is disabled;
* content indexing is disabled;
* cloud model analysis is disabled;
* human playback is disabled;
* export and download are disabled;
* help-desk impersonation is disabled;
* database administrators can see metadata but not content;
* backup administrators can restore ciphertext but cannot decrypt it;
* no single institutional or vendor account can reconstruct a content key.

The user interface shall display **SEALED — ZERO VIEWERS** rather than presenting a video library.

#### 2A.6.5 Cryptographic Seal Architecture

Each recording segment receives an independent random data-encryption key. The segment is encrypted locally using authenticated encryption. The data key is then wrapped by a threshold-controlled key-release service.

Target design:

* one unique data key per segment;
* hardware-backed root of trust where supported;
* threshold cryptography or multi-party key wrapping;
* no complete decryption key stored in application databases;
* no master “super-admin” key;
* no password recovery path capable of bypassing quorum;
* immutable integrity hash for every segment;
* signed time, device, room, policy, and retention metadata;
* tamper-evident access and incident receipts;
* key destruction at retention expiry;
* crypto-agility and tested migration procedures.

The five board members do not share a password. Each uses an independent named identity, a personal secret or passkey, and a second factor. Compromise of one account shall not reduce the quorum.

#### 2A.6.6 Emergency Access Preconditions

A recording remains sealed unless **all** of the following are true:

1. A qualifying safety incident has been formally registered.
2. The incident type is within the institution’s approved safety-access policy.
3. The exact room, camera, date, and minimum time window are identified.
4. Necessity and proportionality are documented.
5. Preservation is placed on the relevant ciphertext to prevent automatic expiry while authorization is pending.
6. The institution’s designated legal or safeguarding officer validates the request.
7. A valid court order, judicial authorization, prosecutorial request, or other legally sufficient instrument is attached when required by applicable law or institutional policy.
8. At least five authorized school-board members are physically present in the approved secure location.
9. Each of the five members authenticates independently.
10. Co-presence is verified by the secure-room ceremony controls.
11. Every member sees the same incident scope and confirms it.
12. The policy-defined vote threshold is satisfied. The default is unanimous approval by all five participants.
13. The requested time window is technically minimized.
14. The release is time-limited and bound to the declared purpose.
15. The full ceremony creates a signed, tamper-evident authorization receipt.

Failure of any condition keeps the recording sealed.

#### 2A.6.7 Physical Co-Presence Ceremony

Remote quorum is prohibited by default.

The secure ceremony shall require:

* all five authorized members in the same approved room;
* five separate managed devices or five isolated authentication stations;
* short-range room-bound challenge verification;
* a visible countdown and shared incident summary;
* individual authentication using password or passkey plus second factor;
* prohibition of proxy voting and delegated credentials;
* no email, telephone, chat, or remote-desktop approval;
* cancellation if any participant leaves, times out, or changes the requested scope;
* restart of the ceremony after any material request change.

Co-presence technology is an enforcement aid, not proof of legality. Human and legal controls remain mandatory.

#### 2A.6.8 Court and Legal Authorization Gate

The system shall include a configurable **Legal Instrument Gate**.

Possible accepted instrument classes are determined by jurisdiction and institutional counsel and may include:

* court order;
* judicial authorization;
* prosecutorial preservation or disclosure request;
* lawful emergency disclosure basis;
* another formally approved legal instrument.

ScholaForge shall not decide whether an instrument is legally valid. It shall require an authorized human legal officer to attest validity and attach the evidence. Where the institution adopts a stricter rule requiring a court order for every download, the software must enforce that stricter rule without override.

**HUMAN_REVIEW_REQUIRED:** Belgian and other applicable legal requirements, labor rules, education-community rules, child-protection obligations, data-protection law, criminal procedure, and evidentiary admissibility must be reviewed before activation.

#### 2A.6.9 Controlled Review and Download

The blueprint distinguishes two actions:

* **Controlled review:** temporary playback inside the secure review room.
* **Evidence export:** creation of a legally scoped downloadable package.

Both require the full five-member ceremony unless a stricter policy applies. Export additionally requires the Legal Instrument Gate.

The exported package shall contain only the approved minimum time window and include:

* encrypted or access-controlled video;
* content hash;
* source device and room identifiers;
* capture timestamps and clock-confidence record;
* chain-of-custody manifest;
* incident identifier;
* authorizing instrument reference;
* five-member authorization receipt;
* legal-officer attestation;
* redaction record, when applicable;
* export recipient and purpose;
* expiration or onward-retention restrictions;
* verification instructions.

The system shall never create an unlogged plain file. Export must occur to approved encrypted media, an approved justice-sector endpoint, or another policy-authorized destination.

#### 2A.6.10 Temporary Decryption and Key Destruction

When authorization succeeds:

1. the threshold service releases a short-lived session key;
2. decryption occurs only inside the secure review enclave;
3. the permitted segment and time window are enforced;
4. screen capture, clipboard, local cache, and external network routes are blocked where technically feasible;
5. the session is visibly marked with incident and authorization identifiers;
6. the session expires automatically;
7. volatile plaintext and temporary keys are destroyed;
8. the original ciphertext remains sealed;
9. a signed closure receipt records completion, export, cancellation, or failure.

No permanent decrypted library is created.

#### 2A.6.11 Emergency Failure Rules

* If quorum cannot be reached, access remains denied.
* If a credential is compromised, the member is suspended and quorum must be reconstituted.
* If the legal instrument cannot be validated, export remains denied.
* If integrity verification fails, content remains quarantined and the incident is escalated.
* If the secure room loses trust, the ceremony terminates.
* If the authorization service is offline, recordings remain encrypted; there is no fail-open mode.
* If immediate life safety requires real-time intervention, staff use emergency procedures and emergency services—not retrospective recording access.
* A “break glass” administrator account is prohibited.

#### 2A.6.12 Governance Roles

| Role                       | Permitted action                                          | Prohibited action                           |
| -------------------------- | --------------------------------------------------------- | ------------------------------------------- |
| Teacher                    | See capture status; report incident; request preservation | Watch, search, export, delete, or unlock    |
| Principal                  | Register incident; initiate governance workflow           | Unilateral playback or override             |
| Board member               | Participate in a five-person ceremony                     | Delegate credentials or approve remotely    |
| Legal/safeguarding officer | Validate legal and safety basis                           | Bypass quorum                               |
| DPO/privacy officer        | Review policy, DPIA, access evidence, and complaints      | Unlock recordings alone                     |
| IT/security administrator  | Maintain encrypted infrastructure and device health       | Decrypt content                             |
| Vendor support             | Diagnose using synthetic data and non-content telemetry   | Access school recordings                    |
| Court/authorized authority | Receive scoped evidence through lawful process            | Obtain unrelated footage through product UI |

#### 2A.6.13 Retention and Preservation

* Standard retention must be short, explicit, and institution-approved.
* Expiry automatically destroys segment keys and records a deletion receipt.
* An incident preservation hold freezes only the minimum relevant ciphertext.
* A preservation hold does not grant viewing rights.
* Holds expire unless renewed by an authorized legal process.
* Redundant copies inherit the same key lifecycle and hold state.
* Deleted-key verification is included in retention audits.
* Long-term evidence retained by an authorized authority leaves the school’s normal recording store under a documented chain of custody.

#### 2A.6.14 Explainability and User Recognition

Every SecureBoard screen must answer:

1. **Why is the camera recording?**
2. **What zones can it see?**
3. **Who can normally view it?** — Nobody.
4. **What event could unlock it?**
5. **Why are five board members required?**
6. **Is a court or legal authorization required?**
7. **How long is it retained?**
8. **How can a learner, guardian, or staff member exercise applicable rights?**
9. **What was accessed, by whom, under which incident, and with what authorization?**

The feature must always use the recognizable labels:

* **SecureBoard Guardian**
* **SEALED — ZERO VIEWERS**
* **Five-Person Physical Quorum**
* **Legal Instrument Gate**
* **Emergency Evidence Ceremony**
* **Threshold-Sealed Recording**
* **No Principal Override**
* **No Remote Approval**

#### 2A.6.15 Interfaces and State Machine

Recognizable states:

```text
CAPTURING_ENCRYPTED
SEALED_ZERO_VIEWERS
PRESERVATION_HOLD
INCIDENT_PENDING
LEGAL_GATE_PENDING
QUORUM_ASSEMBLING
QUORUM_AUTHENTICATING
QUORUM_APPROVED
SECURE_REVIEW_ACTIVE
EXPORT_AUTHORIZED
EXPORT_COMPLETED
SESSION_CLOSED
RETENTION_DESTROYED
QUARANTINED_INTEGRITY_FAILURE
ACCESS_DENIED
```

Forbidden transitions include:

```text
SEALED_ZERO_VIEWERS -> SECURE_REVIEW_ACTIVE
SEALED_ZERO_VIEWERS -> EXPORT_COMPLETED
INCIDENT_PENDING -> EXPORT_AUTHORIZED
QUORUM_APPROVED -> EXPORT_COMPLETED without LEGAL_GATE_APPROVED
```

#### 2A.6.16 Success Measures

* zero routine playback capability;
* zero single-person unlock paths;
* zero remote quorum approvals;
* 100% of access sessions linked to a qualifying incident;
* 100% of exports linked to a validated legal instrument when required;
* five independent identities present in every ceremony receipt;
* complete chain of custody for every exported segment;
* automatic denial on missing, expired, or changed authorization;
* tested destruction of temporary keys and plaintext;
* tested retention-key destruction;
* verified inability of IT and vendor administrators to decrypt content;
* verified minimum-window export;
* no facial, emotion, engagement, or behavior analytics;
* successful independent privacy, security, safeguarding, and legal review before activation.

#### 2A.6.17 Acceptance Tests

1. A principal acting alone cannot view or export any recording.
2. Four valid board members cannot satisfy a five-person quorum.
3. Five remote users cannot satisfy physical co-presence.
4. Five co-present users without a valid incident cannot unlock.
5. Five co-present users with an incident but a failed Legal Instrument Gate cannot export.
6. Changing the requested time window invalidates existing approvals.
7. A departing participant cancels the ceremony.
8. A compromised board credential can be revoked without exposing recordings.
9. Database, backup, and cloud administrators cannot derive a content key.
10. Vendor support cannot access real recordings.
11. Playback terminates when the short-lived session expires.
12. Plaintext does not remain on disk, cache, logs, crash dumps, or backups.
13. Export contains only the authorized interval.
14. Hash verification detects modified ciphertext or evidence packages.
15. Automatic retention expiry destroys access while preserving a non-content deletion receipt.
16. No camera pipeline performs face recognition, emotion inference, identity tracking, or behavior scoring.
17. The system fails closed during network, policy, identity, key-service, and time-synchronization failures.

#### 2A.6.18 Regulatory and Ethical Boundary

This target design reduces unauthorized access risk but does not make pervasive school recording automatically lawful, necessary, proportionate, ethical, or admissible. Camera placement, audio capture, notice, legal basis, worker consultation, child rights, retention, access rights, disclosure duties, and court procedures require jurisdiction-specific review.

**No compliance claim is authorized by this blueprint.**

---

### 2A.7 Offline Neural Mesh — Cloud-Optional Educational Intelligence

**Definition:** The Offline Neural Mesh is the local-first execution and synchronization architecture that keeps classroom AI, identity, content, and evidence functional without continuous internet access.

**Offline service tiers:**

* **Tier 0 — Manual continuity:** curriculum, files, assignments, and teacher controls remain available.
* **Tier 1 — Deterministic intelligence:** search, rules, activity orchestration, policy, and evidence remain available.
* **Tier 2 — Local generative intelligence:** approved local language, speech, vision, or embedding models operate on school or device hardware.
* **Tier 3 — Deferred federation:** queued updates synchronize when a trusted connection becomes available.
* **Tier 4 — Optional cloud augmentation:** selected tasks may use approved external models through the Model Gateway.

**Local mesh roles:**

* classroom edge node;
* school inference node;
* teacher device;
* learner device;
* local content mirror;
* evidence anchor;
* policy authority;
* synchronization coordinator.

**Synchronization principles:**

* local operation never waits for cloud confirmation;
* changes use signed, append-only envelopes;
* conflicts are visible and policy-resolved;
* sensitive raw data is not synchronized by default;
* model and content updates are signed, scanned, staged, and rollback-capable;
* offline identity uses short-lived credentials and local trust roots;
* all deferred external requests require revalidation at send time.

**Graceful degradation:**
Every AI capability declares:

* minimum hardware;
* offline model;
* reduced-capability mode;
* manual replacement workflow;
* maximum stale-policy interval;
* maximum disconnected period;
* recovery procedure.

**Success measures:**

* full school-day operation without internet;
* deterministic reconciliation;
* no duplicate or lost evidence;
* bounded stale-policy behavior;
* acceptable local latency;
* successful rollback after a bad update.

---

### 2A.8 OMEGA Seal Sandbox — Safe Educational Experimentation

**Definition:** OMEGA Seal is a capability-isolated sandbox for code, simulations, models, agents, content, and experiments, designed to prevent untrusted activity from reaching school systems, learner data, or external networks.

**Seal levels:**

* **OMEGA-0 — Preview:** no execution; static inspection only.
* **OMEGA-1 — Pure computation:** isolated CPU/memory; no files, devices, or network.
* **OMEGA-2 — Synthetic workspace:** temporary files and approved synthetic datasets.
* **OMEGA-3 — Curated educational data:** read-only, minimized, policy-approved data with watermarked outputs.
* **OMEGA-4 — Controlled integration test:** mocked institutional services and signed fixtures.
* **OMEGA-5 — Exceptional supervised bridge:** time-bound, dual-approved access to a narrowly scoped real service; disabled by default.

**Default deny capabilities:**

* outbound network;
* microphones and cameras;
* host filesystem;
* credentials;
* printers and nearby devices;
* package installation from untrusted sources;
* background persistence;
* arbitrary model downloads;
* hidden subprocesses;
* access to another user’s SAGA.

**Execution lifecycle:**

1. package or prompt enters quarantine;
2. static and policy inspection runs;
3. requested capabilities are declared;
4. OMEGA assigns the lowest sufficient seal level;
5. execution occurs within quotas;
6. outputs are scanned for secrets, personal data, unsafe code, and policy violations;
7. approved artifacts are exported through a one-way review gate;
8. the environment is destroyed;
9. a reproducibility and evidence envelope is retained.

**Educational uses:**

* learner coding;
* scientific simulations;
* agent experiments;
* robotics logic against digital twins;
* model evaluation;
* creative media generation;
* cybersecurity training with synthetic targets;
* teacher-created interactive activities.

**OMEGA Seal guarantee:**
“Sealed” is a target assurance claim, not an absolute security claim. It must be supported by threat modeling, isolation testing, escape testing, supply-chain checks, and independent review.

**Success measures:**

* no sandbox escape in validation;
* complete capability declaration;
* reproducible runs;
* safe output transfer;
* fast environment reset;
* clear teacher supervision controls.

---

### 2A.9 Activity Conductor — Real-Time Multi-Participant Learning Orchestration

**Definition:** Activity Conductor coordinates teacher instructions, learner devices, shared displays, MotionClass zones, SAGA support, timers, resources, and evidence as one live learning experience.

**Activity states:**
`draft → validate → teacher_ready → active → paused → completed → reflected → sealed`

**Core logic:**

* validates the activity against policy, age, room, accessibility, devices, and offline status;
* provides teacher rehearsal mode;
* assigns group or individual tasks without exposing private SAGA data;
* synchronizes shared and personal views;
* handles late joins and device loss;
* supports teacher edits during the activity;
* creates a compact outcome record;
* separates participation evidence from consequential assessment.

**Activity types:**

* whole-class challenge;
* station rotation;
* group investigation;
* embodied quiz;
* simulation;
* debate;
* peer review;
* maker activity;
* field activity;
* quiet individual practice.

---

### 2A.10 Evidence Spine — Every Important Action Carries Its Reason

**Definition:** The Evidence Spine is the append-only system that connects user intent, policy, source material, AI processing, human decisions, outcomes, and rollback.

Every material AI-assisted action should be able to answer:

* Who requested it?
* For what educational purpose?
* Which policy allowed it?
* Which data was used?
* Which model or deterministic process ran?
* What uncertainty existed?
* Who reviewed or overrode it?
* What was shown to the affected person?
* How can it be challenged, corrected, or reversed?

The Evidence Spine does not claim legal compliance automatically. It compiles verifiable material for institutional, technical, pedagogical, and legal review.

---

### 2A.11 Competitive Recognition Test

A ScholaForge feature qualifies as a signature invention only if it satisfies at least four of the following:

1. It creates a new educational interaction rather than reproducing a conventional screen workflow.
2. It has a stable name and one-sentence definition.
3. It combines multiple subsystems into a repeatable mechanism.
4. It produces a measurable outcome.
5. It has explicit privacy and safety boundaries.
6. It can operate offline or degrade safely.
7. It generates evidence and supports challenge.
8. It is difficult to reproduce without the underlying policy, data, validation, and operational model.
9. It can be demonstrated in less than ten minutes.
10. It remains meaningful even when the underlying foundation model is replaced.

---

### 2A.12 Feature Demonstration Sequence

The preferred ScholaForge demonstration is not a dashboard tour. It is a single lesson narrative:

1. The school disconnects from the internet; Offline Neural Mesh remains operational.
2. The teacher opens TwinTeach Live and loads an approved lesson.
3. Teacher SAGA proposes a multilingual activity, and the teacher edits it.
4. Activity Conductor distributes roles to learner devices.
5. MotionClass turns the room into a collaborative map using No-ID motion events.
6. A learner receives private accessibility support from their SAGA.
7. BoardVision captures only the teaching surface with visible secure-mode indicators.
8. Learners test a simulation inside OMEGA Seal without network or school-data access.
9. The teacher closes the lesson; ephemeral sensor data is destroyed.
10. The Evidence Spine generates the lesson receipt and BoardVision applies dual-control access.

This sequence communicates the integrated invention more effectively than a feature list.

---

### 2A.13 Invention Validation Matrix

| Invention           | Primary hypothesis                                                              | Minimum proof                                          | Failure signal                                           |
| ------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------- |
| MySAGA              | Longitudinal, user-controlled memory improves continuity and learning           | Controlled pilot plus correction/export/deletion tests | No outcome gain, opaque memory, or harmful persistence   |
| TwinTeach Live      | AI can reduce teacher cognitive load without displacing authority               | Live classroom pilot with override metrics             | Teacher distraction, automation bias, or loss of control |
| MotionClass         | Embodied interaction improves participation or learning for selected activities | Comparative activity trial and accessibility review    | Novelty without learning benefit or exclusion            |
| No-ID Motion Layer  | Useful movement events can be produced without identity processing              | Privacy attack test and event utility test             | Identity reconstruction or insufficient utility          |
| BoardVision         | Teaching artifacts can be captured without routine student surveillance         | Framing test, quarantine test, and lawful-use review   | People repeatedly captured or access misuse              |
| Offline Neural Mesh | Core AI education workflows can continue without cloud dependence               | Full-day disconnected test and reconciliation          | Unusable latency, stale policy, or data divergence       |
| OMEGA Seal          | Powerful experimentation can be isolated from institutional systems             | Escape, egress, secret, and artifact-transfer tests    | Sandbox escape or uncontrolled capability                |
| Activity Conductor  | Multi-participant experiences can be safely orchestrated in real time           | Classroom rehearsal and failure injection              | Loss of synchronization or inaccessible fallback         |
| Evidence Spine      | Material actions can be reconstructed and challenged                            | End-to-end audit replay                                | Missing provenance or irreversible decisions             |

---

### 2A.14 Intellectual-Property and Defensibility Posture

ScholaForge should not rely on secrecy around generic software implementation. Defensibility should come from:

* named mechanisms and consistent product language;
* validated pedagogical protocols;
* privacy-preserving sensing designs;
* SAGA memory governance and portability;
* OMEGA capability policies and assurance tests;
* offline synchronization and policy behavior;
* institutional integrations;
* evidence schemas;
* longitudinal outcome data collected lawfully;
* educator communities and activity libraries;
* published interoperability profiles;
* carefully selected patent, trade-secret, copyright, trademark, and open-standard strategies reviewed by qualified counsel.

No patentability or freedom-to-operate claim is made by this blueprint. HUMAN_REVIEW_REQUIRED.

---

## 2B. Product Capability Atlas — Complete Recognizable Feature Map

### 2B.1 How to Read This Blueprint

ScholaForge is organized into three recognizable layers:

1. **Flagship inventions** — the distinctive systems that define ScholaForge, such as MySAGA, TwinTeach Live, MotionClass, SecureBoard Guardian, Offline Neural Mesh, OMEGA Seal, Activity Conductor, and Evidence Spine.
2. **Product capability domains** — the everyday features used by teachers, learners, families, administrators, and communities.
3. **Shared platform services** — identity, policy, retrieval, evidence, interoperability, security, synchronization, observability, and governance.

Every capability must have:

* one canonical name;
* one stable feature ID;
* one owner;
* one purpose;
* one user-visible entry point;
* explicit inputs and outputs;
* clear data boundaries;
* a state model;
* failure behavior;
* explainability;
* acceptance tests;
* dependencies;
* implementation status;
* evidence of validation.

A capability is not considered documented if it appears only as a bullet inside another section.

### 2B.2 Capability Family Index

| Family ID | Capability family                 | Primary users                        | Canonical modules                                        |
| --------- | --------------------------------- | ------------------------------------ | -------------------------------------------------------- |
| SF-FAM-01 | Personal Educational Intelligence | Learners, teachers, authorized staff | MySAGA, Learning DNA, Memory Garden                      |
| SF-FAM-02 | Teaching Design and Delivery      | Teachers, co-teachers                | ActivityForge, Lesson Studio, TwinTeach Live             |
| SF-FAM-03 | Classroom Interaction             | Teachers, learners                   | MotionClass, Activity Conductor, Class Symphony          |
| SF-FAM-04 | Learning and Practice             | Learners, teachers                   | Quest Engine, Study Coach, Project Studio                |
| SF-FAM-05 | Content and Resource Ecosystem    | Authors, schools, communities        | Activities Library, EduVerse, Resource Libraries         |
| SF-FAM-06 | Curriculum and Knowledge          | Teachers, leaders, curriculum teams  | Knowledge Galaxy, Curriculum Mapper                      |
| SF-FAM-07 | Assessment and Evidence           | Teachers, learners, auditors         | Assessment Studio, Rubric Studio, Evidence Spine         |
| SF-FAM-08 | Collaboration and Community       | Teachers, learners, schools          | Co-authoring, Peer Review, Professional Communities      |
| SF-FAM-09 | Safety, Privacy, and Governance   | Schools, boards, DPOs, auditors      | SecureBoard Guardian, Guardian Policy Engine             |
| SF-FAM-10 | Sovereignty and Offline Operation | All users                            | Offline Neural Mesh, local models, synchronization       |
| SF-FAM-11 | Safe Experimentation              | Teachers, learners, developers       | OMEGA Seal Sandbox                                       |
| SF-FAM-12 | Retrieval and Knowledge Access    | All users and AI modules             | ScholaGraph Retrieval Fabric                             |
| SF-FAM-13 | Analytics and Improvement         | Teachers, learners, leaders          | Learning Analytics, Activity Analytics, Impact Monitor   |
| SF-FAM-14 | Administration and Operations     | Administrators, IT, support          | Tenant, identity, device, policy, license, audit centers |
| SF-FAM-15 | Interoperability and Portability  | IT, schools, ecosystems              | OneRoster, LTI, QTI, CASE, xAPI/Caliper, credentials     |
| SF-FAM-16 | Accessibility and Inclusion       | All users                            | Accessibility Assistant, multimodal adaptation           |

### 2B.3 Canonical Feature Card Template

Every feature section shall follow this order:

1. **Feature ID and canonical name**
2. **One-line identity**
3. **Problem solved**
4. **Primary users**
5. **User-visible entry points**
6. **Core capabilities**
7. **Inputs**
8. **Outputs**
9. **Data classifications**
10. **Decision and state logic**
11. **Happy-path workflow**
12. **Failure and fallback workflow**
13. **Permissions**
14. **Security and privacy controls**
15. **Explainability**
16. **Retrieval behavior**
17. **Evidence receipts**
18. **APIs and events**
19. **Dependencies**
20. **Acceptance criteria**
21. **Prohibited behavior**
22. **Implementation status**

This template is mandatory for all future additions.

---

## 2B-A. Private Mastery Routing — Technical Specification

> **Feature ID:** SF-PMR-001
> **Status:** TARGET_SPEC
> **Owner domain:** MySAGA / Teaching Personalization
> **Primary outcome:** Each learner receives a suitable next task without exposing a reductive public level.

### Technical Purpose

Private Mastery Routing converts a common curriculum objective into learner-specific task requirements. It does not directly expose the complete learner model to content services.

### Readiness Model

Readiness is multidimensional and domain-specific:

```yaml
readiness_state:
  objective_id: uuid
  prerequisite_mastery: []
  demonstrated_competencies: []
  evidence_confidence: 0.0-1.0
  independence_band: supported|guided|independent|transfer
  complexity_band: foundation|application|analysis|synthesis|extension
  learning_velocity: unknown|slow|steady|rapid
  successful_supports: []
  accessibility_requirements: []
  uncertainty: []
  expiry: timestamp
```

The model shall not contain an operational universal IQ ranking.

### Task Need Capsule

MySAGA transforms the private readiness state into a minimized capsule:

```yaml
capsule_id: uuid
learner_pseudonym: rotating_identifier
objective_id: uuid
readiness_band: string
target_growth_band: string
required_scaffolds: []
prohibited_scaffolds: []
allowed_modalities: []
evidence_preferences: []
accessibility_constraints: []
offline_required: boolean
maximum_duration: integer
policy_decision_id: uuid
expires_at: timestamp
signature: string
```

### Routing Pipeline

1. Receive teacher-approved common objective.
2. Resolve learner authorization and purpose.
3. Retrieve learner-private evidence inside the SAGA boundary.
4. Estimate readiness and uncertainty.
5. Detect missing evidence and possible confounders.
6. Generate Task Need Capsule.
7. Query approved activity and task variants.
8. Filter by curriculum, policy, accessibility, resources, and safety.
9. Rank for productive challenge.
10. Apply anti-undermining checks.
11. Present recommendation and explanation.
12. Allow learner and teacher adjustment.
13. Deliver task using neutral presentation.
14. Collect declared evidence.
15. Update readiness only after validation rules.
16. Create routing and update receipts.

### Productive-Challenge Logic

The target task should maximize expected learning gain while controlling frustration and under-challenge.

Signals include:

* prerequisite coverage;
* recent independent performance;
* support dependency;
* error type;
* transfer performance;
* response to prior challenge;
* learner request;
* teacher judgment;
* accessibility barriers;
* evidence confidence.

The engine must distinguish:

* conceptual difficulty;
* language difficulty;
* inaccessible presentation;
* missing prerequisite;
* unfamiliar interface;
* lack of materials;
* temporary interruption;
* genuine need for greater challenge.

### Anti-Undermining Controls

Release is blocked unless tests verify:

* no permanent low-level assignment;
* periodic upward-challenge probes;
* learner-requested challenge path;
* teacher override with reason;
* monitoring for demographic disparity;
* no use of protected traits as challenge reducers;
* no public display of readiness bands;
* no circular logic where easy tasks permanently produce only easy-task evidence;
* expiry of uncertain hypotheses;
* restoration from incorrect profile updates.

### Evaluation Connection

Task difficulty and support are recorded separately from competency achievement.

A learner is not penalized merely because:

* a different task variant was assigned;
* accessibility support was used;
* an alternative evidence format was used.

INSIGHT receives:

* competency target;
* task complexity;
* support conditions;
* evidence;
* independence;
* transfer result;
* confidence.

### APIs

```text
POST /v1/mastery-routing/readiness/evaluate
POST /v1/mastery-routing/task-capsules
POST /v1/mastery-routing/candidates
POST /v1/mastery-routing/assign
POST /v1/mastery-routing/challenge
POST /v1/mastery-routing/correct
GET  /v1/mastery-routing/assignments/{id}/explanation
```

### Events

```text
mastery.readiness.evaluated
mastery.task_capsule.created
mastery.task_candidate.ranked
mastery.assignment.proposed
mastery.assignment.accepted
mastery.assignment.adjusted
mastery.assignment.challenged
mastery.profile.corrected
mastery.underchallenge_risk.detected
mastery.overchallenge_risk.detected
```

### Evidence Receipts

* readiness-evaluation receipt;
* data-minimization receipt;
* task-capsule receipt;
* candidate-ranking receipt;
* teacher or learner adjustment receipt;
* task-delivery receipt;
* evidence-update receipt;
* challenge/correction receipt.

### Failure and Recovery

* Low evidence confidence → offer diagnostic or teacher-selected task.
* Retrieval unavailable → use approved offline task pack.
* Profile conflict → freeze automatic update and request review.
* Repeated failure → test prerequisites and accessibility before lowering complexity.
* Repeated effortless success → trigger upward-challenge probe.
* Bias alert → suspend affected routing policy and fall back to teacher selection.
* Synchronization conflict → preserve both evidence branches pending review.

### Acceptance Criteria

* two learners can receive different variants of one objective;
* classmates cannot infer readiness from visible labels;
* the central service cannot reconstruct the full SAGA profile from a capsule;
* a learner can request more challenge;
* a teacher can inspect the reason;
* uncertain readiness expires;
* accessibility support does not lower competency credit automatically;
* systematic under-challenge tests pass;
* offline routing functions using approved local packs;
* all consequential updates remain challengeable.

---

## 2B-B. INSIGHT Evaluation — Technical Specification

> **Feature ID:** SF-INS-001
> **Status:** TARGET_SPEC
> **Owner domain:** Assessment / Evidence / Human Oversight
> **Primary outcome:** Reliable, explainable, privacy-preserving competency evaluation.

### Evaluation Object

```yaml
evaluation_id: uuid
learner_id: protected_reference
objective_id: uuid
competency_id: uuid
evidence_items: []
task_context:
  complexity_band: string
  support_conditions: []
  modality: string
  accessibility_adaptations: []
dimensions:
  accuracy: {}
  reasoning: {}
  independence: {}
  transfer: {}
  improvement: {}
  consistency: {}
ai_suggestion: {}
reviewer_assessments: []
agreement_result: {}
final_human_decision: {}
challenge_status: {}
mastery_capsule: {}
evidence_receipt_id: uuid
```

### Evidence Types

* written response;
* oral explanation;
* demonstration;
* project artifact;
* laboratory performance;
* practical task;
* portfolio;
* peer collaboration evidence;
* teacher observation;
* learner reflection;
* assessment item;
* transfer task.

Evidence suitability depends on the competency. Reflection may support metacognition but shall not secretly determine unrelated grades.

### Decision Pipeline

1. Declare competency and acceptable evidence.
2. Collect evidence under known conditions.
3. Verify integrity and authorship to the proportionate extent required.
4. Retrieve rubric and curriculum mapping.
5. AI organizes evidence and may propose a mapping.
6. Reviewer 1 evaluates independently.
7. Reviewer 2 evaluates independently where policy requires.
8. Compute agreement.
9. If agreement is below threshold, initiate moderation.
10. Human reviewer confirms final decision.
11. Generate an explanation.
12. Offer learner challenge and correction.
13. Update competency record.
14. Optionally issue a privacy-preserving mastery capsule.
15. Record all decisions and changes.

### Agreement and Moderation

The blueprint permits approved reliability statistics, including Cohen’s kappa where categories are appropriate.

The agreement component must record:

* rating scale;
* reviewer independence;
* sample;
* statistic;
* confidence interval where applicable;
* threshold;
* result;
* moderation outcome.

A statistic does not replace professional judgment. It reveals whether the evaluation process is sufficiently consistent.

### Grading Representation

Schools may map competency evidence to local grades, but ScholaForge preserves the richer underlying result:

```yaml
competency_result:
  state: not_yet_evidenced|emerging|demonstrated|secure|advanced|transfer_verified
  complexity: foundation|application|analysis|synthesis|extension
  independence: supported|guided|independent
  confidence: 0.0-1.0
  evidence_count: integer
  last_verified: timestamp
  reviewer_agreement: {}
  uncertainty: []
```

### Private Mastery Capsule

A capsule proves an approved claim without exposing unnecessary raw records.

Possible claim:

```text
Learner has demonstrated competency C at independent application level.
```

The capsule may contain:

* claim identifier;
* issuing institution;
* competency;
* level;
* validity;
* verification material;
* revocation endpoint;
* no unnecessary raw score;
* no private reflections;
* no unrelated history.

### Human Oversight

High-impact decisions require:

* named accountable reviewer;
* visible AI contribution;
* explicit confirmation;
* recorded reason;
* challenge route;
* no auto-apply;
* no dark-pattern confirmation;
* sufficient review time;
* moderation where required.

### APIs

```text
POST /v1/insight/evaluations
POST /v1/insight/evaluations/{id}/evidence
POST /v1/insight/evaluations/{id}/ai-suggestion
POST /v1/insight/evaluations/{id}/reviews
POST /v1/insight/evaluations/{id}/agreement
POST /v1/insight/evaluations/{id}/moderate
POST /v1/insight/evaluations/{id}/finalize
POST /v1/insight/evaluations/{id}/challenge
POST /v1/insight/mastery-capsules
GET  /v1/insight/evaluations/{id}/explanation
```

### Events

```text
insight.evidence.added
insight.mapping.suggested
insight.review.completed
insight.agreement.below_threshold
insight.moderation.opened
insight.decision.finalized
insight.decision.challenged
insight.decision.corrected
insight.mastery_capsule.issued
insight.mastery_capsule.revoked
```

### Safeguards

* AI cannot finalize consequential results.
* Private SAGA memory is excluded unless explicitly approved for a relevant purpose.
* Accessibility adaptations are not negative evidence.
* Task difficulty is recorded separately from learner worth.
* Reviewer disagreement is visible.
* Uncertainty is preserved.
* Learner challenge is available.
* Historical corrections propagate.
* Protected attributes are not grading inputs.
* Cross-context evidence is not treated as equivalent without validation.

### Acceptance Criteria

* an evaluator can trace every result to evidence;
* two reviewers can rate independently;
* agreement is computed reproducibly;
* low agreement triggers moderation;
* AI suggestions are visibly distinguishable from human decisions;
* raw scores can remain private while mastery is verifiable;
* corrected evidence updates downstream records;
* the learner can challenge a result;
* alternative accessible evidence is accepted where pedagogically valid;
* final output explains competency, complexity, independence, support, confidence, and uncertainty.

---

## 2B-C. Human Potential and Pathway Intelligence — Technical Specification

### Shared Architecture

The following features share a governed evidence layer but retain separate decision purposes:

* Human Potential Engine;
* Career Genome;
* Passion Discovery Engine;
* Talent Constellation;
* Human Mentor Engine;
* Innovation Passport;
* Memory Garden.

No feature may reuse data for another purpose without policy authorization.

### Human Potential Engine

```yaml
potential_profile:
  learner_id: protected_reference
  verified_strengths: []
  emerging_strengths: []
  evidence_links: []
  interests_declared: []
  interests_observed: []
  pathway_hypotheses: []
  mentor_recommendations: []
  uncertainty: []
  learner_rejections: []
  human_confirmations: []
  expires_at: timestamp
```

#### Decision Rules

* pathway outputs are recommendations, never assignments;
* every hypothesis requires evidence links;
* uncertainty is mandatory;
* contradictory evidence must be visible;
* learner rejection is preserved;
* protected traits cannot determine opportunity restriction;
* no commercial recruiter access by default;
* hypotheses expire and must be recomputed.

#### APIs

```text
POST /v1/potential/evaluate
GET  /v1/potential/{learner_id}/explanation
POST /v1/potential/{learner_id}/correct
POST /v1/potential/{learner_id}/reject-pathway
POST /v1/pathways/explore
POST /v1/passions/suggest
POST /v1/talents/constellation
POST /v1/mentors/match
POST /v1/innovation-passport/entries
POST /v1/memory-garden/memories
```

#### Events

```text
potential.hypothesis.created
potential.hypothesis.rejected
potential.profile.corrected
pathway.exploration.started
passion.suggestion.presented
mentor.match.proposed
mentor.match.approved
passport.entry.verified
memory.entry.created
memory.entry.forgotten
```

#### Acceptance Gates

* no pathway result without evidence and explanation;
* learner can reject and correct;
* no permanent opportunity restriction;
* mentor matching requires safeguarding approval;
* Memory Garden deletion propagates;
* Passport entries require verification;
* Talent Constellation shows uncertainty and untested domains.

---

## 2B-D. School Digital Twin — Technical Specification

> **Feature ID:** SF-SDT-001

### Simulation Entities

* rooms;
* buildings;
* timetables;
* teachers;
* learner cohorts;
* accessibility routes;
* devices;
* transport;
* meals;
* specialist resources;
* energy systems;
* transition periods;
* policy constraints.

### Core Workflow

1. Ingest approved operational data.
2. Create a versioned baseline model.
3. Define a proposed change.
4. Run scenario simulation.
5. Measure conflicts, workloads, access, cost, and risk.
6. Present predicted outcomes and uncertainty.
7. Compare alternatives.
8. Require authorized human decision.
9. Implement outside the simulation.
10. Compare actual outcomes with prediction.
11. Update model calibration.

### Prohibited Uses

* individual behavioral surveillance;
* disciplinary prediction;
* hidden teacher performance scoring;
* automated staffing decisions;
* automatic room reassignment without approval.

### APIs

```text
POST /v1/digital-twin/scenarios
POST /v1/digital-twin/scenarios/{id}/simulate
GET  /v1/digital-twin/scenarios/{id}/results
POST /v1/digital-twin/scenarios/{id}/compare
POST /v1/digital-twin/baselines
POST /v1/digital-twin/calibrate
```

### Acceptance Gates

* simulations are reproducible;
* assumptions are visible;
* uncertainty is displayed;
* no individual surveillance data is required;
* all operational changes require approval;
* rollback plan is attached to accepted scenarios.

---

## 2B-E. Education Operating System — Technical Specification

> **Feature ID:** SF-EOS-001

### Purpose

Provide a governed integration plane for ScholaForge and approved school systems.

### Core Services

* identity federation;
* role and purpose management;
* event routing;
* workflow orchestration;
* policy enforcement;
* data contracts;
* interoperability;
* audit;
* synchronization;
* service health;
* configuration management.

### Workflow Contract

Every cross-system workflow defines:

```yaml
workflow_id: uuid
purpose: string
actors: []
systems: []
data_inputs: []
data_outputs: []
policy_requirements: []
human_approvals: []
failure_modes: []
rollback: {}
evidence_receipts: []
```

### Acceptance Gates

* no workflow without purpose;
* no uncontrolled privilege escalation;
* every cross-system write is auditable;
* partial failure is recoverable;
* duplicate events are idempotent;
* data contracts are versioned;
* connectors can be disabled independently.

---

## 2B-F. Innovation Marketplace and World Knowledge Network

### Shared Purpose

Enable governed exchange of educational content and innovation while preserving provenance, rights, quality, privacy, and local control.

### Marketplace Object

```yaml
innovation_id: uuid
title: string
type: activity|tool|process|simulation|research|adaptation|learner_invention
creator: protected_or_public_identity
owner_scope: string
license: {}
provenance: {}
evidence: []
review_status: string
safety_status: string
accessibility_status: string
curriculum_links: []
localization: []
versions: []
retirement_status: {}
```

### Federation Workflow

1. Publish signed metadata.
2. Validate identity, license, provenance, and integrity.
3. Retrieve preview and evidence.
4. Apply local policy.
5. Import or reference approved version.
6. Preserve origin and version.
7. Report issues.
8. Receive security or retirement notices.
9. Roll back or replace.

### Acceptance Gates

* unknown license blocks default reuse;
* learner inventions require guardian/school policy as applicable;
* no private learner data in public listings;
* imported content remains traceable;
* withdrawn items stop active retrieval;
* local schools retain approval authority.

---

## 2B-G. Life Skills and Living Competency Graph

### Life Skills Evidence Model

```yaml
life_skill_record:
  competency_id: uuid
  domain: communication|leadership|ethics|financial_literacy|other
  evidence: []
  context: []
  independence: string
  transfer: string
  reviewer: {}
  uncertainty: []
```

### Living Competency Governance

1. Detect proposed competency change.
2. Retrieve supporting standards and evidence.
3. Identify affected curriculum, activities, and assessments.
4. Generate impact analysis.
5. Conduct expert and stakeholder review.
6. Approve, reject, or pilot.
7. Version graph.
8. Notify affected modules.
9. Preserve historical mapping.

### Acceptance Gates

* no competency becomes official automatically;
* historical evidence remains interpretable;
* life skills are not reduced to conduct scores;
* context and evidence are explicit;
* cultural and accessibility review is included.

---

## 2B-H. Scientific Learning Lab and Collective Intelligence

### Research Protocol Object

```yaml
study_id: uuid
question: string
hypothesis: string
population: {}
intervention: {}
comparison: {}
outcomes: []
harm_metrics: []
equity_metrics: []
lawful_basis: string
consent_or_authorization: {}
privacy_method: string
analysis_plan: {}
stop_conditions: []
publication_plan: {}
```

### Workflow

1. Define educational question.
2. Complete ethics and privacy review.
3. Register protocol.
4. Recruit or authorize participation.
5. Collect minimized evidence.
6. Monitor harms and stop conditions.
7. Analyze according to plan.
8. Publish positive, negative, and inconclusive results.
9. Contribute eligible aggregates to Collective Intelligence.
10. Require local validation before changing school practice.

### Collective Intelligence Controls

* minimum cohort thresholds;
* aggregation;
* suppression of rare groups;
* differential privacy where justified;
* federated analytics where possible;
* signed contribution receipts;
* no public school ranking;
* opt-in participation;
* withdrawal and revocation rules.

### Acceptance Gates

* no covert experimentation;
* refusal causes no educational penalty;
* research data is purpose-separated;
* privacy attacks are tested;
* results include uncertainty;
* local decisions remain human-governed.

---

## 2B-I. Explainable AI Observatory — Technical Specification

> **Feature ID:** SF-EAO-001

### Observable Objects

* model;
* prompt or skill;
* retrieval query;
* policy decision;
* input categories;
* output;
* confidence;
* alternative;
* human action;
* correction;
* incident;
* evaluation metric;
* release version.

### Core Views

* recommendation trace;
* source trace;
* policy trace;
* human oversight trace;
* bias and disparity dashboard;
* model-quality history;
* incident timeline;
* correction history;
* current deployment status.

### Acceptance Gates

* every consequential recommendation has a trace;
* AI and human decisions are visually distinct;
* missing evidence is visible;
* retired models cannot silently remain active;
* observatory access is role-limited;
* sensitive input content is minimized;
* export packages are integrity-protected.

---

## 2B-J. Environment Intelligence and Universal Accessibility

### Environment Data Model

```yaml
environment_sample:
  location_id: uuid
  timestamp: timestamp
  temperature: number|null
  co2: number|null
  noise: number|null
  light: number|null
  occupancy_band: string|null
  sensor_quality: string
  retention_class: string
```

No individual identity is required.

### Accessibility Profile

```yaml
accessibility_preferences:
  user_id: protected_reference
  visual: {}
  auditory: {}
  motor: {}
  cognitive: {}
  language: {}
  timing: {}
  bandwidth: {}
  device: {}
  user_controls: {}
```

### Decision Boundary

Accessibility settings adapt presentation and interaction. They do not imply lower competency expectations unless the curriculum itself defines a different objective through an authorized process.

### Acceptance Gates

* keyboard-only operation;
* screen-reader compatibility;
* captions and transcripts;
* contrast and zoom;
* alternative input;
* low-bandwidth mode;
* offline accessible resources;
* no public disclosure of support settings;
* environment alerts do not diagnose individuals.

---

## 2B-K. Family Intelligence Portal — Technical Specification

### Data Categories

Families may receive:

* approved progress summaries;
* teacher communications;
* goals;
* verified projects;
* attendance notices;
* home-support suggestions;
* rights information.

Excluded by default:

* private SAGA reflections;
* hidden teacher drafts;
* peer data;
* SecureBoard recordings;
* research data;
* unnecessary raw analytics.

### Acceptance Gates

* role and legal relationship verified;
* age and autonomy rules configurable;
* learner privacy evolves with age;
* every shared category is explainable;
* correction and access-request routes exist;
* access is revocable and auditable.

---

## 2B-L. Autonomous School Improvement Engine

> **Feature ID:** SF-ASIE-001

### Recommendation Object

```yaml
recommendation_id: uuid
problem: string
evidence: []
proposed_change: {}
alternatives: []
predicted_benefits: []
predicted_risks: []
affected_groups: []
equity_analysis: {}
cost_estimate: {}
required_approvals: []
pilot_plan: {}
rollback_plan: {}
status: proposed|review|pilot|accepted|rejected|retired
```

### Workflow

1. Detect a pattern or receive a leadership question.
2. Retrieve relevant operational and educational evidence.
3. Generate multiple alternatives.
4. Simulate through School Digital Twin where applicable.
5. Evaluate cost, accessibility, workload, equity, and risk.
6. Present recommendation with uncertainty.
7. Conduct human review.
8. Pilot when appropriate.
9. Measure results.
10. accept, revise, reject, or roll back.

### Acceptance Gates

* no automatic high-impact organizational change;
* at least two alternatives where feasible;
* affected groups identified;
* equity and accessibility reviewed;
* rollback required;
* observed pilot results override optimistic prediction.

---

## 2B-M. Innovation Passport and Memory Garden

### Innovation Passport Object

```yaml
passport_entry:
  entry_id: uuid
  title: string
  contribution_type: string
  learner_role: string
  artifact_links: []
  verification: {}
  collaborators: []
  impact: {}
  rights: {}
  visibility: private|school|shared|public
  export_format: string
```

### Memory Garden Object

```yaml
memory_entry:
  memory_id: uuid
  owner_id: uuid
  title: string
  narrative: string
  artifact_links: []
  source: learner|teacher|system_suggestion
  visibility: private|selected_people|exported
  retention: {}
  deletion_status: {}
```

### Acceptance Gates

* learner controls visibility;
* system suggestions are not saved without approval;
* deletion propagates;
* institutional records and personal memories remain distinct;
* public export requires explicit confirmation;
* collaborator attribution is preserved.

## 2B-N. Transitional Architecture — Technical Specification

> **Feature ID:** SF-TRN-001
> **Status:** TARGET_SPEC
> **Purpose:** Enable gradual migration from conventional school operations to the ScholaForge human development model.

### Transition Domain Model

```yaml
transition_program:
  program_id: uuid
  school_id: uuid
  baseline_version: string
  target_stage: compatibility|augmentation|parallel|reorganization|human_development
  in_scope_features: []
  protected_existing_processes: []
  replacement_candidates: []
  legal_constraints: []
  qualification_dependencies: []
  stakeholder_groups: []
  pilot_cohorts: []
  success_metrics: []
  harm_metrics: []
  equity_metrics: []
  rollback_triggers: []
  approvals: []
  evidence_receipts: []
  status: proposed|approved|pilot|expanded|paused|rolled_back
```

### Compatibility Adapter Layer

The system shall support adapters for existing:

* student information systems;
* learning management systems;
* timetables;
* identity providers;
* gradebooks;
* curriculum repositories;
* family communication;
* assessment exports;
* attendance systems.

Adapters are isolated and replaceable.

A compatibility adapter may translate data but may not silently redefine educational meaning.

### Parallel Record Model

During transition, the platform may maintain:

1. required conventional record;
2. competency and evidence record;
3. learner-controlled portfolio;
4. expert pathway profile.

Mappings must be explicit.

Example:

```yaml
record_mapping:
  local_grade: "B"
  competency_state: secure
  complexity: application
  independence: independent
  evidence_count: 5
  mapping_confidence: 0.82
  reviewer: human
```

A conventional grade must not erase richer evidence.

### Pilot Control Plane

Every pilot defines:

* scope;
* duration;
* participants;
* comparison method;
* teacher ownership;
* learner rights;
* family communication;
* data boundaries;
* stop conditions;
* rollback;
* post-pilot decision process.

### Transition Events

```text
transition.baseline.completed
transition.pilot.proposed
transition.pilot.approved
transition.feature.enabled
transition.harm_signal.detected
transition.pilot.paused
transition.rollback.started
transition.rollback.completed
transition.stage.expanded
transition.stage.rejected
```

### Rollback Principles

Rollback must:

* preserve learner evidence;
* restore previous operational workflows;
* prevent duplicate grading or attendance loss;
* notify affected users;
* preserve audit history;
* identify why the transition failed;
* prevent automatic reactivation.

### Acceptance Gates

* existing required reporting remains functional;
* no learner loses recognized progression;
* teachers can operate during partial outage;
* adapters can be disabled independently;
* new and old records reconcile;
* pilot harm triggers work;
* rollback is tested before expansion;
* learner and family rights remain visible;
* no stage advances without evidence.

---

## 2B-O. Expert Pathway Engine — Technical Specification

> **Feature ID:** SF-EPE-001
> **Status:** TARGET_SPEC
> **Purpose:** Support broad foundations followed by voluntary, evidence-based development of deep expertise.

### Pathway Object

```yaml
expert_pathway:
  pathway_id: uuid
  title: string
  field_family: string
  prerequisites: []
  foundation_requirements: []
  exploration_modules: []
  progressive_challenges: []
  mentor_requirements: []
  authentic_environments: []
  evidence_requirements: []
  contribution_requirement: {}
  qualification_mappings: []
  accessibility_options: []
  safety_constraints: []
  exit_and_transfer_routes: []
  version: string
```

### Learner Pathway State

```yaml
learner_pathway_state:
  learner_id: protected_reference
  pathway_id: uuid
  stage: explore|foundation|develop|apprentice|contribute|verified
  evidence: []
  mentor_reviews: []
  learner_choice_receipts: []
  uncertainty: []
  paused: boolean
  transfer_options: []
  next_review: timestamp
```

### Pathway Rules

* pathway entry is voluntary;
* broad foundations remain protected;
* learner may pause, combine, or leave pathways;
* recommendation does not equal assignment;
* no early pathway may permanently block later alternatives;
* authentic participation requires safeguarding and institutional agreements;
* contribution must be proportionate to age and context;
* evidence must show independent performance, not only attendance.

### Expertise Verification

Verification may include:

* conceptual depth;
* procedural skill;
* problem framing;
* independent execution;
* transfer;
* critique;
* ethical judgment;
* collaboration;
* creation;
* contribution;
* mentor review;
* public or protected demonstration.

### APIs

```text
POST /v1/expert-pathways
POST /v1/expert-pathways/{id}/explore
POST /v1/expert-pathways/{id}/enroll
POST /v1/expert-pathways/{id}/pause
POST /v1/expert-pathways/{id}/transfer
POST /v1/expert-pathways/{id}/evidence
POST /v1/expert-pathways/{id}/mentor-review
POST /v1/expert-pathways/{id}/verify
GET  /v1/expert-pathways/{id}/explanation
```

### Acceptance Gates

* learner choice is documented;
* alternative pathways remain visible;
* foundation erosion is monitored;
* pathway quality is reviewed;
* mentor evidence is attributable;
* qualification mapping is explicit;
* accessibility options exist;
* no commercial partner controls learner progression;
* pathway exit does not punish the learner.

---

## 2B-P. Human Development Outcome Model

> **Feature ID:** SF-HDO-001
> **Status:** TARGET_SPEC

### Outcome Dimensions

ScholaForge measures multiple outcome families:

* foundational mastery;
* domain expertise;
* transfer;
* creativity;
* communication;
* ethical judgment;
* collaboration;
* independence;
* contribution;
* resilience;
* learner agency;
* wellbeing-supporting conditions;
* continued learning capacity.

### Outcome Record

```yaml
human_development_outcome:
  learner_id: protected_reference
  period: string
  foundations: []
  expertise: []
  transferable_competencies: []
  contributions: []
  learner_reflection: {}
  mentor_evidence: []
  teacher_evidence: []
  uncertainty: []
  rights_and_challenges: []
```

### Non-Reduction Rule

The platform shall not compute one universal human value score.

Dashboards may summarize dimensions but must preserve differences between them.

### Acceptance Gates

* no single composite destiny score;
* every outcome traces to evidence;
* learner voice is represented;
* uncertainty remains visible;
* protected characteristics are not treated as deficits;
* outcomes can be corrected;
* evidence is portable under policy;
* private narrative is not exposed by default.

---

## 2B-Q. Transition Evaluation Framework

Every transition stage is evaluated across:

### Educational Outcomes

* foundation mastery;
* progress;
* transfer;
* engagement;
* task appropriateness;
* expertise development.

### Human Outcomes

* dignity;
* learner agency;
* belonging;
* stress;
* fairness;
* privacy;
* accessibility.

### Teacher Outcomes

* workload;
* professional autonomy;
* time with learners;
* trust;
* quality of evidence;
* ability to override.

### Operational Outcomes

* continuity;
* reliability;
* interoperability;
* cost;
* incident rate;
* rollback readiness.

### Equity Outcomes

* under-challenge disparity;
* over-challenge disparity;
* access to mentors;
* access to pathways;
* accessibility;
* language fairness;
* connectivity fairness.

### Decision States

```text
EXPAND
REVISE
PAUSE
ROLL_BACK
REJECT
INSUFFICIENT_EVIDENCE
```

No stage advances solely because deployment completed.

## 2B-R. Knowledge Orchestration Engine — Technical Specification

> **Feature ID:** SF-KOE-001
> **Status:** TARGET_SPEC
> **Purpose:** Plan, retrieve, validate, segment, rank, explain, and govern knowledge used by every consequential ScholaForge module.

### Architectural Position

```text
User or Module Request
        ↓
Purpose and Role Resolver
        ↓
Context Requirement Engine
        ↓
Retrieval Planner
        ↓
Policy and Permission Gate
        ↓
Segmented Retrieval Fabric
        ├── Lexical Search
        ├── Semantic Search
        ├── Knowledge Graph
        ├── Curriculum Graph
        ├── Learner Evidence Store
        ├── Policy Store
        ├── Resource Store
        └── Offline Local Store
        ↓
RRF / Governed Fusion
        ↓
CRAG Quality Evaluation
        ↓
Counter-Evidence Retrieval
        ↓
RFF Fidelity Validation
        ↓
Evidence Packet Builder
        ↓
Generation or Decision Module
        ↓
Human Review
        ↓
Evidence Spine and Outcome Feedback
```

### KOE Request Object

```yaml
koe_request:
  request_id: uuid
  requester:
    actor_id: protected_reference
    role: learner|teacher|family|mentor|administrator|auditor|service
  purpose: string
  module: string
  jurisdiction: string|null
  language: string
  time_context: live|planning|retrospective|audit
  required_domains: []
  available_context: {}
  prohibited_context: []
  freshness_requirement: {}
  output_contract: {}
  human_review_requirement: {}
```

### Retrieval Plan Object

```yaml
retrieval_plan:
  plan_id: uuid
  intent: string
  missing_context: []
  subqueries: []
  graph_traversals: []
  metadata_filters: []
  permission_filters: []
  temporal_filters: []
  authority_requirements: []
  counter_evidence_queries: []
  stop_conditions: []
  fallback_modes: []
```

### Knowledge Segment Object

```yaml
knowledge_segment:
  segment_id: uuid
  source_id: uuid
  parent_segment_id: uuid|null
  segment_type: policy_clause|objective|competency|example|misconception|procedure|exception|evidence|other
  content_hash: string
  semantic_summary: string
  concepts: []
  prerequisites: []
  educational_function: string
  age_or_stage_range: {}
  difficulty: string|null
  jurisdiction: []
  authority: string
  validity:
    effective_from: timestamp|null
    effective_to: timestamp|null
    status: active|future|superseded|archived|experimental|revoked
  permissions:
    visibility: []
    purposes: []
    prohibited_roles: []
  accessibility: {}
  language: string
  provenance: {}
  license: {}
  extraction_confidence: number
  review_status: string
  conflict_links: []
  replacement_links: []
```

### Segmentation Pipeline

1. Verify source identity and integrity.
2. classify authority, ownership, license, confidentiality, and validity.
3. parse native structure.
4. detect educational units.
5. preserve headings, clauses, exceptions, tables, and references.
6. split oversized units using semantic boundaries.
7. reject arbitrary splits that destroy meaning.
8. enrich with concepts, prerequisites, difficulty, educational function, and jurisdiction.
9. attach permission and purpose metadata.
10. attach temporal state.
11. build graph links.
12. generate embeddings.
13. run segment-quality validation.
14. create source-to-segment manifest.
15. index only approved segments.

### Segment Quality Gates

A segment fails ingestion when:

* meaning depends on omitted text;
* an exception is separated without a link;
* authority is unknown;
* validity is unknown for a time-sensitive source;
* permissions are missing;
* extraction confidence is below threshold;
* tables or formulas were corrupted;
* language detection is unreliable;
* source integrity fails;
* license prohibits intended use.

### Multi-Index Strategy

The platform maintains logically separated indexes for:

* curriculum;
* pedagogy;
* learner evidence;
* activities and resources;
* assessment;
* policy and compliance;
* expert pathways;
* operations;
* research;
* family communication;
* audit.

Physical co-location is allowed only when tenant, permission, purpose, and cryptographic isolation remain enforceable.

### Ranking Model

A candidate score may consider:

```text
FinalScore =
  Relevance
  × AuthorityWeight
  × FreshnessWeight
  × PurposeFit
  × PermissionValidity
  × EducationalSuitability
  × AccessibilityFit
  × ContextFit
  × ProvenanceConfidence
  × ConflictAdjustment
```

The exact implementation is configurable and must be validated.

Similarity alone cannot override:

* denied permission;
* revoked source status;
* wrong jurisdiction;
* failed safety check;
* expired policy;
* missing provenance.

### Reciprocal Rank Fusion

RRF may combine ranked outputs from:

* lexical;
* semantic;
* graph;
* curriculum dependency;
* metadata;
* local preference;
* approved repository.

RRF means Reciprocal Rank Fusion only.

### CRAG States

```text
HIGH_SUPPORT
MEDIUM_SUPPORT
LOW_SUPPORT
CONFLICTING
IRRELEVANT
INSUFFICIENT
UNAUTHORIZED
STALE
```

Required behavior:

* HIGH_SUPPORT: proceed with normal review.
* MEDIUM_SUPPORT: proceed with uncertainty.
* LOW_SUPPORT: retrieve again or require review.
* CONFLICTING: retrieve counter-evidence and surface conflict.
* IRRELEVANT: reject.
* INSUFFICIENT: stop or request context.
* UNAUTHORIZED: exclude and record denial.
* STALE: retrieve active replacement or warn.

### Retrieval Fidelity Failure-Fix

RFF detects:

* qualifier loss;
* exception loss;
* citation mismatch;
* version mixing;
* unsupported synthesis;
* permission leakage;
* context truncation;
* source inversion;
* stale substitution;
* translated meaning drift.

RFF repair actions include:

* expand surrounding segment;
* retrieve referenced clause;
* switch source version;
* rerun translation validation;
* remove unsupported statement;
* separate conflicting claims;
* escalate to human review.

### Evidence Packet

```yaml
evidence_packet:
  packet_id: uuid
  request_id: uuid
  selected_segments: []
  rejected_segments:
    - segment_id: uuid
      reason: string
  source_versions: []
  conflicts: []
  missing_information: []
  assumptions: []
  inferences: []
  policy_constraints: []
  freshness_status: {}
  permission_receipts: []
  confidence: string
  human_review_required: boolean
  packet_hash: string
```

### Explainability Packet

```yaml
retrieval_explanation:
  interpreted_purpose: string
  context_used: []
  sources_searched: []
  sources_selected: []
  selection_reasons: []
  rejection_reasons: []
  conflicts: []
  missing_information: []
  currentness: {}
  AI_inferences: []
  human_actions: []
  correction_route: string
```

### Security Controls

* tenant isolation;
* school isolation;
* purpose-bound authorization;
* attribute-based access control;
* role-based access control;
* segment-level permissions;
* scoped retrieval tokens;
* query logging with minimization;
* private-field redaction;
* encrypted indexes where supported;
* sealed evidence exclusion;
* prompt-injection filtering;
* malicious-document quarantine;
* source integrity validation;
* data-loss prevention;
* audit receipts.

### Prompt and Document Injection Defense

Retrieved documents are data, not instructions.

The KOE must:

* separate system policy from retrieved content;
* strip executable or hidden directives;
* detect instruction-like content;
* reject requests to reveal secrets or alter permissions;
* quarantine suspicious sources;
* preserve provenance;
* prevent retrieved text from invoking tools directly.

### Offline Architecture

```yaml
offline_knowledge_pack:
  pack_id: uuid
  tenant_id: uuid
  corpus_scope: []
  manifest_hash: string
  source_versions: []
  embeddings_version: string
  graph_version: string
  created_at: timestamp
  expires_at: timestamp
  revocation_list_version: string
  signature: string
```

Offline behavior:

* verify signature;
* enforce expiry;
* apply local permissions;
* mark stale evidence;
* queue receipts;
* synchronize append-only outcomes;
* resolve version conflicts;
* never overwrite verified local learner evidence silently.

### Knowledge Evolution Service

The service tracks:

* source added;
* source updated;
* source superseded;
* source revoked;
* segment corrected;
* authority changed;
* policy effective date reached;
* resource safety issue;
* license change.

Impact analysis identifies all generated or stored objects that depend on changed evidence.

### APIs

```text
POST /v1/koe/requests
POST /v1/koe/plans
POST /v1/koe/retrieve
POST /v1/koe/correct
POST /v1/koe/evidence-packets
GET  /v1/koe/evidence-packets/{id}
GET  /v1/koe/explanations/{id}
POST /v1/koe/feedback
POST /v1/knowledge/sources
POST /v1/knowledge/sources/{id}/segment
POST /v1/knowledge/sources/{id}/validate
POST /v1/knowledge/sources/{id}/supersede
POST /v1/knowledge/impact-analysis
POST /v1/offline-knowledge-packs
POST /v1/offline-knowledge-packs/{id}/sync
```

### Events

```text
koe.request.received
koe.context.missing
koe.plan.created
koe.permission.denied
koe.retrieval.completed
koe.conflict.detected
koe.rff.failure_detected
koe.evidence_packet.created
koe.human_review.required
koe.feedback.received
knowledge.source.ingested
knowledge.source.rejected
knowledge.source.superseded
knowledge.segment.corrected
knowledge.impact_analysis.completed
offline.pack.created
offline.pack.expired
offline.sync.completed
```

### Observability Metrics

* retrieval precision;
* retrieval coverage;
* unsupported output rate;
* stale-source rate;
* conflict-detection rate;
* permission-denial accuracy;
* source diversity;
* explanation completeness;
* teacher correction rate;
* learner comprehension outcome;
* latency by mode;
* offline success rate;
* segment rejection rate;
* RFF repair rate.

Metrics cannot be interpreted as proof of educational benefit without outcome evaluation.

### Failure Matrix

| Failure               | Detection             | Response                      | Human Impact Protection          |
| --------------------- | --------------------- | ----------------------------- | -------------------------------- |
| no relevant evidence  | low support           | stop or ask for context       | prevents hallucination           |
| conflicting policy    | conflict links        | present both and escalate     | prevents false authorization     |
| wrong learner context | context mismatch      | discard packet and rebuild    | prevents harmful personalization |
| stale curriculum      | validity check        | retrieve active version       | prevents outdated instruction    |
| permission leak       | authorization failure | block and alert               | protects privacy                 |
| corrupted segment     | integrity check       | quarantine source             | prevents distorted guidance      |
| offline expiry        | manifest check        | warn or disable sensitive use | prevents false currentness       |
| excessive latency     | live-mode threshold   | use validated cache           | protects classroom continuity    |
| source withdrawal     | revocation event      | remove and impact-analyze     | prevents continued unsafe reuse  |

### Validation Ladder

1. unit tests for segmentation and metadata;
2. permission tests;
3. retrieval benchmark;
4. adversarial prompt-injection tests;
5. stale and conflict scenarios;
6. multilingual fidelity tests;
7. accessibility suitability tests;
8. offline pack tests;
9. teacher simulation;
10. controlled classroom pilot;
11. educational outcome evaluation;
12. independent security and privacy review.

### Acceptance Gates

* no consequential output without an evidence packet;
* selected segments preserve qualifiers and exceptions;
* revoked sources are excluded;
* permission checks operate at segment level;
* conflicts are visible;
* insufficient evidence does not become confident output;
* role-specific explanations work;
* live mode meets approved latency threshold;
* offline mode marks currentness limitations;
* source changes trigger impact analysis;
* teacher correction is attributable;
* no hidden universal learner profile is constructed;
* rollback removes new indexes and restores previous retrieval path without evidence loss.

---

## 2B-S. Module Retrieval Contract Standard

> **Feature ID:** SF-MRC-001
> **Status:** TARGET_SPEC

Every ScholaForge module must publish a machine-readable retrieval contract.

```yaml
module_retrieval_contract:
  module_id: string
  purposes: []
  allowed_roles: []
  required_context: []
  optional_context: []
  prohibited_context: []
  knowledge_domains: []
  preferred_authorities: []
  minimum_freshness: {}
  permission_policy: string
  segmentation_requirements: []
  conflict_policy: string
  insufficient_evidence_behavior: string
  human_review: {}
  feedback_events: []
  retention: {}
  rollback: {}
```

### Contract Enforcement

* undeclared domains cannot be queried;
* prohibited context cannot enter the evidence packet;
* missing required context blocks or limits output;
* every module version pins a contract version;
* contract changes require review;
* Explainable AI Observatory displays active contracts.

### Acceptance Gates

* every consequential module has a contract;
* contract tests run in CI;
* undeclared retrieval is denied;
* version mismatch fails closed;
* module rollback restores prior contract;
* audit can reconstruct which contract governed an output.

---

## 2B-T. Retrieval Quality and Educational Suitability Framework

> **Feature ID:** SF-RQF-001
> **Status:** TARGET_SPEC

### Quality Dimensions

```yaml
retrieval_quality:
  relevance: 0..1
  authority: 0..1
  freshness: 0..1
  completeness: 0..1
  curriculum_fit: 0..1
  readiness_fit: 0..1
  accessibility_fit: 0..1
  language_fit: 0..1
  practical_feasibility: 0..1
  safety: 0..1
  provenance: 0..1
  conflict_level: 0..1
  uncertainty: 0..1
```

### Educational Suitability Review

A result must be evaluated for:

* conceptual accuracy;
* cognitive demand;
* prerequisite fit;
* potential misconception;
* cultural context;
* accessibility;
* emotional safety;
* practical feasibility;
* evidence opportunity;
* transfer value.

### Counter-Evidence Requirement

For high-impact outputs, the retrieval planner must search for:

* contradictory policy;
* known limitations;
* negative educational evidence;
* accessibility failures;
* security advisories;
* deprecated standards;
* inequitable outcomes.

### Acceptance Gates

* high relevance cannot compensate for denied authority;
* suitability is assessed separately from accuracy;
* counter-evidence is included for high-impact decisions;
* quality scores retain underlying evidence;
* no single score hides a blocking failure.

---

## 2B-U. Retrieval Operations and Human Review Process

### Operational Roles

* knowledge steward;
* curriculum reviewer;
* pedagogy reviewer;
* privacy reviewer;
* security reviewer;
* accessibility reviewer;
* teacher approver;
* system auditor.

### Source Lifecycle

```text
Proposed
→ Identity and License Check
→ Structural Parsing
→ Semantic Segmentation
→ Metadata Enrichment
→ Permission Assignment
→ Human Review
→ Validation
→ Published
→ Monitored
→ Updated / Superseded / Revoked
```

### Correction Process

1. User reports wrong or unsuitable retrieval.
2. System preserves the original packet.
3. Reviewer classifies failure.
4. Source, segment, metadata, ranking, or policy is corrected.
5. affected outputs are identified.
6. correction is tested.
7. corrected version is published.
8. users of materially affected outputs are notified where required.

### Rollback

Rollback can restore:

* previous source version;
* previous segment set;
* previous embedding model;
* previous ranking policy;
* previous module contract;
* previous offline pack.

No rollback deletes audit history.

---

# PART IV — EXPANDED PRODUCT ECOSYSTEM

This part preserves the extended product, workspace, content, community, analytics, API, journey, testing, and implementation details.

## 2C. Teaching, Learning, and Content Features

### 2C.1 ActivityForge — Intelligent Activity Creation and Adaptation

> **Feature ID:** SF-AFG-001
> **One-line identity:** A structured system for designing, validating, adapting, publishing, running, and measuring educational activities.

#### Problem Solved

Teachers need reusable activities that are aligned to curriculum, suitable for real classrooms, adaptable to different learners, and explainable. Generic AI generation is insufficient because it often produces unverified, context-free output.

#### Primary Users

* teachers;
* curriculum designers;
* special-needs and inclusion staff;
* school content reviewers;
* learners creating peer activities under teacher supervision.

#### User-Visible Entry Points

* **Create Activity**
* **Adapt Existing Activity**
* **Generate from Objective**
* **Import Resource**
* **Validate Activity**
* **Publish to Library**
* **Launch in Class**

#### Core Capabilities

* create activities from objectives, competencies, age range, duration, class size, available devices, physical space, and accessibility needs;
* produce offline, device-assisted, motion-based, collaborative, individual, outdoor, laboratory, project, discussion, and assessment activities;
* adapt an activity for language, reading level, accessibility, time, group size, and available materials;
* generate teacher instructions, learner instructions, safety notes, expected evidence, differentiation, and fallback paths;
* validate alignment, feasibility, age suitability, accessibility, resource needs, and policy constraints;
* version and compare activity variants;
* simulate activities in the School Digital Twin;
* publish to private, school, network, or public collections;
* collect post-run evidence and improvement feedback.

#### Activity Object

```yaml
activity_id: uuid
title: string
version: semver
owner_scope: personal|school|network|public
learning_objectives: []
competencies: []
curriculum_links: []
age_range: {}
duration_minutes: integer
class_size: {}
delivery_modes: []
space_requirements: []
device_requirements: []
materials: []
teacher_instructions: []
learner_instructions: []
grouping_logic: {}
accessibility_adaptations: []
safety_constraints: []
assessment_evidence: []
retrieval_sources: []
policy_capsule_id: uuid
risk_tier: M|L|H_candidate
status: draft|review|approved|published|retired
provenance: {}
```

#### Decision Logic

1. Teacher provides intent and constraints.
2. Retrieval gathers approved curriculum, school policy, prior activities, accessibility guidance, and available resources.
3. ActivityForge creates one or more structured candidates.
4. Deterministic validators reject impossible, unsafe, prohibited, or policy-conflicting candidates.
5. The teacher compares the candidates and selects or edits one.
6. Alignment and accessibility checks run.
7. A reviewer approves publication where required.
8. The activity receives a version, provenance record, and evidence receipt.
9. Classroom execution telemetry is minimized and aggregated.
10. Teacher reflection and learner outcomes inform a new candidate version, never a silent overwrite.

#### Explainability

Every activity must display:

* why it was proposed;
* which objectives it supports;
* which sources and prior activities influenced it;
* what was adapted;
* what assumptions were made;
* what constraints could not be satisfied;
* whether teacher review is still required.

#### Retrieval Behavior

ActivityForge searches, in order:

1. teacher-private approved materials;
2. school-approved Activities Library;
3. curriculum and competency graph;
4. institution policy and accessibility requirements;
5. trusted external collections allowed by policy;
6. previously successful local activity patterns;
7. counter-evidence, including known safety or accessibility concerns.

#### Evidence Receipts

* activity creation receipt;
* source and provenance receipt;
* curriculum alignment receipt;
* accessibility validation receipt;
* reviewer approval receipt;
* classroom launch receipt;
* post-activity reflection receipt;
* retirement or rollback receipt.

#### Acceptance Criteria

* an activity can be created and launched entirely offline;
* every generated activity identifies its sources and assumptions;
* unsafe or prohibited activity patterns are blocked;
* teachers can compare versions;
* accessibility adaptations are visible and editable;
* publication requires the correct scope approval;
* a retired activity remains auditable but is not launchable.

---

### 2C.2 Activities Library — Governed Reusable Activity Ecosystem

> **Feature ID:** SF-ALB-001
> **One-line identity:** A searchable, versioned, permission-aware library of ready-to-run educational activities.

#### Library Scopes

* personal;
* class;
* department;
* school;
* school network;
* language community;
* national or regional collection;
* public community;
* licensed partner collection.

#### Content Types

* lesson activities;
* motion activities;
* group challenges;
* individual practice;
* laboratory and STEM tasks;
* arts and creative activities;
* outdoor learning;
* debates and role play;
* formative checks;
* projects and missions;
* offline activity packs;
* emergency continuity packs.

#### Search and Discovery

Users can retrieve activities by:

* curriculum objective;
* competency;
* subject;
* age or level;
* duration;
* class size;
* language;
* accessibility profile;
* space;
* devices;
* materials;
* delivery mode;
* evidence type;
* peer review status;
* institution approval;
* offline availability;
* license and reuse rights.

#### Trust Labels

* Draft
* Teacher Reviewed
* School Approved
* Curriculum Reviewed
* Accessibility Reviewed
* Safety Reviewed
* Evidence Supported
* Community Contributed
* Externally Licensed
* Retired

#### Ranking Logic

Default ranking combines:

* curriculum match;
* policy fit;
* classroom constraints;
* accessibility fit;
* approval status;
* source quality;
* local evidence of successful use;
* freshness;
* language fit;
* diversity of activity form.

Popularity alone shall never determine ranking.

#### Versioning

Every update creates a new immutable version. Teachers may:

* compare differences;
* fork locally;
* pin a known version;
* roll back;
* see why a version was retired;
* migrate a class plan to a replacement version.

#### Prohibited Behavior

* hidden sponsored ranking;
* unlicensed copying;
* silent replacement;
* opaque quality scores;
* public publication of learner data;
* automatic reuse of student work without authorization.

---

### 2C.3 Lesson Studio — End-to-End Lesson Planning

> **Feature ID:** SF-LST-001
> **One-line identity:** A teacher-controlled workspace that turns objectives into a complete, adaptable, evidence-aware lesson.

#### Lesson Components

* objectives and competencies;
* prerequisite knowledge;
* opening and activation;
* explanation;
* teacher modeling;
* guided practice;
* independent or collaborative practice;
* MotionClass activity;
* checks for understanding;
* differentiation;
* accessibility support;
* resources;
* assessment evidence;
* reflection;
* offline fallback;
* extension and homework.

#### Workflow

1. Select curriculum target.
2. Retrieve approved resources and activities.
3. Inspect learner-group needs using minimized, authorized information.
4. Compose lesson sequence.
5. Validate timing, transitions, accessibility, and resource availability.
6. Preview learner and teacher views.
7. Run through the Activity Conductor.
8. Capture evidence and teacher reflection.
9. Create a revision candidate.

No lesson is changed after delivery without preserving the delivered version.

---

### 2C.4 Assessment Studio — Authoring, Validation, Delivery, and Review

> **Feature ID:** SF-AST-001
> **One-line identity:** A governed assessment system that separates item creation, validation, delivery, scoring assistance, human judgment, and challenge.

#### Capabilities

* formative checks;
* quizzes;
* performance tasks;
* oral assessment support;
* project assessment;
* item bank;
* QTI-compatible packaging;
* rubric-linked evidence;
* alternate accessible forms;
* randomization with equivalence checks;
* answer-key validation;
* bias and ambiguity review;
* teacher-controlled scoring assistance;
* learner challenge and correction.

#### Hard Boundary

AI may assist with item design and feedback. It shall not make unreviewed final decisions on high-impact grading, placement, progression, discipline, or access.

---

### 2C.5 Rubric Studio

> **Feature ID:** SF-RBS-001
> **One-line identity:** A transparent rubric creation and moderation environment.

Capabilities include:

* analytic and holistic rubrics;
* curriculum-linked criteria;
* exemplars;
* learner-friendly language;
* accessibility checks;
* moderation workflow;
* inter-rater calibration;
* change history;
* evidence-linked scoring;
* explanation of assisted suggestions.

---

### 2C.6 Project Studio

> **Feature ID:** SF-PRS-001
> **One-line identity:** A workspace for long-running interdisciplinary projects, portfolios, milestones, teams, and public or private outcomes.

Core functions:

* driving question;
* project brief;
* milestones;
* roles;
* task board;
* source collection;
* OMEGA sandbox workspaces;
* peer review;
* teacher checkpoints;
* portfolio evidence;
* presentation mode;
* reflection;
* versioned final artifact.

---

### 2C.7 Quest Engine — Adaptive Missions and Learning Journeys

> **Feature ID:** SF-QST-001
> **One-line identity:** A teacher-governed engine for sequencing meaningful missions without manipulative engagement mechanics.

#### Quest Types

* skill practice;
* inquiry;
* collaborative mission;
* interdisciplinary challenge;
* community problem;
* field activity;
* simulation;
* revision journey;
* mastery pathway.

#### Adaptation Logic

Adaptation may use:

* declared goals;
* validated competency evidence;
* teacher-approved support needs;
* recent practice;
* activity completion;
* learner choice.

It shall not use:

* emotional-state inference;
* covert attention scoring;
* addictive reward optimization;
* protected-attribute proxies;
* opaque behavioral profiling.

#### Recognition

Progress is represented through competencies, evidence, reflection, and completed work rather than arbitrary streak pressure.

---

### 2C.8 Knowledge Galaxy — Living Curriculum and Competency Graph

> **Feature ID:** SF-KGL-001
> **One-line identity:** A navigable graph connecting curriculum, concepts, competencies, prerequisites, activities, assessments, resources, and evidence.

#### Node Types

* curriculum standard;
* competency;
* concept;
* prerequisite;
* misconception;
* activity;
* lesson;
* assessment;
* rubric;
* resource;
* language adaptation;
* accessibility adaptation;
* evidence artifact;
* policy constraint.

#### Edge Types

* requires;
* develops;
* demonstrates;
* assesses;
* remediates;
* extends;
* conflicts with;
* adapted from;
* approved by;
* supersedes;
* supported by;
* challenged by.

#### Explainability

A user can ask:

* Why is this activity recommended?
* What prerequisite is missing?
* Which curriculum objective does this assess?
* What evidence supports mastery?
* Which newer standard superseded this one?
* What alternative resource is available offline?

Every answer is generated from visible graph paths and source evidence.

---

### 2C.9 Learning DNA — User-Controlled Longitudinal Learning Model

> **Feature ID:** SF-LDNA-001
> **One-line identity:** A transparent learning-state model inside MySAGA, not a fixed score or secret profile.

#### Components

* verified competencies;
* active goals;
* practice history;
* learner reflections;
* teacher-confirmed observations;
* accessibility preferences;
* temporary support needs;
* uncertain hypotheses with expiry;
* evidence links;
* correction and challenge history.

#### Non-Goals

Learning DNA is not:

* a prediction of life potential;
* a personality score;
* a disciplinary risk score;
* an emotional profile;
* an employability score;
* an immutable permanent record.

#### User Controls

* inspect;
* correct;
* challenge;
* freeze;
* selectively forget;
* export;
* restrict portability;
* disable personalization.

---

### 2C.10 Class Symphony — Recognizable Classroom Orchestration Experience

> **Feature ID:** SF-CSY-001
> **One-line identity:** The user-facing classroom experience powered by Activity Conductor.

Class Symphony coordinates:

* teacher controls;
* learner devices;
* shared displays;
* motion zones;
* timers;
* grouping;
* accessibility modes;
* MySAGA assistance;
* offline resources;
* evidence capture;
* transitions;
* fallback activities.

Activity Conductor is the orchestration engine. Class Symphony is the recognizable teacher and learner experience.

---

## 2D. Workspace Features

### 2D.1 Teacher Workspace

> **Feature ID:** SF-TWS-001

The Teacher Workspace contains:

* Today dashboard;
* class and timetable;
* Lesson Studio;
* ActivityForge;
* Activities Library;
* Assessment Studio;
* Rubric Studio;
* Project Studio;
* TwinTeach Live;
* Class Symphony;
* learner evidence review;
* teacher MySAGA;
* resource collections;
* collaboration;
* reflection journal;
* policy and approval notices;
* offline status;
* rights and challenge queue.

Every dashboard card must state whether it is:

* informational;
* AI-assisted;
* awaiting teacher decision;
* blocked by policy;
* offline-degraded;
* based on incomplete evidence.

### 2D.2 Learner Workspace

> **Feature ID:** SF-LWS-001

The Learner Workspace contains:

* MySAGA;
* active lessons and activities;
* Quest Engine;
* goals;
* Learning DNA;
* portfolio;
* projects;
* study plan;
* feedback;
* challenges and corrections;
* accessibility controls;
* offline content;
* privacy and memory controls;
* achievements grounded in evidence.

### 2D.3 Guardian and Family Workspace

> **Feature ID:** SF-GWS-001

Where lawful and institutionally enabled:

* view approved progress summaries;
* receive school communications;
* inspect data-use explanations;
* submit corrections and rights requests;
* manage applicable consent or preferences;
* access support resources;
* never access SecureBoard recordings through normal product interfaces;
* never view hidden learner journals or private SAGA memory without a lawful basis and policy.

### 2D.4 Administrator Workspace

> **Feature ID:** SF-AWS-001

Contains:

* tenant setup;
* roles and permissions;
* school calendar;
* curriculum profiles;
* policy capsules;
* device and offline node management;
* model catalog;
* content approval;
* interoperability;
* audit center;
* incident center;
* retention;
* accessibility conformance;
* release management;
* license and provenance;
* service health.

### 2D.5 Oversight and Auditor Workspace

> **Feature ID:** SF-OWS-001

Provides read-only, purpose-bound access to:

* control evidence;
* model and data cards;
* policy versions;
* access logs;
* challenge outcomes;
* incident receipts;
* release gates;
* evaluation reports;
* SecureBoard non-content ceremony records;
* compliance export packages.

---

## 2E. Content Ecosystem and EduVerse

### 2E.1 EduVerse — Governed Educational Content Ecosystem

> **Feature ID:** SF-EDV-001
> **One-line identity:** A federated ecosystem for creating, discovering, reviewing, licensing, adapting, and sharing educational resources.

#### Libraries

* Activities Library;
* Lesson Library;
* Assessment Library;
* Rubric Library;
* Project Library;
* Prompt and Instruction Library;
* Curriculum Library;
* Resource Library;
* Simulation Library;
* OMEGA Template Library;
* SAGA Skill Library;
* Accessibility Adaptation Library;
* Offline Pack Library.

#### Contribution Workflow

1. Author creates or imports content.
2. License and provenance are declared.
3. Automated validation checks file safety, metadata, accessibility, duplication, and policy.
4. Human reviewers inspect pedagogical quality where required.
5. Content receives trust labels.
6. Publication scope is selected.
7. Retrieval indexes metadata and approved content.
8. Usage feedback is aggregated without exposing learners.
9. New versions are reviewed.
10. Unsafe, expired, or superseded versions are retired with a reason.

#### Federation

Schools may exchange signed catalog records without exchanging private learner data. Content remains in its owner repository until authorized retrieval or download.

---

### 2E.2 Resource Library

Supports:

* documents;
* slides;
* worksheets;
* images;
* audio;
* video;
* interactive packages;
* web references;
* datasets;
* code;
* simulations;
* physical-material instructions.

Every resource records:

* owner;
* source;
* license;
* language;
* accessibility;
* age suitability;
* curriculum links;
* approval scope;
* version;
* integrity hash;
* offline availability;
* extraction and retrieval status.

### 2E.3 Prompt and Instruction Library

Prompts are treated as governed instructional assets, not hidden magic text.

Each entry includes:

* purpose;
* target model capability;
* allowed roles;
* input schema;
* prohibited inputs;
* expected output schema;
* test cases;
* safety constraints;
* version;
* owner;
* performance evidence;
* retirement reason.

### 2E.4 SAGA Skill Library

A SAGA skill is a permission-bounded capability package with:

* declared purpose;
* required data;
* allowed tools;
* policy requirements;
* offline capability;
* tests;
* evidence;
* rollback;
* visible user controls.

Skills cannot silently expand their permissions.

---

## 2F. Collaboration and Community

### 2F.1 Teacher Collaboration

Capabilities:

* co-author lessons and activities;
* controlled sharing;
* comments and suggestions;
* version comparison;
* peer review;
* moderation;
* shared collections;
* professional learning communities;
* cross-school projects;
* translation and localization review.

### 2F.2 Learner Collaboration

Capabilities:

* teacher-created teams;
* shared project spaces;
* peer feedback;
* role assignment;
* contribution history;
* safe messaging where enabled;
* collaborative whiteboards;
* class and school showcases;
* accessibility-aware participation.

### 2F.3 Community Governance

Every community has:

* scope;
* membership policy;
* moderators;
* publication rules;
* reporting;
* appeal process;
* content retention;
* prohibited-content policy;
* audit trail.

---

## 2G. Analytics and Improvement

### 2G.1 Analytics Principles

Analytics must be:

* purpose-limited;
* understandable;
* proportionate;
* role-specific;
* privacy-preserving;
* challengeable;
* free from emotion inference and covert surveillance;
* separated from final consequential decisions.

### 2G.2 Analytics Products

* learner self-reflection dashboard;
* teacher class-evidence dashboard;
* activity effectiveness dashboard;
* curriculum coverage map;
* assessment quality dashboard;
* accessibility usage and barrier dashboard;
* offline reliability dashboard;
* school improvement dashboard;
* model quality and safety dashboard;
* governance and rights dashboard.

### 2G.3 Activity Analytics

Measures may include:

* completion;
* evidence produced;
* curriculum coverage;
* teacher-reported feasibility;
* learner reflection;
* accessibility barriers;
* resource failures;
* time variance.

It shall not rank teachers or learners using a single opaque score.

### 2G.4 Impact Evaluation

Every major AI-assisted capability defines:

* intended benefit;
* affected group;
* baseline;
* success metric;
* harm metric;
* equity metric;
* observation window;
* stop condition;
* accountable owner.

---

## 2H. Guardian Policy Engine

### 2H.1 Definition

> **Feature ID:** SF-GPE-001
> **One-line identity:** A deterministic policy decision system that constrains every meaningful action before AI or application logic executes it.

### 2H.2 Policy Domains

* identity and role;
* purpose;
* data access;
* AI use;
* model routing;
* retention;
* export;
* retrieval;
* content publication;
* assessment;
* safeguarding;
* accessibility;
* network egress;
* offline operation;
* SecureBoard;
* human approval.

### 2H.3 Decision Output

```yaml
decision: allow|deny|allow_with_conditions|require_human_review
policy_ids: []
purpose_id: uuid
conditions: []
data_minimization: []
required_evidence: []
expiry: timestamp
explanation_key: string
appeal_path: string
```

### 2H.4 Explainability

Every denial or condition must identify:

* requested action;
* applicable policy;
* reason;
* missing requirement;
* available corrective action;
* human review or appeal route.

---

## 5A. ScholaGraph Retrieval Fabric — Complete Retrieval Architecture

### 5A.1 Purpose

ScholaGraph Retrieval Fabric is the shared retrieval system for humans, MySAGA, ActivityForge, Lesson Studio, TwinTeach Live, Assessment Studio, Knowledge Galaxy, Guardian Policy Engine, and governance modules.

It exists to provide:

* relevant information;
* traceable sources;
* policy-filtered access;
* freshness awareness;
* offline continuity;
* multilingual retrieval;
* counter-evidence;
* deterministic evidence packaging;
* failure transparency.

It is not merely a vector database.

### 5A.2 Retrieval Domains

| Domain          | Examples                                | Default sensitivity      |
| --------------- | --------------------------------------- | ------------------------ |
| Curriculum      | standards, competencies, mappings       | Institutional/public     |
| Pedagogy        | approved methods, activity patterns     | Institutional/public     |
| Content         | lessons, activities, resources          | Mixed                    |
| User-private    | SAGA memory, reflections, drafts        | Private                  |
| Learner records | evidence, accommodations, progress      | Restricted               |
| Policy          | school, legal, safety, retention        | Restricted/institutional |
| Operations      | device, service, deployment docs        | Restricted               |
| Evidence        | receipts, evaluations, provenance       | Restricted               |
| External        | official standards and approved sources | Public/controlled        |

Indexes remain logically and cryptographically separated by domain and tenant.

### 5A.3 Ingestion Pipeline

1. **Acquire** — receive document, record, event, graph node, or approved external source.
2. **Authenticate** — verify source identity, signature, tenant, and transport.
3. **Malware and format scan** — quarantine unsafe content.
4. **Classify** — determine data class, owner, purpose, license, retention, and allowed users.
5. **Normalize** — convert to canonical text, media metadata, graph objects, and structured fields.
6. **Segment** — create semantically meaningful chunks without separating legal or pedagogical context.
7. **Enrich** — language, curriculum, competency, age, accessibility, source type, dates, and quality labels.
8. **Extract claims** — identify candidate facts and link them to exact source spans.
9. **Generate representations** — lexical index, embeddings, graph links, and optional media descriptors.
10. **Validate** — ensure required metadata, provenance, license, and policy.
11. **Approve** — automated or human approval according to source class.
12. **Publish** — expose to permitted retrieval scopes.
13. **Monitor** — detect staleness, supersession, revocation, and integrity failure.
14. **Retire** — remove from active retrieval while preserving an auditable tombstone.

### 5A.4 Canonical Retrieval Record

```yaml
record_id: uuid
tenant_id: uuid
source_id: uuid
source_version: string
source_type: curriculum|policy|activity|lesson|assessment|resource|memory|evidence|external
title: string
language: string
content_hash: string
chunk_id: string
chunk_text: string
source_span: {}
owner_scope: personal|class|school|network|public
classification: public|institutional|confidential|restricted|special_category
purpose_tags: []
allowed_roles: []
curriculum_links: []
competency_links: []
accessibility_tags: []
valid_from: timestamp
valid_until: timestamp|null
supersedes: []
superseded_by: []
license: {}
provenance: {}
approval_status: draft|approved|restricted|retired|quarantined
quality_grade: high|medium|low|unknown
embedding_version: string
index_version: string
retention_policy_id: uuid
```

### 5A.5 Query Envelope

Every retrieval request is wrapped in a signed query envelope:

```yaml
query_id: uuid
actor_id: uuid
role: string
tenant_id: uuid
purpose_id: uuid
module_id: string
natural_language_query: string
language_preferences: []
scope: []
data_classes_requested: []
time_context: timestamp
freshness_requirement: strict|preferred|historical
offline_mode: true|false
maximum_results: integer
policy_decision_id: uuid
```

Retrieval is denied if actor, purpose, scope, or policy cannot be resolved.

### 5A.6 Retrieval Stages

1. **Intent parsing** — identify subject, task, user goal, time, and required source types.
2. **Policy pre-filter** — remove forbidden domains before search.
3. **Query expansion** — add curriculum synonyms, multilingual terms, identifiers, and graph neighbors.
4. **Candidate generation**:

   * lexical search;
   * semantic search;
   * graph traversal;
   * metadata filtering;
   * recent-session retrieval;
   * exact identifier lookup.
5. **Reciprocal Rank Fusion** — combine independent candidate lists without treating one retrieval method as authoritative.
6. **Policy post-filter** — re-check each candidate using actual metadata.
7. **Deduplication and diversity** — remove near-duplicates and preserve different useful perspectives.
8. **Quality scoring** — source authority, approval, provenance, integrity, completeness, and evidence grade.
9. **Freshness scoring** — validity dates, supersession, policy version, curriculum edition, and update time.
10. **Context fit** — learner level, language, accessibility, class constraints, and offline availability.
11. **Counter-evidence search** — retrieve conflicts, limitations, newer versions, safety warnings, and rejected alternatives.
12. **Reranking** — apply transparent weighted scoring.
13. **Context assembly** — create bounded context with source labels and exact spans.
14. **Answer or action generation** — downstream module produces output.
15. **Claim verification** — map every meaningful claim to retrieved evidence.
16. **Evidence packaging** — store query, sources, scores, policy, output, uncertainty, and model envelope.
17. **Feedback and correction** — users may report irrelevant, outdated, inaccessible, or wrong retrieval.

### 5A.7 Ranking Model

The ranking score may combine:

```text
final_score =
  relevance
  × policy_eligibility
  × source_quality
  × freshness
  × approval_weight
  × context_fit
  × accessibility_fit
  × diversity_adjustment
  × offline_availability
```

No hidden commercial sponsorship factor is allowed.

The UI must explain the major reasons a result ranked highly.

### 5A.8 CRAG: Corrective Retrieval-Augmented Generation

ScholaGraph uses corrective retrieval behavior:

* **HIGH evidence:** may support a factual answer or action.
* **MEDIUM evidence:** may support an answer with visible limitations.
* **LOW evidence:** is a lead only and must not support a consequential claim.
* **IRRELEVANT:** rejected and logged for retrieval improvement.

If evidence is weak:

1. reformulate query;
2. search alternate indexes;
3. use graph expansion;
4. search an approved external source if policy permits;
5. request human input;
6. return **INSUFFICIENT_EVIDENCE** rather than fabricate.

### 5A.9 Retrieval Fidelity Failure-Fix

Retrieval Fidelity Failure-Fix is the diagnostic process for a poor answer.

Failure categories:

* wrong tenant or scope;
* relevant source not indexed;
* chunk boundary lost context;
* stale version outranked current version;
* multilingual mismatch;
* wrong curriculum mapping;
* inaccessible source silently removed;
* embedding drift;
* lexical mismatch;
* graph link missing;
* policy filter too broad or too narrow;
* reranker bias;
* unsupported synthesis;
* citation points to wrong span.

For every failure:

1. reproduce query;
2. inspect candidate set;
3. identify the first failing stage;
4. apply the smallest correction;
5. rerun retrieval evaluation;
6. verify no cross-tenant or privacy regression;
7. publish a repair receipt;
8. reindex only affected content where possible.

### 5A.10 Multilingual Retrieval

The system supports Dutch, French, German, and English through:

* language detection;
* original-language indexing;
* multilingual embeddings;
* controlled curriculum terminology;
* query translation with original query preserved;
* language-specific stemming and lexical search;
* cross-language graph links;
* preference for original authoritative text;
* visible notice when a result is translated.

Machine translation is never presented as the legally authoritative version.

### 5A.11 Offline Retrieval

Each school node maintains an approved local retrieval pack containing:

* current curriculum;
* school policy;
* core activities and lessons;
* offline resources;
* accessibility guidance;
* local user-authorized SAGA memory;
* model and prompt cards;
* emergency and operational procedures.

Offline behavior:

* no external query is attempted without policy;
* results show the local index timestamp;
* stale policy thresholds are enforced;
* unavailable sources are marked;
* deferred updates are signed and reconciled;
* local queries and evidence remain local unless synchronization is authorized.

### 5A.12 Personal Retrieval and MySAGA

MySAGA retrieval uses separate stores:

* user-authored memory;
* institution-authored records;
* validated learning evidence;
* temporary session context;
* shared curriculum and resources.

The system must never blend uncertain AI hypotheses with verified institutional records.

Every SAGA response can display:

* memories used;
* records used;
* resources used;
* policies applied;
* items excluded;
* uncertainty;
* correction controls.

### 5A.13 Retrieval Security

Mandatory controls:

* tenant isolation;
* attribute- and purpose-based access;
* encryption in transit and at rest;
* no cross-user embedding leakage;
* no unrestricted administrator content search;
* query-log minimization;
* sensitive-query redaction;
* prompt-injection detection in retrieved content;
* untrusted-content labeling;
* tool and action separation;
* signed index releases;
* rollback to prior index;
* deletion propagation;
* test fixtures for authorization bypass.

Retrieved documents are data, never instructions that override system policy.

### 5A.14 Prompt-Injection Defense

The retrieval pipeline:

1. labels all retrieved content as untrusted data;
2. strips executable markup where not required;
3. detects instruction-like content;
4. prevents retrieved text from changing permissions or system rules;
5. separates citations from tool commands;
6. blocks secret requests and credential exfiltration;
7. requires explicit capability grants for actions;
8. logs blocked injection attempts without storing unnecessary personal content.

### 5A.15 Freshness and Supersession

Each record can be:

* current;
* expiring;
* expired;
* superseded;
* withdrawn;
* historical;
* unknown.

Current policy and curriculum versions outrank superseded versions unless the user explicitly requests historical context.

A source without verifiable freshness cannot be presented as current.

### 5A.16 Evidence Graph

The Retrieval Evidence Graph links:

* query;
* user purpose;
* policy decision;
* candidate sources;
* rejected sources;
* rank scores;
* exact source spans;
* generated claims;
* user-visible citations;
* model and prompt versions;
* human approvals;
* corrections;
* downstream actions.

This graph allows an auditor to answer:

* What did the system know?
* What was it allowed to access?
* What did it retrieve?
* What did it ignore?
* Why did it rank the chosen sources?
* Which claims relied on which evidence?
* What changed after correction?

### 5A.17 Retrieval APIs

```text
POST /v1/retrieval/query
POST /v1/retrieval/explain
POST /v1/retrieval/feedback
POST /v1/retrieval/reindex
POST /v1/retrieval/evaluate
GET  /v1/retrieval/records/{id}
GET  /v1/retrieval/queries/{id}/evidence
POST /v1/retrieval/sources
POST /v1/retrieval/sources/{id}/approve
POST /v1/retrieval/sources/{id}/retire
GET  /v1/retrieval/indexes/status
POST /v1/retrieval/indexes/rollback
```

### 5A.18 Retrieval Events

```text
retrieval.source.ingested
retrieval.source.quarantined
retrieval.source.approved
retrieval.source.superseded
retrieval.source.retired
retrieval.index.published
retrieval.index.rollback_completed
retrieval.query.executed
retrieval.query.insufficient_evidence
retrieval.injection.blocked
retrieval.feedback.received
retrieval.fidelity_failure.opened
retrieval.fidelity_failure.fixed
retrieval.deletion_propagated
```

### 5A.19 Evaluation Dataset

The retrieval test corpus must include:

* all supported languages;
* curriculum identifiers;
* superseded and current policies;
* contradictory sources;
* inaccessible records;
* near-duplicates;
* malicious prompt injection;
* missing metadata;
* cross-tenant lookalikes;
* sensitive learner records;
* offline-only resources;
* accessibility requests;
* ambiguous teacher questions.

Metrics:

* recall at K;
* precision at K;
* mean reciprocal rank;
* nDCG;
* citation accuracy;
* claim support rate;
* stale-source rate;
* policy violation rate;
* cross-tenant leakage rate;
* multilingual parity;
* insufficient-evidence correctness;
* retrieval latency;
* offline index age.

### 5A.20 Retrieval Acceptance Gates

Release is blocked unless:

* cross-tenant leakage is zero in the test suite;
* prohibited records never appear;
* every generated factual claim can map to a source span or is marked as inference;
* superseded policy is not presented as current;
* prompt-injection tests fail closed;
* deletion propagates through lexical, semantic, graph, cache, and evidence layers;
* offline retrieval reports index freshness;
* unsupported answers return insufficient evidence;
* ranking explanations are available;
* rollback restores a known-good index;
* multilingual tests meet approved parity thresholds.

---

## 7A. Complete Module Catalog

### 7A.1 Teaching Modules

* ActivityForge
* Activities Library
* Lesson Studio
* Assessment Studio
* Rubric Studio
* Project Studio
* TwinTeach Live
* Class Symphony
* Curriculum Mapper
* Resource Composer
* Teacher Reflection Journal

### 7A.2 Learner Modules

* MySAGA
* Learning DNA
* Private Mastery Routing
* INSIGHT Evaluation
* Quest Engine
* Study Coach
* Portfolio
* Goals and Planning
* Project Workspace
* Reflection Journal
* Accessibility Assistant
* Rights and Memory Controls

### 7A.3 Content Modules

* EduVerse
* Lesson Library
* Activities Library
* Assessment Library
* Rubric Library
* Project Library
* Resource Library
* Simulation Library
* Prompt Library
* SAGA Skill Library
* Offline Pack Library

### 7A.4 Classroom Modules

* Activity Conductor
* MotionClass
* No-ID Motion Layer
* Shared Whiteboard
* Team and Group Manager
* Classroom Broadcast
* Timer and Transition Engine
* Device Session Manager
* Offline Classroom Node

### 7A.5 Governance Modules

* Guardian Policy Engine
* Evidence Spine
* Human Oversight Console
* Rights and Challenge Portal
* Model Registry
* Data Registry
* Risk Register
* Incident Hub
* Release Gate
* Audit Exporter
* SecureBoard Guardian

### 7A.6 Operational Modules

* Identity and Access
* Tenant and School Setup
* Device Management
* Synchronization
* Update Provenance
* Backup and Recovery
* Interoperability Hub
* Observability
* Support Bundle
* License and SBOM Center

---

## 14A. Expanded Reference Repository Structure

```text
ScholaForge/
├── apps/
│   ├── teacher-workspace/
│   ├── learner-workspace/
│   ├── guardian-workspace/
│   ├── administrator-workspace/
│   ├── oversight-workspace/
│   └── secure-review-room/
├── domains/
│   ├── saga/
│   │   ├── memory-gate/
│   │   ├── learning-dna/
│   │   ├── memory-garden/
│   │   └── portability/
│   ├── teaching/
│   │   ├── activity-forge/
│   │   ├── activities-library/
│   │   ├── lesson-studio/
│   │   ├── assessment-studio/
│   │   ├── rubric-studio/
│   │   └── project-studio/
│   ├── classroom/
│   │   ├── twin-teach-live/
│   │   ├── activity-conductor/
│   │   ├── class-symphony/
│   │   ├── motion-class/
│   │   └── no-id-motion/
│   ├── content/
│   │   ├── eduverse/
│   │   ├── resource-library/
│   │   ├── prompt-library/
│   │   └── saga-skill-library/
│   ├── curriculum/
│   │   ├── knowledge-galaxy/
│   │   └── curriculum-mapper/
│   ├── learner/
│   │   ├── quest-engine/
│   │   ├── study-coach/
│   │   ├── portfolio/
│   │   └── reflection/
│   ├── governance/
│   │   ├── guardian-policy-engine/
│   │   ├── evidence-spine/
│   │   ├── rights-challenge/
│   │   └── assurance-compiler/
│   ├── secureboard/
│   │   ├── capture/
│   │   ├── sealed-storage/
│   │   ├── quorum-ceremony/
│   │   ├── legal-instrument-gate/
│   │   └── evidence-export/
│   └── retrieval/
│       ├── ingestion/
│       ├── classification/
│       ├── lexical-index/
│       ├── semantic-index/
│       ├── graph-index/
│       ├── query-orchestrator/
│       ├── policy-filter/
│       ├── rank-fusion/
│       ├── reranker/
│       ├── corrective-retrieval/
│       ├── fidelity-debugger/
│       └── evidence-packager/
├── platform/
│   ├── identity/
│   ├── policy/
│   ├── data-vault/
│   ├── model-gateway/
│   ├── event-bus/
│   ├── synchronization/
│   ├── interoperability/
│   ├── observability/
│   └── update-provenance/
├── packages/
│   ├── feature-contracts/
│   ├── schemas/
│   ├── policy-sdk/
│   ├── retrieval-sdk/
│   ├── evidence-sdk/
│   ├── accessibility-kit/
│   ├── crypto/
│   └── test-fixtures/
├── policies/
├── assurance/
├── tests/
├── deploy/
├── evidence/
└── tools/
```

---

## 16A. Cross-Feature API Conventions

Every feature API must return:

```yaml
request_id: uuid
result: {}
status: success|partial|denied|failed
explanation: {}
policy_decision_id: uuid
evidence_receipt_id: uuid
warnings: []
human_review_required: boolean
```

No AI-assisted endpoint may return only an opaque result.

---

## 17A. End-to-End User Journeys

### 17A.1 Teacher Creates and Runs an Activity

1. Teacher opens ActivityForge.
2. Selects curriculum objective, duration, class, and delivery mode.
3. Guardian Policy Engine authorizes retrieval scopes.
4. ScholaGraph retrieves curriculum, approved activities, learner-group accommodations, and available resources.
5. ActivityForge generates structured candidates.
6. Validators check safety, accessibility, timing, and policy.
7. Teacher selects and edits a candidate.
8. Activity is saved as a draft.
9. Required reviewer approves publication.
10. Teacher launches through Class Symphony.
11. Activity Conductor synchronizes devices, motion zones, timers, and SAGA support.
12. Offline Neural Mesh keeps the session running if connectivity fails.
13. Evidence Spine records significant actions.
14. Teacher reviews outcome evidence and reflection.
15. A new version may be proposed; the delivered version remains immutable.

### 17A.2 Learner Uses MySAGA for a Quest

1. Learner opens Quest Engine.
2. MySAGA retrieves the learner’s authorized goals, verified competencies, and available activities.
3. Guardian Policy Engine excludes prohibited or unnecessary data.
4. Quest Engine proposes choices and explains each.
5. Learner selects a mission.
6. The mission runs locally or online.
7. MySAGA offers hints using approved resources.
8. Learner submits evidence and reflection.
9. Teacher validates consequential competency changes.
10. Learning DNA updates with a signed, challengeable receipt.

### 17A.3 School Publishes an Activity Pack

1. Author submits content to EduVerse.
2. Provenance, license, malware, accessibility, and metadata checks run.
3. Curriculum reviewer validates mappings.
4. School reviewer approves publication scope.
5. Retrieval indexes the approved version.
6. Teachers discover it through Activities Library.
7. Forked adaptations preserve lineage.
8. A later safety issue retires the affected version.
9. Pinned users receive a migration warning and replacement recommendation.

### 17A.4 Retrieval Failure and Correction

1. User reports an irrelevant or outdated result.
2. System opens a Retrieval Fidelity Failure-Fix case.
3. Evaluator reproduces the exact query envelope.
4. Candidate sets and ranking stages are inspected.
5. The first failing stage is identified.
6. A minimal configuration, metadata, graph, or index correction is applied.
7. Security and privacy regression tests run.
8. Evaluation confirms improvement.
9. A repair receipt is published.
10. The affected index is released with rollback available.

---

### 17A.5 Private Mastery Routing Journey

1. Teacher selects one shared objective.
2. MySAGA retrieves only authorized learner evidence.
3. Readiness is evaluated by domain.
4. Uncertainty and possible accessibility confounders are checked.
5. A minimized Task Need Capsule is created.
6. ScholaGraph retrieves approved variants.
7. Productive-challenge ranking selects candidates.
8. Anti-undermining controls verify that the learner is not being trapped at a low level.
9. Teacher and learner can inspect the reason.
10. A neutral task variant is delivered.
11. The learner completes work with recorded support conditions.
12. Evidence returns to INSIGHT.
13. Human-reviewed results update Learning DNA.
14. The next routing decision uses the corrected evidence.
15. A learner can request challenge or correction at any point.

**End result:** one class objective, individually appropriate routes, no public ability labels, and continuous opportunity to progress.

### 17A.6 INSIGHT Evaluation Journey

1. Teacher declares the competency and evidence criteria.
2. Learner completes one or more suitable tasks.
3. Evidence records complexity, modality, support, and accessibility conditions.
4. AI organizes the evidence and proposes a transparent mapping.
5. Reviewer 1 evaluates.
6. Reviewer 2 evaluates independently where required.
7. Agreement is calculated.
8. Low agreement triggers moderation or more evidence.
9. An accountable human finalizes the result.
10. The learner receives an understandable explanation.
11. The learner may challenge or correct the result.
12. Verified competency updates Learning DNA.
13. A private mastery capsule may be issued.

**End result:** a trustworthy competency record that explains not only the result, but the evidence, depth, independence, uncertainty, and human responsibility behind it.

## 18A. Feature-Level Test Matrix

| Feature                 | Functional tests                    | Safety/privacy tests                  | Retrieval tests                  | Explainability tests               | Recovery tests                          |
| ----------------------- | ----------------------------------- | ------------------------------------- | -------------------------------- | ---------------------------------- | --------------------------------------- |
| MySAGA                  | memory update, correction, export   | unauthorized memory access            | source separation                | memory-use explanation             | restore and deletion                    |
| Private Mastery Routing | readiness, task variants, challenge | no public labels, no permanent tracks | approved variant retrieval       | assignment reason                  | teacher fallback and profile correction |
| INSIGHT Evaluation      | evidence, double rating, moderation | no autonomous final grade             | rubric and curriculum retrieval  | result and uncertainty explanation | correction and appeal                   |
| ActivityForge           | create, adapt, publish, launch      | unsafe activity rejection             | curriculum and library search    | source and assumption display      | offline fallback                        |
| Activities Library      | search, filter, fork, version       | scope isolation                       | ranking and freshness            | rank reason                        | index rollback                          |
| Knowledge Galaxy        | graph navigation                    | restricted edge access                | graph retrieval                  | path explanation                   | graph version rollback                  |
| Quest Engine            | mission sequencing                  | no manipulative scoring               | suitable activity retrieval      | adaptation reason                  | manual path                             |
| TwinTeach Live          | suggestion flow                     | no autonomous control                 | live approved-resource retrieval | why suggestion appeared            | teacher-only mode                       |
| SecureBoard             | sealed capture and ceremony         | quorum and key bypass                 | not applicable to video content  | access-state explanation           | fail-closed                             |
| ScholaGraph             | indexing and query                  | tenant isolation, injection           | precision, recall, freshness     | result ranking explanation         | index rollback                          |

---

## 20A. Implementation Sequence by Product Slice

### Slice 1 — Recognizable Foundation

* identity;
* tenant;
* Guardian Policy Engine;
* Evidence Spine;
* ScholaGraph basic lexical retrieval;
* Activities Library;
* Teacher Workspace;
* offline document access.

### Slice 2 — Teaching Creation

* ActivityForge;
* Lesson Studio;
* curriculum graph;
* accessibility adaptation;
* review and publication;
* semantic and graph retrieval.

### Slice 3 — Classroom Execution

* Activity Conductor;
* Class Symphony;
* TwinTeach Live;
* Offline Neural Mesh;
* MotionClass without identification.

### Slice 4 — Personal Intelligence

* MySAGA;
* Memory Garden;
* Learning DNA;
* Quest Engine;
* rights and challenge controls.

### Slice 5 — Content Ecosystem

* EduVerse;
* resource and prompt libraries;
* federation;
* licensing and provenance;
* community governance.

### Slice 6 — Advanced Assurance

* corrective retrieval;
* retrieval fidelity debugger;
* model evaluation;
* impact dashboards;
* OMEGA Seal;
* SecureBoard Guardian under separate legal and security approval.

### Slice 7 — Human Potential and Pathways

* Human Potential Engine;
* Talent Constellation;
* Passion Discovery;
* Career Genome;
* Innovation Passport;
* Memory Garden;
* Human Mentor Engine.

### Slice 8 — School Intelligence

* School Digital Twin;
* Education Operating System;
* Environment Intelligence;
* Universal Accessibility Engine;
* Family Intelligence Portal;
* School Improvement Engine.

### Slice 9 — Networked Innovation

* School Innovation Marketplace;
* World Knowledge Network;
* Living Competency Graph;
* Scientific Learning Lab;
* Collective Intelligence Layer;
* Explainable AI Observatory.

### Slice 10 — Knowledge Orchestration and Retrieval Integrity

* Knowledge Orchestration Engine;
* semantic and structural segmentation;
* segment-level permissions;
* role-specific retrieval;
* retrieval planning;
* CRAG quality states;
* RFF fidelity repair;
* counter-evidence retrieval;
* evidence packets;
* module retrieval contracts;
* offline knowledge packs;
* Explainable AI Observatory integration;
* knowledge evolution and impact analysis.

Each slice requires validated tests, evidence, rollback, owners, and deployment approval. No slice inherits a production-ready claim from this blueprint.

---

## 27B. Complete Recognizable Feature Registry

| Feature ID  | Canonical feature                    | Plain-language meaning                                                        |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| SF-SAGA-001 | MySAGA                               | A private educational AI that evolves with one user                           |
| SF-PMR-001  | Private Mastery Routing              | Different task, equal dignity, individual progress                            |
| SF-INS-001  | INSIGHT Evaluation                   | Evidence-calibrated, human-governed student evaluation                        |
| SF-LDNA-001 | Learning DNA                         | A transparent, correctable learning-state model                               |
| SF-TTL-001  | TwinTeach Live                       | Human teacher and AI working together live                                    |
| SF-AFG-001  | ActivityForge                        | Create and adapt validated learning activities                                |
| SF-ALB-001  | Activities Library                   | Find and reuse governed classroom activities                                  |
| SF-LST-001  | Lesson Studio                        | Build complete lessons from goals to reflection                               |
| SF-AST-001  | Assessment Studio                    | Create and review transparent assessments                                     |
| SF-RBS-001  | Rubric Studio                        | Build and moderate understandable rubrics                                     |
| SF-PRS-001  | Project Studio                       | Run long-term collaborative projects                                          |
| SF-QST-001  | Quest Engine                         | Offer meaningful adaptive missions                                            |
| SF-KGL-001  | Knowledge Galaxy                     | Navigate curriculum, concepts, evidence, and resources                        |
| SF-CSY-001  | Class Symphony                       | The complete live classroom orchestration experience                          |
| SF-MOC-001  | MotionClass                          | Use physical space and movement for learning                                  |
| SF-NIM-001  | No-ID Motion Layer                   | Detect classroom movement without identifying people                          |
| SF-ACO-001  | Activity Conductor                   | Coordinate people, devices, activities, and AI                                |
| SF-EDV-001  | EduVerse                             | Governed educational content ecosystem                                        |
| SF-GPE-001  | Guardian Policy Engine               | Enforce school and legal rules before actions execute                         |
| SF-RET-001  | ScholaGraph Retrieval Fabric         | Retrieve trusted knowledge with evidence and policy controls                  |
| SF-EVS-001  | Evidence Spine                       | Explain and audit every important action                                      |
| SF-ONM-001  | Offline Neural Mesh                  | Keep education and AI working without the cloud                               |
| SF-OMS-001  | OMEGA Seal Sandbox                   | Safely experiment with isolated tools and data                                |
| SF-SBG-001  | SecureBoard Guardian                 | Emergency evidence sealed behind a five-person quorum                         |
| SF-HPE-001  | Human Potential Engine               | Connects learning evidence to strengths, opportunities, and future pathways   |
| SF-CGN-001  | Career Genome                        | Evidence-based exploration of study and career families                       |
| SF-PDE-001  | Passion Discovery Engine             | Identifies transparent patterns of voluntary curiosity                        |
| SF-TCN-001  | Talent Constellation                 | Visualizes verified and emerging strengths without ranking                    |
| SF-HME-001  | Human Mentor Engine                  | Connects learners with safeguarded human mentors                              |
| SF-SDT-001  | School Digital Twin                  | Simulates school changes before real-world implementation                     |
| SF-EOS-001  | Education Operating System           | Connects governed school workflows and systems                                |
| SF-SIM-001  | School Innovation Marketplace        | Exchanges reviewed educational inventions and methods                         |
| SF-LSF-001  | Life Skills Framework                | Recognizes evidence of practical and human competencies                       |
| SF-LCG-001  | Living Competency Graph              | Keeps competency models current and versioned                                 |
| SF-SLL-001  | Scientific Learning Lab              | Evaluates educational methods through ethical research                        |
| SF-EAO-001  | Explainable AI Observatory           | Makes AI behavior, evidence, and human decisions inspectable                  |
| SF-SEI-001  | School Environment Intelligence      | Improves learning conditions without diagnosing individuals                   |
| SF-UAE-001  | Universal Accessibility Engine       | Builds accessible adaptation into every feature                               |
| SF-FIP-001  | Family Intelligence Portal           | Gives families understandable, privacy-bounded support information            |
| SF-WKN-001  | World Knowledge Network              | Federates governed educational knowledge across schools                       |
| SF-INP-001  | Innovation Passport                  | Records verified projects, inventions, and contributions                      |
| SF-ASIE-001 | Autonomous School Improvement Engine | Recommends explainable school improvements for human approval                 |
| SF-CIL-001  | Collective Intelligence Layer        | Learns from privacy-protected patterns across schools                         |
| SF-MGD-001  | Memory Garden                        | Preserves a learner-controlled narrative of growth                            |
| SF-TRN-001  | Transitional Architecture            | Moves schools gradually from compatibility to human development               |
| SF-EPE-001  | Expert Pathway Engine                | Develops voluntary deep expertise while preserving broad foundations          |
| SF-HDO-001  | Human Development Outcome Model      | Represents growth without reducing the learner to one score                   |
| SF-KOE-001  | Knowledge Orchestration Engine       | Plans, retrieves, validates, explains, and governs educational knowledge      |
| SF-MRC-001  | Module Retrieval Contract Standard   | Defines purpose-bound retrieval requirements for every module                 |
| SF-RQF-001  | Retrieval Quality Framework          | Measures authority, suitability, freshness, conflict, and educational fitness |

### 27B.1 Navigation Contract

Each application must expose a **Feature Map** screen using the canonical names and plain-language meanings above.

Each documentation page must show:

* location in the feature family;
* user roles;
* upstream dependencies;
* downstream consumers;
* data touched;
* retrieval domains used;
* policy decisions required;
* evidence generated;
* current implementation status.

### 27B.2 Implementation Status Labels

Only these labels are allowed:

* **CONCEPT**
* **TARGET_SPEC**
* **PROTOTYPE**
* **IMPLEMENTED_UNVERIFIED**
* **VALIDATED_IN_TEST**
* **PILOT_APPROVED**
* **PRODUCTION_APPROVED**
* **RETIRED**

This document assigns **TARGET_SPEC** unless separate runtime evidence proves another status.

---

# PART V — KNOWLEDGE ORCHESTRATION DEEP COMPANION

This part explains why ScholaForge must orchestrate knowledge.

It covers retrieval planning, segmentation, role-specific context, offline knowledge, failure visibility, explainability, evolution, and module retrieval contracts.

## 0N. Knowledge Must Be Orchestrated, Not Merely Searched

ScholaForge treats retrieval as an educational responsibility.

A normal search system tries to return documents that resemble a query.

An educational system must do much more.

It must determine:

* what the person is actually trying to accomplish;
* what context is missing;
* what the learner already knows;
* which curriculum or competency applies;
* whether the source is authoritative;
* whether the content is appropriate for the learner;
* whether accessibility adaptation is required;
* whether the information is current;
* whether sources conflict;
* whether the user is authorized to see the evidence;
* whether the system should answer at all;
* whether a teacher or other human must review the result.

A technically relevant answer can still be educationally wrong.

Examples:

* an advanced explanation may be accurate but unusable for a beginner;
* a simplified explanation may under-challenge an advanced learner;
* an old curriculum document may conflict with the active standard;
* a correct activity may require equipment the school does not have;
* a family-facing answer may expose a private learner reflection;
* a generated assessment may test content that was never taught;
* a recommendation may rely on one weak source while stronger contradictory evidence exists.

ScholaForge therefore introduces a flagship subsystem:

## Knowledge Orchestration Engine

> **Feature ID:** SF-KOE-001

The Knowledge Orchestration Engine, or KOE, sits above search, RAG, graph retrieval, lexical retrieval, semantic retrieval, CRAG, reranking, policy enforcement, and generation.

Its purpose is not simply to find information.

Its purpose is to assemble the right evidence, for the right educational purpose, for the right person, at the right moment, under the right permissions, with visible uncertainty and human control.

---

## 0O. Plain-Language Explanation of the Knowledge Orchestration Engine

### What It Is

The Knowledge Orchestration Engine is the part of ScholaForge that decides what knowledge is needed before the system tries to answer, plan, recommend, assess, or generate.

It acts like a careful educational librarian, curriculum specialist, privacy officer, accessibility specialist, and reasoning assistant working together.

### Why It Exists

A teacher may ask:

> “Create a fractions activity.”

A basic AI may immediately produce an activity.

ScholaForge first asks internally:

* Which age or readiness range?
* Which curriculum objective?
* What was taught previously?
* What misconceptions are present?
* How much time is available?
* How many learners are present?
* Which materials exist?
* Is the class online, offline, or in a room?
* Are accessibility adaptations required?
* Is this a live lesson or future planning?
* Does the teacher want practice, diagnosis, collaboration, or transfer?
* What evidence would show that learning occurred?

Only after those questions are resolved does the system retrieve and build the activity.

### The Real-World Logic

The same request can require completely different outcomes.

“Teach fractions” could mean:

* introduce the idea of part and whole;
* help learners compare fractions;
* correct a denominator misconception;
* connect fractions to percentages;
* prepare for a recognized examination;
* create a physical group activity;
* build an advanced proof-based explanation;
* support a learner with dyscalculia;
* provide an offline activity with paper only.

The words are similar. The educational need is not.

### Human End Result

The teacher receives a result that explains:

* what context was used;
* which sources were selected;
* why they were selected;
* which assumptions remain;
* which sources were rejected;
* what adaptations were applied;
* how confidence was determined;
* what requires teacher confirmation;
* what evidence should be collected afterward.

The learner receives an answer or activity suited to the intended objective without seeing private classification labels.

---

## 0P. The Educational Retrieval Principle

ScholaForge follows this rule:

> Retrieval quality is not measured only by whether the system found related text. It is measured by whether the retrieved evidence supports a safe, accurate, suitable, explainable, and useful educational action.

Every retrieval is evaluated across:

* relevance;
* authority;
* freshness;
* curriculum alignment;
* competency alignment;
* age and readiness suitability;
* accessibility;
* language;
* safety;
* evidence quality;
* conflict;
* completeness;
* permissions;
* provenance;
* practical feasibility;
* uncertainty.

A result may be highly relevant and still be rejected because it is:

* outdated;
* unauthorized;
* inaccessible;
* unsafe;
* poorly sourced;
* too advanced;
* too simplistic;
* commercially biased;
* inconsistent with active policy;
* impossible in the current environment.

---

## 0Q. Retrieval Is Segmented by Purpose

ScholaForge does not use one undifferentiated search index for every task.

It uses purpose-separated retrieval domains.

### Curriculum Retrieval

Finds:

* active objectives;
* prerequisite relationships;
* progression;
* qualification mappings;
* historical versions;
* jurisdictional scope.

**Why:** A lesson or assessment must be grounded in the correct active curriculum, not merely related educational content.

### Pedagogy Retrieval

Finds:

* teaching strategies;
* worked examples;
* misconception patterns;
* scaffolds;
* extension methods;
* collaborative formats;
* transfer tasks.

**Why:** Knowing the subject is not the same as knowing how to teach it.

### Learner Evidence Retrieval

Finds only authorized evidence relevant to the current educational purpose.

Examples:

* recent mastery evidence;
* misconceptions;
* task preferences;
* support settings;
* learner corrections;
* teacher confirmations.

**Why:** Personalization requires context, but unrestricted access would create surveillance and privacy harm.

### Activity and Resource Retrieval

Finds:

* lessons;
* activities;
* simulations;
* experiments;
* projects;
* open educational resources;
* offline materials;
* equipment requirements.

**Why:** The system must recommend something that can actually be used.

### Assessment Retrieval

Finds:

* competency definitions;
* rubric criteria;
* prior approved items;
* evidence requirements;
* moderation guidance;
* accessibility rules.

**Why:** Assessment must test intended learning and avoid accidental bias.

### Policy and Governance Retrieval

Finds:

* school policy;
* safeguarding rules;
* privacy rules;
* approval requirements;
* role permissions;
* audit obligations.

**Why:** A useful action may still be prohibited or require human approval.

### Expert Pathway Retrieval

Finds:

* pathway prerequisites;
* mentors;
* institutions;
* projects;
* qualifications;
* transfer routes;
* safety requirements.

**Why:** Deep expertise requires connected, authentic opportunities rather than isolated content suggestions.

### Environment and Operations Retrieval

Finds:

* room availability;
* equipment;
* accessibility routes;
* schedule;
* connectivity;
* device state;
* class size;
* local constraints.

**Why:** Educational plans must survive the real environment.

### Research Retrieval

Finds:

* educational studies;
* local pilots;
* evaluation results;
* counter-evidence;
* limitations;
* negative findings.

**Why:** Innovation must be tested rather than assumed effective.

### Family Retrieval

Finds only family-authorized summaries and support information.

**Why:** Families need useful understanding without access to every private learner or teacher record.

### Audit Retrieval

Finds:

* decisions;
* model versions;
* source traces;
* policy checks;
* approvals;
* overrides;
* incidents;
* corrections.

**Why:** The system must be accountable after the event, not only persuasive before it.

---

## 0R. Retrieval Segmentation Model

Each knowledge object is segmented at several levels.

### Source-Level Segmentation

A source is first classified by:

* owner;
* jurisdiction;
* authority;
* license;
* confidentiality;
* version;
* validity period;
* educational purpose;
* learner age range;
* language;
* accessibility characteristics;
* review status.

### Structural Segmentation

The source is divided according to its meaning, not arbitrary length alone.

Possible units include:

* regulation;
* policy clause;
* curriculum objective;
* competency;
* lesson section;
* worked example;
* misconception;
* assessment criterion;
* safety instruction;
* activity step;
* evidence requirement;
* exception;
* glossary definition.

### Semantic Segmentation

Each unit is enriched with:

* topic;
* concepts;
* prerequisite concepts;
* learning objective;
* difficulty;
* domain;
* pedagogical function;
* evidence type;
* potential conflicts;
* relationship to other units.

### Permission Segmentation

Each unit has separate visibility and use rules.

A document may contain:

* public information;
* teacher-only guidance;
* administrator-only policy;
* private learner evidence;
* sealed emergency evidence.

Those units must not share the same retrieval permissions merely because they are in the same file.

### Temporal Segmentation

The system distinguishes:

* active;
* future;
* superseded;
* archived;
* experimental;
* temporarily suspended;
* legally expired.

### Confidence Segmentation

Each unit records:

* source authority;
* review quality;
* extraction confidence;
* agreement with other sources;
* freshness;
* unresolved uncertainty.

### Why Better Segmentation Matters

Poor segmentation causes educational mistakes.

Example:

A policy document may state a general rule in one section and an important exception later.

If the system retrieves only the general rule, the answer can be wrong.

A curriculum document may contain several age levels in one chapter.

If the system retrieves the entire chapter, the generated lesson may mix incompatible expectations.

A learner record may contain private reflection and verified assessment evidence in one report.

If permissions are applied only to the full report, too much information may be exposed.

Better segmentation protects meaning, permissions, versioning, and educational suitability.

---

## 0S. The Knowledge Orchestration Journey

Every consequential request passes through the following process.

### Step 1 — Understand the Human Purpose

The system identifies whether the person wants to:

* explain;
* learn;
* plan;
* create;
* assess;
* diagnose a learning gap;
* find policy;
* make an operational decision;
* explore a pathway;
* communicate with family;
* audit a previous decision.

### Step 2 — Determine Missing Context

The system checks which facts are necessary.

It may need:

* learner stage;
* objective;
* language;
* accessibility settings;
* prior evidence;
* time;
* available materials;
* school policy;
* jurisdiction;
* required qualification;
* live or planning context.

The system does not collect information merely because it could be useful.

It requests or retrieves only what is necessary.

### Step 3 — Create a Retrieval Plan

The system defines:

* which knowledge domains are needed;
* which sources are authoritative;
* which searches must run;
* which graph relationships must be traversed;
* which data must remain excluded;
* what freshness is required;
* what conflicts must be checked.

### Step 4 — Run Multiple Retrieval Methods

The engine can combine:

* exact lexical search;
* semantic search;
* knowledge graph traversal;
* metadata filtering;
* curriculum dependency search;
* policy lookup;
* learner evidence lookup;
* temporal filtering;
* offline local search.

### Step 5 — Fuse Results

Results are merged through governed ranking.

Similarity alone does not decide.

Ranking considers:

* authority;
* relevance;
* freshness;
* purpose;
* context;
* educational suitability;
* permissions;
* evidence strength.

### Step 6 — Correct Retrieval

CRAG evaluates whether the retrieved set is:

* sufficient;
* partially sufficient;
* conflicting;
* low quality;
* irrelevant.

The system may:

* reformulate the query;
* search another source;
* retrieve a prerequisite;
* retrieve counter-evidence;
* narrow the scope;
* stop and request human review.

### Step 7 — Apply Retrieval Fidelity Failure-Fix

RFF checks whether the final context faithfully represents the sources.

It detects:

* missing exception;
* mixed versions;
* unsupported summary;
* lost qualifier;
* permission leakage;
* truncated instruction;
* distorted source meaning.

### Step 8 — Build an Evidence Packet

The engine creates a structured packet containing:

* selected evidence;
* rejected evidence;
* source provenance;
* conflicts;
* uncertainty;
* permissions;
* currentness;
* missing information;
* reasoning constraints.

### Step 9 — Generate or Recommend

Only then may another module create:

* lesson;
* activity;
* answer;
* assessment;
* pathway;
* school recommendation;
* family explanation.

### Step 10 — Human Review

The correct reviewer receives:

* the output;
* source explanation;
* uncertainty;
* alternatives;
* required decisions.

### Step 11 — Capture Outcome Evidence

After use, the system may record:

* whether the result helped;
* teacher correction;
* learner response;
* safety issue;
* retrieval failure;
* outdated source;
* successful adaptation.

This feedback improves retrieval quality without creating hidden learner labels.

---

## 0T. Role-Specific Retrieval Logic

### Learner

A learner receives:

* understandable explanations;
* relevant examples;
* authorized personal progress context;
* safe exploration;
* visible sources where appropriate.

A learner does not receive:

* hidden teacher notes;
* peer records;
* sealed evidence;
* internal risk classifications;
* administrative-only policy commentary.

### Teacher

A teacher may retrieve:

* curriculum;
* pedagogy;
* approved learner evidence;
* misconceptions;
* accessibility settings;
* activity resources;
* assessment criteria.

A teacher still sees only information necessary for the teaching relationship and purpose.

### Family

A family may retrieve:

* approved progress summaries;
* goals;
* projects;
* home-support guidance;
* rights;
* communications.

A family does not automatically receive:

* private learner reflections;
* teacher drafts;
* peer information;
* sealed recordings;
* research records.

### Administrator

An administrator may retrieve:

* operational policy;
* aggregate outcomes;
* staffing and scheduling information;
* system health;
* compliance evidence.

Access to individual learner evidence requires a defined purpose and authorization.

### Mentor

A mentor receives only:

* pathway-relevant information;
* project scope;
* learner-approved interests;
* safeguarding instructions;
* communication boundaries.

### Auditor or Oversight Role

An auditor receives:

* trace;
* source versions;
* policies;
* approvals;
* incidents;
* system behavior;
* integrity receipts.

Content is minimized to the audit purpose.

### AI Module

An AI module does not have universal access.

Each module receives a scoped retrieval token defining:

* purpose;
* role;
* permitted domains;
* time limit;
* output constraints;
* evidence requirements.

---

## 0U. Live Classroom Retrieval

A live classroom has different needs from lesson planning.

A teacher may have only seconds.

Live retrieval therefore uses:

* prevalidated local indexes;
* cached curriculum;
* approved examples;
* offline resources;
* strict confidence thresholds;
* short explanations;
* one-tap alternatives;
* immediate teacher override.

It avoids:

* long open-ended web searches;
* unreviewed external resources;
* complex policy interpretation;
* consequential learner classification;
* background changes to learner profiles.

### Real-World Example

A learner asks:

> “Why does dividing by a fraction make the number larger?”

The live engine retrieves:

* the current lesson objective;
* an approved visual explanation;
* a known misconception;
* one practical example;
* one extension question.

It presents the teacher with a concise explanation and optional visual model.

It does not redesign the learner’s pathway during the live exchange.

---

## 0V. Offline Knowledge Orchestration

ScholaForge must work when the internet is absent, unstable, expensive, or prohibited.

Offline retrieval uses:

* local encrypted indexes;
* local embeddings;
* local curriculum graph;
* approved cached resources;
* version manifests;
* priority synchronization;
* expiry rules;
* conflict detection;
* signed update packages.

### Offline Logic

When disconnected:

1. The system identifies the active local corpus.
2. It checks the age and validity of sources.
3. It excludes expired or revoked items.
4. It performs local lexical, semantic, and graph retrieval.
5. It marks currentness limitations.
6. It stores outcome receipts locally.
7. It synchronizes when permitted.
8. It resolves conflicts without silently overwriting local evidence.

### Human End Result

A rural school, emergency environment, or privacy-restricted deployment can continue teaching without pretending that disconnected knowledge is current when it may not be.

---

## 0W. Retrieval Explainability

Every consequential retrieval result must be able to answer:

* What did the system understand the request to mean?
* Which context did it use?
* Which sources did it search?
* Which sources were selected?
* Why were they selected?
* Which sources were rejected?
* Were there conflicts?
* What information was missing?
* How current is the evidence?
* What policy restrictions applied?
* What did the AI infer rather than retrieve?
* Who reviewed or approved the result?
* How can the decision be corrected?

Explainability is adapted by role.

A learner sees a simpler explanation.

A teacher sees pedagogical and curriculum reasoning.

An auditor sees full trace and technical evidence.

---

## 0X. Retrieval Failure Must Be Visible

The engine may return:

* sufficient evidence;
* partial evidence;
* conflicting evidence;
* outdated evidence;
* unauthorized evidence;
* no evidence;
* offline-limited evidence;
* human review required.

It must not convert “nothing reliable was found” into a confident answer.

### Example

A school asks whether a new external tool is permitted.

If policy sources conflict or the active legal basis is unclear, the engine responds:

> “The current evidence is insufficient for automatic approval. The tool requires privacy, security, and legal review.”

That response is more useful than an invented yes or no.

---

## 0Y. Knowledge Evolution

Knowledge objects can change because:

* curriculum is revised;
* policy is updated;
* a source is corrected;
* a resource is withdrawn;
* evidence shows an activity is ineffective;
* accessibility guidance improves;
* a security issue is discovered;
* a scientific conclusion changes.

The engine maintains:

* source lineage;
* version history;
* effective dates;
* replacement relationships;
* deprecation notices;
* impact analysis;
* revalidation requirements.

When a source changes, ScholaForge identifies affected:

* lessons;
* activities;
* assessments;
* pathways;
* recommendations;
* family guidance;
* stored templates.

---

## 0Z. Retrieval Memory Without Hidden Manipulation

The system can learn from:

* teacher acceptance;
* teacher correction;
* learner success;
* learner confusion;
* accessibility outcomes;
* source retirement;
* incident reports;
* failed searches;
* preferred school resources.

However:

* popularity does not override quality;
* repeated use does not make a source authoritative;
* one learner’s behavior does not create a permanent label;
* teacher corrections remain attributable;
* personalization memory is purpose-bound;
* feedback loops are monitored;
* users can inspect and correct retained preferences.

---

## 0AA. Retrieval Contracts for Every ScholaForge Module

Every module must define:

1. purpose;
2. permitted users;
3. required context;
4. prohibited context;
5. knowledge domains;
6. retrieval plan;
7. authority rules;
8. freshness rules;
9. permission rules;
10. conflict handling;
11. output evidence;
12. human review;
13. outcome feedback;
14. retention;
15. rollback.

### MySAGA

Retrieves only purpose-relevant learner evidence, curriculum context, and teacher-confirmed interpretations.

### Private Mastery Routing

Retrieves current objective, prerequisites, recent evidence, accessibility needs, and suitable task variants.

### INSIGHT

Retrieves competency criteria, rubric evidence, moderation guidance, prior relevant work, and reviewer rules.

### Lesson Studio

Retrieves curriculum, pedagogy, misconceptions, resources, environment constraints, and accessibility options.

### ActivityForge

Retrieves objectives, activity patterns, equipment, class context, safety, and evidence requirements.

### TwinTeach Live

Uses high-confidence, low-latency, prevalidated retrieval with teacher control.

### Career Genome

Retrieves evidence-backed strengths, pathway information, prerequisites, alternatives, and current opportunity data without assigning destiny.

### Human Mentor Engine

Retrieves verified mentors, safeguarding status, pathway fit, availability, and communication boundaries.

### School Digital Twin

Retrieves operational data, constraints, historical outcomes, and scenario assumptions.

### School Improvement Engine

Retrieves operational evidence, research, alternatives, affected groups, risks, and rollback options.

### Scientific Learning Lab

Retrieves prior studies, negative evidence, ethics rules, measurement methods, and local context.

### Family Intelligence Portal

Retrieves only approved summaries and support information.

### Explainable AI Observatory

Retrieves traces, model versions, source lineage, policy decisions, corrections, and incidents.

---

## 0AB. The End-to-End Teacher Scenario

A teacher asks:

> “Create a 45-minute fractions lesson for tomorrow. The class has 24 learners. Some understand equivalent fractions, while others still confuse numerator and denominator. We have paper, markers, and one projector.”

### Human Logic

The system should not produce one average lesson.

It should help the teacher run one coherent class with different routes.

### KOE Process

1. Identify the objective and lesson type.
2. Retrieve the active curriculum objective.
3. Retrieve prerequisite concepts.
4. Retrieve recent class-level evidence.
5. Retrieve authorized learner-group needs without exposing labels.
6. Retrieve known misconceptions.
7. Retrieve paper-based and projector-compatible activities.
8. Retrieve accessibility adaptations.
9. Retrieve evidence methods for the end of the lesson.
10. reject activities requiring unavailable equipment.
11. create three task variants under one shared lesson objective.
12. explain why each variant exists.
13. present the teacher with editable choices.
14. record teacher changes.
15. after the lesson, connect evidence to INSIGHT and MySAGA.

### End Result

The class remains socially unified.

Learners receive different challenge levels privately.

The teacher understands why the lesson was assembled.

The system learns from teacher correction and actual outcomes.

---

## 0AC. The End-to-End Learner Scenario

A learner asks:

> “I do not understand photosynthesis.”

### KOE Process

1. Determine the current learning objective.
2. Retrieve the learner’s authorized prior evidence.
3. identify whether the difficulty concerns vocabulary, energy transfer, chemical process, or system relationships.
4. retrieve an age-appropriate explanation.
5. retrieve a visual or practical model compatible with accessibility preferences.
6. retrieve one checking question.
7. avoid revealing labels such as “low readiness.”
8. explain the source and uncertainty in simple language.
9. offer another explanation if the first fails.
10. notify the teacher only according to configured learning-support rules.

### End Result

The learner receives help tailored to the actual misunderstanding rather than a generic textbook paragraph.

---

## 0AD. The End-to-End Policy Scenario

An administrator asks:

> “Can we introduce an AI note-taking tool for teachers?”

### KOE Process

1. identify jurisdiction and school policy.
2. retrieve privacy, security, procurement, accessibility, and records-management requirements.
3. retrieve vendor documentation and independent evidence.
4. identify missing information.
5. check data location, retention, subprocessors, model training, authentication, export, deletion, and audit.
6. retrieve alternative tools where relevant.
7. identify risks and required approvals.
8. produce a decision packet.
9. require human legal, privacy, security, and procurement review.
10. preserve the decision receipt.

### End Result

The system does not approve technology because it is fashionable or convenient.

It creates a traceable, reviewable decision process.

## PART B — TECHNICAL AND OPERATIONAL BLUEPRINT

The remainder of this document defines the technical realization of the plain-language product blueprint above.

---

# PART VI — SUPPLEMENTARY ARCHITECTURE, VALIDATION, AND ROADMAP NOTES

These sections retain additional design intelligence from the innovation blueprint.

They are supporting detail.

They do not override the governed architecture in Part II.

## 3. Product Identity and Non-Negotiable Boundaries

### 3.1 Sealed identity

* **Product name:** ScholaForge
* **Canonical project identity:** 19. ScholaForge Belgium - Eu regulations
* **Product category:** sovereign education software and assurance platform
* **Primary users:** teachers, school leaders, data protection officers, ICT administrators, learners, guardians, auditors, and approved service providers
* **Primary deployment:** Belgian primary, secondary, vocational, adult, and higher education, subject to institution-specific law and policy

### 3.2 Prohibited product behaviors

ScholaForge must not:

* infer or classify learner emotions in educational settings;
* perform biometric categorization based on sensitive attributes;
* use social scoring;
* covertly manipulate learners;
* exploit age, disability, economic hardship, or cognitive vulnerability;
* make final autonomous decisions on admission, access, grading, certification, placement, discipline, special-needs eligibility, or educational tracking;
* conduct remote biometric identification for ordinary school operations;
* infer protected characteristics unless a specific lawful, necessary, and approved accessibility or safeguarding purpose exists;
* generate deceptive evidence of compliance;
* obscure whether content or recommendations are AI-generated;
* use learner data to train models without a separately documented legal basis, purpose, and opt-out or consent mechanism where required;
* transmit personal or confidential education data to an external model endpoint unless the institution explicitly approves the processor, transfer mechanism, retention terms, and use case;
* treat silence or continued use as consent;
* deny a learner access to essential education solely because they refuse optional AI processing.

### 3.3 Default product posture

* Core classroom, content, identity, and records functions operate without AI.
* AI features are optional, use-case-scoped, reversible, and independently disableable.
* High-impact features remain unavailable until legal, pedagogical, security, and accessibility gates pass.
* Every capability has a non-AI fallback.
* The school remains the accountable authority for deployment decisions.
* Provider/deployer role allocation is documented for each module and contract.

---

## 4. Regulatory and Governance Model

This blueprint is an engineering and governance design, not legal advice or certification.

### 4.1 Regulatory scope register

The release process must maintain a versioned register covering, at minimum:

* EU Artificial Intelligence Act;
* General Data Protection Regulation;
* Belgian data-protection law and Belgian Data Protection Authority guidance;
* rules applicable to children and educational records;
* European Accessibility Act where applicable;
* Web Accessibility Directive for public-sector web and mobile services where applicable;
* EN 301 549 and WCAG as procurement and accessibility baselines;
* NIS2 and Belgian implementing requirements where the institution or supplier is in scope;
* Cyber Resilience Act obligations for products with digital elements, where applicable;
* eIDAS 2.0 / European Digital Identity and verifiable credentials, where used;
* consumer, product safety, employment, copyright, database, and public-procurement law as applicable;
* Flemish, French Community, German-speaking Community, and institution-specific education rules;
* collective agreements, works council obligations, and staff monitoring rules where staff analytics are enabled.

Each entry contains:

```yaml
regulatory_item:
  id: string
  jurisdiction: EU | BE | BE-FL | BE-FR | BE-DE | institutional
  instrument: string
  version_or_date: string
  applicability: applicable | potentially_applicable | not_applicable | unresolved
  accountable_owner: role
  legal_reviewer: role
  affected_modules: [module_id]
  required_controls: [control_id]
  evidence_refs: [artifact_uri]
  last_verified_at: timestamp
  next_review_at: timestamp
  unresolved_questions: [string]
```

### 4.2 AI Act use-case classification

Every AI capability is classified independently. The system must not classify the whole product under a single label.

#### Tier P — Prohibited

Capability is blocked from build, installation, and activation when it implements a prohibited practice.

#### Tier H — Potentially high-risk

Examples include AI used to:

* determine access or admission to education;
* evaluate learning outcomes where results materially guide educational progression;
* assess an appropriate educational level;
* monitor or detect prohibited behavior during tests;
* make consequential decisions about certification, placement, or learner pathways.

Tier H features require:

* provider/deployer role assessment;
* legal applicability review;
* quality-management controls;
* risk management;
* data governance;
* technical documentation;
* logging;
* transparency and instructions;
* meaningful human oversight;
* accuracy, robustness, and cybersecurity testing;
* fundamental-rights impact assessment when required;
* data protection impact assessment when required;
* post-market monitoring and incident handling;
* conformity and registration steps where applicable;
* explicit release authority.

#### Tier L — Limited transparency risk

Examples include learner-facing conversational assistance or generated content where users need to know they are interacting with AI.

Tier L features require clear disclosure, source labeling, uncertainty handling, and a non-AI route.

#### Tier M — Minimal or non-AI risk

Examples include deterministic timetable validation, local file indexing without semantic inference, or teacher-controlled formatting assistance.

Tier M still requires security, privacy, accessibility, and quality controls.

### 4.3 Provider, deployer, importer, and distributor roles

A `ROLE_ALLOCATION.md` artifact is mandatory for each deployment. It defines:

* who develops the AI system;
* who places it on the market or puts it into service;
* whether a school materially modifies the system;
* who selects and controls third-party models;
* who is the controller, joint controller, or processor under GDPR;
* who handles incidents, rights requests, vulnerability reports, and model updates;
* who owns regulatory registration and documentation duties.

No module may be activated while role allocation is unresolved.

### 4.4 AI literacy

ScholaForge includes role-based AI literacy:

* teacher: capabilities, limitations, hallucinations, bias, safe prompting, review;
* school leader: risk classification, procurement, oversight, accountability;
* DPO: data flows, lawful basis, DPIA, rights, retention;
* ICT administrator: model provenance, updates, security, logs, rollback;
* learner: disclosure, challenge rights, privacy choices, source checking;
* guardian: optional features, consent where relevant, complaint channels;
* auditor: evidence interpretation and proof limitations.

Completion is recorded without storing unnecessary personal training data.

---

## 5. Innovative Target Architecture

### 5.1 Architectural principle

ScholaForge is split into five independently governed planes:

1. **Education Experience Plane**
2. **Data Sovereignty Plane**
3. **AI Capability Plane**
4. **Trust and Assurance Plane**
5. **Operations and Interoperability Plane**

The architecture avoids a monolithic “brain.” Each plane exposes typed, least-privilege interfaces.

### 5.2 Education Experience Plane

Contains:

* teacher workspace;
* learner workspace;
* guardian portal where institutionally appropriate;
* lesson and assessment authoring;
* accessibility adaptation;
* curriculum and competency mapping;
* feedback and reflection workflows;
* challenge, appeal, and correction workflows.

No UI may hide the distinction between:

* authoritative school record;
* teacher-authored content;
* AI suggestion;
* imported third-party content;
* learner submission;
* system-generated evidence.

### 5.3 Data Sovereignty Plane

#### Learner Data Vault

Each learner’s data is logically partitioned into purpose-bound collections:

* identity and enrollment;
* learning artifacts;
* assessment records;
* accessibility preferences;
* communications;
* optional AI interaction history;
* credentials;
* consent and objection records.

Access is mediated by **purpose tokens**, not broad application roles.

A purpose token specifies:

```json
{
  "subject_scope": "learner:pseudonymous-id",
  "purpose": "teacher_feedback_draft",
  "data_categories": ["submission_text", "rubric"],
  "prohibited_categories": ["medical_notes", "guardian_financial_data"],
  "actor": "teacher-id",
  "module": "feedback_copilot",
  "expires_at": "2026-07-20T12:00:00Z",
  "human_authority": true,
  "policy_hash": "sha256:..."
}
```

#### Data products

Modules do not directly query the full learner database. They consume approved data products such as:

* `RosterMinimum`
* `AssessmentContext`
* `AccessibilityPreferenceSet`
* `SubmissionForFeedback`
* `CredentialVerificationRequest`

Each product has schema, purpose, retention, legal basis, and sensitivity metadata.

#### Erasure-compatible evidence

Evidence records store:

* event ID;
* policy version;
* pseudonymous subject reference;
* input/output digests;
* decision category;
* responsible human role;
* model/runtime identity;
* timestamps;
* retention class.

Personal payloads remain in erasable stores. When erased, the ledger preserves only a non-reversible tombstone and the lawful erasure receipt.

### 5.4 AI Capability Plane

#### Model Gateway

All inference flows through one policy-enforced gateway that supports:

* local small language models;
* local speech-to-text and text-to-speech;
* approved on-premises models;
* optional approved EU-hosted providers;
* deterministic non-AI algorithms;
* retrieval-only functions.

The gateway enforces:

* module allowlist;
* model allowlist;
* purpose token;
* data-category filter;
* prompt template version;
* maximum context;
* tool permission;
* output schema;
* safety policy;
* disclosure flag;
* logging level;
* retention rule;
* fallback behavior.

#### Reproducibility envelope

Instead of claiming byte-identical inference, each result carries:

```yaml
inference_receipt:
  request_digest: sha256
  prompt_template_version: string
  retrieval_snapshot_id: string
  model_id: string
  model_hash: string
  tokenizer_hash: string
  runtime_id: string
  runtime_version: string
  hardware_class: string
  seed: integer|null
  decoding_parameters: object
  output_digest: sha256
  reproducibility_class: exact | tolerance_bounded | semantically_evaluated
  evaluation_profile: string
```

* **Exact:** deterministic parser, rules engine, or verified fixed runtime.
* **Tolerance-bounded:** numeric or model output accepted within documented tolerances.
* **Semantically evaluated:** free-form output tested through rubric, factuality, citation, safety, and human review.

#### Retrieval Evidence Graph

The Retrieval Evidence Graph is implemented by the **ScholaGraph Retrieval Fabric (SF-RET-001)** defined in Section 5A. It is the canonical retrieval subsystem for all ScholaForge modules.

Every generated recommendation can expose:

* source documents;
* source version and date;
* retrieval query;
* passages used;
* authority tier;
* conflict flags;
* missing evidence;
* whether the source contains personal data;
* whether the source is approved for learner-facing use.

This graph supports challenge and correction without revealing hidden reasoning.

### 5.5 Trust and Assurance Plane

#### Assurance Evidence Compiler

Replaces the “AI Act Autopilot.”

It:

* maps obligations and internal controls;
* gathers test results, model cards, data sheets, logs, SBOMs, risk records, and approvals;
* identifies missing evidence;
* generates draft technical documentation;
* generates change-impact reports;
* creates deployer instructions;
* prepares DPIA/FRIA input packs;
* packages post-market evidence;
* never declares legal compliance by itself.

Every compiled claim is tagged:

* `machine_verified`;
* `human_attested`;
* `externally_audited`;
* `unverified`;
* `not_applicable`;
* `requires_legal_review`.

#### Pedagogical Safety Case

Every learner-affecting AI module includes a structured argument:

* intended educational benefit;
* population and age range;
* learning theory or evidence basis;
* known failure modes;
* effects on teacher agency;
* effects on learner agency;
* risk of overreliance;
* risk of inequitable outcomes;
* accessibility impact;
* measurement plan;
* stop criteria;
* non-AI alternative.

#### Policy Capsule v2

A signed Site Policy Capsule enables a narrowly defined use case rather than broad feature flags.

```yaml
capsule:
  capsule_id: uuid
  site_id: string
  use_case_id: string
  risk_tier: P|H|L|M
  module_version: string
  permitted_models: [model_hash]
  permitted_data_products: [id]
  permitted_roles: [role]
  legal_basis_ref: string
  dpiA_ref: string|null
  fria_ref: string|null
  pedagogical_safety_case_ref: string
  accessibility_profile: string
  retention_profile: string
  human_oversight_profile: string
  activation_window:
    starts_at: timestamp
    expires_at: timestamp
  emergency_disable: true
  approvals:
    school_owner: signature
    dpo: signature|null
    pedagogical_owner: signature
    security_owner: signature
    legal_owner: signature|null
```

Capsules expire and must be reapproved after material changes.

### 5.6 Operations and Interoperability Plane

Supports:

* 1EdTech OneRoster;
* LTI Advantage;
* Caliper Analytics;
* QTI for assessment portability;
* CASE for competencies and standards;
* Edu-API where appropriate;
* W3C Verifiable Credentials;
* EUDI wallet-compatible credentials where applicable;
* SCORM only for legacy import, not as the strategic core;
* CSV and signed offline bundles for low-connectivity schools.

Each standard receives:

* pinned version;
* conformance profile;
* threat model;
* data-minimization profile;
* test suite;
* compatibility matrix;
* migration policy.

---

## 6. Deployment Modes

### 6.1 Air-gapped mode

Use when required by risk, institution, or infrastructure.

* no runtime internet;
* signed update media;
* local model repository;
* local trust bundle;
* local time source with drift handling;
* physical media scanning station;
* two-person approval for update import;
* offline incident export.

### 6.2 Sovereign connected mode

Recommended default for most schools.

* outbound network deny by default;
* allowlisted update and time endpoints;
* optional EU-hosted model endpoints;
* institution-controlled identity federation;
* signed telemetry summaries with no learner payloads;
* vulnerability and revocation updates;
* governed cross-school evidence exchange.

### 6.3 Federated collaboration mode

Optional advanced mode.

* schools exchange model updates, evaluation results, or content metadata;
* no raw learner data leaves the institution;
* secure aggregation and differential privacy are required where statistical outputs could reveal individuals;
* participation is voluntary and separately approved;
* poisoning, membership inference, and provenance controls are mandatory.

### 6.4 Development and simulation mode

* synthetic data only;
* no production credentials;
* digital-twin school fixtures;
* red-team and failure simulation;
* reproducible test packs;
* explicit watermark in UI and exports.

---

## 7. Core Modules

### 7.1 Foundation modules

| Module                        | Purpose                                                  | Default              |
| ----------------------------- | -------------------------------------------------------- | -------------------- |
| Identity and access           | Local/federated identity, role and purpose authorization | On                   |
| Learner Data Vault            | Purpose-bound data storage and rights workflows          | On                   |
| Policy Decision Point         | Evaluate capsule, purpose, role, risk, and data rules    | On                   |
| Evidence Ledger               | Pseudonymous event and approval receipts                 | On                   |
| Model Gateway                 | Single controlled inference path                         | Off until configured |
| Retrieval Evidence Graph      | Grounded source registry and conflict reporting          | On for RAG           |
| Assurance Evidence Compiler   | Draft evidence packs and gap reports                     | On                   |
| Accessibility Runtime         | Preferences, keyboard, captions, reading support         | On                   |
| Update and Provenance Manager | Signed packages, SBOM, VEX, rollback                     | On                   |
| Incident and Challenge Hub    | Complaints, appeals, incidents, corrections              | On                   |

### 7.2 Teacher-support modules

#### Lesson Design Assistant — Tier L/M

* drafts lesson structures from teacher-approved curriculum sources;
* identifies prerequisites and misconceptions;
* proposes differentiated activities;
* cites local sources;
* does not publish directly;
* teacher accepts, edits, or rejects each component.

#### Feedback Copilot — Tier H candidate depending on use

* drafts formative feedback;
* may not assign final grades;
* rubric and teacher comments are authoritative;
* displays evidence and uncertainty;
* checks for unsupported claims, tone, and accessibility;
* records teacher changes for quality improvement without using personal content for model training by default.

#### Assessment Authoring and Validation — Tier L/H candidate

* generates question drafts;
* checks curriculum alignment;
* detects ambiguity, leakage, bias, and accessibility defects;
* performs item analysis after approved use;
* requires human approval before release;
* prohibits hidden adaptive decisions that affect final progression unless Tier H controls are complete.

#### Curriculum and Competency Mapper — Tier H candidate

* maps content to institution-approved frameworks;
* provides ranked suggestions and rationale;
* requires dual human review for official mapping;
* keeps source and framework version;
* cannot auto-assign educational level or credential value.

### 7.3 Learner-support modules

#### Study Coach — Tier L

* clearly identifies itself as AI;
* retrieves only approved course material;
* supports Socratic hints before answers;
* can be disabled during assessments;
* offers “show source,” “I disagree,” and “ask teacher” controls;
* does not infer emotion, disability, or motivation;
* limits persuasive or dependency-forming behavior;
* includes age-appropriate interaction profiles.

#### Accessibility Assistant — Tier M/L

* text-to-speech;
* speech-to-text;
* captioning;
* reading-level adaptation;
* keyboard and switch access;
* high-contrast and reduced-motion profiles;
* local processing by default;
* no diagnosis or disability inference.

#### Learning Reflection Journal — Tier L

* learner controls entries;
* default private to learner;
* explicit sharing with teacher;
* no behavioral scoring;
* retention chosen by institution and learner policy;
* export and deletion supported.

### 7.4 Governance modules

#### Human Oversight Console

Shows:

* use case and risk tier;
* source evidence;
* model and version;
* confidence or evaluation status;
* known limitations;
* alternative actions;
* affected learner rights;
* required authority;
* prior overrides;
* appeal path.

An override requires a reason only for consequential decisions and never forces sensitive free text when a coded reason is sufficient.

#### Rights and Challenge Portal

Supports:

* access;
* correction;
* deletion where applicable;
* restriction;
* objection;
* explanation of system role;
* human review request;
* contesting an educational decision;
* export;
* complaint escalation.

#### Post-Market and Learning Impact Monitor

Separates:

* security incidents;
* privacy incidents;
* safety incidents;
* discriminatory outcomes;
* accessibility failures;
* pedagogical harm;
* model degradation;
* interoperability failures;
* user-experience issues.

---

## 8. Data Architecture

### 8.1 Data classification

| Class              | Examples                                    | Default control                              |
| ------------------ | ------------------------------------------- | -------------------------------------------- |
| Public             | published curriculum, public policy         | integrity                                    |
| Internal           | lesson templates, operational documentation | access control                               |
| Confidential       | staff material, unpublished assessments     | encryption and least privilege               |
| Sensitive personal | learner records, special-needs data         | purpose tokens, encryption, strict retention |
| Highly restricted  | safeguarding, health, biometric data        | isolated store, exceptional access           |
| Evidence metadata  | hashes, control outcomes, approvals         | pseudonymization, integrity                  |
| Synthetic          | generated test fixtures                     | non-production only                          |

### 8.2 Storage

Recommended baseline:

* PostgreSQL for transactional school data;
* object storage compatible with S3 APIs for artifacts;
* append-only evidence journal using immutable object retention or hash chaining;
* OpenSearch or equivalent only if the school needs full-text retrieval;
* vector store as a replaceable index, never the authoritative source;
* secrets in a hardware-backed or OS-native secrets manager;
* backups encrypted, tested, and independently restorable.

SQLite may be used for single-device pilots, but not as the default multi-user production store.

### 8.3 Retention engine

Retention rules are policy records with:

* record category;
* purpose;
* legal basis;
* start event;
* retention period;
* review event;
* deletion or anonymization action;
* legal hold behavior;
* evidence generated;
* authority for exceptions.

No personal-data record is made immutable merely to support auditability.

### 8.4 Data quality

High-impact modules require:

* provenance;
* completeness checks;
* representativeness analysis;
* label-quality review;
* missing-value handling;
* temporal relevance;
* language and dialect coverage;
* subgroup performance;
* known exclusions;
* correction process.

---

## 9. Security Architecture

### 9.1 Security baseline

* zero-trust network segmentation;
* mutual TLS for service-to-service communication;
* short-lived workload identities;
* role and attribute-based access control;
* purpose-based authorization;
* secure boot where available;
* device assurance tiers;
* encrypted storage and backups;
* signed software packages;
* SBOM and VEX;
* reproducible build targets where feasible;
* dependency pinning;
* vulnerability intake and remediation policy;
* secure development lifecycle;
* threat modeling per module;
* penetration testing before production;
* tamper-evident audit records;
* recovery exercises;
* coordinated vulnerability disclosure.

### 9.2 Device assurance tiers

| Tier | Device properties                             | Permitted use                    |
| ---- | --------------------------------------------- | -------------------------------- |
| A    | secure boot, TPM, managed OS, current patches | sensitive administration         |
| B    | managed OS, disk encryption, current patches  | teacher and standard learner use |
| C    | browser/kiosk isolation, no local secrets     | low-risk learner access          |
| D    | unmanaged or stale                            | public content only              |

### 9.3 Cryptography

Use standardized, supported cryptography.

* TLS 1.3 where supported;
* AES-GCM or ChaCha20-Poly1305;
* SHA-256/384 as interoperable defaults;
* Ed25519 or ECDSA for established compatibility;
* hybrid post-quantum signatures only when ecosystem support, key lifecycle, performance, and interoperability are validated;
* crypto agility with explicit algorithm identifiers and migration tests.

Do not combine multiple algorithms merely to claim stronger security. Every algorithm must have an operational key-management plan.

### 9.4 SecureBoard Guardian Security Domain

SecureBoard Guardian operates in a security domain separated from ordinary ScholaForge services.

Mandatory controls:

* physically or logically isolated recording network;
* camera certificates and mutually authenticated ingestion;
* local authenticated encryption before storage;
* immutable append-only segment manifests;
* threshold key release with no single-holder master key;
* five-person independent authentication;
* room-bound physical co-presence verification;
* legal-instrument validation workflow;
* secure review enclave with blocked general internet access;
* hardened evidence-export station;
* encrypted export destinations;
* full chain-of-custody receipts;
* content-blind operations and vendor support;
* independent red-team test of quorum bypass paths;
* annual ceremony exercise using synthetic footage;
* emergency revocation of a board member without decryption;
* fail-closed behavior for identity, key, policy, clock, and integrity failures.

The SecureBoard subsystem shall have separate administrators, secrets, audit trails, backup rules, and release gates from classroom applications.

### 9.5 Threat Models

SecureBoard-specific threats include:

* principal or administrator attempting unilateral access;
* collusion by fewer than five authorized people;
* remote impersonation of physical quorum;
* shared passwords or delegated credentials;
* malicious camera firmware;
* substitution of a different room or time interval;
* expansion of an approved export window;
* forged or expired legal instruments;
* hidden preview, thumbnail, transcription, or indexing services;
* key leakage through backups, logs, crash dumps, or support tools;
* screen capture during secure review;
* export to unauthorized removable media;
* post-export chain-of-custody failure;
* retention holds used to create indefinite surveillance archives;
* coercion of board members;
* vendor or cloud-provider privileged-access abuse.

Mandatory threat scenarios include:

* malicious or compromised learner endpoint;
* insider misuse;
* stolen teacher session;
* poisoned curriculum content;
* prompt injection in retrieved documents;
* model extraction;
* training-data memorization;
* sensitive-data leakage;
* adversarial assessment input;
* malicious update bundle;
* compromised signing key;
* stale trust list;
* ransomware;
* denial of service;
* federated poisoning;
* falsified evidence receipt;
* abuse of guardian access;
* cross-tenant data leakage.

---

## 10. Accessibility and Inclusion

### 10.1 Accessibility target

* WCAG 2.2 AA for web interfaces;
* EN 301 549 mapping for relevant ICT;
* accessible desktop and kiosk behavior;
* keyboard-only completion of all critical workflows;
* screen-reader testing;
* reflow and zoom;
* reduced motion;
* captions and transcripts;
* language identification;
* accessible authentication;
* accessible error recovery;
* plain-language mode;
* no inaccessible AI-only alternative.

### 10.2 Belgian multilingual design

The UI and governance artifacts support:

* Dutch;
* French;
* German;
* English for technical administration.

Content must distinguish translation status:

* human-approved;
* machine-translated and reviewed;
* machine-translated and unreviewed;
* unavailable.

No consequential learner decision may rely on an unreviewed translation.

### 10.3 Equity controls

Evaluation is disaggregated, where lawful and ethically justified, across relevant groups without creating unnecessary sensitive data.

Where demographic attributes cannot lawfully or safely be processed, use:

* controlled synthetic evaluation;
* accessibility persona testing;
* language variants;
* device and bandwidth strata;
* school-context strata;
* qualitative review panels.

---

## 11. Interoperability Profiles

### 11.1 Minimum profile

* OneRoster 1.2 CSV;
* LTI 1.3 / LTI Advantage;
* QTI 3 where supported by the target ecosystem;
* CASE for competencies;
* Caliper for approved learning events;
* signed CSV/JSON offline exchange;
* W3C Verifiable Credentials for portable achievements.

### 11.2 Conformance policy

“Supports standard X” is insufficient. A release must state:

* supported version;
* supported services and profiles;
* extensions;
* unsupported features;
* certification status;
* test suite version;
* last interoperability test;
* known partner systems;
* migration notes.

### 11.3 Analytics minimization

Learning analytics events are allowlisted. Default events exclude:

* keystroke dynamics;
* attention estimates;
* emotion;
* continuous screen monitoring;
* unrelated browsing;
* precise location;
* hidden behavioral profiles.

---

## 12. Evidence and Audit Model

### 12.1 Evidence quality levels

| Level | Meaning                                                           |
| ----- | ----------------------------------------------------------------- |
| E0    | assertion only                                                    |
| E1    | internal document                                                 |
| E2    | automated test evidence                                           |
| E3    | human-reviewed internal evidence                                  |
| E4    | independent assessment                                            |
| E5    | regulator, certification body, or authoritative external evidence |

No claim may be represented at a higher level than the evidence supports.

### 12.2 Evidence object

```json
{
  "evidence_id": "uuid",
  "claim_id": "CTRL-AI-OVERSIGHT-001",
  "quality_level": "E3",
  "artifact_uri": "evidence://release/2.0/oversight-test",
  "artifact_digest": "sha256:...",
  "generated_by": "test-suite-id",
  "reviewed_by": ["role:pedagogical-owner"],
  "scope": ["feedback_copilot"],
  "assumptions": ["teacher identity is verified"],
  "limitations": ["does not validate legal sufficiency"],
  "valid_from": "2026-07-20",
  "review_by": "2026-10-20",
  "status": "accepted"
}
```

### 12.3 Evidence graph

Claims, controls, tests, artifacts, risks, modules, regulations, and approvals form a graph. The graph can answer:

* Which controls support this requirement?
* Which tests prove this control?
* Which modules are affected if this source changes?
* Which evidence expired?
* Which claims depend on a disputed assumption?
* What changed between releases?

### 12.4 Audit exports

* AI system inventory;
* use-case classification register;
* provider/deployer role allocation;
* risk-management file;
* DPIA input pack;
* FRIA input pack;
* technical documentation draft;
* model cards and system cards;
* data sheets;
* human oversight instructions;
* accessibility conformance report;
* security test report;
* SBOM, VEX, and provenance;
* incident register;
* post-market monitoring report;
* learner and teacher transparency notices;
* change-impact report;
* unresolved legal questions.

Every export is marked **DRAFT**, **HUMAN_APPROVED**, or **EXTERNALLY_VERIFIED**.

---

## 13. Innovative Validation System

### 13.1 School Digital Twin

A synthetic simulation environment models:

* school roles;
* timetables;
* classes;
* synthetic learners;
* accessibility profiles;
* multilingual content;
* identity provider outages;
* model failures;
* stale curriculum sources;
* compromised documents;
* network loss;
* disaster recovery.

It contains no production personal data.

### 13.2 Evaluation harness

Each AI module is tested across:

* factuality;
* citation fidelity;
* curriculum alignment;
* harmful content;
* age appropriateness;
* bias;
* accessibility;
* multilingual accuracy;
* prompt injection;
* privacy leakage;
* hallucination;
* robustness;
* teacher workload;
* learner dependence;
* latency;
* energy use;
* fallback quality.

### 13.3 Release gates

Hard gates:

* prohibited-use test passes;
* identity and access tests pass;
* no critical security vulnerability without approved exception;
* data-flow inventory complete;
* model and dependency provenance known;
* rollback tested;
* accessibility critical paths pass;
* high-risk use-case classification resolved;
* required DPIA/FRIA status resolved;
* human oversight test passes;
* evidence integrity verifies.

Soft gates with explicit waiver:

* latency;
* energy;
* translation quality;
* minor accessibility defects;
* non-critical interoperability gaps.

### 13.4 Pedagogical pilot gate

Before scale-up:

* baseline learning or workload measure;
* defined educational hypothesis;
* teacher training;
* learner notice;
* opt-out or alternative where appropriate;
* 7-day technical pilot;
* 6-to-12-week educational pilot;
* adverse-effect monitoring;
* independent review of outcomes;
* stop or rollback criteria.

---

## 14. Reference Repository Structure

```text
ScholaForge/
├── README.md
├── LICENSE
├── SECURITY.md
├── GOVERNANCE.md
├── ROLE_ALLOCATION.md
├── CHANGELOG.md
├── VERSION
├── docs/
│   ├── architecture/
│   ├── legal/
│   ├── pedagogy/
│   ├── accessibility/
│   ├── operations/
│   └── decisions/
├── config/
│   ├── base/
│   ├── regional/be/
│   ├── communities/fl/
│   ├── communities/fr/
│   ├── communities/de/
│   └── schemas/
├── policies/
│   ├── access/
│   ├── purpose/
│   ├── data/
│   ├── ai/
│   ├── retention/
│   ├── accessibility/
│   └── network/
├── services/
  secureboard-guardian/        # isolated sealed-evidence domain
│   ├── identity/
│   ├── policy-decision/
│   ├── learner-data-vault/
│   ├── model-gateway/
│   ├── retrieval-evidence-graph/
│   ├── evidence-ledger/
│   ├── assurance-compiler/
│   ├── rights-challenge/
│   ├── incident-hub/
│   └── update-provenance/
├── modules/
│   ├── lesson-design/
│   ├── feedback-copilot/
│   ├── assessment-authoring/
│   ├── curriculum-mapper/
│   ├── study-coach/
│   ├── accessibility-assistant/
│   └── reflection-journal/
├── interoperability/
│   ├── oneroster/
│   ├── lti/
│   ├── qti/
│   ├── case/
│   ├── caliper/
│   ├── edu-api/
│   └── credentials/
├── apps/
│   ├── teacher/
│   ├── learner/
│   ├── guardian/
│   ├── administrator/
│   ├── oversight/
│   └── auditor/
├── packages/
│   ├── schemas/
│   ├── crypto/
│   ├── policy-sdk/
│   ├── evidence-sdk/
│   ├── accessibility-kit/
│   └── test-fixtures/
├── assurance/
│   ├── controls/
│   ├── claims/
│   ├── risk-register/
│   ├── model-cards/
│   ├── data-sheets/
│   ├── safety-cases/
│   ├── dpia/
│   ├── fria/
│   └── exports/
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── contract/
│   ├── interoperability/
│   ├── accessibility/
│   ├── security/
│   ├── privacy/
│   ├── ai-evaluation/
│   ├── pedagogical/
│   ├── recovery/
│   └── synthetic-school/
├── deploy/
│   ├── single-node/
│   ├── school-cluster/
│   ├── air-gapped/
│   ├── sovereign-connected/
│   └── upgrade-bundles/
├── evidence/
│   ├── global/
│   ├── tenant/
│   ├── releases/
│   └── anchors/
└── tools/
    ├── schola-cli/
    ├── capsule-builder/
    ├── evidence-inspector/
    ├── migration-checker/
    └── support-bundle/
```

---

## 15. Technology Blueprint

Technology choices must be confirmed against the target repository and school infrastructure.

### 15.1 Suggested baseline

* Backend: Rust or Go for security-critical services; TypeScript or Python for non-critical orchestration where maintainability is stronger.
* Frontend: TypeScript with a standards-based accessible framework.
* Database: PostgreSQL.
* Object store: S3-compatible local storage.
* Messaging: NATS or a database outbox for small deployments.
* Policy: Open Policy Agent or Cedar after license, maintenance, and fit review.
* Identity: OpenID Connect and SAML bridge where necessary.
* Observability: OpenTelemetry with local collectors.
* Model serving: replaceable OpenAI-compatible or native local inference adapters.
* Packaging: OCI images plus signed offline bundles.
* Build provenance: SLSA-compatible attestations.
* SBOM: CycloneDX and SPDX.
* Vulnerability data: signed offline feeds for disconnected deployments.

### 15.2 Dependency rules

A dependency may enter the core path only when:

* license is known and compatible;
* provenance is known;
* repository is maintained;
* security advisories are reviewed;
* update and rollback path exist;
* tests cover the integration;
* SBOM records it;
* no simpler standard library alternative is clearly better;
* the school can operate it without hidden cloud dependence.

Unknown license or provenance blocks core adoption.

---

## 16. API and Event Contracts

### 16.1 Core API principles

* versioned endpoints;
* explicit tenant and purpose context;
* idempotency for mutations;
* structured error codes;
* no personal data in URLs;
* pagination and rate limits;
* schema validation;
* audit event on consequential operations;
* content-type enforcement;
* no implicit model invocation.

### 16.2 Example endpoints

```text
POST /v1/purpose-tokens
POST /v1/capsules/validate
POST /v1/capsules/activate
POST /v1/model-inferences
GET  /v1/inferences/{id}/evidence
POST /v1/challenges
POST /v1/rights-requests
GET  /v1/assurance/gaps
POST /v1/assurance/compile
POST /v1/interoperability/oneroster/import
POST /v1/incidents
POST /v1/secureboard/incidents/{id}/preservation-holds
POST /v1/secureboard/incidents/{id}/legal-instruments
POST /v1/secureboard/incidents/{id}/quorum-sessions
POST /v1/secureboard/quorum-sessions/{id}/member-approvals
POST /v1/secureboard/quorum-sessions/{id}/activate-review
POST /v1/secureboard/quorum-sessions/{id}/authorize-export
POST /v1/secureboard/exports/{id}/verify
POST /v1/emergency-disable
```

### 16.3 Event examples

```text
capsule.validated
capsule.activated
capsule.expired
purpose_token.issued
purpose_token.denied
model.inference.requested
model.inference.completed
model.inference.blocked
human.review.completed
human.override.recorded
learner.challenge.opened
rights_request.completed
evidence.expired
security.incident.opened
secureboard.segment.sealed
secureboard.preservation_hold.created
secureboard.legal_gate.approved
secureboard.legal_gate.denied
secureboard.quorum.started
secureboard.quorum.member_authenticated
secureboard.quorum.cancelled
secureboard.quorum.approved
secureboard.review.started
secureboard.review.closed
secureboard.export.authorized
secureboard.export.completed
secureboard.access.denied
secureboard.retention_key.destroyed
module.emergency_disabled
```

---

## 17. Key Workflows

### 17.1 Activate a teacher feedback copilot

1. School selects the use case.
2. Risk classifier marks it Tier H candidate.
3. Legal owner determines applicability.
4. DPO screens and completes DPIA where required.
5. Pedagogical owner approves the safety case.
6. Security owner approves model, data, and deployment.
7. Accessibility test passes.
8. Synthetic-school evaluation passes.
9. Capsule is signed with model, data, role, and expiry constraints.
10. Pilot group is trained.
11. Teacher sees disclosure and limitations.
12. AI drafts feedback with sources and uncertainty.
13. Teacher edits and approves.
14. Final feedback is attributed to the teacher, with AI assistance disclosed according to policy.
15. Quality and adverse effects are monitored.
16. Capsule expires or is revoked after material change.

### 17.2 Learner challenges AI-assisted feedback

1. Learner selects “challenge or ask for human review.”
2. System preserves the contested result and evidence.
3. Teacher receives the original submission, rubric, AI draft, final feedback, and source record.
4. Teacher reviews without being forced to uphold the prior result.
5. Correction is written to the authoritative school record.
6. Evidence ledger stores the correction event, not unnecessary learner payload.
7. Repeated error patterns trigger module review.

### 17.3 Import OneRoster data

1. Administrator uploads signed or controlled CSV bundle.
2. Malware and schema validation run.
3. Data minimization preview is shown.
4. Invalid and excess fields are quarantined.
5. Administrator approves the import plan.
6. Import executes idempotently.
7. Reconciliation report is generated.
8. Errors can be rolled back.
9. Receipt records schema, source, counts, and decisions.

### 17.4 Emergency disable

1. Authorized actor triggers module disable.
2. Policy engine blocks new calls immediately.
3. In-flight requests fail safely.
4. Non-AI fallback appears.
5. Incident ticket and evidence snapshot are generated.
6. School owner and relevant reviewers are notified.
7. Reactivation requires a new or re-signed capsule.

---

### 17.5 SecureBoard Emergency Evidence Ceremony

1. An authorized staff member registers a qualifying safety incident.
2. The requester identifies the exact room, camera, date, and minimum required interval.
3. The system places only those ciphertext segments on preservation hold.
4. The safeguarding or legal officer records necessity and proportionality.
5. The Legal Instrument Gate validates that the required court or other lawful authorization evidence is present.
6. Five authorized school-board members assemble in the approved secure room.
7. The system displays the same incident scope to all five members.
8. Each member authenticates independently using password or passkey plus second factor.
9. Room-bound co-presence verification succeeds.
10. Each member approves the exact scope; the default rule requires unanimity.
11. The threshold service creates a short-lived review authorization.
12. Review occurs only in the secure enclave and only for the approved interval.
13. Export is separately authorized and delivered only to an approved encrypted destination.
14. The export package receives a hash, manifest, chain-of-custody record, legal-instrument reference, and five-member receipt.
15. Temporary plaintext and session keys are destroyed.
16. The original recording returns to SEALED — ZERO VIEWERS.
17. The closure receipt is made available to authorized audit, DPO, and legal roles without exposing video content.
18. Any failure, timeout, changed scope, absent participant, or invalid authorization terminates the ceremony and records ACCESS_DENIED.

## 18. Testing Strategy

### 18.1 Test layers

* unit tests;
* schema tests;
* policy tests;
* contract tests;
* integration tests;
* migration tests;
* interoperability tests;
* accessibility tests;
* security tests;
* privacy tests;
* AI evaluation suites;
* pedagogical validation;
* chaos and recovery tests;
* performance and energy tests;
* human-factors tests.

### 18.2 Mandatory acceptance criteria

* No Tier P feature can be enabled.
* No SecureBoard recording can be previewed, searched, played, copied, or exported during normal operation.
* Four or fewer board members cannot unlock SecureBoard content.
* Five remotely connected members cannot satisfy the physical quorum.
* SecureBoard export cannot occur without the required validated legal instrument.
* SecureBoard has no principal, super-admin, vendor, or break-glass decryption override.
* Every AI call has a purpose token.
* Every learner-facing AI interaction is disclosed.
* No high-impact output becomes authoritative without human action.
* Personal data can be accessed, corrected, exported, and erased according to policy.
* Evidence survives rollback without retaining prohibited payloads.
* Module disable works in under the defined SLO.
* All critical workflows are keyboard accessible.
* Dutch, French, and German critical notices have human-approved translations before regional deployment.
* Prompt injection tests cannot bypass data or tool policy.
* Backup restoration is demonstrated.
* Update bundle signature and rollback are demonstrated.
* Model change triggers evaluation and capsule review.
* Source removal propagates to affected retrieval indexes and evidence.
* Audit export labels unverified claims correctly.

---

## 19. Observability and SLOs

### 19.1 Service objectives

Initial targets for pilot validation:

| Metric                                   | Target                              |
| ---------------------------------------- | ----------------------------------- |
| Core UI availability during school hours | 99.5% pilot                         |
| Policy decision p95                      | <100 ms local                       |
| Non-AI page p95                          | <1.5 s on reference low-cost device |
| Local AI first-token p95                 | Hardware-profiled, not universal    |
| Emergency module disable                 | <30 s                               |
| Rights-request acknowledgment            | institution-defined, tracked        |
| Restore point recovery                   | <4 h pilot target                   |
| Evidence verification                    | 100% integrity checks               |
| Critical accessibility path              | 100% pass                           |
| Cross-tenant leakage                     | 0 tolerated                         |
| Unsupported compliance claims            | 0 tolerated                         |

AI latency targets are hardware- and model-specific and must not be presented as universal.

### 19.2 Privacy-preserving telemetry

Telemetry excludes learner content by default. It records:

* service health;
* latency;
* resource use;
* error class;
* model and module version;
* policy allow/deny counts;
* accessibility failure counts;
* challenge and override rates in aggregate.

Small-group statistics are suppressed.

---

## 20. Rollout Plan

### Phase 0 — Governance and architecture

Deliver:

* identity and role allocation;
* use-case inventory;
* regulatory register;
* data map;
* threat model;
* accessibility target;
* architecture decision records;
* initial synthetic-school environment.

Exit gate: owners approve scope and prohibited behaviors.

### Phase 1 — Non-AI sovereign foundation

Build:

* identity;
* learner data vault;
* policy engine;
* evidence ledger;
* rights and challenge hub;
* accessible teacher and learner shell;
* OneRoster import;
* backup and restore;
* signed update bundles.

Exit gate: production-like synthetic pilot passes without AI.

### Phase 2 — Low-risk teacher assistance

Build:

* lesson design assistant;
* source-grounded content search;
* accessibility assistant;
* model gateway;
* retrieval evidence graph.

Exit gate: teacher-only pilot demonstrates value and safe fallback.

### Phase 3 — Learner-facing support

Build:

* study coach;
* reflection journal;
* multilingual disclosure and challenge workflows.

Exit gate: pedagogical pilot and child-rights review pass.

### Phase 4 — Consequential educational assistance

Consider:

* feedback copilot;
* assessment authoring;
* curriculum mapping.

These remain advisory and human-controlled. Any use that meets high-risk criteria enters the full high-risk governance path.

### Phase 5 — Federated and portable credentials

Consider:

* cross-school evidence exchange;
* EUDI-compatible credentials;
* privacy-preserving analytics;
* federated evaluation.

### Research track

* zero-knowledge mastery proofs;
* formal verification of selected policy properties;
* confidential computing;
* advanced privacy-preserving federated learning.

Research features may not enter the production core without independent value and risk evidence.

---

## 21. Seven-Day Validation Sprint

### Day 1 — Scope and risk

* inventory 10 candidate use cases;
* classify each;
* select one teacher-only low-risk use case;
* define prohibited data and behaviors.

### Day 2 — Data and policy

* define one purpose token;
* build minimum data product;
* test deny-by-default behavior.

### Day 3 — Model and evidence

* connect one local model;
* generate inference receipts;
* expose sources and model identity.

### Day 4 — Human workflow

* teacher reviews, edits, accepts, rejects;
* measure time saved and error detection.

### Day 5 — Adversarial and accessibility tests

* prompt injection;
* sensitive data leakage;
* keyboard and screen-reader path;
* multilingual disclosure.

### Day 6 — Recovery and rights

* emergency disable;
* restore;
* access/export/delete;
* challenge workflow.

### Day 7 — Decision

Success signals:

* teachers find the feature useful;
* source fidelity exceeds agreed threshold;
* no critical privacy or security failure;
* non-AI fallback works;
* evidence is understandable;
* accessibility critical paths pass.

Failure signals:

* teacher overreliance;
* unsupported factual claims;
* material workload increase;
* inaccessible workflow;
* data leakage;
* unclear accountability;
* inability to disable or roll back.

---

## 22. Risk Register

| Risk                                                     | Severity | Core mitigation                                                            |
| -------------------------------------------------------- | -------: | -------------------------------------------------------------------------- |
| Misclassification under AI Act                           | Critical | use-case register and legal review                                         |
| Autonomous consequential decision                        | Critical | human authority and technical block                                        |
| Child data leakage                                       | Critical | purpose tokens, local processing, DLP, tests                               |
| False compliance claim                                   | Critical | evidence quality labels and human approval                                 |
| Prompt injection                                         |     High | content isolation, tool deny, source trust                                 |
| Model hallucination                                      |     High | retrieval evidence, constrained schemas, review                            |
| Bias in feedback or mapping                              |     High | subgroup evaluation and appeals                                            |
| Teacher automation bias                                  |     High | alternatives, uncertainty, training, audits                                |
| Accessibility regression                                 |     High | CI and human testing                                                       |
| Stale offline trust data                                 |     High | freshness windows and signed updates                                       |
| Ransomware                                               |     High | segmentation, immutable backup, restore drills                             |
| Supply-chain compromise                                  |     High | signed builds, SBOM, provenance, VEX                                       |
| Cross-tenant leakage                                     | Critical | isolation and adversarial tests                                            |
| Excessive retention                                      |     High | retention engine and erasure-compatible ledger                             |
| Vendor lock-in                                           |   Medium | open contracts, export, replaceable adapters                               |
| Low-spec hardware exclusion                              |   Medium | device profiles and progressive enhancement                                |
| Federated poisoning                                      |     High | secure aggregation, provenance, anomaly controls                           |
| Pedagogical harm                                         |     High | safety case, pilot, stop criteria                                          |
| Translation error                                        |     High | human approval for consequential content                                   |
| Unclear guardian/learner consent                         |     High | legal basis matrix and alternative path                                    |
| Routine surveillance through classroom recording         | Critical | SEALED — ZERO VIEWERS; no routine playback or analytics                    |
| Quorum bypass or board-account collusion                 | Critical | threshold keys, five identities, physical co-presence, independent factors |
| Forged or invalid court/legal authorization              | Critical | human legal attestation, instrument validation, immutable evidence         |
| Scope creep from one incident to broad footage review    | Critical | exact camera/time binding and approval invalidation on scope change        |
| Plaintext leakage during secure review/export            | Critical | hardened enclave, blocked routes, volatile decryption, forensic tests      |
| Indefinite retention through repeated preservation holds |     High | expiring holds, legal renewal, audit and DPO review                        |
| Coercion or credential delegation among board members    |     High | no proxy approvals, personal factors, ceremony cancellation and reporting  |

---

## 23. Decision Locks Requiring Human Resolution

Before production, the owner must decide:

1. Target education sectors and age ranges.
2. Belgian education community or communities in scope.
3. Whether ScholaForge is sold as software, managed service, or institution-built system.
4. Provider/deployer/controller/processor allocation.
5. Which AI use cases are in the first release.
6. Whether any use case may affect grades, placement, admission, certification, or test monitoring.
7. Approved legal bases by data category.
8. Identity provider and account lifecycle.
9. Hosting and support model.
10. Model licensing and training-data policy.
11. Retention schedules.
12. Incident reporting responsibilities.
13. Accessibility conformance route.
14. Procurement and independent assessment requirements.
15. Whether connected mode is permitted.
16. Which evidence requires external audit.
17. Whether portable credentials are in scope.
18. Whether research features may process real learner data.

Unresolved decisions block the affected production path.

---

## 24. Definition of Done

ScholaForge v2.0 is not “done” when code exists. A release is eligible for deployment only when:

* scope and identity are approved;
* all enabled use cases are classified;
* no prohibited use is present;
* provider/deployer and GDPR roles are documented;
* data inventory and lawful basis are reviewed;
* required DPIA and FRIA decisions are recorded;
* security, privacy, accessibility, and recovery tests pass;
* model and dependency provenance is known;
* human oversight is meaningful and tested;
* learner challenge and rights routes work;
* evidence claims are accurately labeled;
* rollback is demonstrated;
* staff training is complete;
* pilot results meet success criteria;
* responsible owners sign the release;
* legal, regulatory, or certification status is not overstated.

Correct release label before these gates pass:

> **IMPLEMENTATION PENDING — PRODUCTION AND LEGAL CONFORMITY NOT PROVEN**

---

## 25. Source Universe and Currentness Register

The following sources informed this improvement and must be rechecked before production because guidance, standards, and implementation timelines can change.

### Authoritative legal and regulatory sources

1. Regulation (EU) 2024/1689 — Artificial Intelligence Act
   https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng

2. European Commission — AI Act policy and implementation material
   https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai

3. European Commission — Guidelines for providers and deployers of high-risk AI systems
   https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems

4. European Commission — AI Act standardisation
   https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation

5. Regulation (EU) 2016/679 — General Data Protection Regulation
   https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng

6. Belgian Data Protection Authority — Artificial Intelligence Systems and the GDPR
   https://www.dataprotectionauthority.be/publications/artificial-intelligence-systems-and-the-gdpr---a-data-protection-perspective.pdf

7. Directive (EU) 2019/882 — European Accessibility Act
   https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng

### Standards and technical sources

8. 1EdTech OneRoster 1.2
   https://standards.1edtech.org/oneroster/specifications/standards/v1p2

9. 1EdTech OneRoster overview
   https://www.1edtech.org/standards/oneroster

10. ENISA CyberEducation platform
    https://www.enisa.europa.eu/topics/education-and-career-path/cybereducation-platform

### Evidence grading

* EU regulations on EUR-Lex: HIGH authority.
* European Commission implementation pages: HIGH for policy guidance, but not a substitute for law.
* Belgian DPA guidance: HIGH for Belgian data-protection interpretation, not a court judgment.
* 1EdTech specifications: HIGH for their own interoperability standards.
* ENISA resources: HIGH for cybersecurity guidance, not product certification.

---

## 24A. Innovation-Specific Acceptance Criteria

ScholaForge is not accepted as implementing its signature vision until all of the following are demonstrated with current evidence:

* MySAGA supports inspect, correct, freeze, export, and eligible-delete workflows.
* SAGA hypotheses are visibly distinct from verified records.
* TwinTeach Live can be disabled instantly while the lesson continues.
* MotionClass functions without face, gait, emotion, or persistent identity processing.
* No-ID Motion Layer passes a documented re-identification resistance assessment.
* SecureBoard Guardian proves local encryption, SEALED — ZERO VIEWERS, no single-person unlock, no principal override, five-person physical quorum, independent credentials, Legal Instrument Gate, minimum-window review/export, chain of custody, temporary-key destruction, and fail-closed denial.
* BoardVision Constrained Capture proves fixed framing, visible activation, prohibited-zone masking, encrypted ingestion, integrity checking, quarantine, and retention-key destruction.
* Offline Neural Mesh completes a full disconnected-day scenario and deterministic reconciliation.
* OMEGA Seal blocks network, credentials, host storage, unauthorized devices, and cross-user SAGA access by default.
* Activity Conductor survives device loss, late join, pause, and manual fallback.
* The Evidence Spine can replay a complete lesson-level decision trail without exposing unnecessary personal data.
* Accessibility alternatives exist for every motion-dependent activity.
* DPIA, legal basis, notices, role allocation, and DPO review are completed before any real classroom sensing or recording.
* No prohibited emotion recognition or biometric categorization is present.
* No production-ready, compliant, certified, or secure-by-proof claim is made without independent validation.

## 24B. Regulatory Design Notes for the Signature Features

The AI Act identifies education as a context where certain AI uses may be high-risk, and it prohibits emotion recognition in educational institutions except narrow medical or safety cases. ScholaForge therefore separates benign assistance, potentially consequential educational decisions, and prohibited sensing. MotionClass and BoardVision are designed around data minimization and non-identification, but technical design does not replace institutional legal analysis.

Belgian data-protection guidance treats school privacy, images, filming, retention, and processor selection as matters requiring explicit governance. Board-only recording is consequently tenant-gated, off by default, purpose-bound, visible, encrypted, retained for the shortest approved period, and subject to DPO and legal review.

## 24C. Source Universe for the Innovation Expansion

Primary current sources consulted for this expansion:

* Regulation (EU) 2024/1689, Artificial Intelligence Act, EUR-Lex.
* European Commission AI Act policy and prohibited-practices guidance.
* Belgian Data Protection Authority guidance for education, image rights, and cameras.
* Existing ScholaForge original blueprint and v2.0 evidence-centered redesign.

The source universe supports regulatory boundaries and governance design. It does not prove novelty, patentability, market exclusivity, legal conformity, or technical implementation.

## 27A. Recognizable Feature Registry

This registry is the canonical navigation layer for future readers, agents, developers, auditors, investors, schools, and regulators. Each invention must retain its name and feature ID across documentation, UI, APIs, tests, and evidence.

| Feature ID  | Canonical name       | Recognition phrase                           | Primary section |
| ----------- | -------------------- | -------------------------------------------- | --------------- |
| SF-SAGA-001 | MySAGA               | Evolving personal educational intelligence   | 2A.2            |
| SF-TTL-001  | TwinTeach Live       | Human teacher and AI co-teaching runtime     | 2A.3            |
| SF-MOC-001  | MotionClass          | The classroom as an educational interface    | 2A.4            |
| SF-NIM-001  | No-ID Motion Layer   | Movement without identity surveillance       | 2A.5            |
| SF-SBG-001  | SecureBoard Guardian | Five-person quorum-sealed emergency evidence | 2A.6            |
| SF-ONM-001  | Offline Neural Mesh  | Cloud-optional educational intelligence      | 2A.7            |
| SF-OMS-001  | OMEGA Seal Sandbox   | Capability-isolated safe experimentation     | 2A.8            |
| SF-ACO-001  | Activity Conductor   | Real-time multi-participant orchestration    | 2A.9            |
| SF-EVS-001  | Evidence Spine       | Every meaningful action carries its reason   | 2A.10           |

### 27A.1 Documentation Rule

Every future feature specification shall use this fixed segment order:

1. Feature ID and canonical name.
2. One-line identity.
3. Purpose.
4. User value.
5. Non-goals and prohibited uses.
6. Actors and permissions.
7. Inputs, outputs, and data boundaries.
8. State machine.
9. Main workflow.
10. Failure workflow.
11. Security and privacy controls.
12. Explainability requirements.
13. APIs and events.
14. Evidence and audit receipts.
15. Acceptance tests.
16. Risks and mitigations.
17. Legal and human-review boundaries.
18. Implementation status and proof level.

A capability is not considered recognizable if it is described only inside a generic architecture section.

### 27A.2 SecureBoard Recognition Contract

The following terms are reserved and shall appear consistently:

* **SecureBoard Guardian**
* **SEALED — ZERO VIEWERS**
* **Five-Person Physical Quorum**
* **Emergency Evidence Ceremony**
* **Legal Instrument Gate**
* **Threshold-Sealed Recording**
* **No Principal Override**
* **No Remote Approval**
* **Minimum-Window Export**
* **Chain-of-Custody Package**

Any future implementation that permits routine viewing, remote quorum, a single-holder decryption key, principal override, vendor content access, or surveillance analytics is not conformant with SecureBoard Guardian.

## 27C. Dual-Blueprint Completeness Checklist

A feature is documentation-complete only when all answers are present:

### Plain-Language Layer

* [ ] What is it?
* [ ] Why does it exist?
* [ ] What real school problem does it solve?
* [ ] What does the learner, teacher, or family experience?
* [ ] What is the final real-world result?
* [ ] What must it never become?
* [ ] What safeguards are understandable to a non-technical reader?

### Technical Layer

* [ ] Stable feature ID
* [ ] Owner and dependencies
* [ ] Data boundaries
* [ ] State and decision logic
* [ ] Retrieval behavior
* [ ] Permissions
* [ ] Security and privacy
* [ ] APIs and events
* [ ] Evidence receipts
* [ ] Failure and recovery
* [ ] Acceptance tests
* [ ] Implementation status

### End-to-End Layer

* [ ] Trigger
* [ ] Inputs
* [ ] Human actions
* [ ] Automated actions
* [ ] Decision points
* [ ] Exceptions
* [ ] Outputs
* [ ] Evidence
* [ ] Appeal or correction
* [ ] Final outcome

## 27D. Multi-Year Transition Roadmap

### Year 0 — Baseline and Protection

* map current systems and obligations;
* identify learner harm and opportunity gaps;
* establish teacher and learner governance;
* define protected processes;
* test rollback;
* prepare interoperability.

### Year 1 — Teacher and Learner Augmentation

* introduce retrieval, Lesson Studio, ActivityForge, accessibility, offline capability, and explainable AI support;
* preserve existing timetable and reporting;
* measure workload, learning quality, and trust.

### Year 2 — Personalization and Evidence

* introduce MySAGA, Private Mastery Routing, INSIGHT, Learning DNA, and richer evidence;
* retain conventional grades where required;
* compare task fit, progress, equity, and teacher oversight.

### Year 3 — Exploration and Projects

* expand Quest Engine, Project Studio, Life Skills, MotionClass, mentor pilots, and Innovation Passport;
* create interdisciplinary learning blocks;
* test external learning agreements.

### Year 4 — Expert Pathways

* launch validated pathway families;
* add expert mentors, university and industry participation, authentic projects, and contribution evidence;
* preserve broad foundations and transfer routes.

### Year 5 — Structural Reorganization

* redesign schedules, spaces, teacher teams, assessment cycles, and school-community roles based on validated evidence;
* activate School Digital Twin and Improvement Engine for controlled organizational change.

### Year 6 and Beyond — Human Development Network

* federate approved resources and research;
* contribute privacy-protected collective intelligence;
* recognize richer competency and expertise profiles;
* continuously evaluate harm, fairness, and educational value.

This roadmap is illustrative. Advancement depends on evidence, readiness, law, resources, community trust, and successful rollback tests.

---

# PART VII — CURRENTNESS AND EXTERNAL STANDARDS REGISTER

## 72. Currentness rule

Time-sensitive claims must be checked before procurement, certification, legal reliance, or production release.

A document date is not proof that every external rule is current.

The implementation team must pin the exact version of every external standard.

The team must record compatibility tests.

The team must also record legal review.

## 73. EU AI governance status

As reviewed on **20 July 2026**, the European Commission describes education as one of the areas that can contain high-risk AI use cases.

The Commission’s current implementation material states that rules for Annex III high-risk systems are expected to apply by **2 December 2027**, subject to the evolving legislative and implementation process.

Draft Commission guidance on high-risk classification was published in May 2026.

The consultation was scheduled to close on **23 July 2026**.

ScholaForge must therefore:

- classify each AI capability by actual intended purpose;
- avoid treating the whole platform as one risk class;
- maintain provider and deployer role analysis;
- maintain an AI inventory;
- document human oversight;
- document data governance;
- document accuracy, robustness, cybersecurity, logging, and change control;
- complete legal and fundamental-rights review where required;
- avoid any conformity claim until qualified review is complete.

**Official references**

- European Commission, AI Act overview: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- European Commission, high-risk AI guidelines: https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems
- European Commission, draft high-risk classification consultation: https://digital-strategy.ec.europa.eu/en/consultations/targeted-consultation-draft-guidelines-classification-high-risk-artificial-intelligence-systems
- European Commission, AI Act standardisation: https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation

## 74. Accessibility status

WCAG 2.2 is the active W3C Recommendation used by this blueprint.

W3C advises using WCAG 2.2 for current accessibility work.

WCAG 2.2 was also approved as ISO/IEC 40500:2025.

ScholaForge shall target WCAG 2.2 AA.

It shall also apply the relevant European and public-procurement accessibility requirements.

Conformance must be tested with people, assistive technologies, automated checks, and manual checks.

**Official references**

- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C WCAG overview: https://www.w3.org/WAI/standards-guidelines/wcag/
- W3C WCAG 2.2 ISO status: https://www.w3.org/press-releases/2025/wcag22-iso-pas/

## 75. Education interoperability status

ScholaForge uses standards as tested profiles.

It does not claim interoperability merely because a standard name appears in a design.

The initial profile includes:

- OneRoster for roster, course, enrollment, and grade exchange;
- LTI for approved learning-tool integration;
- QTI for assessment items and tests;
- CASE for competencies and academic standards;
- Open Badges for verifiable achievements;
- CLR for learner-controlled comprehensive records;
- Caliper or xAPI only where a defined event purpose exists;
- Ed-Fi as an optional jurisdictional data-exchange profile.

OneRoster 1.2 is the current version identified by 1EdTech at this review date.

Open Badges 3.0 and CLR 2.0 are the current versions identified in 1EdTech material used for this review.

Ed-Fi versions must be pinned to the actual deployment.

The Ed-Fi documentation contains several version tracks.

No “latest” claim is accepted without compatibility and conformance evidence.

**Official references**

- 1EdTech specifications: https://www.1edtech.org/specifications
- OneRoster: https://www.1edtech.org/standards/oneroster
- QTI: https://www.1edtech.org/standards/qti/index
- Open Badges: https://www.1edtech.org/standards/open-badges
- CLR: https://www.1edtech.org/standards/clr
- Ed-Fi data standards: https://docs.ed-fi.org/reference/data-exchange/

## 76. Standards implementation rule

For every supported standard, the project must produce:

- a version-pinned profile;
- required and optional fields;
- identity mapping;
- privacy mapping;
- error handling;
- retry behavior;
- idempotency rules;
- conformance fixtures;
- export fixtures;
- import fixtures;
- round-trip tests;
- negative tests;
- migration notes;
- rollback notes;
- vendor compatibility evidence.

Unknown conformance blocks a production claim.


---

# PART VIII — MERGE MANIFEST, AUDIT REPORT, AND COMPLIANCE CHECKLIST

## 77. CHANGE_MANIFEST_JSON

```json
{
  "artifact": "SCHOLAFORGE_COMPLETE_MERGED_BLUEPRINT_v12.0.md",
  "version": "12.0",
  "status": "TARGET_SPECIFICATION",
  "implementation_proven": false,
  "source_files": [
    {
      "name": "Pasted markdown.md",
      "sha256": "232bf09cabd2e2081dcdc27b916202a71384cb59cbf7a04988ffef2e87692e92",
      "role": "innovation_and_deep_specification"
    },
    {
      "name": "SCHOLAFORGE_COMPLETE_BLUEPRINT_v11.0.md",
      "sha256": "d1f8fd977fee160941ca708a5099df8c19662afd343e3f4964ffe682e5f3ff7f",
      "role": "governed_master_blueprint"
    }
  ],
  "merge_policy": "preserve_feature_sections_and_replace_superseded_metadata",
  "source_h2_sections": {
    "innovation_source": 143,
    "master_source": 74
  },
  "retained_h2_sections": {
    "innovation_source": 138,
    "master_source": 72
  },
  "superseded_non_feature_sections": [
    "innovation_source executive decision",
    "innovation_source baseline evaluation",
    "innovation_source old change manifest",
    "innovation_source old compliance checklist",
    "innovation_source old final status",
    "master source cover subtitle",
    "master source prior evaluation summary"
  ],
  "major_improvements": [
    "single version 12.0 authority layer",
    "dual explanation model",
    "72-capability two-lens atlas",
    "clear document precedence",
    "performance and resilience baseline",
    "innovation maturity classes",
    "updated external currentness register",
    "machine-readable merge audit"
  ],
  "seed": 17
}
```

## 78. AUDIT_REPORT_JSON

```json
{
  "project_identity_preserved": true,
  "canonical_name": "SCHOLAFORGE",
  "original_identity": "19. ScholaForge Belgium - Eu regulations",
  "feature_loss_detected": false,
  "implementation_evidence": "NOT_PROVIDED",
  "tests_run": [
    "document assembly validation",
    "source section coverage validation",
    "heading presence validation",
    "JSON parse validation"
  ],
  "software_tests_run": false,
  "legal_review_completed": false,
  "security_review_completed": false,
  "accessibility_conformance_proven": false,
  "interoperability_conformance_proven": false,
  "production_ready": false,
  "human_review_required": true,
  "known_conflicts": [
    "older source version labels are retained inside historical deep sections where they describe source evolution",
    "external legal and standards requirements may change after 2026-07-20",
    "SecureBoard Guardian requires jurisdiction-specific necessity and proportionality review before any activation"
  ],
  "risk_level": "HIGH_FOR_UNREVIEWED_PRODUCTION_USE",
  "rollback": "retain both original source files and regenerate version 12.0 deterministically from their hashes"
}
```

## 79. COMPLIANCE_CHECKLIST_JSON

```json
{
  "human_first": true,
  "teacher_authority_preserved": true,
  "learner_rights_preserved": true,
  "anti_surveillance_rules_preserved": true,
  "offline_capability_preserved": true,
  "accessibility_required": true,
  "privacy_by_design_required": true,
  "appeal_and_correction_required": true,
  "high_impact_ai_requires_human_oversight": true,
  "legal_certification_claimed": false,
  "production_readiness_claimed": false,
  "gdpr_review": "HUMAN_REVIEW_REQUIRED",
  "eu_ai_act_review": "HUMAN_REVIEW_REQUIRED",
  "belgian_education_law_review": "HUMAN_REVIEW_REQUIRED",
  "safeguarding_review": "HUMAN_REVIEW_REQUIRED",
  "labor_and_worker_monitoring_review": "HUMAN_REVIEW_REQUIRED",
  "procurement_accessibility_review": "HUMAN_REVIEW_REQUIRED"
}
```

## 80. Final implementation directive

Build ScholaForge in reversible stages.

Start with low-risk teacher and learner support.

Prove offline continuity early.

Prove rights workflows early.

Prove accessibility early.

Prove evidence traceability early.

Do not activate high-risk educational decision support until legal classification, data governance, human oversight, testing, and independent review are complete.

Do not activate SecureBoard Guardian merely because the cryptography works.

First prove necessity.

Then prove proportionality.

Then obtain legal, safeguarding, privacy, labor, and community approval.

Do not claim production readiness from this document.

The next truthful state is:

> **TARGET SPECIFICATION MERGED — REPOSITORY PRE-AUDIT, IMPLEMENTATION, TESTING, PILOT EVIDENCE, LEGAL REVIEW, SECURITY REVIEW, ACCESSIBILITY REVIEW, AND RELEASE APPROVAL STILL REQUIRED**

---

**END OF SCHOLAFORGE COMPLETE PROFESSIONALLY MERGED END-TO-END PROJECT BLUEPRINT VERSION 12.0**

> **Version 13 continuation:** The line above closes the preserved version 12 foundation. The complete version 13 whole-school expansion continues below.

---

# PART IX — VERSION 13.0 WHOLE-SCHOOL EXPANSION

## 81. Version 13 Authority, Preservation, and Truth Boundary

Part IX upgrades ScholaForge from a broad education operating system into a complete whole-school operating model.

It strengthens learning and assessment.

It also adds the operational environments that make a real school work every day.

### 81.1 Preservation manifest

The following sources were inspected for this version.

| Source | SHA-256 | Treatment |
|---|---|---|
| Primary merged blueprint v12.0 | `dc8b9f28362ea7330a5df8308133faa21705ea0b66746d13904eac3f1309c87b` | Preserved as the canonical foundation |
| Complete blueprint v11.0 | `d1f8fd977fee160941ca708a5099df8c19662afd343e3f4964ffe682e5f3ff7f` | Coverage checked against v12.0 |
| Earlier feature and retrieval blueprint | `83ddddca593df9d34ca9015622721f7fe4ff756e0ec87a226f651d80648a210b` | Feature headings and unique content checked |
| Competitive evaluation and correction file | `d079220fdf0a99645a4633ebdc86c4e02e70b39bfb68486fb218cba3a0cbe504` | Competitive scope and missing-domain findings integrated |

The heading audit found no feature-bearing v11 section absent from v12.

The earlier feature file contributed its technical and plain-language invention sections to v12.

The competitive evaluation was not treated as proof that ScholaForge is already implemented or unique.

It was used as a research prompt and then checked against current public material.

### 81.2 Add-only rule

Version 13 may:

- add a new capability;
- deepen an existing capability;
- add a safer implementation route;
- add a missing role, workflow, control, metric, or test;
- correct a currentness statement;
- mark a claim as unproven.

Version 13 may not:

- silently remove a version 12 capability;
- convert a human decision into an automated decision;
- turn personal support into surveillance;
- claim educational impact without comparative evidence;
- claim legal conformity from architecture alone;
- treat AI output quality as proof of learner knowledge;
- use a single score to define a learner, teacher, or school.

### 81.3 Status labels

All new capabilities are `TARGET_SPECIFICATION` unless implementation evidence proves a higher state.

The approved states remain:

`CONCEPT → TARGET_SPECIFICATION → ARCHITECTURE_APPROVED → PROTOTYPE → PILOT_READY → PILOTED → VALIDATED → LIMITED_PRODUCTION → PRODUCTION_READY`.

`SUSPENDED` and `RETIRED` remain available at any time.

### 81.4 Conflict rule

If an older sentence conflicts with Part IX, apply the rule that provides stronger:

1. child rights;
2. learning validity;
3. human authority;
4. privacy;
5. accessibility;
6. safety;
7. reversibility;
8. evidence quality.

Record material conflicts as a `DECISION_LOCK`.

## 82. Deep-Research Findings and Design Decisions

### 82.1 What current models prove is possible

Publicly described school and platform models demonstrate important parts of the future-school problem.

| Model family | Publicly visible strength | ScholaForge adoption decision |
|---|---|---|
| AI-native schools | Compressed, personalized academic practice and time for life skills | Adopt the focus principle, but never promise a universal two-hour outcome without local evidence |
| Interest-led schools | Learner questions, coaching, personal routes, and learning beyond school | Expand MySAGA, mentor practice, expeditions, and learner agency while preserving shared foundations |
| Project-based schools | Authentic projects, critique, revision, exhibition, and public contribution | Make project evidence a first-class assessment source |
| Adaptive platforms | Gap finding, micro-lessons, dashboards, and tailored routes | Keep adaptation private, uncertainty-aware, and teacher-controlled |
| AI classroom platforms | Teacher-created AI spaces and live support visibility | Use bounded learning spaces with strict purpose and access controls |
| Intelligent tutors | Guided explanations, practice, hints, and teacher support | Prefer pedagogically controlled tutoring over generic answer generation |
| Mastery records | Competency evidence and richer transcripts | Use portable, layered credentials while maintaining qualification compatibility |
| Offline platforms | Local delivery without dependable internet | Preserve ScholaForge school cells, print bridges, and controlled synchronization |
| School libraries | Qualified curation, information literacy, inclusive access, and reading culture | Upgrade the library into a physical-digital Knowledge Commons |

### 82.2 What the evidence changes

The research does not support one uncontrolled AI mode for all learning.

General-purpose AI may improve the quality or speed of a completed task without improving the learner's independent capability.

Purpose-built tutors can support learning when they use sound teaching methods.

Therefore ScholaForge separates:

- task performance;
- supported learning;
- independent capability;
- retained capability;
- transfer to a new situation.

The system must never treat these as the same signal.

### 82.3 What is genuinely expanded in version 13

Version 13 adds the following capability families:

1. **MySAGA 2.0** — evidence-calibrated personal learning intelligence;
2. **INSIGHT 2.0** — multi-stage, AI-aware learner evaluation;
3. **Cognitive Independence Protocol** — protected human learning in an AI-rich school;
4. **Teacher Practice and Capacity System** — professional support without worker surveillance;
5. **Board Evidence Room** — governed strategic decision support;
6. **Knowledge Commons** — library, research, reading, media literacy, and archives;
7. **Nourish** — safe, healthy, equitable, culturally inclusive school food operations;
8. **MoveForge** — physical education, movement, sport, clubs, and inclusive participation;
9. **WorldLab** — visits, fieldwork, exchanges, camps, scouting, and community learning;
10. **Campus Steward** — facilities, maintenance, environment, assets, cleaning, and continuity;
11. **Belonging and Attendance Navigator** — supportive attendance response without punitive profiling;
12. **School Service Hub** — schedules, rooms, transport, procurement, staffing, and communications;
13. **Arts, Culture, Clubs, and Student Democracy** — expression, participation, and school community;
14. **Whole-School Evaluation Framework** — learning, human, operational, equity, safety, and sustainability outcomes;
15. **Domain Workspaces** — recognizable interfaces for every school role.

### 82.4 Novelty boundary

The research found strong precedents for individual components.

The architecture-level differentiation is their integration inside one sovereign, offline-capable, evidence-carrying, rights-governed school operating system.

This is an informed design conclusion.

It is not a patent opinion.

It is not proof of market uniqueness.

It is not proof of superior learning outcomes.

Those claims require professional searches, implementation, controlled evaluation, and independent review.

## 83. Whole-School Human Development Model

### 83.1 Plain-language explanation

ScholaForge does not make children sit in one learning mode all day.

It gives them focused teaching, guided practice, projects, movement, reading, creation, community work, reflection, and real-world experience.

Teachers decide how these modes fit the learners and the curriculum.

AI helps where it adds learning value.

AI is removed where the learner must think, remember, create, or demonstrate independently.

### 83.2 Technical explanation

The Daily Rhythm Engine becomes a constraint-based orchestration service.

It composes approved learning blocks while protecting:

- statutory instructional requirements;
- shared foundational knowledge;
- teacher contact;
- independent practice;
- movement and physical education;
- food and rest;
- project work;
- reading and research;
- accessibility accommodations;
- safeguarding ratios;
- transport and site constraints;
- human workload;
- device-free time.

It optimizes within policy.

It does not autonomously rewrite the school day.

### 83.3 Core learning modes

| Mode | Human purpose | Typical evidence | AI posture |
|---|---|---|---|
| **Foundation Seminar** | Build shared knowledge, vocabulary, concepts, and cultural foundations | Questions, explanation, retrieval, discussion | Teacher-controlled support only |
| **Focused Practice** | Develop fluency and correct misconceptions | Work samples, error patterns, independent checks | Hints before answers |
| **Tutorial and Coaching** | Remove a specific barrier or deepen reasoning | Dialogue, revised work, learner reflection | Purpose-built tutor permitted |
| **Project Studio** | Apply knowledge to a meaningful product or problem | Plans, prototypes, critique, revision, exhibition | Contribution must be disclosed |
| **Knowledge Commons** | Read, research, verify, cite, and explore | Reading conferences, research trails, source evaluations | Research assistance with provenance |
| **Maker and Lab** | Build, test, measure, repair, and investigate | Safety checks, process evidence, artefacts, results | Simulation allowed; physical safety remains human-controlled |
| **Movement and Sport** | Develop health, physical competence, teamwork, and enjoyment | Participation, skill progression, reflection | No body ranking or emotion inference |
| **Life Practice** | Learn cooking, finance, care, communication, civic, and practical skills | Demonstration and authentic task | AI may coach; practical competence must be observed |
| **WorldLab Expedition** | Learn from places, nature, culture, employers, and communities | Field notes, interviews, artefacts, service, reflection | Offline reference pack; no continuous tracking by default |
| **Advisory and Belonging** | Maintain a trusted human relationship and learner voice | Goals, questions, agreed support | AI may organize notes; human relationship is primary |
| **Reflection and Exhibition** | Explain growth, receive critique, and choose next steps | Portfolio, presentation, self-assessment | AI disclosure required |
| **Rest and Social Time** | Eat, recover, play, and build relationships | No productivity evidence | No attention or social surveillance |

### 83.4 Age and development profiles

Local education law controls formal stages.

ScholaForge uses adaptable development profiles rather than fixed assumptions.

| Profile | Design emphasis | AI boundary |
|---|---|---|
| **Early foundation** | Play, language, movement, stories, routines, concrete exploration, secure relationships | Minimal, adult-mediated, and never a relational substitute |
| **Primary foundation** | Literacy, numeracy, knowledge, curiosity, making, cooperation, physical confidence | Short, teacher-bounded assistance with visible purpose |
| **Early adolescence** | Strong foundations, identity exploration, collaborative projects, critical digital literacy | Guided use with explicit verification and independence checks |
| **Later adolescence** | Advanced pathways, real clients, research, apprenticeships, civic work, professional AI literacy | Increasingly authentic use, but independent core capability remains verified |
| **Transition and lifelong learning** | Qualifications, employment, enterprise, higher education, service, reskilling | Professional-use simulation with accountability and provenance |

Age never replaces individual accessibility, readiness, cultural, or safeguarding review.

### 83.5 Example week

This is a configurable reference, not a mandatory timetable.

| Weekly element | Purpose |
|---|---|
| Daily foundation and focused practice | Protect literacy, numeracy, disciplinary knowledge, and independent capability |
| Three or more project or laboratory blocks | Build application, creation, teamwork, and revision |
| Daily movement with scheduled quality physical education | Protect whole-body development and reduce prolonged sedentary time |
| Regular Knowledge Commons block | Build reading, inquiry, source judgment, and information independence |
| Weekly advisory | Review goals, belonging, support, and agency with a trusted human |
| Regular arts, culture, or design | Develop expression, interpretation, imagination, and craft |
| Recurring life-practice block | Build practical independence and community capability |
| Periodic WorldLab experience | Connect knowledge with places, work, nature, public services, and culture |
| Exhibition and reflection cadence | Make learning visible without reducing it to a single mark |

### 83.6 Scheduling rules

The scheduler must:

- protect meals and breaks;
- prevent persistent ability segregation;
- avoid publicly visible mastery groups;
- provide accessible alternatives without reducing challenge;
- include setup, travel, cleaning, and recovery time;
- preserve teacher planning and collaboration time;
- prevent learner overload;
- make substitutions visible;
- maintain a manual timetable and print fallback;
- record why a consequential schedule change occurred.

## 84. Cognitive Independence Protocol

### 84.1 Plain-language explanation

Students must learn to use AI without becoming dependent on it.

They first learn to think.

Then they learn to use assistance.

They also prove what they can still do when the assistance is removed.

### 84.2 Technical explanation

Every task carries an `AI_USE_MODE`.

The mode defines permitted assistance, required disclosure, captured evidence, and whether the result may support a mastery claim.

### 84.3 AI use modes

| Mode | Meaning | Mastery use |
|---|---|---|
| `HUMAN_CORE` | No generative assistance; approved accessibility tools remain available | May support independent mastery |
| `AI_HINTED` | AI asks questions, provides hints, or points to approved sources | Supports learning; requires later independent check |
| `AI_COACHED` | AI explains, models, critiques, or rehearses | Supports development; not independent proof |
| `AI_COLLABORATIVE` | Learner and AI create together with visible contribution history | Supports professional AI capability and project evidence |
| `AI_DELEGATED` | AI performs a bounded subtask selected and verified by the learner | Measures delegation and verification, not the delegated skill |
| `AI_AUDITED` | Learner must find, explain, and correct AI errors | Supports AI literacy and disciplinary judgment |
| `ACCESS_SUPPORT` | Translation, text-to-speech, speech-to-text, alternative input, or approved accommodation | Must not reduce the learner's construct-irrelevant barriers; may support mastery when valid |

### 84.4 Assistance ladder

The default tutor sequence is:

1. ask the learner to restate the goal;
2. ask what they already know;
3. offer a cue;
4. offer a strategy;
5. show one analogous example;
6. reveal one step;
7. provide a worked example only when permitted;
8. require the learner to explain or apply the idea;
9. schedule an independent check;
10. refer to a human when confidence, safety, or learning value is insufficient.

### 84.5 Independence protections

ScholaForge must include:

- regular AI-free retrieval and creation;
- delayed checks after AI-supported practice;
- new-context transfer tasks;
- “show your reasoning” evidence;
- productive-struggle budgets configured by educators;
- a one-tap teacher pause;
- learner-visible assistance history;
- detection of answer leakage at the system level;
- model tests for sycophancy, excessive praise, dependency cues, and premature answer giving;
- no emotional exclusivity, simulated love, or pressure to keep secrets from trusted humans.

### 84.6 Prohibited shortcuts

The system must not:

- award mastery from an AI-produced final artefact alone;
- infer understanding from time on screen;
- hide AI contribution;
- force AI use where an equivalent non-AI route is reasonable;
- penalize a learner for using an approved accommodation;
- present AI as a conscious friend, therapist, authority, or replacement teacher;
- optimize for maximum chat duration;
- use engagement streaks to manipulate a child.

### 84.7 Acceptance gates

The protocol passes only when:

- every assessable task has a visible AI mode;
- an assessor can distinguish supported and independent evidence;
- delayed and transfer checks can be scheduled;
- accessibility support is separated from answer generation;
- teacher pause works locally during internet loss;
- learner and family explanations are age-appropriate;
- dependency and sycophancy red-team tests pass;
- generic model upgrades cannot change assistance policy without approval.

## 85. MySAGA 2.0 — Evidence-Calibrated Personal Educational Intelligence

### 85.1 Plain-language explanation

MySAGA is the learner's private education guide.

It remembers approved evidence.

It shows what is secure, what is still developing, what may be out of date, and what could be tried next.

It does not decide the learner's intelligence, personality, future, or value.

The learner and qualified adults can correct it.

### 85.2 Technical purpose

MySAGA 2.0 is a learner-controlled longitudinal state and decision-support service.

It consumes governed evidence.

It produces explainable, reversible next-step options.

It does not produce autonomous educational decisions.

### 85.3 MySAGA capability map

| Component | Plain-language purpose | Technical function |
|---|---|---|
| **Learner Timeline** | Shows important learning events in order | Provenance-linked event view with correction, expiry, and access policy |
| **Mastery Map** | Shows what the learner can currently demonstrate | Competency assertions with evidence sufficiency, confidence, recency, and reviewer status |
| **Learning Conditions Map** | Records conditions that have helped recently | Time-bounded, non-biological support preferences confirmed by the learner and teacher |
| **Strength Constellation** | Shows several growing strengths | Multidimensional evidence display without a universal talent rank |
| **Interest Explorer** | Helps the learner test interests | Opt-in exposure, reflection, and confirmation cycle; browsing alone is never treated as passion |
| **Goal Studio** | Turns hopes into reviewable learning goals | Versioned goal contract with milestones, support, evidence, owner, and review date |
| **Pathway Simulator** | Compares possible routes | Scenario graph with requirements, costs, time, opportunities, uncertainty, and alternatives |
| **Support Wallet** | Carries approved accommodations and strategies | Purpose-bound accessibility and support claims with minimum disclosure |
| **Evidence Locker** | Keeps selected proof and feedback | Rights-aware portfolio with authorship, AI contribution, license, and export |
| **Agency Controls** | Lets the learner correct, hide, export, challenge, or request help | Rights workflow with human review, audit receipt, and policy limits |
| **Next-Step Navigator** | Suggests useful next actions | Constrained recommendation service optimized for learning need, agency, equity, and feasibility |
| **Memory Garden** | Keeps chosen learning memories | Optional private reflection space separated from assessment and behavioral analytics |

### 85.4 Evidence intake contract

MySAGA accepts only evidence with:

- a declared purpose;
- a known learner or lawful pseudonymous link;
- a source and author;
- a creation time;
- an AI use mode;
- a competency or goal relationship;
- an accessibility context where relevant;
- an evidence type;
- a validity period or review date;
- a permission policy;
- a challenge route.

Unsupported behavioral exhaust must not become learner intelligence.

Clicks, dwell time, facial movement, voice emotion, or message frequency are not mastery evidence.

### 85.5 Evidence quality vector

MySAGA stores a vector, not one opaque confidence score.

| Dimension | Question |
|---|---|
| `AUTHENTICITY` | Is the work attributable to this learner or team? |
| `INDEPENDENCE` | What assistance was available? |
| `CONSTRUCT_VALIDITY` | Does the evidence measure the claimed capability? |
| `SOURCE_DIVERSITY` | Are there different evidence types and contexts? |
| `RECENCY` | Is the evidence current enough for this decision? |
| `RETENTION` | Was capability shown after a delay? |
| `TRANSFER` | Was capability shown in a meaningfully new context? |
| `ACCESS_FAIRNESS` | Were irrelevant barriers removed without changing the construct? |
| `REVIEW_QUALITY` | Who reviewed it and was moderation required? |
| `CONTRADICTION` | Is there credible evidence pointing in another direction? |

No dimension may be hidden from an authorized learner or reviewer.

### 85.6 Mastery states

| State | Meaning |
|---|---|
| `NOT_OBSERVED` | There is not enough valid evidence |
| `EMERGING` | Early evidence exists; substantial support is still needed |
| `DEVELOPING` | The learner succeeds in familiar contexts with some support |
| `SECURE` | The learner demonstrates the defined capability independently under valid conditions |
| `TRANSFERABLE` | The learner applies it in a meaningfully different context |
| `RETAINED` | The learner demonstrates it again after an appropriate delay |
| `EXPERT_REVIEW` | Consequential or contradictory evidence requires qualified review |
| `STALE` | Earlier evidence exists, but current capability needs renewal |

`STALE` does not mean that learning disappeared.

It means the evidence is no longer sufficient for the present decision.

### 85.7 State transition rule

A state transition requires:

1. valid evidence;
2. sufficient coverage of the competency definition;
3. disclosed assistance;
4. applicable accessibility controls;
5. policy-defined reviewer authority;
6. contradiction handling;
7. a visible reason;
8. a correction or appeal route.

High-impact transitions require human approval.

### 85.8 Next-step reasoning

The navigator generates several options.

It must consider:

- learner goals;
- curriculum obligations;
- prerequisites;
- evidence gaps;
- interests explicitly confirmed by the learner;
- productive challenge;
- accessibility;
- available teachers, mentors, rooms, equipment, and time;
- wellbeing and workload constraints without diagnosing the learner;
- opportunity equity;
- offline availability;
- alternative non-AI routes.

Each option must show:

- why it is suggested;
- which evidence informed it;
- what uncertainty remains;
- expected effort;
- required support;
- how success will be checked;
- who can approve or reject it.

### 85.9 Performance evaluation of MySAGA itself

MySAGA must be evaluated as a system.

| Dimension | Required measure |
|---|---|
| Educational value | Comparative change in learning, transfer, retention, agency, or teacher decision quality |
| Recommendation quality | Human acceptance, completion, benefit, rejection reason, and avoidable false recommendation rate |
| Calibration | Whether displayed uncertainty matches observed outcomes |
| Equity | Recommendation and opportunity differences across relevant groups after lawful review |
| Independence | Whether supported gains remain when AI is removed |
| Learner control | Correction, export, hiding, appeal, and opt-out success |
| Teacher control | Override success, explanation quality, and safe manual operation |
| Privacy | Data minimization, access violations, retention compliance, and rights-response time |
| Stability | Unexplained model drift, state churn, and regression after updates |
| Human impact | Learner comprehension, trust calibration, teacher workload, and unintended pressure |

### 85.10 MySAGA prohibitions

MySAGA must never:

- create a fixed intelligence score;
- infer personality from school data;
- diagnose health, disability, or emotion;
- predict criminality, discipline, or future worth;
- decide admission, tracking, grading, exclusion, or career access;
- manipulate choices toward a school or commercial target;
- sell or advertise from learner data;
- use private reflections for assessment without a new, freely reviewable basis;
- reveal sensitive interests to family, staff, or partners without lawful role-based need;
- retain a mistaken inference after a successful correction.

### 85.11 MySAGA acceptance gates

MySAGA 2.0 is not pilot-ready until:

- every state is evidence-linked and explainable;
- supported and independent performance are separate;
- retention and transfer evidence are representable;
- learner correction and appeal work end to end;
- small-group and protected-attribute leakage tests pass;
- recommendations can be rejected without penalty;
- no pathway is closed automatically;
- no hidden composite person score exists;
- opt-out and manual operation are usable;
- an independent child-rights and assessment-validity review is completed.

## 86. INSIGHT 2.0 — Complete Learner Evaluation and Evidence System

### 86.1 Plain-language explanation

INSIGHT 2.0 does not ask only, “What mark did the student get?”

It asks:

- What does the learner know?
- Can the learner explain it?
- Can the learner use it?
- Can the learner create with it?
- Can the learner do it independently?
- Can the learner still do it later?
- Can the learner transfer it to a new situation?
- What support or conditions were present?
- How certain is the judgment?

The learner can see the evidence and challenge mistakes.

Qualified humans remain responsible for consequential judgments.

### 86.2 Technical purpose

INSIGHT 2.0 is an assessment orchestration, evidence interpretation, moderation, qualification-translation, and appeal system.

It supports diagnostic, formative, performance, summative, longitudinal, practical, collaborative, and standardized assessment.

It stores claims and evidence separately.

It never converts model probability directly into an official grade.

### 86.3 Assessment constitution

1. Assessment must serve a declared educational purpose.
2. The evidence must match the capability being claimed.
3. Practice data and official judgment must remain distinguishable.
4. Supported and independent performance must remain distinguishable.
5. One weak result must not erase stronger, valid evidence without review.
6. One polished artefact must not prove all underlying capabilities.
7. Learners must know the criteria before consequential assessment.
8. Accessibility support must remove irrelevant barriers.
9. Group success must not hide individual contribution or collaboration capability.
10. AI may assist evidence organization but not make the final consequential decision.
11. Uncertainty and contradiction must remain visible.
12. Every consequential outcome requires explanation, correction, and appeal.

### 86.4 Evaluation dimensions

The school defines domain-specific competencies.

INSIGHT can organize evidence across the following non-reductive dimensions.

| Dimension | What it represents | Example evidence |
|---|---|---|
| **Knowledge and fluency** | Accurate recall, vocabulary, facts, procedures, and foundational schemas | Oral recall, written response, practical routine, low-stakes quiz |
| **Understanding and reasoning** | Explanation, connection, inference, argument, and misconception repair | Think-aloud, concept map, dialogue, written reasoning |
| **Application and problem solving** | Use of knowledge in purposeful tasks | Case, investigation, calculation, troubleshooting |
| **Creation and craft** | Design, making, composition, experimentation, iteration, and quality | Prototype, performance, code, artwork, report, product |
| **Transfer and adaptation** | Use in a meaningfully different situation | Novel task, field problem, cross-disciplinary challenge |
| **Communication** | Clear expression for a purpose and audience | Presentation, demonstration, debate, explanation, publication |
| **Collaboration** | Shared reasoning, coordination, contribution, conflict repair, and responsibility | Team decisions, peer evidence, observation, retrospective |
| **Learning-to-learn** | Planning, monitoring, strategy use, revision, and reflection | Goal review, strategy explanation, revision trail |
| **Ethical and civic judgment** | Recognition of consequences, rights, duties, evidence, and plural views | Deliberation, case response, community decision |
| **Practical and life capability** | Safe and competent real-world action | Observed demonstration, simulation, service task |
| **Physical capability and participation** | Skill development, safe movement, teamwork, and personal progress | Teacher observation, personal goal evidence, performance task |
| **AI and information literacy** | Purposeful use, verification, provenance, limits, and accountability | AI audit, source evaluation, corrected output, disclosure log |

These dimensions are not combined into a universal human score.

Not every task measures every dimension.

### 86.5 Evidence types

INSIGHT supports:

- selected-response evidence;
- constructed-response evidence;
- oral explanation;
- live demonstration;
- practical observation;
- project artefact;
- design and revision history;
- experiment and laboratory record;
- reading conference;
- performance or exhibition;
- peer and team evidence;
- mentor or workplace evidence;
- community partner evidence;
- fieldwork evidence;
- learner self-assessment;
- standardized or jurisdictional assessment;
- delayed retention check;
- transfer task;
- AI-use and provenance record.

Self, peer, mentor, and AI-assisted signals cannot independently produce a high-stakes decision.

### 86.6 Seven-stage evidence cycle

| Stage | Purpose | Consequence |
|---|---|---|
| **1. Baseline** | Find current knowledge and barriers without stigma | Establish starting evidence; no fixed track |
| **2. Formation** | Gather low-stakes information during teaching and practice | Adapt explanation, practice, grouping, or support |
| **3. Performance** | Demonstrate capability in a meaningful task | Add authentic evidence |
| **4. Independent verification** | Remove unapproved assistance and verify the claimed human capability | Eligible for independent mastery |
| **5. Delayed retention** | Check capability after an appropriate interval | Eligible for retained status |
| **6. Transfer** | Apply capability in a new context | Eligible for transferable status |
| **7. Synthesis and review** | Interpret the complete evidence pattern with uncertainty and contradiction | Human-approved judgment, feedback, next step, or appeal |

The interval and transfer distance must be defined by subject experts.

### 86.7 Assessment object

Every assessment definition contains:

```yaml
assessment_id: stable_identifier
purpose: diagnostic | formative | mastery | qualification | selection_prohibited_by_default
learner_group: authorized_scope
competency_claims: []
construct_definition: text
evidence_methods: []
ai_use_mode: HUMAN_CORE | AI_HINTED | AI_COACHED | AI_COLLABORATIVE | AI_DELEGATED | AI_AUDITED | ACCESS_SUPPORT
allowed_resources: []
accessibility_plan: reference
opportunity_to_learn_check: reference
rubric_version: reference
reviewer_requirements: []
moderation_rule: reference
retention_rule: reference_or_null
transfer_rule: reference_or_null
appeal_route: reference
retention_policy: reference
qualification_mapping: reference_or_null
```

### 86.8 Rubric design

A valid rubric must define:

- the exact capability;
- observable evidence;
- quality descriptions rather than vague adjectives;
- examples and counterexamples;
- unacceptable safety failures where relevant;
- AI contribution policy;
- accessibility interpretation;
- what is not being assessed;
- reviewer guidance;
- moderation triggers;
- uncertainty handling.

Rubrics must not reward cultural style, language accent, speed, handwriting, confidence, or technology access unless those are valid parts of the construct.

### 86.9 Mastery decision

INSIGHT does not calculate mastery from a universal percentage.

The decision process is:

1. confirm the competency definition;
2. confirm opportunity to learn;
3. confirm evidence authenticity;
4. separate AI-supported and independent evidence;
5. test construct coverage;
6. review source diversity;
7. review accessibility validity;
8. review contradictory evidence;
9. review recency, retention, and transfer requirements;
10. apply moderation policy;
11. record the human judgment and rationale;
12. issue feedback and a challenge route.

### 86.10 Confidence representation

Confidence must be shown as reasons and missing evidence.

Recommended labels are:

- `INSUFFICIENT_EVIDENCE`;
- `TENTATIVE`;
- `SUPPORTED`;
- `WELL_SUPPORTED`;
- `CONTRADICTORY_EVIDENCE`;
- `REVIEW_REQUIRED`.

If a statistical probability is used internally, it must be calibrated for the defined population and never shown as a precise truth about a child.

### 86.11 AI contribution declaration

Each assessable artefact must show:

- the task's permitted AI mode;
- tools used;
- learner prompts or a summarized interaction trail when necessary and proportionate;
- content generated or transformed;
- verification performed by the learner;
- human contribution;
- unresolved uncertainty.

The purpose is learning validity, not punishment for transparent use.

### 86.12 Group-work evaluation

Group work produces two separate claims:

1. the quality of the shared outcome;
2. each learner's collaboration and individual capability evidence.

Acceptable individual evidence may include:

- role choices;
- decisions and reasons;
- work products;
- peer-confirmed contributions;
- teacher observations;
- individual explanation;
- response to a changed scenario;
- team retrospective.

Automated message counting, keystroke counting, or speaking-time ranking is prohibited as a proxy for contribution.

### 86.13 Practical, sport, expedition, and life-skill evaluation

Practical capability must be observed under authentic or safely simulated conditions.

The evidence may cover:

- preparation;
- safety;
- correct execution;
- diagnosis and correction;
- quality;
- care for people, equipment, and environment;
- communication;
- reflection;
- independent repetition.

A written quiz alone cannot certify a physical, laboratory, culinary, field, craft, or emergency-response skill.

### 86.14 Moderation model

| Decision impact | Minimum control |
|---|---|
| Low-stakes feedback | Teacher review with sampled quality checks |
| Mastery state change | Authorized educator and evidence trace |
| Qualification-linked judgment | Trained assessor plus policy-defined moderation |
| Contradictory or borderline judgment | Independent second review |
| Appeal | Reviewer not responsible for the original final decision |
| School-wide rubric change | Subject, accessibility, assessment, and governance approval |

Inter-rater agreement is monitored as a quality signal.

It is not used to force assessors to ignore justified professional judgment.

### 86.15 Qualification and grade bridge

ScholaForge preserves rich evidence and can translate it into required conventional outputs.

The bridge must:

- use jurisdiction-approved mappings;
- keep the original evidence available;
- show the mapping version;
- show uncertainty and exceptions;
- prohibit reverse inference from one grade to a full learner profile;
- support recognized examinations;
- remain reviewable by qualified humans.

### 86.16 Feedback contract

Useful feedback states:

1. the intended goal;
2. what the evidence shows;
3. what is already strong;
4. the most important next improvement;
5. a practical next action;
6. when or how it will be reviewed.

Feedback must not become constant commentary, excessive correction, personality judgment, or motivational manipulation.

### 86.17 Appeal workflow

1. Learner or authorized representative opens a challenge.
2. The system freezes the disputed decision version.
3. The evidence, rubric, AI mode, accessibility plan, and rationale become viewable.
4. The learner may add context or evidence.
5. An independent authorized reviewer assesses the case.
6. The outcome is confirmed, amended, or voided.
7. Downstream records are corrected.
8. The learner receives a plain-language explanation.
9. Systemic problems create an improvement action.

### 86.18 INSIGHT performance metrics

Measure:

- validity evidence by assessment purpose;
- rater agreement and disagreement reasons;
- appeal rate and upheld-appeal rate;
- time to feedback;
- learner understanding of feedback;
- opportunity-to-learn gaps;
- accessibility defect rate;
- mastery state stability;
- retention and transfer confirmation;
- supported-to-independent performance gap;
- subgroup error differences;
- teacher workload;
- consequential AI override rate;
- assessment security incidents;
- qualification mapping exceptions.

Metrics must trigger inquiry, not automatic punishment.

### 86.19 INSIGHT acceptance gates

INSIGHT 2.0 is not pilot-ready until:

- assessment purpose and construct are explicit;
- AI-use modes work end to end;
- independent, retention, and transfer evidence remain separate;
- accessibility plans can be applied and audited;
- group and individual evidence remain separate;
- high-impact judgments require named humans;
- moderation and appeal workflows are tested;
- grade translation preserves the underlying record;
- no universal learner score is generated;
- simulated bias, contradiction, missing-data, and model-failure cases pass.

## 87. Evaluation Without Dehumanization

### 87.1 Plain-language explanation

Students, teachers, school leaders, and school services all need useful feedback.

They do not need hidden rankings.

ScholaForge evaluates whether the system is helping people learn and work better.

It does not turn every person into a productivity score.

### 87.2 Evaluation layers

| Layer | Main question | Decision owner |
|---|---|---|
| Learner | What has been learned, retained, transferred, and created? | Learner and authorized educators |
| Teaching | Which practices are helping which learners under which conditions? | Teacher and professional learning team |
| Programme | Is a course, project, club, meal, library, or expedition meeting its purpose? | Programme owner with stakeholder input |
| School | Are learning, equity, safety, belonging, staffing, facilities, and resources improving together? | School leadership and board |
| Network | What can schools learn from comparable, consented, privacy-safe evidence? | Authorized federation governance |
| Product | Does ScholaForge improve outcomes without unacceptable harm or workload? | Product, research, child-rights, and independent reviewers |

### 87.3 Learner evaluation boundary

Learners receive:

- evidence-based competency states;
- growth and revision history;
- current goals;
- next-step options;
- retained and transfer evidence;
- AI-supported and independent evidence;
- rights and appeal controls.

Learners do not receive:

- a human-worth score;
- a fixed potential ceiling;
- a public class rank by default;
- an inferred personality label;
- a hidden risk score;
- an emotion score;
- an automated career destiny.

### 87.4 Teacher evaluation boundary

Teacher professional growth may use:

- self-selected inquiry goals;
- lesson and curriculum design evidence;
- learner work samples;
- peer observation;
- student voice gathered safely;
- contribution to team knowledge;
- professional learning;
- workload and resource conditions.

Teacher evaluation must not use:

- covert audio or video;
- emotion recognition;
- message or keystroke volume;
- raw learner scores without context;
- AI-generated performance rankings;
- disability, leave, family status, union activity, or protected characteristics;
- automated employment decisions.

### 87.5 Board and leadership evaluation boundary

Boards are evaluated on stewardship, not presentation quality.

Evidence includes:

- learning and equity trends;
- implementation fidelity;
- response to risk and incidents;
- resource alignment;
- teacher conditions;
- learner and family voice;
- rights and accessibility;
- transparent decisions and follow-through;
- independent review findings.

### 87.6 Service evaluation boundary

Library, food, sport, expedition, administration, and maintenance services are evaluated primarily at service and process level.

Examples include:

- accessibility and availability;
- safety and incident response;
- quality and user experience;
- inclusion and equity;
- resource use and waste;
- reliability and recovery;
- educational contribution;
- rights compliance.

Individual staff ranking requires a separate lawful human-resources process outside learner analytics.

## 88. Teacher Practice and Capacity System

### 88.1 Plain-language explanation

Teachers remain the professional leaders of learning.

ScholaForge removes repeated work, improves access to evidence, and helps teachers collaborate.

It does not monitor teachers like machines.

### 88.2 Technical explanation

The Teacher Practice and Capacity System combines planning, live teaching, evidence review, collaboration, professional learning, workload protection, and controlled research.

### 88.3 Capability map

| Capability | Plain-language purpose | Technical function |
|---|---|---|
| **Today Board** | Shows the teacher what needs attention now | Prioritized, explainable view of lessons, learners, approvals, incidents, and deadlines |
| **Co-Planning Studio** | Helps teaching teams build and reuse strong learning | Versioned plans, roles, resources, accessibility, evidence, and review workflow |
| **TwinTeach Control** | Gives live help while the teacher stays in charge | Low-latency bounded assistant with source display, pause, fallback, and approval controls |
| **Evidence Review Queue** | Organizes work that needs human judgment | Risk- and deadline-aware queue without automated final grading |
| **Misconception Lens** | Shows common learning barriers | Aggregated, privacy-safe patterns linked to reviewed teaching responses |
| **Workload Guard** | Warns when plans create unreasonable work | Task, time, deadline, class, and staffing constraint model; no worker productivity scoring |
| **Professional Inquiry Lab** | Lets teachers test improvements carefully | Theory of change, baseline, pilot, outcome, harm, reflection, and sharing controls |
| **Teacher Knowledge Commons** | Shares reviewed resources and practice | Governed repository with provenance, license, context, version, and evidence |
| **Substitution Continuity Pack** | Keeps learning safe during absence | Minimal lesson, learner support, room, safety, and access package for authorized substitutes |

### 88.4 Teacher decision rights

Teachers can:

- approve, edit, reject, or disable AI suggestions;
- change grouping and route decisions;
- require human-only work;
- request additional evidence;
- correct learner-state errors;
- escalate safeguarding, accessibility, and curriculum issues;
- operate with manual and offline fallbacks;
- see why a recommendation appeared.

Teachers cannot override safeguarding, privacy, discrimination, or legal controls merely for convenience.

### 88.5 Workload protection

The system must measure process burden, not worker value.

It should identify:

- duplicate data entry;
- avoidable approval steps;
- overloaded assessment periods;
- impossible timetable combinations;
- resource shortages;
- excessive notification volume;
- unreviewed AI queues;
- repeated manual exports;
- tasks that should be stopped rather than automated.

Changes require teacher consultation and a before-after workload check.

### 88.6 Professional learning cycle

`Question → Evidence → Small change → Supported trial → Observe → Reflect → Adapt → Share or stop`.

The teacher owns the professional inquiry record unless a lawful school quality process requires defined evidence.

### 88.7 Acceptance gates

- Teacher control works without cloud connectivity.
- No AI output becomes an official learner decision without review.
- Workload data cannot generate hidden employment scores.
- Planning supports accessibility and offline fallbacks.
- Teachers can see and correct evidence provenance.
- Substitute access is time-limited and minimized.
- Professional inquiry includes harm and stop criteria.
- Teacher representatives participate in monitoring-policy approval.

## 89. Board Evidence Room and School Leadership Control

### 89.1 Plain-language explanation

The school board needs a truthful picture of the school.

It should see learning, fairness, teacher capacity, safety, food, sport, library use, buildings, attendance, finances, and improvement work together.

It should not see secret rankings of children or teachers.

### 89.2 Technical explanation

The Board Evidence Room is a governed decision-support workspace.

It compiles privacy-protected evidence, options, risks, costs, equity impacts, legal questions, and implementation status into decision packets.

It cannot authorize itself.

### 89.3 Board decision packet

Every material proposal contains:

```yaml
decision_id: stable_identifier
problem_statement: evidence_bound_text
affected_groups: []
learner_voice: reference_or_not_applicable
staff_voice: reference_or_not_applicable
family_or_community_voice: reference_or_not_applicable
baseline: reference
options: []
do_nothing_option: required
expected_benefits: []
possible_harms: []
equity_and_accessibility_impact: reference
privacy_and_ai_impact: reference
legal_questions: []
cost_and_capacity: reference
success_and_harm_indicators: []
pilot_scope: reference_or_not_applicable
stop_conditions: []
rollback_plan: reference
evidence_quality: []
conflicts_of_interest: []
decision_owner: named_human_body
review_date: date
```

### 89.4 Board views

| View | Board question |
|---|---|
| Learning and transfer | Are learners gaining knowledge and using it independently in new situations? |
| Equity and access | Who lacks opportunity, support, participation, or a safe route? |
| Teacher capacity | Do staff have time, expertise, collaboration, and workable systems? |
| Belonging and attendance | Are barriers being understood and addressed? |
| Safeguarding and rights | Are incidents, complaints, appeals, and rights requests handled properly? |
| Knowledge Commons | Does every learner have inclusive access to reading, research, and reliable knowledge? |
| Food and nutrition | Are meals safe, healthy, inclusive, accessible, and non-stigmatizing? |
| Movement and sport | Is participation inclusive, safe, varied, and sufficient? |
| Expeditions and community | Are outside-school opportunities safe, equitable, and educationally meaningful? |
| Campus and maintenance | Are buildings, air, water, sanitation, energy, equipment, and accessibility dependable? |
| Finance and procurement | Do resources follow educational priorities and total cost? |
| AI and data governance | Which systems are active, why, with what evidence, incidents, and human controls? |
| Improvement portfolio | Which pilots should continue, change, scale, pause, or stop? |

### 89.5 Privacy and anti-gaming controls

Board dashboards must:

- default to trends and cohorts;
- suppress or combine small groups where re-identification risk exists;
- prohibit drill-down to named learners unless a lawful operational role requires it;
- prohibit teacher league tables;
- show missing data and measurement limitations;
- show harm indicators beside benefit indicators;
- preserve qualitative evidence and stakeholder voice;
- prevent one target from becoming the definition of school quality;
- log access and exports;
- expire temporary access.

### 89.6 School improvement portfolio

Every improvement initiative uses:

`Explore → Prepare → Deliver → Evaluate → Adapt → Scale, Hold, Roll Back, or Stop`.

Scaling requires evidence that:

- the mechanism plausibly worked;
- the benefit was not limited to one favored group;
- no unacceptable harm emerged;
- workload and cost are sustainable;
- the result is repeatable enough for the next context;
- rights and accessibility controls remain effective.

### 89.7 Acceptance gates

- Every material decision has an evidence packet and named owner.
- The do-nothing option is visible.
- Missing evidence is visible.
- Small-cohort privacy controls pass.
- Board users cannot access unrestricted learner or staff profiles.
- Conflicts of interest are recorded.
- Pilot stop and rollback conditions are testable.
- Decisions and follow-up actions are public internally at the appropriate level.

## 90. School Service Hub — Administration and Daily Operations

### 90.1 Plain-language explanation

The School Service Hub connects the practical work behind every school day.

It helps staff manage schedules, rooms, transport, supplies, communications, visitors, staffing, and service requests.

People still decide exceptions and sensitive cases.

### 90.2 Technical explanation

The hub is an orchestration layer over authorized school-administration systems.

It does not require ScholaForge to replace every existing SIS, HR, finance, or facility system.

It uses adapters, purpose-scoped access, workflow states, receipts, and manual fallbacks.

### 90.3 Capabilities

| Capability | Non-technical explanation | Technical definition |
|---|---|---|
| **Schedule and Room Orchestrator** | Finds workable times and spaces | Constraint solver with human approval, accessibility, staffing, capacity, travel, and fallback rules |
| **Resource and Equipment Booking** | Prevents double booking and missing materials | Inventory reservation with eligibility, maintenance state, custody, and conflict handling |
| **Transport Coordinator** | Organizes school travel safely | Route, authorized rider, accessibility, exception, incident, and communication workflow |
| **Visitor and Partner Access** | Gives visitors only the access they need | Pre-authorization, identity check, safeguarding state, escort rule, temporary credential, and expiry |
| **Procurement Workspace** | Links purchases to educational need and total cost | Request, comparison, conflict, accessibility, security, sustainability, approval, receipt, and contract lifecycle |
| **Staffing Continuity** | Helps the school respond to absence or shortages | Role coverage, qualification, safeguarding, timetable, workload, and continuity plan |
| **Communication Router** | Sends the right message in the right language and channel | Consent-aware templates, translation review, delivery status, urgency, and offline print/export |
| **Service Desk** | Gives staff, learners, and families one place to ask for help | Categorized case, priority, owner, SLA, status, evidence, resolution, and appeal or escalation |
| **Incident Coordination** | Organizes response without replacing emergency judgment | Severity state machine, role activation, minimal data, timeline, communication, recovery, and review |

### 90.4 Safeguards

- Administrative convenience does not override child rights.
- Scheduling may not infer ability from demographic proxies.
- Transport data is retained only as needed for safety and operations.
- Visitor access expires automatically.
- Procurement suggestions must reveal vendor relationships and conflicts.
- Staff allocation tools cannot make automated employment decisions.
- Emergency and manual contact lists remain available offline.

### 90.5 Acceptance gates

- Every workflow has a named human owner.
- Existing-system adapters can be disabled independently.
- Conflicts and failed integrations are visible.
- Manual scheduling and paper continuity are tested.
- Temporary access expires.
- Communication preferences, accessibility, and language are respected.
- No learner or staff ranking is produced from operational data.

## 91. Knowledge Commons — Library, Reading, Research, and Media Literacy

### 91.1 Plain-language explanation

The library becomes the knowledge heart of the school.

It combines books, digital material, local history, research support, quiet study, creative spaces, and information literacy.

A qualified librarian helps learners find reliable knowledge and become independent readers and researchers.

### 91.2 Technical explanation

Knowledge Commons is a federated physical-digital library service connected to ScholaGraph and the Knowledge Orchestration Engine.

It maintains catalog, rights, provenance, circulation, availability, accessibility, curriculum links, archival value, and privacy boundaries.

It does not turn reading choices into behavioral or personality profiles.

### 91.3 Capability map

| Capability | Plain-language purpose | Technical function |
|---|---|---|
| **Unified Discovery** | Searches books, articles, media, equipment, and approved sources together | Federated catalog and retrieval with format, language, reading level, license, authority, and accessibility filters |
| **Reading Pathways** | Helps learners find books they may enjoy and understand | Librarian- and learner-controlled recommendations; opt-in and explainable; no fixed ability label |
| **Research Desk** | Helps learners ask better questions and verify sources | Query planning, source comparison, citation, contradiction, currentness, and evidence-packet workflow |
| **Media and AI Literacy Lab** | Teaches learners to detect weak, manipulated, or AI-generated information | Guided verification tasks, provenance checks, lateral reading, image/media analysis, and AI disclosure |
| **Curriculum Collections** | Prepares reliable materials for lessons and projects | Versioned, licensed, accessible collection packs linked to curriculum and competencies |
| **Inclusive Formats** | Makes knowledge available in useful forms | Large print, audio, braille-ready, captions, easy-language, translation, alternative input, and assistive-technology metadata |
| **Quiet and Collaborative Zones** | Gives learners different places to work | Reservation, capacity, accessibility, noise policy, and safeguarding rules without continuous tracking |
| **Archives and Memory** | Protects school and community history | Governed archive with retention, consent, rights, description, and public/private collections |
| **Interlibrary and Community Link** | Extends access beyond one school | Standardized request, loan, rights, logistics, and partner agreement workflow |
| **Library Maker Resources** | Shares cameras, kits, instruments, tools, and media equipment | Catalog, competency prerequisites, booking, condition, training, custody, and maintenance integration |

### 91.4 Librarian workspace

The librarian can:

- curate and withdraw resources;
- create research and reading pathways;
- see circulation needs at an appropriate aggregate level;
- manage licenses and accessible formats;
- build curriculum collections with teachers;
- teach information, media, and AI literacy;
- quarantine outdated, unsafe, or rights-infringing content;
- request expert review;
- manage archives and community partnerships.

The librarian cannot inspect a learner's private search or reading history without a defined lawful and safeguarding basis.

### 91.5 Reading privacy

The system must:

- minimize search and loan history;
- separate circulation needs from learner evaluation;
- prohibit commercial advertising;
- prohibit inference of religion, health, politics, sexuality, or personality from reading;
- provide a private borrowing route where law and safeguarding allow;
- let learners see recommendation reasons;
- provide a non-personalized discovery mode;
- exclude private reading history from MySAGA by default.

### 91.6 Research workflow

`Question → Scope → Search plan → Diverse sources → Authority and currentness check → Contradiction review → Evidence packet → Creation → Citation → Reflection`.

The workflow includes a deliberate point where learners work without generative AI.

### 91.7 Service evaluation

Measure:

- inclusive access and opening availability;
- collection relevance and diversity;
- successful resource discovery;
- reading participation by choice and programme;
- information-literacy growth;
- curriculum support response time;
- accessible-format coverage;
- overdue and loss patterns without public shaming;
- license and rights compliance;
- privacy incidents;
- learner and teacher experience.

### 91.8 Acceptance gates

- Physical and digital resources use one recognizable discovery layer.
- Search and reading privacy pass child-rights review.
- Accessible formats and assistive technologies are tested.
- Outdated or superseded sources are visibly managed.
- Recommendations are optional and explainable.
- Offline catalog, checkout, and research packs work.
- Librarian authority is encoded.
- Library history is not used for hidden profiling.

## 92. Nourish — School Food, Canteen, and Food Learning System

### 92.1 Plain-language explanation

Nourish helps the school serve safe, healthy, inclusive meals without embarrassing children who need support.

It handles menus, ingredients, allergies, cultural and religious needs, ordering, stock, waste, and food learning.

Food and medical decisions remain with qualified humans.

### 92.2 Technical explanation

Nourish is a food-service operations, safety, procurement, entitlement, sustainability, and education domain.

It maintains ingredient and allergen provenance, menu versions, supplier lots, preparation controls, temperature and hygiene records, stock, meal counts, anonymized subsidy tokens, incident workflows, and audit evidence.

It is not a nutrition-diagnosis system.

### 92.3 Capability map

| Capability | Plain-language purpose | Technical function |
|---|---|---|
| **Menu Studio** | Builds clear menus that work for the school community | Versioned menu plan with nutrition policy, allergens, culture, religion, availability, cost, season, and waste constraints |
| **Allergen Safety Gate** | Prevents unsafe meals from reaching a learner | Verified ingredient-allergen graph, learner safety token, cross-contact controls, substitution gate, and human confirmation |
| **Meal Access Wallet** | Lets every eligible child receive a meal privately | Purpose-limited entitlement token separated from public queues and learner profiles |
| **Kitchen Production Board** | Shows staff what to prepare safely and when | Batch, recipe, quantity, equipment, staff, temperature, timing, substitution, and completion states |
| **Supplier and Lot Traceability** | Finds where food came from and what was used | Supplier approval, item, lot, receipt, expiry, recall, and consumption linkage |
| **Stock and Waste Loop** | Reduces shortages and unnecessary waste | Forecast, inventory, expiry, donation or disposal policy, waste category, and improvement analytics |
| **Food Learning Studio** | Teaches cooking, food systems, budgeting, culture, and sustainability | Curriculum-linked practical sessions with safety, equipment, accessibility, and observed competence |
| **Family Menu Portal** | Gives families clear, usable information | Multilingual menus, allergens, changes, feedback, and contact route without exposing other learners |
| **Emergency Food Continuity** | Keeps safe food available during disruption | Offline menus, supplier alternatives, dietary safety list, manual tokens, and emergency stock plan |

### 92.4 Allergen and dietary safety workflow

1. An authorized human verifies the learner's safety requirement.
2. The system creates a minimum-disclosure meal safety token.
3. The kitchen sees only the information required to prepare and serve safely.
4. Every ingredient and substitution is checked against the active menu version.
5. A conflict blocks service of that item and requires a qualified human decision.
6. The learner receives a safe alternative without public disclosure or stigma.
7. Incidents trigger emergency response, lot traceability, family communication, and review.

### 92.5 Food equity and dignity rules

- Free or subsidized meals must use the same visible service path where feasible.
- No public balance, debt, or eligibility display is permitted.
- A child is not denied a safe basic meal because a digital system is offline.
- Cultural and religious inclusion is supported without inferring beliefs.
- Menus include reasonable accessible eating options.
- Learner feedback is welcomed but cannot override food safety.
- Marketing unhealthy products to learners through the system is prohibited.

### 92.6 Food education

Food becomes a cross-disciplinary learning environment.

Possible learning includes:

- cooking and hygiene;
- mathematics and budgeting;
- chemistry and food transformation;
- biology and nutrition literacy;
- agriculture and seasonality;
- culture and family traditions;
- supply chains and labor;
- sustainability and waste;
- entrepreneurship and hospitality;
- critical evaluation of food claims.

Learners may contribute to menus or gardens only within food-safety, labor, and safeguarding rules.

### 92.7 Service evaluation

Measure:

- meal availability;
- verified allergen conflicts prevented;
- food-safety incidents and response;
- healthy-policy conformance;
- participation without stigma;
- cultural and accessibility coverage;
- procurement reliability;
- stockouts;
- waste by category;
- learner and family experience;
- practical food-literacy outcomes;
- cost per safe meal with context.

No body weight, calorie behavior, or food choice is used to rank or shame learners.

### 92.8 Acceptance gates

- Ingredient, allergen, substitution, and lot traceability work end to end.
- A conflicting substitution fails closed.
- Offline meal and allergy safety operation is tested.
- Entitlement remains private.
- A safe basic meal remains available during system outage.
- Menus are multilingual and accessible.
- Food-safety and nutrition professionals approve applicable policy.
- Relevant Belgian and EU food law is reviewed before deployment.

## 93. MoveForge — Movement, Physical Education, Sport, and Active Life

### 93.1 Plain-language explanation

MoveForge helps every learner move, play, train, and develop physical confidence.

It includes daily movement, quality physical education, sport, dance, outdoor activity, and clubs.

It celebrates personal development and teamwork.

It does not compare bodies or punish learners who need adaptations.

### 93.2 Technical explanation

MoveForge is a programme, scheduling, participation, safety, equipment, venue, evidence, and inclusion domain.

It supports curricular physical education and optional sport while separating health or accessibility data from public performance views.

### 93.3 Capability map

| Capability | Plain-language purpose | Technical function |
|---|---|---|
| **Daily Movement Planner** | Protects regular movement across the school day | Schedule constraints for active breaks, outdoor time, travel, and sedentary-load reduction |
| **Quality PE Studio** | Plans inclusive physical learning | Curriculum, progression, lesson, equipment, space, safety, adaptation, and evidence workflow |
| **Sport and Club Manager** | Organizes teams, individual sports, dance, and recreation | Registration, capacity, eligibility, consent, schedule, venue, staff, transport, and communication |
| **Participation Plan** | Gives each learner a safe and meaningful route | Minimum-disclosure accessibility, adaptation, preference, confidence, and review record |
| **Skill Progress Map** | Shows personal physical development | Criterion-referenced evidence without public rank or body metrics |
| **Equipment and Venue Safety** | Keeps spaces and equipment ready | Inspection, reservation, defect, maintenance, weather, capacity, and closure states |
| **Competition and Fair Play** | Supports healthy competition and teamwork | Rules, age or category policy, safeguarding, officials, incidents, conduct, and reflection |
| **Return-to-Participation Workflow** | Helps a learner return safely after injury or interruption | Qualified approval, phased plan, restrictions, review, and minimum disclosure |
| **Community Activity Link** | Connects learners to accessible local opportunities | Approved partner, safeguarding, cost, transport, accessibility, and referral workflow |

### 93.4 Participation model

MoveForge aims for:

- frequent movement;
- varied activities;
- inclusive quality physical education;
- student voice and enjoyment;
- motor and sport skill development;
- cooperation and fair play;
- individual challenge;
- safe competition;
- active travel where feasible;
- lifelong physical confidence.

The school sets locally lawful targets.

Global guidance is an input, not an automated prescription for an individual child.

### 93.5 Evaluation rules

Physical education evidence may include:

- safe preparation;
- technique against defined criteria;
- tactical understanding;
- teamwork;
- persistence and reflection;
- personal goal progress;
- ability to adapt;
- knowledge of health, training, and recovery.

The system must not grade:

- body shape;
- weight;
- biometric attractiveness;
- disability;
- puberty timing;
- comparative speed or strength where these are not valid curriculum constructs;
- willingness to disclose private health data.

### 93.6 Safety and safeguarding

- Qualified humans approve participation restrictions.
- Medical diagnosis is outside MoveForge.
- Dressing-room and changing-area privacy is protected.
- No camera-based body or emotion analysis is permitted.
- Staff-to-learner ratios and supervision rules are enforced.
- Heat, cold, air quality, weather, surface, and equipment risks can pause activity.
- Emergency contact and action plans are available offline.
- Travel and competition partners require safeguarding checks.

### 93.7 Service evaluation

Measure:

- inclusive participation;
- activity variety;
- quality PE delivery;
- avoidable exclusion gaps;
- safety incidents and response;
- equipment and venue readiness;
- learner enjoyment and agency;
- progress against personal and curriculum criteria;
- teacher and coach workload;
- club access by cost, transport, gender, disability, and other lawful equity dimensions;
- sedentary-load reduction at programme level.

### 93.8 Acceptance gates

- Every activity has an accessible participation route or a documented justified limitation.
- Health details are minimized.
- Equipment defects automatically block booking when safety-critical.
- Weather and venue closures work offline.
- No body ranking or emotion analysis exists.
- Curricular PE and optional sport remain distinguishable.
- Safeguarding, consent, transport, and emergency workflows pass.

## 94. WorldLab — Visits, Fieldwork, Scouting, Camps, Exchanges, and Community Learning

### 94.1 Plain-language explanation

WorldLab lets learners learn from the real world.

They can visit museums, nature, farms, laboratories, companies, courts, public services, universities, cultural sites, and community organizations.

They can also join safe scouting, fieldcraft, camping, service, and outdoor challenges.

Every experience has a learning purpose, an inclusion plan, and a safety plan.

### 94.2 Technical explanation

WorldLab is an external-learning lifecycle service.

It manages partner approval, educational purpose, risk, safeguarding, consent, accessibility, cost, transport, staffing, communication, offline field packs, minimal check-ins, evidence capture, incidents, and post-activity review.

### 94.3 Experience families

| Family | Plain-language purpose | Examples |
|---|---|---|
| **Place Visit** | Learn directly from a place or institution | Museum, court, council, port, factory, farm, hospital education centre |
| **Field Investigation** | Observe, measure, interview, and collect evidence | Ecology, geography, history, community research, science sampling |
| **Workplace and Expert Day** | See professional practice and pathways | Job shadow, workshop, university lab, skilled trade, public service |
| **Community Service** | Contribute to a real need with reflection | Environmental care, intergenerational project, local archive, civic improvement |
| **Scouting and Fieldcraft** | Build outdoor competence, teamwork, service, and responsibility | Navigation, campcraft, first aid, knots, shelter, safe fire practice where lawful, environmental care |
| **Camp or Residential** | Develop independence and community over a longer experience | Outdoor centre, cultural residency, science camp, arts camp |
| **Exchange and Collaboration** | Learn with another school or community | Language exchange, joint project, virtual-to-physical collaboration |
| **Expedition Challenge** | Plan and complete a purposeful journey or mission | Walking, cycling, mapping, conservation, research, service |

### 94.4 WorldLab lifecycle

`Idea → Educational purpose → Partner due diligence → Inclusion and cost plan → Risk assessment → Safeguarding plan → Consent and learner preparation → Logistics → Live operation → Incident handling → Return and reconciliation → Reflection → Evidence review → Partner and programme evaluation`.

### 94.5 Expedition packet

Every approved experience has:

- learning goals;
- itinerary and alternatives;
- responsible leader;
- authorized adults and roles;
- participant list with minimum necessary information;
- consent status;
- accessibility and participation plan;
- risk and control register;
- emergency contacts and procedures;
- transport and meeting points;
- food, water, medication, and allergy arrangements as applicable;
- weather and cancellation thresholds;
- communication plan;
- offline maps and reference material;
- check-in method;
- lost-person and separation protocol;
- safeguarding and reporting route;
- evidence and reflection plan;
- data deletion date.

### 94.6 Scouting and fieldcraft programme

The school programme may be independent or delivered with approved scouting and outdoor partners.

It can include:

- navigation and map reading;
- teamwork and leadership rotation;
- camp setup and care;
- first-aid awareness and qualified instruction;
- environmental stewardship;
- weather awareness;
- safe tools and knots;
- cooking outdoors under approved controls;
- service projects;
- emergency communication;
- reflection and responsibility.

It must not include unsupervised high-risk survival challenges, weapons training, humiliating initiation, deprivation, secret rituals, or coercive participation.

### 94.7 Tracking boundary

Continuous person tracking is not the default.

Use the least intrusive method that meets the safety need.

Possible methods include:

- scheduled group check-ins;
- staff headcounts;
- temporary device location during a defined higher-risk activity;
- offline QR or NFC checkpoints;
- emergency-only location sharing.

Temporary location data expires after reconciliation unless an incident requires lawful preservation.

### 94.8 Equity and inclusion

- Cost must not silently exclude learners.
- An accessibility plan is required before approval.
- Families receive clear multilingual information.
- A learner who cannot join receives an equivalent meaningful route, not punishment or filler work.
- Partner selection includes physical, cultural, religious, gender, and disability inclusion.
- Participation data is reviewed for structural exclusion.

### 94.9 WorldLab evaluation

Measure:

- learning-goal evidence;
- transfer to classroom or project work;
- learner agency and reflection;
- participation equity;
- accessibility success;
- partner quality;
- safety incidents and near misses;
- cost and staff burden;
- community contribution;
- repeated educational value;
- evidence quality.

Outdoor adventure claims must remain cautious because academic-impact evidence is context-dependent and limited.

### 94.10 Acceptance gates

- No experience can move to live operation without named human approval.
- Risk, safeguarding, accessibility, consent, transport, food, and emergency plans are complete.
- Offline field operation is tested.
- Temporary location data expires.
- Equivalent routes exist for non-participation.
- Partner credentials and insurance or legal requirements are checked.
- Incidents can freeze future bookings pending review.
- Reflection and learning evidence are captured without forcing private disclosure.

## 95. Campus Steward — Facilities, Maintenance, Environment, and Continuity

### 95.1 Plain-language explanation

Campus Steward helps maintenance and school staff keep buildings safe, clean, accessible, comfortable, and ready for learning.

It tracks repairs, inspections, air, water, sanitation, energy, rooms, equipment, and emergency work.

It watches the building.

It does not watch people.

### 95.2 Technical explanation

Campus Steward is an asset, preventive-maintenance, work-order, inspection, environment, contractor, stock, compliance-evidence, and continuity domain.

Sensors are limited to building and environmental purposes.

Person identification, movement profiling, and worker productivity scoring are prohibited.

### 95.3 Capability map

| Capability | Plain-language purpose | Technical function |
|---|---|---|
| **Asset Registry** | Knows what the school owns and where it belongs | Asset identity, location, owner, condition, warranty, manual, criticality, and lifecycle |
| **Preventive Maintenance Planner** | Fixes important things before they fail | Risk-based schedule, task, competence, part, evidence, recurrence, and escalation |
| **Work Order Board** | Organizes repairs and keeps requesters informed | Intake, triage, safety state, owner, SLA, parts, access, completion, verification, and feedback |
| **Inspection and Compliance Register** | Keeps required checks visible | Inspection type, authority, interval, evidence, defect, remediation, and sign-off |
| **Indoor Environment Monitor** | Helps keep air, temperature, light, noise, and moisture suitable | Environmental sensor, threshold, calibration, room, alert, response, and trend without person tracking |
| **WASH and Sanitation Monitor** | Protects water, toilets, hygiene, and menstrual-health facilities | Availability, accessibility, supply, inspection, defect, cleaning, and response records |
| **Cleaning and Hygiene Planner** | Makes cleaning work clear and verifiable | Zone, method, schedule, hazard, supply, completion, exception, and quality sampling |
| **Accessibility Barrier Desk** | Finds and removes physical access barriers | Report, affected route, priority, temporary adjustment, remediation, and user verification |
| **Energy and Sustainability View** | Reduces waste while protecting learning conditions | Meter, baseline, weather normalization, project, cost, emissions factor, and comfort guardrail |
| **Contractor Access** | Lets external workers enter safely and temporarily | Approval, qualification, induction, escort, work zone, credential, hazard, and expiry |
| **Emergency Continuity Board** | Keeps critical services running during disruption | Critical asset, dependency, spare, manual procedure, contact, recovery target, and test result |

### 95.4 Work-order priorities

| Priority | Example | Response principle |
|---|---|---|
| `P0_LIFE_SAFETY` | Fire, gas, electrical, structural, water contamination | Isolate, alert, evacuate if required, activate emergency authority |
| `P1_ACCESS_OR_HEALTH` | Blocked accessible route, sanitation failure, severe air or mould concern | Provide immediate safe alternative and urgent repair |
| `P2_LEARNING_CONTINUITY` | Classroom, network, heating, lab, kitchen, or security failure | Restore or relocate within defined service objective |
| `P3_DEGRADATION` | Non-critical defect likely to worsen | Schedule risk-based corrective work |
| `P4_IMPROVEMENT` | Comfort, efficiency, appearance, or enhancement | Prioritize through improvement portfolio |

### 95.5 Environmental alerts

An alert must show:

- sensor and calibration status;
- location;
- threshold source;
- duration and severity;
- likely confidence;
- immediate safe action;
- responsible role;
- verification method;
- return-to-use authority.

Sensor readings do not replace professional inspection.

### 95.6 Learner involvement

Learners may participate in supervised campus projects such as:

- energy audits;
- biodiversity mapping;
- repair design;
- accessibility walks;
- air and comfort investigations;
- school garden and water projects;
- circular economy and material reuse.

They must not perform hazardous or regulated work.

### 95.7 Service evaluation

Measure:

- safety-critical overdue work;
- repeat failures;
- preventive versus emergency work;
- repair response and verification;
- room and equipment availability;
- accessible-route uptime;
- air, water, sanitation, moisture, and comfort exceptions;
- cleaning quality and supply continuity;
- energy use with comfort safeguards;
- contractor compliance;
- maintenance workload and skill gaps;
- emergency recovery test results.

### 95.8 Acceptance gates

- Critical assets and dependencies are inventoried.
- Safety priorities fail closed.
- Environmental sensors cannot identify people.
- Calibration and sensor failure are visible.
- WASH and accessibility checks are included.
- Manual work orders and emergency procedures function offline.
- Contractors receive expiring access.
- Return-to-use requires authorized human verification.

## 96. Belonging and Attendance Navigator

### 96.1 Plain-language explanation

Attendance problems are often signs that something is blocking a learner.

The navigator helps the school notice patterns, listen, and organize support.

It does not label a child as lazy, risky, or disobedient.

### 96.2 Technical explanation

The navigator combines lawful attendance records, contextual input, learner and family contact, support actions, accessibility, transport, safety, and review.

It uses rules for obligation and timely contact.

It does not use opaque risk scoring or automated discipline.

### 96.3 Support workflow

1. Confirm that attendance data is accurate.
2. Check immediate safety and statutory duties.
3. Contact the learner and family through an appropriate human route.
4. Ask about barriers rather than assuming motivation.
5. Review learning, belonging, health-service, transport, accessibility, bullying, timetable, family, and environmental factors only within authorized roles.
6. Agree a support and return plan.
7. Provide one accountable coordinator.
8. Review whether the plan helps.
9. Escalate to qualified services where required.
10. Close or adapt the plan with an explanation.

### 96.4 Prohibited inferences

The system must not infer:

- criminality;
- neglect;
- mental disorder;
- family fitness;
- motivation;
- future dropout;
- discipline outcome;
- immigration or social-service risk;

from attendance patterns alone.

### 96.5 Evaluation

Measure:

- data accuracy;
- time to respectful contact;
- support-plan access;
- learner and family voice;
- recurring structural barriers;
- safe return and sustained participation;
- unequal response patterns;
- unnecessary escalation;
- statutory compliance;
- learner belonging;
- staff workload.

### 96.6 Acceptance gates

- Attendance correction works before escalation.
- Human contact precedes non-emergency consequential action.
- No hidden dropout or discipline score exists.
- Learner and family explanations are captured with privacy controls.
- Support can coordinate with transport, accessibility, timetable, and safeguarding roles.
- Legal absence and attendance rules are configurable by jurisdiction.

## 97. Arts, Culture, Clubs, Enterprise, and Student Democracy

### 97.1 Plain-language explanation

A complete school needs music, art, design, theatre, culture, clubs, student ideas, enterprise, and democratic participation.

These are not decorations around “real” learning.

They are ways to think, create, cooperate, communicate, and belong.

### 97.2 Technical explanation

This domain manages programme proposals, staff or partner approval, spaces, equipment, safeguarding, budgets, participation, public events, intellectual property, evidence, and evaluation.

### 97.3 Capability families

| Capability | Purpose | Core control |
|---|---|---|
| **Arts and Performance Studio** | Music, visual art, craft, design, theatre, film, writing, and exhibition | Creator rights, venue, equipment, accessibility, audience, and publication consent |
| **Club Foundry** | Learner- and staff-created interest groups | Charter, sponsor, safeguarding, budget, schedule, inclusion, and review |
| **Student Democracy Forum** | Gives learners real, bounded decision influence | Proposal, debate, vote or deliberation, authority boundary, response, and follow-up |
| **Enterprise Studio** | Lets learners create ethical products and services | Purpose, budget, customer, risk, tax/legal review, finance controls, labor boundary, and learning evidence |
| **Community Culture Calendar** | Connects school events with families and community | Event, capacity, language, access, consent, partner, safety, and communication |
| **Publication and Media Desk** | Supports school journalism, podcast, video, and public communication | Editorial responsibility, fact check, rights, privacy, moderation, archive, and correction |

### 97.4 Student voice rule

Learner participation must be meaningful.

For every formal proposal, the school states:

- what learners can decide;
- what learners can influence;
- what is legally or safely fixed;
- who responds;
- when the response is due;
- why the final decision was made.

### 97.5 Creator and publication rights

- Learners retain recognized authorship.
- Licenses are explained in age-appropriate language.
- Public publication is never assumed from school participation.
- Faces, voices, names, locations, and sensitive context require separate controls.
- AI-generated or transformed content is labeled as required.
- Correction and takedown routes are available.
- Revenue-generating work requires a separate ethical and legal framework.

### 97.6 Acceptance gates

- Every programme has a visible owner, inclusion rule, and safeguarding state.
- Student democracy shows real authority boundaries and responses.
- Publication consent is granular.
- Creator rights and AI contribution are preserved.
- Financial controls exist for enterprise activity.
- Learners can participate without paying where equity policy requires.
- Clubs cannot operate as hidden advertising or recruitment channels.

## 98. Complete Role Workspaces and Authority Segmentation

### 98.1 Workspace design rule

Every role sees a small, recognizable workspace.

The first screen answers:

1. What needs attention?
2. What can I decide?
3. What needs another person?
4. What changed?
5. What can I do if the system is wrong or offline?

No workspace should expose the full system merely because the data is technically available.

### 98.2 Workspace atlas

| Workspace | Plain-language purpose | Primary capabilities |
|---|---|---|
| **Learner Home** | See today's learning, goals, evidence, choices, and help | Day plan, MySAGA, tasks, AI mode, evidence, feedback, rights, portfolio, accessibility controls |
| **Teacher Studio** | Plan, teach, assess, and support | Today Board, lessons, groups, TwinTeach, evidence review, feedback, planning, workload, research |
| **Family Portal** | Understand progress and support without invading privacy | Goals, agreed evidence, attendance communication, menus, events, forms, rights, messages |
| **Mentor Desk** | Support a defined pathway or project | Goals, approved context, session notes, evidence submission, safeguarding, schedule |
| **Learning Support Desk** | Coordinate accessibility and approved support | Access plan, accommodation, review, resource, case coordination, integrity checks |
| **Librarian Commons** | Run reading, research, resources, and knowledge access | Catalog, circulation, curation, research desk, licenses, archives, accessible formats |
| **Kitchen and Food Board** | Prepare and serve safe meals | Menus, batches, allergens, stock, lots, substitutions, hygiene, incidents, waste |
| **Sport and Movement Board** | Run PE, activity, clubs, venues, and participation | Schedule, lesson, club, consent, participation plan, equipment, weather, incident |
| **WorldLab Console** | Plan and run safe outside-school learning | Partner, purpose, risk, consent, accessibility, transport, field pack, check-in, review |
| **Campus Steward Board** | Keep buildings and equipment ready | Assets, work orders, inspections, environment, cleaning, contractors, continuity |
| **Administration Hub** | Coordinate school services | Schedule, room, transport, visitor, staffing continuity, procurement, communications, cases |
| **Safeguarding Console** | Manage authorized safety concerns | Restricted case intake, triage, action, referral, evidence, access, retention, review |
| **School Leadership Room** | Run the school and improvement portfolio | Balanced scorecard, capacity, incidents, resources, pilots, risks, decisions |
| **Board Evidence Room** | Make strategic decisions from bounded evidence | Decision packets, trends, risk, equity, finance, governance, approvals, follow-up |
| **DPO and Rights Console** | Protect data and handle rights | Processing register, DPIA, request, access, correction, deletion, breach, vendor review |
| **AI and Model Registry** | Know which AI exists and why | Use case, model, data, owner, risk, evals, change, incident, kill switch, expiry |
| **Auditor Workspace** | Inspect evidence without broad operational power | Read-only scoped evidence, sampling, export, finding, response, closure |
| **Research Workspace** | Evaluate whether changes work | Protocol, cohort, consent or basis, measures, harm, analysis, preregistration, publication |

### 98.3 Authority matrix

`A` = accountable final authority.

`D` = may decide within policy.

`C` = consulted.

`V` = view only when authorized.

`—` = no routine access.

| Decision or data | Learner | Teacher | Family | Domain staff | Leader | Board | DPO/auditor |
|---|---:|---:|---:|---:|---:|---:|---:|
| Personal goal proposal | D | C | C by agreement/age | — | — | — | — |
| Official mastery judgment | V/challenge | A/D | V as lawful | — | C | — | V |
| MySAGA correction | D/request | D | Request | — | Escalation | — | V |
| Accessibility decision | C | C | C | A/D qualified role | Escalation | — | V |
| Meal safety requirement | C | Minimum view | C | A/D qualified food/safety role | Escalation | — | V |
| Sport participation restriction | C | Minimum view | C | A/D qualified role | Escalation | — | V |
| Expedition approval | C | D | Consent role | C/D | A | Oversight | V |
| Maintenance return-to-use | — | Report/view | — | D qualified role | A for major closure | Oversight | V |
| AI activation in learning | V | D within policy | Notice/rights | — | A | Policy oversight | Review |
| High-impact AI use | V/rights | C | Notice/rights | — | C | Governance approval | A legal/assurance review as assigned |
| Strategic school decision | Voice | C | Voice | C | Proposal/execution | A | Review |

Local law and governance may assign authority differently.

The stricter valid rule applies.

### 98.4 Break-glass access

Emergency access requires:

- a defined emergency purpose;
- a named human;
- the smallest possible scope;
- strong authentication;
- a visible reason;
- time-limited access;
- immutable access receipt;
- post-event review;
- notification where lawful and safe.

Break-glass access must not become an everyday shortcut.

### 98.5 Workspace acceptance gates

- Each role completes its common tasks without horizontal navigation overload.
- Plain-language and professional views remain aligned.
- Denied actions explain the authority boundary.
- Offline and print fallbacks exist for critical work.
- Screen-reader, keyboard, voice, touch, and cognitive-access testing pass.
- Cross-role data leakage tests pass.
- Temporary and substitute access expires.

## 99. Version 13 Domain and Technical Architecture

### 99.1 Architectural position

Version 13 preserves the federated local-first school cell.

New domains are bounded services connected through the existing Guardian Policy Engine, Evidence Spine, identity, rights, event, and interoperability layers.

They may initially be modules inside a modular monolith.

They may later become separate services only when scale, security, availability, or organizational ownership justifies the cost.

### 99.2 Service catalog

| Bounded context | Core services | Data owner |
|---|---|---|
| Learner Intelligence | MySAGA State, Goal, Pathway, Agency, Evidence Projection | Learner-record authority with learner rights |
| Assessment | Assessment, Rubric, Evidence Claim, Moderation, Appeal, Qualification Bridge | Academic authority |
| Cognitive Independence | AI Mode Policy, Assistance Ladder, Independent Check, Contribution Record | Academic and AI-governance authorities |
| Teacher Practice | Planning, Live Support, Workload, Professional Inquiry, Knowledge Commons | School professional authority |
| Library | Catalog, Circulation, Collection, Research Desk, Archive, License | Library authority |
| Food | Menu, Ingredient, Allergen, Entitlement Token, Production, Stock, Lot, Incident | Food-service authority with health-data controls |
| Movement and Sport | PE Programme, Club, Participation, Venue, Equipment, Event | Physical-education and sport authority |
| WorldLab | Partner, Expedition, Risk, Consent, Transport, Field Operation, Review | School trip and safeguarding authority |
| Campus | Asset, Work Order, Inspection, Environment, Cleaning, Contractor, Continuity | Facilities authority |
| Attendance and Belonging | Attendance Record, Contact, Barrier, Support Plan, Review | School attendance authority |
| Administration | Schedule, Resource, Transport, Visitor, Procurement, Communication, Service Case | School administration authority |
| Leadership | Decision Packet, Improvement Initiative, Scorecard, Risk, Follow-up | Leadership and board authority |

### 99.3 Canonical entities

Version 13 adds:

- `EvidenceClaim`;
- `EvidenceQualityVector`;
- `MasteryAssertion`;
- `AIModeDeclaration`;
- `IndependentVerification`;
- `RetentionCheck`;
- `TransferDemonstration`;
- `ModerationCase`;
- `AssessmentAppeal`;
- `MySAGARecommendation`;
- `GoalContract`;
- `LibraryResource`;
- `CirculationTransaction`;
- `ResearchEvidencePacket`;
- `MenuVersion`;
- `IngredientLot`;
- `AllergenConflict`;
- `MealSafetyToken`;
- `MealEntitlementToken`;
- `SportsProgramme`;
- `ParticipationPlan`;
- `VenueInspection`;
- `ExpeditionPlan`;
- `PartnerApproval`;
- `RiskControl`;
- `ConsentRecord`;
- `FieldCheckIn`;
- `CampusAsset`;
- `WorkOrder`;
- `EnvironmentalReading`;
- `InspectionRecord`;
- `AttendanceCorrection`;
- `SupportPlan`;
- `BoardDecisionPacket`;
- `ImprovementExperiment`.

### 99.4 Event catalog

Events use past-tense facts and contain no unnecessary personal data.

| Domain | Example events |
|---|---|
| Assessment | `evidence.captured`, `claim.reviewed`, `mastery.approved`, `moderation.opened`, `appeal.resolved` |
| AI learning | `ai_mode.assigned`, `assistance.provided`, `independent_check.scheduled`, `model.paused` |
| MySAGA | `goal.proposed`, `recommendation.offered`, `recommendation.rejected`, `state.corrected` |
| Library | `resource.catalogued`, `loan.created`, `source.quarantined`, `collection.published` |
| Food | `menu.approved`, `allergen_conflict.detected`, `substitution.blocked`, `lot.recalled` |
| Sport | `programme.published`, `participation_plan.approved`, `venue.closed`, `incident.recorded` |
| WorldLab | `expedition.approved`, `consent.recorded`, `group.checked_in`, `expedition.closed` |
| Campus | `asset.inspected`, `work_order.opened`, `environment.alerted`, `room.returned_to_use` |
| Attendance | `attendance.corrected`, `support_contact.completed`, `plan.reviewed` |
| Leadership | `decision.proposed`, `pilot.authorized`, `stop_condition.triggered`, `decision.reviewed` |

### 99.5 API profiles

Representative endpoints:

```text
POST   /v1/assessments
POST   /v1/evidence-claims
POST   /v1/mastery-assertions/{id}/reviews
POST   /v1/appeals
GET    /v1/mysaga/{learner_id}/state
POST   /v1/mysaga/{learner_id}/corrections
POST   /v1/ai-mode-assignments
POST   /v1/independent-checks
GET    /v1/library/discovery
POST   /v1/library/loans
POST   /v1/menus/{id}/approve
POST   /v1/allergen-checks
POST   /v1/sport-programmes
POST   /v1/expeditions
POST   /v1/expeditions/{id}/check-ins
POST   /v1/work-orders
POST   /v1/assets/{id}/inspections
POST   /v1/attendance-corrections
POST   /v1/board-decisions
```

Every mutation requires:

- authenticated actor;
- tenant and purpose scope;
- policy decision;
- idempotency key;
- expected version for conflict-sensitive records;
- reason for consequential changes;
- audit receipt;
- safe error response.

### 99.6 Data classification additions

| Class | Examples | Default rule |
|---|---|---|
| Public | Published menu, public event, approved public collection | Publish only through explicit workflow |
| Internal operational | Room booking, inventory, general work order | Role-limited; short operational retention |
| Personal education | Evidence, mastery, feedback, goals | Purpose-limited; learner rights; no broad analytics |
| Special-category or highly sensitive | Allergy, health restriction, disability support | Minimum disclosure; strict role separation; human verification |
| Safeguarding restricted | Child-protection case, emergency evidence | Separate security domain and access governance |
| Confidential workforce | Staff absence, employment record | Separate HR authority; excluded from learner analytics |
| Security secret | Credentials, keys, recovery material | Dedicated secret management; never in evidence logs |

### 99.7 Retention principles

No domain receives a universal retention period from this blueprint.

The retention engine uses:

- legal requirement;
- educational purpose;
- safety purpose;
- contractual need;
- learner age and rights;
- incident hold;
- appeal period;
- archival value;
- deletion or anonymization feasibility.

Examples:

- temporary expedition location data: delete after reconciliation unless an incident hold applies;
- failed generic recommendations: retain only enough for quality evaluation, then aggregate or delete;
- meal entitlement presentation: do not expose or retain at the serving point beyond necessity;
- raw environmental sensor data: retain by building purpose, not person profile;
- private library search: do not retain by default beyond service need;
- learner evidence: retain according to educational and qualification policy with correction and export rights.

### 99.8 Offline operation

Each new domain defines an offline minimum.

| Domain | Offline minimum |
|---|---|
| Assessment | Tasks, rubrics, evidence capture, review queue, later signed synchronization |
| MySAGA | Current goals, approved state, local evidence, correction request, no cloud dependency |
| Library | Catalog subset, checkout, returns, offline resources, later reconciliation |
| Food | Menu, allergen-safe alternatives, entitlement fallback, batch and incident records |
| Sport | Rosters, participation restrictions, venue state, emergency contacts, incident capture |
| WorldLab | Itinerary, risk, consent state, maps, contacts, group check-ins, emergency protocol |
| Campus | Asset register, emergency work orders, critical procedures, contact tree |
| Attendance | Roster, correction, contact task, later synchronization |
| Board | Read-only last approved packets and emergency authorities; no offline silent decisions |

### 99.9 Security extensions

Threat models must include:

- manipulation of mastery evidence;
- answer leakage and assessment exfiltration;
- falsified AI contribution records;
- library history profiling;
- allergen or menu tampering;
- meal entitlement exposure;
- unsafe sport or venue status override;
- forged expedition consent or check-ins;
- false environmental sensor alerts;
- contractor credential misuse;
- board dashboard re-identification;
- vendor prompt injection through imported content;
- malicious source or partner documents;
- offline synchronization replay.

### 99.10 Observability

Operational telemetry must reveal service health without reconstructing private lives.

Required signals include:

- request success and latency;
- policy denials by reason category;
- synchronization lag and conflicts;
- stale or unreviewed high-impact records;
- model and source version;
- blocked safety conflicts;
- incident and recovery state;
- accessibility failures;
- rights-request state;
- data-retention job state;
- aggregate workload and queue age.

No raw learner conversation becomes routine observability data.

## 100. Whole-School End-to-End Workflows

### 100.1 Learner begins a new learning cycle

1. The teacher and learner review goals and required foundations.
2. MySAGA shows current evidence and uncertainty.
3. The teacher selects or approves a route.
4. The task receives an AI use mode.
5. Accessibility support is applied.
6. The learner practices with appropriate assistance.
7. Formative evidence informs teaching.
8. The learner completes meaningful performance work.
9. Independent, retention, and transfer checks occur where required.
10. INSIGHT produces an evidence synthesis for human review.
11. The learner receives feedback and may challenge the decision.
12. MySAGA offers several next steps.

### 100.2 Teacher designs and runs a complete lesson

1. Teacher selects curriculum and competency claims.
2. Lesson Studio retrieves approved knowledge and misconceptions.
3. ActivityForge proposes accessible activity variants.
4. Teacher chooses AI modes and independent evidence points.
5. Room, equipment, and library resources are checked.
6. TwinTeach supports the live lesson under teacher control.
7. Activity Conductor manages phases and exceptions.
8. Evidence is captured with provenance.
9. Teacher reviews patterns, not hidden person scores.
10. Feedback and next actions are approved.
11. Resource and workload impact is recorded.

### 100.3 Learner completes an AI-assisted project

1. The project contract defines which AI use is allowed.
2. The learner records human and AI contributions.
3. Sources pass evidence and rights checks.
4. Teacher or mentor reviews milestones.
5. The final artefact is exhibited.
6. The learner explains decisions and verifies AI-produced elements.
7. An independent task checks underlying capability.
8. Group and individual claims are reviewed separately.
9. The learner receives project, collaboration, and independent-capability feedback.

### 100.4 Library research journey

1. Learner defines a question with a teacher or librarian.
2. The Research Desk builds a search plan.
3. The learner uses print, digital, primary, and contextual sources.
4. Contradictions and currentness are checked.
5. A protected human-only reasoning stage occurs.
6. AI may then help compare or critique within the assigned mode.
7. The learner creates and cites the result.
8. The librarian or teacher reviews information-literacy evidence.

### 100.5 Safe meal with an unexpected substitution

1. Supplier or stock change creates a proposed substitution.
2. Nourish compares its verified ingredients with active safety tokens.
3. A conflict blocks the item.
4. Kitchen staff receive a safe alternative route.
5. A qualified human confirms the change.
6. The learner receives a meal without public disclosure.
7. The menu version and traceability record update.
8. Families are informed when required.

### 100.6 Inclusive sport session

1. Teacher selects the learning and participation goals.
2. Venue and equipment pass safety checks.
3. Minimum-disclosure participation plans are applied.
4. Learners choose or receive meaningful role variations.
5. The teacher observes skill, teamwork, and safe practice.
6. An incident pauses activity where necessary.
7. Personal progress and reflection are recorded without body ranking.

### 100.7 WorldLab expedition

1. A teacher proposes a purpose and partner.
2. Partner, risk, safeguarding, inclusion, cost, and transport are reviewed.
3. Families receive clear information and consent where required.
4. Learners prepare knowledge, questions, and field skills.
5. The offline expedition pack is issued.
6. Staff use minimal group check-ins.
7. Incidents follow the approved protocol.
8. On return, people, equipment, costs, and records are reconciled.
9. Temporary tracking data expires.
10. Learners reflect and produce evidence.
11. The partner and programme are evaluated.

### 100.8 Urgent building defect

1. A user or sensor reports a defect.
2. Campus Steward validates source and severity.
3. A safety-critical state closes or isolates the area.
4. School operations relocate affected learning.
5. A qualified person repairs and documents the work.
6. An authorized person verifies return-to-use.
7. Learners and staff receive clear updates.
8. Repeat-failure analysis may create a capital decision packet.

### 100.9 Attendance concern

1. The record is checked and corrected if wrong.
2. A human makes respectful contact.
3. The learner and family describe barriers.
4. Authorized staff coordinate an agreed support plan.
5. Timetable, transport, accessibility, safety, and learning supports are adjusted where justified.
6. Progress is reviewed without punitive prediction.
7. Statutory escalation occurs only through named human authority.

### 100.10 Board approves a school improvement pilot

1. Leadership defines the problem and baseline.
2. The evidence packet includes stakeholder voice and uncertainty.
3. Options include doing nothing.
4. Rights, accessibility, workload, cost, and risk are reviewed.
5. A small reversible pilot is designed.
6. Success, harm, stop, and rollback conditions are approved.
7. The board records its decision and conflicts.
8. Pilot evidence is reviewed every three months.
9. The pilot scales, changes, pauses, rolls back, or stops.

## 101. Whole-School Evaluation and Performance Framework

### 101.1 Plain-language explanation

ScholaForge measures whether the whole school is becoming better for people.

It looks at learning and much more.

It also checks fairness, belonging, teacher conditions, food, physical activity, library access, buildings, safety, cost, and AI quality.

No single number can hide failure in another area.

### 101.2 Scorecard design

Each measure must define:

- purpose;
- owner;
- population and denominator;
- data source;
- validity limitations;
- baseline;
- desired direction;
- review threshold;
- harm threshold;
- equity view;
- review cadence;
- action authority;
- retirement date.

Targets are set after a local baseline.

This blueprint does not invent universal target percentages.

### 101.3 Balanced domains

| Domain | Outcome questions | Example measures | Guardrail |
|---|---|---|---|
| Foundations | Are learners building durable literacy, numeracy, and disciplinary knowledge? | Independent mastery, retention, prerequisite gaps | Do not narrow curriculum to tested items |
| Reasoning and transfer | Can learners explain, solve, and adapt? | Transfer tasks, explanation quality, novel problem performance | Do not replace rich work with generic tests |
| Creation and contribution | Are learners making valuable work? | Projects, revision, exhibitions, community value | Do not reward polish over learning |
| Agency and learning-to-learn | Can learners set, monitor, and revise goals? | Goal quality, strategy use, challenge rights, learner voice | Do not manipulate engagement |
| Equity and accessibility | Does every learner have a workable route? | Opportunity gaps, accommodations, accessible resources, participation | Never use parity alone to conceal low quality |
| Belonging and attendance | Do learners feel known and able to participate? | Belonging evidence, accurate attendance, barrier resolution | No punitive prediction |
| Teacher capacity | Can teachers teach well and sustain the work? | Planning time, collaboration, workload, professional learning, retention context | No productivity ranking |
| Assessment quality | Are judgments valid, fair, and useful? | Moderation, appeals, feedback use, supported-independent gap | No automated final grading |
| Knowledge Commons | Can learners read, research, and access trusted knowledge? | Access, format coverage, research literacy, collection use | Protect reading privacy |
| Food | Are meals safe, healthy, inclusive, and dignified? | Availability, safety, participation, waste, experience | No body or food shaming |
| Movement and sport | Is physical development inclusive and safe? | Quality PE, participation, variety, safety, personal progress | No body ranking |
| WorldLab | Is real-world learning safe, equitable, and meaningful? | Access, evidence, transfer, incidents, partner quality | Do not claim academic impact without evidence |
| Campus | Is the environment safe, accessible, healthy, and reliable? | Critical work, air/WASH exceptions, uptime, recovery | Sensors watch buildings, not people |
| Governance and rights | Are decisions accountable and challengeable? | Rights requests, appeals, incidents, decision follow-through | No secrecy by dashboard |
| AI learning quality | Does AI support genuine human learning? | Independent retention, transfer, answer leakage, overrides, drift | Output quality alone is insufficient |
| Financial sustainability | Can the school sustain the model? | Total cost, avoided duplication, staffing, vendor exposure | Cheapest is not automatically best |
| Environmental sustainability | Is resource use improving without harming conditions? | Energy, waste, food, transport, material reuse | Comfort, safety, and equity remain constraints |

### 101.4 System performance, not person ranking

Operational dashboards answer:

- Where is the process failing?
- Which group lacks opportunity?
- What capacity is missing?
- Which policy creates burden?
- What changed after the intervention?
- What unintended harm appeared?

They do not answer:

- Which child is “worst”?
- Which teacher generates the most clicks or scores?
- Which maintenance worker closes the most tickets?
- Which kitchen worker serves the fastest?
- Which learner moves, speaks, or smiles the most?

### 101.5 Evaluation designs

Use the least burdensome credible design.

Options include:

- pre/post with meaningful comparison;
- staggered rollout;
- matched comparison;
- randomized pilot when ethical and feasible;
- interrupted time series;
- qualitative process study;
- usability and accessibility study;
- workload study;
- incident and near-miss review;
- cost-consequence analysis;
- child-rights impact assessment.

The design must separate implementation failure from theory failure.

### 101.6 Quarterly review cadence

Every active improvement portfolio is reviewed at least every three months.

The review decides:

- continue unchanged;
- adapt;
- expand evidence collection;
- reduce scope;
- pause;
- roll back;
- stop;
- prepare controlled scaling.

Urgent safety, rights, privacy, or validity failures do not wait for the quarterly review.

## 102. Governance, Rights, and Currentness Update — 20 July 2026

### 102.1 Currentness boundary

This section records research status on 20 July 2026.

It is not legal advice.

The legal register must be checked again before procurement, pilot, release, or a material AI change.

### 102.2 EU AI Act status relevant to ScholaForge

The Artificial Intelligence Act remains Regulation (EU) 2024/1689.

Education uses can be high-risk when they concern access, admission, assignment, learning-outcome evaluation, education-level assessment, or prohibited test-monitoring purposes described by the Act.

AI literacy obligations already require operational attention.

Transparency obligations concerning interaction with AI and certain AI-generated content are due to apply from 2 August 2026 under the current Commission communication.

The Commission's current high-risk guidance page states that, following political agreement on the AI Omnibus, high-risk rules for areas including education apply from 2 December 2027.

Because the legislative timetable has changed and guidance may still develop, ScholaForge must not rely on an old static date.

Before release, counsel must verify:

- the enacted and consolidated legal text;
- whether the specific use is an AI system;
- provider and deployer roles;
- whether an Annex III classification applies;
- any exception and its documentation;
- required fundamental-rights impact assessment;
- conformity, registration, logging, information, oversight, and incident duties;
- national competent-authority guidance;
- interaction with GDPR, education, labor, consumer, accessibility, and product rules.

### 102.3 AI use-case tiers

| Tier | Examples | Default posture |
|---|---|---|
| `PROHIBITED_OR_UNACCEPTABLE` | Manipulative child targeting, prohibited emotion recognition, social scoring, exploitative companion behavior | Do not build or activate |
| `HIGH_IMPACT_REVIEW` | Admission, placement, official outcome evaluation, qualification, consequential pathway support | Human decision, legal classification, strict evidence, independent review, no production until authorized |
| `LIMITED_TRANSPARENCY` | Learner or teacher interaction with generative AI, generated content | Clear disclosure, provenance, age-appropriate explanation, control |
| `LOWER_RISK_ASSISTANCE` | Drafting a lesson, translating a non-consequential notice, searching approved resources | Bounded use, human review, data and quality controls |
| `NON_AI_DETERMINISTIC` | Timetable rule, booking conflict, signed workflow state | Standard software governance; do not mislabel as AI |

### 102.4 Child-rights control set

Every child-facing AI use must demonstrate:

- best-interests purpose;
- safety and robustness;
- privacy and data minimization;
- non-discrimination;
- age-appropriate transparency;
- human accountability;
- participation and learner voice;
- inclusion and accessibility;
- AI literacy;
- environmental and supply-chain consideration;
- remedy, correction, and exit.

### 102.5 AI companion boundary

Child-facing assistants must not:

- claim consciousness or human feelings;
- solicit secrecy from trusted adults;
- encourage emotional exclusivity;
- simulate romance or sexual interaction;
- provide diagnosis or therapy;
- pressure continued use;
- use personal vulnerability to increase engagement;
- create a hidden psychological profile;
- become the only route to learning support.

They must:

- identify themselves as AI;
- state their educational purpose;
- make human help visible;
- support stopping and switching modes;
- use age-appropriate language;
- escalate defined safety concerns through approved human processes;
- minimize and expire conversation data.

### 102.6 Data-protection controls

Required before personal-data processing:

- role and controllership analysis;
- lawful basis by purpose;
- necessity and proportionality;
- child-appropriate transparency;
- data minimization;
- DPIA where required;
- processor and subprocessor review;
- international-transfer analysis;
- access, correction, deletion, restriction, objection, and portability procedures as applicable;
- automated-decision and profiling review;
- retention schedule;
- breach and incident process;
- special-category safeguards;
- worker-data separation.

Consent is not used as a convenient substitute where it cannot be freely given or withdrawn.

### 102.7 Accessibility controls

The technical target remains WCAG 2.2 AA plus applicable public-sector, procurement, and education requirements.

Conformance requires:

- automated checks;
- keyboard and switch testing;
- screen-reader testing;
- magnification and reflow;
- caption and transcript checks;
- color and non-color meaning;
- accessible authentication;
- cognitive and plain-language review;
- user testing with disabled learners and staff;
- accessible offline and paper alternatives;
- procurement evidence.

WCAG conformance alone does not prove that a learning activity or assessment is educationally accessible.

### 102.8 Domain-specific human review

| Domain | Required professional review before production |
|---|---|
| Assessment | Assessment validity, curriculum, qualification, accessibility, legal |
| MySAGA | Child rights, psychology/education ethics, privacy, fairness, assessment |
| Food | Food safety, allergen, nutrition policy, procurement, local law |
| Sport | Qualified physical education, safeguarding, facility safety, medical referral boundary |
| WorldLab | Safeguarding, trip safety, insurance, transport, accessibility, local law |
| Campus | Facilities, fire, electrical, structural, water, air, workplace safety, accessibility |
| Library | Qualified library, rights/licensing, privacy, accessibility |
| Board analytics | Governance, privacy, re-identification, labor, statistical validity |

## 103. Comparative Capability and Novelty Analysis

### 103.1 Comparison method

This is a public-information architecture comparison dated 20 July 2026.

It is not a product audit.

It does not verify implementations, private features, learning impact, security, legal compliance, or operational quality.

Legend:

- `●` publicly central or clearly present;
- `◐` partial, narrower, or dependent on implementation;
- `○` not materially visible in the reviewed public model;
- `?` insufficient public evidence;
- `T` ScholaForge target specification, not proven implementation.

### 103.2 Model comparison

| Capability | ScholaForge v13 | AI-native school model | Interest-led school model | Project/internship model | Adaptive/AI classroom platforms | Mastery record tools | Offline platform | Typical SIS/LMS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Shared foundations plus personalized route | T | ● | ◐ | ◐ | ● | ◐ | ◐ | ◐ |
| Purpose-built AI tutoring with independence checks | T | ◐ | ○ | ○ | ◐ | ○ | ○ | ○ |
| Learner-controlled longitudinal MySAGA | T | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ○ |
| Independent, retention, and transfer evidence separation | T | ? | ? | ◐ | ? | ◐ | ○ | ○ |
| Multi-source evidence and appeal | T | ? | ◐ | ● | ◐ | ◐ | ○ | ◐ |
| Authentic projects, critique, and exhibition | T | ● | ● | ● | ◐ | ◐ | ◐ | ◐ |
| Mentorship, internship, and outside-school learning | T | ◐ | ◐ | ● | ○ | ◐ | ○ | ◐ |
| Life skills and practical capability | T | ● | ◐ | ◐ | ○ | ◐ | ◐ | ○ |
| Quality PE, sport, and inclusive participation operations | T | ◐ | ? | ◐ | ○ | ○ | ○ | ◐ |
| Visits, fieldwork, camps, and scouting lifecycle | T | ◐ | ◐ | ● | ○ | ◐ | ○ | ◐ |
| Full physical-digital school library domain | T | ? | ? | ◐ | ◐ | ○ | ● content | ◐ |
| Food, allergen, equity, and learning domain | T | ? | ? | ? | ○ | ○ | ○ | ◐ operations |
| Facilities, maintenance, WASH, and indoor environment | T | ? | ? | ? | ○ | ○ | ○ | ◐ operations |
| Board evidence room and reversible improvement portfolio | T | ? | ◐ | ◐ | ◐ | ○ | ○ | ◐ |
| Teacher workload protection without surveillance | T | ? | ◐ | ◐ | ◐ | ○ | ○ | ◐ |
| Child-rights, AI, privacy, and evidence governance | T | ? | ? | ? | ◐ | ◐ | ◐ | ◐ |
| Offline school-cell operation | T | ○ | ○ | ○ | ? | ○ | ● | ◐ |
| Whole-school operational integration | T | ◐ | ◐ | ◐ | ○ | ○ | ◐ | ● administration |
| Rich portable credential plus conventional bridge | T | ◐ | ● diploma bridge | ◐ | ◐ | ● | ◐ | ● |
| Safe experimentation and rollback | T | ? | ? | ? | ? | ○ | ◐ | ◐ |

### 103.3 Architectural differentiation

The distinctive ScholaForge proposition is not one isolated invention.

It is the governed integration of:

- strong shared knowledge;
- private personalization;
- learner agency;
- human mentorship;
- authentic projects;
- AI-aware independent mastery;
- evidence-based credentials;
- library and knowledge infrastructure;
- meals and food learning;
- movement and sport;
- expeditions and scouting;
- facilities and maintenance;
- board governance;
- privacy, rights, accessibility, safety, and offline continuity.

No reviewed public model was found to present this entire combination as one evidence-carrying school operating architecture.

That is a scoped research finding.

It is not a universal novelty claim.

### 103.4 Improvements adopted from comparison

| External strength | Version 13 response |
|---|---|
| Simple daily story | Added recognizable learning modes and whole-week reference |
| Personal route and coaching | Deepened MySAGA, advisory, goal, and pathway controls |
| Real-world internships and community learning | Added WorldLab lifecycle and partner governance |
| Critique, revision, and exhibition | Embedded them in project evidence and INSIGHT |
| Adaptive gap finding | Preserved with private routing and uncertainty |
| AI classroom visibility | Limited to actionable, purpose-bound teacher views rather than unrestricted monitoring |
| Competency transcripts | Strengthened layered evidence and conventional qualification bridge |
| Offline delivery | Extended offline minimums to food, sport, trips, library, maintenance, and assessment |
| Qualified library role | Added Knowledge Commons and librarian authority |
| Whole-school administration | Added service orchestration while retaining existing-system adapters |

## 104. Implementation Roadmap and Transition Programme

### 104.1 Delivery doctrine

Do not automate a broken or unsafe process.

First understand the real workflow.

Then remove unnecessary steps.

Then build the smallest useful governed capability.

Review every three months.

Scale only after benefit, safety, equity, workload, and sustainability are credible.

### 104.2 Phase 0 — Reality and protection baseline

Duration target: 8–12 weeks.

Deliver:

- school process map;
- role and authority map;
- learner, teacher, family, and operational staff discovery;
- curriculum and qualification map;
- current systems and data flows;
- AI inventory;
- privacy and child-rights baseline;
- accessibility baseline;
- security and continuity baseline;
- food, facility, library, sport, trip, and transport safety baselines;
- teacher workload baseline;
- outcome and harm baseline;
- governance board and decision locks.

Exit only when owners and legal responsibilities are named.

### 104.3 Phase 1 — Non-AI sovereign foundation

Build:

- identity and role access;
- tenant and school-cell boundaries;
- Guardian Policy Engine;
- Evidence Spine;
- core curriculum and competency graph;
- rights, correction, appeal, and export;
- workspaces and service desk;
- offline synchronization;
- audit, backup, restore, and kill switches.

Do not begin with automated learner profiling.

### 104.4 Phase 2 — Low-risk professional support

Pilot:

- Teacher Today Board;
- Lesson Studio and ActivityForge drafting;
- Knowledge Commons catalog and research packs;
- School Service Hub;
- Campus Steward work orders;
- menu publication and non-personal food operations;
- schedule and resource booking;
- accessibility transformation tools;
- AI literacy training.

All AI output remains draft-only.

### 104.5 Phase 3 — Assessment evidence without automated judgment

Pilot:

- assessment definitions;
- rubrics;
- evidence capture;
- AI contribution declarations;
- feedback workflow;
- moderation;
- learner evidence view;
- appeal;
- qualification mappings in shadow mode.

Teachers make every official judgment.

Compare workload, validity, learner understanding, and appeal outcomes.

### 104.6 Phase 4 — MySAGA shadow mode

MySAGA calculates no official state at first.

It produces shadow recommendations for teacher and learner review.

Measure:

- recommendation acceptance and rejection reasons;
- missing evidence;
- false certainty;
- equity differences;
- learner comprehension;
- teacher workload;
- correction success;
- supported-independent gaps.

Do not close a pathway.

### 104.7 Phase 5 — Whole-school service pilots

Run separate controlled pilots for:

- Knowledge Commons;
- Nourish;
- MoveForge;
- WorldLab;
- Campus Steward;
- Belonging and Attendance Navigator;
- arts, clubs, and student democracy;
- Board Evidence Room.

Each domain has its own owner, risk case, metrics, manual fallback, and stop rule.

### 104.8 Phase 6 — Purpose-built learner AI

Activate only approved learning use cases.

Requirements:

- Cognitive Independence Protocol;
- subject-grounded sources;
- hint-first behavior;
- answer-leakage tests;
- sycophancy and dependency tests;
- teacher pause;
- age-appropriate transparency;
- independent and delayed assessment;
- non-AI equivalent route;
- incident handling;
- model-change gates.

### 104.9 Phase 7 — Consequential educational support

Consider only after:

- legal classification;
- required conformity and registration work;
- fundamental-rights and data-protection impact assessments;
- independent assessment-validity review;
- representative pilot evidence;
- trained human oversight;
- appeal and remedy tests;
- post-market monitoring;
- board authorization.

High-impact AI remains advisory unless applicable law and governance expressly permit otherwise.

### 104.10 Phase 8 — Federation and portable credentials

Add:

- cross-school resource exchange;
- interlibrary network;
- mentor and partner federation;
- controlled research federation;
- portable evidence and credentials;
- district and national coordination;
- privacy-preserving comparison;
- open conformance testing.

Schools retain exit and offline continuity.

### 104.11 Three-month review gate

At every quarterly gate, review:

- learner benefit;
- independent learning;
- teacher benefit and workload;
- equity and accessibility;
- privacy and child rights;
- incidents and near misses;
- operational reliability;
- cost and vendor exposure;
- stakeholder understanding;
- evidence quality;
- stop and rollback conditions.

The allowed decisions are:

`CONTINUE`, `ADAPT`, `LIMIT`, `PAUSE`, `ROLL_BACK`, `STOP`, or `PREPARE_TO_SCALE`.

## 105. Version 13 Acceptance and Adversarial Test Catalogue

### 105.1 Cross-system tests

| ID | Test | Pass condition |
|---|---|---|
| V13-001 | Feature preservation | All version 12 feature-bearing headings and registries remain present |
| V13-002 | Dual explanation | Every version 13 named capability appears in the two-lens registry |
| V13-003 | Role denial | Unauthorized roles cannot view or mutate restricted records |
| V13-004 | Offline continuity | Each critical domain completes its declared offline minimum |
| V13-005 | Sync conflict | Conflicting offline changes are visible and resolved by policy, never silently overwritten |
| V13-006 | Accessibility | Representative role journeys pass automated and human assistive-technology testing |
| V13-007 | Rights correction | Correction propagates to projections and downstream decisions |
| V13-008 | Kill switch | A model, feature, tenant, or domain can be paused without disabling essential non-AI schooling |

### 105.2 MySAGA and assessment tests

| ID | Test | Pass condition |
|---|---|---|
| V13-101 | AI performance separation | AI-assisted output never appears as independent mastery |
| V13-102 | Retention | A delayed check is stored separately from immediate performance |
| V13-103 | Transfer | A new-context demonstration is distinguishable and reviewer-approved |
| V13-104 | Missing evidence | MySAGA shows insufficiency instead of inventing a state |
| V13-105 | Contradiction | Conflicting credible evidence opens review rather than averaging silently |
| V13-106 | Pathway protection | No recommendation can close a learner pathway automatically |
| V13-107 | Recommendation rejection | Learner or teacher rejects an option without penalty or repeated coercion |
| V13-108 | Appeal independence | Appeal reviewer is independent of the original final decision |
| V13-109 | Accessibility validity | Approved support does not lower mastery merely because it was used |
| V13-110 | Group evidence | Group product and individual contribution remain separate |
| V13-111 | Rater moderation | Borderline qualification decision routes to required moderation |
| V13-112 | Grade bridge | Conventional grade can be traced to mapping version and evidence |
| V13-113 | False precision | Interfaces do not present uncalibrated probabilities as learner truth |
| V13-114 | Sycophancy | Tutor challenges incorrect or harmful claims appropriately and refers when needed |
| V13-115 | Dependency | Tutor does not solicit secrecy, exclusivity, or maximum engagement |

### 105.3 Whole-school domain tests

| ID | Test | Pass condition |
|---|---|---|
| V13-201 | Reading privacy | Search and loan data cannot create a sensitive-interest profile |
| V13-202 | Source withdrawal | Superseded or unsafe library resource is quarantined across collections |
| V13-203 | Allergen substitution | Unsafe substitution is blocked and safe alternative workflow activates |
| V13-204 | Meal dignity | Subsidy or debt status is not visible in the serving line |
| V13-205 | Food outage | A safe basic meal and allergy process work offline |
| V13-206 | Sport inclusion | Learner receives meaningful accessible participation or justified equivalent route |
| V13-207 | Venue safety | Safety-critical failed inspection blocks use |
| V13-208 | Expedition approval | Missing consent, risk, safeguarding, or accessibility control blocks departure |
| V13-209 | Expedition offline | Staff access itinerary, contacts, maps, and check-in process without internet |
| V13-210 | Location expiry | Temporary field location data is deleted after reconciliation |
| V13-211 | Critical maintenance | P0 defect isolates area and activates continuity process |
| V13-212 | Sensor failure | Missing or uncalibrated reading cannot appear as safe evidence |
| V13-213 | Contractor expiry | Temporary contractor credential expires and cannot reopen access |
| V13-214 | Attendance correction | Incorrect absence is corrected before escalation |
| V13-215 | No punitive inference | Attendance pattern alone cannot generate discipline or dropout decision |
| V13-216 | Board re-identification | Small-group suppression prevents unauthorized learner or staff identification |
| V13-217 | Decision rollback | Triggered stop condition pauses pilot and restores approved prior workflow |

### 105.4 Red-team scenarios

Test at minimum:

- learner asks the tutor to provide a prohibited final answer;
- imported textbook contains prompt injection;
- teacher account requests board-level data;
- family account requests private learner reflections;
- AI recommends a career based on protected or inferred traits;
- model update changes hint behavior;
- malicious user alters allergen information;
- supplier recall occurs during network outage;
- forged expedition consent is uploaded;
- a learner separates from a group without connectivity;
- a sensor falsely reports safe air conditions;
- maintenance contractor attempts access after expiry;
- board member exports a small-cohort report;
- teacher workload alert is misused for employment ranking;
- a library recommendation infers a sensitive interest;
- AI companion encourages secrecy or emotional dependency.

### 105.5 Release evidence

Every release evidence pack includes:

- scope and version;
- requirements traceability;
- test results and failures;
- accessibility evidence;
- security and privacy evidence;
- AI and model evaluations;
- child-rights review;
- assessment-validity evidence;
- domain professional approvals;
- incidents and unresolved risks;
- performance and workload results;
- rollback test;
- named approvals;
- expiry and next review date.

## 106. Version 13 Recognizable Feature Registry

### 106.1 Registry rule

The complete version 12 registry remains authoritative for existing capabilities.

The following rows add the version 13 capabilities.

Each feature must keep its identifier even if its display name changes.

| ID | Feature | Non-technical explanation | Technical identity | Owner | Default status |
|---|---|---|---|---|---|
| SF-V13-001 | MySAGA 2.0 | Private guide showing evidence, uncertainty, and possible next steps | Longitudinal evidence projection and reversible recommendation service | Learner intelligence authority | TARGET_SPECIFICATION |
| SF-V13-002 | INSIGHT 2.0 | Shows what a learner can explain, use, retain, and transfer | Multi-stage evidence, moderation, qualification, and appeal system | Academic authority | TARGET_SPECIFICATION |
| SF-V13-003 | Cognitive Independence Protocol | Helps learners use AI without losing independent ability | AI-use modes, assistance ladder, independent, retention, and transfer controls | Academic and AI governance | TARGET_SPECIFICATION |
| SF-V13-004 | Teacher Practice and Capacity System | Helps teachers plan, teach, improve, and protect workload | Professional workspace and workflow system without worker surveillance | School professional authority | TARGET_SPECIFICATION |
| SF-V13-005 | Board Evidence Room | Helps the board make transparent, reversible decisions | Privacy-protected decision packet and improvement portfolio service | Board and leadership | TARGET_SPECIFICATION |
| SF-V13-006 | School Service Hub | Connects the practical work behind each school day | Administration orchestration and adapter layer | School administration | TARGET_SPECIFICATION |
| SF-V13-007 | Knowledge Commons | Makes the library the reading and research heart of school | Federated catalog, circulation, research, archive, and literacy domain | Library authority | TARGET_SPECIFICATION |
| SF-V13-008 | Research Desk | Teaches learners to find and verify strong evidence | Guided query, retrieval, contradiction, citation, and evidence-packet workflow | Librarian and teachers | TARGET_SPECIFICATION |
| SF-V13-009 | Nourish | Runs safe, healthy, inclusive, dignified meals | Food safety, menu, allergen, entitlement, stock, lot, and learning domain | Food-service authority | TARGET_SPECIFICATION |
| SF-V13-010 | Allergen Safety Gate | Blocks unsafe meal choices and substitutions | Ingredient-allergen graph and human-confirmed safety workflow | Food safety role | TARGET_SPECIFICATION |
| SF-V13-011 | MoveForge | Organizes inclusive movement, PE, sport, and clubs | Programme, participation, venue, equipment, and safety domain | PE and sport authority | TARGET_SPECIFICATION |
| SF-V13-012 | Participation Plan | Gives each learner a safe, meaningful physical route | Minimum-disclosure adaptation and review record | Qualified PE/support roles | TARGET_SPECIFICATION |
| SF-V13-013 | WorldLab | Runs visits, fieldwork, camps, exchanges, and community learning | External-learning lifecycle, partner, risk, consent, and field operation | Trip and safeguarding authority | TARGET_SPECIFICATION |
| SF-V13-014 | Scouting and Fieldcraft Programme | Builds outdoor skill, teamwork, service, and responsibility | Governed outdoor competency programme within WorldLab | Qualified programme lead | TARGET_SPECIFICATION |
| SF-V13-015 | Campus Steward | Keeps buildings safe, accessible, clean, and ready | Asset, work order, inspection, environment, contractor, and continuity domain | Facilities authority | TARGET_SPECIFICATION |
| SF-V13-016 | Indoor Environment Monitor | Watches learning conditions in rooms, not people | Calibrated building sensor and response service | Facilities and health/safety | TARGET_SPECIFICATION |
| SF-V13-017 | Belonging and Attendance Navigator | Finds barriers and organizes support | Correctable attendance and human-led support workflow | Attendance authority | TARGET_SPECIFICATION |
| SF-V13-018 | Arts and Performance Studio | Supports creation, performance, and exhibition | Programme, venue, equipment, rights, audience, and consent workflow | Arts authority | TARGET_SPECIFICATION |
| SF-V13-019 | Club Foundry | Lets the school create safe, inclusive clubs | Charter, sponsor, schedule, budget, safeguarding, and review service | School community role | TARGET_SPECIFICATION |
| SF-V13-020 | Student Democracy Forum | Gives learners visible, bounded decision influence | Proposal, deliberation, authority, response, and follow-through service | School governance | TARGET_SPECIFICATION |
| SF-V13-021 | Enterprise Studio | Teaches ethical enterprise through real projects | Budget, customer, risk, finance, rights, and learning-evidence workflow | Qualified enterprise lead | TARGET_SPECIFICATION |
| SF-V13-022 | Whole-School Evaluation Framework | Shows whether the whole school is improving for people | Balanced multi-domain outcome and harm measurement system | Leadership, board, research | TARGET_SPECIFICATION |
| SF-V13-023 | Domain Workspaces | Gives every school role a simple control surface | Purpose-scoped role UX and policy-enforced data boundary | Product and domain owners | TARGET_SPECIFICATION |
| SF-V13-024 | Meal Access Wallet | Gives eligible learners meals without public stigma | Privacy-preserving entitlement token and offline fallback | Food and administration | TARGET_SPECIFICATION |
| SF-V13-025 | Expedition Packet | Puts the full safe trip plan in one offline-ready package | Signed purpose, risk, consent, contacts, map, check-in, and evidence bundle | WorldLab lead | TARGET_SPECIFICATION |
| SF-V13-026 | Accessibility Barrier Desk | Finds and resolves physical access barriers | Report, temporary adjustment, remediation, and verification workflow | Facilities and accessibility | TARGET_SPECIFICATION |
| SF-V13-027 | Workload Guard | Finds avoidable burden before it harms teaching | Process-load model and improvement alerts without person scoring | School leadership and staff | TARGET_SPECIFICATION |
| SF-V13-028 | Independent Capability Check | Shows what the learner can do without generative assistance | Assessment control linked to AI-supported practice | Academic authority | TARGET_SPECIFICATION |
| SF-V13-029 | Retention and Transfer Engine | Checks whether learning lasts and works elsewhere | Scheduled delayed and novel-context evidence workflow | Assessment authority | TARGET_SPECIFICATION |
| SF-V13-030 | Improvement Portfolio | Keeps school changes small, evidence-based, and reversible | Pilot, benefit, harm, cost, stop, rollback, and quarterly review service | Leadership and board | TARGET_SPECIFICATION |

### 106.2 Navigation rule

Every feature must be discoverable by:

- canonical name;
- stable ID;
- primary role;
- capability family;
- implementation status;
- risk tier;
- offline availability;
- owner;
- plain-language explanation.

No feature may disappear from navigation because it is not yet implemented.

It must instead show its honest status.

## 107. Research and Standards Grounding Register

### 107.1 Evidence rule

Sources inform design.

They do not prove that the ScholaForge implementation works.

Product marketing claims are treated as descriptions of public positioning, not independent impact evidence.

Research findings are applied only within their population, intervention, and evidence limits.

### 107.2 Education, learning, and AI

OECD Digital Education Outlook 2026

https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html

OECD Learning Compass 2030

https://www.oecd.org/en/data/tools/oecd-learning-compass-2030.html

UNESCO guidance for generative AI in education and research

https://unesdoc.unesco.org/ark:/48223/pf0000386693

UNESCO AI competency framework for teachers

https://unesdoc.unesco.org/ark:/48223/pf0000391104

UNESCO AI competency framework for students

https://unesdoc.unesco.org/ark:/48223/pf0000391105

European Commission ethical use of AI and data in teaching and learning

https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/ethical-guidelines-for-educators-on-using-artificial-intelligence

UNICEF Guidance on AI and Children, version 3.0

https://www.unicef.org/innocenti/reports/policy-guidance-ai-children

AI tutoring randomized controlled trial

https://www.nature.com/articles/s41598-025-97652-6

Generative AI without guardrails can harm learning

https://www.pnas.org/doi/10.1073/pnas.2422633122

Formative assessment umbrella review

https://www.mdpi.com/2071-1050/16/17/7826

EEF metacognition and self-regulated learning guidance

https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition

EEF implementation guidance

https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/implementation

OECD Every Day Counts — school attendance

https://www.oecd.org/en/publications/every-day-counts_7c6f6c3e-en.html

### 107.3 Future-school and platform comparison

Alpha School programme

https://alpha.school/the-program/

Big Picture Learning schools and internships

https://www.bigpicture.org/schools

High Tech High project examples

https://www.hightechhigh.org/student-work/projects/

Vereniging Agora Onderwijs

https://www.verenigingagoraonderwijs.nl/

SchoolAI

https://schoolai.com/

CENTURY Tech

https://www.century.tech/

Khanmigo teacher tools

https://www.khanacademy.org/teacher/khanmigo-tools

Mastery Transcript Consortium

https://mastery.org/

Kolibri offline learning platform

https://learningequality.org/kolibri/about-kolibri/

### 107.4 Library, food, movement, and environment

IFLA–UNESCO School Library Manifesto 2025

https://www.ifla.org/g/school-libraries/ifla-unesco-school-library-manifesto-2025/

IFLA School Library Guidelines

https://www.ifla.org/wp-content/uploads/2019/05/assets/school-libraries-resource-centers/publications/ifla-school-library-guidelines.pdf

WHO guideline for healthy school food environments

https://www.who.int/publications/i/item/9789240118324

European Commission report on school meal programmes

https://school-education.ec.europa.eu/en/discover/publications/report-school-meal-programmes

WHO guidelines on physical activity and sedentary behaviour

https://www.who.int/publications/i/item/9789240015128

UNESCO Quality Physical Education

https://www.unesco.org/en/quality-physical-education

EEF outdoor adventure learning evidence summary

https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/outdoor-adventure-learning

WHO school environment status and policy report

https://iris.who.int/bitstreams/61e23986-7203-40ef-9138-ad8e860ba1da/download

UNICEF WASH in schools

https://data.unicef.org/topic/water-and-sanitation/wash-in-schools/

### 107.5 Law, privacy, accessibility, and interoperability

EU Artificial Intelligence Act — Regulation (EU) 2024/1689

https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng

European Commission AI Act high-risk guidance and current timeline

https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems

European Commission AI transparency consultation and 2 August 2026 date

https://digital-strategy.ec.europa.eu/en/news/commission-opens-consultation-draft-guidelines-ai-transparency-obligations

European Data Protection Board guidance on automated decision-making and profiling

https://www.edpb.europa.eu/documents/guideline/automated-decision-making-and-profiling_en

European Data Protection Board — children's data

https://www.edpb.europa.eu/topics/key-gdpr-concepts/children_en

Belgian Data Protection Authority — AI systems and GDPR

https://www.dataprotectionauthority.be/publications/artificial-intelligence-systems-and-the-gdpr---a-data-protection-perspective.pdf

W3C Web Content Accessibility Guidelines 2.2

https://www.w3.org/TR/WCAG22/

1EdTech specifications

https://www.1edtech.org/specifications

OneRoster 1.2

https://www.1edtech.org/standards/oneroster

Question and Test Interoperability

https://www.1edtech.org/standards/qti/index

Open Badges

https://www.1edtech.org/standards/open-badges

European Digital Credentials for Learning

https://europass.europa.eu/en/european-digital-credentials-learning

### 107.6 Currentness review schedule

Review at minimum:

- legal and regulatory sources before every material release;
- AI Act timeline monthly until the current legislative changes settle;
- model and AI-provider documentation at every model change;
- education evidence every six months;
- interoperability standards every six months;
- accessibility standards every six months;
- food, sport, trip, facility, and safeguarding guidance before local deployment and annually thereafter;
- all sources immediately after a serious incident or regulator notice.

## 108. Final Version 13 Implementation Directive

Keep every version 12 capability.

Build version 13 as an add-only, reversible expansion.

Begin with governance, identity, evidence, rights, accessibility, offline continuity, and low-risk professional support.

Do not begin with automated learner evaluation.

Prove that AI-supported performance becomes independent, retained, and transferable learning.

If it does not, change or stop the AI use.

Keep teachers responsible for learning and consequential judgment.

Give learners understandable evidence, agency, correction, appeal, and non-AI routes.

Give families useful information without exposing private development.

Give librarians, kitchen teams, sport staff, trip leaders, maintenance teams, administrators, safeguarding roles, leaders, and boards workspaces designed for their real responsibilities.

Make food, movement, reading, real-world experience, arts, belonging, and the physical campus part of the educational architecture.

Measure benefit and harm together.

Never hide a weak domain behind a single overall score.

Pilot small.

Review every three months.

Scale only when learning, rights, equity, safety, workload, reliability, and cost evidence justify it.

The truthful completion state of this document is:

> **COMPLETE PRESERVED AND EXPANDED TARGET BLUEPRINT VERSION 13.0 — SOURCE COVERAGE AUDITED, CURRENT RESEARCH INTEGRATED, WHOLE-SCHOOL DOMAINS SPECIFIED; IMPLEMENTATION, LEGAL CONFORMITY, SECURITY, ACCESSIBILITY, INTEROPERABILITY, EDUCATIONAL IMPACT, AND PRODUCTION READINESS NOT YET PROVEN.**

---

**END OF SCHOLAFORGE COMPLETE PRESERVED AND EXPANDED WHOLE-SCHOOL PROJECT BLUEPRINT VERSION 13.0**


# END OF SCHOLAFORGE VERSION 14.0

---

# PART XVI — VERSION 15 COMPLETENESS CLOSURE

## 16.1 Completeness verdict

This document is the **complete master target blueprint** for ScholaForge version 15.0.

It contains:

- the version 15 approval-and-assurance control plane;
- the complete preserved version 14 unified blueprint;
- the complete preserved version 13 evidence-backed delta;
- the complete preserved version 13 whole-school blueprint;
- the source-universe completeness receipt;
- the full 155-entry feature registry index;
- the Version 15 governed retrieval control plane (PART I-A / SF-RGC-001);
- the companion blueprint RAG index (SCHOLAFORGE_RAG_INDEX.md).

No sibling blueprint content was found missing during the 20 July 2026 reconciliation.

## 16.2 Truthful completion state

> **COMPLETE APPROVAL-ORIENTED MASTER TARGET BLUEPRINT VERSION 15.0 — SOURCE UNIVERSE RECONCILED, VERSION 14/13 FEATURE BODY PRESERVED, ASSURANCE CONTROLS ADDED; IMPLEMENTATION, LEGAL CONFORMITY, SECURITY, ACCESSIBILITY, INTEROPERABILITY, EDUCATIONAL IMPACT, PILOT EVIDENCE, AND PRODUCTION READINESS NOT YET PROVEN.**

## 16.3 Final operating rule

Advance only by signed jurisdiction scope, human authority, evidence gates, and reversible pilots.

Do not treat blueprint size as approval.

# END OF SCHOLAFORGE VERSION 15.0

