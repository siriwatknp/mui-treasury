---
to: website/src/docs/styles/<%= category %>/<%= name %>/index.md
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>---
path: 'styles/<%= category %>/<%= name %>'
---

`embed:styles/<%= category %>/<%= name %>/<%= displayName %>Style.tsx`
