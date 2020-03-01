import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const FrontMatter = ({ children, match }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
          }
          html
        }
      }
    }
  `);
  const {
    allMarkdownRemark: { nodes },
  } = data;
  const result = React.useMemo(
    () => nodes.find(({ frontmatter: { path } }) => path === match),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [match, nodes.length]
  );
  if (!match || !result) {
    return null;
  }
  return children(result);
};

FrontMatter.propTypes = {
  children: PropTypes.func.isRequired,
  match: PropTypes.string,
};
FrontMatter.defaultProps = {
  match: '',
};

export default FrontMatter;
