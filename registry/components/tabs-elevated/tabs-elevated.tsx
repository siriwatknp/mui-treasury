"use client";

import React from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsElevated() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={(theme) => ({
        width: "100%",
        borderRadius: 1,
        background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
        p: 1.25,
        boxShadow: (theme.vars || theme).shadows[8],
        ...theme.applyStyles("dark", {
          boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.7)",
        }),
        [`& .${tabsClasses.indicator}`]: {
          height: "100%",
          borderRadius: 1,
          bgcolor: "rgba(255, 255, 255, 0.2)",
        },
        [`& .${tabClasses.root}`]: {
          mx: 2,
          minWidth: 0,
          fontWeight: "normal",
          letterSpacing: 0.5,
          color: (theme.vars || theme).palette.common.white,
          borderRadius: 1,
          [`&.${tabClasses.selected}`]: {
            color: (theme.vars || theme).palette.common.white,
          },
          [theme.breakpoints.up("md")]: {
            minWidth: 0,
          },
        },
      })}
    >
      <Tab label={"Data"} />
      <Tab label={"Rule"} />
      <Tab label={"Indexes"} />
      <Tab label={"Usage"} />
    </Tabs>
  );
}
