const changeCase = require("change-case");

module.exports = {
  helpers: {
    toName: (s) => changeCase.pascal(s),
    toNameCamel: (s) => changeCase.camel(s),
    toFolder: (s) => changeCase.param(s),
    getFirstPascal: (s) => changeCase.pascal(s.split("-")[0]),
    getFirstTitle: (s) => changeCase.title(s.split("-")[0]),
    getSecondPascal: (s) => changeCase.pascal(s.split("-")[1]),
    getSecondTitle: (s) => changeCase.title(s.split("-")[1]),
    getThirdPascal: (s) => changeCase.pascal(s.split("-")[2]),
    getThirdTitle: (s) => changeCase.title(s.split("-")[2]),
  },
};
