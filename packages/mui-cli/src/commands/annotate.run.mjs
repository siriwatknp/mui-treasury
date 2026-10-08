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
  const { annotateSelector, captureWith, renderFor, slotsOf, propsKeyOf } = await import('../lib/renders.mjs');
  const slots = await slotsOf(component);
  if (!slots.length) {
    throw new Error(`unknown component: ${name} — \`mui component\` lists them`);
  }
  const render = renderFor(component, { props, slot: options.slot ?? 'root' });
  const propsKey = propsKeyOf(props);
  const selector = annotateSelector(component, options.slot ?? 'root');
  const claims = claimsFor(selector, aspects, routes);
  const themeFile = options.theme ? path.resolve(options.theme) : undefined;
  const shot = path.resolve(options.shot ?? `annotate-${component.replace(/^Mui/, '')}${propsKey === 'base' ? '' : `-${propsKey.replace(/[=,]/g, '-')}`}.png`);
  const scheme = options.scheme === 'dark' ? 'dark' : 'light';

  const { withCapture } = await import('../lib/capture.mjs');
  const out = await withCapture(
    async (runCapture, helpers) => {
      const result = await captureWith(runCapture, helpers, { component, render, target: options.slot ?? 'root' }, { slots, annotate: { claims, scheme } }, (out) => helpers.screenshotDrawn(out.selector, shot));
      return result;
    },
    { themeFile, colorScheme: scheme, scale: 2 },
  );
  const collided = out.collisions.labelOverLabel.length + out.collisions.labelOverComponent.length;
  if (options.strict && collided) {
    process.exitCode = 1;
  }
  if (program.opts().json) {
    jsonOut('annotate', { component, propsKey, selector, claims, ...out, shot });
    return;
  }
  console.log(`annotate ${component.replace(/^Mui/, '')} [${propsKey}] ${options.slot ?? 'root'}${render.kind === 'demo' ? ` · in docs demo ${render.demo}` : ''}\n`);
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
