import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import { chromium } from 'playwright-core';

const OUT = path.resolve('out');
fs.mkdirSync(OUT, { recursive: true });
const SIDES = (process.env.SIDES ?? 'vanilla,with-cli,no-cli').split(',');
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5186 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });

// the field's box, its ring, its own focus indicator (outline border / underline), and whether an overflow ancestor clips the ring
const read = ({ id }) => {
  const box = document.querySelector(`[data-case="${CSS.escape(id)}"]`);
  const root = id === '__button' ? box.querySelector('.MuiButton-root') : box.querySelector('.MuiInputBase-root');
  const cs = getComputedStyle(root);
  const px = (v) => parseFloat(v) || 0;
  const ring = { style: cs.outlineStyle, width: cs.outlineWidth, color: cs.outlineColor, offset: cs.outlineOffset, boxShadow: cs.boxShadow };
  const notch = root.querySelector(':scope > .MuiOutlinedInput-notchedOutline');
  const after = getComputedStyle(root, '::after');
  const before = getComputedStyle(root, '::before');
  const indicator = notch
    ? { borderColor: getComputedStyle(notch).borderTopColor, borderWidth: getComputedStyle(notch).borderTopWidth }
    : { afterTransform: after.content === 'none' || after.display === 'none' ? 'none' : after.transform, afterColor: after.borderBottomColor, beforeColor: before.borderBottomColor, beforeWidth: before.borderBottomWidth };
  // an outline elsewhere in the field (the native input, the notch) is not the box's ring
  const elsewhere = [...box.querySelectorAll('*')].filter((el) => el !== root && !el.closest('.MuiChip-root') && el.matches(':focus, :focus-within') && getComputedStyle(el).outlineStyle !== 'none' && px(getComputedStyle(el).outlineWidth) > 0).map((el) => [...el.classList].find((c) => c.startsWith('Mui')) ?? el.tagName.toLowerCase());
  let clipped = null;
  if (ring.style !== 'none') {
    const r = root.getBoundingClientRect();
    const reach = px(ring.width) + px(ring.offset);
    for (let el = root.parentElement; el && el !== document.body; el = el.parentElement) {
      const o = getComputedStyle(el);
      if (o.overflowX !== 'visible' || o.overflowY !== 'visible') {
        const p = el.getBoundingClientRect();
        const cut = Math.max(p.left - (r.left - reach), p.top - (r.top - reach), r.right + reach - p.right, r.bottom + reach - p.bottom);
        if (cut > 0.5) {
          clipped = { by: [...el.classList].find((c) => c.startsWith('Mui')) ?? el.tagName.toLowerCase(), px: +cut.toFixed(1) };
          break;
        }
      }
    }
  }
  return { ring, indicator, elsewhere, clipped, focused: root.classList.contains('Mui-focused') || root.matches(':focus-within') };
};

const results = {};
for (const side of SIDES) {
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto(`http://localhost:5186/?side=${side}`);
  await page.waitForFunction(() => window.__cases);
  await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important; animation: none !important; }' });
  const cases = await page.evaluate(() => window.__cases);
  const reset = async () => {
    await page.keyboard.press('Escape');
    await page.mouse.click(2, 2);
    await page.evaluate(() => document.activeElement?.blur());
  };
  const keyboard = async (id) => {
    await reset();
    await page.locator(`[data-sentinel="${id}"]`).focus();
    await page.keyboard.press('Tab');
  };
  await keyboard('__button');
  const button = await page.evaluate(read, { id: '__button' });
  const rows = [];
  for (const c of cases) {
    await reset();
    const rest = await page.evaluate(read, { id: c.id });
    await keyboard(c.id);
    const kb = await page.evaluate(read, { id: c.id });
    let mouse = null;
    if (c.kind === 'text') {
      await reset();
      const target = page.locator(`[data-case="${c.id}"] input:not([type=hidden]):not([aria-hidden]), [data-case="${c.id}"] textarea:not([aria-hidden])`).first();
      await target.click({ timeout: 3000 });
      await page.mouse.move(2, 2);
      mouse = await page.evaluate(read, { id: c.id });
    }
    rows.push({ ...c, rest, keyboard: kb, mouse });
  }
  await reset();
  await page.screenshot({ path: path.join(OUT, `${side}.png`), fullPage: true });
  results[side] = { button, rows };
  await page.close();
}
fs.writeFileSync(path.join(OUT, 'results.json'), JSON.stringify(results, null, 2));

const score = {};
for (const side of SIDES) {
  const { button, rows } = results[side];
  const fails = [];
  const notes = [];
  let checks = 0;
  const want = button.ring;
  for (const r of rows) {
    const fail = (what) => fails.push(`${r.id}: ${what}`);
    checks += 1;
    if (r.rest.ring.style !== 'none' && parseFloat(r.rest.ring.width) > 0) fail(`ring at rest (${r.rest.ring.style} ${r.rest.ring.width})`);
    for (const [mode, m] of [['keyboard', r.keyboard], ['mouse', r.mouse]]) {
      if (!m) continue;
      checks += 1;
      if (!m.focused) { fail(`${mode}: never focused`); continue; }
      const ring = m.ring;
      const diff = ['style', 'width', 'offset', ...(r.error ? [] : ['color'])].filter((k) => ring[k] !== want[k]);
      if (ring.style === 'none') fail(`${mode}: no ring on the box${m.elsewhere.length ? ` (an outline on ${m.elsewhere.join(', ')} instead)` : ''}`);
      else if (diff.length) fail(`${mode}: ring differs from Button's (${diff.map((k) => `${k} ${ring[k]} vs ${want[k]}`).join(', ')})`);
      if (r.error && ring.style !== 'none') notes.push(`${r.id} ${mode}: error ring color ${ring.color}`);
      checks += 1;
      const changed = Object.keys(m.indicator).filter((k) => m.indicator[k] !== r.rest.indicator[k]);
      // an error field's red border/underline is the error state's look: how it reacts to focus is the agent's call (noted, not failed)
      const what = `${mode}: the border/underline still changes on focus (${changed.map((k) => `${k} ${r.rest.indicator[k]} → ${m.indicator[k]}`).join(', ')})`;
      if (changed.length) (r.error ? notes.push(`${r.id} ${what}`) : fail(what));
      checks += 1;
      if (m.clipped) fail(`${mode}: ring cut by ${m.clipped.px}px (${m.clipped.by})`);
    }
  }
  score[side] = { button: want, checks, failed: fails.length, fails, notes };
}
fs.writeFileSync(path.join(OUT, 'score.json'), JSON.stringify(score, null, 2));
for (const side of SIDES) console.log(`${side.padEnd(9)} ${score[side].checks} checks · ${score[side].failed} failed`);
await browser.close();
await server.close();
