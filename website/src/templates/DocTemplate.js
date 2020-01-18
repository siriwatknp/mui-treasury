import React from 'react';
import { graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const DocTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  return (
    <Box
      maxWidth={672}
      mx={'auto'}
      py={{ xs: '2rem', sm: '3rem' }}
      px={{ xs: 2, sm: '1.5rem' }}
    >
      <Typography variant={'subtitle1'} color={'textSecondary'}>
        {frontmatter.category}
      </Typography>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        title
      }
    }
  }
`;

export default DocTemplate;
