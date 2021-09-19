---
to: packages/templates/template-<%= h.extractComponentPkg(name) %>.stories.tsx
inject: true
before: hygen-inject-page
skip_if: <%=h.toName(name)%>
---
  "<%=h.extractStyleName(name)%>/<%=h.toName(name)%>": React.lazy(() => import("./src/<%=h.extractComponentPkg(name)%>/<%=h.extractStyleName(name)%>/<%=h.toName(name)%>")),