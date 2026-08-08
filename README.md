# ScholaForge

ScholaForge is a school operating system designed for Belgian and European schools. It handles curriculum, assessment, resource management and student progression — and makes every decision transparent, fair and traceable for students, teachers, parents and administrators.

## The Problem

Schools run on dozens of disconnected tools. Decisions about students — grading, progression, resource allocation, support — happen without clear audit trails. Parents cannot see why a decision was made. Teachers carry administrative burdens that take time away from teaching. When AI enters the classroom, there are no safeguards to prevent it from overstepping.

## What ScholaForge Does

ScholaForge brings all school operations into one system with built-in rules:

- **Every decision is explainable.** When a student is placed, graded, supported or flagged, the system records why, by whom, under what policy and with what evidence.
- **Teachers stay in charge.** AI can assist during lessons (TwinTeach Live), but cannot grade, expel, admit or change policy. A human must approve every consequential action.
- **Students own their learning story.** MySAGA is a private, portable portfolio that follows the learner — not the institution.
- **Movement counts.** MotionClass integrates physical activity into the curriculum, tracked without linking to personal identity.
- **Works offline.** Schools in low-connectivity areas run a local node that synchronises when connection returns.
- **Privacy by design.** No personal data leaves the school without explicit consent. The No-ID Motion Layer tracks participation without identifying individuals.

## Who It's For

- Schools in Belgium (Dutch, French and German-speaking communities)
- Education authorities evaluating transparent governance platforms
- Researchers studying equitable decision-making in education

## Structure

| Folder | Contents |
|--------|----------|
| `CODE FOLDER/src/` | 26 modules covering retrieval, policy, evidence, identity, tutoring, assessment and more |
| `CODE FOLDER/tests/` | 25 test files with 200 adversarial scenarios |
| `CODE FOLDER/schemas/` | JSON validation schemas |
| `SCHOLAFORGE.md` | Full system blueprint (v15.0) |

## Quick Start

```bash
git clone https://github.com/AGIM8003/SCHOLA-FORGE.git
cd SCHOLA-FORGE/CODE\ FOLDER
npm test
```

## Current Status

This is pre-release research software. It runs on test data only and has not been deployed in a real school. It has not been independently audited, peer reviewed or certified for production use.

## Licence

CC BY-NC-ND 4.0 — see [LICENSE.md](LICENSE.md).

Commercial use is not permitted. For commercial licensing, contact agim@vertogroup.ai.

## Author

Agim Haxhijaha
ORCID: [0009-0002-3234-7765](https://orcid.org/0009-0002-3234-7765)

Copyright (c) 2026 Agim Haxhijaha. All rights reserved except for permissions granted by the licence.
