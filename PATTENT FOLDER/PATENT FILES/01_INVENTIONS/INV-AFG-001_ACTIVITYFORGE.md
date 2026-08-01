# INV-AFG-001 — ActivityForge

**Feature IDs:** SF-AFG-001  
**Software status:** WORKING / TEST-PROVEN in `CODE FOLDER`  
**Patent status:** NOT FILED · novelty NOT confirmed · filing NOT authorized

## What is proven in code

- Structured activity objects (instructions, accessibility, safety, fallback) — not raw chat text
- Deterministic rejection of unsafe materials and policy conflicts (e.g. internet when forbidden)
- Teacher approval required before publish
- New publish versions supersede prior published entries without silent overwrite

## Differentiation

Unlike unstructured lesson chat generators, ActivityForge validates constraints and preserves versioned teacher-approved activities.

## Evidence

- Tests: `CODE FOLDER/tests/activityforge.test.js`
- Integration: `CODE FOLDER/tests/classroom_integration.test.js`
- Benchmark: `CODE FOLDER/evidence/CURRENT/INVENTION_DIFFERENTIATION_BENCHMARK.json`
