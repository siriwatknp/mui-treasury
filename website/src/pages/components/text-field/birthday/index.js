import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import BirthdayTextField from 'docs/components/textField/birthday/BirthdayTextField';

const BirthdayTextFieldPage = () => {
  return (
    <ComponentShowcase
      metadata={BirthdayTextField.metadata}
      renderComponent={() => <BirthdayTextField />}
    />
  );
};

BirthdayTextFieldPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default BirthdayTextFieldPage;

