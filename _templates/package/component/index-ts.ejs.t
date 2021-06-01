---
to: packages/<%=h.toNamePath(name)%>/src/index.ts
unless_exists: true
---
import "./theme-extended";

export * from "./<%=h.toName(name)%>";
