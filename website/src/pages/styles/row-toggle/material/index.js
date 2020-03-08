import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import MaterialRowToggle from 'docs/styles/rowToggle/material/MaterialRowToggleStyle';

const MaterialRowToggleStylePage = () => {
  return (
    <ComponentShowcase
      metadata={MaterialRowToggle.metadata}
      renderComponent={() => <MaterialRowToggle />}
    />
  );
};

MaterialRowToggleStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default MaterialRowToggleStylePage;

