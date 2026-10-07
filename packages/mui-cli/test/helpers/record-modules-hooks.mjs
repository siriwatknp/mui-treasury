import fs from 'node:fs';

let out;
export function initialize(data) {
  out = data.out;
  fs.writeFileSync(out, '');
}
export async function resolve(specifier, context, next) {
  const result = await next(specifier, context);
  fs.appendFileSync(out, `${result.url}\n`);
  return result;
}
