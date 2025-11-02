"use client";

import React from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsTwitter() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      textColor="inherit"
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={(theme) => ({
        width: "100%",
        boxShadow: `inset 0 -1px 0 0 ${(theme.vars || theme).palette.divider}`,
        [`& .${tabsClasses.indicator}`]: {
          bgcolor: (theme.vars || theme).palette.info.main,
        },
        [`& .${tabClasses.root}`]: {
          minHeight: 53,
          minWidth: 80,
          fontSize: 15,
          fontWeight: 700,
          color: (theme.vars || theme).palette.text.secondary,
          opacity: 1,
          "@media (hover: hover)": {
            "&:hover": {
              bgcolor: "action.hover",
              color: (theme.vars || theme).palette.info.main,
            },
          },
          [theme.breakpoints.up("md")]: {
            minWidth: 120,
          },
          [`&.${tabClasses.selected}`]: {
            color: (theme.vars || theme).palette.info.main,
          },
          "&.Mui-focusVisible": {
            bgcolor: "action.hover",
          },
        },
      })}
    >
      <Tab disableRipple label={"Data"} />
      <Tab disableRipple label={"Rule"} />
      <Tab disableRipple label={"Indexes"} />
      <Tab disableRipple label={"Usage"} />
    </Tabs>
  );
}
