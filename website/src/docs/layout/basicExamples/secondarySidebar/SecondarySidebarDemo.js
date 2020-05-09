import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  getHeader,
  getContent,
  getFooter,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getCozyScheme,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import styled from 'styled-components';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const cozyScheme = getCozyScheme();

cozyScheme.configureEdgeSidebar(builder => {
  builder
    .create('secondarySidebar', { anchor: 'right' })
    .registerPersistentConfig('md', {
      width: 196,
      persistentBehavior: 'none',
      collapsible: true,
      collapsedWidth: 64,
    });
});

const SecondarySidebarDemo = () => {
  return (
    <Root scheme={cozyScheme}>
      {({ setOpen }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="primarySidebar"  />
              <HeaderMockUp />
              <SidebarTrigger sidebarId="secondarySidebar" />
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId="primarySidebar">
            <SidebarContent>
              <NavContentMockUp onClickItem={() => setOpen('primarySidebar', false)} />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <DrawerSidebar sidebarId="secondarySidebar">
            <SidebarContent>2nd sidebar content</SidebarContent>
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
