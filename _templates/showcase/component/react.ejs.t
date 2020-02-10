---
to: website/src/docs/components/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';

const <%= displayName %> = () => {
  return <div><%= displayName %></div>
};
// hide-start
<%= displayName %>.metadata = {
  title: '<%= h.changeCase.title(name) %>',
  path: '<%= category %>/<%= name %>',
  creators: [require('constants/creators').<%= by %>], // add yourself to creators.js first
  createdAt: '<%= h.now() %>',
};
// hide-end

export default <%= displayName %>;