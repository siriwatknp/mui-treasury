import React from 'react';
import {
  Root,
  Header,
  SidebarTrigger,
  SidebarTriggerIcon,
  InsetSidebar,
  Footer,
  Content,
  ConfigGenerator,
} from '@mui-treasury/layout';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  ContentMockUp,
  FooterMockUp,
  HeaderMockUp,
  NavContentMockUp,
} from '@mui-treasury/mockup/layout';

const config = ConfigGenerator({ addOnsIncluded: true });
config.setPrimarySidebarToInset();

const InsetSidebarDemo = () => {
  return (
    <Root config={config.get()}>
      {({ headerStyles, containerStyles }) => (
        <>
          <CssBaseline />
          <Header>
            <Container>
              <Toolbar disableGutters>
                <SidebarTrigger className={headerStyles.leftTrigger}>
                  <SidebarTriggerIcon />
                </SidebarTrigger>
                <HeaderMockUp />
              </Toolbar>
            </Container>
          </Header>
          <Container className={containerStyles.root}>
            <InsetSidebar>
              <NavContentMockUp />
            </InsetSidebar>
            <Content>
              <ContentMockUp />
            </Content>
          </Container>
          <Container>
            <Footer>
              <FooterMockUp />
            </Footer>
          </Container>
        </>
      )}
    </Root>
  );
};
// hide-start
InsetSidebarDemo.metadata = {
  title: 'Inset Sidebar',
  path: 'basicExamples/insetSidebar',
  files: [],
  relates: [],
};
// hide-end
export default InsetSidebarDemo;
