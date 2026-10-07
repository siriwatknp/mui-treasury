import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import { chromium } from 'playwright-core';

const OUT = path.resolve('out');
fs.mkdirSync(OUT, { recursive: true });
const SIDES = ['vanilla', 'with-cli', 'no-cli'];
const CASES = [
  ['unchecked', {}],
  ['checked', { defaultChecked: true }],
  ['hover', {}, 'hover'],
  ['hover checked', { defaultChecked: true }, 'hover'],
  ['pressed', {}, 'press'],
  ['focus-visible', {}, 'tab'],
  ['focus-visible checked', { defaultChecked: true }, 'tab'],
  ['disabled', { disabled: true }],
  ['disabled checked', { disabled: true, defaultChecked: true }],
  ['small', { size: 'small' }],
  ['small checked', { size: 'small', defaultChecked: true }],
  ['small focus', { size: 'small', defaultChecked: true }, 'tab'],
  ['secondary checked', { color: 'secondary', defaultChecked: true }],
  ['edge=start focus', { edge: 'start', defaultChecked: true }, 'tab'],
  ['with label', { defaultChecked: true }, null, 'Wi-Fi'],
];

const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5199 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ deviceScaleFactor: 3, viewport: { width: 400, height: 200 } });
const results = {};
for (const side of SIDES) {
  results[side] = [];
  for (const [name, props, action, label] of CASES) {
    const url = `http://localhost:5199/?side=${side}&props=${encodeURIComponent(JSON.stringify(props))}${label ? `&label=${label}` : ''}`;
    await page.goto(url);
    await page.waitForSelector('.MuiSwitch-root');
    await page.mouse.move(0, 0);
    if (action === 'tab') await page.keyboard.press('Tab');
    if (action === 'hover' || action === 'press') await page.hover('.MuiSwitch-root');
    if (action === 'press') await page.mouse.down();
    await page.waitForTimeout(450);
    const info = await page.evaluate(() => {
      const root = document.querySelector('.MuiSwitch-root');
      const q = (s) => root.querySelector(s);
      const cs = (el) => (el ? getComputedStyle(el) : null);
      const box = (el) => { const r = el.getBoundingClientRect(); return [Math.round(r.width * 10) / 10, Math.round(r.height * 10) / 10]; };
      const fv = root.querySelector('.Mui-focusVisible');
      const ringEls = [...root.querySelectorAll('*'), root].filter((el) => { const s = cs(el); return (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0) || (s.boxShadow !== 'none' && /0px 0px 0px/.test(s.boxShadow)); });
      const clippers = [];
      for (let el = (fv ?? root); el && el !== document.body; el = el.parentElement) if (cs(el).overflow !== 'visible' && el.contains(fv ?? root) && el !== (fv ?? root)) clippers.push(el.className.toString().split(' ').find((c) => c.startsWith('Mui')) ?? el.tagName);
      const thumb = q('.MuiSwitch-thumb'), track = q('.MuiSwitch-track');
      return {
        root: box(root), track: track && box(track), thumb: thumb && box(thumb),
        trackBg: cs(track)?.backgroundColor, trackOpacity: cs(track)?.opacity, thumbBg: cs(thumb)?.backgroundColor,
        focusVisible: !!fv,
        ring: ringEls.map((el) => { const s = cs(el); return `${el.className.toString().match(/MuiSwitch-\w+/)?.[0]}: outline ${s.outlineWidth} ${s.outlineStyle} ${s.outlineColor} off ${s.outlineOffset}; shadow ${s.boxShadow}`; }),
        clippedBy: clippers,
        ripple: !!root.querySelector('.MuiTouchRipple-root'),
      };
    });
    const file = `${side}--${name.replace(/[^\w]+/g, '-')}.png`;
    await page.locator('#cell').screenshot({ path: path.join(OUT, file) });
    if (action === 'press') await page.mouse.up();
    results[side].push({ name, file, ...info });
  }
}
fs.writeFileSync(path.join(OUT, 'results.json'), JSON.stringify(results, null, 2));
const img = (f) => `data:image/png;base64,${fs.readFileSync(path.join(OUT, f)).toString('base64')}`;
const html = `<html><body style="font:12px system-ui;margin:12px;background:#fff"><table style="border-collapse:collapse">
<tr><th></th>${SIDES.map((s) => `<th style="padding:4px 12px">${s}</th>`).join('')}</tr>
${CASES.map(([n], i) => `<tr><td style="padding:4px 8px;white-space:nowrap">${n}</td>${SIDES.map((s) => `<td style="border:1px solid #eee;text-align:center"><img style="height:${'72px'}" src="${img(results[s][i].file)}"></td>`).join('')}</tr>`).join('')}
</table></body></html>`;
const mpage = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 900, height: 800 } });
await mpage.setContent(html);
await mpage.screenshot({ path: path.join(OUT, 'montage.png'), fullPage: true });
await browser.close();
await server.close();
console.log('wrote', path.join(OUT, 'montage.png'));
