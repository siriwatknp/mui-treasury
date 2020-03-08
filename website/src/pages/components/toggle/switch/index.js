import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import SwitchToggle from 'docs/components/toggle/switch/SwitchToggleDemo';

const SwitchTogglePage = () => {
  return (
    <ComponentShowcase
      metadata={SwitchToggle.metadata}
      renderComponent={() => <SwitchToggle />}
    />
  );
};

SwitchTogglePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default SwitchTogglePage;

