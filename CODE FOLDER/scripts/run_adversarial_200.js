/**
 * Run 200-case adversarial corpus and write evidence.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runAdversarialCorpus } from '../src/adversarial/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const codeRoot = path.resolve(__dirname, '..');
const outDir = path.join(codeRoot, 'evidence', 'RUNTIME_PACK');
const patentEvidence = path.join(codeRoot, '..', 'PATTENT FOLDER', 'PATENT FILES', '04_EVIDENCE');

const report = runAdversarialCorpus();
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(patentEvidence, { recursive: true });

const slim = {
  ...report,
  results: report.results.map(({ id, group, ok, expected, actual, status }) => ({
    id,
    group,
    ok,
    expected,
    actual,
    status,
  })),
};

fs.writeFileSync(path.join(outDir, 'ADVERSARIAL_200.json'), JSON.stringify(slim, null, 2) + '\n');
fs.writeFileSync(path.join(patentEvidence, 'ADVERSARIAL_200.json'), JSON.stringify(slim, null, 2) + '\n');

console.log(
  JSON.stringify(
    {
      ok: report.failed_count === 0 && report.total === 200,
      total: report.total,
      passed: report.passed,
      failed_count: report.failed_count,
      failed: report.failed,
      filing_authorized: false,
    },
    null,
    2,
  ),
);
if (report.total !== 200 || report.failed_count > 0) process.exit(1);
