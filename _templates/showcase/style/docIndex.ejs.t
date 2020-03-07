---
to: website/src/docs/styles/<%= category %>/<%= name %>/index.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category) + "Style" %>export { default } from './<%= displayName %>';
