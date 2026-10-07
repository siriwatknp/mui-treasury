import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BIN = path.resolve(HERE, '../../bin/mui.mjs');
const THEME = path.resolve(HERE, '../fixtures/theme.ts');
const BROKEN = path.resolve(HERE, '../fixtures/gate-broken.theme.ts');
const verify = (...args) => {
  const r = spawnSync(process.execPath, [BIN, '--json', 'verify', ...args], { encoding: 'utf8' });
  return { status: r.status, data: JSON.parse(r.stdout).data };
};

test('a real hover is reached and expectations pass', () => {
  const { status, data } = verify('Button', '--props', 'variant=outlined', '--state', ':hover', '--expect', 'root.borderColor=#1976d2');
  assert.equal(status, 0);
  assert.deepEqual(data.reached, { ':hover': true });
  assert.equal(data.expectations[0].status, 'pass');
});

test('a failing expectation exits 1 and reports the real value', () => {
  const { status, data } = verify('Button', '--props', 'variant=outlined', '--expect', 'root.borderColor=#1976d2');
  assert.equal(status, 1);
  assert.equal(data.expectations[0].got, 'rgba(25, 118, 210, 0.5)');
});

test('the user theme applies', () => {
  const { status, data } = verify('Button', '--theme', THEME, '--props', 'variant=contained', '--expect', 'root.backgroundColor=#7C3AED');
  assert.equal(status, 0, JSON.stringify(data.expectations));
});

test('a prop state is reached and checked', () => {
  const { status, data } = verify('Button', '--state', 'disabled', '--expect', 'root.color=rgba(0,0,0,0.26)');
  assert.equal(data.reached.disabled, true);
  assert.equal(status, 0, JSON.stringify(data.expectations));
});

test('a state that is not reached exits 1', () => {
  const { status, data } = verify('Button', '--state', 'expanded');
  assert.equal(data.reached.expanded, false);
  assert.equal(status, 1);
});

test('a component that only renders inside others goes through its recorded docs demo', () => {
  const { status, data } = verify('Accordion');
  assert.equal(data.render.kind, 'demo');
  assert.ok(data.elements.some((e) => e.slot === 'root'));
  assert.equal(status, 0);
});

test('--all passes vanilla Material UI for a component and its family', () => {
  const { status, data } = verify('Switch', '--all', '--shot', path.join(os.tmpdir(), 'mui-verify-test-vanilla.png'));
  assert.deepEqual(data.family, ['MuiCheckbox', 'MuiRadio']);
  assert.ok(data.cases > 40 && data.checks > 150, `${data.cases} cases, ${data.checks} checks`);
  assert.deepEqual(data.failures, []);
  assert.deepEqual(data.errors, []);
  assert.equal(status, 0);
});

test('--all fails a theme that leaves part of the control unclickable and clips the focus ring', () => {
  const { status, data } = verify('Switch', '--all', '--theme', BROKEN, '--shot', path.join(os.tmpdir(), 'mui-verify-test-broken.png'));
  const rules = new Set(data.failures.filter((f) => f.component === 'MuiSwitch').map((f) => f.rule));
  assert.deepEqual([...rules].sort(), ['dead zone', 'focus ring']);
  assert.ok(data.failures.some((f) => f.kind === 'composition'), 'checked inside docs compositions too');
  assert.ok(data.failures.every((f) => f.component === 'MuiSwitch'), 'the family stays green');
  assert.equal(status, 1);
});

test('a composite renders as used and reports its parts as Part.slot', () => {
  const { status, data } = verify('TextField', '--props', 'variant=outlined,label=Name', '--props', 'variant=filled,label=Name', '--state', '', '--state', 'focused', '--expect', 'InputBase.root.box.height=56px');
  assert.equal(data.cases.length, 4);
  assert.ok(data.cases.every((c) => c.expectations[0].status === 'pass'), JSON.stringify(data.cases.map((c) => c.expectations)));
  assert.ok(data.cases[0].elements.some((e) => e.slot === 'InputLabel.root'));
  assert.ok(data.cases.find((c) => c.states.includes('focused')).reached.focused);
  assert.equal(status, 0);
  const gate = spawnSync(process.execPath, [BIN, 'verify', 'TextField', '--all'], { encoding: 'utf8' });
  assert.match(gate.stderr, /TextField has no styles of its own — run the gate on its parts/);
});

test('one call checks every --props × --state case, and box.* reads the laid-out box', () => {
  const { status, data } = verify('Button', '--props', 'size=small', '--props', 'size=large', '--state', '', '--state', 'disabled', '--expect', 'root.box.height=30.75px');
  assert.equal(data.cases.length, 4);
  const at = (size, states) => data.cases.find((c) => c.props.size === size && c.states.join() === states).expectations[0];
  assert.equal(at('small', '').status, 'pass');
  assert.equal(at('small', 'disabled').status, 'pass');
  assert.equal(at('large', '').status, 'fail');
  assert.equal(at('large', '').got, '42.25px');
  assert.equal(status, 1);
});

test('--width and --pointer are cases; a `when` prefix limits an expectation to some of them', () => {
  const RESPONSIVE = path.resolve(HERE, '../fixtures/responsive.theme.ts');
  const { status, data } = verify('Button', '--theme', RESPONSIVE, '--width', '390,1280', '--pointer', 'fine,coarse', '--expect', 'touch:root.fontSize=16px', '--expect', 'mouse:root.fontSize=14px', '--expect', '@>=900:root.letterSpacing=1px', '--expect', '@<900:root.letterSpacing=0px');
  assert.equal(data.cases.length, 4);
  assert.ok(data.cases.every((c) => c.expectations.length === 2 && c.expectations.every((e) => e.status === 'pass')), JSON.stringify(data.cases.map((c) => c.expectations)));
  assert.equal(status, 0);
});

test('--all without a component gates every component the theme touches', () => {
  const RESPONSIVE = path.resolve(HERE, '../fixtures/responsive.theme.ts');
  const shot = path.join(os.tmpdir(), 'mui-verify-test-theme.png');
  const { status, data } = verify('--all', '--theme', RESPONSIVE, '--shot', shot);
  assert.equal(data.scope, 'entries changed: Button');
  assert.ok(data.components.includes('MuiButton') && data.components.length < 10, data.components.join());
  assert.deepEqual(data.failures, []);
  // a passing run still shows its content cases (Button's long text) to look at
  assert.equal(data.sheet, shot);
  assert.equal(status, 0);
});

test('content rules: plain Material UI passes every content case; a theme that breaks real content fails each rule', () => {
  const vanilla = verify('OutlinedInput', '--all', '--shot', path.join(os.tmpdir(), 'mui-verify-test-content.png'));
  assert.deepEqual(vanilla.data.failures, []);
  assert.deepEqual(vanilla.data.errors, []);
  const BROKEN_CONTENT = path.resolve(HERE, '../fixtures/content-broken.theme.ts');
  const broken = verify('OutlinedInput', '--all', '--theme', BROKEN_CONTENT, '--shot', path.join(os.tmpdir(), 'mui-verify-test-content-broken.png'));
  const rules = new Set(broken.data.failures.map((f) => f.rule));
  for (const rule of ['content overlap', 'content multiline', 'content label', 'content same-height']) {
    assert.ok(rules.has(rule), `${rule} in ${[...rules]}`);
  }
  assert.equal(broken.status, 1);
  const button = verify('Button', '--all', '--theme', BROKEN_CONTENT, '--shot', path.join(os.tmpdir(), 'mui-verify-test-content-button.png'));
  assert.ok(button.data.failures.some((f) => f.rule === 'content spill'));
});

test('a slot the component lacks resolves to its base, and routed theme keys are slots', () => {
  const input = verify('Input', '--expect', 'input.fontSize=16px');
  assert.equal(input.data.expectations[0].slot, 'InputBase.input');
  assert.equal(input.status, 0);
  const auto = verify('Autocomplete', '--expect', 'inputRoot.box.height=56px', '--expect', 'input.fontSize=16px');
  assert.deepEqual(auto.data.expectations.map((e) => e.status), ['pass', 'pass']);
  assert.equal(auto.status, 0);
});

test('a render that throws fails at once with its error, and its other cases are skipped', () => {
  const THROWS = path.resolve(HERE, '../fixtures/render-throws.theme.ts');
  const { status, data } = verify('Button', '--theme', THROWS, '--props', 'variant=outlined', '--props', 'variant=text', '--state', '', '--state', 'focused', '--expect', 'root.box.height=36.5px');
  assert.equal(status, 1);
  const outlined = data.cases.filter((c) => c.props.variant === 'outlined');
  assert.match(outlined[0].error, /outlined render fails/);
  assert.equal(outlined[1].expectations[0].status, 'no-element');
  assert.ok(data.cases.filter((c) => c.props.variant === 'text').every((c) => !c.error && c.expectations[0].status === 'pass'));
});

test('a select TextField renders with options', () => {
  const { status, data } = verify('TextField', '--props', 'select=true,label=Age', '--expect', 'OutlinedInput.root.box.height=56px');
  assert.equal(status, 0, JSON.stringify(data));
});

test('same-gap: static labels at different gaps across variants fail; a shared content case runs once', () => {
  const LABEL_GAP = path.resolve(HERE, '../fixtures/label-gap.theme.ts');
  const { status, data } = verify('--all', '--theme', LABEL_GAP, '--shot', path.join(os.tmpdir(), 'mui-verify-test-label-gap.png'));
  const gaps = data.failures.filter((f) => f.rule === 'content same-gap');
  assert.equal(gaps.length, 2, JSON.stringify(data.failures));
  assert.match(gaps[0].detail, /Standard 2\dpx/);
  assert.equal(status, 1);
});

test('a border width expectation reads back as written; Autocomplete addresses the TextField parts its render passes', () => {
  const border = verify('OutlinedInput', '--expect', 'notchedOutline.borderWidth=1px');
  assert.equal(border.status, 0, JSON.stringify(border.data.expectations));
  const ac = verify('Autocomplete', '--expect', 'InputBase.root.box.height=56px');
  assert.equal(ac.status, 0, JSON.stringify(ac.data.expectations));
});

test('the gate checks the theme code: a theme that renders fine still fails on class strings, direct token reads and palette.mode', () => {
  const shot = path.join(os.tmpdir(), 'mui-verify-test-code.png');
  const bad = verify('--all', '--theme', path.resolve(HERE, '../fixtures/code-unstandard.theme.ts'), '--shot', shot);
  assert.deepEqual(bad.data.failures, []);
  assert.deepEqual([...new Set(bad.data.code.map((c) => c.rule))].sort(), ['classes', 'color helpers', 'css variables', 'dark mode', 'spread function', 'tokens', 'typography', 'width queries']);
  assert.equal(bad.status, 1);
  const good = verify('--all', '--theme', path.resolve(HERE, '../fixtures/code-standard.theme.ts'), '--shot', shot);
  assert.deepEqual(good.data.code, []);
  assert.equal(good.status, 0, JSON.stringify(good.data.failures));
});
