const changeCase = require("change-case");

module.exports = {
  helpers: {
    toName: (s) => changeCase.pascal(s),
    toNameCamel: (s) => changeCase.camel(s),
    toNamePath: (s) => s.toLowerCase(),
    getFirstPascal: (s) => changeCase.pascal(s.split("-")[0]),
    getSecondPascal: (s) => changeCase.pascal(s.split("-")[1]),
    getThirdPascal: (s) => changeCase.pascal(s.split("-")[2]),
  },
};
