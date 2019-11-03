import React from 'react';
import last from 'lodash/last';
import dropRight from 'lodash/dropRight';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import { makeStyles } from '@material-ui/styles';
import {
  Nav,
  Header as LayoutHeader,
  Footer as LayoutFooter,
  Content,
} from 'mui-layout';
import MENUS, { PKG } from 'constants/menus';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { NestedMenuList } from '@mui-treasury/components';
import jupiterNestedMenuStyles from '@mui-treasury/styles/nestedMenu/jupiter';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';

const useJupiterNestedMenuStyles = makeStyles(jupiterNestedMenuStyles);

const useHeaderStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    root: {
      backgroundColor: palette.common.white,
      borderBottom: `1px solid ${palette.divider}`,
    },
  };
});

const useFooterStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
}));

const SidebarLayout = ({ pkg, children, getOpenKeys }) => {
  const menus = MENUS[PKG[pkg]];
  const headerStyles = useHeaderStyles();
  const footerStyles = useFooterStyles();
  const jupiterStyles = useJupiterNestedMenuStyles();
  return (
    <Location>
      {({ location }) => {
        const paths = location.pathname.split('/');
        const lastPath = last(paths) || last(dropRight(paths));
        return (
          <>
            <LayoutHeader
              classes={headerStyles}
              renderMenuIcon={open =>
                open ? <ChevronLeft /> : <MenuRounded />
              }
            >
              <Header />
            </LayoutHeader>
            <Nav
              renderIcon={collapsed =>
                collapsed ? <ChevronRight /> : <ChevronLeft />
              }
            >
              <NestedMenuList
                classes={jupiterStyles}
                selectedKey={lastPath}
                openKeys={getOpenKeys(menus, location.pathname)}
                getConfig={() => ({ toggleSeparated: false })}
                menus={menus}
                getItemProps={({ to }) =>
                  to
                    ? {
                        menuComponent: Link,
                        ListItemProps: { to, disableRipple: true },
                      }
                    : {}
                }
              />
            </Nav>
            <Content>{children}</Content>
            <LayoutFooter classes={footerStyles}>
              <Footer />
            </LayoutFooter>
          </>
        );
      }}
    </Location>
  );
};

SidebarLayout.propTypes = {
  pkg: PropTypes.oneOf(Object.keys(PKG)),
  getOpenKeys: PropTypes.func,
};
SidebarLayout.defaultProps = {
  pkg: PKG.nav,
  getOpenKeys: () => [],
};

export default SidebarLayout;
