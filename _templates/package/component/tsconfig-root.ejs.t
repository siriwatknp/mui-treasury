---
to: tsconfig.json
inject: true
before: hygen-component-target
---
      "@mui-treasury/<%= h.toNamePath(name) %>": ["packages/<%= h.toNamePath(name) %>/src/"],
      "@mui-treasury/<%= h.toNamePath(name) %>/*": ["packages/<%= h.toNamePath(name) %>/src/*"],