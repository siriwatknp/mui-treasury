import { resolveToken } from '../lib/aliases.mjs';
import { handleCoreDemos } from '../lib/coreRender.mjs';

export async function run(program, name, feature, demo, options) {
  const target = resolveToken(name);
  if (!target) {
    throw new Error(`unknown: ${name} — pass a Material UI component (e.g. Button), an alias (e.g. tag) or an MUI X product (data-grid, charts, date-pickers, tree-view)`);
  }
  if (target.kind === 'core') {
    if (demo) {
      throw new Error(`${target.label} is a component — \`mui demos ${target.label} <Demo>\` (no feature level)`);
    }
    await handleCoreDemos(program, target.component, { demo: feature, js: options.js, copy: options.copy });
    return;
  }
  const { xProduct, xDemosFor, xAllDemos } = await import('../lib/demosX.mjs');
  const { renderDemoList, printOneDemo } = await import('../lib/xRender.mjs');
  const { product, label } = target;
  if (!feature) {
    renderDemoList(program, { product, label, ...xAllDemos(product), feature: null });
    return;
  }
  const page = xDemosFor(product, feature);
  if (!page) {
    throw new Error(`no feature '${feature}' in ${label} — features: ${xProduct(product).features.map((f) => f.feature).join(', ')}`);
  }
  if (demo) {
    await printOneDemo(program, { product, feature, url: page.url, demos: page.demos }, demo, options);
    return;
  }
  renderDemoList(program, { product, label, url: page.url, demos: page.demos, feature });
}
