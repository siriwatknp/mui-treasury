/**
 * @file Minimal YAML-subset front-matter parser for DESIGN.md. Handles exactly
 * what `mui compile-theme` consumes: the `---`-fenced block, indent-nested maps
 * (2-space), scalar `key: value` pairs, and inline flow maps (`{ a: x, b: y }`).
 * No arrays, no anchors, no multi-line — DESIGN.md front-matter needs none.
 * Every scalar stays a string (mappers own px/rem/number coercion); unparseable
 * lines in sections we ignore (e.g. `components:` token bodies) pass through
 * harmlessly as strings.
 */

/** Strip one layer of matching surrounding quotes. */
function unquote(text) {
  const t = text.trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

/** `{ small: 6px, large: 8px }` → { small: '6px', large: '8px' }. */
function parseFlow(text) {
  const inner = text.trim().slice(1, -1).trim();
  const out = {};
  if (!inner) {
    return out;
  }
  for (const pair of inner.split(',')) {
    const ci = pair.indexOf(':');
    if (ci === -1) {
      continue;
    }
    out[unquote(pair.slice(0, ci))] = unquote(pair.slice(ci + 1));
  }
  return out;
}

/** A scalar value → string, or a flow map → object. */
function parseScalar(rest) {
  if (rest.startsWith('{') && rest.endsWith('}') && rest.includes(':')) {
    return parseFlow(rest);
  }
  return unquote(rest);
}

/** Parse an indent-nested block into a plain object. */
function parseBlock(text) {
  const root = {};
  const stack = [{ indent: -1, obj: root }];
  for (const raw of text.split('\n')) {
    if (!raw.trim() || raw.trim().startsWith('#')) {
      continue;
    }
    const indent = raw.length - raw.trimStart().length;
    const line = raw.trim();
    const ci = line.indexOf(':');
    if (ci === -1) {
      continue;
    }
    const key = unquote(line.slice(0, ci));
    const rest = line.slice(ci + 1).trim();
    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }
    const parent = stack[stack.length - 1].obj;
    if (rest === '') {
      const child = {};
      parent[key] = child;
      stack.push({ indent, obj: child });
    } else {
      parent[key] = parseScalar(rest);
    }
  }
  return root;
}

/**
 * Split a DESIGN.md string into `{ front, body }`. `front` is the parsed
 * front-matter object (empty if no `---` fence); `body` is everything after.
 */
export function parseFrontmatter(md) {
  const match = md.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { front: {}, body: md };
  }
  return { front: parseBlock(match[1]), body: md.slice(match[0].length) };
}
