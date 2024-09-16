import React from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export function SelectShadcn(props: TextFieldProps) {
  return (
    <TextField
      select
      label="Fruit"
      defaultValue=""
      helperText="This is your favorite fruit."
      sx={{
        // same as TextFieldShadcn
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
      slotProps={{
        select: {
          MenuProps: {
            sx: (theme) => ({
              "--radius": "0.5rem",
              "--border": "var(--mui-palette-divider)",
              "& .MuiPaper-root": {
                borderRadius: "calc(var(--radius) - 2px)",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
                my: 1,
                border: "1px solid",
                borderColor: "var(--border)",
              },
              "& .MuiList-root": {
                p: 0.5,
              },
              "& .MuiMenuItem-root": {
                borderRadius: "calc(var(--radius) - 4px)",
                py: 0.875,
                pl: 4,
                pr: 1,
                "&.Mui-focusVisible": {
                  background: "var(--mui-palette-action-hover)",
                  "&.Mui-selected": {
                    background: "var(--mui-palette-action-hover)",
                  },
                },
                "&.Mui-selected": {
                  background: "transparent",
                  "&:hover": {
                    background: "var(--mui-palette-action-hover)",
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    left: "0.5rem",
                    width: 16,
                    height: 16,
                    background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0 / 0.87)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>')`,
                    ...theme.applyStyles("dark", {
                      background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>')`,
                    }),
                  },
                },
              },
            }),
          },
        },
      }}
      {...props}
    >
      <MenuItem value="">
        <em>Select a fruit</em>
      </MenuItem>
      <MenuItem value="apply">Apple</MenuItem>
      <MenuItem value="banana">Banana</MenuItem>
      <MenuItem value="blueberry">Blueberry</MenuItem>
      <MenuItem value="grapes">Grapes</MenuItem>
    </TextField>
  );
}
