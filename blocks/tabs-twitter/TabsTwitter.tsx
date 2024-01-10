import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  minHeight: 53,
  minWidth: 80,
  textTransform: "none",
  fontSize: 15,
  fontWeight: 700,
  color: "#657786",
  opacity: 1,
  "&:hover": {
    backgroundColor: "rgba(29, 161, 242, 0.1)",
    color: "#1da1f2",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 120,
  },
  [`&.${tabClasses.selected}`]: {
    color: "#1da1f2",
  },
}));

export function TabsTwitter() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      textColor="inherit"
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={{
        width: "100%",
        boxShadow: "inset 0 -1px 0 0 #E6ECF0",
        [`& .${tabsClasses.indicator}`]: {
          backgroundColor: "#1da1f2",
        },
      }}
    >
      <TabItem disableRipple label={"Data"} />
      <TabItem disableRipple label={"Rule"} />
      <TabItem disableRipple label={"Indexes"} />
      <TabItem disableRipple label={"Usage"} />
    </Tabs>
  );
}
