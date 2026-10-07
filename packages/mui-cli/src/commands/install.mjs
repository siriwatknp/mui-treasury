export function registerInstall(program) {
  program
    .command('install')
    .description('Project setup — `mui install --skill` writes the agent skill (Claude Code)')
    .option('--skill [agent]', 'install the agent skill; supported: claude (default)')
    .action((...args) => import('./install.run.mjs').then((m) => m.run(program, ...args)));
}
