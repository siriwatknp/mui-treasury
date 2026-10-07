/** @file Typed JSON envelope, astryx-style: { type, data } on stdout. */

export function jsonOut(type, data) {
  process.stdout.write(`${JSON.stringify({ type, data }, jsonReplacer, 2)}\n`);
}

/** Fn matchers serialize as their source (agents can re-emit them verbatim). */
function jsonReplacer(key, value) {
  return typeof value === 'function' ? value.toString() : value;
}
