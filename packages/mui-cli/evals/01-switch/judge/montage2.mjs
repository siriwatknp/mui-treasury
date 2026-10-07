import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';
const OUT = path.resolve('out');
const r = JSON.parse(fs.readFileSync(path.join(OUT, 'results.json'), 'utf8'));
const SIDES = ['with-cli', 'no-cli'];
const img = (f) => `data:image/png;base64,${fs.readFileSync(path.join(OUT, f)).toString('base64')}`;
const wh = (b) => (b ? `${b[0]}×${b[1]}` : '—');
const cell = (c) => `<td><img src="${img(c.file)}"><div class="m">root <b>${wh(c.root)}</b> · track <b>${wh(c.track)}</b> · thumb <b>${wh(c.thumb)}</b>${c.clippedBy.length ? `<br><span class="w">overflow:hidden on root (ring fits in padding)</span>` : ''}</div></td>`;
const html = `<html><head><style>
body{font:13px system-ui;margin:16px;background:#fff;color:#222}table{border-collapse:collapse}
th{padding:6px 12px;font-size:15px}td{border:1px solid #e5e5e5;text-align:center;padding:6px 10px;vertical-align:middle}
td:first-child{text-align:left;white-space:nowrap;font-weight:600}img{height:84px}.m{color:#555;font-size:12px;margin-top:2px}.w{color:#b26a00}
</style></head><body><table><tr><th></th>${SIDES.map((s) => `<th>${s}</th>`).join('')}</tr>
${r['with-cli'].map((c, i) => `<tr><td>${c.name}</td>${SIDES.map((s) => cell(r[s][i])).join('')}</tr>`).join('')}
</table><p class="m">iOS reference: 51×31 track, 27×27 thumb. Sizes in CSS px. Images at 3× scale, 24px padding around each Switch.</p></body></html>`;
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 760, height: 800 } });
await page.setContent(html);
await page.screenshot({ path: path.join(OUT, 'switch-eval-side-by-side.png'), fullPage: true });
await browser.close();
