/**
 * WP-P2-01 — Freeze immutable runtime evidence pack for P0/P1.
 * Marks results as reproduced_in_this_run vs USER_REPORTED.
 * NEVER sets filing_authorized=true.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { runOrganismBody } from '../src/constitution/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const codeRoot = path.resolve(__dirname, '..');
const projectRoot = path.resolve(codeRoot, '..');
const outDir = path.join(codeRoot, 'evidence', 'RUNTIME_PACK');
const patentEvidence = path.join(projectRoot, 'PATTENT FOLDER', 'PATENT FILES', '04_EVIDENCE');

function sha256File(p) {
  if (!fs.existsSync(p)) return null;
  const h = crypto.createHash('sha256');
  h.update(fs.readFileSync(p));
  return h.digest('hex');
}

function sha256Text(s) {
  return crypto.createHash('sha256').update(String(s)).digest('hex');
}

function listTestFiles() {
  const dir = path.join(codeRoot, 'tests');
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.js'))
    .sort()
    .map((f) => path.join('tests', f));
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(patentEvidence, { recursive: true });

const testFiles = listTestFiles();
const fixtureHashes = {};
for (const rel of testFiles) {
  fixtureHashes[rel] = sha256File(path.join(codeRoot, rel));
}

const lockPath = path.join(codeRoot, 'package-lock.json');
const pkgPath = path.join(codeRoot, 'package.json');

const validate = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'validate'], {
  cwd: codeRoot,
  encoding: 'utf8',
  shell: false,
  env: process.env,
});

const organism = runOrganismBody({ teacher_id: 'evidence-pack' });
const organismJson = JSON.stringify(organism, null, 2);

const pack = {
  schema_id: 'ScholaForgeRuntimeEvidencePack/v1',
  disclosure_id: 'SYS-COMBO-001',
  method: 'BODY_VS_BODY',
  evidence_class: 'REPRODUCED_IN_THIS_RUN',
  prior_user_reported_class: 'USER_REPORTED_RUNTIME_EVIDENCE',
  independent_verification: 'NOT_CONFIRMED',
  note: 'This pack freezes outputs from the current machine run. A separate independent human reviewer must still confirm.',
  repository_commit: null,
  branch: null,
  package_manager: 'npm',
  package_json_hash: sha256File(pkgPath),
  lockfile_hash: sha256File(lockPath),
  runtime_versions: {
    node: process.version,
    platform: process.platform,
    arch: process.arch,
  },
  operating_environment: process.env.OS || process.platform,
  test_commands: ['npm run validate', 'npm run demo:organism'],
  test_fixture_hashes: fixtureHashes,
  validate_exit_code: validate.status,
  validate_stdout_hash: sha256Text(validate.stdout || ''),
  validate_stderr_hash: sha256Text(validate.stderr || ''),
  validate_stdout_tail: String(validate.stdout || '').slice(-4000),
  organism_demo: {
    ok: organism.ok,
    proven_count: organism.proven_count,
    required_count: organism.required_count,
    failed: organism.failed,
    filing_authorized: organism.filing_authorized,
    proof_names: Object.keys(organism.proofs || {}),
    output_hash: sha256Text(organismJson),
  },
  known_limitations: [
    'No git commit available in this workspace snapshot',
    'Independent human reviewer not yet assigned',
    '200-case adversarial corpus executed separately',
    'Security SBOM/VEX may be stubbed until full scan tooling is authorized',
  ],
  rollback_commands: ['Do not deploy', 'Retain FILING_NOT_AUTHORIZED', 'Revert CODE FOLDER if counsel requires'],
  owner: 'Agim Haxhijaha / VertoGroup.ai',
  date_utc: new Date().toISOString(),
  status_banner: [
    'DISCLOSURE_READY',
    'IMPLEMENTATION_PARTIALLY_PROVEN_BY_USER_REPORTED_EVIDENCE',
    'INDEPENDENT_VERIFICATION_INCOMPLETE',
    'NOVELTY_NOT_CONFIRMED',
    'FREEDOM_TO_OPERATE_NOT_CONFIRMED',
    'FILING_NOT_AUTHORIZED',
    'PATENT_NOT_GRANTED',
    'PRODUCTION_NOT_APPROVED',
  ],
  filing_authorized: false,
  novelty_confirmed: false,
  production_approved: false,
};

const packPath = path.join(outDir, 'RUNTIME_EVIDENCE_PACK.json');
fs.writeFileSync(packPath, JSON.stringify(pack, null, 2) + '\n');
fs.writeFileSync(path.join(outDir, 'ORGANISM_DEMO.json'), organismJson + '\n');
fs.writeFileSync(path.join(outDir, 'VALIDATE_STDOUT.txt'), validate.stdout || '');
fs.writeFileSync(path.join(outDir, 'VALIDATE_STDERR.txt'), validate.stderr || '');

const manifest = {
  pack_file: 'RUNTIME_EVIDENCE_PACK.json',
  pack_sha256: sha256File(packPath),
  organism_sha256: sha256File(path.join(outDir, 'ORGANISM_DEMO.json')),
  frozen_at_utc: new Date().toISOString(),
  filing_authorized: false,
};
fs.writeFileSync(path.join(outDir, 'MANIFEST.json'), JSON.stringify(manifest, null, 2) + '\n');
fs.writeFileSync(path.join(patentEvidence, 'RUNTIME_EVIDENCE_PACK.json'), JSON.stringify(pack, null, 2) + '\n');
fs.writeFileSync(path.join(patentEvidence, 'RUNTIME_EVIDENCE_MANIFEST.json'), JSON.stringify(manifest, null, 2) + '\n');

console.log(JSON.stringify({ ok: true, manifest, validate_exit: validate.status, organism_ok: organism.ok }, null, 2));
if (validate.status !== 0 || !organism.ok) process.exit(1);
