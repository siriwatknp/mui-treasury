import React from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SimpleShowcase, { Inline } from '../components/atoms/SimpleShowcase';

const shortcodes = { Inline, Link, SimpleShowcase };

const DocTemplate = ({ pageContext, children }) => {
  const { frontmatter } = pageContext;
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
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Box>
  );
};

export default DocTemplate;
