import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const HARNESS_DIR = path.resolve(fileURLToPath(import.meta.url), '../../../harness');

export const MEASURE_STACK_HINT =
  'rendering needs the optional peer packages: npm i -D vite @vitejs/plugin-react react react-dom @emotion/react @emotion/styled playwright-core ' +
  '(plus Google Chrome installed)';

const requireHere = createRequire(import.meta.url);

export async function importPeer(name) {
  try {
    return await import(pathToFileURL(requireHere.resolve(name)).href);
  } catch {
    throw new Error(`${name} not found — ${MEASURE_STACK_HINT}`);
  }
}

/** Run one capture config on a ready page, riding out Vite's dep-optimizer reloads. */
export async function runOn(page, cfg) {
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await page.evaluate((c) => window.__runCapture(c), cfg);
    } catch (err) {
      const msg = String(err.message);
      const reloadRace =
        msg.includes('Execution context was destroyed') ||
        msg.includes('Failed to fetch dynamically imported module') ||
        msg.includes('__runCapture is not a function');
      if (attempt >= 12 || !reloadRace) {
        throw err;
      }
      await page.waitForFunction(() => typeof window.__runCapture === 'function');
    }
  }
}

/** One DevTools session per page, kept open: detaching it would drop every emulation it set. */
const cdpOf = async (page) => (page.muiCdp ??= await page.context().newCDPSession(page));

/** Screenshot / forced-state helpers bound to one page. Results are plain data so they cross a socket. */
export function helpersFor(page) {
  return {
    screenshotElement: async (selector, outPath) => {
      await page.locator(selector).screenshot({ path: outPath });
      return outPath;
    },
    screenshotDrawn: async (selector, outPath, margin = 12) => {
      await page.locator(selector).scrollIntoViewIfNeeded();
      const clip = await page.evaluate(
        ({ sel, m }) => {
          const rects = [...document.querySelector(sel).querySelectorAll('*')]
            .map((el) => el.getBoundingClientRect())
            .filter((r) => r.width > 0 && r.height > 0);
          const x = Math.max(0, Math.floor(Math.min(...rects.map((r) => r.left)) - m));
          const y = Math.max(0, Math.floor(Math.min(...rects.map((r) => r.top)) - m));
          return { x, y, width: Math.ceil(Math.max(...rects.map((r) => r.right)) + m) - x, height: Math.ceil(Math.max(...rects.map((r) => r.bottom)) + m) - y };
        },
        { sel: selector, m: margin },
      );
      await page.screenshot({ path: outPath, clip });
      return outPath;
    },
    /** Put the current render in a state the way a user would: steps of { click | dblclick | hover: selector, nth? }, { tab: true }, { down | up: true }, { settle: selector }, { emulate: { touch?, print?, features?, width? } }. */
    interact: async (steps) => {
      const client = await cdpOf(page);
      for (const step of steps) {
        if (step.emulate) {
          // media a style row is written under: touch (hover: none, pointer: coarse), print, forced colors, a viewport width; {} restores.
          // Chrome ignores hover / pointer in setEmulatedMedia: only touch emulation drives them
          const { touch = false, print = false, features = [], width } = step.emulate;
          const coarse = touch || features.some((f) => /pointer$/.test(f.name) && f.value === 'coarse');
          await client.send('Emulation.setTouchEmulationEnabled', coarse ? { enabled: true, maxTouchPoints: 5 } : { enabled: false });
          await client.send('Emulation.setEmulatedMedia', { media: print ? 'print' : '', features: features.filter((f) => !/(pointer|hover)$/.test(f.name)) });
          page.muiViewport ??= page.viewportSize();
          await page.setViewportSize(width ? { width, height: page.muiViewport.height } : page.muiViewport);
        } else if (step.reset) {
          await page.mouse.up();
          await page.mouse.move(0, 0);
          await page.evaluate(() => document.activeElement?.blur());
        } else if (step.tab) {
          await page.locator('body').click({ position: { x: 1, y: 1 } }).catch(() => {});
          await page.keyboard.press('Tab');
        } else if (step.tabTo) {
          // keyboard focus onto the nth match, the way a user tabs through a page
          await page.locator('body').click({ position: { x: 1, y: 1 } }).catch(() => {});
          await page.evaluate(() => document.activeElement?.blur());
          for (let i = 0; i < 60; i += 1) {
            await page.keyboard.press('Tab');
            const inside = await page.evaluate(({ sel, nth }) => {
              const el = [...document.querySelectorAll(sel)][nth];
              return Boolean(el && (el === document.activeElement || el.contains(document.activeElement)));
            }, { sel: step.tabTo, nth: step.nth ?? 0 });
            if (inside) {
              break;
            }
          }
        } else if (step.type !== undefined) {
          // a user typing: focus the field, then key by key, Enter between lines
          await page.locator(step.into ?? '#mount input:not([type=hidden]), #mount textarea').first().click({ timeout: 1000 });
          const lines = String(step.type).split('\n');
          for (const [i, line] of lines.entries()) {
            await page.keyboard.type(line);
            if (i < lines.length - 1) {
              await page.keyboard.press('Enter');
            }
          }
          await page.mouse.move(0, 0);
          await page.waitForTimeout(100);
        } else if (step.settle) {
          // an element that mounts late (a popper positioning itself, a value moving into its portal): visible, then a box with a size, unchanged across two frames
          await page.locator(step.settle).first().waitFor({ state: 'visible', timeout: 2000 }).catch(() => {});
          await page.evaluate(async (selector) => {
            let previous = null;
            for (let i = 0; i < 60; i += 1) {
              await new Promise((resolve) => requestAnimationFrame(resolve));
              const box = document.querySelector(selector)?.getBoundingClientRect();
              const key = box && `${box.x},${box.y},${box.width},${box.height}`;
              if (key && key === previous && (box.width > 0 || box.height > 0)) {
                return;
              }
              previous = key;
            }
          }, step.settle);
        } else if (step.down) {
          await page.mouse.down();
        } else if (step.up) {
          await page.mouse.up();
        } else if (step.click || step.hover || step.dblclick) {
          const target = page.locator(step.click ?? step.hover ?? step.dblclick).nth(step.nth ?? 0);
          if (!(await target.count())) {
            continue;
          }
          const act = step.click ? 'click' : step.dblclick ? 'dblclick' : 'hover';
          await target[act]({ timeout: 800, force: true }).catch(() => {});
          await page.waitForTimeout(step.hover ? 50 : 200);
        }
      }
      return true;
    },
    /** An HTML page (a contact sheet of screenshots) rendered on its own page and saved as a PNG. */
    renderSheet: async (html, outPath) => {
      const sheet = await page.context().browser().newPage();
      try {
        await sheet.setContent(html);
        await sheet.screenshot({ path: outPath, fullPage: true });
      } finally {
        await sheet.close();
      }
      return outPath;
    },
    forcePseudo: async (selector, pseudoClasses) => {
      const client = await cdpOf(page);
      await client.send('DOM.enable');
      await client.send('CSS.enable');
      const { root } = await client.send('DOM.getDocument', { depth: -1 });
      const { nodeIds } = await client.send('DOM.querySelectorAll', { nodeId: root.nodeId, selector });
      for (const nodeId of nodeIds) {
        await client.send('CSS.forcePseudoState', { nodeId, forcedPseudoClasses: pseudoClasses });
      }
      await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
      return nodeIds.length;
    },
  };
}

/**
 * Vite (in-process, random port) + headless Chrome, with pages pooled per (colorScheme, scale, width).
 * A page goes back to the pool after its mount is cleared, so the next caller skips the page load.
 */
export async function bootEngine({ hostRoot, themeDirs = [] }) {
  const viteModule = await importPeer('vite');
  const playwright = await importPeer('playwright-core');
  const createServer = viteModule.createServer ?? viteModule.default?.createServer;
  const chromium = playwright.chromium ?? playwright.default?.chromium;
  process.env.MUI_CLI_HOST_ROOT = hostRoot;
  process.env.MUI_CLI_THEME_DIR = themeDirs.join(path.delimiter);
  const vite = await createServer({
    root: HARNESS_DIR,
    configFile: path.join(HARNESS_DIR, 'vite.config.mjs'),
    logLevel: 'silent',
    server: { host: '127.0.0.1', port: 0, strictPort: false },
  });
  let browser;
  try {
    await vite.listen();
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch (err) {
    await vite.close().catch(() => {});
    throw err;
  }
  const port = vite.httpServer.address().port;
  const pool = new Map();
  const pages = new Set();
  const seen = new Map();

  /** Source files under the theme dirs (a theme imports its siblings: tokens, palettes). */
  const themeFiles = () => {
    const out = [];
    const walk = (dir, depth) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const file = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          if (depth < 6 && !['node_modules', '.git', 'dist', 'build'].includes(entry.name) && !entry.name.startsWith('.')) {
            walk(file, depth + 1);
          }
        } else if (/\.(m?[jt]sx?|json)$/.test(entry.name)) {
          out.push(file);
        }
      }
    };
    themeDirs.filter((d) => fs.existsSync(d)).forEach((d) => walk(d, 0));
    return out;
  };

  /**
   * Before a run on a warm page: when a theme file (or anything next to it) changed since the last run, drop those
   * modules from Vite and mark every page stale — a page keeps the modules it imported, so it would render the old
   * theme. A stale page reloads at its next new render, never in the middle of one.
   */
  async function ready(page, cfg = {}) {
    const changed = [];
    for (const file of themeFiles()) {
      const mtime = fs.statSync(file).mtimeMs;
      if (seen.has(file) && seen.get(file) !== mtime) {
        changed.push(file);
      }
      seen.set(file, mtime);
    }
    if (changed.length) {
      for (const file of changed) {
        for (const mod of vite.moduleGraph.getModulesByFile(file) ?? []) {
          vite.moduleGraph.invalidateModule(mod);
        }
      }
      pages.forEach((p) => {
        p.muiStale = true;
      });
    }
    // a call continuing a held render (measure, resume, the gate's later steps) must keep the page it rendered on
    const continuing = cfg.resume || cfg.measureSnapshot || cfg.measureHeld || ['touch', 'ring', 'content', 'done', 'count'].includes(cfg.gate);
    if (page.muiStale && !continuing) {
      page.muiStale = false;
      await page.goto(`http://127.0.0.1:${port}/capture.html`).catch(() => page.goto(`http://127.0.0.1:${port}/capture.html`));
      await page.waitForFunction(() => typeof window.__runCapture === 'function');
    }
  }
  const keyOf = ({ colorScheme = null, scale = 1, width = 900 }) => `${colorScheme}|${scale}|${width}`;

  async function acquire(opts) {
    const key = keyOf(opts);
    const idle = pool.get(key)?.pop();
    if (idle) {
      return { page: idle, key };
    }
    const page = await browser.newPage({ viewport: { width: opts.width ?? 900, height: 700 }, deviceScaleFactor: opts.scale ?? 1 });
    if (opts.colorScheme) {
      await page.emulateMedia({ colorScheme: opts.colorScheme });
    }
    // renders never reach the network: outside images load at different times (or never, offline), so they are left out
    await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, (route) => route.abort());
    // every pooled page behaves as the focused one, so keyboard focus works on several pages at once
    await (await cdpOf(page)).send('Emulation.setFocusEmulationEnabled', { enabled: true });
    await page.goto(`http://127.0.0.1:${port}/capture.html`);
    await page.waitForFunction(() => typeof window.__runCapture === 'function');
    pages.add(page);
    return { page, key };
  }

  async function release({ page, key }) {
    try {
      if (page.muiCdp) {
        await page.muiCdp.send('Emulation.setTouchEmulationEnabled', { enabled: false });
        await page.muiCdp.send('Emulation.setEmulatedMedia', { media: '', features: [] });
      }
      await page.evaluate(() => {
        const mount = document.getElementById('mount');
        mount.innerHTML = '';
        mount.removeAttribute('style');
        // portals (an open menu) live outside #mount and would be the next render's first match
        [...document.body.children].filter((el) => el !== mount && el.tagName !== 'SCRIPT').forEach((el) => el.remove());
        document.documentElement.removeAttribute('data-mui-color-scheme');
      });
      pool.set(key, [...(pool.get(key) ?? []), page]);
    } catch {
      pages.delete(page);
      await page.close().catch(() => {});
    }
  }

  async function close() {
    await browser.close().catch(() => {});
    await vite.close().catch(() => {});
  }

  return { port, themeDirs, acquire, release, close, ready };
}
