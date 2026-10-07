export function registerServer(program) {
  program
    .command('server [action]')
    .description('The warm render server behind --measure / --diff / annotate / showcase: status (default) or stop')
    .action((...args) => import('./server.run.mjs').then((m) => m.run(program, ...args)));
}
