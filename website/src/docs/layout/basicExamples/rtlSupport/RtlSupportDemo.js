import React from 'react';
import styled from 'styled-components';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  getHeader,
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
import Box from '@material-ui/core/Box';

const Header = getHeader(styled);
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
  builder.update(config => {
    config.md.position = 'fixed';
  });
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
  builder.create('tertiary', { anchor: 'right' }).registerStickyConfig('md', {
    top: 64,
    width: 200,
  });
});

const RtlSupportDemo = () => {
  // by default, Root will render ThemeProvider, pass "theme" to override default theme
  // If you want to use your own ThemeProvider, pass "themeProvidedOmitted" to Root and wrapped it with your ThemeProvider
  // note: If you set "themeProvidedOmitted=true" to Root without your own ThemeProvider, you will see error "cannot read palette of undefined"
  const [rtl, setRtl] = React.useState(true);
  const direction = rtl ? 'rtl' : 'ltr';
  return (
    <div dir={direction}>
      <Root theme={createTheme({ direction })} scheme={standardScheme}>
        <CssBaseline />
        <Header color={'default'}>
          <Toolbar>
            <HeaderMockUp />
            <Button
              variant={'contained'}
              color={'secondary'}
              onClick={() => setRtl(v => !v)}
            >
              Switch to {rtl ? 'LTR' : 'RTL'}
            </Button>
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
    </div>
  );
};
// hide-start
RtlSupportDemo.metadata = {
  title: 'Custom Theme',
  path: 'layout/basicExamples/customTheme',
  files: [],
  relates: [],
};
// hide-end
export default RtlSupportDemo;
