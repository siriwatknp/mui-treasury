---
to: website/src/docs/components/<%= category %>/<%= name %>/<%= h.capitalize(name) + h.capitalize(category) %>.js
unless_exists: true
---
<%displayName = h.capitalize(name) + h.capitalize(category)%>import React from 'react';

const <%= displayName %> = () => {
  return <div><%= displayName %></div>
};
// hide-start
<%= displayName %>.metadata = {
  title: '<%= displayName %>',
  path: '<%= category %>/<%= name %>',
  creators: [require('constants/creators').<%= by %>], // add yourself to creators.js first
};
// hide-end

export default <%= displayName %>;