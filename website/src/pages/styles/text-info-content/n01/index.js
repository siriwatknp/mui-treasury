import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N01TextInfoContent from 'docs/styles/textInfoContent/n01/N01TextInfoContentStyle';

const N01TextInfoContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N01TextInfoContent.metadata}
      renderComponent={() => <N01TextInfoContent />}
    />
  );
};

N01TextInfoContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N01TextInfoContentStylePage;

