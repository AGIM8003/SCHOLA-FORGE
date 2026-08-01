/**
 * Emit canonical SHA-256 verification receipt for RUNTIME_PACK (full 64-hex hashes).
 * Does not authorize filing. Does not claim independent human verification.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const codeRoot = path.resolve(__dirname, '..');
const packDir = path.join(codeRoot, 'evidence', 'RUNTIME_PACK');
const patentEvidence = path.join(codeRoot, '..', 'PATTENT FOLDER', 'PATENT FILES', '04_EVIDENCE');

function sha256File(p) {
  if (!fs.existsSync(p)) return null;
  return crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
}

function sha256ConcatFiles(paths) {
  const h = crypto.createHash('sha256');
  for (const p of paths) {
    h.update(path.basename(p));
    h.update('\0');
    h.update(fs.readFileSync(p));
    h.update('\0');
  }
  return h.digest('hex');
}

const files = fs
  .readdirSync(packDir)
  .filter((f) => f !== 'VERIFICATION_RECEIPT.json' && f !== 'MANIFEST.json')
  .sort();
const file_hashes = {};
for (const f of files) {
  file_hashes[f] = sha256File(path.join(packDir, f));
}

const packPaths = files.map((f) => path.join(packDir, f));
const FULL_PACK_HASH = sha256ConcatFiles(packPaths);

const testDir = path.join(codeRoot, 'tests');
const testFiles = fs
  .readdirSync(testDir)
  .filter((f) => f.endsWith('.js'))
  .sort()
  .map((f) => path.join(testDir, f));
const TEST_CORPUS_HASH = sha256ConcatFiles(testFiles);

const receipt = {
  schema_id: 'ScholaForgeVerificationReceipt/v1',
  disclosure_id: 'SYS-COMBO-001',
  HASH_ALGORITHM: 'SHA-256',
  FULL_PACK_HASH,
  PACK_PATH: 'evidence/RUNTIME_PACK/',
  REPOSITORY_COMMIT: null,
  REPOSITORY_COMMIT_STATUS: 'NOT_AVAILABLE_NO_GIT_REPO_IN_WORKSPACE',
  LOCKFILE_HASH: sha256File(path.join(codeRoot, 'package-lock.json')),
  LOCKFILE_STATUS: fs.existsSync(path.join(codeRoot, 'package-lock.json'))
    ? 'PRESENT'
    : 'NOT_PRESENT — generate package-lock.json before independent verification',
  PACKAGE_JSON_HASH: sha256File(path.join(codeRoot, 'package.json')),
  TEST_CORPUS_HASH,
  ADVERSARIAL_CORPUS_SRC_HASH: sha256File(path.join(codeRoot, 'src', 'adversarial', 'corpus200.js')),
  TECHNICAL_EFFECT_RESULTS_HASH: file_hashes['TECHNICAL_EFFECTS.json'] || null,
  ADVERSARIAL_RESULTS_HASH: file_hashes['ADVERSARIAL_200.json'] || null,
  RUNTIME_EVIDENCE_PACK_HASH: file_hashes['RUNTIME_EVIDENCE_PACK.json'] || null,
  ORGANISM_DEMO_HASH: file_hashes['ORGANISM_DEMO.json'] || null,
  FILE_HASHES: file_hashes,
  CREATED_AT_UTC: new Date().toISOString(),
  CREATED_BY: 'ScholaForge Whole-Body Evidence Engineer (Cursor agent run) — accountable owner: Haxhijaha, Agim / VertoGroup.ai',
  SIGNATURE_OR_ATTESTATION: {
    type: 'MACHINE_ATTESTATION',
    statement:
      'Hashes computed over current filesystem bytes. This is not an independent human verification report and does not authorize filing.',
    algorithm: 'SHA-256',
    attestation_id: `ATT-${FULL_PACK_HASH.slice(0, 16)}`,
  },
  independent_verification: 'NOT_CONFIRMED',
  filing_authorized: false,
  novelty_confirmed: false,
  status_banner: [
    'DISCLOSURE_READY',
    'P0_P1_IMPLEMENTATION_USER_REPORTED',
    'P2_MACHINE_EVIDENCE_COMPLETE',
    'INDEPENDENT_VERIFICATION_INCOMPLETE',
    'MATURITY_ESTIMATE_65',
    'COUNSEL_REVIEW_TARGET_70_NOT_MET',
    'NOVELTY_NOT_CONFIRMED',
    'FREEDOM_TO_OPERATE_NOT_CONFIRMED',
    'FILING_NOT_AUTHORIZED',
    'PATENT_NOT_GRANTED',
    'PRODUCTION_NOT_APPROVED',
  ],
};

fs.mkdirSync(packDir, { recursive: true });
fs.mkdirSync(patentEvidence, { recursive: true });
const out = JSON.stringify(receipt, null, 2) + '\n';
fs.writeFileSync(path.join(packDir, 'VERIFICATION_RECEIPT.json'), out);
fs.writeFileSync(path.join(patentEvidence, 'VERIFICATION_RECEIPT.json'), out);

const manifest = {
  HASH_ALGORITHM: 'SHA-256',
  FULL_PACK_HASH,
  PACK_PATH: 'evidence/RUNTIME_PACK/',
  RUNTIME_EVIDENCE_PACK_HASH: receipt.RUNTIME_EVIDENCE_PACK_HASH,
  TECHNICAL_EFFECT_RESULTS_HASH: receipt.TECHNICAL_EFFECT_RESULTS_HASH,
  ADVERSARIAL_RESULTS_HASH: receipt.ADVERSARIAL_RESULTS_HASH,
  TEST_CORPUS_HASH,
  LOCKFILE_HASH: receipt.LOCKFILE_HASH,
  REPOSITORY_COMMIT: null,
  CREATED_AT_UTC: receipt.CREATED_AT_UTC,
  CREATED_BY: receipt.CREATED_BY,
  filing_authorized: false,
  independent_verification: 'NOT_CONFIRMED',
};
fs.writeFileSync(path.join(packDir, 'MANIFEST.json'), JSON.stringify(manifest, null, 2) + '\n');

console.log(JSON.stringify({ ok: true, FULL_PACK_HASH, RUNTIME_EVIDENCE_PACK_HASH: receipt.RUNTIME_EVIDENCE_PACK_HASH, filing_authorized: false }, null, 2));
