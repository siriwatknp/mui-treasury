import commander from "commander";
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

export const createProgram = ({ commands: { clone, init } }: Params) => {
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
    .action((sources, options, command) => {
      clone?.(sources, options, command);
    });

  return program;
};
