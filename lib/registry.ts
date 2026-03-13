import fs from "fs";
import path from "path";

export interface RegistryItem {
  $schema?: string;
  path: string;
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies: string[];
  registryDependencies: string[];
  files: Array<{
    path: string;
    content: string;
    type: string;
    target?: string;
  }>;
  demoFiles?: Array<{
    path: string;
    content: string;
    type: string;
    target?: string;
    title?: string;
    description?: string;
  }>;
  meta: {
    screenshot?: string;
    category?: string;
    subcategory?: string;
    tags?: string[];
    previewMode?: "normal" | "iframe";
    previewPath?: string;
    previewClassName?: string;
    exportName?: string;
  };
}

export interface RegistryCategory {
  name: string;
  label: string;
  count: number;
}

/**
 * Extract `export const meta = { ... }` from demo file content.
 */
function parseDemoMeta(
  content: string,
): { title?: string; description?: string } | null {
  const match = content.match(
    /export\s+const\s+meta\s*=\s*(\{[\s\S]*?\n\}|\{[^\n]*\})/,
  );
  if (!match) return null;
  try {
    const obj = new Function(`return ${match[1]}`)();
    return {
      title: typeof obj.title === "string" ? obj.title : undefined,
      description:
        typeof obj.description === "string" ? obj.description : undefined,
    };
  } catch {
    return null;
  }
}

// Registry source directory
const REGISTRY_DIR = path.join(process.cwd(), "registry");
// Public registry directory with full content
const PUBLIC_R_DIR = path.join(process.cwd(), "public", "r");

/**
 * Recursively find all meta.json files in a directory
 */
function findMetaJsonFiles(dir: string): string[] {
  const metaFiles: string[] = [];

  function scanDirectory(currentDir: string) {
    try {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);

        if (entry.isDirectory()) {
          // Recursively scan subdirectories
          scanDirectory(fullPath);
        } else if (entry.isFile() && entry.name.endsWith(".meta.json")) {
          metaFiles.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${currentDir}:`, error);
    }
  }

  scanDirectory(dir);
  return metaFiles;
}

/**
 * Load full registry data from public/r/{name}.json if it exists
 */
function loadPublicRegistryData(name: string): Partial<RegistryItem> | null {
  try {
    const publicJsonPath = path.join(PUBLIC_R_DIR, `${name}.json`);
    if (fs.existsSync(publicJsonPath)) {
      const content = JSON.parse(fs.readFileSync(publicJsonPath, "utf-8"));

      let demoFiles:
        | Array<{
            path: string;
            content: string;
            type: string;
            target?: string;
          }>
        | undefined;
      if (content.files && content.files.length > 0) {
        const dir = path.dirname(content.files[0].path);
        const absDir = path.join(REGISTRY_DIR, dir);
        const collected: Array<{
          path: string;
          content: string;
          type: string;
          title?: string;
          description?: string;
        }> = [];

        // Scan root directory for *.demo.tsx
        if (fs.existsSync(absDir)) {
          const entries = fs.readdirSync(absDir);
          for (const f of entries.filter((f: string) =>
            f.endsWith(".demo.tsx"),
          )) {
            const fileContent = fs.readFileSync(path.join(absDir, f), "utf-8");
            const demoMeta = parseDemoMeta(fileContent);
            collected.push({
              path: path.join(dir, f),
              content: fileContent,
              type: "registry:demo",
              ...demoMeta,
            });
          }
        }

        // Scan demos/ subfolder for *.demo.tsx
        const demosDir = path.join(absDir, "demos");
        if (fs.existsSync(demosDir)) {
          const entries = fs.readdirSync(demosDir);
          for (const f of entries.filter((f: string) =>
            f.endsWith(".demo.tsx"),
          )) {
            const fileContent = fs.readFileSync(
              path.join(demosDir, f),
              "utf-8",
            );
            const demoMeta = parseDemoMeta(fileContent);
            collected.push({
              path: path.join(dir, "demos", f),
              content: fileContent,
              type: "registry:demo",
              ...demoMeta,
            });
          }
        }

        if (collected.length > 0) {
          demoFiles = collected.sort((a, b) => a.path.localeCompare(b.path));
        }
      }

      return {
        dependencies: content.dependencies || [],
        registryDependencies: content.registryDependencies || [],
        files: content.files || [],
        demoFiles,
      };
    }
  } catch (error) {
    console.error(`Error loading public registry data for ${name}:`, error);
  }
  return null;
}

/**
 * Get all registry items from the registry source directory
 * Recursively finds all *.meta.json files within registry/
 * and merges with data from public/r/ if available
 */
export function getRegistryItems(): RegistryItem[] {
  try {
    const items: RegistryItem[] = [];
    const metaFiles = findMetaJsonFiles(REGISTRY_DIR);

    // Collect all meta.json-based names to avoid conflicts with virtual demo items
    const metaNames = new Set<string>();
    for (const metaPath of metaFiles) {
      metaNames.add(path.basename(metaPath).replace(".meta.json", ""));
    }

    for (const metaPath of metaFiles) {
      try {
        const metaFileName = path.basename(metaPath);
        const itemName = metaFileName.replace(".meta.json", "");
        const metaDir = path.dirname(metaPath);
        const tsxPath = path.join(metaDir, `${itemName}.tsx`);
        const metaContent = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
        const publicData = loadPublicRegistryData(itemName);

        const item: RegistryItem = {
          $schema: metaContent.$schema,
          path: path.relative(REGISTRY_DIR, tsxPath),
          name: itemName,
          type: metaContent.type || "registry:item",
          title: metaContent.title || itemName,
          description: metaContent.description || "",
          dependencies: publicData?.dependencies || [],
          registryDependencies: publicData?.registryDependencies || [],
          files: publicData?.files || [],
          demoFiles: publicData?.demoFiles,
          meta: metaContent.meta || {},
        };

        // Discover independent demos from demos/ folder
        const demosDir = path.join(metaDir, "demos");
        const independentDemoNames = new Set<string>();

        if (fs.existsSync(demosDir)) {
          const demoEntries = fs
            .readdirSync(demosDir)
            .filter((f: string) => f.endsWith(".demo.tsx"));

          for (const demoFile of demoEntries) {
            const demoName = demoFile.replace(".demo.tsx", "");
            if (demoName === itemName) continue;
            if (metaNames.has(demoName)) continue;

            independentDemoNames.add(demoName);

            const demoTsxPath = path.join(demosDir, demoFile);
            const content = fs.readFileSync(demoTsxPath, "utf-8");
            const relativePath = path.relative(REGISTRY_DIR, demoTsxPath);
            const demoMeta = parseDemoMeta(content);
            const title =
              demoMeta?.title ||
              demoName
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");

            items.push({
              path: relativePath,
              name: demoName,
              type: "registry:item",
              title,
              description: demoMeta?.description || "",
              dependencies: [],
              registryDependencies: [],
              files: [],
              demoFiles: [
                { path: relativePath, content, type: "registry:demo" },
              ],
              meta: {
                category: (metaContent.meta || {}).category,
                subcategory: (metaContent.meta || {}).subcategory,
              },
            });
          }
        }

        // Remove independent demos from parent's demoFiles
        if (item.demoFiles && independentDemoNames.size > 0) {
          item.demoFiles = item.demoFiles.filter((df) => {
            const dfName = path.basename(df.path).replace(".demo.tsx", "");
            return !independentDemoNames.has(dfName);
          });
          if (item.demoFiles.length === 0) item.demoFiles = undefined;
        }

        items.push(item);
      } catch (error) {
        console.error(`Error parsing ${metaPath}:`, error);
      }
    }

    return items;
  } catch (error) {
    console.error("Error reading registry directory:", error);
    return [];
  }
}

/**
 * Get a single registry item by name
 * Recursively searches for {name}.meta.json within registry/
 * and merges with data from public/r/{name}.json if available
 */
export function getRegistryByName(name: string): RegistryItem | null {
  return getRegistryItems().find((item) => item.name === name) || null;
}

/**
 * Get all registry items for a specific category
 */
export function getRegistryByCategory(category: string): RegistryItem[] {
  const allItems = getRegistryItems();
  return allItems.filter((item) => item.meta?.category === category);
}

/**
 * Get all unique categories from registry items
 */
export function getCategories(): RegistryCategory[] {
  const allItems = getRegistryItems();
  const categoryMap = new Map<string, number>();

  for (const item of allItems) {
    const category = item.meta?.category;
    if (category) {
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
    }
  }

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
      count,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get all unique tags from registry items, optionally filtered by category
 */
export function getTags(category?: string): string[] {
  let items = getRegistryItems();

  if (category) {
    items = items.filter((item) => item.meta?.category === category);
  }

  const tagsSet = new Set<string>();

  for (const item of items) {
    if (item.meta?.tags) {
      for (const tag of item.meta.tags) {
        tagsSet.add(tag);
      }
    }
  }

  return Array.from(tagsSet).sort();
}

/**
 * Get all unique subcategories for a specific category
 */
export function getSubcategories(category: string): string[] {
  const items = getRegistryByCategory(category);
  const subcats = new Set<string>();

  for (const item of items) {
    if (item.meta?.subcategory) {
      subcats.add(item.meta.subcategory);
    }
  }

  return Array.from(subcats).sort();
}

/**
 * Get all registry items for a specific category and subcategory
 */
export function getRegistryBySubcategory(
  category: string,
  subcategory: string,
): RegistryItem[] {
  return getRegistryItems().filter(
    (item) =>
      item.meta?.category === category &&
      item.meta?.subcategory === subcategory,
  );
}

/**
 * Get all registry items in a category that don't have a subcategory
 */
export function getUncategorizedItems(category: string): RegistryItem[] {
  return getRegistryItems().filter(
    (item) => item.meta?.category === category && !item.meta?.subcategory,
  );
}
