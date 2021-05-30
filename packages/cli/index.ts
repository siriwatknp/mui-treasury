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
  storybook: true,
  test: true,
} as const;
const CONFIG_FILE_TEMPLATE = `module.exports = {
  dir: "${DEFAULT_CONFIG.dir}",
  template: "${DEFAULT_CONFIG.template}",
  storybook: ${DEFAULT_CONFIG.storybook},
  test: ${DEFAULT_CONFIG.test},
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
  sources: string[]
): Promise<void> {
  return pipeline(
    got.stream(
      "https://codeload.github.com/siriwatknp/mui-treasury/tar.gz/main"
    ),
    tar.extract(
      { cwd: root, strip: 2 },
      sources.map((src) => `mui-treasury-main/packages/${src}`)
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
        chalk.yellow.bold("A new version of `create-next-app` is available!")
      );
      console.log(
        "You can update by running: " +
          chalk.cyan(
            isYarn
              ? "yarn global add create-next-app"
              : "npm i -g create-next-app"
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
  await downloadAndExtractCode(tempRoot, cloneParams.sources);
  const excludedFiles = [
    ...(!config.storybook ? [`!${tempRoot}/**/*.stories.*`] : []),
    ...(!config.test ? [`!${tempRoot}/**/*.test.*`] : []),
  ];
  logger.info("finishing things up...");
  await Promise.all(
    cloneParams.sources.map((module) =>
      cpy(
        [
          // default template is typescript (ts codes live in "src" folder)
          `${tempRoot}/${module}/${TEMPLATE_FOLDER_MAP[config.template]}/*`,
          ...excludedFiles,
        ],
        `${actualRoot}/${module}`,
        {
          overwrite: true,
        }
      )
    )
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
