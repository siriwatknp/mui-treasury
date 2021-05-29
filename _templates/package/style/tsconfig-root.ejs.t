---
to: tsconfig.json
inject: true
before: hygen-style-target
---
      "@mui-treasury/<%= h.toNamePath(name) %>": ["packages/<%= h.toNamePath(name) %>/src/"],