import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N02TextInfoContent from 'docs/styles/textInfoContent/n02/N02TextInfoContentStyle';

const N02TextInfoContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N02TextInfoContent.metadata}
      renderComponent={() => <N02TextInfoContent />}
    />
  );
};

N02TextInfoContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N02TextInfoContentStylePage;

