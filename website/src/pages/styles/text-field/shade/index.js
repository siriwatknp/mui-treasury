import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import ShadeTextField from 'docs/styles/textField/shade/ShadeTextFieldStyle';

const ShadeTextFieldStylePage = () => {
  return (
    <ComponentShowcase
      metadata={ShadeTextField.metadata}
      renderComponent={() => <ShadeTextField />}
    />
  );
};

ShadeTextFieldStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default ShadeTextFieldStylePage;

