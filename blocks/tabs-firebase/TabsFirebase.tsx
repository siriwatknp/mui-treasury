import React from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  textTransform: "initial",
  minWidth: 0,
  letterSpacing: 0.5,
  margin: theme.spacing(0, 2),
  padding: 0,
  overflow: "unset",
  fontWeight: 500,
  "&:hover::before": {
    backgroundColor: "rgba(0 0 0 / 0.04)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: "-1rem",
    right: "-1rem",
    height: "100%",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 0,
  },
}));

export function TabsFirebase() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={{
        marginLeft: 1,
        [`& .${tabsClasses.indicator}`]: {
          height: 3,
          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px",
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
