import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import TeamCard from 'docs/components/card/team/TeamCardDemo';

const TeamCardPage = () => {
  return (
    <ComponentShowcase
      metadata={TeamCard.metadata}
      renderComponent={() => <TeamCard />}
    />
  );
};

TeamCardPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default TeamCardPage;

