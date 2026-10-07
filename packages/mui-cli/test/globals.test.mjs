/** @file Globals mapping: DESIGN.md front-matter → createTheme options (inverse of generate-design-md). */
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parsePx,
  unflattenColors,
  borderRadiusFrom,
  spacingBaseFrom,
  mapTypography,
  mapGlobals,
} from '../src/lib/globals.mjs';

test('parsePx: px, rem (×16), bare number', () => {
  assert.equal(parsePx('8px'), 8);
  assert.equal(parsePx('0.5rem'), 8);
  assert.equal(parsePx(8), 8);
  assert.equal(parsePx('12'), 12);
  assert.equal(parsePx('auto'), null);
});

test('unflattenColors: dash paths → nested; single-segment reals kept; aliases dropped', () => {
  const palette = unflattenColors({
    'primary-main': '#1976d2',
    'primary-contrastText': '#ffffff',
    'text-primary': '#111111',
    'background-paper': '#fafafa',
    'grey-500': '#9e9e9e',
    'action-hover': '#000000',
    divider: '#e0e0e0',
    primary: '#1976d2', // alias of primary-main → dropped
  });
  assert.deepEqual(palette.primary, { main: '#1976d2', contrastText: '#ffffff' });
  assert.deepEqual(palette.text, { primary: '#111111' });
  assert.deepEqual(palette.background, { paper: '#fafafa' });
  assert.deepEqual(palette.grey, { 500: '#9e9e9e' });
  assert.deepEqual(palette.action, { hover: '#000000' });
  assert.equal(palette.divider, '#e0e0e0');
  assert.ok(!('main' in palette), 'bare primary alias not un-nested as its own path');
});

test('borderRadiusFrom / spacingBaseFrom: base = the `1` step (px)', () => {
  assert.equal(borderRadiusFrom({ 1: '8px', 2: '16px', 3: '24px' }), 8);
  assert.equal(spacingBaseFrom({ 1: '8px', 2: '16px', 8: '64px' }), 8);
  assert.equal(borderRadiusFrom(null), null);
  assert.equal(spacingBaseFrom(undefined), null);
});

test('mapTypography: all-digit fontWeight → number; named weight stays string; fields pass through', () => {
  const typo = mapTypography({
    h1: { fontFamily: 'Inter', fontSize: '3.5rem', fontWeight: '700', lineHeight: '1', letterSpacing: '-0.02em' },
    button: { fontWeight: 'bold' },
  });
  assert.equal(typo.h1.fontWeight, 700);
  assert.equal(typo.h1.fontSize, '3.5rem');
  assert.equal(typo.h1.letterSpacing, '-0.02em');
  assert.equal(typo.button.fontWeight, 'bold');
});

test('mapTypography: root fontFamily passes through; base fontSize → px number', () => {
  const typo = mapTypography({
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    button: { fontWeight: '600' },
  });
  assert.equal(typo.fontFamily, 'Inter, sans-serif', 'root font applies to all variants via createTheme');
  assert.equal(typo.fontSize, 14, 'base fontSize coerced to the px number MUI expects');
  assert.equal(typo.button.fontWeight, 600);
});

test('mapGlobals: full front-matter → options; absent sections omitted', () => {
  const opts = mapGlobals({
    colors: { 'primary-main': '#1976d2' },
    typography: { body1: { fontSize: '1rem', fontWeight: '400' } },
    rounded: { 1: '8px' },
    spacing: { 1: '8px' },
  });
  assert.deepEqual(opts.palette, { primary: { main: '#1976d2' } });
  assert.deepEqual(opts.shape, { borderRadius: 8 });
  assert.equal(opts.spacing, 8);
  assert.equal(opts.typography.body1.fontWeight, 400);

  const bare = mapGlobals({ colors: { 'primary-main': '#000000' } });
  assert.ok(!('shape' in bare) && !('spacing' in bare) && !('typography' in bare), 'no empty sections');
  assert.deepEqual(mapGlobals({}), {}, 'empty front-matter → empty options');
});

// --- round-trip gate: nested palette → forward-flatten (mirrors the generator) → mapGlobals → identity ---

/** Local mirror of the generator's dash/preserve-case flatten (opaque hex only). */
function flatten(node, path, out) {
  if (typeof node === 'string') {
    out[path.join('-')] = node;
    return out;
  }
  for (const [k, v] of Object.entries(node)) {
    flatten(v, [...path, k], out);
  }
  return out;
}

test('round-trip: unflatten ∘ flatten = identity on a realistic palette', () => {
  const palette = {
    primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0', contrastText: '#ffffff' },
    secondary: { main: '#9c27b0' },
    text: { primary: '#212121', secondary: '#757575' },
    background: { default: '#ffffff', paper: '#f5f5f5' },
    grey: { 500: '#9e9e9e', 900: '#212121' },
    action: { hover: '#0a0a0a', selected: '#141414' },
    divider: '#e0e0e0',
  };
  assert.deepEqual(unflattenColors(flatten(palette, [], {})), palette);
});

test('round-trip: mapGlobals recovers borderRadius/spacing base emitted by the scale builders', () => {
  const rounded = { 1: '8px', 2: '16px', 3: '24px', 4: '32px', 5: '40px' };
  const spacing = { 1: '8px', 2: '16px', 3: '24px', 4: '32px', 5: '40px', 6: '48px', 8: '64px' };
  const opts = mapGlobals({ colors: {}, rounded, spacing });
  assert.equal(opts.shape.borderRadius, 8);
  assert.equal(opts.spacing, 8);
});
