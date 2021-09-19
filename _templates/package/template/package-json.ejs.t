---
to: packages/<%=h.toNamePath(name)%>/package.json
unless_exists: true
---
{
  "name": "@mui-treasury/<%=h.toNamePath(name)%>",
  "private": true,
  "description": "mui-treasury | <%=h.toNamePath(name)%>",
  "author": "siriwatknp <siriwatkunaporn@gmail.com>",
  "homepage": "https://github.com/siriwatknp/mui-treasury#readme",
  "license": "MIT",
  "sideEffects": false,
  "repository": {
    "type": "git",
    "url": "git+https://github.com/siriwatknp/mui-treasury.git"
  },
  "scripts": {
    "compile-js": "rimraf javascript && tsc -p tsconfig.js.json",
    "compile-js:watch": "tsc -p tsconfig.js.json --watch",
    "clean": "rimraf dist"
  },
  "bugs": {
    "url": "https://github.com/siriwatknp/mui-treasury/issues"
  }
}
