import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses, TabsProps } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  opacity: 1,
  overflow: "initial",
  zIndex: 2,
  textTransform: "initial",
  color: (theme.vars || theme).palette.text.primary,
  backgroundColor: (theme.vars || theme).palette.background.paper,
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
      width: 1,
      zIndex: 1,
      backgroundColor: (theme.vars || theme).palette.grey[300],
    },
  },
  [`& + .${tabClasses.selected}::before`]: {
    opacity: 0,
  },
  "&:hover": {
    [`&:not(.${tabClasses.selected})`]: {
      backgroundColor: "rgba(0 0 0 / 0.1)",
    },
    "&::before": {
      opacity: 0,
    },
    [`& + .${tabClasses.root}::before`]: {
      opacity: 0,
    },
  },
  [`&.${tabClasses.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.secondary.main,
    color: (theme.vars || theme).palette.common.white,
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}`]: {
    zIndex: 1,
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}::before`]: {
    opacity: 0,
  },
}));

export function TabsContained({ sx }: TabsProps) {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={{
        [`& .${tabsClasses.indicator}`]: {
          display: "none",
        },
      }}
    >
      <TabItem label={"Specs"} />
      <TabItem label={"Comparison"} />
      <TabItem label={"Reviews"} />
      <TabItem label={"Return Policy"} />
    </Tabs>
  );
}
