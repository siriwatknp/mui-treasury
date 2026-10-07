import fs from 'node:fs';
import { MUI_CLASS, VAR_ROOTS, classKeyFor } from './codeForm.mjs';
import { importPeer } from './renderEngine.mjs';
import { stripTypes } from './themeModule.mjs';

const COLOR_HELPERS = ['alpha', 'darken', 'lighten'];
const HELPER_SOURCES = ['@mui/material', '@mui/material/styles', '@mui/system', '@mui/system/colorManipulator'];
const WIDTH_QUERY = /@(media|container)\b[^{]*\b(min|max)-width\s*:/;

/**
 * Source-level standards a theme file must follow: imported *Classes, tokens through (theme.vars || theme) (typography
 * read plain), applyStyles for dark mode, the theme's color helpers, no raw --mui- variables, breakpoint helpers for width
 * queries, no function spread into a style object.
 */
export async function checkThemeCode(file, fromDir = process.cwd()) {
  const source = fs.readFileSync(file, 'utf8');
  const { parseAst } = await importPeer('vite');
  // type stripping blanks types in place, so offsets (and lines) still match the file
  const ast = parseAst(stripTypes(source, file));
  const lineOf = (offset) => source.slice(0, offset).split('\n').length;
  const issues = [];
  const report = (node, rule, detail) => issues.push({ line: lineOf(node.start), rule, detail });

  // the local names the standalone color helpers are imported under (`import { alpha as fade }` too)
  const helpers = new Map();
  for (const decl of ast.body.filter((n) => n.type === 'ImportDeclaration' && HELPER_SOURCES.includes(n.source.value))) {
    for (const spec of decl.specifiers.filter((s) => s.type === 'ImportSpecifier' && COLOR_HELPERS.includes(s.imported.name ?? s.imported.value))) {
      helpers.set(spec.local.name, spec.imported.name ?? spec.imported.value);
    }
  }
  const isVarsRead = (n) => (n?.type === 'MemberExpression' && !n.computed && n.property.name === 'vars') || (n?.type === 'LogicalExpression' && isVarsRead(n.left));
  const isModeRead = (n) => n?.type === 'MemberExpression' && !n.computed && n.property.name === 'mode' && n.object.type === 'MemberExpression' && n.object.property.name === 'palette';
  const visit = (node, owner, inComponents) => {
    if (!node || typeof node.type !== 'string') {
      return;
    }
    let nextOwner = owner;
    let nextIn = inComponents;
    if (node.type === 'Property' && !node.computed) {
      const key = node.key.name ?? node.key.value;
      if (key === 'components') {
        nextIn = true;
      } else if (inComponents && /^Mui[A-Z]/.test(String(key))) {
        nextOwner = key;
      }
    }
    if (nextIn) {
      const texts = node.type === 'Literal' && typeof node.value === 'string' ? [node.value] : node.type === 'TemplateLiteral' ? node.quasis.map((q) => q.value.cooked ?? '') : [];
      for (const text of texts) {
        for (const match of text.matchAll(MUI_CLASS)) {
          const fix = classKeyFor(match, nextOwner, fromDir);
          report(node, 'classes', `'${match[1]}' written as a string — use ${fix ? `\`\${${fix.expr}}\` (${fix.from})` : 'the imported *Classes key'}`);
        }
        if (text.includes('var(--mui-')) {
          report(node, 'css variables', 'a raw var(--mui-…) string — read it as theme.vars.* in a ({ theme }) callback, which is type-checked');
        }
        if (WIDTH_QUERY.test(text)) {
          report(node, 'width queries', 'a width query written as a literal — use theme.breakpoints.up/down/between(…) (numbers work too) or theme.containerQueries.up(…)');
        }
      }
      if (node.type === 'MemberExpression' && !node.computed && node.property.name === 'typography' && isVarsRead(node.object)) {
        report(node, 'typography', 'typography read through theme.vars — typography is not exposed as CSS variables; read theme.typography');
      }
      if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && helpers.has(node.callee.name)) {
        const name = helpers.get(node.callee.name);
        report(node, 'color helpers', `the standalone ${name}() breaks on CSS-variable colors — use theme.${name}(…)`);
      }
      if (node.type === 'SpreadElement' && ['ArrowFunctionExpression', 'FunctionExpression'].includes(node.argument.type)) {
        report(node, 'spread function', 'a function spread into a style object never applies — make the whole value a ({ theme }) => ({…}) callback');
      }
      if (node.type === 'BinaryExpression' && ['===', '==', '!==', '!='].includes(node.operator) && (isModeRead(node.left) || isModeRead(node.right))) {
        report(node, 'dark mode', "a palette.mode comparison — use theme.applyStyles('dark', { … }), which also follows colorSchemes and CSS variables");
      }
      // theme.palette.x read off a theme object directly (not (theme.vars || theme)) — a mode comparison is reported above instead
      if (node.type === 'MemberExpression' && !node.computed && VAR_ROOTS.includes(node.property.name) && node.object.type === 'Identifier' && !isModeRead(node.parent)) {
        report(node, 'tokens', `${node.object.name}.${node.property.name} read directly — use (${node.object.name}.vars || ${node.object.name}).${node.property.name}, so a theme with CSS variables uses them`);
      }
    }
    for (const [key, value] of Object.entries(node)) {
      if (key === 'parent') {
        continue;
      }
      for (const child of Array.isArray(value) ? value : [value]) {
        if (child && typeof child === 'object' && typeof child.type === 'string') {
          child.parent = node;
          visit(child, nextOwner, nextIn);
        }
      }
    }
  };
  visit(ast, null, false);
  const seen = new Set();
  return issues.filter((i) => !seen.has(`${i.line}|${i.rule}|${i.detail}`) && seen.add(`${i.line}|${i.rule}|${i.detail}`)).sort((a, b) => a.line - b.line);
}
