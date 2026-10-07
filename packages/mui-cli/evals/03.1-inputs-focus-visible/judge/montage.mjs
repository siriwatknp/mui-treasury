import fs from 'node:fs';
import { createServer } from 'vite';
import { chromium } from 'playwright-core';

const SIDES = ['vanilla', 'with-cli', 'no-cli'];
const CASES = ['__button', 'outlined/medium value', 'filled/medium value', 'standard/medium value', 'outlined/medium error', 'filled/medium error', 'standard/medium error', 'outlined/medium select', 'outlined/medium Autocomplete chips', 'bare InputBase', 'in Dialog outlined'];
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5187 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });
const shots = {};
for (const side of SIDES) {
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
  await page.goto(`http://localhost:5187/?side=${side}`);
  await page.waitForFunction(() => window.__cases);
  await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important; animation: none !important; } [data-case] > div:nth-child(2) { display: none }' });
  for (const id of CASES) {
    await page.keyboard.press('Escape');
    await page.mouse.click(2, 2);
    await page.locator(`[data-sentinel="${id}"]`).focus();
    await page.keyboard.press('Tab');
    const box = await page.locator(`[data-case="${id}"]`).boundingBox();
    const pad = 10;
    const img = await page.screenshot({ clip: { x: box.x - pad, y: box.y - pad, width: box.width + pad * 2, height: box.height + pad * 2 } });
    shots[`${side}|${id}`] = img.toString('base64');
  }
  await page.close();
}
const head = `<tr><th></th>${SIDES.map((s) => `<th>${s}${s === 'vanilla' ? ' (focusVisible: true)' : ''}</th>`).join('')}</tr>`;
const rows = CASES.map((id) => `<tr><td class="l">${id === '__button' ? 'Button (reference)' : id}</td>${SIDES.map((s) => `<td><img src="data:image/png;base64,${shots[`${s}|${id}`]}"></td>`).join('')}</tr>`).join('');
const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
await page.setContent(`<style>body{font:13px system-ui;margin:12px}table{border-collapse:collapse}td,th{border:1px solid #ddd;padding:6px;vertical-align:top}td.l{font-weight:600;width:170px}img{width:320px}</style><h3>Eval 3.1 — keyboard focus on each input (Tab)</h3><table>${head}${rows}</table>`);
await page.screenshot({ path: '../focus-side-by-side.png', fullPage: true });
await browser.close();
await server.close();
console.log('ok');
