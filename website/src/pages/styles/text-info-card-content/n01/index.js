import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N01TextInfoCardContent from 'docs/styles/textInfoCardContent/n01/N01TextInfoCardContentStyle';

const N01TextInfoCardContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N01TextInfoCardContent.metadata}
      renderComponent={() => <N01TextInfoCardContent />}
    />
  );
};

N01TextInfoCardContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N01TextInfoCardContentStylePage;

