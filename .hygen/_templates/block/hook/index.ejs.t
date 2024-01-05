---
to: ../blocks/<%=name%>/src/index.ts
unless_exists: true
---
export * from "./<%=h.toNameCamel(name)%>";
