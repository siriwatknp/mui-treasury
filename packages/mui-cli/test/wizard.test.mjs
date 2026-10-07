import test from 'node:test';
import assert from 'node:assert/strict';
import { contract, schema, decisions, rounds } from '../src/design/wizard.mjs';

test('schema: colors required, every entry complete, no density fields', () => {
  assert.deepEqual(schema.filter((s) => s.required).map((s) => s.field), ['colors']);
  for (const s of schema) {
    assert.ok(s.field && s.type && s.mapsTo, `schema entry ${s.field} incomplete`);
  }
  assert.doesNotMatch(JSON.stringify(contract), /density|control-height/i);
});

test('every question fills a schema field or is guidance-only', () => {
  const fields = new Set(schema.flatMap((s) => [s.field, s.field.split('.')[0]]));
  for (const r of rounds) {
    for (const q of r.questions) {
      assert.ok(q.id && q.ask && q.options.length && q.fills, `question ${q.id} incomplete`);
      const token = q.fills.split(/[\s.(]/)[0];
      assert.ok(q.fills.startsWith('(') || fields.has(token), `question ${q.id} fills unknown field: ${q.fills}`);
    }
  }
});

test('exactly one starred default per question', () => {
  for (const r of rounds) {
    for (const q of r.questions) {
      assert.equal(q.options.filter((o) => o.endsWith('*')).length, 1, `question ${q.id}`);
    }
  }
});

test('decisions cover the field-bearing choices', () => {
  const filled = decisions.map((d) => d.fills).join(' ');
  assert.match(filled, /primary-main/);
  assert.match(filled, /borderRadius/);
  assert.match(filled, /typography\.fontSize/);
  assert.equal(rounds.length, 4);
});
