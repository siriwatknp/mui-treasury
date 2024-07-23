import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Menu from "@mui/icons-material/Menu";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import {
  applyEdgeSidebarStyles,
  applyHeaderStyles,
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  Footer,
  Header,
  Root,
  toggleEdgeSidebarCollapse,
  toggleTemporaryEdgeSidebar,
} from "../layout-core-v6";
import {
  ContentMockup,
  FooterMockup,
  HeaderMockup,
  NavSidebarMockup,
} from "../mockup-layout";

export const LayoutV6PresetStandard = () => {
  return (
    <Root>
      <Header
        sx={{
          ...applyHeaderStyles({
            height: { xs: "56px", md: "64px" },
            fullWidth: "md",
          }),
          position: { xs: "sticky", md: "relative" },
        }}
      >
        <HeaderMockup
          trigger={
            <IconButton
              className="EdgeSidebar-trigger"
              onClick={() => {
                toggleTemporaryEdgeSidebar();
              }}
            >
              <Menu />
            </IconButton>
          }
        />
      </Header>
      <EdgeSidebar
        sx={(theme) => ({
          ...applyEdgeSidebarStyles(theme, {
            config: {
              xs: {
                variant: "temporary",
                width: "256px",
              },
              sm: {
                variant: "permanent",
                width: "256px",
                autoCollapse: "sm",
                collapsedWidth: "64px",
              },
            },
          }),
        })}
      >
        <EdgeSidebarContent>
          <NavSidebarMockup />
          <ButtonBase
            className="EdgeSidebar-collapser"
            onClick={(event) => toggleEdgeSidebarCollapse({ event })}
            sx={{ height: 48, mt: "auto" }}
          >
            <KeyboardArrowLeft className="Icon-collapse" />
            <KeyboardArrowRight className="Icon-uncollapse" />
          </ButtonBase>
        </EdgeSidebarContent>
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
