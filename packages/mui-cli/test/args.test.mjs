import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Command } from '../src/lib/args.mjs';

async function parse(args, setup) {
  const program = new Command().name('mui').version('1.0.0').option('--json', 'json').showHelpAfterError();
  const calls = [];
  setup(program, (...a) => calls.push(a));
  const out = [];
  const err = [];
  const [w, e] = [process.stdout.write, process.stderr.write];
  process.stdout.write = (s) => out.push(s);
  process.stderr.write = (s) => err.push(s);
  process.exitCode = 0;
  try {
    await program.parseAsync(['node', 'mui', ...args]);
  } finally {
    [process.stdout.write, process.stderr.write] = [w, e];
  }
  const exitCode = process.exitCode;
  process.exitCode = 0;
  return { calls, out: out.join(''), err: err.join(''), exitCode, program };
}

const demo = (program, record) =>
  program
    .command('demos <name> [demo]')
    .description('demos')
    .option('--js', 'js')
    .option('-o, --out <file>', 'out')
    .option('--skill [agent]', 'skill')
    .option('--limit <n>', 'limit', '15')
    .action((...a) => record(...a.slice(0, -1)));

test('positionals, options, short aliases, inline values and defaults', async () => {
  const { calls } = await parse(['demos', 'Button', 'Basic', '--js', '-o', 'x.tsx', '--limit=2'], demo);
  assert.deepEqual(calls, [['Button', 'Basic', { limit: '2', js: true, out: 'x.tsx' }]]);
  assert.deepEqual((await parse(['demos', 'Button'], demo)).calls, [['Button', undefined, { limit: '15' }]]);
});

test('optional-value options take the next token only when it is not a flag', async () => {
  assert.equal((await parse(['demos', 'A', '--skill'], demo)).calls[0][2].skill, true);
  assert.equal((await parse(['demos', 'A', '--skill', 'claude'], demo)).calls[0][2].skill, 'claude');
  assert.equal((await parse(['demos', 'A', '--skill', '--js'], demo)).calls[0][2].skill, true);
});

test('global options work before or after the command and land on program.opts()', async () => {
  for (const args of [['--json', 'demos', 'A'], ['demos', 'A', '--json']]) {
    const r = await parse(args, demo);
    assert.equal(r.program.opts().json, true);
    assert.equal('json' in r.calls[0][2], false);
  }
});

test('repeatable options collect every occurrence', async () => {
  const r = await parse(['theme', 'Button', '--set', 'a=1', '--set=b=2'], (p, rec) => p.command('theme <c>').option('--set <t=v...>', 'set').action((c, o) => rec(c, o)));
  assert.deepEqual(r.calls, [['Button', { set: ['a=1', 'b=2'] }]]);
});

test('variadic arguments collect the rest', async () => {
  const r = await parse(['search', 'a', 'b', 'c'], (p, rec) => p.command('search <query...>').action((q) => rec(q)));
  assert.deepEqual(r.calls, [[['a', 'b', 'c']]]);
});

test('usage errors print the message and the command help, exit 1', async () => {
  const cases = [
    [['demos'], /error: missing required argument 'name'/],
    [['demos', 'A', '--nope'], /error: unknown option '--nope'/],
    [['demos', 'A', '-o'], /error: option '-o, --out <file>' argument missing/],
    [['demos', 'A', 'B', 'C'], /error: too many arguments for 'demos'/],
    [['nope'], /error: unknown command 'nope'/],
  ];
  for (const [args, re] of cases) {
    const r = await parse(args, demo);
    assert.match(r.err, re);
    assert.match(r.err, /Usage: mui/);
    assert.equal(r.exitCode, 1);
    assert.deepEqual(r.calls, []);
  }
});

test('help and version', async () => {
  assert.match((await parse(['--help'], demo)).out, /Commands:\n {2}demos \[options\] <name> \[demo\]/);
  assert.match((await parse(['help', 'demos'], demo)).out, /Usage: mui demos \[options\] <name> \[demo\]\n\ndemos\n\nOptions:\n {2}--js/);
  assert.match((await parse(['demos', '--help'], demo)).out, /--limit <n> +limit \(default: "15"\)/);
  assert.equal((await parse(['--version'], demo)).out, '1.0.0\n');
  const bare = await parse([], demo);
  assert.match(bare.err, /Usage: mui/);
  assert.equal(bare.exitCode, 1);
});
