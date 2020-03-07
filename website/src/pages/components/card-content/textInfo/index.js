import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import TextInfoCardContent from 'docs/components/cardContent/textInfo/TextInfoCardContentDemo';

const TextInfoCardContentPage = () => {
  return (
    <ComponentShowcase
      metadata={TextInfoCardContent.metadata}
      renderComponent={() => <TextInfoCardContent />}
    />
  );
};

TextInfoCardContentPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default TextInfoCardContentPage;

