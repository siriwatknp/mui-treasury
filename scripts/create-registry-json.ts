#!/usr/bin/env node

import { Command } from "commander";
import {
  generateRegistryForItem,
  processAllRegistries,
} from "./lib/registry-processor";

const program = new Command();

program
  .name("create-registry-json")
  .description("Generate registry JSON files for MUI Plus components")
  .version("1.0.0")
  .argument("[name]", "Component name (if not provided, generates all)")
  .option("-t, --title <title>", "Component title")
  .option("-d, --description <desc>", "Component description")
  .option("-c, --category <category>", "Component category")
  .option("--tags <tags>", "Comma-separated tags")
  .action((name: string | undefined, options) => {
    if (!name) {
      // If no name provided, generate all
      processAllRegistries();
    } else {
      // Generate for specific component
      const tags = options.tags
        ? options.tags.split(",").map((t: string) => t.trim())
        : undefined;
      generateRegistryForItem(
        name,
        options.title,
        options.description,
        options.category,
        tags,
      );
    }
  });

// Parse command-line arguments
program.parse(process.argv);
