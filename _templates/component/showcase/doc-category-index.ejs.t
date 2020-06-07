---
to: website/src/docs/components/<%= category %>/index.ts
inject: true
append: true
skip_if: <%= h.changeCase.pascal(name) + h.changeCase.pascal(category) + "Demo" %>
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category) + "Demo" %>export * from './<%= name %>/<%= displayName %>'
