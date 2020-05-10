import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Root } from '@mui-treasury/layout';
import { ThemeWrapper } from './utils/theme';
import banner from './assets/mui-treasury_banner_minified.jpg';
import PageLayout from './components/layout/PageLayout';
import createPath, { muiTreasuryScheme } from './modules/path';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './global.css';
import './fontawesome';

const App = ({ children, location }) => {
  const path = React.useMemo(() => createPath(location), [location]);
  muiTreasuryScheme.configureEdgeSidebar(builder => {
    builder.update('primarySidebar', path.parseConfig);
    builder.hide('primarySidebar', location.pathname === '/');
  });
  return (
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
      </Helmet>
      {path.wrappedByLayout ? (
        <ThemeWrapper>
          <Root themeProviderOmitted scheme={muiTreasuryScheme}>
            <PageLayout
              menus={path.sidebarMenus}
              getOpenKeys={path.getOpenKeys}
              hamburgerHidden={path.hamburgerHidden}
            >
              {children}
            </PageLayout>
          </Root>
        </ThemeWrapper>
      ) : (
        children
      )}
    </>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
