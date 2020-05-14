import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import GmailButton from 'docs/components/button/gmail/GmailButtonDemo';

const GmailButtonPage = () => {
  return (
    <ComponentShowcase
      metadata={GmailButton.metadata}
      renderComponent={() => <GmailButton />}
    />
  );
};

GmailButtonPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default GmailButtonPage;

