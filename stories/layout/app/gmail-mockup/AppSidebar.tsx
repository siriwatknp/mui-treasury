import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import Inbox from "@mui/icons-material/Inbox";
import Star from "@mui/icons-material/Star";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import People from "@mui/icons-material/People";
import Info from "@mui/icons-material/Info";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import ModeComment from "@mui/icons-material/ModeComment";
import Schedule from "@mui/icons-material/Schedule";
import Mail from "@mui/icons-material/Mail";
import Report from "@mui/icons-material/Report";
import Settings from "@mui/icons-material/Settings";
import Videocam from "@mui/icons-material/Videocam";
import Keyboard from "@mui/icons-material/Keyboard";

import GmailButton from "@mui-treasury/components/button/gmail";
import GmailSidebarItem from "@mui-treasury/components/sidebarItem/gmail";
import Menu from "@mui-treasury/components/menu/collapsible";

import { useLayoutCtx, useSidebarCtx } from "@mui-treasury/layout";

const SidebarContent = styled("div")`
  min-height: 0;
  flex-grow: 1;
  overflow: auto;
`;

const AppSidebar = () => {
  const [index, setIndex] = React.useState(0);
  const { expanded } = useSidebarCtx();
  const { state } = useLayoutCtx();
  const collapsed = !expanded && state.leftEdgeSidebar?.collapsed;
  const commonProps = (i) => ({
    collapsed,
    selected: i === index,
    onClick: () => {
      setIndex(i);
    },
    dotOnCollapsed: true,
  });
  return (
    <Box
      display={"flex"}
      flexGrow={1}
      flexDirection={"column"}
      {...(expanded && {
        boxShadow:
          "0 16px 10px 0 rgba(0,0,0,0.34), 0 11px 18px 0 rgba(0,0,0,0.12), 0 13px 5px -1px rgba(0,0,0,0.2)",
      })}
    >
      <Box mt={2} mb={collapsed ? 1 : 2} pl={1}>
        <GmailButton collapsed={collapsed} />
      </Box>
      <SidebarContent>
        <Box maxWidth={240}>
          <List>
            <GmailSidebarItem
              color={"#da3125"}
              startIcon={<Inbox />}
              label={"Inbox"}
              amount={"1,198"}
              {...commonProps(0)}
              dotOnCollapsed={false}
            />
            <GmailSidebarItem
              startIcon={<Star />}
              label={"Starred"}
              {...commonProps(1)}
            />
            <GmailSidebarItem
              startIcon={<InsertDriveFile />}
              label={<b>Drafts</b>}
              amount={"5"}
              {...commonProps(2)}
            />
            <GmailSidebarItem
              color={"#1a73e8"}
              startIcon={<People />}
              label={<b>Social</b>}
              {...commonProps(3)}
            />
            <GmailSidebarItem
              color={"#e37400"}
              startIcon={<Info />}
              label={"Updates"}
              {...commonProps(4)}
            />
            <Menu
              renderToggle={({ collapsed: menuCollapsed, onClick }) => (
                <GmailSidebarItem
                  startIcon={
                    menuCollapsed ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                  }
                  label={collapsed ? "" : menuCollapsed ? "Less" : "More"}
                  onClick={onClick}
                />
              )}
            >
              <GmailSidebarItem
                startIcon={<ModeComment />}
                label={"Chats"}
                {...commonProps(5)}
              />
              <GmailSidebarItem
                startIcon={<Schedule />}
                label={"Scheduled"}
                {...commonProps(6)}
              />
              <GmailSidebarItem
                startIcon={<Mail />}
                label={"All Mail"}
                {...commonProps(7)}
              />
              <GmailSidebarItem
                startIcon={<Report />}
                label={"Spam"}
                amount={"52"}
                {...commonProps(8)}
              />
              <GmailSidebarItem
                startIcon={<Settings />}
                label={"Manage Labels"}
                {...commonProps(9)}
              />
            </Menu>
          </List>
        </Box>
      </SidebarContent>
      <Divider />
      <Box maxWidth={240} pb={3} pt={1.5}>
        <List
          subheader={
            !collapsed && (
              <Box ml={"26px"} mr={"12px"} mb={1}>
                <b>Meet</b>{" "}
                <Box
                  ml={0.5}
                  display="inline-flex"
                  px={0.5}
                  bgcolor="#1a73e8"
                  color="#fff"
                  fontSize="0.75rem"
                  borderRadius={4}
                >
                  New
                </Box>
              </Box>
            )
          }
        >
          <GmailSidebarItem
            startIcon={<Videocam />}
            label={"Start a meeting"}
            {...commonProps(10)}
          />
          <GmailSidebarItem
            startIcon={<Keyboard />}
            label={"Join a meeting"}
            {...commonProps(11)}
          />
        </List>
      </Box>
    </Box>
  );
};

export default AppSidebar;
