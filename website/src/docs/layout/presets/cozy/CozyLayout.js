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
  cozyLayoutPreset,
} from '@mui-treasury/layout';
import {
  NavContentMockUp,
  NavHeaderMockUp,
  HeaderMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const CozyLayout = () => (
  <Root config={cozyLayoutPreset}>
    {({ headerStyles, sidebarStyles, collapsed }) => (
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
          <NavHeaderMockUp collapsed={collapsed} />
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
CozyLayout.metadata = {
  title: 'Cozy',
  path: 'layout/presets/cozy',
  files: [],
  relates: [],
};
// hide-end

export default CozyLayout;
