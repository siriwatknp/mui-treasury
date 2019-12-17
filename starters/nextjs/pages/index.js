import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
  standardLayoutPreset,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const StandardLayout = () => (
  <Root config={standardLayoutPreset}>
    {({ headerStyles, sidebarStyles }) => (
      <>
        <CssBaseline />
        <Header>
          <Toolbar>
            <SidebarTrigger className={headerStyles.leftTrigger}>
              <SidebarTriggerIcon />
            </SidebarTrigger>
            <HeaderMockUp />
          </Toolbar>
        </Header>
        <Sidebar>
          <div className={sidebarStyles.container}>
            <NavContentMockUp />
          </div>
          <CollapseBtn className={sidebarStyles.collapseBtn}>
            <CollapseIcon />
          </CollapseBtn>
        </Sidebar>
        <Content>
          <ContentMockUp />
        </Content>
        <Footer>
          <FooterMockUp />
        </Footer>
      </>
    )}
  </Root>
);

export default StandardLayout;
