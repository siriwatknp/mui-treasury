/** @file cascade: DESIGN.md state-cascade block → styleOverrides.root.variants[]. */
import test from 'node:test';
import assert from 'node:assert/strict';
import * as muiStyles from '@mui/material/styles';
import { buildCascade } from '../src/lib/cascade.mjs';

const FRONT = {
  colors: { 'primary-main': '#6D28D9', 'primary-dark': '#7C3AED', ink: '#111111', ring: '#FDE047' },
  components: {
    MuiButton: {
      structure: { border: '2px solid', radius: '6px', fontWeight: '700' },
      cascade: {
        root: {
          contained: {
            default: { background: 'primary-main', foreground: '#FFFFFF', border: 'ink', shadow: '4 4 0 ink' },
            hover: { background: 'primary-dark', shadow: '6 6 0 ink', transform: '-2 -2' },
            focusVisible: { outline: '3 ring', shadow: '4 4 0 ink' },
            active: { background: 'primary-dark', shadow: '0 0 0 ink', transform: '4 4' },
            disabled: { background: '#E5E5E5', foreground: '#A3A3A3', shadow: 'none', transform: 'none' },
          },
          text: {
            default: { foreground: 'primary-main', border: 'none', shadow: 'none' },
            hover: { background: 'primary 10%' }, // only default + hover declared → rest derived
          },
        },
      },
    },
  },
};

const rootOf = (front) => buildCascade(front, muiStyles).MuiButton.styleOverrides.root;
const variant = (root, v) => root.variants.find((e) => e.props.variant === v).style;

test('buildCascade: structure → sizing/shape scalars only; type character is GLOBAL', () => {
  const root = rootOf(FRONT);
  assert.equal(root.borderWidth, 2);
  assert.equal(root.borderStyle, 'solid');
  assert.equal(root.borderRadius, 6);
  // structure.fontWeight is IGNORED — type character lives in global typography now
  assert.equal(root.fontWeight, undefined);
  assert.match(root.transition, /transform .*box-shadow/);
});

test('buildCascade: motion — scale / rotate / translate (bare = translate px)', () => {
  const mk = (t) =>
    rootOf({
      colors: { c: '#111' },
      components: { MuiButton: { cascade: { root: { contained: { default: { background: 'c' }, active: { transform: t } } } } } },
    });
  const active = (t) => variant(mk(t), 'contained')['&:active'].transform;
  assert.equal(active('scale 0.95'), 'scale(0.95)');
  assert.equal(active('rotate 5'), 'rotate(5deg)');
  assert.equal(active('rotate -2deg'), 'rotate(-2deg)');
  assert.equal(active('-2 -2'), 'translate(-2px, -2px)');
  assert.equal(active('translate 4 4'), 'translate(4px, 4px)');
});

test('buildCascade: gradient background → backgroundImage (not the color var / backgroundColor)', () => {
  const g = 'linear-gradient(45deg, #6D28D9, #7C3AED)';
  const c = variant(
    rootOf({
      colors: {},
      components: { MuiButton: { cascade: { root: { contained: { default: { background: g } } } } } },
    }),
    'contained',
  );
  assert.equal(c.backgroundImage, g);
  assert.equal(c.backgroundColor, undefined);
  assert.equal(c['--variant-containedBg'], undefined);
});

test('buildCascade: terse slots → scheme-flipping var-refs, shadow geometry, transform, outline', () => {
  const c = variant(rootOf(FRONT), 'contained');
  // rides the catalog: contained background → the --variant-containedBg var reset
  assert.match(c['--variant-containedBg'], /^var\(--mui-palette-primary-main/);
  assert.equal(c.backgroundColor, undefined, 'no raw backgroundColor collateral');
  // contained has no border var → border stays the direct prop
  assert.match(c.borderColor, /^var\(--mui-palette-ink/);
  assert.match(c.boxShadow, /^4px 4px 0px var\(--mui-palette-ink/);
  assert.match(c['&:hover'].boxShadow, /^6px 6px 0px var\(--mui-palette-ink/);
  assert.equal(c['&:hover'].transform, 'translate(-2px, -2px)');
  assert.match(c['&.Mui-focusVisible'].outline, /^3px solid var\(--mui-palette-ring/);
  assert.equal(c['&.Mui-focusVisible'].outlineOffset, '2px');
  assert.equal(c['&:active'].transform, 'translate(4px, 4px)');
  assert.equal(c['&.Mui-disabled'].transform, 'none');
});

test('buildCascade: `<role> <pct>%` → native-color alpha (oklch on the var, no Channel); `border: none` → transparent', () => {
  const t = variant(rootOf(FRONT), 'text');
  // text hover background rides the --variant-textBg var (catalog reuse)
  assert.match(t['&:hover']['--variant-textBg'], /^oklch\(from var\(--mui-palette-primary-main.*\/ 0\.1\)$/, 'primary 10% → oklch relative color');
  assert.doesNotMatch(t['&:hover']['--variant-textBg'], /Channel/, 'no *Channel token');
  // text has no border var → border stays the direct prop; none → transparent
  assert.equal(t.borderColor, 'transparent');
});

test('buildCascade: alpha is authored as a PERCENT (`20%` → oklch / 0.2); a bare decimal applies NO alpha', () => {
  const mk = (val) =>
    variant(
      rootOf({
        colors: { 'primary-main': '#3E63DD' },
        components: { MuiButton: { cascade: { root: { fancy: { default: { background: val } } } } } },
      }),
      'fancy',
    ).backgroundColor;
  assert.match(mk('primary-main 20%'), /^oklch\(from var\(--mui-palette-primary-main.*\/ 0\.2\)$/, 'percent → alpha');
  assert.match(mk('primary-main 7.5%'), /\/ 0\.075\)$/, 'fractional percent');
  // the old decimal form no longer means alpha — it falls through to the solid var-ref
  assert.match(mk('primary-main 0.2'), /^var\(--mui-palette-primary-main/, 'bare decimal → solid, no alpha');
  assert.doesNotMatch(mk('primary-main 0.2'), /oklch/);
});

test('buildCascade: G4 — a contained hover-bg override moves ONLY the --variant-containedBg hover seam', () => {
  const front = {
    colors: { 'primary-main': '#3E63DD', 'primary-dark': '#2B4ACB' },
    components: {
      MuiButton: {
        cascade: {
          root: {
            contained: { default: { background: 'primary-main' }, hover: { background: 'primary-dark' } },
          },
        },
      },
    },
  };
  const c = variant(rootOf(front), 'contained');
  // the override lands on the var Button already consumes — no raw backgroundColor
  assert.match(c['&:hover']['--variant-containedBg'], /^var\(--mui-palette-primary-dark/);
  assert.equal(c['&:hover'].backgroundColor, undefined, 'no backgroundColor collateral');
  // rest bg is the var too; nothing else in the hover seam
  assert.match(c['--variant-containedBg'], /^var\(--mui-palette-primary-main/);
  assert.deepEqual(Object.keys(c['&:hover']), ['--variant-containedBg'], 'only the containedBg var moved');
});

test('buildCascade: G4 — a custom (non-built-in) variant falls back to the direct prop', () => {
  const front = {
    colors: { 'primary-main': '#3E63DD' },
    components: { MuiButton: { cascade: { root: { fancy: { default: { background: 'primary-main' } } } } } },
  };
  const f = variant(rootOf(front), 'fancy');
  assert.match(f.backgroundColor, /^var\(--mui-palette-primary-main/, 'no --variant-fancyBg exists → direct prop');
  assert.equal(f['--variant-fancyBg'], undefined);
});

test('buildCascade: state priority order — default < hover < focus-visible < active < disabled', () => {
  const keys = Object.keys(variant(rootOf(FRONT), 'contained')).filter((k) => k.startsWith('&'));
  assert.deepEqual(keys, ['&:hover', '&.Mui-focusVisible', '&:active', '&.Mui-disabled']);
});

test('buildCascade: derive-by-default — omitted states still emit (never left to MUI)', () => {
  const t = variant(rootOf(FRONT), 'text'); // declared only default + hover
  assert.ok(t['&.Mui-focusVisible'], 'focusVisible derived — ring outline');
  assert.match(t['&.Mui-focusVisible'].outline, /^3px solid var\(--mui-palette-ring/);
  assert.ok(t['&.Mui-disabled'], 'disabled derived — emitted explicitly');
  assert.equal(t['&.Mui-disabled'].boxShadow, 'none');
  assert.match(t['&.Mui-disabled'].color, /^var\(--mui-palette-action-disabled/, 'disabled via action var (scheme-correct)');
});

test('buildCascade: shadow slot resolves a named `shadows:` token (multi-layer/inset, commas intact)', () => {
  const front = {
    colors: { 'primary-main': '#3E63DD' },
    shadows: { classic: 'inset 0 0 0 1px #3E63DD, inset 0 4px 2px -2px rgba(255,255,255,0.7)' },
    components: { MuiButton: { cascade: { root: { contained: { default: { background: 'primary-main', shadow: 'classic' } } } } } },
  };
  const c = variant(rootOf(front), 'contained');
  assert.equal(c.boxShadow, 'inset 0 0 0 1px #3E63DD, inset 0 4px 2px -2px rgba(255,255,255,0.7)', 'token → its raw multi-layer CSS');
});

test('buildCascade: Button loading-center guard fires ONLY when a disabled foreground is customized', () => {
  // FRONT declares a disabled foreground on MuiButton → guard fires
  assert.equal(rootOf(FRONT)['&.Mui-disabled.MuiButton-loadingPositionCenter']?.color, 'transparent', 'busy label stays hidden');
  // no disabled foreground → nothing clobbers MUI's transparent → no guard emitted
  const noDisabledColor = buildCascade(
    { colors: { 'primary-main': '#3E63DD' }, components: { MuiButton: { cascade: { root: { contained: { default: { background: 'primary-main' }, disabled: { background: '#EEE' } } } } } } },
    muiStyles,
  ).MuiButton.styleOverrides.root;
  assert.ok(!('&.Mui-disabled.MuiButton-loadingPositionCenter' in noDisabledColor), 'no guard without the trigger');
  // non-Button seams have no loading guard at all
  const chip = buildCascade(
    { colors: { 'primary-main': '#111111' }, components: { MuiChip: { cascade: { root: { filled: { default: { background: 'primary-main' }, disabled: { foreground: 'primary-main' } } } } } } },
    muiStyles,
  ).MuiChip.styleOverrides.root;
  assert.ok(!('&.Mui-disabled.MuiButton-loadingPositionCenter' in chip));
});

test('buildCascade: no cascade block → empty (no-op for plain themes)', () => {
  assert.deepEqual(buildCascade({ colors: {}, components: { MuiButton: { height: '40px' } } }, muiStyles), {});
});

// ── Multi-slot component (Switch): slot-first cascade, cross-slot wiring, reset ──
const SWITCH_FRONT = {
  colors: { 'primary-main': '#3E63DD', 'track-off': '#E9E9EA', thumb: '#FFFFFF' },
  shadows: { thumb: '0 1px 3px rgba(0,0,0,0.3)' },
  components: {
    MuiSwitch: {
      sizing: { medium: { height: 32, width: 52 } },
      cascade: {
        track: {
          default: { background: 'track-off' },
          disabled: { background: 'track-off' },
          focusVisible: { outline: '2 primary-main' },
        },
        thumb: { default: { background: 'thumb', shadow: 'thumb' } },
      },
    },
  },
};
const switchSO = (front) => buildCascade(front, muiStyles).MuiSwitch.styleOverrides;

test('buildCascade: multi-slot Switch — wiring routes states cross-slot, reset forces solid track', () => {
  const so = switchSO(SWITCH_FRONT);
  // reset (unconditional): base track solid + checked track solid, independent of the design
  assert.equal(so.track.opacity, 1);
  assert.equal(so.switchBase['&.Mui-checked + .MuiSwitch-track'].opacity, 1);
  // cascade: track.default background lands on the track slot
  assert.match(so.track.backgroundColor, /^var\(--mui-palette-track-off/);
  // focusVisible + disabled route CROSS-SLOT to switchBase (the class is on switchBase,
  // it styles the sibling track)
  assert.match(so.switchBase['&.Mui-focusVisible + .MuiSwitch-track'].outline, /^2px solid var\(--mui-palette-primary-main/);
  assert.match(so.switchBase['&.Mui-disabled + .MuiSwitch-track'].backgroundColor, /^var\(--mui-palette-track-off/);
  // thumb colour + shadow on the thumb slot
  assert.match(so.thumb.backgroundColor, /^var\(--mui-palette-thumb/);
  assert.equal(so.thumb.boxShadow, '0 1px 3px rgba(0,0,0,0.3)');
});

test('buildCascade: a density-era `sizing` block emits no geometry', () => {
  const root = switchSO(SWITCH_FRONT).root;
  assert.equal(root?.width, undefined);
  assert.equal(root?.variants, undefined);
});
