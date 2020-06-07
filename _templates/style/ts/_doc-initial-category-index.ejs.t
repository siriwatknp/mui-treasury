---
to: website/src/docs/styles/<%= category %>/index.ts
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category) + "Style" %>export * from './<%= name %>/<%= displayName %>'
