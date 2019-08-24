import React from 'react';
import last from 'lodash/last';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import {
  Nav,
  Header as LayoutHeader,
  Footer as LayoutFooter,
  Content,
} from '@mui-treasury/layout';
import MENUS, { PKG } from 'constants/menus';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { makeStyles } from '@material-ui/styles';
import { NestedMenuList } from '@mui-treasury/components';
import { useJupiterNestedMenu } from '@mui-treasury/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';

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
  const jupiterStyles = useJupiterNestedMenu();
  return (
    <Location>
      {({ location }) => {
        const lastPath = last(location.pathname.split('/'));
        console.log('lastPath', lastPath);
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
                  to ? { menuComponent: Link, ListItemProps: { to } } : {}
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
