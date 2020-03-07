import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import BlogTextInfoCardContent from 'docs/styles/textInfoCardContent/blog/BlogTextInfoCardContentStyle';

const BlogTextInfoCardContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={BlogTextInfoCardContent.metadata}
      renderComponent={() => <BlogTextInfoCardContent />}
    />
  );
};

BlogTextInfoCardContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default BlogTextInfoCardContentStylePage;

