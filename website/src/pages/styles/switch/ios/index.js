import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import IosSwitch from 'docs/styles/switch/ios/IosSwitchStyle';

const IosSwitchStylePage = () => {
  return (
    <ComponentShowcase
      metadata={IosSwitch.metadata}
      renderComponent={() => <IosSwitch />}
    />
  );
};

IosSwitchStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default IosSwitchStylePage;

