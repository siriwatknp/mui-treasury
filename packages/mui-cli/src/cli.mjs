import { createRequire } from 'node:module';
import { Command } from './lib/args.mjs';
import { builtWith } from './lib/data.mjs';
import { registerDoctor } from './commands/doctor.mjs';
import { registerShowcase } from './commands/showcase.mjs';
import { registerDemos } from './commands/demos.mjs';
import { registerCompose } from './commands/compose.mjs';
import { registerInstall } from './commands/install.mjs';
import { registerComponent } from './commands/component.mjs';
import { registerSearch } from './commands/search.mjs';
import { registerAnnotate } from './commands/annotate.mjs';
import { registerServer } from './commands/server.mjs';
import { registerCompileTheme } from './commands/compileTheme.mjs';
import { registerWizard } from './commands/wizard.mjs';
import { registerVerify } from './commands/verify.mjs';
import { registerDiff } from './commands/diff.mjs';
import { registerRecommend } from './commands/recommend.mjs';
import { resolveToken } from './lib/aliases.mjs';

const pkg = createRequire(import.meta.url)('../package.json');

function expandAlias(argv, commands) {
  const i = argv.findIndex((a, n) => n >= 2 && !a.startsWith('-'));
  if (i === -1 || commands.has(argv[i]) || !resolveToken(argv[i])) {
    return argv;
  }
  return [...argv.slice(0, i), 'component', ...argv.slice(i)];
}

export function run(argv) {
  const program = new Command();
  program
    .name('mui')
    .description(pkg.description)
    .version(`${pkg.version} (data built with ${JSON.stringify(builtWith())})`)
    .option('--json', 'typed JSON envelope output')
    .showHelpAfterError();
  registerDoctor(program);
  registerShowcase(program);
  registerDemos(program);
  registerCompose(program);
  registerInstall(program);
  registerComponent(program);
  registerSearch(program);
  registerAnnotate(program);
  registerServer(program);
  registerCompileTheme(program);
  registerWizard(program);
  registerVerify(program);
  registerDiff(program);
  registerRecommend(program);
  const commands = new Set([...program.commands.map((c) => c.name()), 'help']);
  program.parseAsync(expandAlias(argv, commands)).catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
  });
}
