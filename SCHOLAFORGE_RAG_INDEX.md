# SCHOLAFORGE — RAG INDEX

> **Entry point for agents working on the ScholaForge blueprint.**
> Read this file first. Retrieve only the sections listed for the current task.
> Do not load sibling publication packages or unrelated AGIM projects.

| Field | Value |
|---|---|
| Master blueprint | `SCHOLAFORGE.md` |
| Controlling retrieval rules | `SCHOLAFORGE.md` → **PART I-A** (`SF-RGC-001`) |
| Live code | `CODE FOLDER/` (Humanoid-pattern Node ESM MVP) |
| Sibling v13/v14 files | Archival hash sources only |
| Currentness | 20 July 2026 |

---

## How RAG / CRAG / RRF / RFF apply while editing this blueprint

1. **RAG** — use this index to retrieve only needed sections of `SCHOLAFORGE.md`.
2. **RFF-S** — keep scope to SCHOLA-FORGE; block other publication packages and other product repos.
3. **RRF** — when sources conflict: Version 15 controls > signed PART I-A > preserved v14/v13 body > agent memory (memory never wins).
4. **CRAG** — before irreversible claims or edits, validate you have the correct Part and feature ID.
5. **RFF-F** — after drafting, check you did not drop Version 15 safeguards, approval states, or truth boundaries.

---

## Priority legend

| Code | Meaning |
|---|---|
| MUST | Always retrieve before acting |
| FALL | Retrieve only if primary path fails |
| REF | Optional context |

---

## TASK: Orient to the master blueprint

| Priority | File | Section | Why |
|---|---|---|---|
| MUST | `SCHOLAFORGE.md` | YAML frontmatter + title table | Status, approval boundary, truth boundary |
| MUST | `SCHOLAFORGE.md` | PART -1 | Reading order, completeness receipt, feature registry |
| MUST | `SCHOLAFORGE.md` | PART 0 | Version 15 executive decisions |
| REF | `SCHOLAFORGE_RAG_INDEX.md` | This file | Task routing |

---

## TASK: Change approval, pilot, or legal gates

| Priority | File | Section | Why |
|---|---|---|---|
| MUST | `SCHOLAFORGE.md` | PART 0 + PART I | Decision table and assurance plane |
| MUST | `SCHOLAFORGE.md` | PART II relevant SF-* feature | Exact control feature |
| MUST | `SCHOLAFORGE.md` | PART IX + PART XIV | Pilot envelope and truthful status |
| REF | `SCHOLAFORGE.md` | PART III–VIII | Jurisdiction, workforce, cyber, procurement |

---

## TASK: Change RAG / CRAG / RRF / RFF behavior

| Priority | File | Section | Why |
|---|---|---|---|
| MUST | `SCHOLAFORGE.md` | **PART I-A** | Controlling vocabulary, order, gates (`SF-RGC-001`) |
| MUST | `CODE FOLDER/src/retrieval/` | pipeline + RFF/CRAG/RRF modules | Live software implementation |
| MUST | `SCHOLAFORGE.md` | SF-KOE-001 (preserved) | Deep KOE objects and APIs |
| MUST | `SCHOLAFORGE.md` | SF-RET-001 / section 5A (preserved) | ScholaGraph retrieval fabric |
| REF | `SCHOLAFORGE.md` | SF-RQF-001, SF-MRC-001 | Quality and module contracts |
| REF | AGIM `CRAG_CORRECTIVE_RETRIEVAL.md` etc. | Publication guidance only | Do not override PART I-A for product runtime |

---

## TASK: Build or test code

| Priority | File | Section | Why |
|---|---|---|---|
| MUST | `AGENTS.md` | Canonical map + refuse rules | Session handoff |
| MUST | `CODE FOLDER/BUILD_AND_IMPROVE.md` | Current phase | What to build next |
| MUST | `CODE FOLDER/package.json` | scripts | `npm test` / `npm run validate` |
| MUST | `CODE FOLDER/evidence/CURRENT/FINAL_STATUS.json` | Sentinel | Honest status markers |

**Conflict rule:** If preserved KOE/ScholaGraph text disagrees with PART I-A, keep PART I-A and note the override. Do not silently rewrite preserved layers unless the user asks for a preservation-preserving amendment.

---

## TASK: Add or amend a product feature

| Priority | File | Section | Why |
|---|---|---|---|
| MUST | `SCHOLAFORGE.md` | PART -1 feature registry | Avoid ID collision |
| MUST | `SCHOLAFORGE.md` | PART 0.3 precedence | Respect Version 15 controls |
| MUST | `SCHOLAFORGE.md` | Matching preserved feature section | Existing contract |
| MUST | `SCHOLAFORGE.md` | Four-lens / explainability pattern | Mandatory explanation shape |
| FALL | Sibling v13/v14 files | Hash verify only | Confirm archival identity |

---

## TASK: Completeness / source-universe audit

| Priority | File | Section | Why |
|---|---|---|---|
| MUST | `SCHOLAFORGE.md` | PART -1.2 | Completeness receipt |
| MUST | `SCHOLAFORGE.md` | PART XIII + PART XVI | Change manifest and closure |
| MUST | Sibling blueprint files | File hashes | Verify SHA-256 table |
| REF | `SCHOLAFORGE.md.bak-*` | Backup only | Rollback if needed |

---

## TASK: Prepare a controlled pilot

| Priority | File | Section | Why |
|---|---|---|---|
| MUST | `SCHOLAFORGE.md` | SF-PIL-001 + PART IX | Pilot envelope |
| MUST | `SCHOLAFORGE.md` | PART I-A.9 | Assurance classes A0–A2 only |
| MUST | `SCHOLAFORGE.md` | SF-ARE-001 + PART X | Evidence and commission pack |
| MUST | `SCHOLAFORGE.md` | PART XI WP0–WP6 | Delivery sequence |

---

## TASK: Troubleshoot conflicting blueprint text

| Priority | File | Section | Why |
|---|---|---|---|
| MUST | `SCHOLAFORGE.md` | PART 0.3 + Preservation boundary | Precedence ladder |
| MUST | `SCHOLAFORGE.md` | PART I-A.13 | Retrieval-spec conflict map |
| MUST | `SCHOLAFORGE.md` | Decision-lock policy (PART I §1.3) | When to stop |
| REF | `SCHOLAFORGE.md` | PART XIII AUDIT_REPORT_JSON | Known remaining gaps |

---

## OUT-OF-SCOPE (always block)

- Other AGIM publication packages under different folders
- P234 product-code repos unless the user explicitly switches projects
- Claiming implementation, legal conformity, or production readiness from blueprint text alone
- Using agent memory of another school/product as ScholaForge source truth

---

## Quick feature anchors

| ID | Name | Where to start |
|---|---|---|
| SF-RGC-001 | Retrieval Governance Control Plane | PART I-A |
| SF-KOE-001 | Knowledge Orchestration Engine | Preserved KOE technical spec |
| SF-RET-001 | ScholaGraph Retrieval Fabric | Preserved §5A |
| SF-RQF-001 | Retrieval Quality Framework | Preserved RQF section |
| SF-MRC-001 | Module Retrieval Contract Standard | Preserved MRC section |
| SF-AUR-001 | AI Use-Case Register | PART II |
| SF-PIL-001 | Controlled Low-Risk Pilot Envelope | PART II / PART IX |

---

**END OF SCHOLAFORGE RAG INDEX**
