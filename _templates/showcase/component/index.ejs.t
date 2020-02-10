---
to: website/src/docs/components/<%= category %>/<%= name %>/index.md
unless_exists: true
---
<%displayName = h.capitalize(name) + h.capitalize(category)%>---
category: 'component'
path: '<%= category %>/<%= name %>'
---

`embed:components/<%= category %>/<%= name %>/<%= displayName %>.js`
