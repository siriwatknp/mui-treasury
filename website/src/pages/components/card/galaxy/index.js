import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import GalaxyCard from 'docs/components/card/galaxy/GalaxyCardDemo';

const GalaxyCardPage = () => {
  return (
    <ComponentShowcase
      metadata={GalaxyCard.metadata}
      renderComponent={() => <GalaxyCard />}
    />
  );
};

GalaxyCardPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default GalaxyCardPage;

