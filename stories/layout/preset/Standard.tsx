import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";

import {
  Root,
  Header,
  EdgeTrigger,
  EdgeSidebar,
  SidebarContent,
  Content,
  Footer,
  getStandardScheme,
} from "@mui-treasury/layout";
import {
  HeaderMockup,
  ContentMockup,
  FooterMockup,
  NavSidebarMockup,
} from "@mui-treasury/mockup/layout";
import { SideNavUserInfoMockup } from "@mui-treasury/mockup/dashboard";

import Menu from "@material-ui/icons/Menu";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const scheme = getStandardScheme();

const Standard = () => {
  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header>
        <HeaderMockup
          trigger={
            <EdgeTrigger target={{ anchor: "left", field: "open" }}>
              {(open, setOpen) => (
                <IconButton onClick={() => setOpen(!open)} edge="end">
                  {open ? <KeyboardArrowLeft /> : <Menu />}
                </IconButton>
              )}
            </EdgeTrigger>
          }
        />
      </Header>
      <EdgeSidebar anchor="left">
        {({ state }) => (
          <>
            <SidebarContent>
              <NavSidebarMockup />
            </SidebarContent>
            <SideNavUserInfoMockup
              collapsed={state.leftEdgeSidebar?.collapsed}
            />
            <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
              {(collapsed, setCollapsed) => (
                <ButtonBase
                  onClick={() => setCollapsed(!collapsed)}
                  sx={{ flexGrow: 1, height: 48 }}
                >
                  {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </ButtonBase>
              )}
            </EdgeTrigger>
          </>
        )}
      </EdgeSidebar>
      <Content>
        <Container maxWidth="md" sx={{ py: 5 }}>
          <ContentMockup />
        </Container>
      </Content>
      <Footer>
        <FooterMockup />
      </Footer>
    </Root>
  );
};

export default Standard;
