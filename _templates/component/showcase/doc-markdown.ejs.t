---
to: website/src/docs/components/<%= category %>/<%= name %>/index.md
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>---
path: 'components/<%= category %>/<%= name %>'
---

`embed:components/<%= category %>/<%= name %>/<%= displayName %>Demo.tsx`
