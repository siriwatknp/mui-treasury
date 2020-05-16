import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import GmailSidebarItem from 'docs/components/sidebarItem/gmail/GmailSidebarItemDemo';

const GmailSidebarItemPage = () => {
  return (
    <ComponentShowcase
      metadata={GmailSidebarItem.metadata}
      renderComponent={() => <GmailSidebarItem />}
    />
  );
};

GmailSidebarItemPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default GmailSidebarItemPage;

