// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  // Since prettier 3.0, manually specifying plugins is required
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  // This plugin's options
  importOrder: [
    "react",
    "<TYPES>",
    "<TYPES>^[.]",
    "<THIRD_PARTY_MODULES>",
    "^[.]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
