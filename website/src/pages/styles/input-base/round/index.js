import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import RoundInputBase from 'docs/styles/inputBase/round/RoundInputBaseStyle';

const RoundInputBaseStylePage = () => {
  return (
    <ComponentShowcase
      metadata={RoundInputBase.metadata}
      renderComponent={() => <RoundInputBase />}
    />
  );
};

RoundInputBaseStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default RoundInputBaseStylePage;

