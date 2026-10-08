/**
 * @file Capture page — exposes window.__runCapture(cfg) for the node driver.
 * Every render comes from a module (cfg.probeUrl: a generated `<Component>` or a docs demo); the component's slots
 * are found through exact element tags (MARK), never through hand-written selectors.
 *
 * cfg = {
 *   probeUrl, component, propsKey,  e.g. '/_renders/MuiButton.jsx', 'MuiButton', 'size=small' | 'base'
 *   slots?,                         slots of `component` to tag (default ['root'])
 *   themeUrl?,                      /@fs/ URL — module default-exports themeOptions
 *   seams?: [{ id, slot, prop }],   computed styles to read
 *   rectSlot?,                      slot whose bounding rect is the outcome box
 *   graphDump?, annotate?, verifySeams?
 * }
 * Other modes: tokens, showcase, seamRows, warm, snapshot / measureSnapshot, measureHeld.
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Annotate, resolveClaims } from './annotations.jsx';

const parsePropsKey = (key) => {
  if (!key || key === 'base') {
    return {};
  }
  const props = {};
  for (const pair of key.split(',')) {
    const [k, v] = pair.split('=');
    props[k] = v === 'true' ? true : v === 'false' ? false : v;
  }
  return props;
};

// Layer extra slot styles (the slot markers) after the user's own (array form — how MUI flattens).
const mergeComponents = (userComps = {}, extra = {}) => {
  const out = { ...userComps };
  for (const [name, def] of Object.entries(extra)) {
    const prev = out[name] ?? {};
    const slots = { ...prev.styleOverrides };
    for (const [slot, layer] of Object.entries(def.styleOverrides ?? {})) {
      slots[slot] = slots[slot] ? [slots[slot], layer] : layer;
    }
    out[name] = { ...prev, styleOverrides: slots };
  }
  return out;
};

const kebab = (p) => p.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

function readSeamValue(el, prop) {
  const cs = getComputedStyle(el);
  if (prop === 'padding') {
    return `${cs.getPropertyValue('padding-top')} ${cs.getPropertyValue('padding-right')}`;
  }
  if (prop === 'paddingBlock') {
    return cs.getPropertyValue('padding-top'); // symmetric by construction in our models
  }
  if (prop === 'paddingInline') {
    return cs.getPropertyValue('padding-left'); // symmetric by construction in our models
  }
  if (prop === 'gap') {
    return cs.getPropertyValue('column-gap'); // horizontal gap is what the dials write
  }
  const v = cs.getPropertyValue(kebab(prop));
  if (v === '' || v === 'auto' || v === 'normal' || v === 'none') {
    return null;
  }
  return v;
}


/** A React root that keeps a render error on its host, so settleCommit stops waiting for a render that will never come. */
const rootOf = (host) =>
  createRoot(host, {
    onUncaughtError: (error) => {
      host.muiRenderError = String(error?.message ?? error).split('\n')[0];
    },
  });

const settleCommit = async (hosts) => {
  await document.fonts.ready;
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  for (let i = 0; i < 120 && hosts.some((h) => !h.firstElementChild && !h.muiRenderError); i += 1) {
    await new Promise((r) => requestAnimationFrame(r));
  }
  await new Promise((r) => requestAnimationFrame(r));
};

const buildTheme = async (themeUrl) => {
  const themeOptions = themeUrl ? (await import(/* @vite-ignore */ themeUrl)).default : {};
  return createTheme({
    ...themeOptions,
    components: {
      ...themeOptions.components,
      MuiButtonBase: { defaultProps: { disableRipple: true } },
    },
  });
};

/** The module to render: `Render` or the default export of cfg.probeUrl (a generated `<Component>` or a docs demo). */
async function loadRender(url) {
  if (!url) {
    throw new Error('no render module (probeUrl) given');
  }
  const m = await import(/* @vite-ignore */ url);
  const Render = m.Render ?? m.default;
  return (props) => <Render {...props} />;
}

/** Theme components with every slot of `name` tagged (see MARK); `seen` collects the owner props each tagged element rendered with. */
function withMarks(components, name, slots, seen) {
  registerMark();
  const marks = Object.fromEntries(
    slots.map((slot) => [
      slot,
      (p) => {
        seen.push(p.ownerState ?? {});
        return { [MARK]: `${name}|${slot}|${seen.length - 1}` };
      },
    ]),
  );
  return mergeComponents(components, { [name]: { styleOverrides: marks } });
}

/** Tag each marked element of `name` with data-mui-slot="<C|slot> …" so plain selectors (annotation claims) reach exactly it; one element can be several slots (a legacy toolbar container is also the toolbar). */
function tagSlots(name) {
  for (const [key, list] of markedElements()) {
    const [component, slot] = key.split('|');
    if (component === name) {
      list.forEach(({ el }) => {
        const tags = new Set((el.getAttribute('data-mui-slot') ?? '').split(' ').filter(Boolean)).add(`${component}|${slot}`);
        el.setAttribute('data-mui-slot', [...tags].join(' '));
      });
    }
  }
}

const slotSelector = (name, slot) => `[data-mui-slot~="${name}|${slot}"]`;

const GENERIC_FONT = /^(-apple-system|BlinkMacSystemFont|system-ui|ui-sans-serif|ui-monospace|sans-serif|serif|monospace|Segoe UI|Roboto|Helvetica|Arial)$/i;

/**
 * A theme only NAMES its font; the preview must LOAD it or it silently renders
 * the fallback. Pull the first family off theme.typography.fontFamily, fetch it
 * from Google Fonts, and report whether it actually loaded (so the page never
 * claims a font it's really showing in fallback).
 */
async function ensureThemeFont(theme) {
  const fam = String(theme?.typography?.fontFamily || '').split(',')[0].replace(/["']/g, '').trim();
  if (!fam || GENERIC_FONT.test(fam)) {
    await document.fonts.ready;
    return { fam: fam || null, loaded: null };
  }
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${fam.replace(/ /g, '+')}:wght@300;400;500;600;700&display=swap`;
  document.head.appendChild(link);
  await Promise.race([
    Promise.all([400, 500, 700].map((w) => document.fonts.load(`${w} 16px "${fam}"`))),
    new Promise((r) => setTimeout(r, 5000)),
  ]).catch(() => {});
  await document.fonts.ready;
  return { fam, loaded: document.fonts.check(`400 16px "${fam}"`) };
}

const round1 = (n) => Math.round(n * 10) / 10;
const OK = '#2e7d32';
const BAD = '#ef5350';

/** "rgb(37, 99, 235)" → "#2563EB" (drops alpha). */
function rgbToHex(v) {
  const m = String(v ?? '').match(/[\d.]+/g);
  if (!m || m.length < 3) {
    return null;
  }
  const hex = (n) => Math.round(Number(n)).toString(16).padStart(2, '0');
  const alpha = m[3] !== undefined && Number(m[3]) < 1 ? hex(Number(m[3]) * 255) : '';
  return `#${m.slice(0, 3).map(hex).join('')}${alpha}`.toUpperCase();
}

/**
 * Family verification page — three top-down sections, each with its own lens.
 * cfg.showcase = { title, scheme?, measurements[], colors[], states[] }:
 *   measurements: { component, propsKey, label, target }  → height ruler + px vs literal
 *   colors:       { component, propsKey, label, checks:[{prop,label,expect}] } → hex vs token
 *   states:       { component, propsKey, label, state }   → forced state, labeled
 */
async function runShowcase(cfg) {
  const { title = 'Showcase', scheme, measurements = [], colors = [], states = [], renders: urls = {} } = cfg.showcase;
  if (scheme === 'dark') {
    document.documentElement.setAttribute('data-mui-color-scheme', 'dark');
  }
  const names = Object.keys(urls);
  const themeOptions = cfg.themeUrl ? (await import(/* @vite-ignore */ cfg.themeUrl)).default : {};
  let components = { ...themeOptions.components };
  for (const n of names) {
    components = withMarks(components, n, ['root'], []);
  }
  const theme = createTheme({ ...themeOptions, components: { ...components, MuiButtonBase: { ...components.MuiButtonBase, defaultProps: { disableRipple: true, ...components.MuiButtonBase?.defaultProps } } } });
  const renders = Object.fromEntries(await Promise.all(names.map(async (n) => [n, await loadRender(urls[n])])));
  await ensureThemeFont(theme); // load the theme's font so the family renders faithfully
  const mount = document.getElementById('mount');
  const container = document.createElement('div');
  container.id = 'mui-showcase';
  container.style.cssText =
    'display:inline-block;min-width:600px;background:var(--mui-palette-background-default, #fff);color:var(--mui-palette-text-primary, #111);padding:26px 34px 32px;font-family:-apple-system,Roboto,Helvetica,Arial,sans-serif;';
  const heading = document.createElement('div');
  heading.textContent = title;
  heading.style.cssText = 'font-size:18px;font-weight:700;color:var(--mui-palette-text-primary, #1A1F36);';
  container.appendChild(heading);
  mount.appendChild(container);

  const muted = 'var(--mui-palette-text-secondary, #6B7280)';
  const paint = (stage, component, propsKey) => createRoot(stage).render(<ThemeProvider theme={theme}>{renders[component](parsePropsKey(propsKey))}</ThemeProvider>);
  const rootOf = (b) => {
    tagSlots(b.component);
    return b.stage.querySelector(slotSelector(b.component, 'root'));
  };

  /**
   * Render a section as a labeled matrix: rows = cell.row, columns = cell.col.
   * Returns the placed cells (each with .stage/.cap/.body) — caller renders +
   * annotates. Single-column sections (col === 'color') hide the column header.
   */
  const matrix = (name, cells) => {
    const cols = [...new Set(cells.map((c) => c.col))];
    const rows = [...new Set(cells.map((c) => c.row))];
    const showColHeaders = !(cols.length === 1 && cols[0] === 'color');
    const sec = document.createElement('div');
    sec.style.cssText = 'margin-top:26px;';
    const hd = document.createElement('div');
    hd.textContent = name;
    hd.style.cssText =
      'font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:' + muted + ';border-bottom:1px solid var(--mui-palette-divider, #E3E8EE);padding-bottom:6px;margin-bottom:16px;';
    const grid = document.createElement('div');
    grid.style.cssText = `display:grid;grid-template-columns:max-content repeat(${cols.length}, max-content);gap:16px 30px;align-items:center;`;
    const put = (el) => grid.appendChild(el);
    const txt = (t, css) => {
      const d = document.createElement('div');
      d.textContent = t;
      d.style.cssText = css;
      return d;
    };
    // header row: empty corner + column labels
    put(txt('', ''));
    for (const col of cols) {
      put(showColHeaders ? txt(col, 'font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:' + muted) : txt('', ''));
    }
    const placed = [];
    for (const row of rows) {
      put(txt(row, 'font-size:11px;font-weight:600;color:' + muted + ';white-space:nowrap;padding-right:6px;'));
      for (const col of cols) {
        const c = cells.find((x) => x.row === row && x.col === col);
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;flex-direction:column;gap:6px;align-items:flex-start;';
        if (c) {
          const body = document.createElement('div');
          body.style.cssText = 'display:flex;align-items:flex-start;gap:8px;';
          const stage = document.createElement('div');
          body.appendChild(stage);
          const cap = document.createElement('div');
          cap.style.cssText = 'font-size:11px;font-weight:600;line-height:1.5;';
          wrap.append(body, cap);
          placed.push({ ...c, stage, cap, body });
        }
        put(wrap);
      }
    }
    sec.append(hd, grid);
    container.appendChild(sec);
    return placed;
  };

  const out = { selector: '#mui-showcase', measurements: [], colors: [], states: [] };

  // ── Measurements — the annotation engine's height bar + px vs the DESIGN.md literal ──
  const annotated = [];
  if (measurements.length) {
    const built = matrix('Measurements', measurements);
    built.forEach((b) => paint(b.stage, b.component, b.propsKey));
    await settleCommit(built.map((b) => b.stage));
    for (const b of built) {
      const el = rootOf(b);
      const rect = el ? el.getBoundingClientRect() : null;
      const px = rect ? round1(rect.height) : null;
      const w = rect ? round1(rect.width) : null;
      const ok = b.target == null ? null : px != null && Math.abs(px - b.target) <= 0.5;
      if (px != null) {
        b.body.style.position = 'relative';
        b.body.style.paddingRight = '64px';
        const { items, bounds } = resolveClaims(b.body, b.stage, [
          { on: slotSelector(b.component, 'root'), aspect: 'size', axis: 'block', route: { gutter: 'right' } },
        ]);
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
        b.body.appendChild(overlay);
        createRoot(overlay).render(<Annotate items={items} bounds={bounds} scheme={scheme === 'dark' ? 'dark' : 'light'} />);
        annotated.push(overlay);
      }
      b.cap.textContent = `${w}×${px}px${b.target == null ? '' : ok ? ' ✓' : ` ✗ ${b.target}`}`;
      b.cap.style.color = ok === false ? BAD : ok ? OK : 'var(--mui-palette-text-secondary, #333)';
      out.measurements.push({ label: b.label, component: b.component, measured: px, width: w, target: b.target ?? null, ok });
    }
    await settleCommit(annotated);
  }

  // ── Color & Background — computed hex vs the DESIGN.md token ──
  if (colors.length) {
    const built = matrix('Color & Background', colors);
    built.forEach((b) => paint(b.stage, b.component, b.propsKey));
    await settleCommit(built.map((b) => b.stage));
    for (const b of built) {
      const checks = (b.checks ?? []).map((chk) => {
        const el = chk.slot ? b.stage.querySelector(`.${b.component}-${chk.slot}`) : rootOf(b);
        const cs = el ? getComputedStyle(el) : null;
        const got = rgbToHex(cs ? cs[chk.prop === 'borderColor' ? 'borderTopColor' : chk.prop] : null);
        const ok = chk.expect == null ? null : Boolean(got) && got === String(chk.expect).toUpperCase();
        return { prop: chk.prop, label: chk.label, got, expect: chk.expect ?? null, ok };
      });
      b.cap.innerHTML = checks
        .map((c) => `<span style="color:${c.ok === false ? BAD : c.ok ? OK : 'var(--mui-palette-text-secondary, #333)'}">${c.label} ${c.got ?? '—'}${c.ok == null ? '' : c.ok ? ' ✓' : ` ✗ ${c.expect}`}</span>`)
        .join('<br>');
      out.colors.push({ label: b.label, component: b.component, checks });
    }
  }

  // ── States — force the state, render (column header names the state) ──
  if (states.length) {
    const built = matrix('States', states);
    built.forEach((b) => paint(b.stage, b.component, b.propsKey));
    await settleCommit(built.map((b) => b.stage));
    for (const b of built) {
      if (b.state === 'focusVisible') {
        rootOf(b)?.classList.add('Mui-focusVisible');
      } else if (b.state === 'hover' || b.state === 'active') {
        // marked for the node driver to force the pseudo via CDP (real
        // mouse-over/press can only hit ONE element; a screenshot needs the
        // whole column forced) — data-force carries the pseudo name
        rootOf(b)?.setAttribute('data-force', b.state === 'active' ? 'active' : 'hover');
      }
      out.states.push({ label: b.label, component: b.component, state: b.state });
    }
  }

  return out;
}

const remToPxNum = (v) => {
  if (typeof v === 'number') {
    return v;
  }
  const m = String(v ?? '').match(/^(-?[\d.]+)(rem|px|em)?$/);
  return m ? (m[2] === 'px' ? +m[1] : +m[1] * 16) : null;
};

/**
 * Foundation-token spec page — editorial layout, five sections. cfg.tokens =
 * { title, scheme?, typography[], colors[], radius[], spacing[], shadows[] }.
 * Typography/color/radius/spacing carry measured values + gates; shadows visual.
 */
async function runTokens(cfg) {
  const { title = 'Design tokens', scheme, typography = [], colors = [], radius = [], spacing = [], shadows = [] } = cfg.tokens;
  if (scheme === 'dark') {
    document.documentElement.setAttribute('data-mui-color-scheme', 'dark');
  }
  const theme = await buildTheme(cfg.themeUrl);
  const palette = (scheme === 'dark' && theme.colorSchemes?.dark?.palette) || theme.palette;
  const paletteValue = (name) => name.split('-').reduce((node, key) => node?.[key], palette);
  const radiusValue = typeof theme.shape.borderRadius === 'number' ? `${theme.shape.borderRadius}px` : theme.shape.borderRadius;
  const spacingValue = theme.spacing(1);
  const muted = 'var(--mui-palette-text-secondary, #6B7280)';
  const line = 'var(--mui-palette-divider, #E3E8EE)';
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';
  const page = document.createElement('div');
  page.id = 'mui-tokens';
  page.style.cssText = `display:inline-block;width:760px;background:var(--mui-palette-background-default, #fff);color:var(--mui-palette-text-primary, #111);padding:40px 52px 52px;font-family:-apple-system,Roboto,Helvetica,Arial,sans-serif;`;
  const h = document.createElement('div');
  h.textContent = title;
  h.style.cssText = 'font-size:22px;font-weight:700;letter-spacing:-0.01em;';
  page.appendChild(h);
  document.getElementById('mount').appendChild(page);

  const section = (idx, name) => {
    const sec = document.createElement('div');
    sec.style.cssText = 'margin-top:44px;';
    const kicker = document.createElement('div');
    kicker.textContent = `${idx} — FOUNDATION`;
    kicker.style.cssText = `font-family:${mono};font-size:11px;font-weight:600;letter-spacing:0.14em;color:${muted};margin-bottom:8px;`;
    const t = document.createElement('div');
    t.textContent = name;
    t.style.cssText = 'font-size:28px;font-weight:600;letter-spacing:-0.01em;margin-bottom:22px;';
    sec.append(kicker, t);
    page.appendChild(sec);
    return sec;
  };
  const capColor = (ok) => (ok === false ? BAD : ok ? OK : muted);
  const out = { selector: '#mui-tokens', typography: [], colors: [], radius: [], spacing: [], shadows: [] };

  // ── 01 Typography — the ramp, measured vs the theme's declared variant ──
  if (typography.length) {
    const sec = section('01', 'Typography');
    // load + report the theme's actual font (naming ≠ rendering)
    const font = await ensureThemeFont(theme);
    out.font = font;
    const famRow = document.createElement('div');
    famRow.style.cssText = `margin:-14px 0 20px;font-size:13px;color:${muted};`;
    const status = font.loaded == null ? '' : font.loaded ? `<span style="color:${OK}">✓ loaded</span>` : `<span style="color:${BAD}">✗ not loaded — fallback shown</span>`;
    famRow.innerHTML = `font-family <b style="font-family:${mono};color:var(--mui-palette-text-primary,#111)">${font.fam ?? '(system default)'}</b> &nbsp;${status}`;
    sec.appendChild(famRow);
    const rows = typography.map((t) => {
      const row = document.createElement('div');
      row.style.cssText = `display:grid;grid-template-columns:140px 1fr;gap:24px;align-items:baseline;padding:14px 0;border-top:1px solid ${line};`;
      const meta = document.createElement('div');
      const stage = document.createElement('div');
      row.append(meta, stage);
      sec.appendChild(row);
      createRoot(stage).render(<ThemeProvider theme={theme}><Typography variant={t.variant}>{t.sample}</Typography></ThemeProvider>);
      return { ...t, meta, stage };
    });
    await settleCommit(rows.map((r) => r.stage));
    for (const r of rows) {
      const el = r.stage.querySelector('.MuiTypography-root') ?? r.stage.firstElementChild;
      const cs = el ? getComputedStyle(el) : null;
      const spec = theme.typography?.[r.variant] ?? {};
      const gotFs = cs ? round1(parseFloat(cs.fontSize)) : null;
      const wantFs = remToPxNum(spec.fontSize);
      const okFs = wantFs == null || gotFs == null ? null : Math.abs(gotFs - wantFs) <= 1;
      const gotW = cs ? cs.fontWeight : null;
      const gotLh = cs ? round1(parseFloat(cs.lineHeight)) : null;
      const unitless = typeof spec.lineHeight === 'number' || /^[\d.]+$/.test(String(spec.lineHeight ?? ''));
      const wantLh = unitless ? round1(Number(spec.lineHeight) * (wantFs ?? gotFs)) : remToPxNum(spec.lineHeight);
      const okLh = wantLh == null || gotLh == null ? null : Math.abs(gotLh - wantLh) <= 0.5;
      const ok = okFs === false || okLh === false ? false : okFs || okLh ? true : null;
      r.meta.innerHTML =
        `<div style="font-family:${mono};font-size:13px;font-weight:700;margin-bottom:5px">${r.variant}</div>` +
        `<div style="font-size:12px;font-weight:600;color:${capColor(okFs)}">${gotFs}px${wantFs == null ? '' : okFs ? ' ✓' : ` ✗ ${wantFs}`}</div>` +
        `<div style="font-size:12px;font-weight:600;color:${capColor(okLh)};margin-top:2px">line ${gotLh || '—'}px${wantLh == null ? '' : okLh ? ' ✓' : ` ✗ ${wantLh}`}</div>` +
        `<div style="font-size:12px;color:${muted}">weight ${gotW}</div>`;
      out.typography.push({ variant: r.variant, fontSize: gotFs, lineHeight: gotLh, fontWeight: gotW, ok });
    }
  }

  // ── 02 Colour — grouped by family: family label + the family's swatches in a row ──
  if (colors.length) {
    const sec = section('02', 'Colour');
    const fam = new Map(); // family → [{ name, member, expect }]
    for (const c of colors) {
      const i = c.name.indexOf('-');
      const family = i === -1 ? c.name : c.name.slice(0, i);
      const member = i === -1 ? c.name : c.name.slice(i + 1);
      (fam.get(family) ?? fam.set(family, []).get(family)).push({ ...c, member });
    }
    const grid = document.createElement('div');
    grid.style.cssText = `display:grid;grid-template-columns:104px 1fr;gap:20px 18px;align-items:center;`;
    sec.appendChild(grid);
    const built = [];
    for (const [family, members] of fam) {
      const lab = document.createElement('div');
      lab.textContent = family;
      lab.style.cssText = `font-family:${mono};font-size:12px;font-weight:600;color:${muted};`;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:22px;';
      grid.append(lab, row);
      for (const m of members) {
        const cell = document.createElement('div');
        cell.style.cssText = 'display:flex;align-items:center;gap:10px;';
        const sw = document.createElement('div');
        sw.style.cssText = `width:32px;height:32px;border-radius:6px;flex:none;border:1px solid ${line};background:${paletteValue(m.name) ?? 'transparent'};`;
        const txt = document.createElement('div');
        cell.append(sw, txt);
        row.appendChild(cell);
        built.push({ ...m, sw, txt });
      }
    }
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    for (const b of built) {
      const got = rgbToHex(getComputedStyle(b.sw).backgroundColor);
      const ok = b.expect == null ? null : Boolean(got) && got === String(b.expect).toUpperCase();
      b.txt.innerHTML =
        `<div style="font-size:12px;font-weight:600">${b.member}</div>` +
        `<div style="font-family:${mono};font-size:11px;color:${capColor(ok)}">${got ?? '—'}${ok == null ? '' : ok ? ' ✓' : ` ✗ ${b.expect}`}</div>`;
      out.colors.push({ name: b.name, got, expect: b.expect ?? null, ok });
    }
  }

  // ── 03 Radius — bordered corner swatches, measured vs the token ──
  if (radius.length) {
    const sec = section('03', 'Radius');
    const grid = document.createElement('div');
    grid.style.cssText = 'display:flex;gap:34px;flex-wrap:wrap;align-items:flex-start;';
    sec.appendChild(grid);
    const built = radius.map((r) => {
      const cell = document.createElement('div');
      cell.style.cssText = 'display:flex;flex-direction:column;gap:10px;align-items:flex-start;';
      const box = document.createElement('div');
      // paper fill + accent border → the rounded corner reads as a clear outline
      box.style.cssText = `width:72px;height:72px;background:var(--mui-palette-background-paper, #fff);border:2px solid ${palette.primary.main};border-radius:${radiusValue};`;
      const txt = document.createElement('div');
      cell.append(box, txt);
      grid.appendChild(cell);
      return { ...r, box, txt };
    });
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    for (const b of built) {
      const got = round1(parseFloat(getComputedStyle(b.box).borderTopLeftRadius));
      const want = remToPxNum(b.expect);
      const ok = want == null ? null : Math.abs(got - want) <= 0.5;
      b.txt.innerHTML =
        `<div style="font-family:${mono};font-size:12px;font-weight:600">${b.name}</div>` +
        `<div style="font-size:12px;color:${capColor(ok)}">${got}px${ok == null ? '' : ok ? ' ✓' : ' ✗'}</div>`;
      out.radius.push({ name: b.name, got, expect: want, ok });
    }
  }

  // ── 04 Spacing — bar per step, measured vs the token ──
  if (spacing.length) {
    const sec = section('04', 'Spacing');
    const stack = document.createElement('div');
    stack.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    sec.appendChild(stack);
    const built = spacing.map((s) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:16px;';
      const bar = document.createElement('div');
      bar.style.cssText = `height:14px;width:${spacingValue};background:${palette.primary.main};border-radius:2px;flex:none;`;
      const txt = document.createElement('div');
      row.append(bar, txt);
      stack.appendChild(row);
      return { ...s, bar, txt };
    });
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    for (const b of built) {
      const got = round1(parseFloat(getComputedStyle(b.bar).width));
      const want = remToPxNum(b.expect);
      const ok = want == null ? null : Math.abs(got - want) <= 0.5;
      b.txt.innerHTML = `<span style="font-family:${mono};font-size:11px;color:${capColor(ok)}">${b.name} · ${got}px${ok == null ? '' : ok ? ' ✓' : ' ✗'}</span>`;
      out.spacing.push({ name: b.name, got, expect: want, ok });
    }
  }

  // ── 05 Elevation — a card per level, visual (getdesign.md has no shadow token) ──
  if (shadows.length) {
    const sec = section('05', 'Elevation');
    const grid = document.createElement('div');
    grid.style.cssText = 'display:flex;gap:30px;flex-wrap:wrap;';
    sec.appendChild(grid);
    for (const s of shadows) {
      const cell = document.createElement('div');
      cell.style.cssText = 'display:flex;flex-direction:column;gap:10px;align-items:center;';
      const card = document.createElement('div');
      card.style.cssText = `width:84px;height:56px;border-radius:8px;background:var(--mui-palette-background-paper, #fff);box-shadow:${theme.shadows?.[s.level] ?? 'none'};`;
      const txt = document.createElement('div');
      txt.textContent = `elevation ${s.level}`;
      txt.style.cssText = `font-family:${mono};font-size:11px;color:${muted};`;
      cell.append(card, txt);
      grid.appendChild(cell);
      out.shadows.push({ level: s.level });
    }
  }

  return out;
}

const UNITLESS = new Set(['lineHeight', 'fontWeight', 'opacity', 'zIndex', 'flex', 'flexGrow', 'flexShrink', 'order', 'zoom', 'fillOpacity', 'strokeOpacity', 'aspectRatio']);
const SIDES = ['Top', 'Right', 'Bottom', 'Left'];
const CORNERS = ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'];
const LONGHANDS = {
  padding: SIDES.map((x) => `padding${x}`),
  paddingBlock: ['paddingTop', 'paddingBottom'],
  paddingInline: ['paddingLeft', 'paddingRight'],
  margin: SIDES.map((x) => `margin${x}`),
  marginBlock: ['marginTop', 'marginBottom'],
  marginInline: ['marginLeft', 'marginRight'],
  inset: ['top', 'right', 'bottom', 'left'],
  borderRadius: CORNERS.map((c) => `border${c}Radius`),
  gap: ['rowGap', 'columnGap'],
  overflow: ['overflowX', 'overflowY'],
  border: SIDES.flatMap((x) => [`border${x}Width`, `border${x}Style`, `border${x}Color`]),
  borderWidth: SIDES.map((x) => `border${x}Width`),
  borderStyle: SIDES.map((x) => `border${x}Style`),
  borderColor: SIDES.map((x) => `border${x}Color`),
  ...Object.fromEntries(SIDES.map((x) => [`border${x}`, [`border${x}Width`, `border${x}Style`, `border${x}Color`]])),
  outline: ['outlineWidth', 'outlineStyle', 'outlineColor'],
  flex: ['flexGrow', 'flexShrink', 'flexBasis'],
  background: ['backgroundColor', 'backgroundImage'],
  textDecoration: ['textDecorationLine', 'textDecorationStyle', 'textDecorationColor'],
  transition: ['transitionProperty', 'transitionDuration', 'transitionTimingFunction', 'transitionDelay'],
};
const longhandsOf = (prop) => LONGHANDS[prop] ?? [prop];
const kebabProp = (p) => (p.startsWith('--') ? p : p.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`));

let vtCounter = 0;
const splitAlternatives = (part) => part.split(/,(?![^(]*\))/).map((a) => a.trim()).filter(Boolean);
/**
 * Elements a row's nested selector path targets from its slot element. Nesting is textual, as in the style
 * engine: each `&` is replaced by the whole parent selector, so `.a&` inside `& .b` becomes `.a<slot> .b`.
 */
const PSEUDO = /::?(before|after|placeholder)\b/;

/** Elements a row's selector reaches from `slotEl`, grouped by pseudo-element ('' for the element itself — one selector can reach `::before` and `::after`). */
function rowTargets(selector, slotEl) {
  const tag = `vt${(vtCounter += 1)}`;
  let full = [`[data-vt="${tag}"]`];
  for (const part of selector) {
    if (part.startsWith('@media')) {
      if (!window.matchMedia(part.slice(6).trim()).matches) {
        return { groups: [], specificity: 0 };
      }
      continue;
    }
    if (part.replace(new RegExp(PSEUDO.source, 'g'), '').includes('::')) {
      return { skip: 'pseudo-element' };
    }
    const alternatives = splitAlternatives(part).map((a) => (a.includes('&') ? a : `& ${a}`));
    full = alternatives.flatMap((alt) => full.map((parent) => alt.replace(/&/g, parent)));
  }
  const specificity = Math.max(...full.map((f) => (f.replace(/\[data-vt="[^"]+"\]/g, '').match(/[.:[#]/g) ?? []).length));
  const byPseudo = new Map();
  for (const f of full) {
    const pm = PSEUDO.exec(f);
    const pseudo = pm ? `::${pm[1]}` : '';
    byPseudo.set(pseudo, [...(byPseudo.get(pseudo) ?? []), pm ? f.replace(pm[0], '') : f]);
  }
  slotEl.setAttribute('data-vt', tag);
  try {
    return { groups: [...byPseudo].map(([pseudo, list]) => ({ pseudo, targets: [...document.querySelectorAll(list.join(', '))] })), specificity };
  } catch {
    return { skip: 'selector' };
  } finally {
    slotEl.removeAttribute('data-vt');
  }
}

/** Compare extracted rows with what renders: cfg.seamRows = { rows, fns } (once), then per render cfg.verifySeams. */
async function runVerifySeams(cfg, probe) {
  if (cfg.seamRows) {
    const fns = Object.fromEntries(Object.entries(cfg.seamRows.fns).map(([id, src]) => [id, new Function(`return (${src})`)()]));
    const byComponent = {};
    for (const row of cfg.seamRows.rows) {
      (byComponent[row.component] ??= []).push(row);
    }
    window.__seams = { fns, byComponent };
    return { loaded: cfg.seamRows.rows.length };
  }
  const { fns, byComponent } = window.__seams;
  const primary = cfg.component;
  const captured = {};
  const components = {};
  const stateKey = (ownerState) =>
    JSON.stringify(ownerState ?? {}, (k, v) => (typeof v === 'function' ? '[fn]' : v && typeof v === 'object' && k ? '[obj]' : v));
  registerMark();
  for (const [name, rows] of Object.entries(byComponent)) {
    // every styled element carries a non-inherited mark naming the component, slot and the exact props it rendered with
    const record = (slot) => (props) => {
      const list = (captured[name] ??= []);
      list.push({ key: stateKey(props.ownerState), props, slot });
      return { [MARK]: `${name}|${slot}|${list.length - 1}` };
    };
    components[name] = { styleOverrides: Object.fromEntries([...new Set(rows.map((r) => r.slot))].map((slot) => [slot, record(slot)])) };
  }
  const theme = createTheme({ components: { ...components, MuiButtonBase: { defaultProps: { disableRipple: true } } } });
  const host = document.createElement('div');
  document.getElementById('mount').appendChild(host);
  const root = rootOf(host);
  root.render(<ThemeProvider theme={theme}>{probe.render(parsePropsKey(cfg.propsKey))}</ThemeProvider>);
  await settleCommit([host]);
  if (cfg.hold) {
    window.__held = { primary, captured, host, root };
    return { held: true };
  }
  return measureSeams({ primary, captured, host, root });
}

const MARK = '--mui-cli-mark';
function registerMark() {
  if (!window.__markRegistered) {
    CSS.registerProperty({ name: MARK, syntax: '*', inherits: false });
    window.__markRegistered = true;
  }
}

/**
 * Every styled element on the page (portals included), grouped by component|slot, with the captured entry it rendered
 * with. A slot's element is the one Emotion labels with it (`css-…-MuiTablePagination-select`, dev builds) — the element
 * its styles are written for, even when a theme key is routed elsewhere; the mark (theme-key placement) is the fallback.
 */
function markedElements() {
  const marks = new Map();
  const labels = new Map();
  for (const el of document.body.querySelectorAll('*')) {
    const mark = getComputedStyle(el).getPropertyValue(MARK).trim();
    const [markName, markSlot, markIndex] = mark ? mark.split('|') : [];
    if (mark) {
      const key = `${markName}|${markSlot}`;
      marks.set(key, [...(marks.get(key) ?? []), { el, index: Number(markIndex) }]);
    }
    for (const cls of el.classList) {
      if (!cls.startsWith('css-')) {
        continue;
      }
      for (const label of cls.slice(cls.indexOf('-', 4) + 1).split(/-(?=Mui[A-Z])/)) {
        const [name, slot] = label.split('-');
        if (name?.startsWith('Mui') && slot) {
          const key = `${name}|${slot}`;
          labels.set(key, [...(labels.get(key) ?? []), { el, index: markName === name ? Number(markIndex) : -1 }]);
        }
      }
    }
  }
  return new Map([...marks, ...labels]);
}

/** Second half of runVerifySeams — split so a caller can put the render in a state (hover, keyboard focus) before measuring. */
function measureSeams({ primary, captured, host, root }) {
  const { fns, byComponent } = window.__seams;
  const results = [];
  const marked = markedElements();
  for (const [name, entries] of Object.entries(captured)) {
    if (name !== primary) {
      byComponent[name].forEach((row) => results.push({ id: row.id, status: 'context' }));
      continue;
    }
    const indexOf = new Map([...marked].filter(([k]) => k.startsWith(`${name}|`)).flatMap(([, list]) => list.filter(({ index }) => index >= 0).map(({ el, index }) => [el, index])));
    // an element only the label identifies (no theme key lands on it) takes its slot's captured props
    const statesFor = (el, slot) => [(entries[indexOf.get(el)] ?? entries.find((e) => e.slot === slot) ?? entries[0]).props];
    const applies = (row, states) => {
      const verdicts = states.map((props) => {
        const ownerState = props.ownerState ?? {};
        if (!row.matcher) {
          return true;
        }
        if (row.matcher.fn) {
          return Boolean(fns[row.matcher.fn]({ ...props, ...ownerState, ownerState }));
        }
        return Object.entries(row.matcher).every(([k, v]) => props[k] === v || ownerState[k] === v);
      });
      return verdicts.every(Boolean) ? true : verdicts.some(Boolean) ? 'ambiguous' : false;
    };
    const winners = new Map();
    const status = new Map();
    const note = (id, st) => {
      if (!status.has(id)) {
        status.set(id, st);
      }
    };
    const rows = byComponent[name];
    const stringElements = new Set(rows.filter((r) => r.element === r.element.toLowerCase()).map((r) => `${r.slot}|${r.element}`));
    rows.forEach((row, order) => {
      if (row.internal) {
        note(row.id, 'internal');
        return;
      }
      const isTag = row.element === row.element.toLowerCase();
      const slotEls = (marked.get(`${name}|${row.slot}`) ?? []).map((m) => m.el).filter((el) =>
        isTag ? !rows.some((r) => r.slot === row.slot && r.element !== row.element) || el.tagName.toLowerCase() === row.element
          : ![...stringElements].some((k) => k === `${row.slot}|${el.tagName.toLowerCase()}`),
      );
      for (const slotEl of slotEls) {
        const a = applies(row, statesFor(slotEl, row.slot));
        if (a === 'ambiguous') {
          note(row.id, 'ambiguous');
        }
        if (a !== true) {
          continue;
        }
        const { groups, specificity, skip } = rowTargets(row.selector, slotEl);
        if (skip) {
          note(row.id, skip);
          continue;
        }
        for (const { pseudo, targets } of groups) {
          for (const el of targets) {
            const perEl = winners.get(el) ?? new Map();
            for (const lh of longhandsOf(row.prop)) {
              const prev = perEl.get(`${pseudo}|${lh}`);
              if (!prev || specificity >= prev.specificity) {
                perEl.set(`${pseudo}|${lh}`, { row, specificity, order, pseudo });
              }
            }
            winners.set(el, perEl);
          }
        }
      }
    });
    const outcomes = new Map();
    // the harness turns motion off for stable measurements; motion rows are read with that rule lifted
    const noMotion = [...document.querySelectorAll('style')].find((st) => /transition:\s*none/.test(st.textContent));
    const scratch = document.createElement('style');
    document.head.appendChild(scratch);
    for (const [el, perEl] of winners) {
      const byRow = new Map();
      for (const [key, w] of perEl) {
        const lh = key.slice(key.indexOf('|') + 1);
        const k = `${w.pseudo}|${w.row.id}`;
        const entry = byRow.get(k) ?? { row: w.row, pseudo: w.pseudo, lhs: [] };
        entry.lhs.push(lh);
        byRow.set(k, entry);
      }
      for (const { row, pseudo, lhs } of byRow.values()) {
        const cssProp = kebabProp(row.prop);
        const value = typeof row.value === 'number' && !UNITLESS.has(row.prop) && !row.prop.startsWith('--') ? `${row.value}px` : String(row.value);
        const motion = /^(transition|animation)/.test(row.prop);
        if (motion && noMotion) {
          noMotion.disabled = true;
        }
        const read = () => {
          const cs = getComputedStyle(el, pseudo || null);
          return lhs.map((lh) => cs.getPropertyValue(kebabProp(lh)).trim());
        };
        const got = read();
        let o;
        if (!pseudo && [cssProp, ...lhs.map(kebabProp)].some((p) => el.style.getPropertyValue(p))) {
          o = { status: 'inline', got: got.join(' ') };
        } else if (!CSS.supports(cssProp, value)) {
          o = { status: 'unresolvable', value };
        } else {
          // the row's value applied with !important where the row applies (element or its pseudo-element), read back
          el.setAttribute('data-vx', '1');
          scratch.textContent = `[data-vx="1"]${pseudo}{${cssProp}:${value} !important}`;
          const expected = read();
          scratch.textContent = '';
          el.removeAttribute('data-vx');
          o = { status: expected.join(' ') === got.join(' ') ? 'match' : 'mismatch', expected: expected.join(' '), got: got.join(' '), sides: lhs.join(','), value, ...(pseudo ? { pseudo } : {}) };
        }
        if (noMotion) {
          noMotion.disabled = false;
        }
        outcomes.set(row.id, [...(outcomes.get(row.id) ?? []), o]);
      }
    }
    scratch.remove();
    rows.forEach((row) => {
      if (!outcomes.has(row.id) && !status.has(row.id) && marked.has(`${name}|${row.slot}`)) {
        status.set(row.id, 'not-applied');
      }
    });
    for (const [id, list] of outcomes) {
      const bad = list.find((o) => o.status === 'mismatch');
      results.push({ id, ...(bad ?? list.find((o) => o.status === 'match') ?? list[0]) });
      status.delete(id);
    }
    for (const [id, st] of status) {
      results.push({ id, status: st });
    }
  }
  root.unmount();
  host.remove();
  return { results };
}

/**
 * Render a module (cfg.probeUrl: Render or default export) under the user's theme with every slot of cfg.component tagged,
 * then — after the caller has put it in a state — read computed values per tagged element (measureSnapshot).
 * cfg = { probeUrl, component, propsKey, slots, themeUrl? }.
 */
async function runSnapshot(cfg) {
  registerMark();
  const m = await import(/* @vite-ignore */ cfg.probeUrl);
  const Render = m.Render ?? m.default;
  const themeOptions = cfg.themeUrl ? (await import(/* @vite-ignore */ cfg.themeUrl)).default : {};
  const name = cfg.component;
  const marks = {};
  const props = [];
  for (const slot of cfg.slots) {
    marks[slot] = (p) => {
      props.push(p.ownerState ?? {});
      return { [MARK]: `${name}|${slot}|${props.length - 1}` };
    };
  }
  const user = themeOptions.components ?? {};
  const theme = createTheme({
    ...themeOptions,
    components: {
      ...mergeComponents(user, { [name]: { styleOverrides: marks } }),
      MuiButtonBase: { ...user.MuiButtonBase, defaultProps: { disableRipple: true, ...user.MuiButtonBase?.defaultProps } },
    },
  });
  const host = document.createElement('div');
  document.getElementById('mount').appendChild(host);
  const root = rootOf(host);
  root.render(<ThemeProvider theme={theme}>{<Render {...parsePropsKey(cfg.propsKey)} />}</ThemeProvider>);
  await settleCommit([host]);
  window.__snapshot = { name, host, root, props };
  return { held: true, ...(host.muiRenderError ? { error: host.muiRenderError } : {}) };
}

/** Owner props as plain data: no functions, React elements, DOM nodes or cycles. */
function plainProps(props = {}) {
  const seen = new WeakSet();
  return JSON.parse(
    JSON.stringify(props, (k, v) => {
      if (typeof v === 'function' || (v && typeof v === 'object' && (v.$$typeof || v instanceof Node))) {
        return undefined;
      }
      if (v && typeof v === 'object') {
        if (seen.has(v)) {
          return undefined;
        }
        seen.add(v);
      }
      return v;
    }),
  );
}

/** cfg = { read: { slot: [cssProperty] }, states: [] } → per tagged element its slot, owner props and computed values; and which states were reached. */
function measureSnapshot(cfg) {
  const { name, host, root, props } = window.__snapshot;
  window.__snapshot = null;
  const elements = [];
  // a composite (TextField) has no styles of its own: its parts' slots are reported as Part.slot (OutlinedInput.root)
  const parts = cfg.parts ?? [];
  const found = [];
  for (const [key, list] of markedElements()) {
    const [component, slotName] = key.split('|');
    if (component !== name && !parts.includes(component)) {
      continue;
    }
    const slot = component === name ? slotName : `${component.replace(/^Mui/, '')}.${slotName}`;
    for (const { el, index } of list) {
      const cs = getComputedStyle(el);
      const keys = cfg.read[slot] ?? [];
      const box = el.getBoundingClientRect();
      found.push({ slot, el });
      elements.push({
        slot,
        ownerState: plainProps(props[index]),
        classes: [...el.classList].filter((c) => !c.startsWith('css-')),
        box: { width: Math.round(box.width * 100) / 100, height: Math.round(box.height * 100) / 100 },
        values: Object.fromEntries(keys.map((k) => [k, cs.getPropertyValue(k).trim()])),
      });
    }
  }
  const all = !elements.length ? [] : [...new Set([...found.map((f) => f.el), ...[...document.body.querySelectorAll('*')].filter((el) => getComputedStyle(el).getPropertyValue(MARK).startsWith(`${name}|`))])];
  const reached = Object.fromEntries((cfg.states ?? []).map((st) => [st, all.some((el) => (st.startsWith(':') ? el.matches(st) || el.querySelector(st) : el.classList.contains(`Mui-${st}`) || el.querySelector(`.Mui-${st}`)) )]));
  // an expectation is normalised by the browser itself: the same property set on a scratch element, read back
  const scratch = document.createElement('div');
  host.appendChild(scratch);
  const expectations = (cfg.expect ?? []).map(({ slot, prop, value }) => {
    const css = kebabProp(prop);
    // a routed theme key sharing its element with another (Autocomplete's input / inputFocused) keeps only one mark: find it by its route
    const route = cfg.routes?.[slot]?.[0]?.replace(/^&\s*/, '');
    const el = all.find((e) => getComputedStyle(e).getPropertyValue(MARK).startsWith(`${name}|${slot}|`)) ?? found.find((f) => f.slot === slot)?.el ?? (route ? host.querySelector(route) : null);
    if (!el) {
      return { slot, prop, value, status: 'no-element' };
    }
    // box.width / box.height: the laid-out box, which the CSS width/height is not when padding or box-sizing differ
    if (prop.startsWith('box.')) {
      const side = prop.slice(4);
      const want = parseFloat(value);
      const got = Math.round(el.getBoundingClientRect()[side] * 100) / 100;
      if (!['width', 'height'].includes(side) || Number.isNaN(want)) {
        return { slot, prop, value, status: 'invalid-value' };
      }
      return { slot, prop, value, want: `${want}px`, got: `${got}px`, status: Math.abs(got - want) <= 0.5 ? 'pass' : 'fail' };
    }
    // a border or outline width computes to 0 without a style: give the scratch one, so the width reads back as written
    const lineStyle = css.match(/^(border(?:-(?:top|right|bottom|left))?|outline|column-rule)-width$/)?.[1];
    scratch.style.cssText = lineStyle ? `${lineStyle}-style: solid` : '';
    scratch.style.setProperty(css, value);
    if (!scratch.style.getPropertyValue(css)) {
      return { slot, prop, value, status: 'invalid-value' };
    }
    const want = getComputedStyle(scratch).getPropertyValue(css).trim();
    const got = getComputedStyle(el).getPropertyValue(css).trim();
    return { slot, prop, value, want, got, status: want === got ? 'pass' : 'fail' };
  });
  const error = host.muiRenderError;
  root.unmount();
  host.remove();
  return { elements, reached, expectations, ...(error ? { error } : {}) };
}

const SIDES_ORDER = ['right', 'left', 'top', 'bottom'];

/**
 * Default label placement: fill every empty side before any side takes a second label. Height bars can only
 * read from left/right and width bars from top/bottom, so the most constrained labels choose first; each label
 * takes the least-used side it may use; on a tie, a band's own sides (no line across the component), then the nearest. A label sharing a side steps one
 * rung further out per earlier neighbour, a ladder of rails. Pinned (--routes) labels keep their route and count toward their side.
 */
function spreadAcrossSides(entries, bounds) {
  const used = { top: 0, right: 0, bottom: 0, left: 0 };
  entries.filter((e) => e.pinned).forEach((e) => {
    used[e.item.route.gutter] += 1;
  });
  const allowed = (item) => {
    if (item.kind === 'bound' && !item.outline) {
      return item.measures === 'y' ? ['right', 'left'] : ['bottom', 'top'];
    }
    return SIDES_ORDER;
  };
  const centre = (item) => {
    const box = item.kind === 'bound' ? item.box : item.bands[0];
    return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  };
  const nearness = (item, side) => {
    const c = centre(item);
    if (side === 'left') {
      return c.x - bounds.x;
    }
    if (side === 'right') {
      return bounds.x + bounds.width - c.x;
    }
    if (side === 'top') {
      return c.y - bounds.y;
    }
    return bounds.y + bounds.height - c.y;
  };
  // A band labelled from one of its own sides gets short stems out of each strip; from the other pair the
  // engine has to run a line across the component, so those sides only win when they are emptier.
  const natural = (item, side) => (item.kind !== 'band' ? 0 : (item.measures === 'x') === (side === 'top' || side === 'bottom') ? 0 : 1);
  const free = entries.filter((e) => !e.pinned).sort((a, b) => allowed(a.item).length - allowed(b.item).length);
  for (const { item } of free) {
    const side = allowed(item)
      .slice()
      .sort(
        (a, b) =>
          used[a] - used[b] ||
          natural(item, a) - natural(item, b) ||
          nearness(item, a) - nearness(item, b) ||
          SIDES_ORDER.indexOf(a) - SIDES_ORDER.indexOf(b),
      )[0];
    item.route = { ...item.route, gutter: side, ...(used[side] ? { out: (item.route.out ?? 0) + used[side] } : {}) };
    used[side] += 1;
  }
  return entries.map((e) => e.item);
}

/** Painted ink only: a caption over a transparent wrapper is fine, over text, a fill, a border or an icon is not. */
function paints(el) {
  const st = getComputedStyle(el);
  if (st.visibility === 'hidden' || st.display === 'none' || Number(st.opacity) === 0) {
    return false;
  }
  if (el.tagName.toLowerCase() === 'svg' || el.tagName === 'IMG') {
    return true;
  }
  const bg = st.backgroundColor;
  const opaqueBg = bg && bg !== 'transparent' && !/rgba\(0, 0, 0, 0\)/.test(bg);
  const bordered = ['Top', 'Right', 'Bottom', 'Left'].some((sd) => parseFloat(st[`border${sd}Width`]) > 0 && st[`border${sd}Style`] !== 'none');
  const ownText = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim());
  return opaqueBg || bordered || ownText;
}

/** Render one probe inside a stage with label room, draw the claims, report collisions. cfg.annotate = { claims, scheme?, room? } */
async function runAnnotate(cfg, render) {
  const { scheme = 'light', room = { x: 170, y: 80 }, id = 'mui-annotate-stage', caption, inline = false } = cfg.annotate;
  if (inline) {
    document.getElementById('mount').style.whiteSpace = 'nowrap';
  }
  const themeOptions = cfg.themeUrl ? (await import(/* @vite-ignore */ cfg.themeUrl)).default : {};
  const components = withMarks({ ...themeOptions.components }, cfg.component, cfg.slots ?? ['root'], []);
  const theme = createTheme({ ...themeOptions, components: { ...components, MuiButtonBase: { ...components.MuiButtonBase, defaultProps: { disableRipple: true, ...components.MuiButtonBase?.defaultProps } } } });
  const stage = document.createElement('div');
  stage.id = id;
  stage.style.cssText = `position:relative;display:inline-block;vertical-align:top;padding:${room.y}px ${room.x}px;background:${scheme === 'dark' ? '#1a1a19' : '#ffffff'};`;
  if (caption) {
    const cap = document.createElement('div');
    cap.textContent = caption;
    cap.style.cssText = `position:absolute;top:12px;left:0;right:0;text-align:center;font:600 13px -apple-system,Roboto,Helvetica,Arial,sans-serif;color:${scheme === 'dark' ? '#c3c2b7' : '#52514e'};`;
    stage.appendChild(cap);
  }
  const demo = document.createElement('div');
  demo.style.cssText = 'display:inline-block;';
  stage.appendChild(demo);
  document.getElementById('mount').appendChild(stage);
  const root = createRoot(demo);
  root.render(<ThemeProvider theme={theme}>{render(parsePropsKey(cfg.propsKey))}</ThemeProvider>);
  await settleCommit([demo]);
  if (cfg.hold) {
    window.__heldTarget = { stage, demo, component: cfg.component };
    return { held: true };
  }
  return drawAnnotations({ stage, demo, component: cfg.component }, cfg);
}

/** The drawing half of runAnnotate: resolve the claims on the (possibly interacted-with) render, draw, report collisions. */
async function drawAnnotations({ stage, demo, component }, cfg) {
  const { claims, scheme = 'light', id = 'mui-annotate-stage' } = cfg.annotate;
  tagSlots(component);
  // a slot the render doesn't show — not mounted, hidden until hover, or no size: the caller says which instead of an empty picture
  const absenceOf = (el) => {
    if (!el) {
      return 'missing';
    }
    if (getComputedStyle(el).visibility === 'hidden') {
      return 'hidden';
    }
    const box = el.getBoundingClientRect();
    // 0 wide but tall (a full-width bar in a shrink-wrapped stage) still has a height to draw
    return box.width > 0 || box.height > 0 ? null : 'empty';
  };
  // one sample per selector, the first one shown (a calendar's leading blank day is hidden): a row of identical elements (pages,
  // tabs) would repeat every label; portals (tooltips) sit outside the demo
  const pick = (selector) => {
    const inDemo = [...demo.querySelectorAll(selector)];
    const candidates = inDemo.length ? inDemo : [...document.querySelectorAll(selector)];
    return candidates.find((el) => !absenceOf(el)) ?? candidates[0] ?? null;
  };
  const picked = claims.map((claim) => pick(claim.on));
  const sampled = claims.map((claim, i) => {
    if (!picked[i]) {
      return claim;
    }
    picked[i].setAttribute(`data-annotate-${i}`, '');
    return { ...claim, on: `[data-annotate-${i}]` };
  });
  const absences = picked.map(absenceOf);
  const absent = absences.length > 0 && absences.every(Boolean) ? absences[0] : null;
  const resolved = sampled.map((claim) => ({ claim, ...resolveClaims(stage, demo, [claim]) }));
  const bounds = resolved[0]?.bounds;
  const items = spreadAcrossSides(resolved.flatMap(({ claim, items: drawn }) => drawn.map((item) => ({ item, pinned: Boolean(claim.pinned) }))), bounds);
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  stage.appendChild(overlay);
  createRoot(overlay).render(<Annotate items={items} bounds={bounds} scheme={scheme} />);
  await settleCommit([overlay]);
  await new Promise((r) => requestAnimationFrame(r));

  const texts = Array.from(overlay.querySelectorAll('.pass-labels text'))
    .map((t) => ({ label: t.textContent, b: t.getBoundingClientRect() }))
    .filter((t) => t.b.width > 0 && t.b.height > 0);
  const hit = (a, b, pad = 0) => a.left < b.right + pad && b.left < a.right + pad && a.top < b.bottom + pad && b.top < a.bottom + pad;
  const labelOverLabel = [];
  for (let i = 0; i < texts.length; i += 1) {
    for (let j = i + 1; j < texts.length; j += 1) {
      if (hit(texts[i].b, texts[j].b, 2)) {
        labelOverLabel.push([texts[i].label, texts[j].label]);
      }
    }
  }
  const ink = Array.from(demo.querySelectorAll('*'))
    .filter(paints)
    .map((el) => el.getBoundingClientRect())
    .filter((r) => r.width >= 2 && r.height >= 2);
  const labelOverComponent = texts.filter((t) => ink.some((p) => hit(t.b, p))).map((t) => t.label);
  return {
    selector: `#${id}`,
    items: items.map((item) => ({ kind: item.kind, tone: item.tone ?? null, icon: Boolean(item.outline), measures: item.measures, label: item.label, gutter: item.route.gutter, rung: item.route.out ?? 0 })),
    collisions: { labelOverLabel, labelOverComponent },
    absent,
  };
}

const INTERACTIVE = 'button, a[href], input:not([type=hidden]), select, textarea, [role=button], [role=switch], [role=checkbox], [role=radio], [role=tab], [role=menuitem], [role=option], [role=slider], [role=combobox], [tabindex]:not([tabindex="-1"])';
const TARGET_MIN = 24;
// what keyboard focus may change to show itself: outline, ring shadow, border, fill, opacity, text color — on an element or its ::before / ::after
const FOCUS_PROPS = ['outline-style', 'outline-width', 'outline-color', 'outline-offset', 'box-shadow', 'border-top-color', 'border-bottom-color', 'border-left-color', 'border-right-color', 'border-top-width', 'border-bottom-width', 'background-color', 'background-image', 'opacity', 'color', 'transform'];

/** Render cfg.probeUrl under the user's theme exactly as written (ripples kept: they are the default focus indicator) and hold it. */
async function runGate(cfg) {
  const m = await import(/* @vite-ignore */ cfg.probeUrl);
  const Module = m.Render ?? m.default;
  const Render = (props) => <Module {...props} />;
  const themeOptions = cfg.themeUrl ? (await import(/* @vite-ignore */ cfg.themeUrl)).default : {};
  const host = document.createElement('div');
  document.getElementById('mount').appendChild(host);
  const root = rootOf(host);
  root.render(<ThemeProvider theme={createTheme(themeOptions)}>{Render(parsePropsKey(cfg.propsKey))}</ThemeProvider>);
  await settleCommit([host]);
  window.__gate = { host, root, rest: new WeakMap() };
  // a content case may ask to be typed into, the way a user would
  return { ...(await gateCount(cfg)), ...(m.type !== undefined ? { type: m.type, typeInto: m.typeInto ?? null } : {}), ...(host.muiRenderError ? { error: host.muiRenderError } : {}) };
}

/** Tag the instances rendered now (a demo may have opened a popup since) and remember how they look at rest — unfocused (a Menu focuses its first item on open). */
async function gateCount(cfg) {
  if (gateInstances(cfg.component).some((el) => el.contains(document.activeElement))) {
    document.activeElement.blur();
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  }
  const instances = gateInstances(cfg.component);
  instances.forEach((el, i) => el.setAttribute('data-mui-gate', String(i)));
  for (const el of instances.flatMap((i) => [i, ...i.querySelectorAll('*')])) {
    window.__gate.rest.set(el, focusLook(el));
  }
  return { instances: instances.length };
}

const gateInstances = (name) => [...document.querySelectorAll(`.${name}-root`)].filter((el) => !el.parentElement.closest(`.${name}-root`));
const disabledIn = (el) => el.matches('.Mui-disabled, :disabled') || Boolean(el.querySelector('.Mui-disabled, :disabled'));
const muiName = (el) => [...el.classList].find((c) => c.startsWith('Mui')) ?? el.tagName.toLowerCase();
const focusLook = (el) => ['', '::before', '::after'].map((p) => { const cs = getComputedStyle(el, p || null); return FOCUS_PROPS.map((k) => cs.getPropertyValue(k)).join('|'); }).join('#');

/** Is `el` (inside `instance`) the component's own part — not content another component brought (a Card's buttons, a Dialog's actions)? Components wrapping the control itself (Autocomplete's TextField) are its own. */
function ownPart(el, instance, name, target = null) {
  for (let a = el; a && a !== instance; a = a.parentElement) {
    const classes = [...a.classList];
    if (classes.some((c) => /^Mui\w+-root$/.test(c)) && !classes.some((c) => c.startsWith(`${name}-`) || c === 'MuiTouchRipple-root') && !(target && a.contains(target))) {
      return false;
    }
  }
  return true;
}

/** The element a user clicks or tabs to: the root, or an interactive element the component itself styles (Switch's input, Autocomplete's input, Select's combobox). */
function targetOf(instance, name) {
  if (instance.matches(INTERACTIVE)) {
    return instance;
  }
  const mine = (el) => {
    const owner = [...el.classList].some((c) => /^Mui\w+-root$/.test(c)) ? el : el.parentElement?.closest('[class*="-root"]');
    return [el, owner].some((x) => x && [...x.classList].some((c) => c.startsWith(`${name}-`)));
  };
  const candidates = [...instance.querySelectorAll(INTERACTIVE)].filter((el) => mine(el) && el.getBoundingClientRect().width > 0 && el.getBoundingClientRect().height > 0);
  // the field is the control (Autocomplete's input, not the first of its chips)
  return candidates.find((el) => el.matches('input, textarea, [role=combobox]')) ?? candidates[0] ?? null;
}

/** The part of `el` that shows: its box cut to every ancestor that clips overflow. */
function visibleRect(el) {
  const own = el.getBoundingClientRect();
  const r = { left: own.left, top: own.top, right: own.right, bottom: own.bottom };
  for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
    const cs = getComputedStyle(a);
    if (cs.overflowX !== 'visible' || cs.overflowY !== 'visible') {
      const ar = a.getBoundingClientRect();
      r.left = Math.max(r.left, ar.left); r.top = Math.max(r.top, ar.top); r.right = Math.min(r.right, ar.right); r.bottom = Math.min(r.bottom, ar.bottom);
    }
  }
  return { ...r, width: r.right - r.left, height: r.bottom - r.top };
}

const box = (r) => ({ x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) });
const clickableCursor = (el) => ['pointer', 'text'].includes(getComputedStyle(el).cursor);

/** Does a click at (x, y) reach `target`: the element itself, inside it, its <label>, or a part of the component it made clickable (pointer / text cursor). */
function reaches(target, instance, name, el) {
  if (!el) {
    return false;
  }
  if (el === target || target.contains(el) || el.closest(INTERACTIVE) === target) {
    return true;
  }
  const label = el.closest('label');
  if (label && (label.control === target || label.contains(target))) {
    return true;
  }
  return instance.contains(el) && ownPart(el, instance, name, target) && clickableCursor(el);
}

/** What the component paints — backgrounds, borders, icons, images — as hit tests honouring rounded corners; its containers (ancestors of the target) and other components' parts are not aimed at. */
function paintedShapes(instance, target, name) {
  return [instance, ...instance.querySelectorAll('*')].flatMap((el) => {
    if ((el !== target && el.contains(target)) || !ownPart(el, instance, name, target)) {
      return [];
    }
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || Number(cs.opacity) === 0 || el.closest('.MuiTouchRipple-root')) {
      return [];
    }
    const bg = cs.backgroundColor;
    const filled = bg && bg !== 'transparent' && !/rgba\([^)]*,\s*0\)$/.test(bg);
    const bordered = ['Top', 'Right', 'Bottom', 'Left'].some((s) => parseFloat(cs[`border${s}Width`]) > 0 && cs[`border${s}Style`] !== 'none');
    const own = el.getBoundingClientRect();
    const r = visibleRect(el);
    if (!(filled || bordered || el.tagName === 'svg' || el.tagName === 'IMG') || r.width <= 0 || r.height <= 0) {
      return [];
    }
    const radius = (corner) => {
      const raw = cs[`border${corner}Radius`];
      const [h, v = h] = raw.split(' ').map(parseFloat);
      return raw.includes('%') ? [(h / 100) * own.width, (v / 100) * own.height] : [Math.min(h, own.width / 2), Math.min(v, own.height / 2)];
    };
    const corners = Object.entries({ TopLeft: radius('TopLeft'), TopRight: radius('TopRight'), BottomRight: radius('BottomRight'), BottomLeft: radius('BottomLeft') });
    const band = filled || el.tagName === 'svg' || el.tagName === 'IMG' ? null : { left: own.left + parseFloat(cs.borderLeftWidth), top: own.top + parseFloat(cs.borderTopWidth), right: own.right - parseFloat(cs.borderRightWidth), bottom: own.bottom - parseFloat(cs.borderBottomWidth) };
    const inBand = (x, y) => !band || x < band.left || x > band.right || y < band.top || y > band.bottom;
    const inside = (x, y) => inBand(x, y) && corners.every(([corner, [rx, ry]]) => {
      if (!rx || !ry) {
        return true;
      }
      const cx = corner.endsWith('Left') ? own.left + rx : own.right - rx;
      const cy = corner.startsWith('Top') ? own.top + ry : own.bottom - ry;
      const out = (corner.endsWith('Left') ? x < cx : x > cx) && (corner.startsWith('Top') ? y < cy : y > cy);
      return !out || ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1;
    });
    return [{ r, inside }];
  });
}

/** WCAG 2.5.8 spacing exception: an undersized target passes when a 24px circle on its centre meets no other target (nor another undersized target's circle). */
function spacedEnough(target, area) {
  const cx = area.x + area.w / 2;
  const cy = area.y + area.h / 2;
  const others = [...document.querySelectorAll(INTERACTIVE)].filter((el) => el !== target && !target.contains(el) && !el.contains(target) && el.checkVisibility?.() !== false && !(el.matches('input') && el.closest('label')?.contains(target)));
  return others.every((el) => {
    const o = el.getBoundingClientRect();
    if (!o.width || !o.height) {
      return true;
    }
    const dx = Math.max(o.left - cx, 0, cx - o.right);
    const dy = Math.max(o.top - cy, 0, cy - o.bottom);
    if (Math.hypot(dx, dy) < TARGET_MIN / 2) {
      return false;
    }
    const undersized = o.width < TARGET_MIN || o.height < TARGET_MIN;
    return !undersized || Math.hypot(o.left + o.width / 2 - cx, o.top + o.height / 2 - cy) >= TARGET_MIN;
  });
}

/** Touch target (the clickable area is 24×24, or spaced per WCAG 2.5.8) and dead zones (painted points a click does nothing on), per instance. */
function gateTouch(cfg) {
  const name = cfg.component;
  return gateInstances(name).map((instance, index) => {
    instance.scrollIntoView({ block: 'center', inline: 'center' });
    const target = targetOf(instance, name);
    if (!target) {
      return { index, status: 'n/a', why: 'not interactive' };
    }
    if (disabledIn(target) || disabledIn(instance)) {
      return { index, status: 'n/a', why: 'disabled' };
    }
    if (!instance.getBoundingClientRect().height || !instance.getBoundingClientRect().width) {
      return { index, status: 'n/a', why: 'renders empty' };
    }
    const tr = visibleRect(target);
    if (tr.left < 0 || tr.top < 0 || tr.right > innerWidth || tr.bottom > innerHeight) {
      return { index, status: 'n/a', why: 'outside the page' };
    }
    const r = instance.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    const pad = TARGET_MIN;
    const x0 = Math.floor(Math.min(r.left, t.left) - pad);
    const y0 = Math.floor(Math.min(r.top, t.top) - pad);
    const w = Math.ceil(Math.max(r.right, t.right) + pad) - x0;
    const h = Math.ceil(Math.max(r.bottom, t.bottom) + pad) - y0;
    // 0 nothing, 1 reaches the target, 2 reaches another control
    const hit = new Uint8Array(w * h);
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const el = document.elementFromPoint(x0 + x + 0.5, y0 + y + 0.5);
        // 1 reaches the target; 2 responds otherwise (another control, a label, a part with a pointer/text cursor that focuses the field);
        // 3: covered by something outside the component (an open popup) — not the component's dead zone
        hit[y * w + x] = reaches(target, instance, name, el) ? 1 : el?.closest(INTERACTIVE) || el?.closest('label') || (el && instance.contains(el) && clickableCursor(el)) ? 2 : el && !instance.contains(el) && !el.contains(instance) ? 3 : 0;
      }
    }
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (let i = 0; i < hit.length; i += 1) {
      if (hit[i] === 1) {
        const x = i % w, y = Math.floor(i / w);
        minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      }
    }
    const area = Number.isFinite(minX) ? { x: x0 + minX, y: y0 + minY, w: maxX - minX + 1, h: maxY - minY + 1 } : { x: t.left, y: t.top, w: 0, h: 0 };
    const big = area.w >= TARGET_MIN && area.h >= TARGET_MIN;
    const spaced = !big && area.w > 0 && spacedEnough(target, area);
    const dead = [];
    const seenDead = new Set();
    for (const { r: p, inside } of paintedShapes(instance, target, name)) {
      for (let y = Math.ceil(p.top) + 1; y < Math.floor(p.bottom) - 1; y += 1) {
        for (let x = Math.ceil(p.left) + 1; x < Math.floor(p.right) - 1; x += 1) {
          const gx = x - x0, gy = y - y0;
          // 1px inside the shape: antialiased edges are not aimed at
          if (inside(x + 0.5, y + 0.5) && [[-1, 0], [1, 0], [0, -1], [0, 1]].every(([dx, dy]) => inside(x + 0.5 + dx, y + 0.5 + dy)) && gx >= 0 && gy >= 0 && gx < w && gy < h && hit[gy * w + gx] === 0 && !seenDead.has(gy * w + gx)) {
            seenDead.add(gy * w + gx);
            dead.push({ x, y });
          }
        }
      }
    }
    const deadBox = dead.length
      ? { x: Math.min(...dead.map((d) => d.x)) - Math.round(r.left), y: Math.min(...dead.map((d) => d.y)) - Math.round(r.top), w: Math.max(...dead.map((d) => d.x)) - Math.min(...dead.map((d) => d.x)) + 1, h: Math.max(...dead.map((d) => d.y)) - Math.min(...dead.map((d) => d.y)) + 1 }
      : null;
    return { index, status: 'checked', target: { fits: big || spaced, spaced, area: { w: area.w, h: area.h } }, dead: { count: dead.length, box: deadBox }, control: box(r) };
  });
}

/** What keyboard focus changed on the focused instance (outline, ring, border, fill… on any of its parts), and the ancestors that cut a ring off. */
async function gateRing(cfg) {
  // the focus ripple mounts on the focus event's next render
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  const name = cfg.component;
  const instances = gateInstances(name);
  const active = document.activeElement;
  const index = instances.findIndex((el) => el.contains(active));
  if (index < 0) {
    return { status: 'not-focused' };
  }
  const instance = instances[index];
  const target = targetOf(instance, name);
  if (!target || !(target === active || target.contains(active) || active.contains(target))) {
    return { status: 'not-focused' };
  }
  const { rest } = window.__gate;
  const parts = [];
  for (const el of [instance, ...instance.querySelectorAll('*')]) {
    if (!ownPart(el, instance, name, target) || (el === active && el.matches('input') && Number(getComputedStyle(el).opacity) === 0)) {
      continue;
    }
    if (el.matches('.MuiTouchRipple-root')) {
      if (el.querySelector('.MuiTouchRipple-ripplePulsate, .MuiTouchRipple-rippleVisible')) {
        const r = el.getBoundingClientRect();
        parts.push({ el, kind: 'focus ripple', ink: { left: r.left, top: r.top, right: r.right, bottom: r.bottom } });
      }
      continue;
    }
    if (el.closest('.MuiTouchRipple-root') || rest.get(el) === undefined || rest.get(el) === focusLook(el)) {
      continue;
    }
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    const ink = { left: r.left, top: r.top, right: r.right, bottom: r.bottom };
    const ow = cs.outlineStyle !== 'none' ? parseFloat(cs.outlineWidth) || 0 : 0;
    if (ow > 0) {
      const out = ow + (parseFloat(cs.outlineOffset) || 0);
      ink.left = Math.min(ink.left, r.left - out); ink.top = Math.min(ink.top, r.top - out); ink.right = Math.max(ink.right, r.right + out); ink.bottom = Math.max(ink.bottom, r.bottom + out);
    }
    for (const s of cs.boxShadow === 'none' ? [] : cs.boxShadow.split(/,(?![^(]*\))/)) {
      if (/inset/.test(s)) {
        continue;
      }
      const [ox, oy, blur = 0, spread = 0] = (s.replace(/rgba?\([^)]*\)|#\w+/g, '').match(/-?[\d.]+px/g) ?? []).map(parseFloat);
      const e = blur + spread;
      ink.left = Math.min(ink.left, r.left + ox - e); ink.top = Math.min(ink.top, r.top + oy - e); ink.right = Math.max(ink.right, r.right + ox + e); ink.bottom = Math.max(ink.bottom, r.bottom + oy + e);
    }
    parts.push({ el, kind: ow > 0 ? `outline ${cs.outlineWidth}` : cs.boxShadow !== 'none' ? 'focus shadow' : 'focus style', ink });
  }
  if (!parts.length) {
    return { index, status: 'checked', ring: null, clipped: [] };
  }
  const clipped = [];
  for (const part of parts) {
    for (let a = part.el.parentElement; a && a !== document.body; a = a.parentElement) {
      const cs = getComputedStyle(a);
      if (cs.overflowX === 'visible' && cs.overflowY === 'visible' && cs.clipPath === 'none') {
        continue;
      }
      const ar = a.getBoundingClientRect();
      const inner = { left: ar.left + parseFloat(cs.borderLeftWidth), top: ar.top + parseFloat(cs.borderTopWidth), right: ar.right - parseFloat(cs.borderRightWidth), bottom: ar.bottom - parseFloat(cs.borderBottomWidth) };
      const by = Math.max(inner.left - part.ink.left, inner.top - part.ink.top, part.ink.right - inner.right, part.ink.bottom - inner.bottom);
      if (by > 0.5) {
        clipped.push({ part: `${muiName(part.el)} ${part.kind}`, by: Math.round(by * 10) / 10, clipper: muiName(a), overflow: cs.overflowX === cs.overflowY ? cs.overflowX : `${cs.overflowX}/${cs.overflowY}` });
        break;
      }
    }
  }
  return { index, status: 'checked', ring: parts.map((p) => `${muiName(p.el)} ${p.kind}`), clipped };
}

const DECORATION = '.MuiInputAdornment-root, svg, button, [role=button], .MuiChip-root, .MuiAutocomplete-endAdornment';
// where a user types or reads a chosen value — not the invisible inputs behind checkboxes, radios, sliders, ratings
const TEXT_FIELD = 'textarea, input:is(:not([type]), [type=text], [type=search], [type=email], [type=password], [type=number], [type=tel], [type=url]), .MuiSelect-select';
const shown = (r) => r.width > 0.5 && r.height > 0.5;
const meets = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left) > 1 && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 1;
const outside = (inner, outer) => Math.max(outer.left - inner.left, outer.top - inner.top, inner.right - outer.right, inner.bottom - outer.bottom);
const ellipsised = (el) => {
  for (let a = el; a && a !== document.body; a = a.parentElement) {
    const cs = getComputedStyle(a);
    if (cs.textOverflow === 'ellipsis' && cs.overflowX !== 'visible') {
      return true;
    }
  }
  return false;
};
const hiddenByOpacity = (from, until) => {
  for (let a = from; a && a !== until.parentElement; a = a.parentElement) {
    if (Number(getComputedStyle(a).opacity) === 0) {
      return true;
    }
  }
  return false;
};
/** The box a text is laid out in: its nearest ancestor (up to the instance) that paints, clips or is positioned on its own (a Badge's bubble). */
function textBoxOf(el, instance) {
  for (let a = el; a && a !== instance; a = a.parentElement) {
    const cs = getComputedStyle(a);
    const paints = (cs.backgroundColor && !/rgba\([^)]*,\s*0\)$|transparent/.test(cs.backgroundColor)) || ['Top', 'Right', 'Bottom', 'Left'].some((x) => parseFloat(cs[`border${x}Width`]) > 0 && cs[`border${x}Style`] !== 'none');
    if (paints || ['absolute', 'fixed'].includes(cs.position)) {
      return a;
    }
  }
  return instance;
}
/** Is the text cut on purpose: an ellipsis, or a parent (up to the instance) that clips its overflow (Avatar, Icon)? */
const clippedOnPurpose = (el, instance) => {
  if (ellipsised(el)) {
    return true;
  }
  for (let a = el; a && a !== instance.parentElement; a = a.parentElement) {
    const cs = getComputedStyle(a);
    if (cs.overflowX !== 'visible' || cs.overflowY !== 'visible') {
      return true;
    }
  }
  return false;
};
/** Rects of the visible text inside `el`, outside its decorations (an icon's own text is not the label). */
function textRects(el) {
  const out = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const decoration = node.parentElement.closest(DECORATION);
    const cs = getComputedStyle(node.parentElement);
    // glyph text inside an icon, and text drawn invisible (a loading button's label), is not text a reader sees
    if (!node.textContent.replace(/\u200b/g, '').trim() || node.parentElement.closest('svg') || (decoration && decoration !== el && el.contains(decoration)) || cs.visibility === 'hidden' || /rgba\([^)]*,\s*0\)$|transparent/.test(cs.color) || hiddenByOpacity(node.parentElement, el)) {
      continue;
    }
    const range = document.createRange();
    range.selectNodeContents(node);
    out.push(...[...range.getClientRects()].filter(shown).map((r) => ({ r, el: node.parentElement })));
  }
  return out;
}
/** The content box of a field (input, textarea, select display): where its text is drawn. */
const contentBox = (el) => {
  const r = el.getBoundingClientRect();
  const cs = getComputedStyle(el);
  const px = (k) => parseFloat(cs[k]) || 0;
  return { left: r.left + px('borderLeftWidth') + px('paddingLeft'), right: r.right - px('borderRightWidth') - px('paddingRight'), top: r.top + px('borderTopWidth') + px('paddingTop'), bottom: r.bottom - px('borderBottomWidth') - px('paddingBottom') };
};

/** Content rules on every instance: text under a decoration, text spilling out, typed lines cut off, a label over the value. */
async function gateContent(cfg) {
  // a FormControl learns its input is filled in an effect after mount: let the label settle first
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  const name = cfg.component;
  const results = contentPerInstance(name);
  // a content case groups fields that must share one height (data-same-height): an adornment, an icon button or chips must not grow the box
  for (const group of document.querySelectorAll('#mount [data-same-height]')) {
    const heights = [...group.querySelectorAll('.MuiInputBase-root')].filter((el) => !el.parentElement.closest('.MuiInputBase-root')).map((el) => Math.round(el.getBoundingClientRect().height * 100) / 100);
    if (heights.length > 1 && Math.max(...heights) - Math.min(...heights) > 0.5 && results.length) {
      results[0].failures.push({ rule: 'same-height', detail: `fields that should match render at ${[...new Set(heights)].map((h) => `${h}px`).join(' and ')} (${group.dataset.sameHeight}) — something beside the text grows the box` });
    }
  }
  return results;
}

function contentPerInstance(name) {
  return gateInstances(name).map((instance, index) => {
    const failures = [];
    // content rules are about controls: layout components (Grid, Typography) showing demo text are not checked
    if (!targetOf(instance, name)) {
      return { index, failures };
    }
    const box = instance.getBoundingClientRect();
    const field = [...instance.querySelectorAll(TEXT_FIELD)].find((el) => !el.getAttribute('aria-hidden') && shown(el.getBoundingClientRect()) && getComputedStyle(el).visibility !== 'hidden' && Number(getComputedStyle(el).opacity) > 0);
    const decorations = [...instance.querySelectorAll(DECORATION)].filter((d) => shown(d.getBoundingClientRect()) && !(field && (d.contains(field) || field.contains(d))) && !d.closest('[aria-hidden="true"]:not(svg)') && getComputedStyle(d).visibility !== 'hidden');
    const label = (d) => (d.matches('svg') ? 'icon' : d.matches('.MuiChip-root') ? 'chip' : d.matches('.MuiInputAdornment-root') ? 'adornment' : 'button');
    if (field) {
      const text = contentBox(field);
      // a field's text area must not run under its adornments, icons, chips or buttons
      for (const d of decorations) {
        if (d.contains(field)) {
          continue;
        }
        const r = d.getBoundingClientRect();
        if (meets(text, r)) {
          failures.push({ rule: 'overlap', detail: `the text area of ${field.tagName.toLowerCase()} runs under a ${label(d)} (${Math.round(Math.min(text.right, r.right) - Math.max(text.left, r.left))}px)` });
          break;
        }
      }
      const fr = field.getBoundingClientRect();
      if (outside(fr, box) > 1) {
        failures.push({ rule: 'spill', detail: `the ${field.tagName.toLowerCase()} sticks out of the box by ${Math.round(outside(fr, box))}px` });
      }
      if (field.matches('textarea')) {
        const cs = getComputedStyle(field);
        if (field.scrollHeight - field.clientHeight > 1 && cs.overflowY === 'hidden') {
          failures.push({ rule: 'multiline', detail: `typed lines are cut off: ${field.scrollHeight}px of text in a ${field.clientHeight}px box that doesn't scroll` });
        }
      }
      // the label must not sit on the value: compare the label's text with the value's glyph band
      const control = instance.closest('.MuiFormControl-root') ?? instance;
      const labelEl = control.querySelector('.MuiFormLabel-root');
      const hasValue = (field.value ?? field.textContent ?? '').replace(/\u200b/g, '').trim() !== '';
      if (labelEl && hasValue && !field.matches('textarea')) {
        const fs = parseFloat(getComputedStyle(field).fontSize);
        const mid = (text.top + text.bottom) / 2;
        const band = { left: text.left, right: text.right, top: mid - fs * 0.45, bottom: mid + fs * 0.45 };
        if (textRects(labelEl).some(({ r }) => meets(r, band))) {
          failures.push({ rule: 'label', detail: 'the label is drawn over the value' });
        }
      }
      if (labelEl) {
        const cb = control.getBoundingClientRect();
        const spilt = textRects(labelEl).find(({ r, el }) => outside(r, cb) > 1 && !ellipsised(el));
        if (spilt) {
          failures.push({ rule: 'label', detail: `the label runs ${Math.round(outside(spilt.r, cb))}px out of the field` });
        }
      }
    } else {
      // other components: the text must stay clear of icons and inside the box (unless it ends in an ellipsis on purpose)
      const texts = textRects(instance);
      for (const d of decorations) {
        const r = d.getBoundingClientRect();
        if (texts.some(({ r: t }) => meets(t, r))) {
          failures.push({ rule: 'overlap', detail: `the text runs under a ${label(d)}` });
          break;
        }
      }
      const spilt = texts.find(({ r, el }) => outside(r, textBoxOf(el, instance).getBoundingClientRect()) > 1 && !clippedOnPurpose(el, instance));
      if (spilt) {
        failures.push({ rule: 'spill', detail: `text runs ${Math.round(outside(spilt.r, textBoxOf(spilt.el, instance).getBoundingClientRect()))}px out of the box` });
      }
    }
    return { index, failures };
  });
}

function gateDone() {
  const held = window.__gate;
  window.__gate = null;
  held?.root.unmount();
  held?.host.remove();
  return { done: true };
}

let loadedFonts = '[]';
const addedFaces = [];

/** The fonts --font names: a package's stylesheet as a <link> (Vite resolves its url()s), a file as a FontFace; every face loads before anything is measured. */
async function applyFonts(fonts = []) {
  const key = JSON.stringify(fonts);
  if (key === loadedFonts) {
    return;
  }
  loadedFonts = key;
  document.querySelectorAll('link[data-mui-cli-font]').forEach((link) => link.remove());
  addedFaces.splice(0).forEach((face) => document.fonts.delete(face));
  for (const font of fonts) {
    if (font.css) {
      const link = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: `${font.css}?direct` });
      link.dataset.muiCliFont = '';
      await new Promise((resolve) => {
        link.onload = resolve;
        link.onerror = resolve;
        document.head.prepend(link);
      });
    } else {
      const face = new FontFace(font.family, `url(${font.url})`);
      document.fonts.add(face);
      addedFaces.push(face);
    }
  }
  await Promise.all([...document.fonts].map((face) => face.load().catch(() => null)));
}

window.__runCapture = async function runCapture(cfg) {
  await applyFonts(cfg.fonts);
  if (cfg.gate) {
    return { render: runGate, count: gateCount, touch: gateTouch, ring: gateRing, content: gateContent, done: gateDone }[cfg.gate](cfg);
  }
  if (cfg.tokens) {
    return runTokens(cfg);
  }
  if (cfg.showcase) {
    return runShowcase(cfg);
  }
  if (cfg.seamRows) {
    return runVerifySeams(cfg, null);
  }
  if (cfg.warm) {
    for (const url of cfg.warm) {
      await import(/* @vite-ignore */ url).catch(() => null);
    }
    return { warmed: cfg.warm.length };
  }
  if (cfg.snapshot) {
    return runSnapshot(cfg);
  }
  if (cfg.measureSnapshot) {
    return measureSnapshot(cfg);
  }
  if (cfg.measureHeld) {
    const held = window.__held;
    window.__held = null;
    return measureSeams(held);
  }
  if (cfg.resume) {
    const held = window.__heldTarget;
    window.__heldTarget = null;
    return held.stage ? drawAnnotations(held, cfg) : measureTarget(held, cfg);
  }
  const render = await loadRender(cfg.probeUrl);
  if (cfg.verifySeams) {
    return runVerifySeams(cfg, { render });
  }
  if (cfg.annotate) {
    return runAnnotate(cfg, render);
  }
  const name = cfg.component;
  const themeOptions = cfg.themeUrl ? (await import(/* @vite-ignore */ cfg.themeUrl)).default : {};
  const seen = [];
  const components = withMarks({ ...themeOptions.components }, name, cfg.slots ?? ['root'], seen);
  const theme = createTheme({
    ...themeOptions,
    components: { ...components, MuiButtonBase: { ...components.MuiButtonBase, defaultProps: { disableRipple: true, ...components.MuiButtonBase?.defaultProps } } },
  });
  const mount = document.getElementById('mount');
  const host = document.createElement('div');
  mount.appendChild(host);
  const root = rootOf(host);
  root.render(<ThemeProvider theme={theme}>{render(parsePropsKey(cfg.propsKey))}</ThemeProvider>);
  await settleCommit([host]);
  if (cfg.hold) {
    // the caller puts the render in a state (hover, a click that opens it) before { resume: true, ...measures }
    window.__heldTarget = { name, host, root, seen };
    return { held: true };
  }
  return measureTarget({ name, host, root, seen }, cfg);
};

/** The measuring half of the default path: seams, rect, edit checks, owner state, graph classes — then unmount. */
function measureTarget({ name, host, root, seen }, cfg) {
  const marked = markedElements();
  const slotEl = (slot) => (marked.get(`${name}|${slot}`) ?? [])[0]?.el ?? null;

  const result = { seams: {}, rect: null, missing: [] };
  for (const seam of cfg.seams ?? []) {
    const el = slotEl(seam.slot);
    if (!el) {
      result.missing.push(seam.id);
    }
    result.seams[seam.id] = el ? readSeamValue(el, seam.prop) : null;
  }
  if (cfg.graphDump) {
    // source-graph raw material: the component's own root element's classes (co-located Mui prefixes = extends)
    // + descendant Mui classes grouped per element (other components' -root classes = composes)
    const muiOnly = (el) => [...el.classList].filter((c) => /^Mui[A-Z]/.test(c));
    const rootEl = slotEl('root');
    result.graph = {
      rootClasses: rootEl ? muiOnly(rootEl) : [],
      descendants: rootEl ? [...rootEl.querySelectorAll('*')].map(muiOnly).filter((a) => a.length) : [],
    };
  }
  if (cfg.rectSlot) {
    const el = slotEl(cfg.rectSlot);
    if (!el) {
      result.missing.push(`rect:${cfg.rectSlot}`);
    } else {
      const { height, width } = el.getBoundingClientRect();
      result.rect = { height, width };
    }
  }
  root.unmount();
  host.remove();
  return result;
}
