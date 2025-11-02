"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Tabs02() {
  const [value, setValue] = React.useState(2);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="product category tabs"
      sx={(theme) => ({
        minHeight: "auto",
        bgcolor: "grey.100",
        borderRadius: 99,
        p: 1,
        ...theme.applyStyles("dark", {
          bgcolor: "grey.800",
        }),
        "& .MuiTabs-flexContainer": {
          gap: 1,
        },
        "& .MuiTab-root": {
          minHeight: "auto",
          py: 1,
          px: 2,
          zIndex: 1,
          color: "text.secondary",
          fontWeight: 500,
          borderRadius: 99,
          "&.Mui-selected": {
            color: "common.black",
          },
          ...theme.applyStyles("dark", {
            "&.Mui-selected": {
              color: "common.white",
            },
          }),
        },
        "& .MuiTabs-indicator": {
          height: "100%",
          borderRadius: 99,
          bgcolor: "common.white",
          zIndex: 1,
          mixBlendMode: "difference",
          transition: theme.transitions.create(["left", "width"], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
          ...theme.applyStyles("dark", {
            bgcolor: "primary.main",
          }),
        },
      })}
    >
      <Tab label="All products" />
      <Tab label="Laptops" />
      <Tab label="Desktops" />
      <Tab label="Displays" />
    </Tabs>
  );
}
