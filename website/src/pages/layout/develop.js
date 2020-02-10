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
  InsetContainer,
  ConfigGenerator,
} from '@mui-treasury/layout';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import { ContentMockUp } from '@mui-treasury/mockup/layout';

const config = ConfigGenerator({ addOnsIncluded: true });
config.primarySidebar
  .setAnchor('right')
  .setVariant('persistent')
  .setWidth('20rem')
  .setCollapsible(true)
  .setCollapsedWidth(100);
config.secondarySidebar.setAnchor('left').setVariant('permanent');
config.header.setClipped(false).setPersistentBehavior('flexible');
config.content.setPersistentBehavior('none');
config.footer.setPersistentBehavior('flexible');

// config.primarySidebar.setVariant('persistent');
// config.primarySidebar.setCollapsible(true);
// config.primarySidebar.setCollapsedWidth(80);
// config.header.setPosition('fixed');
// config.header.setClipped(true);
// config.header.setSecondaryClipped(true);
// config.header.setPersistentBehavior('flexible');
// config.header.setSecondaryPersistentBehavior('flexible');
// config.content.setPersistentBehavior('flexible');
// config.content.setSecondaryPersistentBehavior('flexible');
// config.footer.setPersistentBehavior('flexible');
// config.footer.setSecondaryPersistentBehavior('flexible');

const LayoutTest = () => {
  return (
    <Root config={config.get()}>
      {({ containerStyles, sidebarStyles, headerStyles }) => (
        <>
          <Header>
            <Toolbar>
              <SecondarySidebarTrigger>
                <SecondarySidebarTriggerIcon />
              </SecondarySidebarTrigger>
              <Box flexGrow={1}>test</Box>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
            </Toolbar>
          </Header>

          <Sidebar>
            <div className={sidebarStyles.container}>Sidebar</div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>

          <SecondarySidebar>
            <div className={sidebarStyles.container}>Sidebar</div>
            <SecondaryCollapseBtn className={sidebarStyles.collapseBtn}>
              <SecondaryCollapseIcon />
            </SecondaryCollapseBtn>
          </SecondarySidebar>
          <Content>
            <ContentMockUp />
          </Content>
          <Footer>Footer</Footer>

          {/*<InsetContainer>*/}
          {/*  /!*<InsetSidebar>*!/*/}
          {/*  /!*  <Box height={300} bgcolor={'grey.100'}>*!/*/}
          {/*  /!*    Inset Sidebar*!/*/}
          {/*  /!*  </Box>*!/*/}
          {/*  /!*</InsetSidebar>*!/*/}
          {/*  <Container className={containerStyles.root}>*/}
          {/*    <Content>*/}
          {/*      <ContentMockUp />*/}
          {/*    </Content>*/}
          {/*    <SecondaryInsetSidebar>*/}
          {/*      <Box bgcolor={'grey.100'}>2nd Inset Sidebar</Box>*/}
          {/*    </SecondaryInsetSidebar>*/}
          {/*  </Container>*/}
          {/*</InsetContainer>*/}
          {/*<InsetContainer>*/}
          {/*  <Footer>Footer</Footer>*/}
          {/*</InsetContainer>*/}
        </>
      )}
    </Root>
  );
};

export default LayoutTest;
