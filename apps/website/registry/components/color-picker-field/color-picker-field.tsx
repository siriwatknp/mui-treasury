"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Popover from "@mui/material/Popover";
import { HexColorPicker } from "react-colorful";

export interface ColorPickerFieldProps
  extends Omit<TextFieldProps, "value" | "onChange"> {
  value?: string;
  onChange?: (color: string) => void;
}

export const ColorPickerField = React.forwardRef<
  HTMLDivElement,
  ColorPickerFieldProps
>(function ColorPickerField(props, ref) {
  const { value = "#000000", onChange, slotProps, ...other } = props;

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (newColor: string) => {
    onChange?.(newColor);
  };

  return (
    <>
      <TextField
        ref={ref}
        value={value}
        onClick={handleClick}
        slotProps={{
          ...slotProps,
          input: {
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <Box
                  aria-hidden
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: value,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                />
              </InputAdornment>
            ),
            sx: { cursor: "pointer" },
            ...slotProps?.input,
          },
        }}
        {...other}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: { p: 0.5, overflow: "unset" },
          },
        }}
      >
        <HexColorPicker color={value} onChange={handleColorChange} />
      </Popover>
    </>
  );
});
