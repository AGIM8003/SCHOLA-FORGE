import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const codeRoot = path.resolve(__dirname, '..');
const projectRoot = path.resolve(codeRoot, '..');

describe('identity path parity', () => {
  it('PROJECT_IDENTITY matches live blueprint and CODE FOLDER', () => {
    const identity = JSON.parse(
      fs.readFileSync(path.join(codeRoot, 'PROJECT_IDENTITY.json'), 'utf8'),
    );
    assert.equal(identity.project_name, 'SCHOLAFORGE');
    assert.equal(identity.folders.code, 'CODE FOLDER');
    assert.ok(fs.existsSync(path.join(projectRoot, identity.blueprint_filename)));
    assert.ok(fs.existsSync(path.join(projectRoot, 'CODE FOLDER', 'package.json')));
    assert.ok(fs.existsSync(path.join(projectRoot, 'SCHOLAFORGE_RAG_INDEX.md')));
  });
});
