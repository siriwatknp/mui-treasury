---
to: packages/<%=h.toNamePath(name)%>/src/index.tsx
unless_exists: true
---
export { default as <%= h.toName(name) %> } from './<%= h.toName(name) %>';
