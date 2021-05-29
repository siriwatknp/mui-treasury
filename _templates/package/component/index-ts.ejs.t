---
to: packages/<%=h.toNamePath(name)%>/src/index.ts
unless_exists: true
---
export * from "./<%=h.toName(name)%>";
