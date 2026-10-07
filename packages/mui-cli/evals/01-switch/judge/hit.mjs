import { createServer } from 'vite';
import { chromium } from 'playwright-core';
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5196 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();
for (const side of ['vanilla', 'with-cli', 'no-cli']) for (const props of [{}, { defaultChecked: true }, { size: 'small' }]) {
  await page.goto(`http://localhost:5196/?side=${side}&props=${encodeURIComponent(JSON.stringify(props))}`);
  await page.waitForSelector('.MuiSwitch-root');
  const g = await page.evaluate(() => {
    const r = (s) => { const b = document.querySelector(s).getBoundingClientRect(); return { x: b.left, y: b.top, w: b.width, h: b.height }; };
    return { root: r('.MuiSwitch-root'), track: r('.MuiSwitch-track'), input: r('.MuiSwitch-input') };
  });
  // click points: 6px outside the track on each side, vertically centred; and track centre
  const cy = g.track.y + g.track.h / 2;
  const pts = { left6: [g.track.x - 6, cy], right6: [g.track.x + g.track.w + 6, cy], above6: [g.track.x + g.track.w / 2, g.track.y - 6], right20: [g.track.x + g.track.w + 20, cy] };
  const hits = {};
  for (const [k, [x, y]] of Object.entries(pts)) hits[k] = await page.evaluate(([x, y]) => document.elementFromPoint(x, y)?.classList.contains('MuiSwitch-input') ?? false, [x, y]);
  const f = (b) => `${Math.round(b.w)}×${Math.round(b.h)}@${Math.round(b.x)}`;
  console.log(side.padEnd(9), JSON.stringify(props).padEnd(22), 'root', f(g.root), 'track', f(g.track), 'input', f(g.input), 'input hit outside track:', JSON.stringify(hits));
}
await browser.close(); await server.close();
