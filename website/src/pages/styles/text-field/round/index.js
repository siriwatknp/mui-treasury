import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import RoundTextField from 'docs/styles/textField/round/RoundTextFieldStyle';

const RoundTextFieldStylePage = () => {
  return (
    <ComponentShowcase
      metadata={RoundTextField.metadata}
      renderComponent={() => <RoundTextField />}
    />
  );
};

RoundTextFieldStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default RoundTextFieldStylePage;

