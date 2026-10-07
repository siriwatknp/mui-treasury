import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from '../src/lib/data.mjs';
import { readPins, tagFor, vendorPath, vendorTag } from './lib/pins.mjs';
import { analyzeDemo } from './lib/analyzeDemo.mjs';

const ts = (await import('typescript')).default;

const version = readPins().x;
const TAG = tagFor(version);
const VENDOR = vendorPath('x', version);
const BASE = 'docs/data';
const OUT = path.join(DATA_DIR, 'x/demos');

if (vendorTag(VENDOR) !== TAG) {
  throw new Error(`vendor/mui-x@${version} missing or not at ${TAG} — run \`pnpm vendor\``);
}

/** product dir → docs url segment. */
const PRODUCTS = {
  'data-grid': 'react-data-grid',
  charts: 'react-charts',
  'date-pickers': 'react-date-pickers',
  'tree-view': 'react-tree-view',
};

const show = (file) => {
  const abs = path.join(VENDOR, file);
  return fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
};

const TIER_RANK = { community: 0, pro: 1, premium: 2 };

const pkgTier = (mod) => {
  const m = /^@mui\/(x-[\w-]+?)(?:\/|$)/.exec(mod);
  if (!m) {
    return null;
  }
  return /-premium$/.test(m[1]) ? 'premium' : /-pro$/.test(m[1]) ? 'pro' : 'community';
};

/** Highest tier among the demo's `@mui/x-*` import specifiers (never label strings in JSX). */
const tierOf = (source) => {
  let rank = 0;
  for (const [, mod] of source.matchAll(/(?:from|import)\s+'([^']+)'/g)) {
    const t = pkgTier(mod);
    if (t) {
      rank = Math.max(rank, TIER_RANK[t]);
    }
  }
  return ['community', 'pro', 'premium'][rank];
};

const planRange = (tiers) => {
  const present = [...new Set(tiers)].sort((a, b) => TIER_RANK[a] - TIER_RANK[b]);
  return present.length ? present.join(',') : 'community';
};

const relativeImports = (source) => [...source.matchAll(/(?:from\s+|import\s+)'(\.[^']+)'/g)].map((m) => m[1]);

const anchor = (title) => title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

const clean = (s) =>
  s
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[`*_]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/** H1 of a sub-page, product prefix stripped — becomes the section prefix of its demos. */
const pageTitle = (md, product) => {
  const m = /^#\s+(.+)$/m.exec(md);
  if (!m) {
    return null;
  }
  const prefix = new RegExp(`^${product.replace(/-/g, '[ -]')}\\s*[-–]\\s*`, 'i');
  return clean(m[1]).replace(prefix, '') || null;
};

/** Demo refs of one .md in document order, with section and the sentence introducing each. */
const parseMd = (md, sectionPrefix) => {
  const out = [];
  let h2 = sectionPrefix || 'Overview';
  let h3 = null;
  let paras = [];
  let cur = [];
  const flush = () => {
    if (cur.length) {
      paras.push(cur.join(' '));
      cur = [];
    }
  };
  const description = () => {
    flush();
    const text = clean(paras[paras.length - 1] ?? '');
    const m = /^(.*?[.!?])(\s|$)/.exec(text);
    return (m ? m[1] : text).slice(0, 160);
  };
  const join = (...parts) => parts.filter(Boolean).join(' › ');
  let inFence = false;
  for (const line of md.split('\n')) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      flush();
      continue;
    }
    if (inFence) {
      continue;
    }
    const heading = /^(#{2,3})\s+(.+)$/.exec(line);
    if (heading) {
      const text = clean(heading[2]);
      if (heading[1] === '##') {
        h2 = join(sectionPrefix, text);
        h3 = null;
      } else {
        h3 = text;
      }
      paras = [];
      cur = [];
      continue;
    }
    const ref = /\{\{"demo":\s*"([\w./-]+)\.js"/.exec(line);
    if (!ref) {
      if (!line.trim()) {
        flush();
      } else if (!line.startsWith('{{') && !line.startsWith(':::') && !line.startsWith('<')) {
        cur.push(line.trim());
      }
      continue;
    }
    if (ref[1].includes('/')) {
      continue;
    }
    out.push({ name: ref[1], section: join(h2, h3), anchor: anchor(h3 ?? h2), description: description() });
    paras = [];
    cur = [];
  }
  return out;
};

const walkMd = (dir) =>
  fs.readdirSync(path.join(VENDOR, dir), { withFileTypes: true }).flatMap((e) => {
    const rel = `${dir}/${e.name}`;
    return e.isDirectory() ? walkMd(rel) : e.name.endsWith('.md') ? [rel] : [];
  });

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'lists'), { recursive: true });

const index = {};
let featureCount = 0;
let demoCount = 0;

for (const [product, urlSeg] of Object.entries(PRODUCTS)) {
  const mdByFeature = new Map();
  for (const file of walkMd(`${BASE}/${product}`)) {
    const rest = file.slice(`${BASE}/${product}/`.length);
    const dir = path.dirname(rest);
    const feature = dir === '.' ? rest.replace(/\.md$/, '') : dir;
    mdByFeature.set(feature, [...(mdByFeature.get(feature) ?? []), file]);
  }

  const features = [];
  const list = [];
  for (const [feature, mdFiles] of [...mdByFeature].sort(([a], [b]) => a.localeCompare(b))) {
    const isMain = (f) => ['index', path.basename(feature)].includes(path.basename(f, '.md'));
    mdFiles.sort((a, b) => Number(isMain(b)) - Number(isMain(a)) || a.localeCompare(b));

    const demos = [];
    const seen = new Set();
    const assets = {};
    /** Data files keyed by their path from the feature dir (`top100`, `../dataset/weather`); nested imports resolve from the importing file. */
    const captureAssets = (featureDir, fromDir, source) => {
      for (const spec of relativeImports(source)) {
        const key = path.posix.normalize(path.posix.join(fromDir, spec));
        if (assets[key]) {
          continue;
        }
        for (const ext of ['tsx', 'ts', 'js']) {
          const body = show(`${featureDir}/${key}.${ext}`);
          if (body !== null) {
            const base = path.posix.basename(key);
            const jsTwin = ext === 'js' ? null : show(`${featureDir}/${key}.js`);
            assets[key] = { file: `${base}.${ext}`, source: body, ...(jsTwin === null ? {} : { jsFile: `${base}.js`, js: jsTwin }) };
            captureAssets(featureDir, path.posix.dirname(key), body);
            break;
          }
        }
      }
    };

    for (const mdFile of mdFiles) {
      const md = show(mdFile);
      const dir = path.dirname(mdFile);
      const prefix = isMain(mdFile) ? '' : (pageTitle(md, product) ?? path.basename(mdFile, '.md'));
      for (const ref of parseMd(md, prefix)) {
        if (seen.has(ref.name)) {
          continue;
        }
        const tsx = show(`${dir}/${ref.name}.tsx`);
        const js = show(`${dir}/${ref.name}.js`);
        const source = tsx ?? js;
        if (!source) {
          continue;
        }
        seen.add(ref.name);
        const lang = tsx ? 'tsx' : 'js';
        demos.push({
          name: ref.name,
          plan: tierOf(source),
          section: ref.section,
          description: ref.description,
          url: `https://mui.com/x/${urlSeg}/${feature}/#${ref.anchor}`,
          lang,
          source,
          ...(tsx && js ? { js } : {}),
          analysis: {
            source: analyzeDemo(ts, source, ref.name, lang === 'tsx' ? 'tsx' : 'jsx'),
            ...(tsx && js ? { js: analyzeDemo(ts, js, ref.name, 'jsx') } : {}),
          },
        });
        captureAssets(dir, '', source);
      }
    }

    if (!demos.length) {
      continue;
    }
    const plan = planRange(demos.map((d) => d.plan));
    const page = { product, feature, url: `https://mui.com/x/${urlSeg}/${feature}/`, plan, demos, ...(Object.keys(assets).length ? { assets } : {}) };
    const outFile = path.join(OUT, 'pages', product, `${feature}.json`);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, `${JSON.stringify(page)}\n`);
    features.push({ feature, plan, demos: demos.length });
    list.push(...demos.map((d) => ({ name: d.name, feature, plan: d.plan, section: d.section, description: d.description, url: d.url })));
    featureCount += 1;
    demoCount += demos.length;
  }
  index[product] = { url: `https://mui.com/x/${urlSeg}/`, features };
  fs.writeFileSync(path.join(OUT, 'lists', `${product}.json`), `${JSON.stringify(list)}\n`);
}

fs.writeFileSync(path.join(OUT, 'index.json'), `${JSON.stringify({ demoSource: TAG, products: index }, null, 2)}\n`);
const metaFile = path.join(DATA_DIR, 'meta.json');
const meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));
meta.builtWith = { ...meta.builtWith, x: version };
fs.writeFileSync(metaFile, `${JSON.stringify(meta, null, 2)}\n`);
console.log(`synced ${Object.keys(PRODUCTS).length} products, ${featureCount} features, ${demoCount} demos → data/x/demos (mui-x@${TAG})`);
