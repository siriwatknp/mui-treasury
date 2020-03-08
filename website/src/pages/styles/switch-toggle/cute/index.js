import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import CuteSwitchToggle from 'docs/styles/switchToggle/cute/CuteSwitchToggleStyle';

const CuteSwitchToggleStylePage = () => {
  return (
    <ComponentShowcase
      metadata={CuteSwitchToggle.metadata}
      renderComponent={() => <CuteSwitchToggle />}
    />
  );
};

CuteSwitchToggleStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default CuteSwitchToggleStylePage;

