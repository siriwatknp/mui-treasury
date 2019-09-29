import React from 'react';
import Helmet from 'react-helmet';
import { Root, createDefaultLayout } from '@mui-treasury/layout';
import { ThemeWrapper } from './utils/theme';
import './global.css';
import banner from './assets/mui-treasury_banner_minified.jpg';

const layoutConfig = createDefaultLayout({
  navWidth: 288,
  navVariant: {
    xs: 'temporary',
    sm: 'permanent',
  },
  clipped: true,
  headerPosition: 'sticky',
});

const App = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Mui Treasury</title>
      <meta
        name="title"
        content="Mui Treasury — Predefined Material UI Components"
      />
      <meta
        name="description"
        content="The mission is to boost any projects that want to shake the world, so that our future is better than today. This is an open-source project that provides a collection of ready-to-use components based on Material-UI."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mui-treasury.com" />
      <meta
        property="og:title"
        content="Mui Treasury — Predefined Material UI Components"
      />
      <meta
        property="og:description"
        content="The mission is to boost any projects that want to shake the world, so that our future is better than today. This is an open-source project that provides a collection of ready-to-use components based on Material-UI."
      />
      <meta property="og:image" content={banner} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mui-treasury.com/" />
      <meta
        property="twitter:title"
        content="Mui Treasury — Predefined Material UI Components"
      />
      <meta
        property="twitter:description"
        content="The mission is to boost any projects that want to shake the world, so that our future is better than today. This is an open-source project that provides a collection of ready-to-use components based on Material-UI."
      />
      <meta property="twitter:image" content={banner} />
      <script
        defer
        src="https://pro.fontawesome.com/releases/v5.11.2/js/all.js"
        integrity="sha384-S++1cFhwpxbtRScUliTyprAMK33gMHbukurY4rNyt9CxIniGm6PfioUsQPoAITQJ"
        crossOrigin="anonymous"
      />
    </Helmet>
    <ThemeWrapper>
      <Root config={layoutConfig}>{children}</Root>
    </ThemeWrapper>
  </>
);

export default App;
