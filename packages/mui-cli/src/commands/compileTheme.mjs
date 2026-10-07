export function registerCompileTheme(program) {
  program
    .command('compile-theme <design>')
    .description('Compile a DESIGN.md (colors, typography, shape, spacing, component color cascades) into a createTheme options file')
    .option('-o, --out <file>', 'write the theme to this path (default: stdout)')
    .option('--dark <file>', 'a second DESIGN.md for the dark scheme (auto-detects a <name>-dark.md sibling)')
    .action((...args) => import('./compileTheme.run.mjs').then((m) => m.run(program, ...args)));
}
