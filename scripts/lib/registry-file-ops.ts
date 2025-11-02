import * as fs from "fs";
import * as path from "path";
import type { FileInfo } from "./types";

export function scanRegistryFiles(dir: string | null = null): string[] {
  const registryPath = dir || path.join(process.cwd(), "registry");
  const files: string[] = [];

  function scanRecursive(currentPath: string): void {
    try {
      const items = fs.readdirSync(currentPath, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(currentPath, item.name);

        if (item.isDirectory()) {
          scanRecursive(fullPath);
        } else if (
          item.isFile() &&
          (item.name.endsWith(".ts") || item.name.endsWith(".tsx"))
        ) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(
        `Warning: Could not read directory ${currentPath}: ${
          (error as Error).message
        }`,
      );
    }
  }

  if (fs.existsSync(registryPath)) {
    scanRecursive(registryPath);
  }

  return files;
}

export function findAllRelatedFiles(
  itemPath: string,
  itemName: string,
): FileInfo[] {
  const itemDir = path.dirname(itemPath);
  const registryPath = path.join(process.cwd(), "registry");
  const allFiles: FileInfo[] = [];

  function scanDirectory(dirPath: string): void {
    try {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);

        if (item.isDirectory()) {
          scanDirectory(fullPath);
        } else if (
          item.isFile() &&
          (item.name.endsWith(".ts") || item.name.endsWith(".tsx")) &&
          !item.name.endsWith(".demo.tsx")
        ) {
          const relativePath = path.relative(registryPath, fullPath);
          allFiles.push({
            path: fullPath,
            relativePath: relativePath,
            name: itemName,
          });
        }
      }
    } catch (error) {
      console.warn(
        `Warning: Could not read directory ${dirPath}: ${
          (error as Error).message
        }`,
      );
    }
  }

  scanDirectory(itemDir);
  return allFiles;
}

export function findMatchingFiles(name: string): FileInfo[] {
  const registryPath = path.join(process.cwd(), "registry");
  const matches: FileInfo[] = [];

  // First, look for .meta.json files
  function scanForMetaFiles(currentPath: string): void {
    try {
      const items = fs.readdirSync(currentPath, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(currentPath, item.name);

        if (item.isDirectory()) {
          // Check if this directory matches the name and has a meta.json
          if (item.name === name) {
            const metaPath = path.join(fullPath, `${name}.meta.json`);
            if (fs.existsSync(metaPath)) {
              // Found a matching meta.json, use it as the reference
              const relativePath = path.relative(registryPath, metaPath);
              matches.push({
                path: metaPath,
                relativePath: relativePath,
                name: name,
              });
            }
          }
          scanForMetaFiles(fullPath);
        }
      }
    } catch (error) {
      console.warn(
        `Warning: Could not read directory ${currentPath}: ${
          (error as Error).message
        }`,
      );
    }
  }

  scanForMetaFiles(registryPath);

  // If no meta.json found, fall back to looking for .ts/.tsx files
  if (matches.length === 0) {
    const allFiles = scanRegistryFiles(null);

    for (const filePath of allFiles) {
      const fileName = path.basename(filePath, path.extname(filePath));
      const relativePath = path.relative(registryPath, filePath);
      const pathSegments = relativePath.split(path.sep);

      // Check if this file matches the name we're looking for
      // Also check for index files in a directory matching the name
      if (
        fileName === name ||
        (fileName === "index" &&
          pathSegments.length >= 2 &&
          pathSegments[pathSegments.length - 2] === name)
      ) {
        matches.push({
          path: filePath,
          relativePath: relativePath,
          name: name,
        });
      }
    }
  }

  return matches;
}

export function getAllRegistryItems(): FileInfo[] {
  const registryPath = path.join(process.cwd(), "registry");
  const registryItems = new Map<string, FileInfo>();

  // First, scan for TypeScript files
  const allFiles = scanRegistryFiles(null);

  for (const filePath of allFiles) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const relativePath = path.relative(registryPath, filePath);
    const pathSegments = relativePath.split(path.sep);

    // Determine the registry item name from the path structure
    let registryItemName: string;

    if (pathSegments.length >= 2) {
      // For themes like themes/mui-plus/... -> mui-plus
      // For components like components/button/... -> button
      // For blocks like blocks/data-metrics/... -> data-metrics
      registryItemName = pathSegments[1];
    } else {
      // Fallback to filename if structure is unexpected
      registryItemName = fileName;
    }

    // Skip sub-files within registry items
    // Only process files that match the registry item name
    if (fileName !== registryItemName && fileName !== "index") {
      continue;
    }

    if (!registryItems.has(registryItemName)) {
      registryItems.set(registryItemName, {
        path: filePath,
        relativePath: relativePath,
        name: registryItemName,
      });
    }
  }

  // Also scan for meta-only items (items with only .meta.json files)
  function scanForMetaOnlyItems(currentPath: string): void {
    try {
      const items = fs.readdirSync(currentPath, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(currentPath, item.name);

        if (item.isDirectory()) {
          // Check if this directory has a meta.json file but no TypeScript files
          const metaPath = path.join(fullPath, `${item.name}.meta.json`);
          if (fs.existsSync(metaPath) && !registryItems.has(item.name)) {
            // This is a meta-only item
            const relativePath = path.relative(registryPath, metaPath);
            registryItems.set(item.name, {
              path: metaPath,
              relativePath: relativePath,
              name: item.name,
            });
          }
          // Recurse into subdirectories
          scanForMetaOnlyItems(fullPath);
        }
      }
    } catch (error) {
      console.warn(
        `Warning: Could not read directory ${currentPath}: ${
          (error as Error).message
        }`,
      );
    }
  }

  scanForMetaOnlyItems(registryPath);

  return Array.from(registryItems.values());
}
