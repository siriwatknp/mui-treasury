export const DEFAULT_CATEGORIES = ['sizing', 'spacing', 'typography', 'border', 'shadow'];

export function registerComponent(program) {
  program
    .command('component [name]')
    .description('List components, or the themable styles of one component (slot → variant/selector → property)')
    .option('--all', 'include layout, motion, CSS-variable and internal rows')
    .option('--category <list>', `only these categories (comma list): ${[...DEFAULT_CATEGORIES, 'color', 'layout', 'motion', 'variable'].join(', ')}`)
    .option('--slot <name>', 'only this slot')
    .action((...args) => import('./component.run.mjs').then((m) => m.run(program, ...args)));
}
