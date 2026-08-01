/**
 * SCHOLA-FORGE In-Memory Vector Similarity Index & Retrieval Governance Adapter
 * ===============================================================================
 * Implements cosine similarity search, embedding normalization, and RAG top-k retrieval.
 */

export class VectorIndexAdapter {
  constructor(dimension = 128) {
    this.dimension = dimension;
    this.documents = new Map();
  }

  _cosineSimilarity(vecA, vecB) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }
    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  insertDocument(docId, text, embedding) {
    if (!embedding || embedding.length !== this.dimension) {
      return { ok: false, reason: "VECTOR_DIMENSION_MISMATCH" };
    }
    this.documents.set(docId, { docId, text, embedding });
    return { ok: true, docId };
  }

  queryVector(queryEmbedding, topK = 3, minScore = 0.5) {
    if (!queryEmbedding || queryEmbedding.length !== this.dimension) {
      return { ok: false, reason: "QUERY_DIMENSION_MISMATCH" };
    }

    const results = [];
    for (const doc of this.documents.values()) {
      const score = this._cosineSimilarity(queryEmbedding, doc.embedding);
      if (score >= minScore) {
        results.push({ docId: doc.docId, text: doc.text, score });
      }
    }

    results.sort((a, b) => b.score - a.score);
    return {
      ok: true,
      matches: results.slice(0, topK),
      count: results.length
    };
  }
}
