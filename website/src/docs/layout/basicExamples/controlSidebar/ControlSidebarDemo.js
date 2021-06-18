import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/styles/makeStyles';
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import { RoundIconSidebar } from '@mui-treasury/mockup/sidebars';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#fff',
  },
  sidebar: {
    backgroundColor: '#36338E',
  },
}));

const scheme = Layout();

scheme.configureHeader(builder => {
  builder.registerConfig('xs', {
    position: 'sticky',
    clipped: false,
  });
});

scheme.configureEdgeSidebar(builder => {
  builder
    .create('primarySidebar', { anchor: 'left' })
    .registerPersistentConfig('xs', {
      width: 84,
      collapsible: false,
      persistentBehavior: {
        header: 'fit',
        _other: 'none',
      },
    });
});

const ControlSidebarDemo = () => {
  const styles = useStyles();
  return (
    <Root
      scheme={scheme}
      initialState={{ sidebar: { primarySidebar: { open: true } } }}
    >
      {({ setOpen }) => (
        <>
          <CssBaseline />
          <Header className={styles.header}>
            <Toolbar>
              <SidebarTrigger sidebarId={'primarySidebar'} />
              <HeaderMockUp />
            </Toolbar>
          </Header>
          <DrawerSidebar
            sidebarId={'primarySidebar'}
            PaperProps={{ className: styles.sidebar }}
          >
            <SidebarContent>
              <RoundIconSidebar
                onClickItem={() => setOpen('primarySidebar', false)}
              />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <Content>
            <Container>
              <ContentMockUp />
            </Container>
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
ControlSidebarDemo.metadata = {
  title: 'Control Sidebar',
  path: 'layout/basicExamples/controlSidebar',
  files: [],
  relates: [],
};
// hide-end
export default ControlSidebarDemo;
