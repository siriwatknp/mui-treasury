import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { records } from './recorder.mjs';
import { categoryOf } from './categories.mjs';
import { buildGraph } from './graph.mjs';

const [root, outFile] = process.argv.slice(2);
const muiDir = path.dirname(createRequire(path.join(root, 'package.json')).resolve('@mui/material/package.json'));
const muiVersion = JSON.parse(fs.readFileSync(path.join(muiDir, 'package.json'), 'utf8')).version;

const skipped = [];
for (const dir of fs.readdirSync(muiDir).filter((d) => /^[A-Z]/.test(d)).sort()) {
  const entry = path.join(muiDir, dir, 'index.mjs');
  if (!fs.existsSync(entry)) {
    continue;
  }
  try {
    await import(pathToFileURL(entry).href);
  } catch (err) {
    skipped.push({ dir, reason: err.message.split('\n')[0].replace(/ imported from .*/, '') });
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
const named = records.filter((rec) => rec.name);
const shared = new Set(
  Object.entries(Object.groupBy(named, (rec) => `${rec.name}|${rec.slot}`))
    .filter(([, list]) => new Set(list.map((rec) => elementName(rec.tag))).size > 1)
    .map(([key]) => key),
);

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
      const evaluated = typeof style === 'function' ? style({ theme, ownerState: {} }) : style;
      (Array.isArray(evaluated) ? evaluated : [evaluated]).forEach((o) => walk(o, null, []));
    });
  }
  return rows;
}

const plain = collect(themes.plain);
const vars = collect(themes.vars);
const typo = collect(themes.typography);

const VAR_ONLY = /^var\(--mui-([\w-]+?)(?:,.*)?\)$/;
const rows = [...plain.values()].map((row) => {
  const out = { ...row, category: categoryOf(row.prop) };
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
const graph = buildGraph({ muiDir, rows, names: components });

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
fs.writeFileSync(outFile, JSON.stringify({ $source: { mui: muiVersion }, fns, rows, graph, components }));
console.log(JSON.stringify({ rows: rows.length, components: new Set(rows.map((r) => r.component)).size, slots: new Set(rows.filter((r) => !r.internal).map((r) => `${r.component}|${r.slot}`)).size, internal: rows.filter((r) => r.internal).length, shared: shared.size, fns: Object.keys(fns).length, tokens: rows.filter((r) => r.token).length, refs: rows.filter((r) => r.refs).length, partial: rows.filter((r) => r.partial).length, onlyInVars, graphNodes: Object.keys(graph).length, routeFailures, skipped }));
