import fs from 'node:fs';
import path from 'node:path';
import { resolveToken } from '../lib/aliases.mjs';
import { jsonOut } from '../lib/json.mjs';
import { parsePropsKey } from '../lib/match.mjs';

const ASPECTS = ['height', 'width', 'padding', 'gap', 'icon'];
const DEFAULT_ASPECTS = 'height,padding,gap,icon';

/**
 * Claims for one element. Routes come only from --routes (pinned); everything else is left for the
 * harness to spread across sides once it knows which claims actually draw something.
 */
export function claimsFor(selector, aspects, routes = {}) {
  const pin = (key) => routes[key] ?? routes[key.split('-')[0]];
  const all = {
    height: [{ on: selector, aspect: 'size', axis: 'block', key: 'height' }],
    width: [{ on: selector, aspect: 'size', axis: 'inline', key: 'width' }],
    padding: [
      { on: selector, aspect: 'padding', axis: 'block', key: 'padding-block' },
      { on: selector, aspect: 'padding', axis: 'inline', key: 'padding-inline' },
    ],
    gap: [{ on: selector, aspect: 'gap', key: 'gap' }],
    icon: [{ on: selector, aspect: 'icon', key: 'icon' }],
  };
  return aspects.flatMap((a) => all[a]).map(({ key, ...claim }) => (pin(key) ? { ...claim, route: pin(key), pinned: true } : claim));
}

/** One annotated render of `slot`, in an open capture session: what `annotate` draws and the claims it drew from. */
export async function drawSlot(runCapture, helpers, { component, slot = 'root', props = {}, aspects, routes = {}, scheme = 'light' }, whileHeld) {
  const { annotateSelector, captureWith, renderFor, slotsOf } = await import('../lib/renders.mjs');
  const render = renderFor(component, { props, slot });
  const selector = annotateSelector(component, slot);
  const claims = claimsFor(selector, aspects, routes);
  const out = await captureWith(runCapture, helpers, { component, render, target: slot }, { slots: await slotsOf(component), annotate: { claims, scheme } }, whileHeld);
  return { out, render, selector, claims };
}

export async function run(program, name, options) {
  const target = resolveToken(name);
  if (target?.kind === 'x' && !target.component) {
    throw new Error(`${target.label} is MUI X — style rows cover Material UI and the Data Grid only for now; \`mui demos ${target.product}\` lists its demos`);
  }
  const component = target?.component ?? `Mui${name}`;
  const aspects = (options.aspects ?? DEFAULT_ASPECTS).split(',').map((a) => a.trim());
  const unknown = aspects.filter((a) => !ASPECTS.includes(a));
  if (unknown.length) {
    throw new Error(`unknown aspect ${unknown.join(', ')} — use ${ASPECTS.join(', ')}`);
  }
  const routes = options.routes ? JSON.parse(fs.readFileSync(path.resolve(options.routes), 'utf8')) : {};
  const props = options.props ? parsePropsKey(options.props) : {};
  const { renderFor, slotsOf, propsKeyOf } = await import('../lib/renders.mjs');
  if (!(await slotsOf(component)).length) {
    throw new Error(`unknown component: ${name} — \`mui component\` lists them`);
  }
  const slot = options.slot ?? 'root';
  // a slot that can't be shown fails before the render starts
  renderFor(component, { props, slot });
  const propsKey = propsKeyOf(props);
  const themeFile = options.theme ? path.resolve(options.theme) : undefined;
  const shot = path.resolve(options.shot ?? `annotate-${component.replace(/^Mui/, '')}${propsKey === 'base' ? '' : `-${propsKey.replace(/[=,]/g, '-')}`}.png`);
  const scheme = options.scheme === 'dark' ? 'dark' : 'light';

  const { withCapture } = await import('../lib/capture.mjs');
  const { out, render, selector, claims } = await withCapture(
    (runCapture, helpers) => drawSlot(runCapture, helpers, { component, slot, props, aspects, routes, scheme }, (drawn) => helpers.screenshotDrawn(drawn.selector, shot)),
    { themeFile, colorScheme: scheme, scale: 2 },
  );
  if (out.absent) {
    const label = component.replace(/^Mui/, '');
    const why = { missing: 'is not in this render', hidden: 'is in this render but hidden (visibility: hidden — shown on hover or in a state)', empty: 'is in this render but has no size (0×0)' }[out.absent];
    throw new Error(`${label} ${slot} ${why} — pass --props that show it; \`mui component ${label} --slot ${slot}\` lists the selectors it is styled under`);
  }
  const collided = out.collisions.labelOverLabel.length + out.collisions.labelOverComponent.length;
  if (options.strict && collided) {
    process.exitCode = 1;
  }
  if (program.opts().json) {
    jsonOut('annotate', { component, propsKey, selector, claims, ...out, shot });
    return;
  }
  console.log(`annotate ${component.replace(/^Mui/, '')} [${propsKey}] ${slot}${render.kind === 'demo' ? ` · in docs demo ${render.demo}` : ''}\n`);
  for (const item of out.items) {
    const what = item.kind === 'band' ? `${item.tone} ${item.tone === 'gap' ? 'between children' : item.measures === 'x' ? 'left/right' : 'top/bottom'}` : item.icon ? 'icon' : item.measures === 'x' ? 'width' : 'height';
    console.log(`  ${what.padEnd(22)} ${item.label.padEnd(14)} label ${item.gutter}`);
  }
  if (!collided) {
    console.log('\n  no label collisions');
  }
  for (const [a, b] of out.collisions.labelOverLabel) {
    console.log(`\n  ✗ label "${a}" overlaps "${b}" — move one with --routes (gutter / shift / out)`);
  }
  for (const label of out.collisions.labelOverComponent) {
    console.log(`  ✗ label "${label}" sits on the component — move it with --routes`);
  }
  console.log(`\n→ ${shot}`);
}
