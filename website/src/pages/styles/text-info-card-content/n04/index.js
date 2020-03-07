import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N04TextInfoCardContent from 'docs/styles/textInfoCardContent/n04/N04TextInfoCardContentStyle';

const N04TextInfoCardContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N04TextInfoCardContent.metadata}
      renderComponent={() => <N04TextInfoCardContent />}
    />
  );
};

N04TextInfoCardContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N04TextInfoCardContentStylePage;

