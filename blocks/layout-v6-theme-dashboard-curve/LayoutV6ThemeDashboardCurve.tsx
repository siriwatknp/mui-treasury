import React from "react";
import Home from "@mui/icons-material/Home";
import Menu from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  applyEdgeSidebarStyles,
  applyHeaderStyles,
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  Header,
  layoutClasses,
  Root,
  toggleTemporaryEdgeSidebar,
} from "../layout-core-v6";

export function LayoutV6ThemeDashboardCurve() {
  return (
    <Root
      sx={{
        bgcolor: "rgb(23 26 28)",
        [`& .${layoutClasses.Header}`]: {
          borderBottom: {
            md: "none",
          },
        },
        [`& .${layoutClasses.Content}`]: {
          bgcolor: "background.paper",
          borderTopLeftRadius: { md: "32px" },
          marginTop: {
            md: "12px",
          },
        },
        [`& .${layoutClasses.EdgeSidebarContent}`]: {
          background: "rgb(23 26 28)",
        },
      }}
    >
      <Header
        sx={{
          ...applyHeaderStyles({
            fullWidth: true,
            height: { xs: "56px", md: "0px" },
          }),
          overflow: "hidden",
          px: 2,
        }}
      >
        <IconButton
          className={layoutClasses.TemporaryEdgeSidebarTrigger}
          onClick={() => toggleTemporaryEdgeSidebar()}
        >
          <Menu />
        </IconButton>
        Global Header
      </Header>
      <Content>
        <Box sx={{ p: { xs: 2, md: 3 } }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
          >
            Page
          </Typography>
        </Box>
      </Content>
      <EdgeSidebar
        data-dark
        sx={(theme) => ({
          ...applyEdgeSidebarStyles({
            theme,
            config: {
              xs: { variant: "temporary", width: "256px", fullHeight: true },
              md: {
                variant: "permanent",
                width: "256px",
                autoCollapse: "md",
                collapsedWidth: "64px",
                expandOnHover: true,
              },
            },
          }),
        })}
      >
        <EdgeSidebarContent
          sx={{ bgcolor: "rgb(23 26 28)", color: "text.primary", py: 5 }}
        >
          <ButtonBase sx={{ height: 48 }}>
            <Home />
          </ButtonBase>
        </EdgeSidebarContent>
      </EdgeSidebar>
    </Root>
  );
}
