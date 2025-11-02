import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";

export default function ColorSchemeSelectBasic() {
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
            height: 56,
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
      value={mode}
      onChange={(event) => {
        setMode(event.target.value as "system" | "light" | "dark");
      }}
      sx={{ minWidth: 112 }}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}
