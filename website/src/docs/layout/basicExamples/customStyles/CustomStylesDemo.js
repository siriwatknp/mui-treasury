import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
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
  fixedLayoutPreset,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import { TextSidebar } from '@mui-treasury/mockup/sidebars';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#fff',
    borderBottom: '1px solid hsl(210, 32%, 93%)',
  },
  collapseBtn: {
    color: '#fff',
    minWidth: 0,
    width: 40,
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0.24)',
    margin: '0 auto 16px',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.38)',
    },
  },
  sidebar: {
    backgroundColor: '#4065E0',
    border: 'none',
  },
  content: {
    backgroundColor: '#f9f9f9',
  },
}));

const CustomStylesDemo = () => {
  const styles = useStyles();
  return (
    <Root config={fixedLayoutPreset}>
      {({ headerStyles, sidebarStyles }) => (
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
              <TextSidebar />
            </div>
            <CollapseBtn
              className={cx(sidebarStyles.collapseBtn, styles.collapseBtn)}
            >
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
          <Content className={styles.content}>
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
CustomStylesDemo.metadata = {
  title: 'Custom Styles',
  path: 'basicExamples/customStyles',
  files: [],
  relates: [],
};
// hide-end
export default CustomStylesDemo;
