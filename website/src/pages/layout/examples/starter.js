/* eslint-disable */
import React, { useState } from 'react';
import { ThemeWrapper } from 'utils/theme';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
  useSidebarStyles,
  useHeaderStyles,
  useScreen,
  useWindow,
  WindowProvider,
} from '@mui-treasury/layout';

// MOCK
import NavContentEx from 'components/mock/NavContentEx';
import HeaderEx from 'components/mock/HeaderEx';
import ContentEx from 'components/mock/ContentEx';
import FooterEx from 'components/mock/FooterEx';
import BrowserIFrame from 'components/layout/BrowserIFrame';

const StarterLayout = () => {
  const w = useWindow();
  console.log('w', w);
  return (
    <BrowserIFrame>
      {({ window, container }) => (
        <WindowProvider value={{ iWindow: window, iBody: container }}>
          <CssBaseline />
          <Root options={{ customWindow: window }}>
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
                <Sidebar ModalProps={{ container }}>
                  <NavContentEx />
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
      )}
    </BrowserIFrame>
  );
};

StarterLayout.propTypes = {};
StarterLayout.defaultProps = {};

export default StarterLayout;
