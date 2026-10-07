/** @file DESIGN.md front-matter parser: nested maps, flow maps, tolerant of ignored sections. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontmatter } from '../src/lib/frontmatter.mjs';

test('parses fenced front-matter, returns body after it', () => {
  const { front, body } = parseFrontmatter('---\nname: X\n---\n\n# Heading\nprose\n');
  assert.equal(front.name, 'X');
  assert.match(body, /# Heading/);
});

test('no fence → empty front, whole string as body', () => {
  const { front, body } = parseFrontmatter('# just markdown\n');
  assert.deepEqual(front, {});
  assert.match(body, /just markdown/);
});

test('nested maps by indent; quoted keys/values unwrapped', () => {
  const { front } = parseFrontmatter(
    ['---', 'colors:', '  primary-main: "#1976d2"', 'typography:', '  h1:', '    fontWeight: "700"', '    fontSize: 3.5rem', '---'].join('\n'),
  );
  assert.equal(front.colors['primary-main'], '#1976d2');
  assert.equal(front.typography.h1.fontWeight, '700');
  assert.equal(front.typography.h1.fontSize, '3.5rem');
});

test('inline flow map parsed to object', () => {
  const { front } = parseFrontmatter(['---', 'density:', '  size-step: { small: 6px, large: 8px }', '---'].join('\n'));
  assert.deepEqual(front.density['size-step'], { small: '6px', large: '8px' });
});

test('quoted numeric keys kept as strings; scalars stay strings', () => {
  const { front } = parseFrontmatter(['---', 'rounded:', '  "1": 8px', '  "2": 16px', '---'].join('\n'));
  assert.equal(front.rounded['1'], '8px');
  assert.equal(front.rounded['2'], '16px');
});

test('tolerant of ignored component bodies (refs, multi-token values)', () => {
  const { front } = parseFrontmatter(
    ['---', 'components:', '  MuiButton:', '    backgroundColor: "{colors.primary}"', '    padding: 0 24px', '    height: 40px', '---'].join('\n'),
  );
  assert.equal(front.components.MuiButton.backgroundColor, '{colors.primary}'); // not mistaken for a flow map
  assert.equal(front.components.MuiButton.padding, '0 24px');
  assert.equal(front.components.MuiButton.height, '40px');
});
