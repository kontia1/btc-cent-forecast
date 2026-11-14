import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const IN = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const grid = (x: number) => Math.round(Math.min(1e7 - 1e-5, Math.max(1e-5, x)) * 1e5) / 1e5;
mkdirSync(OUT, { recursive: true });
const files = readdirSync(IN).filter((f) => f.endsWith('.in')).sort();
for (const file of files) {
  const id = file.slice(0, -3);
  const { markets } = JSON.parse(readFileSync(join(IN, file), 'utf8'));
  const row = { case: id, price: grid(markets[0].prices.at(-1)) };
  writeFileSync(join(OUT, `${id}.out`), `${JSON.stringify({ forecasts: [row] })}\n`);
}
