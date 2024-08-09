import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
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

export const LayoutV6PresetContentBased = () => {
  return (
    <Root>
      <Header
        sx={{
          ...applyHeaderStyles({ height: { xs: "56px", md: "64px" } }),
          position: "relative",
        }}
      >
        <HeaderMockup
          trigger={
            <>
              <IconButton
                className={layoutClasses.TemporaryEdgeSidebarTrigger}
                onClick={() => {
                  toggleTemporaryEdgeSidebar();
                }}
              >
                <Menu />
              </IconButton>
              <IconButton
                className={layoutClasses.EdgeSidebarCollapser}
                onClick={(event) => {
                  toggleEdgeSidebarCollapse({ event });
                }}
              >
                <Menu className={layoutClasses.EdgeSidebarCollapsedVisible} />
                <KeyboardArrowLeft
                  className={layoutClasses.EdgeSidebarUncollapsedVisible}
                />
              </IconButton>
            </>
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
              sm: {
                variant: "persistent",
                width: "256px",
                persistentBehavior: "none",
              },
            },
          }),
        })}
      >
        <EdgeSidebarContent
          sx={{
            borderRight: "min(1px, 1 * var(--SidebarContent-width)) solid",
            borderColor: "divider",
          }}
        >
          <ButtonBase
            className={layoutClasses.EdgeSidebarCollapser}
            onClick={(event) => {
              toggleEdgeSidebarCollapse({ event });
            }}
            sx={{ height: 40, color: "text.secondary" }}
          >
            <KeyboardArrowLeft color="inherit" />
          </ButtonBase>
          <NavSidebarMockup />
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
