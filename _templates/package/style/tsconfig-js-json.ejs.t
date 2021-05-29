---
to: packages/<%=h.toNamePath(name)%>/tsconfig.js.json
unless_exists: true
---
{
  "extends": "../../tsconfig.js.json",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "javascript"
  }
}
