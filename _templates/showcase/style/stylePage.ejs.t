---
to: website/src/pages/styles/<%= h.changeCase.param(category) %>/<%= name %>/index.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import <%= displayName %> from 'docs/styles/<%= category %>/<%= name %>/<%= displayName %>Style';

const <%= displayName %>StylePage = () => {
  return (
    <ComponentShowcase
      metadata={<%= displayName %>.metadata}
      renderComponent={() => <<%= displayName %> />}
    />
  );
};

<%= displayName %>StylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default <%= displayName %>StylePage;

