import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Menu from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import {
  Content,
  EdgeSidebar,
  EdgeTrigger,
  Footer,
  getContentBasedScheme,
  Header,
  Root,
  SidebarContent,
} from "../layout-core";
import {
  ContentMockup,
  FooterMockup,
  HeaderMockup,
  NavSidebarMockup,
} from "../mockup-layout";

const scheme = getContentBasedScheme();

export const LayoutPresetContentBased = () => {
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
        <SidebarContent>
          <NavSidebarMockup />
        </SidebarContent>
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
