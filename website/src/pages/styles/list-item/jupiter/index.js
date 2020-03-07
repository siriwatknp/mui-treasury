import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import JupiterListItem from 'docs/styles/listItem/jupiter/JupiterListItemStyle';

const JupiterListItemStylePage = () => {
  return (
    <ComponentShowcase
      metadata={JupiterListItem.metadata}
      renderComponent={() => <JupiterListItem />}
    />
  );
};

JupiterListItemStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default JupiterListItemStylePage;

