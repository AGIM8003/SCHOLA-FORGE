# CODE FOLDER — SCHOLAFORGE

Software MVP for ScholaForge. Pattern-aligned with AGIM `CODE FOLDER` layout (Humanoid Brain OS).

| Authority | Path |
|---|---|
| Blueprint SSOT | `../SCHOLAFORGE.md` |
| Retrieval control | Blueprint PART I-A / `SF-RGC-001` |
| Agent RAG index | `../SCHOLAFORGE_RAG_INDEX.md` |
| Evidence | `evidence/CURRENT/` |
| Identity | `PROJECT_IDENTITY.json` |

**Honest markers:** `PRODUCTION_NOT_APPROVED` · `PILOT_NOT_READY` · `IMPLEMENTATION_NOT_PROVEN` · `RELEASE_BLOCKED`

```bash
npm test
npm run validate
npm run pipeline   # stdin JSON -> retrieval + policy pipeline (software-only)
npm run sentinel:status
```
