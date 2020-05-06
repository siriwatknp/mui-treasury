module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: process.env.BABEL_ENV === 'esm' ? false : 'commonjs',
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    // for IE 11 support
    '@babel/plugin-transform-object-assign',
  ]
};
