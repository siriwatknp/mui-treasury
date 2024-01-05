import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../docs/**/*.mdx",
    "../blocks/**/[!usage]*.mdx",
    "../blocks/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: false,
  },
  async webpackFinal(config, { configType }) {
    if (config.module) {
      config.module.rules = [
        ...(config.module.rules || []).map((rule) => {
          // This `/\.(js|mjs|jsx)$/` regex is added by the MDX plugin and I noticed
          // that I need to target that one
          if (
            typeof rule === "object" &&
            rule &&
            String(rule.test) === String(/\.(mjs|tsx?|jsx?)$/)
          ) {
            rule = {
              ...rule,
              resourceQuery: {
                not: [/raw/],
              },
            };
          }
          return rule;
        }),
      ];
    }
    return config;
  },
};
export default config;
