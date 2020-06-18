import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
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
  builder
    .create('header')
    .registerConfig('xs', {
      position: 'fixed',
      top: 32,
      clipped: true,
      layer: 1,
    })
    .registerConfig('md', {
      position: 'sticky',
      top: 0,
      clipped: true,
      layer: 2,
    });
});

standardScheme.configureSubheader(builder => {
  builder.create('subheader_1').registerConfig('xs', {
    position: 'fixed',
    clipped: true,
    initialHeight: 32,
    layer: 1,
  });

  builder.create('subheader_2').registerConfig('xs', {
    position: 'relative',
    initialHeight: 56,
    clipped: {
      primarySidebar: true,
      tertiary: true,
    },
  });
});

standardScheme.configureEdgeSidebar(builder => {
  builder
    .create('secondary', { anchor: 'right' })
    .registerPersistentConfig('xs', {
      width: 56,
      collapsible: false,
      headerMagnetEnabled: 'subheader_1',
      persistentBehavior: 'fit',
    });
});

standardScheme.configureInsetSidebar(builder => {
  builder.create('tertiary', { anchor: 'right' }).registerFixedConfig('md', {
    width: 200,
    headerMagnetEnabled: true,
  });
});

const SubheadersDemo = () => {
  // by default, Root will render ThemeProvider, pass "theme" to override default theme
  // If you want to use your own ThemeProvider, pass "themeProvidedOmitted" to Root and wrapped it with your ThemeProvider
  // note: If you set "themeProvidedOmitted=true" to Root without your own ThemeProvider, you will see error "cannot read palette of undefined"
  const [hidden, setHidden] = React.useState(false);
  standardScheme.configureHeader(builder => {
    builder.update(configMap => {
      if (hidden) {
        configMap.xs.top = 0;
      }
    });
  });
  standardScheme.configureSubheader(builder => {
    builder.hide('subheader_1', hidden);
  });
  return (
    <Root scheme={standardScheme}>
      <CssBaseline />
      <Subheader subheaderId={'subheader_1'}>
        <Box
          bgcolor={'#dcdcdc'}
          height={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          This is a subheader.{' '}
          <Link color={'secondary'} onClick={() => setHidden(true)}>
            <b>Hide</b>
          </Link>
        </Box>
      </Subheader>
      <Header color={'default'}>
        <Toolbar>
          <HeaderMockUp />
          <SidebarTrigger sidebarId={'secondary'} />
        </Toolbar>
      </Header>
      <Subheader subheaderId={'subheader_2'}>
        <Box
          bgcolor={'#e6fbff'}
          px={2}
          minHeight={56}
          display={'flex'}
          alignItems={'center'}
        >
          <span>This is a another subheader.</span>
          <Box ml={'auto'} mr={2}>
            try this menu
          </Box>
          <ArrowUpward />
          <Box width={12} />
        </Box>
      </Subheader>
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
