import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N03TextInfoContent from 'docs/styles/textInfoContent/n03/N03TextInfoContentStyle';

const N03TextInfoContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N03TextInfoContent.metadata}
      renderComponent={() => <N03TextInfoContent />}
    />
  );
};

N03TextInfoContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N03TextInfoContentStylePage;

