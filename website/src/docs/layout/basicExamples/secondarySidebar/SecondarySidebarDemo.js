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
  SecondarySidebar,
  SecondarySidebarTrigger,
  SecondarySidebarTriggerIcon,
  SecondaryCollapseBtn,
  SecondaryCollapseIcon,
  cozyLayoutPreset,
} from '@mui-treasury/layout';

import NavContentEx from 'components/mock/NavContentEx';
import HeaderEx from 'components/mock/HeaderEx';
import ContentEx from 'components/mock/ContentEx';
import FooterEx from 'components/mock/FooterEx';

const SecondarySidebarDemo = () => {
  return (
    <Root config={cozyLayoutPreset}>
      {({ headerStyles, sidebarStyles, setOpened }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              <HeaderEx />
              <SecondarySidebarTrigger className={headerStyles.rightTrigger}>
                <SecondarySidebarTriggerIcon />
              </SecondarySidebarTrigger>
            </Toolbar>
          </Header>
          <Sidebar>
            <div className={sidebarStyles.container}>
              <NavContentEx onClickItem={() => setOpened(false)} />
            </div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
          <SecondarySidebar>
            <div className={sidebarStyles.container}>2nd sidebar content</div>
            <SecondaryCollapseBtn className={sidebarStyles.collapseBtn}>
              <SecondaryCollapseIcon />
            </SecondaryCollapseBtn>
          </SecondarySidebar>
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
SecondarySidebarDemo.metadata = {
  title: 'Secondary Sidebar',
  path: 'basicExamples/secondarySidebar',
  files: [],
  relates: [],
};
// hide-end
export default SecondarySidebarDemo;
