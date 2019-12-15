import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
  ConfigGenerator,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import { RoundIconSidebar } from '@mui-treasury/mockup/sidebars';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#fff',
  },
  sidebar: {
    backgroundColor: '#36338E',
  },
}));

const config = ConfigGenerator();
config.primarySidebar
  .setCollapsible(false)
  .setVariant('persistent')
  .setWidth(84);
config.header.unclipPrimary();

const ControlSidebarDemo = () => {
  const styles = useStyles();
  return (
    <Root initialOpened config={config.get()}>
      {({ headerStyles, sidebarStyles, setOpened }) => (
        <>
          <CssBaseline />
          <Header className={styles.header}>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              <HeaderMockUp />
            </Toolbar>
          </Header>
          <Sidebar PaperProps={{ classes: { root: styles.sidebar } }}>
            <div className={sidebarStyles.container}>
              <RoundIconSidebar onClickItem={() => setOpened(false)} />
            </div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
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
  path: 'basicExamples/controlSidebar',
  files: [],
  relates: [],
};
// hide-end
export default ControlSidebarDemo;
