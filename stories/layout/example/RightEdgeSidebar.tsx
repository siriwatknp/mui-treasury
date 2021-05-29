import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";

import {
  Root,
  Header,
  EdgeSidebar,
  EdgeTrigger,
  SidebarContent,
} from "@mui-treasury/layout";

import Menu from "@material-ui/icons/Menu";
import ArrowRight from "@material-ui/icons/ArrowRight";

const RightEdgeSidebar = () => {
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

export default RightEdgeSidebar;
