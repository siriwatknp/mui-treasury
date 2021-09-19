const changeCase = require("change-case");
module.exports = {
  helpers: {
    toName: (s) =>
      changeCase.pascal(
        s
          .replace("component-", "")
          .replace("style-", "")
          .replace("template-", "")
      ),
    toNameCamel: (s) =>
      changeCase.camel(
        s
          .replace("component-", "")
          .replace("style-", "")
          .replace("template-", "")
      ),
    toNamePath: (s) => s.toLowerCase(),
    extractComponentName: (s) => changeCase.pascal(s.split("-")[1]), // style-sociallink-ball
    extractComponentPkg: (s) => changeCase.lowerCase(s.split("-")[1]), // style-sociallink-ball
    extractStyleName: (s) => s.split("-")[2],
    extractStyleNamePascal: (s) => changeCase.pascal(s.split("-")[2]),
  },
};
