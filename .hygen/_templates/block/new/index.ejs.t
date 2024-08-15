---
to: ../blocks/<%= h.toFolder(name) %>/index.ts
unless_exists: true
---
export * from "./<%=h.toName(name)%>";
