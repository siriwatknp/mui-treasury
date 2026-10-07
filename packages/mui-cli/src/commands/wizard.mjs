export function registerWizard(program) {
  program
    .command('wizard')
    .description('Print the DESIGN.md authoring contract (schema + decision→field map + question framework)')
    .action((...args) => import('./wizard.run.mjs').then((m) => m.run(program, ...args)));
}
