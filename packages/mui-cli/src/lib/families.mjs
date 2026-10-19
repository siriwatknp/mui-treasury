import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from './data.mjs';

const short = (c) => c.replace(/^Mui/, '');

/**
 * Components that are parts of each other share a page: a component joins the group of a shorter name it starts with when
 * both sit on the same MUI docs page, or the name continues at a word boundary and its page names the root (or it has none), unless
 * the root is built on it (ButtonBase under Button is a base, not a part). The group is named after its docs page when a member matches it (Tab + Tabs + TabScrollButton → Tabs).
 */
export function groupComponents(components) {
  const pages = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/demos/index.json'), 'utf8')).demoPages ?? {};
  const { graph } = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/graph.json'), 'utf8'));
  const pageOf = (n) => pages[`Mui${n}`] ?? null;
  const namesPage = (name, page) => [page, page.replace(/e?s$/, '')].includes(name.toLowerCase().replace(/-/g, ''));
  const groups = new Map();
  for (const n of components.map(short).sort((a, b) => a.length - b.length || a.localeCompare(b))) {
    const root = [...groups.keys()].find((r) => {
      const members = groups.get(r);
      const pageFits = !pageOf(n) || (pageOf(r) ? pageOf(n) === pageOf(r) : namesPage(r, pageOf(n)));
      const samePage = Boolean(pageOf(n)) && pageOf(n) === pageOf(r);
      return n.startsWith(r) && (samePage || (/^[A-Z]/.test(n.slice(r.length)) && pageFits)) && !members.some((m) => graph[`Mui${m}`]?.extends === `Mui${n}`);
    });
    if (root) {
      groups.get(root).push(n);
    } else {
      groups.set(n, [n]);
    }
  }
  const named = new Map();
  for (const [root, members] of groups) {
    const page = members.map(pageOf).find(Boolean)?.replace(/-/g, '');
    const name = (page && (members.find((m) => m.toLowerCase() === page) ?? members.find((m) => namesPage(m, page)))) || root;
    named.set(name, members.sort((a, b) => (a === name ? -1 : b === name ? 1 : a.localeCompare(b))));
  }
  return new Map([...named].sort(([a], [b]) => a.localeCompare(b)));
}


let all;
/** Every recorded component's family: root name and members (`Mui` names), from the whole record so a run on a few components sees full families. */
export function familyIndex() {
  if (!all) {
    const { components } = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/renders.json'), 'utf8'));
    all = new Map();
    for (const [root, members] of groupComponents(Object.keys(components))) {
      const family = { root: `Mui${members[0]}`, members: members.map((m) => `Mui${m}`) };
      family.members.forEach((m) => all.set(m, family));
    }
  }
  return all;
}
