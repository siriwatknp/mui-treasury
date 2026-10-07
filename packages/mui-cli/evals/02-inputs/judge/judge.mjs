import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import { chromium } from 'playwright-core';

const OUT = path.resolve('out');
fs.mkdirSync(OUT, { recursive: true });
const SIDES = (process.env.SIDES ?? 'vanilla,with-cli,no-cli').split(',');
const WIDTHS = { mobile: 390, tablet: 768, laptop: 1280 };
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5189 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });
const results = {};

const measure = ({ id, focused }) => {
  const box = document.querySelector(`[data-case="${CSS.escape(id)}"]`);
  const root = box.querySelector('.MuiInputBase-root');
  const field = box.querySelector('textarea:not([aria-hidden]), input:not([type=hidden]):not([aria-hidden]), .MuiSelect-select');
  const label = box.querySelector('.MuiInputLabel-root, .MuiFormLabel-root');
  const r = root.getBoundingClientRect();
  const f = field.getBoundingClientRect();
  const fcs = getComputedStyle(field);
  const content = { top: f.top + parseFloat(fcs.paddingTop), bottom: f.bottom - parseFloat(fcs.paddingBottom) };
  const out = { height: +r.height.toFixed(2), font: fcs.fontSize, focused };
  out.textOffset = +(((content.top + content.bottom) / 2) - ((r.top + r.bottom) / 2)).toFixed(1);
  out.textInside = content.top >= r.top - 0.5 && content.bottom <= r.bottom + 0.5;
  if (label) {
    const l = label.getBoundingClientRect();
    const shrunk = label.classList.contains('MuiInputLabel-shrink') || label.getAttribute('data-shrink') === 'true';
    out.label = { shrunk, font: getComputedStyle(label).fontSize, scale: getComputedStyle(label).transform };
    if (!shrunk) {
      out.label.offset = +(((l.top + l.bottom) / 2) - ((r.top + r.bottom) / 2)).toFixed(1);
    } else {
      const legend = box.querySelector('fieldset legend');
      if (legend) {
        out.label.onBorder = +(((l.top + l.bottom) / 2) - r.top).toFixed(1);
        out.label.notchFits = legend.getBoundingClientRect().width + 0.5 >= l.width - 0.5;
        out.label.notchGap = +(legend.getBoundingClientRect().width - l.width).toFixed(1);
      } else {
        // filled / standard: the shrunk label must sit above the value and stay inside (filled) or above (standard) the box
        out.label.overlapsValue = l.bottom > content.top + 0.5;
        out.label.insideRoot = l.top >= r.top - 0.5;
      }
    }
  }
  // an adornment is centred on the value text or on the box, whichever is closer
  const adorn = [...box.querySelectorAll('.MuiInputAdornment-root')].map((a) => { const b = a.getBoundingClientRect(); const c = (b.top + b.bottom) / 2; const toText = c - (content.top + content.bottom) / 2; const toBox = c - (r.top + r.bottom) / 2; return +(Math.abs(toText) < Math.abs(toBox) ? toText : toBox).toFixed(1); });
  if (adorn.length) out.adornOffset = adorn;
  const chips = [...box.querySelectorAll('.MuiChip-root')].map((c) => c.getBoundingClientRect());
  if (chips.length) out.chipsInside = chips.every((c) => c.top >= r.top - 0.5 && c.bottom <= r.bottom + 0.5);
  return out;
};

for (const side of SIDES) {
  results[side] = {};
  for (const [wname, width] of Object.entries(WIDTHS)) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 2 });
    await page.goto(`http://localhost:5189/?side=${side}`);
    await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important; animation: none !important; }' });
    await page.waitForSelector('[data-case]');
    await page.waitForTimeout(300);
    const cases = await page.evaluate(() => window.__cases);
    const rows = [];
    for (const c of cases) {
      rows.push({ ...c, ...(await page.evaluate(measure, { id: c.id, focused: false })) });
      if (c.labelled && !c.shrunk) {
        await page.locator(`[data-case="${c.id}"] input, [data-case="${c.id}"] .MuiSelect-select`).first().focus();
        await page.waitForTimeout(50);
        rows.push({ ...c, id: `${c.id} +focused`, shrunk: true, ...(await page.evaluate(measure, { id: c.id, focused: true })) });
        await page.evaluate(() => document.activeElement?.blur());
      }
    }
    results[side][wname] = rows;
    await page.screenshot({ path: path.join(OUT, `${side}--${wname}.png`), fullPage: true });
    await page.close();
  }
}
fs.writeFileSync(path.join(OUT, 'results.json'), JSON.stringify(results, null, 2));

// score: each row × check → pass / fail with reason
const wantFont = { mobile: '16px', tablet: '16px', laptop: '14px' };
const score = {};
for (const side of SIDES) {
  const fails = [];
  let checks = 0;
  for (const [wname, rows] of Object.entries(results[side])) {
    for (const r of rows) {
      const fail = (what) => fails.push(`${wname} ${r.id}: ${what}`);
      checks += 1; if (Math.abs(r.height - 40) > 0.5) fail(`height ${r.height}`);
      checks += 1; if (r.font !== wantFont[wname]) fail(`font ${r.font}`);
      checks += 1; if (!r.textInside) fail('value text spills out of the box');
      if (r.label && !r.label.shrunk) { checks += 1; if (Math.abs(r.label.offset) > 2) fail(`resting label off-centre by ${r.label.offset}px`); }
      if (r.label?.shrunk && r.label.notchFits !== undefined) { checks += 1; if (!r.label.notchFits) fail(`notch narrower than label by ${-r.label.notchGap}px`); checks += 1; if (Math.abs(r.label.onBorder) > 1.5) fail(`shrunk label off the border by ${r.label.onBorder}px`); }
      if (r.label?.shrunk && r.label.overlapsValue !== undefined) { checks += 1; if (r.label.overlapsValue) fail('shrunk label overlaps the value'); }
      if (r.adornOffset) { checks += 1; if (r.adornOffset.some((o) => Math.abs(o) > 2.5)) fail(`adornment off-centre ${r.adornOffset.join('/')}px`); }
      if (r.chipsInside !== undefined) { checks += 1; if (!r.chipsInside) fail('chips spill out of the box'); }
    }
  }
  score[side] = { checks, failed: fails.length, fails };
}
fs.writeFileSync(path.join(OUT, 'score.json'), JSON.stringify(score, null, 2));
for (const side of SIDES) console.log(`${side.padEnd(9)} ${score[side].checks} checks · ${score[side].failed} failed`);
await browser.close();
await server.close();
