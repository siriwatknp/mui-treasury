import * as fs from 'fs';
import * as path from 'path';

const REGISTRY_DIR = path.resolve(__dirname, '../../website/registry');

interface Item {
  name: string;
  previewMode?: string;
  previewPath?: string;
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.isFile() && entry.name.endsWith('.meta.json')) out.push(p);
  }
  return out;
}

function hasPreviewContent(metaPath: string): boolean {
  const dir = path.dirname(metaPath);
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.some(
    (e) => e.isFile() && (e.name.endsWith('.tsx') || e.name.endsWith('.ts')),
  );
}

export function getVisualItems(): Item[] {
  const roots = ['components', 'blocks'].map((d) => path.join(REGISTRY_DIR, d));
  const metaPaths: string[] = [];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    metaPaths.push(...walk(root));
  }
  const metaNames = new Set(
    metaPaths.map((p) => path.basename(p).replace('.meta.json', '')),
  );

  const items: Item[] = [];
  for (const metaPath of metaPaths) {
    const content = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    if (content.type !== 'registry:item') continue;
    const meta = content.meta ?? {};
    if (meta.visualRegression === false) continue;
    const itemName = path.basename(metaPath).replace('.meta.json', '');
    if (hasPreviewContent(metaPath)) {
      items.push({
        name: itemName,
        previewMode: meta.previewMode,
        previewPath: meta.previewPath,
      });
    }
    const demosDir = path.join(path.dirname(metaPath), 'demos');
    if (!fs.existsSync(demosDir)) continue;
    for (const entry of fs.readdirSync(demosDir)) {
      if (!entry.endsWith('.demo.tsx')) continue;
      const demoName = entry.replace('.demo.tsx', '');
      if (demoName === itemName) continue;
      if (metaNames.has(demoName)) continue;
      items.push({ name: demoName });
    }
  }
  return items.sort((a, b) => a.name.localeCompare(b.name));
}
