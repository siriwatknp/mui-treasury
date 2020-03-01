import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import NestedMenuDemo from 'docs/components/menu/nested/NestedMenuDemo';

const NestedMenuPage = () => {
  return (
    <ComponentShowcase
      metadata={NestedMenuDemo.metadata}
      renderComponent={() => <NestedMenuDemo />}
    />
  );
};

NestedMenuPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
  pathContext: PropTypes.shape({}).isRequired,
};

export default NestedMenuPage;

