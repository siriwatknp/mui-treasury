import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import GatsbyCollapsibleMenu from 'docs/styles/collapsibleMenu/gatsby/GatsbyCollapsibleMenuStyle';

const GatsbyCollapsibleMenuStylePage = () => {
  return (
    <ComponentShowcase
      metadata={GatsbyCollapsibleMenu.metadata}
      renderComponent={() => <GatsbyCollapsibleMenu />}
    />
  );
};

GatsbyCollapsibleMenuStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default GatsbyCollapsibleMenuStylePage;

