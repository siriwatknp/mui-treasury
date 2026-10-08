import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from './data.mjs';
import { HARNESS_DIR } from './renderEngine.mjs';
import { missingPackages } from './packages.mjs';
import { loadGraph } from './seams.mjs';
import { DATA_GRID, RICH_TREE_VIEW, SIMPLE_TREE_VIEW } from './xFixtures.mjs';
import { importOf, xDataDir, xProductOfKey } from './xStyled.mjs';

export const RENDER_DEMOS_DIR = path.join(DATA_DIR, 'material/render-demos');
export const COMPOSITION_DEMOS_DIR = path.join(DATA_DIR, 'material/composition-demos');
export const CONTENT_CASES_DIR = path.join(DATA_DIR, 'material/content-cases');

/** States a prop puts a component in; the others are reached by mouse or keyboard. */
export const PROP_STATES = ['selected', 'disabled', 'checked', 'error', 'active', 'expanded', 'completed'];
const KEYBOARD = ['focusVisible', 'focused', ':focus', ':focus-visible'];

/** How a state is reached: prop, hover, press or keyboard; null when there is no rule for it. */
export const reachOf = (state) =>
  PROP_STATES.includes(state) ? 'prop' : state === ':hover' ? 'hover' : state === ':active' ? 'press' : KEYBOARD.includes(state) ? 'keyboard' : null;

/** The states a row's selector depends on: `.Mui-disabled` → disabled, `:hover` → :hover. */
export function statesOf(row) {
  const sel = (row.selector ?? []).join(' ');
  return [...new Set([...[...sel.matchAll(/\.Mui-(\w+)/g)].map((m) => m[1]), ...[...sel.matchAll(/:(hover|active|focus-visible|focus)\b/g)].map((m) => `:${m[1]}`)])];
}

/** The slot a row's pointer state is on: a nested slot named before `&:hover` / `&:active` (`& .MuiChip-deleteIcon &:hover`), else the row's own. */
export function pointerTargetOf(row) {
  const selector = row.selector ?? [];
  const at = selector.findIndex((s) => /&:(hover|active)/.test(s));
  const nested = selector
    .slice(0, at < 0 ? 0 : at)
    .map((s) => new RegExp(`(?:^|\\s)\\.${row.component}-(\\w+)`).exec(s)?.[1])
    .filter(Boolean)
    .pop();
  return nested ?? row.slot;
}
export const touchOf = (row) => (row.selector ?? []).some((s) => /hover:\s*none/.test(s));

/** The media a row is written under, as emulation: print, pointer, forced colors, a viewport width that satisfies (min|max)-width. */
export function mediaOf(row) {
  const media = {};
  for (const part of (row.selector ?? []).filter((p) => p.startsWith('@media'))) {
    if (/\bprint\b/.test(part)) {
      media.print = true;
    }
    for (const [, name, value] of part.matchAll(/\((pointer|forced-colors):\s*([\w-]+)\)/g)) {
      media.features = [...(media.features ?? []), { name, value }];
    }
    const max = /max-width:\s*([\d.]+)px/.exec(part);
    const min = /min-width:\s*([\d.]+)px/.exec(part);
    if (max) {
      media.width = Math.floor(Number(max[1])) - 1;
    } else if (min && Number(min[1]) > 900) {
      media.width = Math.ceil(Number(min[1])) + 1;
    }
  }
  return media;
}

export const NODE = '@node';
export const FN = '@fn';

const put = (abs, text) => {
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  if (!fs.existsSync(abs) || fs.readFileSync(abs, 'utf8') !== text) {
    fs.writeFileSync(abs, text);
  }
};

/** Components that render nothing without props or children the prop types can't describe: what a generated render passes them. */
export const RENDER_DEFAULTS = {
  MuiAutocomplete: {
    parts: ['MuiTextField'],
    imports: "import TextField from '@mui/material/TextField';\n",
    props: "{ options: ['Probe one', 'Probe two'], renderInput: (params) => <TextField {...params} label=\"Probe\" /> }",
  },
  MuiChip: {
    props: "{ label: 'Probe' }",
  },
  MuiDataGrid: DATA_GRID,
  MuiRichTreeView: RICH_TREE_VIEW,
  MuiTreeItem: RICH_TREE_VIEW,
  MuiSimpleTreeView: SIMPLE_TREE_VIEW,
  MuiSelect: {
    imports: "import MenuItem from '@mui/material/MenuItem';\n",
    props: "{ value: 'Probe one' }",
    content: "[<MenuItem key=\"1\" value=\"Probe one\">Probe one</MenuItem>, <MenuItem key=\"2\" value=\"Probe two\">Probe two</MenuItem>]",
  },
  MuiTextField: {
    imports: "import MenuItem from '@mui/material/MenuItem';\n",
    content: "props.select ? [<MenuItem key=\"1\" value=\"Probe one\">Probe one</MenuItem>, <MenuItem key=\"2\" value=\"Probe two\">Probe two</MenuItem>] : 'Probe'",
  },
};

/** Components whose content is an icon or must be an element (Tooltip): a generated render gets an icon child. */
const ICON_CONTENT = ['MuiIconButton', 'MuiFab', 'MuiSvgIcon', 'MuiListItemIcon', 'MuiBadge', 'MuiTooltip'];

/**
 * A module rendering `<Component {...props}>Probe</Component>` (an icon for ICON_CONTENT) — inside `parent` when the
 * component only works within one (MenuItem in MenuList, Tab in Tabs); `@node` prop values become an icon, `@fn` a no-op handler. Written once, reused (an unchanged file never reloads the page). */
export function generatedUrl(component, parent, parentProps = {}) {
  const defaults = RENDER_DEFAULTS[component];
  const content = defaults?.content ?? (ICON_CONTENT.includes(component) ? 'node' : "'Probe'");
  const name = `${component}${parent ? `.in.${parent}` : ''}`;
  const wrapperProps = Object.entries(parentProps).map(([k, v]) => ` ${k}={value(${JSON.stringify(v)})}`).join('');
  const short = (c) => c.replace(/^Mui/, '');
  const passed = defaults?.local ? `Object.entries(props).filter(([k]) => !${JSON.stringify(defaults.local)}.includes(k))` : 'Object.entries(props)';
  const spread = `${defaults?.props ? `{...${defaults.props}} ` : ''}{...Object.fromEntries(${passed}.map(([k, v]) => [k, value(v)]))}`;
  // a fixture that is more than `<C>` (a tree around its items) writes the element itself, given the props spread
  const element = defaults?.render ? defaults.render(spread) : `<C ${spread}>{${content}}</C>`;
  const inner = defaults?.frame ? `<div style={{ width: ${defaults.frame.width}, height: ${defaults.frame.height} }}>${element}</div>` : element;
  put(
    path.join(HARNESS_DIR, '_renders', `${name}.jsx`),
    `import * as React from 'react';
${importOf(component)}
${parent ? `import P from '@mui/material/${short(parent)}';
` : ''}import SvgIcon from '@mui/material/SvgIcon';
${defaults?.imports ?? ''}const node = <SvgIcon><path d="M12 2 2 22h20L12 2z" /></SvgIcon>;
const value = (v) => (v === '${NODE}' ? node : v === '${FN}' ? () => {} : v);
export const Render = (props) => ${parent ? `<P${wrapperProps}>${inner}</P>` : inner};
`,
  );
  return `/_renders/${name}.jsx`;
}

/** A shipped docs demo (data/material/render-demos/<slug>/<Name>.tsx), served by Vite from outside the harness root. */
export const demoUrl = (demo) => `/@fs${path.join(RENDER_DEMOS_DIR, `${demo}.tsx`)}`;

const TRIGGERS = '[aria-haspopup]:not([aria-haspopup="false"]), [aria-expanded="false"], [role="combobox"]';

/** Interaction names → steps: popup (open a menu/listbox), button:i, label-hover (tooltip triggers), header-hover / column-menu (a grid column's hover icons / menu), edit-label (a tree item's label in edit mode), root:i (click the component). */
export function interactionSteps(component, interaction = []) {
  return interaction.flatMap((name) => {
    const [kind, nth] = name.split(':');
    if (kind === 'edit-label') {
      return [{ dblclick: '.MuiTreeItem-label' }, { settle: '.MuiTreeItem-labelInput' }];
    }
    if (kind === 'header-hover') {
      return [{ hover: '.MuiDataGrid-columnHeader' }, { settle: '.MuiDataGrid-menuIconButton' }];
    }
    if (kind === 'column-menu') {
      // the menu button shows only while its header is hovered; the menu mounts and grows in after the click
      return [{ hover: '.MuiDataGrid-columnHeader' }, { settle: '.MuiDataGrid-menuIconButton' }, { click: '.MuiDataGrid-menuIconButton' }, { settle: '.MuiDataGrid-menuList' }];
    }
    if (kind === 'popup') {
      return { click: `#mount :is(${TRIGGERS})` };
    }
    if (kind === 'button') {
      return { click: '#mount button', nth: Number(nth) };
    }
    if (kind === 'label-hover') {
      return { hover: '#mount [aria-label]' };
    }
    return { click: `.${component}-root`, nth: Number(nth) };
  });
}

/** Steps that reach `states` on `target` (a slot) after the render, the way a user would. */
export function stepsFor({ component, states = [], touch = false, media = {}, target = 'root', interaction = [] }) {
  const reaches = new Set(states.map(reachOf));
  const pointer = reaches.has('hover') || reaches.has('press');
  return [
    { emulate: { touch, ...media } },
    { reset: true },
    ...interactionSteps(component, interaction),
    ...(reaches.has('keyboard') ? [{ tab: true }] : []),
    ...(pointer ? [{ hover: `.${component}-root` }, { hover: `.${component}-${target}` }] : []),
    ...(reaches.has('press') ? [{ down: true }] : []),
  ];
}

/** Props for a state set on a generated render. */
export const stateProps = (states) => Object.fromEntries(states.filter((s) => reachOf(s) === 'prop').map((s) => [s, true]));

export const propsKeyOf = (props) => Object.entries(props).map(([k, v]) => `${k}=${v}`).join(',') || 'base';

let record;
/** data/material/renders.json — which render confirms each row, per component how it renders. */
export function loadRenders() {
  return (record ??= JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/renders.json'), 'utf8')));
}

/** Render once and read every tagged slot: snapshot → put in state → measure. `themeFile` overrides the session theme for this render. */
export async function snapshot(runCapture, helpers, { component, render, slots, read, states = [], touch = false, media = {}, target = 'root', expect = [], themeFile, parts = [], routes = {} }) {
  const held = await runCapture({ snapshot: true, probeUrl: render.url, component, propsKey: propsKeyOf(render.props ?? {}), slots, ...(themeFile === undefined ? {} : { themeFile }) });
  if (held.error) {
    // a render that threw has nothing to put in a state
    return runCapture({ measureSnapshot: true, read, states: [], expect, parts, routes });
  }
  await helpers.interact(stepsFor({ component, states, touch, media, target, interaction: render.interaction ?? [] }));
  const result = await runCapture({ measureSnapshot: true, read, states, expect, parts, routes });
  await helpers.interact([{ reset: true }, { emulate: {} }]);
  return result;
}

/** Packages a shipped demo imports that the project can't resolve (a docs demo may use @mui/icons-material, @mui/lab…). */
export function demoNeeds(demo) {
  const file = path.join(RENDER_DEMOS_DIR, `${demo}.tsx`);
  return missingPackages(fs.readFileSync(file, 'utf8'), file);
}

const xRecords = new Map();
/** data/x/<product>/renders.json — how an X component renders: props and clicks that show each slot. */
export function loadXRenders(product) {
  if (!xRecords.has(product)) {
    xRecords.set(product, JSON.parse(fs.readFileSync(path.join(xDataDir(product), 'renders.json'), 'utf8')));
  }
  return xRecords.get(product);
}

/** How to render `component` in `states`: generated when it renders alone, else the recorded demo that reaches those states on that slot. */
export function renderFor(component, { props = {}, states = [], slot = 'root' }) {
  const product = xProductOfKey(component);
  const record = product ? loadXRenders(product) : loadRenders();
  const entry = record.components[component];
  if (entry?.unreachable?.[slot]) {
    throw new Error(`${component.replace(/^Mui/, '')} ${slot} can't be rendered for a picture: ${entry.unreachable[slot]}`);
  }
  if (!entry || entry.standalone) {
    return {
      kind: 'generated',
      url: generatedUrl(component, entry?.parent, entry?.parentProps),
      props: { ...entry?.props, ...entry?.slotProps?.[slot], ...props, ...stateProps(states) },
      interaction: entry?.slotInteraction?.[slot] ?? [],
    };
  }
  const recorded = Object.values(record.renders).filter((r) => r.component === component && r.kind === 'demo');
  const demos = recorded.filter((r) => !demoNeeds(r.demo).length);
  if (recorded.length && !demos.length) {
    const needs = [...new Set(recorded.flatMap((r) => demoNeeds(r.demo)))];
    throw new Error(`${component.replace(/^Mui/, '')} renders only inside docs demos, and they need ${needs.join(', ')} — npm i -D ${needs.join(' ')}`);
  }
  const wanted = states.filter((s) => reachOf(s) === 'prop');
  const score = (r) => wanted.filter((s) => r.states.includes(s)).length * 2 + Number(r.target === slot) + Number(Object.values(entry.slots).includes(r));
  const best = demos.sort((a, b) => score(b) - score(a))[0];
  if (!best) {
    throw new Error(`${component.replace(/^Mui/, '')} does not render on its own and no recorded docs demo renders it`);
  }
  if (wanted.some((s) => !best.states.includes(s))) {
    throw new Error(`${component.replace(/^Mui/, '')} renders only inside a docs demo (${best.demo}), and no recorded demo reaches ${wanted.join(' + ')}`);
  }
  return { kind: 'demo', demo: best.demo, url: demoUrl(best.demo), props: {}, interaction: best.interaction };
}

/** The slots a component styles (its extracted rows) and the theme keys its root routes to nested parts (Chip's deleteIcon), for tagging. */
export async function slotsOf(component) {
  const { loadGraph, loadSeams } = await import('./seams.mjs');
  const own = (loadSeams().byComponent.get(component) ?? []).filter((r) => !r.internal).map((r) => r.slot);
  return [...new Set([...own, ...Object.keys(loadGraph().graph[component]?.routes ?? {})])];
}

/** The selector the harness gives a tagged slot element. */
export const slotSelector = (component, slot) => `[data-mui-slot~="${component}|${slot}"]`;

/**
 * A slot's element for drawing on it: its tag, or — for a slot the root styles through a nested selector — that selector's
 * class. An element carries one mark, the last rule's (a grid cell's is `cell--textLeft`, not `cell`), so the tag can miss.
 */
export function annotateSelector(component, slot) {
  // only a route naming the slot's own class: a state-only slot routed to its base (inputFocused → .MuiAutocomplete-input) would draw the base
  const own = new RegExp(`\\.${component}-${slot}(?![\\w-])`);
  const routes = (loadGraph().graph[component]?.routes?.[slot] ?? []).filter((r) => own.test(r)).map((r) => r.replace(/^&\s*/, ''));
  return routes.length ? `:is(${[slotSelector(component, slot), ...routes].join(', ')})` : slotSelector(component, slot);
}

/**
 * One harness call for `render`: in one go, or — when it needs a state or an interaction (a demo's tooltip) — render,
 * interact, then measure. `whileHeld(out)` runs before the state is released (a screenshot of an open tooltip).
 */
export async function captureWith(runCapture, helpers, { component, render, states = [], touch = false, media = {}, target = 'root' }, cfg, whileHeld = async () => {}) {
  const steps = stepsFor({ component, states, touch, media, target, interaction: render.interaction ?? [] });
  const first = { probeUrl: render.url, component, propsKey: propsKeyOf(render.props ?? {}), ...cfg };
  // only the emulate + reset steps, and nothing to emulate: render and measure in one call
  if (steps.length <= 2 && !touch && !Object.keys(media).length) {
    const out = await runCapture(first);
    await whileHeld(out);
    return out;
  }
  await runCapture({ ...first, hold: true });
  await helpers.interact(steps);
  const out = await runCapture({ ...cfg, resume: true });
  await whileHeld(out);
  await helpers.interact([{ reset: true }, { emulate: {} }]);
  return out;
}
