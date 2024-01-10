import React from "react";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import GridOnOutlined from "@mui/icons-material/GridOnOutlined";
import LiveTv from "@mui/icons-material/LiveTv";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  lineHeight: "inherit",
  minWidth: 0,
  flexDirection: "row",
  letterSpacing: "1px",
  textTransform: "uppercase",
  "& svg, .material-icons": {
    fontSize: 16,
    marginRight: 8,
  },
  "&:not(:last-child)": {
    marginRight: 24,
    [theme.breakpoints.up("sm")]: {
      marginRight: 60,
    },
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 0,
  },
  [`& .${tabClasses.labelIcon}`]: {
    minHeight: 53,
  },
  [`& .${tabClasses.iconWrapper}`]: {
    marginBottom: 0,
  },
}));

export function TabsInstagram() {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      textColor="inherit"
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={{
        boxShadow: "inset 0 1px 0 0 #efefef",
        overflow: "visible",
        [`& .${tabsClasses.indicator}`]: {
          bottom: "unset",
          top: 0,
          height: "1px",
          backgroundColor: "#262626",
        },
      }}
    >
      <TabItem disableRipple label={"Data"} icon={<GridOnOutlined />} />
      <TabItem disableRipple label={"Rule"} icon={<LiveTv />} />
      <TabItem
        disableRipple
        label={"Indexes"}
        icon={<BookmarkBorderOutlined />}
      />
      <TabItem disableRipple label={"Usage"} />
    </Tabs>
  );
}
