/**
 * @file Progress lines for browser-backed steps (--measure) — stderr only,
 * so stdout (fragments, --json envelopes) stays pipe-clean. Colors only on a
 * TTY; MUI_CLI_QUIET=1 silences entirely.
 */
const quiet = process.env.MUI_CLI_QUIET === '1';
const tty = process.stderr.isTTY;
const paint = (code) => (s) => (tty ? `\u001b[${code}m${s}\u001b[0m` : s);
export const dim = paint('2');
export const cyan = paint('36');
export const green = paint('32');
export const red = paint('31');
export const yellow = paint('33');

export function step(emoji, message) {
  if (!quiet) {
    console.error(`${emoji} ${dim(message)}`);
  }
  const started = Date.now();
  return {
    done(suffix = 'ready') {
      if (!quiet) {
        console.error(`   ${green('✔')} ${dim(`${suffix} (${((Date.now() - started) / 1000).toFixed(1)}s)`)}`);
      }
    },
  };
}

export function note(emoji, message) {
  if (!quiet) {
    console.error(`${emoji} ${dim(message)}`);
  }
}
