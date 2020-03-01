import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import ArrowWhiteButton from 'docs/styles/button/arrowWhite/ArrowWhiteButtonDemo';

const ArrowWhiteButtonPage = () => {
  return (
    <ComponentShowcase
      metadata={ArrowWhiteButton.metadata}
      renderComponent={() => <ArrowWhiteButton />}
    />
  );
};

ArrowWhiteButtonPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default ArrowWhiteButtonPage;

