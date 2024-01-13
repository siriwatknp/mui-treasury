import React from "react";
import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
import { inputBaseClasses } from "@mui/material/InputBase";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export function TextFieldShade() {
  const InputLabelProps: TextFieldProps["InputLabelProps"] = {
    shrink: true,
    sx: {
      color: "text.primary",
      transform: "translate(0, 1.5px) scale(0.8)",
      letterSpacing: 1,
      "&.Mui-focused:not(.Mui-error)": {
        color: "text.primary",
      },
    },
  };
  const InputProps: TextFieldProps["InputProps"] = {
    disableUnderline: true,
    sx: {
      backgroundColor: "grey.200",
      transition: "0.3s",
      "label + &": {
        marginTop: "24px",
      },
      [`&.${inputBaseClasses.focused}`]: {
        backgroundColor: "common.white",
        boxShadow: `0 0 0 2px ${yellow[700]}`,
      },
      [`&.${inputBaseClasses.error}`]: {
        backgroundColor: "#fff0f0",
        [`&.${inputBaseClasses.focused}`]: {
          boxShadow: `0 0 0 2px #ff6b81`,
        },
      },
      [`&.${inputBaseClasses.disabled}`]: {
        backgroundColor: "grey.50",
      },
      [`& .${inputBaseClasses.input}`]: {
        padding: "1rem",
      },
    },
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField
        label={"Order Name"}
        placeholder={"Placeholder"}
        variant="standard"
        margin={"normal"}
        required
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
      />
      <TextField
        label={"My License Number"}
        placeholder={"Disabled"}
        variant="standard"
        margin={"normal"}
        disabled
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
      />
      <TextField
        error
        label={
          <>
            Destination{" "}
            <Box display="inline-block" color="grey.400">
              (optional)
            </Box>
          </>
        }
        placeholder={"Placeholder"}
        variant="standard"
        margin={"normal"}
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
      />
    </div>
  );
}
