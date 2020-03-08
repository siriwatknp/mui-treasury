import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N04TextInfoContent from 'docs/styles/textInfoContent/n04/N04TextInfoContentStyle';

const N04TextInfoContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N04TextInfoContent.metadata}
      renderComponent={() => <N04TextInfoContent />}
    />
  );
};

N04TextInfoContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N04TextInfoContentStylePage;

