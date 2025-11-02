"use client";

import React from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsPlain() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      textColor="inherit"
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={(theme) => ({
        [`& .${tabsClasses.indicator}`]: {
          display: "none",
        },
        [`& .${tabClasses.root}`]: {
          border: "1px solid",
          borderColor: (theme.vars || theme).palette.divider,
          bgcolor: (theme.vars || theme).palette.grey[100],
          ...theme.applyStyles("dark", {
            bgcolor: (theme.vars || theme).palette.grey[900],
          }),
          "&:not(:first-of-type)": {
            ml: -0.125,
          },
          [`&.${tabClasses.selected}`]: {
            borderBottomWidth: 0,
            bgcolor: (theme.vars || theme).palette.background.paper,
          },
          "&.Mui-focusVisible": {
            outline: "2px solid currentColor",
            outlineOffset: "-2px",
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
