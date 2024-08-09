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
  layoutClasses,
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

export const LayoutV6PresetFixed = () => {
  return (
    <Root>
      <Header
        sx={{
          ...applyHeaderStyles({
            height: { xs: "56px", md: "64px" },
          }),
          position: "sticky",
        }}
      >
        <HeaderMockup
          trigger={
            <IconButton
              className={layoutClasses.TemporaryEdgeSidebarTrigger}
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
          ...applyEdgeSidebarStyles({
            theme,
            config: {
              xs: {
                variant: "temporary",
                width: "256px",
              },
              md: {
                variant: "permanent",
                width: "256px",
                autoCollapse: "md",
                collapsedWidth: "64px",
              },
            },
          }),
        })}
      >
        <EdgeSidebarContent>
          <NavSidebarMockup />
          <ButtonBase
            className={layoutClasses.EdgeSidebarCollapser}
            onClick={(event) => toggleEdgeSidebarCollapse({ event })}
            sx={{ height: 48, mt: "auto" }}
          >
            <KeyboardArrowLeft
              className={layoutClasses.EdgeSidebarUncollapsedVisible}
            />
            <KeyboardArrowRight
              className={layoutClasses.EdgeSidebarCollapsedVisible}
            />
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
