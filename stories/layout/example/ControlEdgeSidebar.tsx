import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

import {
  Root,
  Header,
  EdgeSidebar,
  EdgeTrigger,
  SidebarContent,
  Content,
  useLayoutCtx,
} from "@mui-treasury/layout";

import Menu from "@material-ui/icons/Menu";
import ArrowLeft from "@material-ui/icons/ArrowLeft";

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
