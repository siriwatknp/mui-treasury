import { createServer } from 'vite';
import { chromium } from 'playwright-core';
const server = await createServer({ root: process.cwd(), logLevel: 'error', server: { port: 5188 } });
await server.listen();
const browser = await chromium.launch({ channel: 'chrome' });
for (const side of ['vanilla', 'with-cli', 'no-cli']) for (const width of [390, 1280]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(`http://localhost:5188/?side=${side}`);
  await page.addStyleTag({ content: '*{transition:none!important}' });
  await page.waitForSelector('[data-case]');
  const rows = await page.evaluate(() => ['filled/medium label value', 'filled/small label value', 'filled/medium adornments', 'filled/medium Autocomplete value', 'filled/medium Autocomplete chips'].map((id) => {
    const box = document.querySelector(`[data-case="${id}"]`);
    const root = box.querySelector('.MuiInputBase-root').getBoundingClientRect();
    const label = box.querySelector('.MuiInputLabel-root');
    const input = box.querySelector('input:not([type=hidden])');
    // glyph boxes: label text via a Range (cap height ≈ ascent−descent), value via canvas metrics at the input font
    const lr = label.getBoundingClientRect();
    const cs = getComputedStyle(input);
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const m = ctx.measureText('Value');
    const ir = input.getBoundingClientRect();
    const lineTop = ir.top + parseFloat(cs.paddingTop);
    const lineH = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.4375;
    const baseline = lineTop + (lineH - (m.fontBoundingBoxAscent + m.fontBoundingBoxDescent)) / 2 + m.fontBoundingBoxAscent;
    const valueGlyphTop = baseline - m.actualBoundingBoxAscent;
    const lcs = getComputedStyle(label);
    const lctx = document.createElement('canvas').getContext('2d');
    lctx.font = `${lcs.fontWeight} ${lcs.fontSize} ${lcs.fontFamily}`;
    const lm = lctx.measureText('Label');
    const scale = new DOMMatrix(lcs.transform).a;
    const lLineH = (parseFloat(lcs.lineHeight) || parseFloat(lcs.fontSize) * 1.4375) * scale;
    const lBaseline = lr.top + (lLineH - (lm.fontBoundingBoxAscent + lm.fontBoundingBoxDescent) * scale) / 2 + lm.fontBoundingBoxAscent * scale;
    const labelGlyphBottom = lBaseline + lm.actualBoundingBoxDescent * scale;
    return `${id.padEnd(34)} root ${root.height.toFixed(1)} · label line bottom→value line top ${(lineTop - lr.bottom).toFixed(1)}px · glyph gap ${(valueGlyphTop - labelGlyphBottom).toFixed(1)}px`;
  }));
  console.log(`--- ${side} @${width}`); rows.forEach((r) => console.log('  ' + r));
  await page.locator('[data-case="filled/medium label value"]').screenshot({ path: `out/filled-${side}-${width}.png` });
  await page.close();
}
await browser.close(); await server.close();
