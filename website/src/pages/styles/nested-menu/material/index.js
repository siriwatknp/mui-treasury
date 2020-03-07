import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import MaterialNestedMenu from 'docs/styles/nestedMenu/material/MaterialNestedMenuStyle';

const MaterialNestedMenuStylePage = () => {
  return (
    <ComponentShowcase
      metadata={MaterialNestedMenu.metadata}
      renderComponent={() => <MaterialNestedMenu />}
    />
  );
};

MaterialNestedMenuStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default MaterialNestedMenuStylePage;

