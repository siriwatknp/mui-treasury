import * as fs from "fs";
import * as path from "path";

const REGISTRY_DIR = path.resolve(__dirname, "../../website/registry");

interface Item {
  name: string;
  previewMode?: string;
  previewPath?: string;
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.isFile() && entry.name.endsWith(".meta.json")) out.push(p);
  }
  return out;
}

function hasPreviewContent(metaPath: string): boolean {
  const dir = path.dirname(metaPath);
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.some(
    (e) => e.isFile() && (e.name.endsWith(".tsx") || e.name.endsWith(".ts")),
  );
}

export function getVisualItems(): Item[] {
  const roots = ["components", "blocks"].map((d) => path.join(REGISTRY_DIR, d));
  const items: Item[] = [];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const metaPath of walk(root)) {
      const content = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      if (content.type !== "registry:item") continue;
      const meta = content.meta ?? {};
      if (meta.visualRegression === false) continue;
      if (!hasPreviewContent(metaPath)) continue;
      items.push({
        name: path.basename(metaPath).replace(".meta.json", ""),
        previewMode: meta.previewMode,
        previewPath: meta.previewPath,
      });
    }
  }
  return items.sort((a, b) => a.name.localeCompare(b.name));
}
