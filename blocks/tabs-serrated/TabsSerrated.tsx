import React from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";

const TabItem = styled(Tab)(({ theme }) => ({
  opacity: 1,
  overflow: "initial",
  paddingTop: theme.spacing(2.5),
  minHeight: theme.spacing(7),
  color: "#fff",
  background: "rbga(0,0,0,0)",
  transition: "0.2s",
  zIndex: "var(--_zIndex)",
  marginTop: theme.spacing(1),
  textTransform: "initial",
  [theme.breakpoints.up("md")]: {
    minWidth: 120,
  },
  "&::before, &::after": {
    content: '" "',
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  "&:before": {
    backgroundColor: (theme.vars || theme).palette.grey[500],
    transform: "skewY(-6deg)",
    transformOrigin: "100%",
    zIndex: -1,
  },
  "&::after": {
    left: "unset",
    pointerEvents: "none",
    transition: "0.2s",
    transform: "translateX(100%)",
    display: "block",
    width: 8,
    zIndex: 2,
    background:
      // eslint-disable-next-line max-len
      "linear-gradient(to top right, rgba(0,0,0,0.2), rgba(0,0,0,0.2) 45%, transparent, transparent 64%)",
  },
  [`&.${tabClasses.selected}`]: {
    color: (theme.vars || theme).palette.text.primary,
    zIndex: 100,
    "&:before": {
      backgroundColor: "#fff",
      boxShadow: "3px 3px 8px 0 rgba(0,0,0,0.38)",
    },
    "&:after": {
      width: theme.spacing(3.5),
    },
  },
}));

export function TabsSerrated() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <AppBar
      position={"static"}
      elevation={0}
      sx={{ backgroundColor: "#E6E8EB" }}
    >
      <Toolbar
        sx={{
          overflow: "hidden",
          minHeight: 72,
        }}
      >
        <Tabs
          textColor="inherit"
          value={tabIndex}
          onChange={(e, index) => setTabIndex(index)}
          sx={{
            alignSelf: "flex-end",
            overflow: "visible",
            [`& .${tabsClasses.scroller}`]: {
              overflow: "visible !important",
            },
            [`& .${tabsClasses.indicator}`]: {
              display: "none",
            },
          }}
        >
          {["Data", "Rule", "Indexes", "Usage"].map((label, index) => (
            <TabItem
              key={index}
              disableRipple
              label={label}
              sx={{ zIndex: 100 - index }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
