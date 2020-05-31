import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import ShowcaseCard from 'docs/components/card/showcase/ShowcaseCardDemo';

const ShowcaseCardPage = () => {
  return (
    <ComponentShowcase
      metadata={ShowcaseCard.metadata}
      renderComponent={() => <ShowcaseCard />}
    />
  );
};

ShowcaseCardPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default ShowcaseCardPage;

