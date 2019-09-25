module.exports = {
  presets: ['@babel/react'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    // for IE 11 support
    '@babel/plugin-transform-object-assign',
  ],
};
