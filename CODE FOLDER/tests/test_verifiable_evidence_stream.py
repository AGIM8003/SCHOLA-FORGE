import sys
import os
import unittest
import zlib

src_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src"))
if src_dir not in sys.path:
    sys.path.insert(0, src_dir)

from retrieval.verifiable_evidence_stream import VerifiableEvidenceStreamPipeline

class TestVerifiableEvidenceStream(unittest.TestCase):
    def test_verifiable_evidence_streaming(self):
        pipeline = VerifiableEvidenceStreamPipeline(chunk_size=64)
        
        pipeline.add_contradiction_claim(
            claim_id="CLAIM_001",
            primary_hypothesis="Model converges linearly under uniform noise.",
            counter_evidence="Counter-evidence demonstrates exponential divergence in non-convex regimes.",
            citation_id="CIT_DOI_10.1000/182"
        )
        pipeline.add_contradiction_claim(
            claim_id="CLAIM_002",
            primary_hypothesis="Zero-knowledge proofs require non-interactive setup.",
            counter_evidence="Transparent setups avoid trusted ceremonies entirely.",
            citation_id="CIT_DOI_10.1000/199"
        )
        
        chunks, merkle_root = pipeline.serialize_and_stream()
        
        self.assertTrue(len(chunks) > 0)
        self.assertTrue(len(merkle_root) == 64) # SHA256 hex string
        
        # Verify CRC32 checksums
        for c in chunks:
            recomputed_crc = zlib.crc32(c.compressed_bytes)
            self.assertEqual(c.crc32_checksum, recomputed_crc)
            
        print("Verifiable Evidence Stream Test Executed Successfully: PASS")

if __name__ == "__main__":
    unittest.main()
