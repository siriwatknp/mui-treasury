import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useColorScheme } from "@mui/material/styles";

export default function ColorSchemeSelectIcon() {
  const { mode, systemMode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMode = (mode: "system" | "light" | "dark") => () => {
    setMode(mode);
    handleClose();
  };
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
            width: 40,
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
  const resolvedMode = (systemMode || mode) as "light" | "dark";
  const icon = {
    light: <LightModeIcon />,
    dark: <DarkModeIcon />,
  }[resolvedMode];
  return (
    <>
      <IconButton
        onClick={handleClick}
        disableRipple
        size="small"
        sx={{
          borderRadius: "4px",
          "&:hover, &:focus": {
            backgroundColor: "action.hover",
          },
        }}
        aria-controls={open ? "color-scheme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            variant: "outlined",
            sx: {
              my: "4px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem selected={mode === "system"} onClick={handleMode("system")}>
          System
        </MenuItem>
        <MenuItem selected={mode === "light"} onClick={handleMode("light")}>
          Light
        </MenuItem>
        <MenuItem selected={mode === "dark"} onClick={handleMode("dark")}>
          Dark
        </MenuItem>
      </Menu>
    </>
  );
}
