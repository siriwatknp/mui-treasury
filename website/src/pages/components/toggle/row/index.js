import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import RowToggle from 'docs/components/toggle/row/RowToggleDemo';

const RowTogglePage = () => {
  return (
    <ComponentShowcase
      metadata={RowToggle.metadata}
      renderComponent={() => <RowToggle />}
    />
  );
};

RowTogglePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default RowTogglePage;

