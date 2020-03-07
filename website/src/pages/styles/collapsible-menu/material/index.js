import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import MaterialCollapsibleMenu from 'docs/styles/collapsibleMenu/material/MaterialCollapsibleMenuStyle';

const MaterialCollapsibleMenuStylePage = () => {
  return (
    <ComponentShowcase
      metadata={MaterialCollapsibleMenu.metadata}
      renderComponent={() => <MaterialCollapsibleMenu />}
    />
  );
};

MaterialCollapsibleMenuStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default MaterialCollapsibleMenuStylePage;

