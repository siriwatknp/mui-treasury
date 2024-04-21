import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Menu from "@mui/icons-material/Menu";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import {
  Content,
  EdgeSidebar,
  EdgeTrigger,
  Footer,
  getStandardScheme,
  Header,
  Root,
  SidebarContent,
} from "../layout-core-v5";
import { SideNavUserInfoMockup } from "../mockup-dashboard";
import {
  ContentMockup,
  FooterMockup,
  HeaderMockup,
  NavSidebarMockup,
} from "../mockup-layout";

const scheme = getStandardScheme();

export const LayoutPresetStandard = () => {
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
