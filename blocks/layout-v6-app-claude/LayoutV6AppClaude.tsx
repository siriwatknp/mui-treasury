import React from "react";
import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import {
  applyEdgeSidebarRightStyles,
  applyEdgeSidebarStyles,
  applyHeaderStyles,
  applyRootStyles,
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  EdgeSidebarRight,
  Footer,
  Header,
  layoutClasses,
  Root,
  toggleEdgeSidebarRightCollapse,
  toggleTemporaryEdgeSidebar,
  toggleTemporaryEdgeSidebarRight,
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
        <IconButton
          className={layoutClasses.TemporaryEdgeSidebarRightTrigger}
          sx={{ ml: "auto" }}
          onClick={() => {
            toggleTemporaryEdgeSidebarRight();
          }}
        >
          <TuneIcon />
        </IconButton>
        <IconButton
          className={layoutClasses.EdgeSidebarRightCollapser}
          sx={{ ml: "auto" }}
          onClick={(event) => {
            toggleEdgeSidebarRightCollapse({ event });
          }}
        >
          <TuneIcon />
        </IconButton>
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
      <EdgeSidebarRight
        sx={(theme) => ({
          ...applyEdgeSidebarRightStyles({
            theme,
            config: {
              xs: {
                variant: "temporary",
                // ถ้าจอเล็กกว่า 720px ให้ width = 100vw
                // ถ้าจอใหญ่กว่า 720px ให้ width = 420px
                width: "clamp(420px, (720px - 100vw) * 9999, 100vw)",
              },
              md: {
                variant: "permanent",
                width: "420px",
                collapsedWidth: "0px",
              },
            },
          }),
          "&::before": {
            display: "none",
          },
        })}
      >
        <EdgeSidebarContent sx={{ background: "none" }}>
          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "rgba(0 0 0 / 0.12)",
              m: 1,
              height: {
                xs: "calc(100% - var(--Header-height) - 16px)",
                md: "100%",
              },
              borderRadius: "8px",
              backdropFilter: "blur(4px)",
            }}
          >
            <Box sx={{ textAlign: "right", p: 1 }}>
              <IconButton
                className={layoutClasses.TemporaryEdgeSidebarRightTrigger}
                onClick={() => toggleTemporaryEdgeSidebarRight()}
              >
                <Close />
              </IconButton>
              <IconButton
                className={layoutClasses.EdgeSidebarRightCollapser}
                onClick={(event) =>
                  toggleEdgeSidebarRightCollapse({
                    event,
                  })
                }
              >
                <Close />
              </IconButton>
            </Box>
          </Box>
        </EdgeSidebarContent>
      </EdgeSidebarRight>
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
