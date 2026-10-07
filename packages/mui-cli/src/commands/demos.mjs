export function registerDemos(program) {
  program
    .command('demos <name> [feature] [demo]')
    .description('Docs demos for a component or MUI X product (e.g. `demos Button BasicButtons --js`, `demos data-grid filtering QuickFilteringGrid`)')
    .option('--js', 'when printing one demo: the docs\' own JavaScript version')
    .option('--copy', 'when printing one demo: copy the source to the clipboard instead of printing')
    .action((...args) => import('./demos.run.mjs').then((m) => m.run(program, ...args)));
}
