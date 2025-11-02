"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Tabs01() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 400, maxWidth: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={(theme) => ({
          minHeight: "unset",
          mb: "-1px",
          "& .MuiTabs-indicator": {
            display: "none",
          },
          "& .MuiTab-root": {
            borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
            borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
            minHeight: 36,
            border: "1px solid transparent",
            borderBottomWidth: 0,
            "&:hover, &:focus-visible": {
              bgcolor: "action.hover",
            },
            "&.Mui-selected": {
              bgcolor: "background.paper",
              borderColor: "divider",
            },
            "& .MuiTouchRipple-root": {
              display: "none",
            },
          },
        })}
      >
        <Tab
          label="Install with AI"
          icon={<AutoAwesomeIcon />}
          iconPosition="start"
        />
        <Tab label="Web signup" />
        <Tab label="Help" />
      </Tabs>
      <Box
        sx={{
          height: 200,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      ></Box>
    </Box>
  );
}
