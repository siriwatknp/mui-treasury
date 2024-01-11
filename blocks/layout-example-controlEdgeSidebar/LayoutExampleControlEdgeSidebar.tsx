import React from "react";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import Menu from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import {
  Content,
  EdgeSidebar,
  EdgeTrigger,
  Header,
  Root,
  SidebarContent,
  useLayoutCtx,
} from "../layout-core";

const TriggerUsingHook = () => {
  const {
    state: { leftEdgeSidebar },
    toggleLeftSidebarOpen,
  } = useLayoutCtx();
  return (
    <ListItemButton onClick={toggleLeftSidebarOpen}>
      {leftEdgeSidebar?.open ? "Close" : "Open"}
    </ListItemButton>
  );
};

export const LayoutExampleControlEdgeSidebar = () => {
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
              variant: "persistent",
              persistentBehavior: "fit",
              width: 256,
              collapsible: true,
              collapsedWidth: 120,
              headerMagnetEnabled: true,
            },
          },
        },
      }}
      initialState={{
        leftEdgeSidebar: {
          open: true,
          collapsed: true,
        },
      }}
    >
      <CssBaseline />
      <Header>
        <Box display="flex" alignItems="center" gap={1} px={1}>
          <EdgeTrigger target={{ anchor: "left", field: "open" }}>
            {(open, setOpen) => (
              <IconButton onClick={() => setOpen(!open)}>
                {open ? <ArrowLeft /> : <Menu />}
              </IconButton>
            )}
          </EdgeTrigger>
          <div>Header</div>
        </Box>
      </Header>
      <EdgeSidebar anchor="left">
        {({ state: { leftEdgeSidebar }, toggleLeftSidebarCollapsed }) => (
          <SidebarContent>
            <List>
              <ListSubheader>Trigger</ListSubheader>
              <ListItem button onClick={toggleLeftSidebarCollapsed}>
                <ListItemText>
                  {leftEdgeSidebar?.collapsed ? "Expand" : "Collapse"}
                </ListItemText>
              </ListItem>
            </List>
          </SidebarContent>
        )}
      </EdgeSidebar>
      <Content>
        <Box p={2}>
          <List>
            <ListSubheader>Using Layout Hook</ListSubheader>
            <TriggerUsingHook />
          </List>
        </Box>
      </Content>
    </Root>
  );
};
