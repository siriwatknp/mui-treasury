import React from "react";
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
  getContentBasedScheme,
} from "@mui-treasury/layout";
import {
  HeaderMockup,
  ContentMockup,
  FooterMockup,
  NavSidebarMockup,
} from "@mui-treasury/mockup/layout";

import Menu from "@mui/icons-material/Menu";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const scheme = getContentBasedScheme();

const ContentBased = () => {
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

export default ContentBased;
