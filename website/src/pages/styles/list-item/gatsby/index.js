import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import GatsbyListItem from 'docs/styles/listItem/gatsby/GatsbyListItemStyle';

const GatsbyListItemStylePage = () => {
  return (
    <ComponentShowcase
      metadata={GatsbyListItem.metadata}
      renderComponent={() => <GatsbyListItem />}
    />
  );
};

GatsbyListItemStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default GatsbyListItemStylePage;

