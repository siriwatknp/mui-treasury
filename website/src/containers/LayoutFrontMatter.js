import { graphql, useStaticQuery } from 'gatsby';

const LayoutFrontMatter = ({ children, match }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "layout" } } }
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

export default LayoutFrontMatter;
