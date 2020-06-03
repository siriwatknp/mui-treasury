import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import News3Card from 'docs/components/card/news3/News3CardDemo';

const News3CardPage = () => {
  return (
    <ComponentShowcase
      metadata={News3Card.metadata}
      renderComponent={() => <News3Card />}
    />
  );
};

News3CardPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default News3CardPage;

