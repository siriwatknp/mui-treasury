import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import ArrowDarkButton from 'docs/styles/button/arrowDark/ArrowDarkButtonDemo';

const ArrowDarkButtonPage = () => {
  return (
    <ComponentShowcase
      metadata={ArrowDarkButton.metadata}
      renderComponent={() => <ArrowDarkButton />}
    />
  );
};

ArrowDarkButtonPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default ArrowDarkButtonPage;

