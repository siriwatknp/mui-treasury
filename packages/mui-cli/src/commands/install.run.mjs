import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { jsonOut } from '../lib/json.mjs';

const PKG_ROOT = path.resolve(fileURLToPath(import.meta.url), '../../..');
const TEMPLATE_DIR = path.join(PKG_ROOT, 'skill');

const AGENT_DIRS = {
  claude: (cwd) => path.join(cwd, '.claude', 'skills', 'mui-cli'),
};

export async function run(program, options) {
  if (!options.skill) {
    throw new Error('nothing to do — did you mean `mui install --skill`?');
  }
  const agent = options.skill === true ? 'claude' : options.skill;
  const targetFor = AGENT_DIRS[agent];
  if (!targetFor) {
    throw new Error(`unsupported agent '${agent}' — supported: ${Object.keys(AGENT_DIRS).join(', ')}`);
  }
  const target = targetFor(process.cwd());
  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(TEMPLATE_DIR, target, { recursive: true });
  const written = fs.readdirSync(target, { recursive: true }).filter((f) => f.endsWith('.md')).sort().map((f) => path.relative(process.cwd(), path.join(target, f)));

  if (program.opts().json) {
    jsonOut('install', { skill: agent, target: path.relative(process.cwd(), target), files: written });
    return;
  }
  console.log(`✅ Skill installed to \`${path.relative(process.cwd(), target)}\` (${agent}).`);
  for (const f of written) {
    console.log(`   ${f}`);
  }
  console.log('\nnext: run `mui doctor` to verify this project, and restart the agent session so it picks the skill up');
}
