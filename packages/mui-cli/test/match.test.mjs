import { test } from 'node:test';
import assert from 'node:assert/strict';
import { longhandsOf, parsePropsKey } from '../src/lib/match.mjs';

test('a props key parses to typed props', () => {
  assert.deepEqual(parsePropsKey('size=small,disabled=true,count=3'), { size: 'small', disabled: true, count: 3 });
  assert.deepEqual(parsePropsKey('base'), {});
});

test('a shorthand expands to its longhands', () => {
  assert.deepEqual(longhandsOf('paddingBlock'), ['paddingTop', 'paddingBottom']);
  assert.deepEqual(longhandsOf('color'), ['color']);
});
