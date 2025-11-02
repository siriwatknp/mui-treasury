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
  demoFile?: {
    path: string;
    content: string;
    type: string;
    target?: string;
  };
  meta: {
    screenshot?: string;
    category?: string;
    tags?: string[];
    previewMode?: "normal" | "iframe";
    previewClassName?: string;
  };
}

export interface RegistryCategory {
  name: string;
  label: string;
  count: number;
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

      // Check for .demo.tsx file
      let demoFile:
        | { path: string; content: string; type: string; target?: string }
        | undefined;
      if (content.files && content.files.length > 0) {
        const mainFilePath = content.files[0].path;
        const demoPath = path.join(
          REGISTRY_DIR,
          mainFilePath.replace(".tsx", ".demo.tsx"),
        );
        if (fs.existsSync(demoPath)) {
          demoFile = {
            path: mainFilePath.replace(".tsx", ".demo.tsx"),
            content: fs.readFileSync(demoPath, "utf-8"),
            type: "registry:demo",
          };
        }
      }

      return {
        dependencies: content.dependencies || [],
        registryDependencies: content.registryDependencies || [],
        files: content.files || [],
        demoFile,
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

    for (const metaPath of metaFiles) {
      try {
        // Extract the item name from the meta.json filename
        const metaFileName = path.basename(metaPath);
        const itemName = metaFileName.replace(".meta.json", "");

        // Look for corresponding .tsx file in the same directory
        const metaDir = path.dirname(metaPath);
        const tsxPath = path.join(metaDir, `${itemName}.tsx`);

        const metaContent = JSON.parse(fs.readFileSync(metaPath, "utf-8"));

        // Load additional data from public/r/ if available
        const publicData = loadPublicRegistryData(itemName);

        // Build the registry item with derived path and merged data
        const item: RegistryItem = {
          $schema: metaContent.$schema,
          // Path to the component file (relative to registry/)
          path: path.relative(REGISTRY_DIR, tsxPath),
          name: itemName,
          type: metaContent.type || "registry:item",
          title: metaContent.title || itemName,
          description: metaContent.description || "",
          dependencies: publicData?.dependencies || [],
          registryDependencies: publicData?.registryDependencies || [],
          files: publicData?.files || [],
          demoFile: publicData?.demoFile,
          meta: metaContent.meta || {},
        };

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
  try {
    const metaFiles = findMetaJsonFiles(REGISTRY_DIR);

    // Find the meta.json file that matches the name
    const targetMetaFile = metaFiles.find((metaPath) => {
      const metaFileName = path.basename(metaPath);
      return metaFileName === `${name}.meta.json`;
    });

    if (!targetMetaFile) {
      return null;
    }

    // Look for corresponding .tsx file in the same directory
    const metaDir = path.dirname(targetMetaFile);
    const tsxPath = path.join(metaDir, `${name}.tsx`);

    const metaContent = JSON.parse(fs.readFileSync(targetMetaFile, "utf-8"));

    // Load additional data from public/r/ if available
    const publicData = loadPublicRegistryData(name);

    return {
      $schema: metaContent.$schema,
      path: path.relative(REGISTRY_DIR, tsxPath),
      name: name,
      type: metaContent.type || "registry:item",
      title: metaContent.title || name,
      description: metaContent.description || "",
      dependencies: publicData?.dependencies || [],
      registryDependencies: publicData?.registryDependencies || [],
      files: publicData?.files || [],
      demoFile: publicData?.demoFile,
      meta: metaContent.meta || {},
    };
  } catch (error) {
    console.error(`Error reading registry item ${name}:`, error);
    return null;
  }
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
