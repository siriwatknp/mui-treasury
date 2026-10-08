import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from './data.mjs';
import { xDataDir, xStyledProducts } from './xStyled.mjs';

const readJson = (dir, file) => JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
/** Material UI first, then every MUI X product with style rows: one layer per data dir. */
const layers = () => [path.join(DATA_DIR, 'material'), ...xStyledProducts().map(xDataDir)];

let seams;
export function loadSeams() {
  if (!seams) {
    const [material, ...x] = layers().map((dir) => readJson(dir, 'seams.json'));
    const data = { ...material, fns: Object.assign({}, material.fns, ...x.map((d) => d.fns)), rows: [...material.rows, ...x.flatMap((d) => d.rows)] };
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
  if (!graphData) {
    const [material, ...x] = layers().map((dir) => readJson(dir, 'graph.json'));
    graphData = { ...material, components: [...material.components, ...x.flatMap((d) => d.components)], graph: Object.assign({}, material.graph, ...x.map((d) => d.graph)) };
  }
  return graphData;
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
