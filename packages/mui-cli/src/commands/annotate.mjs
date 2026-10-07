export function registerAnnotate(program) {
  program
    .command('annotate <component>')
    .description('Render a component with its measurements drawn on it (size, padding, gap, icon) → PNG; reports label collisions')
    .option('--props <k=v,…>', 'the variant to render (e.g. size=small,variant=outlined)')
    .option('--slot <name>', 'annotate this slot instead of the root')
    .option('--aspects <list>', 'height, width, padding, gap, icon (comma list; default height,padding,gap,icon)')
    .option('--routes <file>', 'JSON of label routes keyed by height, width, padding-block, padding-inline, gap, icon (e.g. {"padding-block": {"gutter": "right", "shift": 20}}); pinned labels keep their place')
    .option('--theme <file>', 'render under this theme module (default-exports createTheme options)')
    .option('--scheme <light|dark>', 'annotation colors for a light or dark page', 'light')
    .option('--strict', 'exit 1 when labels collide')
    .option('--shot <file>', 'screenshot output path')
    .action((...args) => import('./annotate.run.mjs').then((m) => m.run(program, ...args)));
}
