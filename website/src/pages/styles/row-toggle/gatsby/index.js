import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import GatsbyRowToggle from 'docs/styles/rowToggle/gatsby/GatsbyRowToggleStyle';

const GatsbyRowToggleStylePage = () => {
  return (
    <ComponentShowcase
      metadata={GatsbyRowToggle.metadata}
      renderComponent={() => <GatsbyRowToggle />}
    />
  );
};

GatsbyRowToggleStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default GatsbyRowToggleStylePage;

