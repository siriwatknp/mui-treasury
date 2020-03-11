import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import LovelySwitch from 'docs/styles/switch/lovely/LovelySwitchStyle';

const LovelySwitchStylePage = () => {
  return (
    <ComponentShowcase
      metadata={LovelySwitch.metadata}
      renderComponent={() => <LovelySwitch />}
    />
  );
};

LovelySwitchStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default LovelySwitchStylePage;

