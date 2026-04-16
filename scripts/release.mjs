#!/usr/bin/env node
import { execSync } from 'child_process';

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

function getChangedFiles() {
  return execSync('git status --porcelain', { encoding: 'utf-8' }).trim();
}

// 1. Ensure working tree is clean
if (getChangedFiles()) {
  console.error('Working tree is dirty. Commit or stash changes first.');
  process.exit(1);
}

// 2. Version packages (consumes .changeset/*.md → bumps version + CHANGELOG.md)
run('pnpm changeset version');

// 3. Check if version step produced changes
if (!getChangedFiles()) {
  console.log('\nNo changesets to release.');
  process.exit(0);
}

// 4. Build
run('pnpm turbo build --filter=mui-treasury');

// 5. Commit version bump
run('git add -A');
const version = JSON.parse(
  execSync('cat packages/cli/package.json', { encoding: 'utf-8' }),
).version;
run(`git commit -m "release: mui-treasury@${version}"`);

// 6. Tag
run(`git tag mui-treasury@${version}`);

// 7. Publish
run('pnpm changeset publish');

// 8. Push
run('git push && git push --tags');

console.log(`\n✅ Released mui-treasury@${version}`);
