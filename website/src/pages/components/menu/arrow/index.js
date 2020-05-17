import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import ArrowMenu from 'docs/components/menu/arrow/ArrowMenuDemo';

const ArrowMenuPage = () => {
  return (
    <ComponentShowcase
      metadata={ArrowMenu.metadata}
      renderComponent={() => <ArrowMenu />}
    />
  );
};

ArrowMenuPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default ArrowMenuPage;

