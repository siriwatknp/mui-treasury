#!/usr/bin/env node

import got from "got";
import fs from "fs";
import cpy from "cpy";
import chalk from "chalk";
import rimraf from "rimraf";
import * as tar from "tar";
import { Stream } from "stream";
import { promisify } from "util";
import checkForUpdate from "update-check";
import { execSync } from "child_process";
import { CloneOptions, createProgram } from "./program";
import packageJson from "./package.json";

const pipeline = promisify(Stream.pipeline);

const TEMPLATE_FOLDER_MAP = {
  typescript: "src",
  javascript: "javascript",
};
const MUI_TREASURY_CONFIG_FILE = "mui-treasury.config.js";
const DEFAULT_CONFIG = {
  dir: "src/mui-treasury",
  template: "typescript",
  storybook: false,
  test: false,
  // TODO: change to main once stable
  branch: "next",
} as const;
const CONFIG_FILE_TEMPLATE = `module.exports = {
  dir: "${DEFAULT_CONFIG.dir}",
  template: "${DEFAULT_CONFIG.template}",
  storybook: ${DEFAULT_CONFIG.storybook},
  test: ${DEFAULT_CONFIG.test},
  branch: ${DEFAULT_CONFIG.branch},
};
`;

const cloneParams: {
  sources: string[];
  options: CloneOptions | undefined;
} = {
  sources: [],
  options: undefined,
};

const logger = {
  log: (...text: string[]) => {
    console.log(chalk.bgHex("D4D4D8").hex("3F3F46")("mui-treasury"), ...text);
  },
  info: function (text: string | ((t: typeof chalk) => string)) {
    this.log(
      chalk.bold(chalk.green("info")),
      typeof text === "function" ? text(chalk) : text
    );
  },
  config: function (text: string | ((t: typeof chalk) => string)) {
    this.log(
      chalk.bold(chalk.hex("0284C7")("config")),
      typeof text === "function" ? text(chalk) : text
    );
  },
  success: function (text: string | ((t: typeof chalk) => string)) {
    this.log(
      chalk.bold(chalk.green("success")),
      typeof text === "function" ? text(chalk) : text
    );
  },
  version: function () {
    this.log(
      chalk.bold(chalk.hex("F59E0B")("version")),
      chalk.bold(chalk.yellow(`v${packageJson.version}`))
    );
  },
};

function getConfigFile(overrides?: Partial<CloneOptions>) {
  try {
    const config: CloneOptions = require(`${process.cwd()}/${MUI_TREASURY_CONFIG_FILE}`);
    logger.version();
    logger.info("using config from mui-treasury.config.js");
    return { ...config, ...overrides };
  } catch (error) {
    logger.info("config file not found, use default config");
    logger.info(
      chalk.blue('{ dir: "src/mui-treasury", storybook: true, test: true }')
    );
  }
  return { ...DEFAULT_CONFIG, ...overrides };
}

function downloadAndExtractCode(
  root: string,
  sources: string[],
  branch: string
): Promise<void> {
  return pipeline(
    got.stream(
      `https://codeload.github.com/siriwatknp/mui-treasury/tar.gz/${branch}`
    ),
    tar.extract(
      { cwd: root, strip: 2 },
      sources.map((src) => `mui-treasury-${branch}/packages/${src}`)
    )
  );
}
function downloadTemplates(
  root: string,
  sources: string[],
  branch: string,
  folder: "src" | "javascript"
): Promise<void> {
  return pipeline(
    got.stream(
      `https://codeload.github.com/siriwatknp/mui-treasury/tar.gz/${branch}`
    ),
    tar.extract(
      { cwd: root, strip: 4 },
      sources.map(
        (
          src // src is 'template-component-style' => 'component/style'
        ) =>
          `mui-treasury-${branch}/packages/templates/${folder}/${src
            .replace("template-", "")
            .replace("-", "/")}`
      )
    )
  );
}

const update = checkForUpdate(packageJson).catch(() => null);

function shouldUseYarn(): boolean {
  try {
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent) {
      return Boolean(userAgent && userAgent.startsWith("yarn"));
    }
    execSync("yarnpkg --version", { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}

async function notifyUpdate(): Promise<void> {
  try {
    const res = await update;
    if (res?.latest) {
      const isYarn = shouldUseYarn();

      console.log();
      console.log(
        chalk.yellow.bold("A new version of `mui-treasury` is available!")
      );
      console.log(
        "You can update by running: " +
          chalk.cyan(
            isYarn ? "yarn global add mui-treasury" : "npm i -g mui-treasury"
          )
      );
      console.log();
    }
    process.exit();
  } catch {
    // ignore error
  }
}

const program = createProgram({
  commands: {
    clone: (sources, options) => {
      cloneParams.sources = sources;
      cloneParams.options = options;
    },
    init: () => {
      fs.writeFile(
        MUI_TREASURY_CONFIG_FILE,
        CONFIG_FILE_TEMPLATE,
        function (err) {
          if (err) throw err;
          logger.success(`${MUI_TREASURY_CONFIG_FILE} is created! 🎉`);
        }
      );
    },
  },
});

program.parse(process.argv);

async function runCloneCommand() {
  const config = getConfigFile(cloneParams.options);
  if (config.dir && !config.dir.startsWith("/")) {
    config.dir = `/${config.dir}`;
  }
  for (let field of Object.entries(config)) {
    logger.config(`"${field[0]}: ${field[1]}"`);
  }
  const TEMP = "/mui-treasury-tmp";
  const tempRoot = process.cwd() + TEMP;
  const actualRoot = process.cwd() + config.dir;
  if (!fs.existsSync(tempRoot)) {
    fs.mkdirSync(tempRoot, { recursive: true });
  }
  logger.info(
    `start cloning ${chalk.bold(cloneParams.sources.length)} packages...`
  );
  const templateSources = cloneParams.sources.filter((s) =>
    s.startsWith("template")
  );
  const nonTemplateSources = cloneParams.sources.filter(
    (s) => !s.startsWith("template")
  );
  await downloadAndExtractCode(tempRoot, nonTemplateSources, config.branch);
  await downloadTemplates(
    tempRoot,
    templateSources,
    config.branch,
    config.template === "typescript" ? "src" : "javascript"
  );
  const excludedFiles = [
    ...(!config.storybook ? [`!${tempRoot}/**/*.stories.*`] : []),
    ...(!config.test ? [`!${tempRoot}/**/*.test.*`] : []),
  ];
  logger.info("finishing things up...");
  await Promise.all(
    nonTemplateSources.map((mod) =>
      cpy(
        [
          // default template is typescript (ts codes live in "src" folder)
          `${tempRoot}/${mod}/${TEMPLATE_FOLDER_MAP[config.template]}/*`,
          ...excludedFiles,
        ],
        `${actualRoot}/${mod}`,
        {
          overwrite: true,
        }
      )
    )
  );
  await Promise.all(
    templateSources.map((mod) => {
      const [_, component, style] = mod.split("-");
      return cpy(
        `${tempRoot}/${component}/${style}/*`,
        `${actualRoot}/${mod}`,
        { overwrite: true }
      );
    })
  );

  // clean up temp folder
  await new Promise((resolve) => {
    rimraf(tempRoot, (error) => {
      if (error) throw error;
      else resolve(undefined);
    });
  });
  logger.log(chalk.bold(chalk.green("✅ cloned successfully!")));
}

if (cloneParams.sources.length) {
  runCloneCommand()
    .then(notifyUpdate)
    .catch((error) => {
      throw error;
    });
}
