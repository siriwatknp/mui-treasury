import React from "react";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Menu from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import {
  EdgeSidebar,
  EdgeTrigger,
  Header,
  Root,
  SidebarContent,
} from "../layout-core";

export const LayoutExampleRightEdgeSidebar = () => {
  return (
    <Root
      scheme={{
        header: {
          config: {
            xs: {
              position: "sticky",
              height: 56,
            },
          },
        },
        leftEdgeSidebar: {
          config: {
            sm: {
              variant: "permanent",
              width: 256,
              headerMagnetEnabled: true,
            },
          },
        },
        rightEdgeSidebar: {
          config: {
            sm: {
              variant: "persistent",
              persistentBehavior: "fit",
              width: 64,
            },
          },
        },
      }}
    >
      <CssBaseline />
      <Header>
        <Box display="flex" alignItems="center" gap={1} px={1} flexGrow={1}>
          <div>Header</div>
          <EdgeTrigger
            target={{ anchor: "right", field: "open" }}
            sx={{ marginLeft: "auto" }}
          >
            {(open, setOpen) => (
              <IconButton onClick={() => setOpen(!open)}>
                {open ? <ArrowRight /> : <Menu />}
              </IconButton>
            )}
          </EdgeTrigger>
        </Box>
      </Header>
      <EdgeSidebar anchor="left">
        <SidebarContent></SidebarContent>
      </EdgeSidebar>
      <EdgeSidebar anchor="right">
        <SidebarContent></SidebarContent>
      </EdgeSidebar>
    </Root>
  );
};
