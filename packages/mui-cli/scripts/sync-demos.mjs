import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from '../src/lib/data.mjs';
import { readPins, tagFor, vendorPath, vendorTag } from './lib/pins.mjs';
import { analyzeDemo } from './lib/analyzeDemo.mjs';

const ts = (await import('typescript')).default;

const version = readPins().material;
const TAG = tagFor(version);
const VENDOR = vendorPath('material', version);
const BASE = 'docs/data/material/components';
const OUT = path.join(DATA_DIR, 'material/demos');

if (vendorTag(VENDOR) !== TAG) {
  throw new Error(`vendor/material-ui@${version} missing or not at ${TAG} — run \`pnpm vendor\``);
}

/** slug → { components, url } — hand-maintained (docs folders rarely move). */
const PAGES = {
  accordion: { components: ['MuiAccordion', 'MuiAccordionSummary', 'MuiAccordionDetails'], url: 'react-accordion' },
  alert: { components: ['MuiAlert'], url: 'react-alert' },
  'app-bar': { components: ['MuiToolbar'], url: 'react-app-bar' },
  autocomplete: { components: ['MuiAutocomplete'], url: 'react-autocomplete' },
  avatars: { components: ['MuiAvatar'], url: 'react-avatar' },
  badges: { components: ['MuiBadge'], url: 'react-badge' },
  'bottom-navigation': { components: ['MuiBottomNavigation', 'MuiBottomNavigationAction'], url: 'react-bottom-navigation' },
  breadcrumbs: { components: ['MuiBreadcrumbs'], url: 'react-breadcrumbs' },
  'button-group': { components: ['MuiButtonGroup'], url: 'react-button-group' },
  buttons: { components: ['MuiButton', 'MuiIconButton'], url: 'react-button' },
  checkboxes: { components: ['MuiCheckbox'], url: 'react-checkbox' },
  chips: { components: ['MuiChip'], url: 'react-chip' },
  dialogs: { components: ['MuiDialog', 'MuiDialogTitle', 'MuiDialogContent', 'MuiDialogActions'], url: 'react-dialog' },
  dividers: { components: ['MuiDivider'], url: 'react-divider' },
  'floating-action-button': { components: ['MuiFab'], url: 'react-floating-action-button' },
  icons: { components: ['MuiSvgIcon'], url: 'icons' },
  lists: { components: ['MuiList', 'MuiListItemButton', 'MuiListItemIcon'], url: 'react-list' },
  menus: { components: ['MuiMenuItem'], url: 'react-menu' },
  pagination: { components: ['MuiPaginationItem'], url: 'react-pagination' },
  progress: { components: ['MuiLinearProgress'], url: 'react-progress' },
  'radio-buttons': { components: ['MuiRadio'], url: 'react-radio-button' },
  selects: { components: ['MuiSelect'], url: 'react-select' },
  slider: { components: ['MuiSlider'], url: 'react-slider' },
  snackbars: { components: ['MuiSnackbarContent'], url: 'react-snackbar' },
  steppers: { components: ['MuiStepper', 'MuiStep', 'MuiStepLabel', 'MuiStepContent', 'MuiStepConnector'], url: 'react-stepper' },
  switches: { components: ['MuiSwitch', 'MuiFormControlLabel'], url: 'react-switch' },
  table: { components: ['MuiTableCell', 'MuiTablePagination', 'MuiTableSortLabel'], url: 'react-table' },
  tabs: { components: ['MuiTabs', 'MuiTab', 'MuiTabScrollButton'], url: 'react-tabs' },
  'text-fields': {
    components: ['MuiTextField', 'MuiOutlinedInput', 'MuiFilledInput', 'MuiInput', 'MuiInputBase', 'MuiInputLabel', 'MuiInputAdornment', 'MuiFormHelperText'],
    url: 'react-text-field',
  },
  'toggle-button': { components: ['MuiToggleButton'], url: 'react-toggle-button' },
  tooltips: { components: ['MuiTooltip'], url: 'react-tooltip' },
};

const show = (file) => {
  const abs = path.join(VENDOR, file);
  return fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
};

/** Relative specifiers a source imports (`./x` — includes type-only and side-effect forms). */
const relativeImports = (source) =>
  [...source.matchAll(/(?:from\s+|import\s+)'(\.[^']+)'/g)].map((m) => m[1]);

/**
 * Capture the data files a demo imports (`./top100Films` → top100Films.ts),
 * recursing through asset→asset imports (server → movies). Mutates `assets`;
 * unresolvable specifiers are skipped (compose warns at use time).
 */
const captureAssets = (slug, source, assets) => {
  for (const spec of relativeImports(source)) {
    const name = spec.replace(/^\.\//, '');
    if (assets[name]) {
      continue;
    }
    for (const ext of ['tsx', 'ts', 'js']) {
      const body = show(`${BASE}/${slug}/${name}.${ext}`);
      if (body !== null) {
        const jsTwin = ext === 'js' ? null : show(`${BASE}/${slug}/${name}.js`);
        assets[name] = { file: `${name}.${ext}`, source: body, ...(jsTwin === null ? {} : { jsFile: `${name}.js`, js: jsTwin }) };
        captureAssets(slug, body, assets);
        break;
      }
    }
  }
};

const anchor = (title) =>
  title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'pages'), { recursive: true });

const index = {};
let pageCount = 0;
let demoCount = 0;
for (const [slug, { components, url }] of Object.entries(PAGES)) {
  const md = show(`${BASE}/${slug}/${slug}.md`);
  if (!md) {
    throw new Error(`no docs page for slug '${slug}' — update the hand map`);
  }
  let h2 = 'Overview';
  let h3 = null;
  let paras = []; // completed paragraphs since the last heading/demo
  let cur = [];
  const flush = () => {
    if (cur.length) {
      paras.push(cur.join(' '));
      cur = [];
    }
  };
  const clean = (s) =>
    s
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[`*]/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  // the paragraph right above a demo ref introduces it — first sentence
  const description = () => {
    flush();
    const text = clean(paras[paras.length - 1] ?? '');
    const m = /^(.*?[.!?])(\s|$)/.exec(text);
    return (m ? m[1] : text).slice(0, 160);
  };
  const demos = [];
  const assets = {}; // name → { file, source } — data files demos import (page-level, deduped)
  for (const line of md.split('\n')) {
    const heading = /^(#{2,3})\s+(.+)$/.exec(line);
    if (heading) {
      if (heading[1] === '##') {
        h2 = heading[2].trim();
        h3 = null;
      } else {
        h3 = heading[2].trim();
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
      continue; // cross-page refs (pages/...) are not this slug's demos
    }
    const name = ref[1];
    const tsx = show(`${BASE}/${slug}/${name}.tsx`);
    const js = show(`${BASE}/${slug}/${name}.js`);
    const source = tsx ?? js;
    if (!source) {
      continue;
    }
    const lang = tsx ? 'tsx' : 'js';
    demos.push({
      name,
      section: h3 ? `${h2} › ${h3}` : h2,
      description: description(),
      url: `https://mui.com/material-ui/${url}/#${anchor(h3 ?? h2)}`,
      lang,
      source,
      ...(tsx && js ? { js } : {}),
      analysis: {
        source: analyzeDemo(ts, source, name, lang === 'tsx' ? 'tsx' : 'jsx'),
        ...(tsx && js ? { js: analyzeDemo(ts, js, name, 'jsx') } : {}),
      },
    });
    captureAssets(slug, source, assets);
    paras = [];
    cur = [];
  }
  const page = {
    slug,
    url: `https://mui.com/material-ui/${url}/`,
    components,
    demos,
    ...(Object.keys(assets).length ? { assets } : {}),
  };
  fs.writeFileSync(path.join(OUT, 'pages', `${slug}.json`), `${JSON.stringify(page)}\n`);
  for (const comp of components) {
    index[comp] = slug;
  }
  pageCount += 1;
  demoCount += demos.length;
}

fs.writeFileSync(path.join(OUT, 'index.json'), `${JSON.stringify({ demoSource: TAG, demoPages: index }, null, 2)}\n`);
console.log(`synced ${pageCount} pages, ${demoCount} demos → data/material/demos (material-ui@${TAG})`);
