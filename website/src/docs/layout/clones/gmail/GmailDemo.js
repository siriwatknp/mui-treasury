import React from 'react';
import { useLocation, useNavigate } from '@reach/router';
import styled from 'styled-components';
import Layout, {
  Root,
  getContent,
  getDrawerSidebar,
  getHeader,
  getCollapseIcon,
} from '@mui-treasury/layout';
import { StylesProvider, CssBaseline, createTheme } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import Menu from '@material-ui/icons/Menu';
import AppHeader from '@mui-treasury/mockup/brands/gmail/AppHeader';
import AppSidebar from '@mui-treasury/mockup/brands/gmail/AppSidebar';
import AppContent from '@mui-treasury/mockup/brands/gmail/AppContent';
import AppSubSidebar from '@mui-treasury/mockup/brands/gmail/AppSubSidebar';
import CustomTrigger from '@mui-treasury/mockup/brands/gmail/CustomTrigger';

const scheme = Layout();

scheme.configureHeader(builder => {
  builder.registerConfig('xs', {
    position: 'fixed',
    clipped: true,
    initialHeight: 64,
  });
});

scheme.configureEdgeSidebar(builder => {
  builder
    .create('primarySidebar', { anchor: 'left' })
    .registerPermanentConfig('xs', {
      width: 256,
      collapsible: true,
      collapsedWidth: 72,
      autoExpanded: true,
    });

  builder
    .create('secondarySidebar', { anchor: 'right' })
    .registerPersistentConfig('sm', {
      width: 56,
      collapsible: false,
      persistentBehavior: 'fit',
    });
});

const Header = getHeader(styled);
const CollapseIcon = getCollapseIcon(styled);
const Content = getContent(styled);
const DrawerSidebar = getDrawerSidebar(styled);

const theme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
  },
});

const useDrawerStyles = makeStyles(() => ({
  paper: {
    border: 'none',
    overflow: 'visible',
  },
}));

function GmailDemo() {
  const drawerStyles = useDrawerStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const onTabIndexChange = React.useCallback(index => {
    const indicatorColors = ['ff4a3e', '2ea6ff', '3fda62', 'ffa939'];
    navigate(
      `${location.pathname}?bgColor=${indicatorColors[index]}&accent=000000&dark=true`,
      { replace: true }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StylesProvider injectFirst>
      <Root
        theme={theme}
        scheme={scheme}
        initialState={{
          sidebar: {
            primarySidebar: { collapsed: true },
            secondarySidebar: { open: true },
          },
        }}
      >
        <CssBaseline />
        <Header>
          <AppHeader
            collapse={
              <CollapseIcon sidebarId={'primarySidebar'}>
                {() => <Menu />}
              </CollapseIcon>
            }
          />
        </Header>
        <DrawerSidebar classes={drawerStyles} sidebarId={'primarySidebar'}>
          <AppSidebar />
        </DrawerSidebar>
        <Content>
          <AppContent onTabIndexChange={onTabIndexChange} />
        </Content>
        <DrawerSidebar sidebarId={'secondarySidebar'}>
          <AppSubSidebar />
        </DrawerSidebar>
        <CustomTrigger />
      </Root>
    </StylesProvider>
  );
}
// hide-start
GmailDemo.metadata = {
  title: 'Gmail',
  path: 'layout/clones/gmail',
  files: [],
  relates: [],
};
// hide-end

export default GmailDemo;
