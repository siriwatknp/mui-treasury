---
to: ../blocks/<%=name%>/index.ts
unless_exists: true
---
export * from "./<%=h.toName(name)%>";
