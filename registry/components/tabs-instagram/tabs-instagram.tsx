"use client";

import React from "react";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import GridOnOutlined from "@mui/icons-material/GridOnOutlined";
import LiveTv from "@mui/icons-material/LiveTv";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

export default function TabsInstagram() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      textColor="inherit"
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={(theme) => ({
        boxShadow: `inset 0 1px 0 0 ${(theme.vars || theme).palette.divider}`,
        overflow: "visible",
        ...theme.applyStyles("dark", {
          boxShadow: `inset 0 1px 0 0 ${
            (theme.vars || theme).palette.grey[800]
          }`,
        }),
        [`& .${tabsClasses.indicator}`]: {
          bottom: "unset",
          top: 0,
          height: "1px",
          bgcolor: (theme.vars || theme).palette.text.primary,
        },
        [`& .${tabClasses.root}`]: {
          lineHeight: "inherit",
          minWidth: 0,
          flexDirection: "row",
          letterSpacing: "1px",
          "& svg, .material-icons": {
            fontSize: 16,
            mr: 1,
          },
          "&:not(:last-child)": {
            mr: 3,
            [theme.breakpoints.up("sm")]: {
              mr: 7.5,
            },
          },
          [theme.breakpoints.up("md")]: {
            minWidth: 0,
          },
          [`& .${tabClasses.labelIcon}`]: {
            minHeight: 53,
          },
          [`& .${tabClasses.icon}`]: {
            mb: 0,
          },
          "&.Mui-focusVisible": {
            backgroundColor: (theme.vars || theme).palette.action.hover,
          },
        },
      })}
    >
      <Tab disableRipple label={"Data"} icon={<GridOnOutlined />} />
      <Tab disableRipple label={"Rule"} icon={<LiveTv />} />
      <Tab disableRipple label={"Indexes"} icon={<BookmarkBorderOutlined />} />
      <Tab disableRipple label={"Usage"} />
    </Tabs>
  );
}
