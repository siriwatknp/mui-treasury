/**
 * @file Core docs-demo rendering — the demo table and single-demo print for
 * Material UI components. Extracted so `mui component <Name> --list-demos` and
 * `mui demos <Name>` share one implementation.
 */
import { demosFor, demoIn } from './demos.mjs';
import { jsonOut } from './json.mjs';

/**
 * Handle the demo views for a core component (--list-demos / --demo). Loads the
 * page, prints an error + sets exit code when nothing is synced.
 */
const metaOf = (component, { name, section, description, url }) => ({ ...(component ? { component } : {}), name, section, description, url });

export async function handleCoreDemos(program, component, options) {
  const page = await demosFor(component);
  if (!page) {
    console.error(`no docs demos synced for ${component} — run 'pnpm sync-demos' or check the slug map`);
    process.exitCode = 1;
    return;
  }
  if (options.demo) {
    const demo = page.demos.find((d) => d.name === options.demo);
    if (!demo) {
      console.error(`no demo '${options.demo}' on ${page.url} — available: ${page.demos.map((d) => d.name).join(', ')}`);
      process.exitCode = 1;
      return;
    }
    const { source, lang } = demoIn(demo, options.js);
    if (options.copy) {
      const { copyToClipboard } = await import('./clipboard.mjs');
      try {
        await copyToClipboard(source);
      } catch (err) {
        console.error(`clipboard copy failed: ${err.message}`);
        process.exitCode = 1;
        return;
      }
      if (program.opts().json) {
        jsonOut('demo', { ...metaOf(component, demo), lang, copied: true });
        return;
      }
      console.log(`copied ${demo.name} (${lang}, ${source.split('\n').length} lines) to clipboard`);
      return;
    }
    if (program.opts().json) {
      jsonOut('demo', { ...metaOf(component, demo), lang, source });
      return;
    }
    console.log(source);
    return;
  }
  if (program.opts().json) {
    jsonOut('demos', { component, page: page.url, demos: page.demos.map((d) => metaOf(null, d)) });
    return;
  }
  console.log(`${component} docs demos — ${page.url}\n`);
  const nameW = Math.max(4, ...page.demos.map((d) => d.name.length));
  const sectionW = Math.max(7, ...page.demos.map((d) => d.section.length));
  // TTY: fit the description to the terminal; piped (agents): full text
  const descW = process.stdout.isTTY ? Math.max(24, (process.stdout.columns ?? 100) - nameW - sectionW - 6) : Infinity;
  const trim = (s, n) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
  console.log(`  ${'DEMO'.padEnd(nameW)}  ${'SECTION'.padEnd(sectionW)}  DESCRIPTION`);
  for (const d of page.demos) {
    console.log(`  ${d.name.padEnd(nameW)}  ${d.section.padEnd(sectionW)}  ${trim(d.description ?? '', descW)}`);
  }
  console.log(`\n→ mui demos ${component.replace(/^Mui/, '')} <Demo> [--js]  (prints the runnable source)`);
}
