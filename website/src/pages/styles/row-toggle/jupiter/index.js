import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import JupiterRowToggle from 'docs/styles/rowToggle/jupiter/JupiterRowToggleStyle';

const JupiterRowToggleStylePage = () => {
  return (
    <ComponentShowcase
      metadata={JupiterRowToggle.metadata}
      renderComponent={() => <JupiterRowToggle />}
    />
  );
};

JupiterRowToggleStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default JupiterRowToggleStylePage;

