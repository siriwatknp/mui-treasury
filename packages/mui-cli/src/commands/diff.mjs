export function registerDiff(program) {
  program
    .command('diff [components...]')
    .description('What your theme changes in real renders: each component in its variants and states, under the theme and under a baseline (default: the theme file at git HEAD, else vanilla)')
    .option('--theme <file>', 'your theme module (default-exports createTheme options)')
    .option('--against <HEAD|vanilla|file>', 'the baseline to compare with (default: HEAD when the theme file is in git, else vanilla)')
    .option('--all', 'every recorded variant × state render (slower); default: each component at rest and in each of its states')
    .option('--full', 'every before → after line (default: one summary line per component)')
    .action((...args) => import('./diff.run.mjs').then((m) => m.run(program, ...args)));
}
