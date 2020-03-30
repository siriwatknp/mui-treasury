import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import ShadeInputBase from 'docs/styles/inputBase/shade/ShadeInputBaseStyle';

const ShadeInputBaseStylePage = () => {
  return (
    <ComponentShowcase
      metadata={ShadeInputBase.metadata}
      renderComponent={() => <ShadeInputBase />}
    />
  );
};

ShadeInputBaseStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default ShadeInputBaseStylePage;

