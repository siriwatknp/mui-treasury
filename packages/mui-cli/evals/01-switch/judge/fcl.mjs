import { createServer } from 'vite';
import { chromium } from 'playwright-core';
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5197 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1200, height: 900 } });
const all = {};
for (const side of ['vanilla', 'with-cli', 'no-cli']) {
  await page.goto(`http://localhost:5197/fcl.html?side=${side}`);
  await page.waitForSelector('[data-case]');
  all[side] = await page.evaluate(() => [...document.querySelectorAll('[data-case]')].map((box) => {
    const fcl = box.querySelector('.MuiFormControlLabel-root'), lab = box.querySelector('.MuiFormControlLabel-label');
    const ctl = fcl.firstElementChild; const vis = ctl.querySelector('.MuiSwitch-track') ?? ctl.querySelector('svg') ?? ctl;
    const b = box.getBoundingClientRect(), f = fcl.getBoundingClientRect(), l = lab.getBoundingClientRect(), v = vis.getBoundingClientRect();
    const s = getComputedStyle(fcl);
    const gap = Math.round(Math.max(l.left - v.right, v.left - l.right, l.top - v.bottom, v.top - l.bottom));
    return [box.dataset.case, `margin ${s.marginTop}/${s.marginRight}/${s.marginBottom}/${s.marginLeft}`, `visual→text ${gap}`, `fcl offset ${Math.round(f.left - b.left - 24)},${Math.round(f.top - b.top - 24)}`];
  }));
  await page.screenshot({ path: `out/fcl-${side}.png`, fullPage: true });
}
for (let i = 0; i < all.vanilla.length; i++) console.log(all.vanilla[i][0].padEnd(16), ['vanilla','with-cli','no-cli'].map((s) => `${s}: ${all[s][i].slice(1).join(' ')}`).join('  ||  '));
await browser.close(); await server.close();
