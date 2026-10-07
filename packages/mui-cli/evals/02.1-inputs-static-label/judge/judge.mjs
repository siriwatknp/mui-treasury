import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import { chromium } from 'playwright-core';

const OUT = path.resolve('out');
fs.mkdirSync(OUT, { recursive: true });
const SIDES = (process.env.SIDES ?? 'vanilla,with-cli,no-cli').split(',');
const VIEWS = { 'touch@390': ['touch', 390], 'touch@1280': ['touch', 1280], 'pointer@390': ['pointer', 390], 'pointer@1280': ['pointer', 1280] };
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5185 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });

const measure = ({ id }) => {
  const box = document.querySelector(`[data-case="${CSS.escape(id)}"]`);
  const root = box.querySelector('.MuiInputBase-root');
  const field = box.querySelector('textarea:not([aria-hidden]), input:not([type=hidden]):not([aria-hidden]), select, .MuiSelect-select');
  const label = box.querySelector('label.MuiFormLabel-root, .MuiInputLabel-root');
  const r = root.getBoundingClientRect();
  const f = field.getBoundingClientRect();
  const fcs = getComputedStyle(field);
  const content = { top: f.top + parseFloat(fcs.paddingTop), bottom: f.bottom - parseFloat(fcs.paddingBottom) };
  const out = { height: +r.height.toFixed(2), font: fcs.fontSize };
  out.textOffset = +(((content.top + content.bottom) / 2) - ((r.top + r.bottom) / 2)).toFixed(1);
  if (label && label.getBoundingClientRect().width) {
    const l = label.getBoundingClientRect();
    out.label = { gapAbove: +(r.top - l.bottom).toFixed(1), top: +(l.top - r.top).toFixed(1), left: +(l.left - r.left).toFixed(1), font: getComputedStyle(label).fontSize, scale: new DOMMatrix(getComputedStyle(label).transform).a };
  }
  const legend = box.querySelector('fieldset legend');
  if (legend) out.notch = +legend.getBoundingClientRect().width.toFixed(1);
  if (field.matches('input, textarea') && field.placeholder && !field.value) out.placeholderOpacity = +getComputedStyle(field, '::placeholder').opacity;
  const adorn = [...box.querySelectorAll('.MuiInputAdornment-root')].map((a) => { const b = a.getBoundingClientRect(); return +(((b.top + b.bottom) / 2) - ((r.top + r.bottom) / 2)).toFixed(1); });
  if (adorn.length) out.adornOffset = adorn;
  const chips = [...box.querySelectorAll('.MuiChip-root')].map((c) => c.getBoundingClientRect());
  if (chips.length) out.chipsInside = chips.every((c) => c.top >= r.top - 0.5 && c.bottom <= r.bottom + 0.5);
  return out;
};

const results = {};
for (const side of SIDES) {
  results[side] = {};
  for (const [vname, [kind, width]] of Object.entries(VIEWS)) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 2 });
    // touch: Chrome's touch emulation drives (pointer: coarse) / (hover: none); the session stays open so it holds
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Emulation.setTouchEmulationEnabled', kind === 'touch' ? { enabled: true, maxTouchPoints: 5 } : { enabled: false });
    await page.goto(`http://localhost:5185/?side=${side}`);
    await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important; animation: none !important; }' });
    await page.waitForSelector('[data-case]');
    await page.waitForTimeout(300);
    const coarse = await page.evaluate(() => matchMedia('(pointer: coarse)').matches);
    if (coarse !== (kind === 'touch')) throw new Error(`${vname}: pointer emulation did not apply`);
    const cases = await page.evaluate(() => window.__cases);
    const rows = [];
    for (const c of cases) {
      rows.push({ ...c, state: 'rest', ...(await page.evaluate(measure, { id: c.id })) });
      if (c.labelled || c.placeholder) {
        await page.locator(`[data-case="${c.id}"] input:not([type=hidden]), [data-case="${c.id}"] textarea:not([aria-hidden]), [data-case="${c.id}"] .MuiSelect-select, [data-case="${c.id}"] select`).first().focus();
        await page.waitForTimeout(30);
        rows.push({ ...c, state: 'focused', ...(await page.evaluate(measure, { id: c.id })) });
        await page.evaluate(() => document.activeElement?.blur());
      }
    }
    results[side][vname] = rows;
    if (vname === 'pointer@1280' || vname === 'touch@390') await page.screenshot({ path: path.join(OUT, `${side}--${vname}.png`), fullPage: true });
    await page.close();
  }
}
fs.writeFileSync(path.join(OUT, 'results.json'), JSON.stringify(results, null, 2));

const score = {};
for (const side of SIDES) {
  const fails = [];
  let checks = 0;
  for (const [vname, rows] of Object.entries(results[side])) {
    const want = vname.startsWith('touch') ? '16px' : '14px';
    for (const r of rows) {
      const fail = (what) => fails.push(`${vname} ${r.id} [${r.state}]: ${what}`);
      const multi = /multiline/.test(r.id);
      checks += 1; if (Math.abs(r.height - 36) > 0.5) fail(`height ${r.height}`);
      checks += 1; if (r.font !== want) fail(`font ${r.font}`);
      if (!r.chips && !multi) { checks += 1; if (Math.abs(r.textOffset) > 1.5) fail(`text off-centre ${r.textOffset}px`); }
      if (r.labelled) {
        checks += 1; if (!r.label) fail('no visible label'); else if (r.label.gapAbove < -0.5) fail(`label not above the box (overlaps by ${-r.label.gapAbove}px)`);
      }
      if (r.notch !== undefined) { checks += 1; if (r.notch > 1) fail(`outlined notch ${r.notch}px wide`); }
      if (r.placeholderOpacity !== undefined && r.state === 'rest') { checks += 1; if (r.placeholderOpacity === 0) fail('placeholder hidden while empty'); }
      if (r.adornOffset) { checks += 1; if (r.adornOffset.some((o) => Math.abs(o) > 1.5)) fail(`adornment off-centre ${r.adornOffset.join('/')}px`); }
      if (r.chipsInside !== undefined) { checks += 1; if (!r.chipsInside) fail('chips spill out of the box'); }
    }
    // the label never moves: same spot at rest and focused, and empty vs with a value
    const byId = Object.groupBy(rows.filter((r) => r.label), (r) => r.id);
    for (const [id, list] of Object.entries(byId)) {
      if (list.length === 2) { checks += 1; const [a, b] = list; if (Math.abs(a.label.top - b.label.top) > 0.5 || Math.abs(a.label.scale - b.label.scale) > 0.01) fails.push(`${vname} ${id}: label moves on focus (${a.label.top}→${b.label.top}px, scale ${a.label.scale}→${b.label.scale})`); }
    }
    const groups = Object.groupBy(rows.filter((r) => r.group && r.label && r.state === 'rest' && /label (empty|value)$/.test(r.id)), (r) => r.group);
    for (const [g, list] of Object.entries(groups)) {
      if (list.length === 2) { checks += 1; const [a, b] = list; if (Math.abs(a.label.top - b.label.top) > 0.5 || Math.abs(a.label.scale - b.label.scale) > 0.01) fails.push(`${vname} ${g}: label differs empty vs value (${a.label.top}→${b.label.top}px)`); }
    }
  }
  score[side] = { checks, failed: fails.length, fails };
}
fs.writeFileSync(path.join(OUT, 'score.json'), JSON.stringify(score, null, 2));
for (const side of SIDES) console.log(`${side.padEnd(9)} ${score[side].checks} checks · ${score[side].failed} failed`);
await browser.close();
await server.close();
