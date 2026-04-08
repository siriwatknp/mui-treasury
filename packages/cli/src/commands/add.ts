import path from "path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { Command } from "commander";
import prompts from "prompts";
import { z } from "zod";

import { clearCache } from "@/registry/fetcher";
import { resolveRegistryTree } from "@/registry/resolver";
import { handleError } from "@/utils/handle-error";
import { getPackageManager } from "@/utils/get-package-manager";
import { highlighter } from "@/utils/highlighter";
import { logger } from "@/utils/logger";
import { spinner } from "@/utils/spinner";

const DEFAULT_REGISTRY_URL = "https://mui-treasury.com/r";

const addOptionsSchema = z.object({
  components: z.array(z.string()),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  registry: z.string(),
});

export const add = new Command()
  .name("add")
  .description("add components to your project")
  .argument("[components...]", "component names to add")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .option("-r, --registry <url>", "registry base URL.", DEFAULT_REGISTRY_URL)
  .action(async (components, opts) => {
    try {
      const options = addOptionsSchema.parse({
        components,
        ...opts,
        cwd: path.resolve(opts.cwd),
      });

      if (!options.components.length) {
        logger.error(
          "No components specified. Usage: mui-treasury add <component...>",
        );
        process.exit(1);
      }

      // Preflight: check cwd exists and has package.json
      if (!existsSync(options.cwd)) {
        logger.error(
          `Directory ${highlighter.info(options.cwd)} does not exist.`,
        );
        process.exit(1);
      }

      if (!existsSync(path.resolve(options.cwd, "package.json"))) {
        logger.error(
          `No package.json found in ${highlighter.info(options.cwd)}.`,
        );
        process.exit(1);
      }

      // Resolve registry tree
      const resolveSpinner = spinner("Resolving components...").start();
      const tree = await resolveRegistryTree(
        options.components,
        options.registry,
      );
      resolveSpinner.succeed(
        `Resolved ${tree.items.length} component(s).`,
      );

      // Write files
      const created: string[] = [];
      const updated: string[] = [];
      const skipped: string[] = [];

      for (const file of tree.files) {
        if (!file.content) continue;

        const targetPath = path.resolve(options.cwd, file.target);
        const targetDir = path.dirname(targetPath);
        const relativePath = path.relative(options.cwd, targetPath);

        if (existsSync(targetPath)) {
          const existingContent = readFileSync(targetPath, "utf-8");
          if (existingContent === file.content) {
            skipped.push(relativePath);
            continue;
          }

          if (!options.overwrite && !options.yes) {
            const { confirm } = await prompts({
              type: "confirm",
              name: "confirm",
              message: `File ${highlighter.info(relativePath)} already exists. Overwrite?`,
              initial: false,
            });
            if (!confirm) {
              skipped.push(relativePath);
              continue;
            }
          }
          updated.push(relativePath);
        } else {
          created.push(relativePath);
        }

        mkdirSync(targetDir, { recursive: true });
        writeFileSync(targetPath, file.content, "utf-8");
      }

      // Summary
      logger.break();
      if (created.length) {
        logger.success("Created:");
        created.forEach((f) => logger.log(`  - ${f}`));
      }
      if (updated.length) {
        logger.success("Updated:");
        updated.forEach((f) => logger.log(`  - ${f}`));
      }
      if (skipped.length) {
        logger.info("Skipped:");
        skipped.forEach((f) => logger.log(`  - ${f}`));
      }

      // Print dependency install command
      const allDeps = [...tree.dependencies, ...tree.devDependencies];
      if (allDeps.length) {
        const pm = getPackageManager(options.cwd);
        const installCmd = pm === "npm" ? "npm install" : `${pm} add`;
        logger.break();
        logger.info("Install dependencies:");
        logger.log(`  ${installCmd} ${allDeps.join(" ")}`);
      }

      logger.break();
    } catch (error) {
      handleError(error);
    } finally {
      clearCache();
    }
  });
