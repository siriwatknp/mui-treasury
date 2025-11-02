"use client";

import React from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsApple() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={(theme) => ({
        bgcolor: (theme.vars || theme).palette.grey[200],
        borderRadius: 1.25,
        minHeight: 44,
        ...theme.applyStyles("dark", {
          bgcolor: (theme.vars || theme).palette.grey[800],
        }),
        [`& .${tabsClasses.list}`]: {
          position: "relative",
          px: 0.375,
          zIndex: 1,
        },
        [`& .${tabsClasses.indicator}`]: {
          top: 3,
          bottom: 3,
          right: 3,
          height: "auto",
          borderRadius: 1,
          bgcolor: (theme.vars || theme).palette.background.paper,
          boxShadow: (theme.vars || theme).shadows[4],
        },
        [`& .${tabClasses.root}`]: {
          fontWeight: 500,
          minHeight: 44,
          minWidth: 96,
          opacity: 0.7,
          borderRadius: 1,
          color: (theme.vars || theme).palette.text.primary,
          "@media (hover: hover)": {
            "&:hover": {
              opacity: 1,
            },
          },
          [`&.${tabClasses.selected}`]: {
            color: (theme.vars || theme).palette.text.primary,
            opacity: 1,
          },
          [`&.Mui-focusVisible`]: {
            outline: "1px solid currentColor",
            outlineOffset: "-3px",
          },
          [theme.breakpoints.up("md")]: {
            minWidth: 120,
          },
        },
      })}
    >
      <Tab disableRipple label={"All"} />
      <Tab disableRipple label={"Missed"} />
      <Tab disableRipple label={"Calls"} />
    </Tabs>
  );
}
