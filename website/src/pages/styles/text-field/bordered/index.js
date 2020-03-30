import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import BorderedTextField from 'docs/styles/textField/bordered/BorderedTextFieldStyle';

const BorderedTextFieldStylePage = () => {
  return (
    <ComponentShowcase
      metadata={BorderedTextField.metadata}
      renderComponent={() => <BorderedTextField />}
    />
  );
};

BorderedTextFieldStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default BorderedTextFieldStylePage;

