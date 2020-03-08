import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import JupiterCollapsibleMenu from 'docs/styles/collapsibleMenu/jupiter/JupiterCollapsibleMenuStyle';

const JupiterCollapsibleMenuStylePage = () => {
  return (
    <ComponentShowcase
      metadata={JupiterCollapsibleMenu.metadata}
      renderComponent={() => <JupiterCollapsibleMenu />}
    />
  );
};

JupiterCollapsibleMenuStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default JupiterCollapsibleMenuStylePage;

