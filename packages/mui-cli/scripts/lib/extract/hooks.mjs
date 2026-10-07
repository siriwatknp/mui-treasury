const RECORDER = new URL('./recorder.mjs', import.meta.url).href;
const MEMO = new URL('./memo.mjs', import.meta.url).href;

export async function resolve(specifier, context, next) {
  const result = await next(specifier, context);
  if (/\/@mui\/material\/styles\/styled\.mjs$/.test(result.url)) {
    return { url: RECORDER, shortCircuit: true };
  }
  if (/\/@mui\/material\/utils\/memoTheme\.mjs$/.test(result.url)) {
    return { url: MEMO, shortCircuit: true };
  }
  return result;
}
