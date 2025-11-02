"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function TabsChip01() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={(theme) => ({
        minHeight: "auto",
        gap: 0.5,
        "& .MuiTabs-indicator": {
          display: "none",
        },
        "& .MuiTabs-flexContainer": {
          gap: 0.5,
        },
        "& .MuiTab-root": {
          minHeight: "auto",
          minWidth: "auto",
          px: 3,
          py: 1,
          borderRadius: 99,
          fontWeight: 500,
          textTransform: "none",
          color: "text.secondary",
          bgcolor: (theme.vars || theme).palette.grey[100],
          "@media (hover: hover)": {
            "&:hover": {
              bgcolor: (theme.vars || theme).palette.grey[200],
            },
          },
          "&.Mui-selected": {
            color: "primary.contrastText",
            bgcolor: "primary.main",
            "@media (hover: hover)": {
              "&:hover": {
                bgcolor: "primary.dark",
              },
            },
          },
          ...theme.applyStyles("dark", {
            bgcolor: (theme.vars || theme).palette.grey[800],
            "@media (hover: hover)": {
              "&:hover": {
                bgcolor: (theme.vars || theme).palette.grey[700],
              },
            },
            "&.Mui-selected": {
              color: "primary.contrastText",
              bgcolor: "primary.main",
              "@media (hover: hover)": {
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              },
            },
          }),
        },
      })}
    >
      <Tab label="All chips" />
      <Tab label="M4 Pro" />
      <Tab label="M4 Max" />
    </Tabs>
  );
}
