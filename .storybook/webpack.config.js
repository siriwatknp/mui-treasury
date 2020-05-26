// module.exports = async ({ config }) =>
//   console.dir(config.plugins, { depth: null }) || config;

module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          assets: './website/src/assets',
          components: './website/src/components',
          containers: './website/src/containers',
          utils: './website/src/utils',
          logics: './website/src/logics',
          constants: './website/src/constants',
          '@mui-treasury/components/src': './packages/mui-components/src',
          '@mui-treasury/components': './packages/mui-components/src',
          '@mui-treasury/utils/src': './packages/mui-utils/src',
          '@mui-treasury/utils': './packages/mui-utils/src',
          '@mui-treasury/layout/src': './packages/mui-layout/src',
          '@mui-treasury/layout': './packages/mui-layout/src',
          '@mui-treasury/styles/src': './packages/mui-styles/src',
          '@mui-treasury/styles': './packages/mui-styles/src',
        },
      },
    ],
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  return config;
};
