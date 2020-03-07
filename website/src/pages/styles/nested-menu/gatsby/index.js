import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import GatsbyNestedMenu from 'docs/styles/nestedMenu/gatsby/GatsbyNestedMenuStyle';

const GatsbyNestedMenuStylePage = () => {
  return (
    <ComponentShowcase
      metadata={GatsbyNestedMenu.metadata}
      renderComponent={() => <GatsbyNestedMenu />}
    />
  );
};

GatsbyNestedMenuStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default GatsbyNestedMenuStylePage;

