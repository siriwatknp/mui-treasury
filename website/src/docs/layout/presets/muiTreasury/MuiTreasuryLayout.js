import React from 'react';
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
  muiTreasuryPreset,
} from '@mui-treasury/layout';

import NavContentEx from 'components/mock/NavContentEx';
import HeaderEx from 'components/mock/HeaderEx';
import ContentEx from 'components/mock/ContentEx';
import FooterEx from 'components/mock/FooterEx';

const MuiTreasuryLayout = () => (
  <Root config={muiTreasuryPreset}>
    {({ headerStyles, sidebarStyles }) => (
      <>
        <CssBaseline />
        <Header>
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

// hide-start
MuiTreasuryLayout.metadata = {
  title: 'MUI Treasury Layout',
  path: 'presets/muiTreasury',
  files: [],
  relates: [],
};
// hide-end

export default MuiTreasuryLayout;
