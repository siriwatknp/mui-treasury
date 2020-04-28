import React from 'react';
import styled from '@emotion/styled';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { Root, getLayoutComponents, presets } from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const {
  Header,
  Content,
  Footer,
  DrawerSidebar,
  SidebarContent,
  SidebarTrigger,
  CollapseBtn,
} = getLayoutComponents(styled);

const StandardLayout = () => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <Root scheme={presets.standard}>
      {({ state: { sidebar } }) => (
        <>
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="primarySidebar" />
              <HeaderMockUp />
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId="primarySidebar">
            <SidebarContent>
              <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} />
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
        </>
      )}
    </Root>
  </StylesProvider>
);

export default StandardLayout;
