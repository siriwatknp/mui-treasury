import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { records } from './recorder.mjs';
import { categoryOf } from './categories.mjs';
import { buildGraph } from './graph.mjs';
import { X_STYLED } from '../../../src/lib/xStyled.mjs';

// product: an MUI X product (data-grid) — its package's styles only, recorded with @mui/system's styled too (hooks.mjs)
const [root, outFile, product] = process.argv.slice(2);
const requireFromRoot = createRequire(path.join(root, 'package.json'));
const muiDir = path.dirname(requireFromRoot.resolve('@mui/material/package.json'));
const muiVersion = JSON.parse(fs.readFileSync(path.join(muiDir, 'package.json'), 'utf8')).version;
const x = product ? X_STYLED[product] : null;
if (product && !x) {
  throw new Error(`no MUI X product "${product}" — one of ${Object.keys(X_STYLED).join(', ')}`);
}
const xDir = x ? path.dirname(requireFromRoot.resolve(`${x.package}/package.json`)) : null;

// what the Data Grid root styles read from grid state (hooks.mjs): a measured grid without scrollbars
globalThis.__muiCliGridApi = { current: { state: { dimensions: { isReady: true, hasScrollX: false, hasScrollY: false, scrollbarSize: 0 } } } };

const skipped = [];
const entries = x
  ? [path.join(xDir, 'index.mjs')]
  : fs.readdirSync(muiDir).filter((d) => /^[A-Z]/.test(d)).sort().map((dir) => path.join(muiDir, dir, 'index.mjs')).filter((f) => fs.existsSync(f));
for (const entry of entries) {
  try {
    await import(pathToFileURL(entry).href);
  } catch (err) {
    skipped.push({ dir: path.basename(path.dirname(entry)), reason: err.message.split('\n')[0].replace(/ imported from .*/, '') });
  }
}
if (!records.length) {
  throw new Error('recorded 0 styled() calls — @mui/material moved styles/styled.mjs or utils/memoTheme.mjs; update scripts/lib/extract/hooks.mjs');
}

const { createTheme } = await import(pathToFileURL(path.join(muiDir, 'styles/index.mjs')).href);

const TYPO_VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline'];
const TYPO_PROPS = ['fontFamily', 'fontWeight', 'fontSize', 'lineHeight', 'letterSpacing', 'textTransform'];
const marker = (p) => `__typography:${p}__`;
const markerTypography = {
  fontFamily: marker('fontFamily'),
  fontWeightLight: marker('fontWeightLight'),
  fontWeightRegular: marker('fontWeightRegular'),
  fontWeightMedium: marker('fontWeightMedium'),
  fontWeightBold: marker('fontWeightBold'),
  ...Object.fromEntries(TYPO_VARIANTS.map((v) => [v, Object.fromEntries(TYPO_PROPS.map((p) => [p, marker(`${v}.${p}`)]))])),
};
const themes = {
  plain: createTheme(),
  vars: createTheme({ cssVariables: true }),
  typography: createTheme({ typography: markerTypography }),
};

const fns = {};
const fnId = (fn) => {
  const source = fn.toString();
  const id = crypto.createHash('sha1').update(source).digest('hex').slice(0, 10);
  fns[id] = source;
  return id;
};
const matcherKey = (props) => {
  if (!props) {
    return 'base';
  }
  if (typeof props === 'function') {
    return `fn:${fnId(props)}`;
  }
  return Object.entries(props).map(([k, v]) => `${k}=${v}`).join(',');
};
const slotName = (slot) => (slot ? slot.charAt(0).toLowerCase() + slot.slice(1) : null);
const elementName = (tag) => (typeof tag === 'string' ? tag : (tag?.displayName ?? tag?.name ?? tag?.render?.name ?? 'component'));
const named = records.filter((rec) => rec.name && (!x || x.keys.includes(rec.name)));
if (x && !named.length) {
  throw new Error(`recorded no ${x.keys.join('/')} styled() calls — ${x.package} moved its styled imports; update scripts/lib/extract/hooks.mjs`);
}
const shared = new Set(
  Object.entries(Object.groupBy(named, (rec) => `${rec.name}|${rec.slot}`))
    .filter(([, list]) => new Set(list.map((rec) => elementName(rec.tag))).size > 1)
    .map(([key]) => key),
);

// a style function that can't run without the component's state (MUI X range fields' active bar): its rows are left out
const failedStyles = new Set();

function collect(theme) {
  const rows = new Map();
  for (const rec of named) {
    const slot = slotName(rec.slot);
    const element = elementName(rec.tag);
    const slotLabel = slot === null ? `(internal:${element})` : shared.has(`${rec.name}|${rec.slot}`) ? `${slot}(${element})` : slot;
    rec.styles.forEach((style) => {
      const partial = typeof style === 'function' && style.name !== 'styleFromTheme' && /ownerState/.test(style.toString());
      const walk = (obj, matcher, selector) => {
        for (const [k, v] of Object.entries(obj ?? {})) {
          if (k === 'variants') {
            v.forEach((variant) => walk(variant.style, variant.props, selector));
          } else if (v && typeof v === 'object') {
            walk(v, matcher, [...selector, k]);
          } else if (v !== undefined && v !== null && typeof v !== 'boolean') {
            const id = `${rec.name}|${slotLabel}|${matcherKey(matcher)}|${selector.join(' ')}|${k}`;
            rows.set(id, {
              id,
              component: rec.name,
              slot,
              element,
              matcher: typeof matcher === 'function' ? { fn: fnId(matcher) } : (matcher ?? null),
              selector,
              prop: k,
              value: v,
              ...(slot === null ? { internal: true } : {}),
              ...(partial ? { partial: true } : {}),
            });
          }
        }
      };
      let evaluated;
      try {
        evaluated = typeof style === 'function' ? style({ theme, ownerState: {} }) : style;
      } catch (err) {
        failedStyles.add(`${rec.name}.${rec.slot}: ${err.message.split('\n')[0]}`);
        return;
      }
      (Array.isArray(evaluated) ? evaluated : [evaluated]).forEach((o) => walk(o, null, []));
    });
  }
  return rows;
}

const plain = collect(themes.plain);
const vars = collect(themes.vars);
const typo = collect(themes.typography);

const VAR_ONLY = /^var\(--mui-([\w-]+?)(?:,.*)?\)$/;
// CSS variables MUI X writes inline from props and measurements: a row reading one is not the theme's to set
const DYNAMIC = /var\(--(?:DataGrid-(?:rowHeight|headerHeight|\w*Width)|TreeView-\w+|height|width)\b/;
const rows = [...plain.values()].map((row) => {
  const out = { ...row, category: typeof row.value === 'string' && DYNAMIC.test(row.value) ? 'dynamic' : categoryOf(row.prop) };
  const typoValue = typo.get(row.id)?.value;
  const typoMatch = typeof typoValue === 'string' && /^__typography:([\w.]+)__$/.exec(typoValue);
  const varValue = vars.get(row.id)?.value;
  const varMatch = typeof varValue === 'string' && VAR_ONLY.exec(varValue);
  if (typoMatch) {
    out.token = `typography.${typoMatch[1]}`;
  } else if (varMatch) {
    out.token = varMatch[1].replace(/-/g, '.');
  } else if (typeof varValue === 'string' && varValue.includes('var(--mui-')) {
    out.refs = [...new Set([...varValue.matchAll(/var\(--mui-([\w-]+)/g)].map((m) => m[1].replace(/-/g, '.')))];
    out.expr = varValue;
  }
  return out;
});

const onlyInVars = [...vars.keys()].filter((id) => !plain.has(id)).length;
const components = [...new Set(named.map((rec) => rec.name))].sort();
const graph = buildGraph({ muiDir: xDir ?? muiDir, rows, names: components });

const MARK = '__styleOverrides:';
const routeFailures = [];
const stylesProxy = new Proxy({}, { get: (_, key) => (typeof key === 'string' ? `${MARK}${key}` : undefined) });
for (const rec of named.filter((r) => r.slot === 'Root' && typeof r.overridesResolver === 'function')) {
  let resolved;
  try {
    const anyState = new Proxy({}, { get: (_, key) => (typeof key === 'string' ? 'placeholder' : undefined) });
    resolved = rec.overridesResolver({ ownerState: anyState, theme: themes.plain }, stylesProxy);
  } catch (err) {
    routeFailures.push(`${rec.name}: ${err.message}`);
    continue;
  }
  const routes = {};
  for (const entry of [resolved].flat()) {
    if (entry && typeof entry === 'object') {
      for (const [selector, value] of Object.entries(entry)) {
        if (typeof value === 'string' && value.startsWith(MARK)) {
          routes[value.slice(MARK.length)] = [...(routes[value.slice(MARK.length)] ?? []), selector];
        }
      }
    }
  }
  if (Object.keys(routes).length) {
    (graph[rec.name] ??= {}).routes = routes;
  }
}
const source = x ? { mui: muiVersion, x: JSON.parse(fs.readFileSync(path.join(xDir, 'package.json'), 'utf8')).version } : { mui: muiVersion };
fs.writeFileSync(outFile, JSON.stringify({ $source: source, fns, rows, graph, components }));
console.log(JSON.stringify({ rows: rows.length, components: new Set(rows.map((r) => r.component)).size, slots: new Set(rows.filter((r) => !r.internal).map((r) => `${r.component}|${r.slot}`)).size, internal: rows.filter((r) => r.internal).length, shared: shared.size, fns: Object.keys(fns).length, tokens: rows.filter((r) => r.token).length, refs: rows.filter((r) => r.refs).length, partial: rows.filter((r) => r.partial).length, onlyInVars, graphNodes: Object.keys(graph).length, routeFailures, skipped, failedStyles: [...failedStyles] }));
