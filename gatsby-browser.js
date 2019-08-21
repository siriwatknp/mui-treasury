import React from 'react';
import Helmet from 'react-helmet';
import { Root, createDefaultLayout } from '@mui-treasury/layout';
import { ThemeWrapper } from './src/utils/theme';

const layoutConfig = createDefaultLayout({
  navWidth: 288,
  navVariant: {
    xs: 'temporary',
    sm: 'permanent',
  },
  clipped: true,
  headerPosition: 'sticky',
});

export const wrapRootElement = ({ element, ...rest }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.1/css/all.css"
        integrity="sha384-y++enYq9sdV7msNmXr08kJdkX4zEI1gMjjkw0l9ttOepH7fMdhb7CePwuRQCfwCr"
        crossOrigin="anonymous"
      />
    </Helmet>
    <ThemeWrapper>
      <Root config={layoutConfig}>{element}</Root>
    </ThemeWrapper>
  </>
);
