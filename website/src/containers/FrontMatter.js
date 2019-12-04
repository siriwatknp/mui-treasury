import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const FrontMatter = ({ children, match }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "component" } } }
      ) {
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
  const result = nodes.find(({ frontmatter: { path } }) => path === match);
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
