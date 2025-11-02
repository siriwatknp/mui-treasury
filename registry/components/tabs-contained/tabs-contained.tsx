"use client";

import React from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsContained() {
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
          zIndex: 2,
          color: (theme.vars || theme).palette.text.primary,
          bgcolor: (theme.vars || theme).palette.background.paper,
          transition: "0.2s",
          [theme.breakpoints.up("sm")]: {
            minWidth: 120,
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
              height: 20,
              width: "1px",
              zIndex: 1,
              bgcolor: (theme.vars || theme).palette.grey[300],
              ...theme.applyStyles("dark", {
                bgcolor: (theme.vars || theme).palette.grey[700],
              }),
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
            bgcolor: (theme.vars || theme).palette.primary.main,
            color: (theme.vars || theme).palette.background.paper,
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
      <Tab label={"Specs"} />
      <Tab label={"Comparison"} />
      <Tab label={"Reviews"} />
      <Tab label={"Return Policy"} />
    </Tabs>
  );
}
