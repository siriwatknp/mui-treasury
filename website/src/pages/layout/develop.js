/* eslint-disable */
import React from 'react';
import {
  Root,
  Header,
  Sidebar,
  SidebarTrigger,
  SidebarTriggerIcon,
  SecondarySidebar,
  SecondarySidebarTrigger,
  SecondarySidebarTriggerIcon,
  InsetSidebar,
  SecondaryInsetSidebar,
  CollapseBtn,
  CollapseIcon,
  SecondaryCollapseBtn,
  SecondaryCollapseIcon,
  Footer,
  Content,
  standardLayoutPreset,
} from '@mui-treasury/layout';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import { ContentMockUp } from '@mui-treasury/mockup/layout';

standardLayoutPreset.md.sidebar.inset = true;
standardLayoutPreset.md.secondarySidebar.inset = true;
standardLayoutPreset.md.header.position = 'fixed';
standardLayoutPreset.md.footer.insetBehavior = 'flexible';
standardLayoutPreset.md.footer.secondaryInsetBehavior = 'fit';
// standardLayoutPreset.xs.sidebar.anchor = 'right';
// standardLayoutPreset.sm.sidebar.anchor = 'right';
// standardLayoutPreset.md.sidebar.anchor = 'right';
// standardLayoutPreset.xs.header.position = 'fixed';
// standardLayoutPreset.sm.header.position = 'fixed';
// standardLayoutPreset.md.header.position = 'fixed';

const LayoutTest = () => {
  return (
    <Root config={standardLayoutPreset}>
      {({ containerStyles, sidebarStyles, headerStyles }) => (
        <>
          <Header>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              <Box flexGrow={1}>test</Box>
              <SecondarySidebarTrigger>
                <SecondarySidebarTriggerIcon />
              </SecondarySidebarTrigger>
            </Toolbar>
          </Header>
          {/*<Sidebar>*/}
          {/*  <div className={sidebarStyles.container}>Sidebar</div>*/}
          {/*  <CollapseBtn className={sidebarStyles.collapseBtn}>*/}
          {/*    <CollapseIcon />*/}
          {/*  </CollapseBtn>*/}
          {/*</Sidebar>*/}
          {/*<SecondarySidebar>*/}
          {/*  <div className={sidebarStyles.container}>Sidebar</div>*/}
          {/*  <SecondaryCollapseBtn className={sidebarStyles.collapseBtn}>*/}
          {/*    <SecondaryCollapseIcon />*/}
          {/*  </SecondaryCollapseBtn>*/}
          {/*</SecondarySidebar>*/}
          <Container className={containerStyles.root}>
            <InsetSidebar>
              <Box height={300} bgcolor={'grey.100'}>
                Inset Sidebar
              </Box>
            </InsetSidebar>
            <Content>
              <ContentMockUp />
            </Content>
            <SecondaryInsetSidebar>
              <Box bgcolor={'grey.100'}>2nd Inset Sidebar</Box>
            </SecondaryInsetSidebar>
          </Container>
          <Container>
            <Footer>Footer</Footer>
          </Container>
        </>
      )}
    </Root>
  );
};

export default LayoutTest;
