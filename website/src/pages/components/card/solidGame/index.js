import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import SolidGameCard from 'docs/components/card/solidGame/SolidGameCardDemo';

const SolidGameCardPage = () => {
  return (
    <ComponentShowcase
      metadata={SolidGameCard.metadata}
      renderComponent={() => <SolidGameCard />}
    />
  );
};

SolidGameCardPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default SolidGameCardPage;

