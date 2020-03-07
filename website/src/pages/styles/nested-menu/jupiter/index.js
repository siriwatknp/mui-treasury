import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import JupiterNestedMenu from 'docs/styles/nestedMenu/jupiter/JupiterNestedMenuStyle';

const JupiterNestedMenuStylePage = () => {
  return (
    <ComponentShowcase
      metadata={JupiterNestedMenu.metadata}
      renderComponent={() => <JupiterNestedMenu />}
    />
  );
};

JupiterNestedMenuStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default JupiterNestedMenuStylePage;

