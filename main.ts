import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const inp = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const clamp = (v: number) => Math.min(10000000 - 1e-5, Math.max(1e-5, v));
const round = (v: number) => Number(clamp(v).toFixed(5));
for (const f of readdirSync(inp).filter((n) => n.endsWith('.in')).sort()) {
  const id = f.slice(0, -3);
  const prices = JSON.parse(readFileSync(join(inp, f), 'utf8')).markets[0].prices;
  // MAE favors the median; a 4-hour random walk's median is the current price (the last close).
  const price = round(prices[prices.length - 1]);
  const body = JSON.stringify({ forecasts: [{ case: id, price }] });
  writeFileSync(join(out, `${id}.out`), body + '\n');
}
