#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { Stream } from "stream";
import { promisify } from "util";
import chalk from "chalk";
import { cosmiconfig } from "cosmiconfig";
import cpy from "cpy";
import got from "got";
import prompts from "prompts";
import rimraf from "rimraf";
import * as tar from "tar";
import checkForUpdate from "update-check";
// @ts-ignore
import packageJson from "../package.json";
import { CloneOptions, createProgram } from "./program";

const pipeline = promisify(Stream.pipeline);

const TEMPLATE_FOLDER_MAP = {
  typescript: "",
  javascript: "javascript",
};
const MUI_TREASURY_CONFIG_FILE = "mui-treasury.config.js";
const DEFAULT_CONFIG = {
  dir: "src/mui-treasury",
  template: "typescript",
  storybook: false,
  branch: "master",
} as const;
const CONFIG_FILE_TEMPLATE = `module.exports = {
  dir: "${DEFAULT_CONFIG.dir}",
  template: "${DEFAULT_CONFIG.template}",
  storybook: ${DEFAULT_CONFIG.storybook},
  branch: "${DEFAULT_CONFIG.branch}",
};
`;

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

async function getConfigFile(overrides?: Partial<CloneOptions>) {
  let config: CloneOptions = DEFAULT_CONFIG;
  try {
    const explorer = cosmiconfig("mui-treasury");
    const result = await explorer.search();
    if (result?.config) {
      config = result.config;
    }
    logger.version();
    logger.info("using config from mui-treasury.config.js");
  } catch (error) {
    logger.info("config file not found, use default config");
    logger.info(
      chalk.blue('{ dir: "src/mui-treasury", storybook: false, test: false }')
    );
  }
  return { ...config, ...overrides };
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
      sources.map((src) => `mui-treasury-${branch}/blocks/${src}`)
    )
  );
}

function removeDir(dir: string) {
  return new Promise((resolve, reject) => {
    rimraf(dir, (error: any) => {
      if (!error) {
        resolve(undefined);
      } else {
        reject(error);
      }
    });
  });
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
    clone: async (sources, options) => {
      const config = await getConfigFile(options);
      if (config.dir && !config.dir.startsWith("/")) {
        config.dir = `/${config.dir}`;
      }
      for (let field of Object.entries(config)) {
        logger.config(`"${field[0]}: ${field[1]}"`);
      }
      const tempRoot = process.cwd() + "/mui-treasury-tmp";
      const tempTemplateRoot = process.cwd() + "/mui-treasury-template-tmp";
      const actualRoot = process.cwd() + config.dir;
      if (!fs.existsSync(tempRoot)) {
        fs.mkdirSync(tempRoot, { recursive: true });
      }
      if (!fs.existsSync(tempTemplateRoot)) {
        fs.mkdirSync(tempTemplateRoot, { recursive: true });
      }
      logger.info(`start cloning ${chalk.bold(sources.length)} packages...`);
      try {
        if (sources.length) {
          await downloadAndExtractCode(tempRoot, sources, config.branch);
        }
        const excludedFiles = [
          ...(!config.storybook ? [`!${tempRoot}/**/*.stories.*`] : []),
          `!${tempRoot}/**/*.mdx`,
        ];
        logger.info("finishing things up...");
        await Promise.all(
          sources.map((mod) =>
            cpy(
              [
                // default template is typescript (ts codes live in "src" folder)
                `${tempRoot}/${mod}${
                  TEMPLATE_FOLDER_MAP[config.template]
                    ? `/${TEMPLATE_FOLDER_MAP[config.template]}`
                    : ""
                }/*`,
                ...excludedFiles,
              ],
              `${actualRoot}/${mod}`,
              {
                overwrite: true,
              }
            )
          )
        );
      } catch (error) {
        logger.log(chalk.bold(chalk.red("❌ clone failed!")));
        throw error;
      } finally {
        // clean up temp folder
        await Promise.all([removeDir(tempRoot), removeDir(tempTemplateRoot)]);
      }
      logger.log(chalk.bold(chalk.green("✅ cloned successfully!")));
      await notifyUpdate();
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
    create: async (template, directory, options = {}) => {
      const { branch = "master" } = options;
      if (!template) {
        const { template: selectedTemplate } = await prompts({
          name: "template",
          type: "autocomplete",
          message: "Pick a template",
          suggest: (input, choices) =>
            Promise.resolve(
              choices.filter(
                (i) =>
                  i.title.toLowerCase().includes(input.toLowerCase()) ||
                  i.value.toLowerCase().includes(input.toLowerCase())
              )
            ),
          choices: [
            {
              title: "[TS] Material UI - Next.js App Router",
              value: "material-ui-nextjs-ts",
            },
            {
              title: "[TS] Material UI - Next.js Pages Router",
              value: "material-ui-nextjs-pages-router-ts",
            },
            {
              title: "[TS] Material UI - Remix",
              value: "material-ui-remix-ts",
            },
            {
              title: "[TS] Material UI - Vite",
              value: "material-ui-vite-ts",
            },
            {
              title: "[TS] Base UI - Next.js Tailwind",
              value: "base-ui-nextjs-tailwind-ts",
            },
            {
              title: "[TS] Base UI - Vite Tailwind",
              value: "base-ui-vite-tailwind-ts",
            },
            {
              title: "[TS] Joy UI - Next.js",
              value: "joy-ui-nextjs-ts",
            },
            { title: "[TS] Joy UI - Vite", value: "joy-ui-vite-ts" },
            {
              title: "[TS] Material UI - Next.js v4 to v5 Migration",
              value: "material-ui-nextjs-ts-v4-v5-migration",
            },
            {
              title: "[TS] Material UI - CRA",
              value: "material-ui-cra-ts",
            },
            {
              title: "[TS] Material UI - CRA, styled-components",
              value: "material-ui-cra-styled-components-ts",
            },
            {
              title: "[TS] Material UI - CRA, Tailwind",
              value: "material-ui-cra-tailwind-ts",
            },
            { title: "[TS] Base UI - CRA", value: "base-ui-cra-ts" },
            { title: "[TS] Joy UI - CRA", value: "joy-ui-cra-ts" },
            {
              title: "Material UI - CRA, styled-components",
              value: "material-ui-cra-styled-components",
            },
            {
              title: "Material UI - Express SSR",
              value: "material-ui-express-ssr",
            },
            { title: "Material UI - Gatsby", value: "material-ui-gatsby" },
            { title: "Material UI - Next.js", value: "material-ui-nextjs" },
            {
              title: "Material UI - Next.js Pages Router",
              value: "material-ui-nextjs-pages-router",
            },
            { title: "Material UI - Preact", value: "material-ui-preact" },
            { title: "Material UI - via CDN", value: "material-ui-via-cdn" },
            { title: "Material UI - Vite", value: "material-ui-vite" },
            { title: "Material UI - CRA", value: "material-ui-cra" },
            { title: "Base UI - CRA", value: "base-ui-cra" },
            {
              title: "Base UI - Vite Tailwind",
              value: "base-ui-vite-tailwind",
            },
          ],
        });
        template = selectedTemplate;
      }
      if (!directory) {
        const { dir } = await prompts({
          name: "dir",
          type: "text",
          message: "Type a folder name",
          initial: template,
        });
        directory = dir;
      }
      logger.info(`⏳ pulling the template to ${chalk.bold(directory)}`);
      const root = path.resolve(process.cwd(), directory);
      fs.mkdirSync(root, { recursive: true });
      try {
        await pipeline(
          got.stream(
            `https://codeload.github.com/mui/material-ui/tar.gz/${branch}`
          ),
          tar.extract({ cwd: root, strip: 3 }, [
            `material-ui-${branch}/examples/${template}`,
          ])
        );
      } catch (error) {
        logger.log(chalk.bold(chalk.red("❌ clone failed!")));
        throw error;
      }
      logger.log(chalk.bold(chalk.green("✅ created successfully!")));
      logger.log(`👉 "cd ${directory}" and install the dependencies`);
      await notifyUpdate();
    },
  },
});

program.parse(process.argv);
