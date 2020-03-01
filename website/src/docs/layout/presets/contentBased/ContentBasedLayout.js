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
  contentBasedLayoutPreset,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const ContentBasedLayout = () => (
  <Root config={contentBasedLayoutPreset}>
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
ContentBasedLayout.metadata = {
  title: 'Content-based Layout',
  path: 'layout/presets/contentBased',
  files: [],
  relates: [],
};
// hide-end

export default ContentBasedLayout;
