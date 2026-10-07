import fs from 'node:fs';
import path from 'node:path';

/**
 * A component's props as its published TypeScript definitions declare them: content props (React nodes/elements),
 * handlers, booleans and the string literals a prop accepts — what a generated render can set without a hand list.
 */
export function propTypesOf(root, component) {
  const file = path.join(root, 'node_modules/@mui/material', component.replace(/^Mui/, ''), `${component.replace(/^Mui/, '')}.d.ts`);
  if (!fs.existsSync(file)) {
    return {};
  }
  const short = component.replace(/^Mui/, '');
  // only the component's own props interfaces — the file also declares slots, owner state and helper shapes
  const blocks = [...fs.readFileSync(file, 'utf8').matchAll(/^export interface (\w+)[^{]*\{\n([\s\S]*?)^\}/gm)]
    .filter(([, name]) => [`${short}Props`, `${short}OwnProps`, `${short}BaseProps`].includes(name))
    .map(([, , body]) => body)
    .join('\n');
  const props = {};
  for (const [, name, optional, type] of blocks.matchAll(/^ {2}(\w+)(\??):\s*([^;]+);$/gm)) {
    if (['children', 'classes', 'sx', 'className', 'style', 'component', 'slots', 'slotProps', 'ref', 'key'].includes(name)) {
      continue;
    }
    // `ModalProps['open']`: the type another component declares for it
    const ref = /^(\w+)Props\['(\w+)'\]/.exec(type.trim());
    if (ref && ref[1] !== component.replace(/^Mui/, '')) {
      const theirs = propTypesOf(root, `Mui${ref[1]}`)[ref[2]];
      if (theirs) {
        props[name] = { ...theirs, required: !optional };
        continue;
      }
    }
    const kind = /^on[A-Z]/.test(name) || /EventHandler|=>/.test(type) ? 'fn' : /React\.(ReactNode|ReactElement)/.test(type) ? 'node' : /^boolean/.test(type) ? 'boolean' : 'other';
    props[name] = { kind, required: !optional, literals: [...type.matchAll(/'([\w-]+)'/g)].map((m) => m[1]) };
  }
  return props;
}

/** Placeholders for the props a component requires (Dialog's open, Tooltip's title), so a generated render shows it at all. */
export function requiredPropsOf(root, component) {
  const out = {};
  for (const [name, t] of Object.entries(propTypesOf(root, component))) {
    // render* callbacks must return real elements (Autocomplete's renderInput) — those components render through docs demos
    if (!t.required || (t.kind === 'other' && !t.literals.length) || /^render[A-Z]/.test(name)) {
      continue;
    }
    out[name] = t.kind === 'boolean' ? true : t.kind === 'fn' ? '@fn' : t.kind === 'node' ? 'Probe' : t.literals[0];
  }
  return out;
}
