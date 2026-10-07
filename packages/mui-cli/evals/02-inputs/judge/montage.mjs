import fs from 'node:fs';
import { createServer } from 'vite';
import { chromium } from 'playwright-core';
const CASES = ['outlined/medium label empty', 'outlined/medium label value', 'outlined/medium adornments', 'outlined/small Autocomplete chips', 'filled/medium label empty', 'filled/medium label value', 'filled/medium adornments', 'filled/medium Autocomplete chips', 'standard/medium label value', 'standard/medium Select empty', 'outlined/medium multiline', 'outlined/medium select (TextField)'];
const SIDES = ['vanilla', 'with-cli', 'no-cli'];
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5187 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });
const shots = {};
for (const side of SIDES) for (const width of [390, 1280]) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 2 });
  await page.goto(`http://localhost:5187/?side=${side}`);
  await page.addStyleTag({ content: '*{transition:none!important} [data-case]>div:first-child{display:none}' });
  await page.waitForSelector('[data-case]');
  for (const id of CASES) {
    const el = page.locator(`[data-case="${id}"]`);
    const h = await el.evaluate((b) => b.querySelector('.MuiInputBase-root').getBoundingClientRect().height.toFixed(1));
    shots[`${side}|${width}|${id}`] = { img: (await el.screenshot()).toString('base64'), h };
  }
  await page.close();
}
const cell = (k) => `<td><img src="data:image/png;base64,${shots[k].img}"><div class="m">${shots[k].h}px</div></td>`;
const html = `<html><head><style>body{font:12px system-ui;margin:12px}table{border-collapse:collapse}td,th{border:1px solid #e5e5e5;padding:4px 6px;vertical-align:top}th{font-size:13px}img{width:240px;display:block}.m{color:#555}td:first-child{font-weight:600;white-space:nowrap}</style></head><body>
<table><tr><th></th>${[390, 1280].map((w) => SIDES.map((s) => `<th>${s} @${w}</th>`).join('')).join('')}</tr>
${CASES.map((id) => `<tr><td>${id}</td>${[390, 1280].map((w) => SIDES.map((s) => cell(`${s}|${w}|${id}`)).join('')).join('')}</tr>`).join('')}</table></body></html>`;
const page = await browser.newPage({ viewport: { width: 1700, height: 900 }, deviceScaleFactor: 1 });
await page.setContent(html);
await page.screenshot({ path: '../inputs-side-by-side.png', fullPage: true });
await browser.close(); await server.close();
