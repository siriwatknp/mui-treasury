---
to: packages/templates/src/<%= h.extractComponentPkg(name) %>/<%=h.extractStyleName(name)%>/<%= h.toName(name) %>.tsx
unless_exists: true
---
export { default as <%=h.toName(name)%> } from './<%=h.toName(name)%>';
