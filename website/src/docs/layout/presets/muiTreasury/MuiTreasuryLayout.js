import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import { Root, getLayoutComponents, presets } from '@mui-treasury/layout';

const {
  Header,
  Content,
  Footer,
  DrawerSidebar,
  SidebarTrigger,
  SidebarContent,
  CollapseBtn,
} = getLayoutComponents(styled);

const MuiTreasuryLayout = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Root scheme={presets.muiTreasury}>
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
};
// hide-start
MuiTreasuryLayout.metadata = {
  title: 'MUI Treasury Layout',
  path: 'layout/presets/muiTreasury',
  files: [],
  relates: [],
};
// hide-end

export default MuiTreasuryLayout;
