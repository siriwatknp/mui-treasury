---
to: tsconfig.json
inject: true
before: hygen-hook-target
---
      "@mui-treasury/<%=h.toNamePath(name)%>": ["packages/<%=h.toNamePath(name)%>/src/"],