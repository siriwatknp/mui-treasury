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
  WindowProvider,
  standardLayoutPreset,
} from '@mui-treasury/layout';

// MOCK
import NavContentEx from 'components/mock/NavContentEx';
import HeaderEx from 'components/mock/HeaderEx';
import ContentEx from 'components/mock/ContentEx';
import FooterEx from 'components/mock/FooterEx';
import BrowserIFrame from 'components/layout/BrowserIFrame';

const StarterLayout = () => {
  return (
    <BrowserIFrame>
      {({ window, container }) => {
        return (
          <WindowProvider value={{ iWindow: window, iBody: container }}>
            <CssBaseline />
            <Root config={standardLayoutPreset}>
              {({ headerStyles, sidebarStyles }) => (
                <>
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
          </WindowProvider>
        );
      }}
    </BrowserIFrame>
  );
};

export default StarterLayout;
