import path from "path";
import { existsSync } from "fs";
import { Command } from "commander";
import { z } from "zod";

import { handleError } from "@/utils/handle-error";
import { highlighter } from "@/utils/highlighter";
import { logger } from "@/utils/logger";

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
  .option(
    "-r, --registry <url>",
    "registry base URL.",
    DEFAULT_REGISTRY_URL,
  )
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

      logger.info("add command not yet implemented");
    } catch (error) {
      handleError(error);
    }
  });
