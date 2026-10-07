import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from './data.mjs';

const DIR = path.join(DATA_DIR, 'material/demos');
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

let index;
const loadIndex = () => (index ??= readJson(path.join(DIR, 'index.json')));

export const demoPagesIndex = () => loadIndex().demoPages;
export const demoSource = () => loadIndex().demoSource;

/** Page record for a component, or null when no docs page maps to it. */
export async function demosFor(component) {
  const slug = loadIndex().demoPages[component];
  return slug ? readJson(path.join(DIR, 'pages', `${slug}.json`)) : null;
}

/** The demo in the requested language: the official .js twin for `js`, the stored source otherwise. */
export function demoIn(demo, js) {
  return js && demo.js ? { source: demo.js, lang: 'js', analysis: demo.analysis.js } : { source: demo.source, lang: demo.lang, analysis: demo.analysis.source };
}
