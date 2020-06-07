---
to: website/src/docs/components/<%= category %>/index.ts
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category) + "Demo" %>export * from './<%= name %>/<%= displayName %>'
