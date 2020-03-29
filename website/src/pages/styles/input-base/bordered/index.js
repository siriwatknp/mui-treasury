import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import BorderedInputBase from 'docs/styles/inputBase/bordered/BorderedInputBaseStyle';

const BorderedInputBaseStylePage = () => {
  return (
    <ComponentShowcase
      metadata={BorderedInputBase.metadata}
      renderComponent={() => <BorderedInputBase />}
    />
  );
};

BorderedInputBaseStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default BorderedInputBaseStylePage;

