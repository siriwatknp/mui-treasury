import React from "react";
import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import {
  applyEdgeSidebarStyles,
  applyHeaderStyles,
  applyRootStyles,
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  Footer,
  Header,
  Root,
  toggleTemporaryEdgeSidebar,
} from "../layout-core-v6";

export function LayoutV6AppClaude() {
  return (
    <Root
      sx={{
        backgroundColor: "#f5f5f5",
        "--EdgeSidebar-sidelineWidth": "0px",
        "--EdgeSidebarContent-shadow": "none",
        ...applyRootStyles({ height: "100vh", fixedHeight: true }),
      }}
    >
      <Header
        sx={{
          ...applyHeaderStyles({
            fullWidth: true,
            height: "56px",
          }),
        }}
      >
        <IconButton
          className="EdgeSidebar-trigger"
          onClick={() => toggleTemporaryEdgeSidebar()}
        >
          <Menu />
        </IconButton>
        Header
      </Header>
      <Content sx={{ overflow: "auto" }}>
        <Box sx={{ maxWidth: 400, px: 2, pt: 0.5, mx: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[...Array(20)].map((_, index) => (
              <Card
                elevation={0}
                variant="outlined"
                key={index}
                sx={{ height: 300 }}
              ></Card>
            ))}
          </Box>
        </Box>
      </Content>
      <EdgeSidebar
        sx={(theme) => ({
          ...applyEdgeSidebarStyles({
            theme,
            config: {
              xs: {
                variant: "temporary",
                fullHeight: true,
              },
              sm: {
                variant: "permanent",
                width: "288px",
                autoCollapse: 9999,
                collapsedWidth: "56px",
                expandOnHover: true,
              },
            },
          }),
          "&::before": {
            display: "none",
          },
        })}
      >
        <EdgeSidebarContent
          sx={{
            background: "none",
            marginTop: "var(--permanent, calc(-1 * var(--Header-height)))",
            // opacity: "var(--collapsed, 0)",
            containerType: "inline-size",
          }}
        >
          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "rgba(0 0 0 / 0.12)",
              height: "100%",
              m: 1,
              borderRadius: "8px",
              backdropFilter: "blur(4px)",
              opacity: {
                "@": 0,
                "@100": 1,
              },
              transition: "opacity 0.3s",
            }}
          >
            <Box sx={{ textAlign: "right", p: 1 }}>
              <IconButton
                className="EdgeSidebar-trigger"
                onClick={() => toggleTemporaryEdgeSidebar()}
              >
                <Close />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ position: "fixed", bottom: "1rem", left: "1rem" }}>
            <Avatar />
          </Box>
        </EdgeSidebarContent>
      </EdgeSidebar>
      <Footer sx={{ background: "unset", border: "none" }}>
        <Box
          sx={{
            maxWidth: 400,
            p: "10px 10px 10px 16px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            border: "1px solid",
            borderColor: "divider",
            borderBottomWidth: 0,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <Box
            component="input"
            placeholder="Reply to Claude"
            sx={{
              backgroundColor: "initial",
              height: 28,
              width: "100%",
              "&:focus": {
                outline: "none",
              },
            }}
          />
          <div style={{ fontSize: "0.875rem" }}>Claude 3.5 Sonnet</div>
        </Box>
      </Footer>
    </Root>
  );
}
