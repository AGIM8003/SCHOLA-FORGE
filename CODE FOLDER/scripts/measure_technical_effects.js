import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { measureTechnicalEffects } from '../src/measurement/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const codeRoot = path.resolve(__dirname, '..');
const outDir = path.join(codeRoot, 'evidence', 'RUNTIME_PACK');
const patentEvidence = path.join(codeRoot, '..', 'PATTENT FOLDER', 'PATENT FILES', '04_EVIDENCE');

const report = measureTechnicalEffects();
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(patentEvidence, { recursive: true });
fs.writeFileSync(path.join(outDir, 'TECHNICAL_EFFECTS.json'), JSON.stringify(report, null, 2) + '\n');
fs.writeFileSync(path.join(patentEvidence, 'TECHNICAL_EFFECTS.json'), JSON.stringify(report, null, 2) + '\n');

console.log(
  JSON.stringify(
    {
      ok: report.failed.length === 0,
      measured: report.measured,
      passed: report.passed,
      failed: report.failed,
      filing_authorized: false,
    },
    null,
    2,
  ),
);
if (report.failed.length) process.exit(1);
