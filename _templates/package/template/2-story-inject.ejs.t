---
to: packages/templates/template-<%= h.extractComponentPkg(name) %>.stories.tsx
inject: true
append: true
skip_if: export const <%=h.toName(name)%>
---
export const <%=h.extractStyleNamePascal(name)%> = createStory("<%=h.extractStyleName(name)%>/<%=h.toName(name)%>");