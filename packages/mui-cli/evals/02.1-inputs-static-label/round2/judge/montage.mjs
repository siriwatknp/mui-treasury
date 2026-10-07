import { createServer } from 'vite';
import { chromium } from 'playwright-core';
const CASES = ['outlined/medium label value', 'outlined/medium label placeholder', 'filled/medium label value', 'standard/medium helper text', 'outlined/small Autocomplete chips', 'bare InputBase', 'Select input={<InputBase/>}', 'content outlined long value adorned', 'content filled long value adorned', 'content standard password', 'content outlined typed multiline', 'content filled long option', 'content outlined chips typed'];
const SIDES = ['vanilla', 'with-cli', 'no-cli'];
const VIEWS = [['touch', 390], ['pointer', 1280]];
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5183 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });
const shots = {};
for (const side of SIDES) for (const [kind, width] of VIEWS) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 2 });
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Emulation.setTouchEmulationEnabled', kind === 'touch' ? { enabled: true, maxTouchPoints: 5 } : { enabled: false });
  await page.goto(`http://localhost:5183/?side=${side}`);
  await page.addStyleTag({ content: '*{transition:none!important} [data-case] .cap{display:none} [data-case]{padding-top:4px}' });
  await page.waitForSelector('[data-case]');
  const typed = { 'content outlined typed multiline': 'Line one of the note\nLine two is a little longer than one\nLine three', 'content outlined chips typed': 'Fi' };
  for (const [id, text] of Object.entries(typed)) {
    await page.locator(`[data-case="${id}"] textarea:not([aria-hidden]), [data-case="${id}"] input:not([type=hidden])`).first().click();
    const lines = text.split('\n');
    for (const [i, line] of lines.entries()) { await page.keyboard.type(line); if (i < lines.length - 1) await page.keyboard.press('Enter'); }
    await page.mouse.click(5, 5);
  }
  for (const id of CASES) {
    const el = page.locator(`[data-case="${id}"]`);
    const m = await el.evaluate((b) => { const r = b.querySelector('.MuiInputBase-root'); const f = b.querySelector('textarea:not([aria-hidden]), input:not([type=hidden]):not([aria-hidden]), select, .MuiSelect-select'); return `${r.getBoundingClientRect().height.toFixed(1)}px · ${getComputedStyle(f).fontSize}`; });
    shots[`${side}|${kind}|${id}`] = { img: (await el.screenshot()).toString('base64'), m };
  }
  await page.close();
}
const cell = (k) => `<td><img src="data:image/png;base64,${shots[k].img}"><div class="m">${shots[k].m}</div></td>`;
const html = `<html><head><style>body{font:12px system-ui;margin:12px}table{border-collapse:collapse}td,th{border:1px solid #e5e5e5;padding:4px 6px;vertical-align:top}th{font-size:13px}img{width:230px;display:block}.m{color:#555}td:first-child{font-weight:600;white-space:nowrap}</style></head><body>
<table><tr><th></th>${VIEWS.map(([k, w]) => SIDES.map((s) => `<th>${s}<br>${k} @${w}</th>`).join('')).join('')}</tr>
${CASES.map((id) => `<tr><td>${id}</td>${VIEWS.map(([k]) => SIDES.map((s) => cell(`${s}|${k}|${id}`)).join('')).join('')}</tr>`).join('')}</table></body></html>`;
const page = await browser.newPage({ viewport: { width: 1700, height: 900 } });
await page.setContent(html);
await page.screenshot({ path: '../inputs21-round2-side-by-side.png', fullPage: true });
await browser.close(); await server.close();
