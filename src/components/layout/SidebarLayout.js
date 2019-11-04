import React from 'react';
import last from 'lodash/last';
import dropRight from 'lodash/dropRight';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import { makeStyles } from '@material-ui/styles';
import {
  Header as LayoutHeader,
  Sidebar,
  SidebarTrigger,
  SidebarTriggerIcon,
  CollapseBtn,
  CollapseIcon,
  Content,
  Footer as LayoutFooter,
  useSidebarStyles,
  useHeaderStyles,
} from '@mui-treasury/layout';
import Toolbar from '@material-ui/core/Toolbar';
import MENUS, { PKG } from 'constants/menus';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { NestedMenuList } from '@mui-treasury/components';
import jupiterNestedMenuStyles from '@mui-treasury/styles/nestedMenu/jupiter';

const useJupiterNestedMenuStyles = makeStyles(jupiterNestedMenuStyles);

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    header: {
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
  const styles = useStyles();
  const headerStyles = useHeaderStyles();
  const sidebarStyles = useSidebarStyles();
  const footerStyles = useFooterStyles();
  const jupiterStyles = useJupiterNestedMenuStyles();
  return (
    <Location>
      {({ location }) => {
        const paths = location.pathname.split('/');
        const lastPath = last(paths) || last(dropRight(paths));
        return (
          <>
            <LayoutHeader className={styles.header}>
              <Toolbar>
                <SidebarTrigger className={headerStyles.leftTrigger}>
                  <SidebarTriggerIcon />
                </SidebarTrigger>
                <Header />
              </Toolbar>
            </LayoutHeader>
            <Sidebar>
              <div className={sidebarStyles.container}>
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
              </div>
              <CollapseBtn className={sidebarStyles.collapseBtn}>
                <CollapseIcon />
              </CollapseBtn>
            </Sidebar>
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
