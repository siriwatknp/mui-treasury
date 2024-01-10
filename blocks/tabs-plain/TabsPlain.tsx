import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

const TabItem = styled(Tab)({
  border: "1px solid #e9e9e9",
  "&:not(:first-of-type)": {
    marginLeft: -1,
  },
  background: "#f7f7f7",
  [`&.${tabClasses.selected}`]: {
    borderBottomWidth: 0,
    background: "#ffffff",
  },
});

export function TabsPlain() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      textColor="inherit"
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={{
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
