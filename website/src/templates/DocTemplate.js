import React from 'react';
import styled from 'styled-components';
import { getInsetContainer, getInsetSidebar } from '@mui-treasury/layout';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SimpleShowcase, { Inline } from '../components/atoms/SimpleShowcase';
import CarbonAds from '../components/atoms/CarbonAds';
import CodeSandbox from '../components/atoms/CodeSandbox';
import PageNavigation from '../components/molecules/PageNavigation';
import BrandCard from '../components/molecules/BrandCard';
import { muiTreasuryScheme } from '../modules/path';
import './documentation.css';

const InsetContainer = getInsetContainer(styled);
const InsetSidebar = getInsetSidebar(styled);

const shortcodes = {
  Inline,
  Link,
  CodeSandbox,
  SimpleShowcase,
  PageNavigation,
  BrandCard,
};

muiTreasuryScheme.configureInsetSidebar(builder => {
  builder
    .create('documentSidebar', { anchor: 'right' })
    .registerStickyConfig('lg', { width: 200, top: 'unset' });
});

const DocTemplate = ({ pageContext, children }) => {
  if (!pageContext)
    return <MDXProvider components={shortcodes}>{children}</MDXProvider>;
  const { frontmatter } = pageContext;
  return (
    <InsetContainer
      className={'Documentation'}
      maxWidth={'md'}
      rightSidebar={
        <InsetSidebar sidebarId={'documentSidebar'}>
          <Box bgcolor={'common.white'} pl={'50px'}>
            <Box height={'3rem'} />
            <CarbonAds vertical />
          </Box>
        </InsetSidebar>
      }
    >
      <Box
        maxWidth={`calc(700px + 3rem)`}
        mx={'auto'}
        py={{ xs: '2rem', sm: '3rem' }}
        pr={{ xs: 2, lg: '1.5rem' }}
        pl={{ xs: 2, lg: 0 }}
        css={{ flexGrow: 1 }}
      >
        <Typography
          variant={'subtitle1'}
          color={'textSecondary'}
          style={{ letterSpacing: 1 }}
        >
          {frontmatter.category}
        </Typography>
        <h1>{frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Box>
    </InsetContainer>
  );
};

export default DocTemplate;
