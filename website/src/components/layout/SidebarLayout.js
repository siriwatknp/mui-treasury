import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Header as LayoutHeader,
  SidebarTrigger,
  SidebarTriggerIcon,
  CollapseBtn,
  CollapseIcon,
  Content,
  Footer as LayoutFooter,
  Sidebar,
  useSidebarStyles,
  useHeaderStyles,
} from '@mui-treasury/layout';
import Toolbar from '@material-ui/core/Toolbar';
import MENUS, { PKG } from 'constants/menus';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ComponentMenuList from 'components/organisms/ComponentMenuList';

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
      <Content>{children}</Content>
      <Sidebar>
        <div className={sidebarStyles.container}>
          <ComponentMenuList menus={menus} getOpenKeys={getOpenKeys} />
        </div>
        <CollapseBtn className={sidebarStyles.collapseBtn}>
          <CollapseIcon />
        </CollapseBtn>
      </Sidebar>
      <LayoutFooter className={footerStyles.root}>
        <Footer />
      </LayoutFooter>
    </>
  );
};

SidebarLayout.propTypes = {
  pkg: PropTypes.oneOf(Object.keys(PKG)),
  getOpenKeys: PropTypes.func,
  menuListStyles: PropTypes.shape({}),
};
SidebarLayout.defaultProps = {
  pkg: PKG.nav,
  getOpenKeys: () => [],
  menuListStyles: undefined,
};

export default SidebarLayout;
