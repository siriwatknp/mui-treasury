import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import CollapsibleMenu from 'docs/components/menu/collapsible/CollapsibleMenuDemo';

const CollapsibleMenuPage = () => {
  return (
    <ComponentShowcase
      metadata={CollapsibleMenu.metadata}
      renderComponent={() => <CollapsibleMenu />}
    />
  );
};

CollapsibleMenuPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default CollapsibleMenuPage;

