import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  textTransform: "initial",
  height: 80,
  width: 150,
  color: (theme.vars || theme).palette.common.white,
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
    boxShadow: `0 0 0 150px ${(theme.vars || theme).palette.primary.main}`,
    zIndex: -1,
  },
  [`&.${tabClasses.selected}`]: {
    opacity: 0.99,
    color: (theme.vars || theme).palette.common.white,
  },
}));

export function TabsInsideTriangle() {
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
      <TabItem label={"Data"} />
      <TabItem label={"Rule"} />
      <TabItem label={"Indexes"} />
      <TabItem label={"Usage"} />
    </Tabs>
  );
}
