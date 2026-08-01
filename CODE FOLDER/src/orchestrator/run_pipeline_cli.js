/**
 * CLI: stdin JSON -> application pipeline JSON on stdout.
 */
import { runApplicationPipeline } from './application_pipeline.js';

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) return {};
  return JSON.parse(raw);
}

const input = await readStdin();
const result = runApplicationPipeline(input);
process.stdout.write(JSON.stringify(result, null, 2) + '\n');
process.exitCode = result.ok ? 0 : 2;
