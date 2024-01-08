import React from "react";
import { SxProps, Theme } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses, TabsProps } from "@mui/material/Tabs";

export const tabsStyles = () => ({
  root: {
    backgroundColor: "#eee",
    borderRadius: "10px",
    minHeight: 44,
  },
  flexContainer: {
    position: "relative",
    padding: "0 3px",
    zIndex: 1,
  },
  indicator: {
    top: 3,
    bottom: 3,
    right: 3,
    height: "auto",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)",
  },
});

export const tabItemStyles = (theme: Theme) => ({
  root: {
    fontWeight: 500,
    minHeight: 44,
    minWidth: 96,
    opacity: 0.7,
    color: (theme.vars || theme).palette.text.primary,
    textTransform: "initial",
    "&:hover": {
      opacity: 1,
    },
    [`&.${tabClasses.selected}`]: {
      color: (theme.vars || theme).palette.text.primary,
      opacity: 1,
    },
    [theme.breakpoints.up("md")]: {
      minWidth: 120,
    },
  },
});

function toSx<ClassKey extends string>(
  styles: (theme: Theme) => Partial<Record<ClassKey, any>>,
  classes: Record<ClassKey, string>
) {
  return function sxCallback(theme: Theme) {
    let sx = {};
    Object.entries<any>(styles(theme)).forEach(([key, value]) => {
      if (key === "root") {
        sx = { ...sx, ...value };
      } else {
        sx[`& .${classes[key]}`] = value;
      }
    });
    return sx;
  } as SxProps<Theme>;
}

export function TabsApple({ sx }: TabsProps) {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabItemSx = toSx(tabItemStyles, tabClasses);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={[toSx(tabsStyles, tabsClasses), ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Tab disableRipple label={"All"} sx={tabItemSx} />
      <Tab disableRipple label={"Missed"} sx={tabItemSx} />
      <Tab disableRipple label={"Calls"} sx={tabItemSx} />
    </Tabs>
  );
}
