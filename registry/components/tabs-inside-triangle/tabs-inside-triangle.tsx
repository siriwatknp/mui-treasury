"use client";

import React from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsInsideTriangle() {
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
          height: 80,
          width: 150,
          color: (theme.vars || theme).palette.background.paper,
          opacity: 0.7,
          "&:before": {
            position: "absolute",
            top: 65,
            left: 75,
            content: '" "',
            height: 30,
            width: 30,
            background: "transparent",
            transformOrigin: "0% 0%",
            transform: "rotate(45deg)",
            boxShadow: `0 0 0 150px ${
              (theme.vars || theme).palette.primary.main
            }`,
            zIndex: -1,
          },
          [`&.${tabClasses.selected}`]: {
            opacity: 0.99,
            color: (theme.vars || theme).palette.background.paper,
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
