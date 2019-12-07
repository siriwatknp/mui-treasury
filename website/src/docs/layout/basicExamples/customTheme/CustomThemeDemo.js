import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
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

import NavContentEx from 'components/mock/NavContentEx';
import HeaderEx from 'components/mock/HeaderEx';
import ContentEx from 'components/mock/ContentEx';
import FooterEx from 'components/mock/FooterEx';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7d4709',
    },
    secondary: {
      main: '#fffaf2',
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        '&.Mui-selected': {
          backgroundColor: '#7d4709',
          color: '#fff',
          '& svg': {
            color: '#fff',
          },
          '&:hover': {
            backgroundColor: '#95550b',
          },
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 48,
      },
    },
  },
});

const CustomThemeDemo = () => {
  // by default, Root will render ThemeProvider, pass "theme" to override default theme
  // If you want to use your own ThemeProvider, pass "omitThemeProvider" to Root and wrapped it with your ThemeProvider
  // note: If you set "omitThemeProvider=true" to Root without your own ThemeProvider, you will see error "cannot read palette of undefined"
  return (
    <Root theme={theme} config={standardLayoutPreset}>
      {({ headerStyles, sidebarStyles }) => (
        <>
          <CssBaseline />
          <Header color={'secondary'} elevation={6}>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              <HeaderEx />
            </Toolbar>
          </Header>
          <Sidebar>
            <div className={sidebarStyles.container}>
              <NavContentEx />
            </div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
          <Content>
            <ContentEx />
          </Content>
          <Footer>
            <FooterEx />
          </Footer>
        </>
      )}
    </Root>
  );
};
// hide-start
CustomThemeDemo.metadata = {
  title: 'Custom Theme',
  path: 'basicExamples/customTheme',
  files: [],
  relates: [],
};
// hide-end
export default CustomThemeDemo;
