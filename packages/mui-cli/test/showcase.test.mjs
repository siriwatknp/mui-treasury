import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSections, buildTokens } from '../src/commands/showcase.run.mjs';
import { families } from '../src/showcase/families.mjs';
import { typographyVariants, shadowLevels } from '../src/showcase/tokens.mjs';

const FRONT = { colors: { 'primary-main': '#2563EB', 'primary-contrastText': '#FFFFFF' } };

test('buildSections: measurements = Button variants × sizes + IconButton sizes', () => {
  const { measurements } = buildSections(families.Button, FRONT);
  assert.equal(measurements.length, 12);
  assert.equal(measurements.find((c) => c.label === 'Button · outlined · large').propsKey, 'variant=outlined,size=large');
  assert.equal(measurements.find((c) => c.label === 'IconButton · small').propsKey, 'size=small');
  assert.ok(measurements.every((c) => c.target === null));
});

test('buildSections: colors check token hex; outlined border is primary at 50%', () => {
  const { colors } = buildSections(families.Button, FRONT);
  assert.equal(colors.length, 3);
  assert.deepEqual(colors.find((c) => c.label === 'Button · contained').checks, [
    { prop: 'backgroundColor', label: 'bg', expect: '#2563EB' },
    { prop: 'color', label: 'text', expect: '#FFFFFF' },
  ]);
  assert.equal(colors.find((c) => c.label === 'Button · outlined').checks.find((k) => k.label === 'border').expect, '#2563EB80');
});

test('buildSections: states = variants × states; disabled adds the prop', () => {
  const { states } = buildSections(families.Button, FRONT);
  assert.equal(states.length, 15);
  assert.equal(states.find((s) => s.label === 'contained · disabled').propsKey, 'variant=contained,disabled=true');
  assert.equal(states.find((s) => s.label === 'outlined · focus-visible').state, 'focusVisible');
  assert.equal(states.find((s) => s.label === 'text · active').propsKey, 'variant=text');
});

test('buildSections: a declared cascade value wins over the token, flat or slot-first', () => {
  const stub = (v) => ({ ink: '#111111', 'primary-main': '#6D28D9' })[v] ?? v;
  for (const cascade of [{ outlined: { default: { border: 'ink' } } }, { root: { outlined: { default: { border: 'ink' } } } }]) {
    const front = { colors: { 'primary-main': '#6D28D9' }, components: { MuiButton: { cascade } } };
    const outlined = buildSections(families.Button, front, stub).colors.find((c) => c.label === 'Button · outlined');
    assert.equal(outlined.checks.find((k) => k.label === 'border').expect, '#111111');
    assert.equal(outlined.checks.find((k) => k.label === 'text').expect, '#6D28D9');
  }
});

test('buildSections: without a DESIGN.md nothing is gated', () => {
  const { colors } = buildSections(families.Button);
  assert.ok(colors.every((c) => c.checks.every((k) => k.expect === null)));
});

test('buildTokens: standard palette always shown; base radius/spacing gates', () => {
  const front = {
    colors: { 'primary-main': '#2563EB', primary: '#2563EB', 'text-primary': '#0F172A', divider: '#E2E8F0' },
    rounded: { 1: '4px', 2: '8px' },
    spacing: { 1: '8px' },
  };
  const t = buildTokens(front);
  assert.equal(t.typography.length, typographyVariants.length);
  assert.equal(t.colors.find((c) => c.name === 'error-main').expect, null);
  assert.equal(t.colors.find((c) => c.name === 'primary-main').expect, '#2563EB');
  assert.ok(!t.colors.some((c) => c.name === 'primary'), 'a bare family name next to its -main is not a swatch');
  assert.deepEqual(t.radius, [{ name: 'base', expect: '4px' }]);
  assert.deepEqual(t.spacing, [{ name: 'base', expect: '8px' }]);
  assert.equal(t.shadows.length, shadowLevels.length);
  assert.deepEqual(buildTokens().radius, [{ name: 'base', expect: null }]);
});

test('buildSections: a prop state (checked) renders with the prop set', () => {
  const { states } = buildSections(families.Switch, FRONT);
  assert.equal(states.find((s) => s.state === 'checked').propsKey, 'variant=track,checked=true');
  assert.equal(states.find((s) => s.state === 'default').propsKey, 'variant=track');
});

test('buildSections: the Switch on-color is read from the checked track', () => {
  const { colors } = buildSections(families.Switch, FRONT);
  assert.equal(colors[0].propsKey, 'variant=track,checked=true');
  assert.equal(colors[0].checks[0].slot, 'track');
});
