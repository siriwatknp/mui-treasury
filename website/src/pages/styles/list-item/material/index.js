import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import MaterialListItem from 'docs/styles/listItem/material/MaterialListItemStyle';

const MaterialListItemStylePage = () => {
  return (
    <ComponentShowcase
      metadata={MaterialListItem.metadata}
      renderComponent={() => <MaterialListItem />}
    />
  );
};

MaterialListItemStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default MaterialListItemStylePage;

