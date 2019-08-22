import React from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  Nav,
  Header as LayoutHeader,
  Footer as LayoutFooter,
  createDefaultLayout,
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

const config = createDefaultLayout({
  clipped: true,
  position: 'sticky',
  navVariant: {
    xs: 'temporary',
    sm: 'permanent',
  },
});

const SidebarLayout = ({ pkg }) => {
  const menus = MENUS[PKG[pkg]];
  const headerStyles = useHeaderStyles();
  const footerStyles = useFooterStyles();
  const jupiterStyles = useJupiterNestedMenu();
  return (
    <Root config={config}>
      <LayoutHeader
        classes={headerStyles}
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
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
          selectedKey={'button'}
          getConfig={() => ({ toggleSeparated: false })}
          menus={menus}
        />
      </Nav>
      <Content>
        <h1>Browse, Choose and Use. {`That's`} it.</h1>
      </Content>
      <LayoutFooter classes={footerStyles}>
        <Footer />
      </LayoutFooter>
    </Root>
  );
};

SidebarLayout.propTypes = {
  pkg: PropTypes.oneOf(Object.keys(PKG)),
};
SidebarLayout.defaultProps = {
  pkg: PKG.nav,
};

export default SidebarLayout;
