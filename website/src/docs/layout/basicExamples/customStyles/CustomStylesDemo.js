import React from 'react';
import styled from 'styled-components';
import cx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  getFixedScheme,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';
import { TextSidebar } from '@mui-treasury/mockup/sidebars';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const fixedScheme = getFixedScheme();

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
    <Root scheme={fixedScheme}>
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
          <TextSidebar />
        </SidebarContent>
        <CollapseBtn className={cx(styles.collapseBtn)} />
      </DrawerSidebar>
      <Content className={styles.content}>
        <ContentMockUp />
      </Content>
      <Footer>
        <FooterMockUp />
      </Footer>
    </Root>
  );
};
// hide-start
CustomStylesDemo.metadata = {
  title: 'Custom Styles',
  path: 'layout/basicExamples/customStyles',
  files: [],
  relates: [],
};
// hide-end
export default CustomStylesDemo;
