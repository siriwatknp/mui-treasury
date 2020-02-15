---
to: packages/mui-components/src/<%= category %>/<%= name %>/index.js
unless_exists: true
---
<% fileName = h.changeCase.pascal(name) + h.changeCase.pascal(category) %>export { default } from './<%= fileName %>';
