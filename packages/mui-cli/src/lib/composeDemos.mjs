/**
 * @file compose — merge several docs demos into ONE runnable file: demos are imports / declarations /
 * default export. Imports dedupe at BINDING level; imports + declarations +
 * type names share ONE namespace; collisions get numeric suffixes (label →
 * label2) applied at use sites found by a sync-time syntax-tree pass (never text replace —
 * strings, property keys, member access survive; object shorthand expands to
 * `label: label2`). Default exports become named functions; a Stack wrapper
 * (ThemeProvider when a theme is given) renders them all.
 */

/** Apply renames at the sync-time use sites of the demo's BODY statements; shorthand expands to `name: renamed`. */
function renameInBody(source, analysis, renameMap) {
  const body = analysis.body.map((b) => ({ ...b, text: b.text ?? source.slice(b.start, b.end) }));
  if (!Object.keys(renameMap).length) {
    return body.map((b) => b.text);
  }
  const edits = Object.entries(renameMap).flatMap(([from, to]) =>
    (analysis.sites[from] ?? []).map(([pos, end, shorthand]) => ({ pos, end, text: shorthand ? `${from}: ${to}` : to })),
  );
  return body.map((b) => {
    const local = edits.filter((e) => e.pos >= b.start && e.end <= b.end).sort((a, z) => z.pos - a.pos);
    const shift = b.text.length - (b.end - b.start);
    let text = b.text;
    for (const e of local) {
      const pos = e.pos - b.start + shift;
      const end = e.end - b.start + shift;
      text = text.slice(0, pos) + e.text + text.slice(end);
    }
    return text;
  });
}

const importKey = (i) => `${i.kind}|${i.module}|${i.imported ?? ''}|${i.local}|${i.typeOnly ? 't' : ''}`;

/**
 * @param {{ demos: Array<{ component: string, name: string, source: string, analysis: ReturnType<import('../../scripts/lib/analyzeDemo.mjs').analyzeDemo> }>,
 *           themeImport?: string | null, themeIsCreated?: boolean }} input
 * @returns {{ source: string, needs: string[], renamed: Array<{ from: string, to: string, demo: string }> }}
 */
export function composeDemos({ demos, themeImport = null, themeIsCreated = false }) {
  const taken = new Set(['ComposedDemos']);
  const seenImports = new Set();
  const pool = []; // final import records
  const renamed = [];
  const blocks = [];
  const sections = [];

  const freeName = (base) => {
    if (!taken.has(base)) {
      return base;
    }
    for (let n = 2; ; n += 1) {
      if (!taken.has(`${base}${n}`)) {
        return `${base}${n}`;
      }
    }
  };

  for (const demo of demos) {
    const parsed = demo.analysis;
    const renameMap = {};
    for (const imp of parsed.imports) {
      if (imp.kind === 'side-effect') {
        if (!seenImports.has(importKey(imp))) {
          seenImports.add(importKey(imp));
          pool.push(imp);
        }
        continue;
      }
      if (seenImports.has(importKey(imp))) {
        continue; // exact same binding already imported — dedupe, no rename
      }
      if (taken.has(imp.local)) {
        const to = freeName(imp.local);
        renameMap[imp.local] = to;
        renamed.push({ from: imp.local, to, demo: demo.name });
        const next = { ...imp, imported: imp.kind === 'named' ? (imp.imported ?? imp.local) : undefined, local: to };
        seenImports.add(importKey(next));
        taken.add(to);
        pool.push(next);
      } else {
        seenImports.add(importKey(imp));
        taken.add(imp.local);
        pool.push(imp);
      }
    }
    for (const name of parsed.bindings) {
      if (taken.has(name)) {
        const to = freeName(name);
        renameMap[name] = to;
        renamed.push({ from: name, to, demo: demo.name });
        taken.add(to);
      } else {
        taken.add(name);
      }
    }
    const bodyTexts = renameInBody(demo.source, parsed, renameMap);
    const componentName = renameMap[parsed.defaultName] ?? parsed.defaultName;
    blocks.push({ label: `${demo.component} · ${demo.name}`, text: bodyTexts.join('\n\n') });
    sections.push(componentName);
  }

  // emit imports grouped per module (defaults/ns one line each; named merged)
  const modules = [...new Set(pool.map((i) => i.module))].sort();
  const importLines = [];
  for (const module of modules) {
    const here = pool.filter((i) => i.module === module);
    for (const i of here.filter((x) => x.kind === 'side-effect')) {
      importLines.push(`import '${i.module}';`);
    }
    for (const i of here.filter((x) => x.kind === 'default')) {
      importLines.push(`import ${i.typeOnly ? 'type ' : ''}${i.local} from '${module}';`);
    }
    for (const i of here.filter((x) => x.kind === 'ns')) {
      importLines.push(`import * as ${i.local} from '${module}';`);
    }
    for (const typeOnly of [false, true]) {
      const named = here.filter((x) => x.kind === 'named' && Boolean(x.typeOnly) === typeOnly);
      if (named.length) {
        const specs = named
          .map((i) => (i.imported !== i.local ? `${i.imported} as ${i.local}` : i.local))
          .sort()
          .join(', ');
        importLines.push(`import ${typeOnly ? 'type ' : ''}{ ${specs} } from '${module}';`);
      }
    }
  }
  // wrapper bindings REUSE an existing import when one is there, alias only
  // on a real collision
  const claim = (base) => {
    const name = freeName(base);
    taken.add(name);
    return name;
  };
  let stackLocal = pool.find((i) => i.kind === 'default' && i.module === '@mui/material/Stack')?.local;
  if (!stackLocal) {
    stackLocal = claim('Stack');
    importLines.push(`import ${stackLocal} from '@mui/material/Stack';`);
  }
  let tpLocal = 'ThemeProvider';
  let ctLocal = 'createTheme';
  let optsLocal = 'themeOptions';
  if (themeImport) {
    const has = (imported) =>
      pool.find((i) => i.kind === 'named' && i.module === '@mui/material/styles' && i.imported === imported)?.local;
    tpLocal = has('ThemeProvider') ?? claim('ThemeProvider');
    // a created theme is handed to ThemeProvider as-is — no createTheme import
    ctLocal = themeIsCreated ? null : (has('createTheme') ?? claim('createTheme'));
    const specs = [
      ...(has('ThemeProvider') ? [] : [tpLocal === 'ThemeProvider' ? 'ThemeProvider' : `ThemeProvider as ${tpLocal}`]),
      ...(themeIsCreated || has('createTheme') ? [] : [ctLocal === 'createTheme' ? 'createTheme' : `createTheme as ${ctLocal}`]),
    ];
    if (specs.length) {
      importLines.push(`import { ${specs.join(', ')} } from '@mui/material/styles';`);
    }
    optsLocal = claim(themeIsCreated ? 'appTheme' : 'themeOptions');
    importLines.push(`import ${optsLocal} from '${themeImport}';`);
  }

  const list = sections.map((n) => `      <${n} />`).join('\n');
  const inner = `    <${stackLocal} spacing={4}>\n${list}\n    </${stackLocal}>`;
  const themeExpr = themeIsCreated ? optsLocal : `${ctLocal}(${optsLocal})`;
  const wrapper = themeImport
    ? `export default function ComposedDemos() {\n  return (\n    <${tpLocal} theme={${themeExpr}}>\n${inner.replace(/^ {4}/gm, '      ')}\n    </${tpLocal}>\n  );\n}`
    : `export default function ComposedDemos() {\n  return (\n${inner}\n  );\n}`;

  const packageOf = (m) => m.split('/').slice(0, m.startsWith('@') ? 2 : 1).join('/');
  const needs = [...new Set(
    modules.filter((m) => !m.startsWith('.')).map(packageOf).filter((p) => !['react', 'react-dom', '@mui/material'].includes(p)),
  )];

  const source = [
    `/**`,
    ` * Composed docs demos — generated by \`mui compose\`.`,
    ` * ${blocks.map((b) => b.label).join(' · ')}`,
    ` */`,
    ...importLines,
    '',
    ...blocks.map((b) => `// ── ${b.label} ${'─'.repeat(Math.max(2, 56 - b.label.length))}\n${b.text}`),
    '',
    wrapper,
    '',
  ].join('\n');

  return { source, needs, renamed };
}
