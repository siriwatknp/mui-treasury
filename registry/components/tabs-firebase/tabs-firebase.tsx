"use client";

import React from "react";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsFirebase() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={(theme) => ({
        ml: 1,
        [`& .${tabsClasses.indicator}`]: {
          height: 3,
          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px",
        },
        "& .MuiTab-root": {
          minWidth: 0,
          letterSpacing: 0.5,
          mx: 2,
          p: 0,
          overflow: "unset",
          fontWeight: 500,
          "&::before": {
            content: '""',
            position: "absolute",
            left: "-1rem",
            right: "-1rem",
            height: "100%",
          },
          "@media (hover: hover)": {
            "&:hover::before": {
              bgcolor: "action.hover",
            },
          },
          [`&.Mui-focusVisible`]: {
            "&::before": {
              outline: "1px solid currentColor",
              outlineOffset: "-1px",
              bgcolor: "action.hover",
            },
          },
          [theme.breakpoints.up("md")]: {
            minWidth: 0,
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
