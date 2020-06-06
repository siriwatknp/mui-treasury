---
to: website/src/docs/styles/<%= category %>/index.ts
inject: true
append: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category) + "Style" %>export * from './<%= name %>/<%= displayName %>'
