"use client";

import React from "react";
import {
  applyEdgeSidebarStyles,
  applyHeaderStyles,
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  EdgeTemporaryClose,
  Footer,
  Header,
  layoutClasses,
  Root,
  toggleEdgeSidebarCollapse,
  toggleTemporaryEdgeSidebar,
} from "@/mui-treasury/layout-core-v6";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Menu from "@mui/icons-material/Menu";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

export default function Home() {
  return (
    <Root>
      <Header
        sx={{
          ...applyHeaderStyles({
            height: { xs: "56px", md: "64px" },
            fullWidth: "md",
          }),
          position: { xs: "sticky", md: "relative" },
          px: 2,
        }}
      >
        <IconButton
          className={layoutClasses.TemporaryEdgeSidebarTrigger}
          onClick={() => {
            toggleTemporaryEdgeSidebar();
          }}
          sx={{ mr: 1 }}
        >
          <Menu />
        </IconButton>
        <Image
          src="/next.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
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
                variant: "permanent",
                width: "256px",
                autoCollapse: "sm",
                collapsedWidth: "64px",
              },
            },
          }),
        })}
      >
        <EdgeTemporaryClose />
        <EdgeSidebarContent>
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
        <Container maxWidth="md" sx={{ py: 5 }}></Container>
      </Content>
      <Footer sx={{ minHeight: 300 }}></Footer>
    </Root>
  );
}
