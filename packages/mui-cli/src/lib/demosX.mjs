import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from './data.mjs';

const DIR = path.join(DATA_DIR, 'x/demos');
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

let index;
const loadIndex = () => (index ??= readJson(path.join(DIR, 'index.json')));

export const xProducts = () => loadIndex().products;
export const xDemoSource = () => loadIndex().demoSource;

/** Product record ({ url, features }) or null. */
export const xProduct = (product) => xProducts()[product] ?? null;

/** Page record for a product/feature ({ url, plan, demos, assets }), or null. */
export function xDemosFor(product, feature) {
  return xProduct(product)?.features.some((f) => f.feature === feature) ? readJson(path.join(DIR, 'pages', product, `${feature}.json`)) : null;
}

/** Every demo of a product (metadata only, each with its `feature`) — one small file, no page reads. */
export function xAllDemos(product) {
  return { url: xProduct(product).url, demos: readJson(path.join(DIR, 'lists', `${product}.json`)) };
}
