import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import GmailTabs from 'docs/components/tabs/gmail/GmailTabsDemo';

const GmailTabsPage = () => {
  return (
    <ComponentShowcase
      metadata={GmailTabs.metadata}
      renderComponent={() => <GmailTabs />}
    />
  );
};

GmailTabsPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default GmailTabsPage;

