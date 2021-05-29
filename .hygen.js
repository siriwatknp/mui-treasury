const changeCase = require("change-case");
module.exports = {
  helpers: {
    toName: (s) =>
      changeCase.pascal(s.replace("component-", "").replace("style-", "")),
    toNameCamel: (s) =>
      changeCase.camel(s.replace("component-", "").replace("style-", "")),
    toNamePath: (s) => s.toLowerCase(),
  },
};
