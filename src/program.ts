import * as commander from "commander";
// @ts-ignore
import packageJson from "../package.json";

export type CloneOptions = {
  dir: string;
  template: "typescript" | "javascript";
  storybook: boolean;
  branch: string;
};
export type Params = {
  commands: {
    init?: () => void | Promise<void>;
    clone?: (
      sources: string[],
      options: CloneOptions,
      command: any
    ) => void | Promise<void>;
    create?: (
      source: string,
      destination: string,
      options: any
    ) => void | Promise<void>;
  };
};

function parseTemplate(value: string) {
  if (value !== "javascript" && value !== "typescript") {
    throw new commander.InvalidOptionArgumentError(
      'only "javascript" or "typescript" is supported via template, pass nothing to use typescript template'
    );
  }
  return value;
}

export const createProgram = ({
  commands: { clone, init, create },
}: Params) => {
  const program = new commander.Command(packageJson.name).version(
    packageJson.version,
    "-v, --version",
    "output the current version"
  );

  program.command("init").action(() => {
    init?.();
  });

  program
    .command("clone <sources...>")
    .description("clone blocks to your config directory")
    .option("-d, --dir [directory]", "destination directory")
    // TODO: support javascript option
    .option(
      "-t, --template [template]",
      "template of the files, typescript (default) | javascript",
      parseTemplate
    )
    .option("-b, --branch [branch]", "target branch on github")
    .option("--storybook", "storybook file(s) will be included.")
    .action(async (sources, options, command) => {
      await clone?.(sources, options, command);
    });

  program.command("init").action(() => {
    init?.();
  });

  program
    .command("new")
    .description("create a new project from a template")
    .argument("[template]", "the source template")
    .argument(
      "[directory]",
      "the destination folder to clone the template into"
    )
    .option("-b, --branch [branch]", "target branch on github")
    .action(async (template, directory, options) => {
      await create?.(template, directory, options);
    });

  return program;
};
