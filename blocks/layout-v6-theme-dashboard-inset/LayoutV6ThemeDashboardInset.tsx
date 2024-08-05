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
  edgeSidebarClasses,
  EdgeSidebarContent,
  Header,
  Root,
  toggleTemporaryEdgeSidebar,
} from "../layout-core-v6";

export function LayoutV6ThemeDashboardInset() {
  return (
    <Root
      sx={(theme) => ({
        ...theme.applyStyles("light", {
          backgroundColor: "#f0f4f8",
        }),
        "--Header-underline": {
          md: "none",
        },
        "--EdgeSidebarContent-background": {
          md: "unset",
        },
        "--EdgeSidebar-sidelineWidth": "0px",
        "--Content-insetTop": {
          md: "12px",
        },
        "& .Content": {
          bgcolor: "background.paper",
          [theme.breakpoints.up("md")]: {
            margin: 2,
            borderRadius: "24px",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: theme.vars.shadows[2],
          },
        },
      })}
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
          className={edgeSidebarClasses.trigger}
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
        <EdgeSidebarContent sx={{ py: 3 }}>
          <ButtonBase sx={{ height: 48 }}>
            <Home />
          </ButtonBase>
        </EdgeSidebarContent>
      </EdgeSidebar>
    </Root>
  );
}
