"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";

export default function TabsSerrated() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <AppBar
      position={"static"}
      elevation={0}
      sx={(theme) => ({
        bgcolor: (theme.vars || theme).palette.grey[200],
        ...theme.applyStyles("dark", {
          bgcolor: (theme.vars || theme).palette.grey[900],
        }),
      })}
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
          sx={(theme) => ({
            alignSelf: "flex-end",
            overflow: "visible",
            [`& .${tabsClasses.scroller}`]: {
              overflow: "visible !important",
            },
            [`& .${tabsClasses.indicator}`]: {
              display: "none",
            },
            [`& .${tabClasses.root}`]: {
              opacity: 1,
              overflow: "initial",
              pt: 2.5,
              minHeight: 7,
              color: (theme.vars || theme).palette.common.white,
              background: "transparent",
              transition: "0.2s",
              mt: 1,
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
                bgcolor: (theme.vars || theme).palette.grey[500],
                transform: "skewY(-6deg)",
                transformOrigin: "100%",
                zIndex: -1,
                ...theme.applyStyles("dark", {
                  bgcolor: (theme.vars || theme).palette.grey[800],
                }),
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
                  "linear-gradient(to top right, rgba(0,0,0,0.2), rgba(0,0,0,0.2) 45%, transparent, transparent 64%)",
              },
              "&.Mui-focusVisible::before": {
                outline: "2px solid currentColor",
                outlineOffset: "-0.5rem",
              },
              [`&.${tabClasses.selected}`]: {
                color: (theme.vars || theme).palette.text.primary,
                zIndex: 100,
                "&:before": {
                  bgcolor: (theme.vars || theme).palette.background.paper,
                  boxShadow: "rgba(0, 0, 0, 0.38) 3px 3px 8px 0px",
                },
                "&:after": {
                  width: "24px",
                },
              },
            },
          })}
        >
          {["Data", "Rule", "Indexes", "Usage"].map((label, index) => (
            <Tab
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
