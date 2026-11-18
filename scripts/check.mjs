// Renders every sample part with a tiny DOM stub and fails on a thrown error or an unknown part.
import { readFileSync } from 'node:fs';
const html = [];
const el = () => ({ classList: { add() {} }, set innerHTML(v) { html.push(v); }, querySelectorAll: () => [], querySelector: () => null, addEventListener() {}, before() {} });
globalThis.window = globalThis;
globalThis.document = { getElementById: () => null, createElement: el, head: { appendChild() {} }, body: { appendChild() {} }, currentScript: null };
globalThis.requestAnimationFrame = () => 0;
for (const f of ['wp.js', 'wp.min.js']) {
  html.length = 0;
  new Function(readFileSync(f, 'utf8'))();
  const specs = JSON.parse(readFileSync('examples/gallery.json', 'utf8'));
  window.WP(specs, el());
  const out = html.join('');
  const missing = window.WP.parts.filter(p => !specs.some(s => s.p === p));
  if (out.includes('Unknown part') || missing.length) { console.error(f, 'fail', missing); process.exit(1); }
  console.log(f, 'ok:', window.WP.parts.length, 'parts,', out.length, 'chars');
}
