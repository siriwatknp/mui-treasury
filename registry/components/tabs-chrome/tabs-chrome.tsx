"use client";

import React from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsChrome() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={(theme) => ({
        [`& .${tabsClasses.indicator}`]: {
          display: "none",
        },
        [`& .${tabClasses.root}`]: {
          opacity: 1,
          overflow: "initial",
          px: 2,
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          color: (theme.vars || theme).palette.text.primary,
          bgcolor: (theme.vars || theme).palette.grey[300],
          transition: "0.2s",
          zIndex: 2,
          mt: 0.5,
          ...theme.applyStyles("dark", {
            bgcolor: (theme.vars || theme).palette.grey[700],
          }),
          [theme.breakpoints.up("md")]: {
            minWidth: 160,
          },
          "&:before": {
            transition: "0.2s",
          },
          "&:not(:first-of-type)": {
            "&:before": {
              content: '" "',
              position: "absolute",
              left: 0,
              display: "block",
              height: 16,
              width: "1px",
              zIndex: 1,
              mt: 1,
              bgcolor: (theme.vars || theme).palette.grey[500],
            },
          },
          [`& + .${tabClasses.selected}::before`]: {
            opacity: 0,
          },
          "@media (hover: hover)": {
            "&:hover": {
              [`&:not(.${tabClasses.selected})`]: {
                bgcolor: "action.hover",
              },
              "&::before": {
                opacity: 0,
              },
              [`& + .${tabClasses.root}::before`]: {
                opacity: 0,
              },
            },
          },
          [`&.${tabClasses.selected}`]: {
            bgcolor: (theme.vars || theme).palette.grey[900],
            color: (theme.vars || theme).palette.background.paper,
            ...theme.applyStyles("dark", {
              bgcolor: (theme.vars || theme).palette.grey[100],
            }),
          },
          [`&.${tabClasses.selected} + .${tabClasses.root}`]: {
            zIndex: 1,
          },
          [`&.${tabClasses.selected} + .${tabClasses.root}::before`]: {
            opacity: 0,
          },
        },
      })}
    >
      <Tab label={"Label 1"} />
      <Tab label={"Label 2"} />
      <Tab label={"Label 3"} />
      <Tab label={"Label 4"} />
    </Tabs>
  );
}
