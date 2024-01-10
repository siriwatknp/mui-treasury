import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  textAlign: "center",
  transition: "all .5s",
  padding: "10px 15px",
  color: "#555555",
  height: "auto",
  margin: "10px 0",
  float: "none",
  fontSize: "12px",
  fontWeight: "500",
  [theme.breakpoints.up("md")]: {
    minWidth: 120,
  },
  [`&.${tabClasses.selected}, &:hover`]: {
    color: "#FFFFFF",
    backgroundColor: "#00acc1",
    boxShadow: "0 7px 10px -5px rgba(76, 175, 80, 0.4)",
  },
}));

export function TabsPill() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={{
        width: "100%",
        [`& .${tabsClasses.indicator}`]: {
          display: "none",
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
