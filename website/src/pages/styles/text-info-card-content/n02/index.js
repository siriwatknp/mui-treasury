import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N02TextInfoCardContent from 'docs/styles/textInfoCardContent/n02/N02TextInfoCardContentStyle';

const N02TextInfoCardContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N02TextInfoCardContent.metadata}
      renderComponent={() => <N02TextInfoCardContent />}
    />
  );
};

N02TextInfoCardContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N02TextInfoCardContentStylePage;

