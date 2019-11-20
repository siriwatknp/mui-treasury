import React from 'react';
import {
  Root,
  Header,
  Sidebar,
  SidebarTrigger,
  SidebarTriggerIcon,
  CollapseBtn,
  CollapseIcon,
  Footer,
  Content,
  standardLayoutPreset,
} from '@mui-treasury/layout';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

const LayoutTest = () => {
  return (
    <Root config={standardLayoutPreset}>
      {({ sidebarStyles, headerStyles }) => (
        <>
          <Header>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              test
            </Toolbar>
          </Header>
          <Sidebar>
            <div className={sidebarStyles.container}>Sidebar</div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
          <Content>
            <Box minHeight={1000}>
              <p>Content</p>
            </Box>
          </Content>
          <Footer>Footer</Footer>
        </>
      )}
    </Root>
  );
};

export default LayoutTest;
