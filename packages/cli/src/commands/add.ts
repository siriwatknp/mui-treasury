import { Command } from "commander";

import { logger } from "@/utils/logger";

const DEFAULT_REGISTRY_URL = "https://mui-treasury.com/r";

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
  .action(async () => {
    logger.warn("add command not yet implemented");
  });
