import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

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

import Menu from "@mui/icons-material/Menu";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

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
