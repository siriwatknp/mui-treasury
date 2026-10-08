const RECORDER = new URL('./recorder.mjs', import.meta.url).href;
const MEMO = new URL('./memo.mjs', import.meta.url).href;

// MUI X styles some slots with @mui/system's styled; recorded only for an X extraction so Material UI's rows don't change
const X = process.env.MUI_CLI_EXTRACT_X === '1';

// Data Grid root styles read grid state through hooks; outside a render they run against a stub api (see extract.mjs)
const GRID_HOOKS = {
  'useGridPrivateApiContext.mjs': [/export function useGridPrivateApiContext\(\) \{/, '$& return globalThis.__muiCliGridApi;'],
  'useGridSelector.mjs': [/export function useGridSelector\(apiRef, selector, args = undefined[^)]*\) \{/, '$& return selector(apiRef, args);'],
};

export async function resolve(specifier, context, next) {
  const result = await next(specifier, context);
  if (/\/@mui\/material\/styles\/styled\.mjs$/.test(result.url) || (X && /\/@mui\/system\/styled\/styled\.mjs$/.test(result.url))) {
    return { url: RECORDER, shortCircuit: true };
  }
  if (/\/@mui\/material\/utils\/memoTheme\.mjs$/.test(result.url)) {
    return { url: MEMO, shortCircuit: true };
  }
  return result;
}

export async function load(url, context, next) {
  const hook = X && /\/@mui\/x-data-grid\/hooks\/utils\//.test(url) ? GRID_HOOKS[url.slice(url.lastIndexOf('/') + 1)] : null;
  const result = await next(url, context);
  if (!hook) {
    return result;
  }
  const source = String(result.source);
  if (!hook[0].test(source)) {
    throw new Error(`${url} changed: the extractor's grid hook stub no longer matches`);
  }
  return { ...result, source: source.replace(...hook) };
}
