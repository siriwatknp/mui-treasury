/** @file Clipboard write via the platform tool (pbcopy / clip / wl-copy|xclip). */
import { spawn } from 'node:child_process';

const TOOLS = {
  darwin: [['pbcopy', []]],
  win32: [['clip', []]],
  linux: [
    ['wl-copy', []],
    ['xclip', ['-selection', 'clipboard']],
  ],
};

export function copyToClipboard(text) {
  const candidates = TOOLS[process.platform] ?? [];
  if (!candidates.length) {
    return Promise.reject(new Error(`no clipboard tool known for ${process.platform}`));
  }
  const tryTool = ([cmd, args], rest) =>
    new Promise((resolve, reject) => {
      const child = spawn(cmd, args, { stdio: ['pipe', 'ignore', 'ignore'] });
      child.on('error', () => {
        if (rest.length) {
          resolve(tryTool(rest[0], rest.slice(1)));
        } else {
          reject(new Error(`no clipboard tool available (tried ${candidates.map(([c]) => c).join(', ')})`));
        }
      });
      child.on('close', (code) => {
        if (code === 0) {
          resolve(undefined);
        } else {
          reject(new Error(`${cmd} exited ${code}`));
        }
      });
      child.stdin.end(text);
    });
  return tryTool(candidates[0], candidates.slice(1));
}
