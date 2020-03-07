---
to: website/src/docs/components/<%= category %>/<%= name %>/index.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category) + "Demo" %>export { default } from './<%= displayName %>';
