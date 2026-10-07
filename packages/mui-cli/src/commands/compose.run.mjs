import fs from 'node:fs';
import path from 'node:path';
import { demosFor, demoIn } from '../lib/demos.mjs';
import { xDemosFor } from '../lib/demosX.mjs';
import { composeDemos } from '../lib/composeDemos.mjs';
import { jsonOut } from '../lib/json.mjs';

/** A core `MuiButton` page, or an X `<product>/<feature>` page (the feature may itself hold a '/'). */
async function pageForPick(component) {
  if (component.includes('/')) {
    const slash = component.indexOf('/');
    return xDemosFor(component.slice(0, slash), component.slice(slash + 1));
  }
  return demosFor(component);
}

export async function run(program, picks, options) {
  const pairs = [];
  for (const pick of picks) {
    const colon = pick.indexOf(':');
    if (colon === -1) {
      console.error(`compose expects Component:Demo, got: ${pick}`);
      process.exitCode = 1;
      return;
    }
    const raw = pick.slice(0, colon);
    // X slug (data-grid/filtering) stays verbatim; a bare core name gets Mui-prefixed
    const component = raw.includes('/') || raw.startsWith('Mui') ? raw : `Mui${raw}`;
    for (const demo of pick.slice(colon + 1).split(',').filter(Boolean)) {
      pairs.push({ component, demo });
    }
  }
  if (!pairs.length) {
    console.error('compose needs at least one Component:Demo pick');
    process.exitCode = 1;
    return;
  }
  const demos = [];
  const pages = new Map(); // demo name → its page (asset lookups)
  for (const { component, demo } of pairs) {
    const page = await pageForPick(component);
    if (!page) {
      console.error(`no docs demos synced for ${component} — see \`mui component\` for the list`);
      process.exitCode = 1;
      return;
    }
    const found = page.demos.find((d) => d.name === demo);
    if (!found) {
      console.error(`no demo '${demo}' on ${page.url} — available: ${page.demos.map((d) => d.name).join(', ')}`);
      process.exitCode = 1;
      return;
    }
    demos.push({ component, name: found.name, ...demoIn(found, options.js) });
    pages.set(found.name, page);
  }

  let themeImport = null;
  let themeIsCreated = false;
  if (options.theme && options.theme.trim().startsWith('{')) {
    console.error('compose --theme needs a FILE (the composed file imports it) — write the options to e.g. ./theme.mjs first');
    process.exitCode = 1;
    return;
  }
  if (options.theme) {
    const themeAbs = path.resolve(options.theme);
    if (!fs.existsSync(themeAbs)) {
      console.error(`--theme file not found: ${options.theme}`);
      process.exitCode = 1;
      return;
    }
    // load once to classify: options get wrapped in createTheme(), a
    // createTheme() RESULT is passed to ThemeProvider as-is
    try {
      const { loadThemeModule, isCreatedTheme } = await import('../lib/themeModule.mjs');
      themeIsCreated = isCreatedTheme(await loadThemeModule(themeAbs));
    } catch (err) {
      console.error(`--theme failed to load: ${err.message}`);
      process.exitCode = 1;
      return;
    }
    const fromDir = options.out ? path.dirname(path.resolve(options.out)) : process.cwd();
    const rel = path.relative(fromDir, themeAbs).replace(/\.(tsx|ts|jsx|mjs|js)$/, '');
    themeImport = rel.startsWith('.') ? rel : `./${rel}`;
  }

  // data files ride flat beside the composed file, so every relative import becomes `./<basename>`
  const flat = (module) => (module.startsWith('.') ? `./${path.posix.basename(module)}` : module);
  const relatives = demos.flatMap((d) => [...new Set(d.analysis.imports.filter((i) => i.module.startsWith('.')).map((i) => i.module))].map((module) => ({ module, demo: d.name })));
  const flatDemos = demos.map((d) => ({ ...d, analysis: { ...d.analysis, imports: d.analysis.imports.map((i) => ({ ...i, module: flat(i.module) })) } }));
  const { source, needs, renamed } = composeDemos({ demos: flatDemos, themeImport, themeIsCreated });

  // data files: resolve relative imports against the page's synced assets
  // (transitively — server → movies), keyed by their path from the demo's dir
  const relativeImports = (src) => [...src.matchAll(/(?:from\s+|import\s+)'(\.[^']+)'/g)].map((m) => m[1]);
  const flattenImports = (src) => src.replace(/((?:from\s+|import\s+)')(\.[^']+)'/g, (_, head, spec) => `${head}${flat(spec)}'`);
  const assets = new Map(); // file → { file, source, key }
  const unresolved = [];
  const resolveAsset = (page, key, demo) => {
    const asset = page?.assets?.[key];
    if (!asset) {
      unresolved.push({ module: key, demo });
      return;
    }
    const picked = options.js && asset.js ? { file: asset.jsFile, source: asset.js } : { file: asset.file, source: asset.source };
    const prev = assets.get(picked.file);
    if (prev) {
      if (prev.key !== key) {
        throw new Error(`data-file collision: ${picked.file} comes from both ${prev.key} and ${key}`);
      }
      return;
    }
    assets.set(picked.file, { file: picked.file, source: flattenImports(picked.source), key });
    for (const spec of relativeImports(picked.source)) {
      resolveAsset(page, path.posix.normalize(path.posix.join(path.posix.dirname(key), spec)), demo);
    }
  };
  for (const { module, demo } of relatives) {
    try {
      resolveAsset(pages.get(demo), path.posix.normalize(module), demo);
    } catch (err) {
      console.error(err.message);
      process.exitCode = 1;
      return;
    }
  }
  const assetsFor = (file) => relatives.filter((r) => path.posix.basename(r.module) === file.replace(/\.\w+$/, '')).map((r) => r.demo);

  const assetList = [...assets.values()].map(({ file, source: body }) => ({ file, source: body }));

  const notes = [
    ...(needs.length ? [`needs: ${needs.join(', ')} (beyond react + @mui/material)`] : []),
    ...renamed.map((r) => `renamed: ${r.from} → ${r.to} (collision, in ${r.demo})`),
    ...unresolved.map((u) => `unresolved: ${u.module} (in ${u.demo}) — data file not captured, output may not run`),
  ];
  const assetNote = (emitted) =>
    assetList.map((a) => {
      const from = assetsFor(a.file);
      const via = from.length ? `data file${from.length > 1 ? 's' : ''} of ${from.join(', ')}` : 'data file';
      return emitted ? `emitted: ${a.file} (${via})` : `data file needed: ${a.file} (${via}) — write with -o, or --json for sources`;
    });
  const writeAssets = (outFile) => {
    const dir = path.dirname(outFile);
    for (const a of assetList) {
      fs.writeFileSync(path.join(dir, a.file), a.source);
    }
  };
  if (program.opts().json) {
    jsonOut('compose', {
      picks: pairs,
      source,
      needs,
      renamed,
      assets: assetList,
      unresolved,
      ...(options.out ? { out: path.resolve(options.out) } : {}),
    });
    if (options.out) {
      fs.writeFileSync(path.resolve(options.out), source);
      writeAssets(path.resolve(options.out));
    }
    return;
  }
  if (options.copy) {
    const { copyToClipboard } = await import('../lib/clipboard.mjs');
    try {
      await copyToClipboard(source);
    } catch (err) {
      console.error(`clipboard copy failed: ${err.message}`);
      process.exitCode = 1;
      return;
    }
    console.log(`copied ${pairs.length} composed demos (${source.split('\n').length} lines) to clipboard`);
    notes.forEach((n) => console.log(n));
    assetNote(false).forEach((n) => console.log(n));
    return;
  }
  if (options.out) {
    const out = path.resolve(options.out);
    fs.writeFileSync(out, source);
    writeAssets(out);
    console.log(`composed ${pairs.length} demos → ${out} (${source.split('\n').length} lines)`);
    notes.forEach((n) => console.log(n));
    assetNote(true).forEach((n) => console.log(n));
    return;
  }
  console.log(source);
  notes.forEach((n) => console.error(n)); // stdout stays pipe-clean
  assetNote(false).forEach((n) => console.error(n));
}
