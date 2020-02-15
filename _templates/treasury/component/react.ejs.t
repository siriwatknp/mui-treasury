---
to: packages/mui-components/src/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';
import PropTypes from 'prop-types';

const <%= displayName %> = () => {
  return <div><%= displayName %></div>
};

<%= displayName %>.propTypes = {};
<%= displayName %>.defaultProps = {};

export default <%= displayName %>;

