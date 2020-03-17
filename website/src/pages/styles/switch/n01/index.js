import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N01Switch from 'docs/styles/switch/n01/N01SwitchStyle';

const N01SwitchStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N01Switch.metadata}
      renderComponent={() => <N01Switch />}
    />
  );
};

N01SwitchStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N01SwitchStylePage;

