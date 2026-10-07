import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from './data.mjs';

const readJson = (file) => JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material', file), 'utf8'));

let seams;
export function loadSeams() {
  if (!seams) {
    const data = readJson('seams.json');
    const byComponent = new Map();
    for (const row of data.rows) {
      const list = byComponent.get(row.component);
      if (list) {
        list.push(row);
      } else {
        byComponent.set(row.component, [row]);
      }
    }
    seams = { ...data, byComponent };
  }
  return seams;
}

let graphData;
export function loadGraph() {
  return (graphData ??= readJson('graph.json'));
}

/** Composition tree (extends as ↑ nodes), reverse edges and content source for one component. */
export function relatedFor(component) {
  const { graph } = loadGraph();
  const tree = [];
  const walk = (comp, depth, seen) => {
    if (seen.has(comp) || depth > 4) {
      return;
    }
    seen.add(comp);
    const node = graph[comp] ?? {};
    for (const child of node.composes ?? []) {
      tree.push({ component: child, depth, kind: 'composes' });
      walk(child, depth + 1, seen);
    }
    if (node.extends) {
      tree.push({ component: node.extends, depth, kind: 'extends' });
      walk(node.extends, depth + 1, seen);
    }
  };
  walk(component, 0, new Set());
  const edges = (field) =>
    Object.entries(graph)
      .filter(([, node]) => (field === 'extends' ? node.extends === component : node.composes?.includes(component)))
      .map(([name]) => name);
  const node = graph[component] ?? {};
  return {
    tree,
    extendedBy: edges('extends'),
    partOf: edges('composes'),
    contentSource: node.contentSource ?? null,
    contentSourceVia: node.contentSourceVia ?? null,
  };
}

export const matcherLabel = (matcher, fns) => {
  if (!matcher) {
    return 'base';
  }
  if (matcher.fn) {
    return `when ${fns[matcher.fn].replace(/\s+/g, ' ')}`;
  }
  return Object.entries(matcher).map(([k, v]) => `${k}=${v}`).join(', ');
};
