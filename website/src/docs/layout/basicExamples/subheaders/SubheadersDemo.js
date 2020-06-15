import React from 'react';
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  getHeader,
  getSubheader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getInsetContainer,
  getInsetSidebar,
  getCollapseBtn,
  getContent,
  getFooter,
  getStandardScheme,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const Header = getHeader(styled);
const Subheader = getSubheader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const InsetContainer = getInsetContainer(styled);
const InsetSidebar = getInsetSidebar(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const standardScheme = getStandardScheme();

standardScheme.configureHeader(builder => {
  builder.create('header')
    .registerConfig('xs', {
      position: 'sticky',
    })
});

standardScheme.configureSubheader(builder => {
  builder.create('subheader_1').registerConfig('xs', {
    position: 'sticky',
  });

  builder.create('subheader_2').registerConfig('xs', {
    position: 'relative',
  })
});

standardScheme.configureEdgeSidebar(builder => {
  builder
    .create('secondary', { anchor: 'right' })
    .registerPersistentConfig('xs', {
      width: 56,
      collapsible: false,
      headerMagnetEnabled: true,
      persistentBehavior: 'fit',
    });
});

standardScheme.configureInsetSidebar(builder => {
  builder.create('tertiary', { anchor: 'right' }).registerFixedConfig('md', {
    width: 200,
  });
});

const SubheadersDemo = () => {
  // by default, Root will render ThemeProvider, pass "theme" to override default theme
  // If you want to use your own ThemeProvider, pass "themeProvidedOmitted" to Root and wrapped it with your ThemeProvider
  // note: If you set "themeProvidedOmitted=true" to Root without your own ThemeProvider, you will see error "cannot read palette of undefined"
  return (
    <Root scheme={standardScheme}>
      <CssBaseline />
      <Subheader subheaderId={'subheader_1'}>
        <Box bgcolor={'#121212'} color={'common.white'} textAlign={'center'}>
          This is a subheader.
        </Box>
      </Subheader>
      <Header color={'default'}>
        <Toolbar>
          <HeaderMockUp />
          <SidebarTrigger sidebarId={'secondary'} />
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId={'primarySidebar'}>
        <SidebarContent>
          <NavContentMockUp />
        </SidebarContent>
        <CollapseBtn edge={'start'} />
      </DrawerSidebar>
      <DrawerSidebar sidebarId={'secondary'}>
        <SidebarContent>
          <NavContentMockUp />
        </SidebarContent>
      </DrawerSidebar>
      <Content>
        <InsetContainer
          rightSidebar={
            <InsetSidebar sidebarId={'tertiary'}>
              <Box mt={5} />
              <NavContentMockUp />
            </InsetSidebar>
          }
        >
          <ContentMockUp />
        </InsetContainer>
      </Content>
      <Footer>
        <FooterMockUp />
      </Footer>
    </Root>
  );
};
// hide-start
SubheadersDemo.metadata = {
  title: 'Custom Theme',
  path: 'layout/basicExamples/customTheme',
  files: [],
  relates: [],
};
// hide-end
export default SubheadersDemo;
