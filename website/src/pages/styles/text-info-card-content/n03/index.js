import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N03TextInfoCardContent from 'docs/styles/textInfoCardContent/n03/N03TextInfoCardContentStyle';

const N03TextInfoCardContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N03TextInfoCardContent.metadata}
      renderComponent={() => <N03TextInfoCardContent />}
    />
  );
};

N03TextInfoCardContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N03TextInfoCardContentStylePage;

