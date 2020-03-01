---
to: website/src/docs/components/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>Demo.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';

const <%= displayName %>Demo = () => {
  return <div><%= displayName %></div>
};
// hide-start
<%= displayName %>Demo.metadata = {
  title: '<%= h.changeCase.title(name) %>',
  path: 'components/<%= category %>/<%= name %>',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').<%= by %>], // add yourself to creators.js first
  createdAt: '<%= h.now() %>',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-components', path: '<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) %><%= h.changeCase.pascal(category) %>.js'},
  ],
};
// hide-end

export default <%= displayName %>Demo;
