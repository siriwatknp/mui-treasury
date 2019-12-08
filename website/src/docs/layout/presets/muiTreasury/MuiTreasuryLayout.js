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
  muiTreasuryPreset,
} from '@mui-treasury/layout';
import {
  NavContentMockUp,
  HeaderMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const MuiTreasuryLayout = () => (
  <Root config={muiTreasuryPreset}>
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

// hide-start
MuiTreasuryLayout.metadata = {
  title: 'MUI Treasury Layout',
  path: 'presets/muiTreasury',
  files: [],
  relates: [],
};
// hide-end

export default MuiTreasuryLayout;
