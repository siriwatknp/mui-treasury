---
to: packages/<%=h.toNamePath(name)%>/tsconfig.build.json
unless_exists: true
---
{
  "extends": "../../tsconfig.types.json",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "dist"
  }
}
