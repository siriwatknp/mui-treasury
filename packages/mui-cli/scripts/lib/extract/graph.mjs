import fs from 'node:fs';
import path from 'node:path';

const IMPORT = /import\s+([^;]*?)\s*from\s*["']([^"']+)["']|import\s*["']([^"']+)["']/g;
const ONLY_HELPERS = /^\{[^}]*\}$/;
const helperBinding = (b) => /Classes$|ClassKey$|UtilityClass$|^use[A-Z]|Context$/.test(b.trim().split(/\s+as\s+/)[0]);

/**
 * Component graph from the extraction pass: extends = the component a root styled() wraps; composes = the
 * component modules a component's own files import (followed through its folder); contentSource = the
 * typography token on its base font size.
 */
export function buildGraph({ muiDir, rows, names }) {
  const known = new Set(names);
  const nameOf = (element) => {
    const slotted = /^(Mui[A-Z]\w*?)(Root|Input|Label|Icon)?$/.exec(element);
    if (slotted && known.has(slotted[1])) {
      return slotted[1];
    }
    return known.has(`Mui${element}`) ? `Mui${element}` : null;
  };
  const componentOfImport = (fromFile, spec) => {
    if (!spec.startsWith('.')) {
      return null;
    }
    const abs = path.resolve(path.dirname(fromFile), spec);
    const rel = path.relative(muiDir, abs).split(path.sep);
    if ((rel[0] === 'internal' && rel[1] === 'svg-icons') || rel.join('/') === 'utils/createSvgIcon.mjs') {
      return known.has('MuiSvgIcon') ? { name: 'MuiSvgIcon' } : null;
    }
    if (rel[0] === 'internal' && rel.length === 2) {
      const name = `Mui${rel[1].replace(/\.mjs$/, '')}`;
      return known.has(name) ? { name } : null;
    }
    if (rel.length === 2 && (rel[1] === 'index.mjs' || rel[1] === `${rel[0]}.mjs`) && known.has(`Mui${rel[0]}`)) {
      return { name: `Mui${rel[0]}` };
    }
    return rel.length === 2 && rel[0] === path.basename(path.dirname(fromFile)) ? { local: abs } : null;
  };
  const composesOf = (entry) => {
    const found = new Set();
    const seen = new Set();
    const walk = (file) => {
      if (seen.has(file) || !fs.existsSync(file)) {
        return;
      }
      seen.add(file);
      for (const [, bindings = '', fromSpec, bareSpec] of fs.readFileSync(file, 'utf8').matchAll(IMPORT)) {
        const spec = fromSpec ?? bareSpec;
        const hit = componentOfImport(file, spec);
        const helpersOnly = ONLY_HELPERS.test(bindings.trim()) && bindings.slice(1, -1).split(',').filter((x) => x.trim()).every(helperBinding);
        if (hit?.name && !helpersOnly) {
          found.add(hit.name);
        } else if (hit?.local && !/Classes\.mjs$/.test(hit.local)) {
          walk(hit.local);
        }
      }
    };
    walk(entry);
    return found;
  };

  const graph = {};
  for (const name of [...known].sort()) {
    const own = rows.filter((r) => r.component === name);
    const rootRows = own.filter((r) => r.slot === 'root');
    const candidates = [...new Set((rootRows.length ? rootRows : own.filter((r) => r.internal).slice(0, 1)).map((r) => r.element))];
    const ext = candidates.map(nameOf).find(Boolean) ?? null;
    const dir = name.replace(/^Mui/, '');
    const entry = [path.join(muiDir, dir, `${dir}.mjs`), path.join(muiDir, 'internal', `${dir}.mjs`)].find((f) => fs.existsSync(f));
    const composes = entry ? [...composesOf(entry)].filter((c) => c !== name && c !== ext).sort() : [];
    const fontToken = own.find((r) => r.prop === 'fontSize' && !r.matcher && !r.selector.length && r.token?.startsWith('typography.') && r.slot === 'root')
      ?? own.find((r) => r.prop === 'fontSize' && !r.matcher && !r.selector.length && r.token?.startsWith('typography.'));
    const node = {
      ...(ext && ext !== name ? { extends: ext } : {}),
      ...(composes.length ? { composes } : {}),
      ...(fontToken ? { contentSource: fontToken.token.replace(/\.fontSize$/, '') } : {}),
    };
    if (Object.keys(node).length) {
      graph[name] = node;
    }
  }
  const inherit = (name, seen = new Set()) => {
    const node = graph[name];
    if (!node || seen.has(name)) {
      return null;
    }
    seen.add(name);
    return node.contentSource ?? (node.extends ? inherit(node.extends, seen) : null);
  };
  for (const [name, node] of Object.entries(graph)) {
    if (!node.contentSource && node.extends) {
      const source = inherit(node.extends);
      if (source) {
        node.contentSource = source;
        node.contentSourceVia = node.extends;
      }
    }
  }
  return graph;
}
