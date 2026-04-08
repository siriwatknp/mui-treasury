#!/usr/bin/env node
import { Command } from "commander";

import { add } from "@/commands/add";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("mui-treasury")
    .description("add MUI Treasury components to your project")
    .version("0.4.0", "-v, --version", "display the version number");

  program.addCommand(add);

  program.parse();
}

main();
