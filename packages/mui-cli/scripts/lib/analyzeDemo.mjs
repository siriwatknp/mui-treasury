/** Parse one demo: structured imports, body statements, default-export name. */
function parseDemo(ts, source, fallbackName, kind) {
  const sf = ts.createSourceFile(`demo.${kind}`, source, ts.ScriptTarget.ESNext, true, kind === 'tsx' ? ts.ScriptKind.TSX : ts.ScriptKind.JSX);
  const imports = [];
  const body = []; // { start, end, text, exportDefault?: boolean }
  const bindings = []; // top-level names this demo declares
  let defaultName = null;

  const bindingNamesOf = (nameNode) => {
    if (ts.isIdentifier(nameNode)) {
      return [nameNode.text];
    }
    const names = [];
    const walk = (n) => {
      if (ts.isBindingElement(n) && ts.isIdentifier(n.name)) {
        names.push(n.name.text);
      }
      ts.forEachChild(n, walk);
    };
    walk(nameNode);
    return names;
  };

  for (const stmt of sf.statements) {
    if (ts.isImportDeclaration(stmt)) {
      const module = stmt.moduleSpecifier.text;
      const clause = stmt.importClause;
      if (!clause) {
        imports.push({ kind: 'side-effect', module, local: '' });
        continue;
      }
      const typeOnly = Boolean(clause.isTypeOnly);
      if (clause.name) {
        imports.push({ kind: 'default', module, local: clause.name.text, typeOnly });
      }
      if (clause.namedBindings) {
        if (ts.isNamespaceImport(clause.namedBindings)) {
          imports.push({ kind: 'ns', module, local: clause.namedBindings.name.text, typeOnly });
        } else {
          for (const el of clause.namedBindings.elements) {
            imports.push({
              kind: 'named',
              module,
              local: el.name.text,
              imported: el.propertyName?.text ?? el.name.text,
              typeOnly: typeOnly || Boolean(el.isTypeOnly),
            });
          }
        }
      }
      continue;
    }
    const mods = ts.canHaveModifiers(stmt) ? (ts.getModifiers(stmt) ?? []) : [];
    const isExport = mods.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
    const isDefault = mods.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword);
    if (ts.isExportAssignment(stmt)) {
      if (ts.isIdentifier(stmt.expression)) {
        defaultName = stmt.expression.text; // `export default X;` — dropped, X stays declared above
      } else {
        // `export default <expr>;` (not in corpus) — capture as a named const
        defaultName = fallbackName;
        bindings.push(fallbackName);
        const expr = source.slice(stmt.expression.getStart(sf), stmt.expression.end);
        body.push({ start: stmt.getStart(sf), end: stmt.end, text: `const ${fallbackName} = ${expr};` });
      }
      continue;
    }
    let text = source.slice(stmt.getStart(sf), stmt.end);
    if (isExport && isDefault) {
      defaultName =
        (ts.isFunctionDeclaration(stmt) || ts.isClassDeclaration(stmt)) && stmt.name
          ? stmt.name.text
          : fallbackName;
      text = text.replace(/^export\s+default\s+/, '');
      if (!((ts.isFunctionDeclaration(stmt) || ts.isClassDeclaration(stmt)) && stmt.name)) {
        text = `const ${fallbackName} = ${text}${text.endsWith(';') ? '' : ';'}`; // anonymous default (not in corpus, safety net)
      }
    } else if (isExport) {
      text = text.replace(/^export\s+/, '');
    }
    body.push({ start: stmt.getStart(sf), end: stmt.end, text });
    // top-level bindings share the namespace
    if ((ts.isFunctionDeclaration(stmt) || ts.isClassDeclaration(stmt) || ts.isInterfaceDeclaration(stmt) || ts.isTypeAliasDeclaration(stmt) || ts.isEnumDeclaration(stmt)) && stmt.name) {
      bindings.push(stmt.name.text);
    } else if (ts.isVariableStatement(stmt)) {
      for (const decl of stmt.declarationList.declarations) {
        bindings.push(...bindingNamesOf(decl.name));
      }
    }
  }
  return { sf, imports, body, bindings, defaultName: defaultName ?? fallbackName };
}


/**
 * Every position a top-level name is used inside the body, with the same rules the renamer needs:
 * property names, keys and member access are not uses; object shorthand is marked for expansion.
 */
function useSites(ts, sf, names) {
  const wanted = new Set(names);
  const sites = {};
  const visit = (node) => {
    if (ts.isIdentifier(node) && wanted.has(node.text)) {
      const p = node.parent;
      const skip =
        (ts.isPropertyAccessExpression(p) && p.name === node) ||
        (ts.isPropertyAssignment(p) && p.name === node) ||
        (ts.isPropertySignature(p) && p.name === node) ||
        (ts.isPropertyDeclaration(p) && p.name === node) ||
        (ts.isMethodDeclaration(p) && p.name === node) ||
        (ts.isMethodSignature(p) && p.name === node) ||
        (ts.isEnumMember(p) && p.name === node) ||
        (ts.isQualifiedName(p) && p.right === node) ||
        (ts.isJsxAttribute(p) && p.name === node) ||
        (ts.isBindingElement(p) && p.propertyName === node) ||
        ts.isImportSpecifier(p) ||
        ts.isExportSpecifier(p);
      if (!skip) {
        const shorthand = ts.isShorthandPropertyAssignment(p) || (ts.isBindingElement(p) && !p.propertyName && p.name === node && ts.isObjectBindingPattern(p.parent));
        (sites[node.text] ??= []).push(shorthand ? [node.getStart(sf), node.end, 1] : [node.getStart(sf), node.end]);
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return sites;
}

/** Sync-time analysis of one demo — everything compose needs, so the runtime never loads TypeScript. */
export function analyzeDemo(ts, source, fallbackName, kind) {
  const { sf, imports, body, bindings, defaultName } = parseDemo(ts, source, fallbackName, kind);
  const names = [...bindings, ...imports.map((i) => i.local).filter(Boolean)];
  const compactBody = body.map((b) => (b.text === source.slice(b.start, b.end) ? { start: b.start, end: b.end } : b));
  return { imports, body: compactBody, bindings, defaultName, sites: useSites(ts, sf, names) };
}
