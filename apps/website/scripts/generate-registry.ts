#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import { Command } from "commander";

interface RegistryFile {
  path: string;
  type: string;
  target?: string;
}

interface RegistryItem {
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies: string[];
  registryDependencies: string[];
  files?: RegistryFile[];
  meta?: {
    screenshot?: string;
    category?: string;
    tags?: string[];
    previewMode?: string;
  };
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

const program = new Command();

program
  .name("generate-registry")
  .description("Generate registry.json from individual component JSON files")
  .version("1.0.0")
  .option("-o, --output <path>", "Output file path", "public/r/registry.json")
  .option("-n, --name <name>", "Registry name", "MUI Registry")
  .option(
    "-h, --homepage <url>",
    "Registry homepage URL",
    "https://mui-treasury.com"
  )
  .option(
    "-i, --input <dir>",
    "Input directory containing JSON files",
    "public/r"
  )
  .option("--exclude-v0", "Exclude .v0.json files from registry", false)
  .action((options) => {
    generateRegistry(options);
  });

function generateRegistry(options: {
  output: string;
  name: string;
  homepage: string;
  input: string;
  excludeV0: boolean;
}): void {
  const PUBLIC_R_DIR = path.isAbsolute(options.input)
    ? options.input
    : path.join(process.cwd(), options.input);

  const OUTPUT_FILE = path.isAbsolute(options.output)
    ? options.output
    : path.join(process.cwd(), options.output);

  // Ensure input directory exists
  if (!fs.existsSync(PUBLIC_R_DIR)) {
    console.error(`Error: Input directory does not exist: ${PUBLIC_R_DIR}`);
    process.exit(1);
  }

  // Read all JSON files from input directory
  const files = fs.readdirSync(PUBLIC_R_DIR).filter((file) => {
    // Exclude registry.json itself
    if (file === "registry.json") return false;

    // Exclude .v0.json files if flag is set
    if (options.excludeV0 && file.endsWith(".v0.json")) return false;

    // Include all other JSON files
    return file.endsWith(".json");
  });

  const items: RegistryItem[] = [];
  const processedNames = new Set<string>();

  // Process each file
  for (const file of files) {
    try {
      const filePath = path.join(PUBLIC_R_DIR, file);
      const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      // Skip if we've already processed this item (useful when both .json and .v0.json exist)
      if (processedNames.has(content.name)) {
        continue;
      }
      processedNames.add(content.name);

      // Extract the item data (without the content field in files)
      const item: Partial<RegistryItem> = {
        name: content.name,
        type: content.type,
        title: content.title,
        description: content.description,
        dependencies: content.dependencies,
        registryDependencies: content.registryDependencies,
        files: content.files?.map((f: any) => ({
          path: f.path,
          type: f.type,
          target: f.target,
        })),
        meta: content.meta,
      };

      // Remove undefined fields and ensure required fields exist
      const cleanedItem = Object.fromEntries(
        Object.entries(item).filter(([_, value]) => value !== undefined)
      );

      // Type assertion is safe here because we know the required fields exist
      // from the Partial<RegistryItem> construction above
      const registryItem = cleanedItem as unknown as RegistryItem;

      items.push(registryItem);
    } catch (error) {
      console.error(`Error processing ${file}:`, (error as Error).message);
    }
  }

  // Sort items by name for consistency
  items.sort((a, b) => a.name.localeCompare(b.name));

  // Create the registry object
  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: options.name,
    homepage: options.homepage,
    items: items,
  };

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the registry file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(registry, null, 2));

  console.log(`✓ Generated registry.json with ${items.length} items`);
  console.log(`  Output: ${path.relative(process.cwd(), OUTPUT_FILE)}`);
  console.log(`  Items: ${items.length}`);
  console.log(`  Registry Name: ${options.name}`);
  console.log(`  Homepage: ${options.homepage}`);
}

// Parse command-line arguments
program.parse(process.argv);
