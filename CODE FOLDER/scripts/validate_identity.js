/**
 * Validate PROJECT_IDENTITY.json against expected ScholaForge anchors.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const codeRoot = path.resolve(__dirname, '..');
const projectRoot = path.resolve(codeRoot, '..');
const identityPath = path.join(codeRoot, 'PROJECT_IDENTITY.json');

const identity = JSON.parse(fs.readFileSync(identityPath, 'utf8'));
const errors = [];

if (identity.project_name !== 'SCHOLAFORGE') errors.push('project_name');
if (identity.folders?.code !== 'CODE FOLDER') errors.push('folders.code');
if (identity.blueprint_filename !== 'SCHOLAFORGE.md') errors.push('blueprint_filename');
if (identity.production_status !== 'NOT_APPROVED') errors.push('production_status');
if (identity.controlling_retrieval !== 'PART_I-A_SF-RGC-001') errors.push('controlling_retrieval');
if (identity.filing_authorized === true) errors.push('filing_authorized_must_be_false');
if (identity.patent_granted === true) errors.push('patent_granted_must_be_false');

const blueprint = path.join(projectRoot, identity.blueprint_filename);
if (!fs.existsSync(blueprint)) errors.push('blueprint_missing');

const rag = path.join(projectRoot, identity.folders?.rag_index || 'SCHOLAFORGE_RAG_INDEX.md');
if (!fs.existsSync(rag)) errors.push('rag_index_missing');

const patent = path.join(projectRoot, identity.folders?.patent || 'PATTENT FOLDER');
if (!fs.existsSync(patent)) errors.push('patent_folder_missing');

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ ok: true, project_name: identity.project_name, version: identity.version }, null, 2));
