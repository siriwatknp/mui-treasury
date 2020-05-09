import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import CreditCard from '@material-ui/icons/CreditCard';
import Close from '@material-ui/icons/Close';
import Layout, {
  Root,
  getHeader,
  getContent,
  getFullscreen,
  getDrawerSidebar,
  getInsetContainer,
  getInsetSidebar,
  getInsetFooter,
} from '@mui-treasury/layout';
import {
  dailyShoppingTheme,
  DailyHeader,
  DailyCart,
  DailyCheckout,
  DailySummary,
} from '@mui-treasury/mockup/brands/dailyShopping';
import styled from 'styled-components';

const Header = getHeader(styled);
const Content = getContent(styled);
const Fullscreen = getFullscreen(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const InsetSidebar = getInsetSidebar(styled);
const InsetFooter = getInsetFooter(styled);
const InsetContainer = getInsetContainer(styled);

const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    backgroundColor: '#ffffff',
  },
  toolbar: {},
  edgeSidebarBody: {
    padding: '24px 0 40px 24px !important',
    background: 'none',
    boxShadow: 'none',
    right: 24,
  },
  sidebarBody: {
    padding: '24px 0 40px 24px !important',
    background: 'none',
  },
  sidebarPaper: {
    maxWidth: 400,
    padding: 16,
    background: 'none',
    boxShadow: 'none',
  },
  container: {
    minHeight: 0,
    display: 'flex',
  },
  content: {
    overflow: 'auto',
  },
  footer: {
    border: 'unset',
    position: 'relative',
    backgroundColor: '#fff',
    '&:before': {
      content: '" "',
      position: 'absolute',
      width: '100%',
      height: 24,
      top: 0,
      left: 0,
      transform: 'translateY(-100%)',
      background: 'linear-gradient(to top, #ffffff, rgba(255,255,255,0))',
    },
    [breakpoints.only('sm')]: {
      paddingRight: 64,
    },
    [breakpoints.up('md')]: {
      paddingBottom: 40,
    },
  },
  fab: {
    position: 'fixed',
    bottom: 16,
    right: 16,
    color: '#2E3B4D',
    '& svg': {
      fontSize: 32,
      color: '#fff',
    },
    zIndex: 1500,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    [breakpoints.up('sm')]: {
      bottom: 40,
    },
    [breakpoints.up('md')]: {
      transform: 'scale(0)',
    },
  },
  fabClose: {
    top: 8,
    right: 8,
    width: 48,
    height: 48,
  },
}));

const ShoppingCartDemo = () => {
  const styles = useStyles();
  const scheme = Layout();
  scheme.configureHeader(builder => {
    builder.create('appHeader').registerConfig('xs', {
      position: 'relative',
      initialHeight: 64,
    });
  });
  scheme.configureInsetSidebar(builder => {
    builder
      .create('insetSidebar', { anchor: 'right' })
      .registerAbsoluteConfig('md', {
        width: '33%',
      });
  });
  scheme.configureEdgeSidebar(builder => {
    builder
      .create('edgeSidebar', { anchor: 'right' })
      .registerTemporaryConfig('xs', {
        width: '88%',
      });
  });
  return (
    <Fullscreen>
      <Root theme={dailyShoppingTheme} scheme={scheme}>
        {({ setOpen, state: { sidebar } }) => {
          const { open } = sidebar.edgeSidebar;
          return (
            <>
              <CssBaseline />
              <Fab
                className={cx(styles.fab, open && styles.fabClose)}
                color={'primary'}
                onClick={() => setOpen('edgeSidebar', !open)}
              >
                {open ? <Close /> : <CreditCard />}
              </Fab>
              <Header className={styles.header}>
                <Container>
                  <DailyHeader />
                </Container>
              </Header>
              <DrawerSidebar
                PaperProps={{ className: styles.edgeSidebarBody }}
                sidebarId={'edgeSidebar'}
              >
                <DailyCheckout />
              </DrawerSidebar>
              <Content>
                <InsetContainer
                  rightSidebar={
                    <InsetSidebar
                      sidebarId={'insetSidebar'}
                      classes={{ paper: styles.sidebarBody }}
                    >
                      <DailyCheckout />
                    </InsetSidebar>
                  }
                >
                  <DailyCart />
                </InsetContainer>
              </Content>
              <InsetFooter
                InsetAvoidingViewProps={{ className: styles.footer }}
              >
                <Box pb={3}>
                  <DailySummary />
                </Box>
              </InsetFooter>
            </>
          );
        }}
      </Root>
    </Fullscreen>
  );
};

// hide-start
ShoppingCartDemo.metadata = {
  title: 'Shopping Cart',
  path: 'layout/clones/shoppingCart',
  files: [],
  relates: [],
};
// hide-end
export default ShoppingCartDemo;
