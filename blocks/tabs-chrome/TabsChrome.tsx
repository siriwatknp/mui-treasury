import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses, TabsProps } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  opacity: 1,
  overflow: "initial",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  borderTopLeftRadius: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
  color: (theme.vars || theme).palette.text.primary,
  backgroundColor: (theme.vars || theme).palette.grey[300],
  transition: "0.2s",
  zIndex: 2,
  marginTop: theme.spacing(0.5),
  textTransform: "initial",
  [theme.breakpoints.up("md")]: {
    minWidth: 160,
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
      marginTop: theme.spacing(0.5),
      backgroundColor: (theme.vars || theme).palette.grey[500],
    },
  },
  [`& + .${tabClasses.selected}::before`]: {
    opacity: 0,
  },
  "&:hover": {
    [`&:not(.${tabClasses.selected})`]: {
      backgroundColor: "rgba(0 0 0 / 0.2)",
    },
    "&::before": {
      opacity: 0,
    },
    [`& + .${tabClasses.root}::before`]: {
      opacity: 0,
    },
  },
  [`&.${tabClasses.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.grey[900],
    color: (theme.vars || theme).palette.common.white,
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}`]: {
    zIndex: 1,
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}::before`]: {
    opacity: 0,
  },
}));

export function TabsChrome({ sx }: TabsProps) {
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
      <TabItem label={"Label 1"} />
      <TabItem label={"Label 2"} />
      <TabItem label={"Label 3"} />
      <TabItem label={"Label 4"} />
    </Tabs>
  );
}
