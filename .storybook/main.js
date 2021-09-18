const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../**/*.stories.mdx",
    "../**/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-toolbars",
    "@storybook/addon-storysource",
    "@storybook/addon-links",
    "storybook-addon-mui-mode",
  ],
  babel: async (options) => ({
    ...options,
    plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]],
  }),
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          ...config.resolve.plugins,
          new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
        ],
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
  // disable typescript doc-gen for fast ui development
  typescript: {
    reactDocgen: "none",
  },
};
