import test from 'node:test';
import assert from 'node:assert/strict';
import { VectorIndexAdapter } from '../src/retrieval/vector_index_adapter.js';

test('SCHOLA-FORGE Vector Index: Nominal insertion & similarity search', () => {
  const adapter = new VectorIndexAdapter(4);
  const vec1 = [1.0, 0.0, 0.0, 0.0];
  const vec2 = [0.9, 0.1, 0.0, 0.0];
  const vec3 = [0.0, 0.0, 1.0, 0.0];

  adapter.insertDocument('doc_1', 'Quantum computing physics', vec1);
  adapter.insertDocument('doc_2', 'Quantum computing hardware', vec2);
  adapter.insertDocument('doc_3', 'Classical organic chemistry', vec3);

  const queryVec = [1.0, 0.0, 0.0, 0.0];
  const res = adapter.queryVector(queryVec, 2, 0.5);

  assert.equal(res.ok, true);
  assert.equal(res.matches.length, 2);
  assert.equal(res.matches[0].docId, 'doc_1');
  assert.equal(res.matches[1].docId, 'doc_2');
});

test('SCHOLA-FORGE Vector Index: Rejection of dimension mismatch', () => {
  const adapter = new VectorIndexAdapter(4);
  const badVec = [1.0, 0.0];
  const insertRes = adapter.insertDocument('doc_bad', 'Invalid vector', badVec);
  assert.equal(insertRes.ok, false);
  assert.equal(insertRes.reason, 'VECTOR_DIMENSION_MISMATCH');

  const queryRes = adapter.queryVector(badVec);
  assert.equal(queryRes.ok, false);
  assert.equal(queryRes.reason, 'QUERY_DIMENSION_MISMATCH');
});
