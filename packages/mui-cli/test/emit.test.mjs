import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { emitSpecs } from '../src/lib/emit.mjs';
import { COMPOSITION_DEMOS_DIR, CONTENT_CASES_DIR, generatedUrl } from '../src/lib/renders.mjs';

test('emit: a module per component with its cases, the sources they render, and results by case id', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-emit-'));
  const variant = { component: 'MuiButton', kind: 'variant', label: 'variant=outlined +disabled', url: generatedUrl('MuiButton'), propsKey: 'variant=outlined,disabled=true', interaction: [] };
  const content = { component: 'MuiButton', kind: 'content', label: 'content LongText', url: `/@fs${path.join(CONTENT_CASES_DIR, 'MuiButton/LongText.tsx')}`, propsKey: 'base', interaction: [] };
  const checks = { target: 1, dead: 1, ring: 1, content: 1 };
  const out = emitSpecs(dir, {
    results: [
      { case: variant, checks, failures: [] },
      { case: content, checks, failures: [{ rule: 'content spill', detail: 'Button: text spills out', instance: 0 }] },
    ],
    errors: [],
    code: [],
    components: ['MuiButton'],
  });
  assert.deepEqual(out.cases, 2);
  const mod = fs.readFileSync(path.join(dir, 'cases/Button.tsx'), 'utf8');
  assert.match(mod, /import \{ Render as C0 \} from '\.\.\/renders\/MuiButton';/);
  assert.match(mod, /import C1 from '\.\.\/demos\/content-cases\/MuiButton\/LongText';/);
  assert.match(mod, /component: "Button", components: \["Button"\], kind: "variant"/);
  assert.match(mod, /props: \{"variant":"outlined","disabled":true\}, state: "disabled"/);
  assert.ok(fs.existsSync(path.join(dir, 'renders/MuiButton.jsx')));
  assert.ok(fs.existsSync(path.join(dir, 'demos/content-cases/MuiButton/LongText.tsx')));
  assert.match(fs.readFileSync(path.join(dir, 'cases/index.ts'), 'utf8'), /"Button": \(\) => import\('\.\/Button'\)/);
  const results = JSON.parse(fs.readFileSync(path.join(dir, 'results.json'), 'utf8'));
  assert.deepEqual(results.summary, { cases: 2, checks: 8, codeIssues: 0, failed: 1 });
  assert.deepEqual(results.components.Button, { cases: 2, failed: 1, group: 'Button' });
  assert.deepEqual(results.groups.Button, { cases: 2, components: ['Button'], failed: 1, ids: ['Button|variant|variant=outlined +disabled', 'Button|content|content LongText'] });
  assert.deepEqual(results.cases['Button|content|content LongText'].failures, [{ detail: 'Button: text spills out', rule: 'content spill' }]);
});

test('a generated render can pin props the record gets wrong: FormControlLabel gets a real control', () => {
  const file = path.join(path.dirname(new URL(import.meta.url).pathname), '../harness', generatedUrl('MuiFormControlLabel'));
  const source = fs.readFileSync(file, 'utf8');
  assert.match(source, /import Checkbox from '@mui\/material\/Checkbox';/);
  assert.match(source, /\{\.\.\.\{ control: <Checkbox \/> \}\}>/);
});

test('groups: parts of one component share a page; a base or an independent component does not', async () => {
  const { groupComponents } = await import('../src/lib/emit.mjs');
  const groups = groupComponents(['MuiAccordion', 'MuiAccordionSummary', 'MuiAccordionActions', 'MuiButton', 'MuiButtonBase', 'MuiIconButton', 'MuiIcon', 'MuiTab', 'MuiTabs', 'MuiTable', 'MuiTableCell']);
  assert.deepEqual(Object.fromEntries(groups), {
    Accordion: ['Accordion', 'AccordionActions', 'AccordionSummary'],
    Button: ['Button'],
    ButtonBase: ['ButtonBase'],
    Icon: ['Icon'],
    IconButton: ['IconButton'],
    Table: ['Table', 'TableCell'],
    Tabs: ['Tabs', 'Tab'],
  });
});

test('emit writes in place: an unchanged file is not rewritten, a file no longer produced is removed', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-emit-again-'));
  const variant = { component: 'MuiButton', kind: 'variant', label: 'base', url: generatedUrl('MuiButton'), propsKey: 'base', interaction: [] };
  const input = { results: [{ case: variant, checks: { target: 1 }, failures: [] }], errors: [], code: [], components: ['MuiButton'] };
  emitSpecs(dir, input);
  const file = path.join(dir, 'cases/Button.tsx');
  const stale = path.join(dir, 'demos/old/Gone.tsx');
  fs.mkdirSync(path.dirname(stale), { recursive: true });
  fs.writeFileSync(stale, '');
  const before = fs.statSync(file).mtimeMs;
  emitSpecs(dir, input);
  assert.equal(fs.statSync(file).mtimeMs, before);
  assert.equal(fs.existsSync(stale), false);
});

test('merge: a demo that renders several components is one case checking each of them', async () => {
  const { mergeCases } = await import('../src/lib/gate.mjs');
  const demo = (component) => ({ component, kind: 'composition', label: 'in dialogs/ConfirmationDialog', url: '/@fs/x/dialogs/ConfirmationDialog.tsx', propsKey: 'base', interaction: [] });
  const variant = { component: 'MuiDialog', kind: 'variant', label: 'base', url: '/_renders/MuiDialog.jsx', propsKey: 'open=true', interaction: [] };
  const merged = mergeCases([variant, demo('MuiDialog'), demo('MuiDialogTitle'), demo('MuiDialogActions')]);
  assert.equal(merged.length, 2);
  assert.deepEqual(merged[1].components, ['MuiDialog', 'MuiDialogTitle', 'MuiDialogActions']);
  const recorded = { ...demo('MuiStepper'), kind: 'demo', url: '/@fs/x/render-demos/steppers/Vertical.tsx' };
  const own = { ...demo('MuiStep'), kind: 'own demo', url: '/@fs/x/composition-demos/steppers/Vertical.tsx' };
  assert.deepEqual(mergeCases([recorded, own]).map((c) => c.components), [['MuiStepper', 'MuiStep']]);
});

test('emit assets: the static files an emitted demo references are copied into the public folder at their paths', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-emit-assets-'));
  const assets = path.join(dir, 'public');
  const demo = { component: 'MuiChip', kind: 'composition', label: 'in chips/AvatarChips', url: `/@fs${path.join(COMPOSITION_DEMOS_DIR, 'chips/AvatarChips.tsx')}`, propsKey: 'base', interaction: [] };
  const out = emitSpecs(path.join(dir, 'out'), { results: [{ case: demo, checks: { content: 1 }, failures: [] }], errors: [], code: [], components: ['MuiChip'], assetsDir: assets });
  assert.ok(out.assets > 0);
  assert.ok(fs.existsSync(path.join(assets, 'static/images/avatar/1.jpg')));
});
