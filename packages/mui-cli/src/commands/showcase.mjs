import { families } from '../showcase/families.mjs';

export function registerShowcase(program) {
  program
    .command('showcase <design>')
    .description('Check a DESIGN.md, compiled: a component family\'s sizes, states and colors (colors gate against the DESIGN.md), or with --tokens its typography / color / radius / spacing / elevation')
    .option('--theme <file>', 'check this theme module against the DESIGN.md instead of the DESIGN.md compiled')
    .option('--family <name>', `which family to render (${Object.keys(families).join(', ')})`)
    .option('--tokens', 'the foundation tokens (typography / color / radius / spacing / elevation)')
    .option('--scheme <light|dark>', 'render under a color scheme (dark needs a dual-scheme theme)', 'light')
    .option('--shot <file>', 'screenshot output path')
    .action((...args) => import('./showcase.run.mjs').then((m) => m.run(program, ...args)));
}
