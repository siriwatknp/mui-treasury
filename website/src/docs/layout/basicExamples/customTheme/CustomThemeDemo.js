import React from 'react';
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  getStandardScheme,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const standardScheme = getStandardScheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7d4709',
    },
    secondary: {
      main: '#fffaf2',
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        '&.Mui-selected': {
          backgroundColor: '#7d4709',
          color: '#fff',
          '& svg': {
            color: '#fff',
          },
          '&:hover': {
            backgroundColor: '#95550b',
          },
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 48,
      },
    },
  },
});

const CustomThemeDemo = () => {
  // by default, Root will render ThemeProvider, pass "theme" to override default theme
  // If you want to use your own ThemeProvider, pass "themeProvidedOmitted" to Root and wrapped it with your ThemeProvider
  // note: If you set "themeProvidedOmitted=true" to Root without your own ThemeProvider, you will see error "cannot read palette of undefined"
  return (
    <Root theme={theme} scheme={standardScheme}>
      <CssBaseline />
      <Header color={'secondary'}>
        <Toolbar>
          <SidebarTrigger sidebarId={'primarySidebar'} />
          <HeaderMockUp />
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId={'primarySidebar'}>
        <SidebarContent>
          <NavContentMockUp />
        </SidebarContent>
        <CollapseBtn />
      </DrawerSidebar>
      <Content>
        <ContentMockUp />
      </Content>
      <Footer>
        <FooterMockUp />
      </Footer>
    </Root>
  );
};
// hide-start
CustomThemeDemo.metadata = {
  title: 'Custom Theme',
  path: 'layout/basicExamples/customTheme',
  files: [],
  relates: [],
};
// hide-end
export default CustomThemeDemo;
