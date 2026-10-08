/**
 * @file MUI X views shared by `mui component <X>` and `mui demos <X>`: the feature
 * map, the demo table and one demo's source. Plan (community/pro/premium) is display-only.
 */
import { xProduct } from './demosX.mjs';
import { demoIn } from './demos.mjs';
import { jsonOut } from './json.mjs';

const fitWidth = (used) => (process.stdout.isTTY ? Math.max(20, (process.stdout.columns ?? 100) - used) : Infinity);
const trim = (s, n) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

export function renderFeatureMap(program, product, label) {
  const record = xProduct(product);
  const total = record.features.reduce((n, f) => n + f.demos, 0);
  if (program.opts().json) {
    jsonOut('x-features', { product, label, page: record.url, features: record.features });
    return;
  }
  console.log(`${label} — MUI X ${product} · ${record.url}`);
  console.log(`no style rows for ${label} yet — features & demos:\n`);
  const featW = Math.max(7, ...record.features.map((f) => f.feature.length));
  const planW = Math.max(4, ...record.features.map((f) => f.plan.length));
  console.log(`  ${'FEATURE'.padEnd(featW)}  ${'PLAN'.padEnd(planW)}  DEMOS`);
  for (const f of record.features) {
    console.log(`  ${f.feature.padEnd(featW)}  ${f.plan.padEnd(planW)}  ${String(f.demos).padStart(5)}`);
  }
  console.log(`\n${total} docs demos — \`mui demos ${product} <feature>\`, or \`mui demos ${product}\` for all`);
}

/** The demo table: one feature (SECTION column) or, with `feature` null, the whole product (FEATURE column). */
export function renderDemoList(program, { product, label, url, demos, feature }) {
  const productWide = feature == null;
  if (program.opts().json) {
    jsonOut('x-demos', {
      product,
      ...(productWide ? {} : { feature }),
      page: url,
      demos: demos.map(({ name, plan, section, description, url: demoUrl, feature: f }) => ({ name, plan, section, description, url: demoUrl, ...(f ? { feature: f } : {}) })),
    });
    return;
  }
  console.log(`${label}${productWide ? '' : ` · ${feature}`} — ${url}\n`);
  const col = productWide ? 'feature' : 'section';
  const head = productWide ? 'FEATURE' : 'SECTION';
  const nameW = Math.max(4, ...demos.map((d) => d.name.length));
  const planW = Math.max(4, ...demos.map((d) => d.plan.length));
  const colW = Math.max(head.length, ...demos.map((d) => d[col].length));
  const descW = fitWidth(nameW + planW + colW + 8);
  console.log(`  ${'DEMO'.padEnd(nameW)}  ${'PLAN'.padEnd(planW)}  ${head.padEnd(colW)}  DESCRIPTION`);
  for (const d of demos) {
    console.log(`  ${d.name.padEnd(nameW)}  ${d.plan.padEnd(planW)}  ${d[col].padEnd(colW)}  ${trim(d.description ?? '', descW)}`);
  }
  console.log(`\n→ mui demos ${product} ${productWide ? '<feature>' : feature} <Demo> [--js]  (prints the runnable source)`);
}

/** Print one demo's source; `feature` is omitted for a product-wide pool (each demo carries its own). */
export async function printOneDemo(program, { product, feature, url, demos }, name, options) {
  const demo = demos.find((d) => d.name === name);
  if (!demo) {
    throw new Error(`no demo '${name}' on ${url} — available: ${demos.map((d) => d.name).join(', ')}`);
  }
  const { source, lang } = demoIn(demo, options.js);
  const base = { product, feature: feature ?? demo.feature, name: demo.name, plan: demo.plan, section: demo.section, url: demo.url, lang };
  if (options.copy) {
    const { copyToClipboard } = await import('./clipboard.mjs');
    await copyToClipboard(source);
    if (program.opts().json) {
      jsonOut('x-demo', { ...base, copied: true });
      return;
    }
    console.log(`copied ${demo.name} (${lang}, ${source.split('\n').length} lines) to clipboard`);
    return;
  }
  if (program.opts().json) {
    jsonOut('x-demo', { ...base, source });
    return;
  }
  console.log(source);
}
