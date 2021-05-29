module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: process.env.BABEL_ENV === "esm" ? false : "commonjs",
        targets: {
          esmodules: process.env.BABEL_ENV === "esm",
        },
        shippedProposals: process.env.BABEL_ENV === "esm",
      },
    ],
    "@babel/react",
    "@babel/typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    "babel-plugin-optimize-clsx",
    // for IE 11 support
    "@babel/plugin-transform-object-assign",
  ],
};
