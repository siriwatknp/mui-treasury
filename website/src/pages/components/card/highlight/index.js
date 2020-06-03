import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import HighlightCard from 'docs/components/card/highlight/HighlightCardDemo';

const HighlightCardPage = () => {
  return (
    <ComponentShowcase
      metadata={HighlightCard.metadata}
      renderComponent={() => <HighlightCard />}
    />
  );
};

HighlightCardPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default HighlightCardPage;

