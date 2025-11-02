import React from "react";
import { outlinedInputClasses } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses } from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";

export default function ColorSchemeSelectMinimal() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return (
      <Box
        sx={(theme) => {
          // copy from OutlinedInput
          const borderColor =
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.23)"
              : "rgba(255, 255, 255, 0.23)";
          return {
            verticalAlign: "bottom",
            display: "inline-flex",
            minWidth: 112,
            height: 40,
            borderRadius: (theme.vars || theme).shape.borderRadius,
            border: "1px solid",
            borderColor: theme.vars
              ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)`
              : borderColor,
          };
        }}
      />
    );
  }
  return (
    <Select
      size="small"
      value={mode}
      onChange={(event) => {
        setMode(event.target.value as "system" | "light" | "dark");
      }}
      sx={{
        minWidth: 112,
        [`&.${selectClasses.focused}, &:hover`]: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "text.disabled",
          },
        },
      }}
      MenuProps={{
        slotProps: {
          paper: {
            variant: "outlined",
            sx: {
              boxShadow:
                "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)",
              mt: 0.5,
            },
          },
        },
      }}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}
