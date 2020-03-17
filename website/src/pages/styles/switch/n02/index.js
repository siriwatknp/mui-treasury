import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import N02Switch from 'docs/styles/switch/n02/N02SwitchStyle';

const N02SwitchStylePage = () => {
  return (
    <ComponentShowcase
      metadata={N02Switch.metadata}
      renderComponent={() => <N02Switch />}
    />
  );
};

N02SwitchStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default N02SwitchStylePage;

