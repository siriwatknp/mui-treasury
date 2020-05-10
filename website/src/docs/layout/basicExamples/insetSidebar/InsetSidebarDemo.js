import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Layout, {
  Root,
  getHeader,
  getInsetContainer,
  getInsetSidebar,
  getContent,
  getFooter,
} from '@mui-treasury/layout';
import {
  ContentMockUp,
  FooterMockUp,
  NavContentMockUp,
} from '@mui-treasury/mockup/layout';

const Header = getHeader(styled);
const InsetContainer = getInsetContainer(styled);
const InsetSidebar = getInsetSidebar(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const scheme = Layout();

scheme.configureHeader(builder => {
  builder.registerConfig('xs', {
    position: 'sticky',
  });
});

scheme.configureInsetSidebar(builder => {
  builder
    .create('insetSidebar', { anchor: 'left' })
    .registerFixedConfig('sm', {
      width: 256,
    });
});

const InsetSidebarDemo = () => {
  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header color={'secondary'} elevation={4}>
        <Container maxWidth={'md'}>
          <Toolbar disableGutters>
            <Typography variant={'h6'}><b>My App</b></Typography>
          </Toolbar>
        </Container>
      </Header>
      <Content>
        <InsetContainer
          maxWidth={'md'}
          leftSidebar={
            <InsetSidebar sidebarId={'insetSidebar'}>
              <Box mt={2} />
              <NavContentMockUp />
            </InsetSidebar>
          }
        >
          <ContentMockUp />
        </InsetContainer>
      </Content>
      <Container>
        <Footer>
          <FooterMockUp />
        </Footer>
      </Container>
    </Root>
  );
};
// hide-start
InsetSidebarDemo.metadata = {
  title: 'Inset Sidebar',
  path: 'layout/basicExamples/insetSidebar',
  files: [],
  relates: [],
};
// hide-end
export default InsetSidebarDemo;
