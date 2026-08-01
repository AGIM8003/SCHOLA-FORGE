# AGENTS.md — SCHOLAFORGE

**Read first.** Author: Haxhijaha, Agim · ORCID `0009-0002-3234-7765`  
Spelling lock: **`PATTENT FOLDER`**.  
**Feature scope: FROZEN** — no new product organs unless counsel directs.

## Status banner

```text
DISCLOSURE_READY
P0_P1_IMPLEMENTATION_USER_REPORTED
P2_MACHINE_EVIDENCE_COMPLETE
INDEPENDENT_VERIFICATION_INCOMPLETE
MATURITY_ESTIMATE_65
COUNSEL_REVIEW_TARGET_70_NOT_MET
NOVELTY_NOT_CONFIRMED
FREEDOM_TO_OPERATE_NOT_CONFIRMED
FILING_NOT_AUTHORIZED
PATENT_NOT_GRANTED
PRODUCTION_NOT_APPROVED
PUBLICATION_NOT_AUTHORIZED
PUBLICATION_DECISION_LOCK=KEEP_PRIVATE_PENDING_REVIEW
```

## Academic publication scaffold

Local GitHub-ready research repository: **`scholaforge-research/`**  
Machine milestone: **PUBLICATION_CANDIDATE_READY** (scaffold)  
Human milestone: **PUBLICATION_AUTHORIZED** — not met  
Do not create remote repos, Zenodo deposits, or public Pages without signed lock + named authority.

## Canonical hash receipt

`CODE FOLDER/evidence/RUNTIME_PACK/VERIFICATION_RECEIPT.json`  
(and mirrored under `scholaforge-research/evidence/RUNTIME_PACK/`)

## Next milestones

1. Independent human verification (+2 toward 70)
2. Counsel ownership/license + disclosure decision
3. Signed `PUBLICATION_DECISION_LOCK` before any public channel

## Commands

```bash
cd "CODE FOLDER"
npm run uplift:p2

cd "../scholaforge-research"
npm run publication:preflight
npm run evidence:verify
npm run paper:check
npm run release:verify
```
