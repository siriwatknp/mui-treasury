"use client";

import React from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsPill() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={(theme) => ({
        width: "100%",
        [`& .${tabsClasses.indicator}`]: {
          display: "none",
        },
        [`& .${tabClasses.root}`]: {
          position: "relative",
          borderRadius: 99,
          textAlign: "center",
          transition: "all .5s",
          px: 1.875,
          py: 1.25,
          color: (theme.vars || theme).palette.text.secondary,
          height: "auto",
          my: 1.25,
          fontSize: "0.75rem",
          fontWeight: 500,
          [theme.breakpoints.up("md")]: {
            minWidth: 120,
          },
          [`&.${tabClasses.selected}`]: {
            color: (theme.vars || theme).palette.common.white,
            bgcolor: (theme.vars || theme).palette.info.main,
            boxShadow: (theme.vars || theme).shadows[8],
          },
          "@media (hover: hover)": {
            "&:hover": {
              color: (theme.vars || theme).palette.common.white,
              bgcolor: (theme.vars || theme).palette.info.main,
              boxShadow: (theme.vars || theme).shadows[8],
            },
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
