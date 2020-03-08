import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import TextInfoContent from 'docs/components/content/textInfo/TextInfoContentDemo';

const TextInfoContentPage = () => {
  return (
    <ComponentShowcase
      metadata={TextInfoContent.metadata}
      renderComponent={() => <TextInfoContent />}
    />
  );
};

TextInfoContentPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default TextInfoContentPage;

