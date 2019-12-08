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
  standardLayoutPreset,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: 'hsl(210, 38%, 97%)',
    borderBottom: '1px solid hsl(210, 32%, 93%)',
  },
  collapseBtn: {
    color: '#fff',
    borderColor: 'hsl(212, 56%, 16%)',
    backgroundColor: 'hsl(212, 18%, 35%)',
  },
  sidebar: {
    backgroundColor: '#152434',
    border: 'none',
    boxShadow: '0 0 12px 0 rgba(0,0,0,0.6)',
    '& span': {
      color: '#fff',
    },
    '& svg': {
      color: '#9cbcdc',
    },
  },
}));

const CustomStylesDemo = () => {
  const styles = useStyles();
  return (
    <Root config={standardLayoutPreset}>
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
              <NavContentMockUp />
            </div>
            <CollapseBtn
              className={cx(sidebarStyles.collapseBtn, styles.collapseBtn)}
            >
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
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
CustomStylesDemo.metadata = {
  title: 'Custom Theme',
  path: 'basicExamples/customTheme',
  files: [],
  relates: [],
};
// hide-end
export default CustomStylesDemo;
