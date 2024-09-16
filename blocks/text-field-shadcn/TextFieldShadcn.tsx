import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export function TextFieldShadcn(props: TextFieldProps) {
  return (
    <TextField
      label="Username"
      placeholder="shadcn"
      helperText="This is your public display name."
      {...props}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
      sx={{
        "--radius": "0.5rem",
        "--ring": "var(--mui-palette-text-primary)",
        "--input": "rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)",
        "& legend": {
          display: "none",
        },
        "& label": {
          position: "initial",
          transform: "none",
          pointerEvents: "auto",
          fontSize: "0.875rem",
          fontWeight: 500,
          color: "text.primary",
          "&.Mui-focused, &.Mui-error": {
            color: "text.primary",
          },
        },
        "& .MuiFormHelperText-root": {
          marginInline: 0,
          mt: 1,
          fontSize: "0.875rem",
        },
        "& .MuiOutlinedInput-root:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "var(--input)",
          },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "var(--input)",
            borderWidth: "1px",
            outline: "2px solid var(--ring)",
            outlineOffset: "2px",
          },
        "& .Mui-error": {
          "--input": "var(--mui-palette-error-main)",
          "--ring": "var(--mui-palette-error-main)",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          top: 0,
          borderColor: "var(--input)",
          borderRadius: "calc(var(--radius) - 2px)",
        },
        "& .MuiInputBase-root": {
          mt: 1,
        },
        "& .MuiInputBase-input": {
          minHeight: 40,
          boxSizing: "border-box",
          px: 1.5,
          py: 1,
        },
      }}
    />
  );
}
