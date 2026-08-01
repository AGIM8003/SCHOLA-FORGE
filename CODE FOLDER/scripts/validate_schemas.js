/**
 * Minimal schema presence check for MVP-0.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const schemasDir = path.resolve(__dirname, '..', 'schemas');
const required = [
  'evidence_packet.schema.json',
  'final_status.schema.json',
  'jurisdiction_profile.schema.json',
  'evidence_spine.schema.json',
  'pilot_envelope.schema.json',
  'insight_shadow.schema.json',
];

const missing = required.filter((f) => !fs.existsSync(path.join(schemasDir, f)));
if (missing.length) {
  console.error(JSON.stringify({ ok: false, missing }, null, 2));
  process.exit(1);
}

for (const f of required) {
  JSON.parse(fs.readFileSync(path.join(schemasDir, f), 'utf8'));
}

console.log(JSON.stringify({ ok: true, validated: required.length }, null, 2));
