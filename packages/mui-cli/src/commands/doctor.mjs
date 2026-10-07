export function registerDoctor(program) {
  program
    .command('doctor')
    .description('Check installed Material UI / MUI X against the data this CLI was built with, and each feature’s setup')
    .action((...args) => import('./doctor.run.mjs').then((m) => m.run(program, ...args)));
}
