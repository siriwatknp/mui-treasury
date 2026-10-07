export function registerCompose(program) {
  program
    .command('compose <picks...>')
    .description('Compose docs demos into ONE runnable file (picks: Component:Demo, comma-lists ok)')
    .option('--theme <file>', 'wrap in ThemeProvider(createTheme(<file>)) — imported relative to the output')
    .option('-o, --out <file>', 'write the composed file (default: stdout)')
    .option('--js', 'the JavaScript version of each demo (the docs\' own .js)')
    .option('--copy', 'copy the composed source to the clipboard instead of printing')
    .action((...args) => import('./compose.run.mjs').then((m) => m.run(program, ...args)));
}
