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
  ConfigGenerator,
} from '@mui-treasury/layout';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import { ContentMockUp } from '@mui-treasury/mockup/layout';

const config = ConfigGenerator();
config.setAllSidebarsToInset();
config.header.setPosition('fixed');
// config.debug();

const LayoutTest = () => {
  return (
    <Root config={config.get()}>
      {({ containerStyles, sidebarStyles, headerStyles }) => (
        <>
          <Header>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              <Box flexGrow={1}>test</Box>
              {/*<SecondarySidebarTrigger>*/}
              {/*  <SecondarySidebarTriggerIcon />*/}
              {/*</SecondarySidebarTrigger>*/}
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
