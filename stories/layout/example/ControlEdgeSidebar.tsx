import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

import {
  Root,
  Header,
  EdgeSidebar,
  EdgeTrigger,
  SidebarContent,
  Content,
  useLayoutCtx,
} from "@mui-treasury/layout";

import Menu from "@mui/icons-material/Menu";
import ArrowLeft from "@mui/icons-material/ArrowLeft";

const TriggerUsingHook = () => {
  const {
    state: { leftEdgeSidebar },
    toggleLeftSidebarOpen,
  } = useLayoutCtx();
  return (
    <ListItem button onClick={toggleLeftSidebarOpen}>
      {leftEdgeSidebar?.open ? "Close" : "Open"}
    </ListItem>
  );
};

const ControlEdgeSidebar = () => {
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

export default ControlEdgeSidebar;
