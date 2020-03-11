---
to: website/src/docs/styles/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>Style.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';

const <%= displayName %>Style = () => {
  return <div><%= displayName %></div>
};
// hide-start
<%= displayName %>Style.metadata = {
  title: '<%= h.changeCase.title(name) %>',
  path: 'styles/<%= category %>/<%= name %>',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').<%= by %>], // add yourself to creators.js first
  createdAt: '<%= h.now() %>',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: '<%= category %>/<%= name %>/<%= name %><%= h.changeCase.pascal(category) %>.styles.js'},
  ],
};
// hide-end

export default <%= displayName %>Style;