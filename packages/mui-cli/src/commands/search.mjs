export function registerSearch(program) {
  program
    .command('search <query...>')
    .description('Find style rows across components (words match component, property, slot, category, theme token, selector)')
    .option('--limit <n>', 'max results', '15')
    .action((...args) => import('./search.run.mjs').then((m) => m.run(program, ...args)));
}
