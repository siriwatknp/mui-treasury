import { loadRenders } from './renders.mjs';

const stable = (v) => JSON.stringify(v ?? null, (k, x) => (typeof x === 'function' ? `fn:${x.toString()}` : x));
const GLOBAL_KEYS = ['palette', 'colorSchemes', 'typography', 'shape', 'spacing', 'shadows', 'transitions', 'zIndex', 'breakpoints', 'cssVariables', 'direction', 'focusVisible', 'motion', 'modularCssLayers'];

/** Components a change between two theme options can move: every one when a global section changed, else the edited entries and what extends them. */
export async function scopeOf(before, after) {
  const all = Object.keys(loadRenders().components);
  // a module may export options or a createTheme() result: compare both in the same form, or every global key differs
  const { isCreatedTheme } = await import('./themeModule.mjs');
  if (isCreatedTheme(before) !== isCreatedTheme(after)) {
    const { createTheme } = await (await import('./muiStyles.mjs')).loadMuiStyles();
    if (isCreatedTheme(after)) {
      before = createTheme(before ?? {});
    } else {
      after = createTheme(after ?? {});
    }
  }
  if (GLOBAL_KEYS.some((k) => stable(before?.[k]) !== stable(after?.[k]))) {
    return { components: all, why: 'global theme values changed' };
  }
  const names = new Set([...Object.keys(before?.components ?? {}), ...Object.keys(after?.components ?? {})]);
  const changed = [...names].filter((n) => stable(before?.components?.[n]) !== stable(after?.components?.[n]));
  const { loadGraph } = await import('./seams.mjs');
  const { graph } = loadGraph();
  // a component moves when it, or anything it extends or renders inside it, changed
  const dependsOn = (c, seen = new Set()) => {
    const node = graph[c] ?? {};
    const next = [node.extends, ...(node.composes ?? [])].filter((x) => x && !seen.has(x));
    next.forEach((x) => seen.add(x));
    return [...next, ...next.flatMap((x) => dependsOn(x, seen))];
  };
  const moved = all.filter((c) => changed.includes(c) || dependsOn(c).some((d) => changed.includes(d)));
  return { components: moved, why: changed.length ? `entries changed: ${changed.map((c) => c.replace(/^Mui/, '')).join(', ')}` : 'no theme changes' };
}

