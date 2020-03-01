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
  SecondarySidebar,
  SecondarySidebarTrigger,
  SecondarySidebarTriggerIcon,
  SecondaryCollapseBtn,
  SecondaryCollapseIcon,
  cozyLayoutPreset,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const SecondarySidebarDemo = () => {
  return (
    <Root config={cozyLayoutPreset}>
      {({ headerStyles, sidebarStyles, setOpened }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              <HeaderMockUp />
              <SecondarySidebarTrigger className={headerStyles.rightTrigger}>
                <SecondarySidebarTriggerIcon />
              </SecondarySidebarTrigger>
            </Toolbar>
          </Header>
          <Sidebar>
            <div className={sidebarStyles.container}>
              <NavContentMockUp onClickItem={() => setOpened(false)} />
            </div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
          <SecondarySidebar>
            <div className={sidebarStyles.container}>2nd sidebar content</div>
            <SecondaryCollapseBtn className={sidebarStyles.collapseBtn}>
              <SecondaryCollapseIcon />
            </SecondaryCollapseBtn>
          </SecondarySidebar>
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
};
// hide-start
SecondarySidebarDemo.metadata = {
  title: 'Secondary Sidebar',
  path: 'layout/basicExamples/secondarySidebar',
  files: [],
  relates: [],
};
// hide-end
export default SecondarySidebarDemo;
