import React from 'react';
import { Link, graphql } from 'gatsby';
import { NestedMenuList } from 'mui-components/src';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <NestedMenuList
          selectedKey={'button'}
          menus={[
            { key: 'button', label: 'Button' },
            { key: 'card', label: 'Card' },
            {
              key: 'carousel',
              label: 'Carousel',
              separated: true,
              subMenus: [
                { key: 'slide', label: 'Slide' },
                { key: 'arrow', label: 'Arrow' },
                { key: 'indicator', label: 'Indicator' },
              ],
            },
            {
              key: 'header',
              label: 'Header',
              subMenus: [
                { key: 'subOne1', label: 'SubOne 1' },
                {
                  key: 'subOne2',
                  label: 'SubOne 2',
                  subMenus: [
                    { key: 'subTwo1', label: 'SubTwo 1' },
                    { key: 'subTwo2', label: 'SubTwo 2' },
                    { key: 'subTwo3', label: 'SubTwo 3' },
                  ],
                },
                { key: 'subOne3', label: 'SubOne 3' },
              ],
            },
          ]}
        />
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
