"use client";

import * as React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { ChevronDown } from "lucide-react";

export interface SelectInset01Props extends Omit<SelectProps, "label"> {
  label: string;
  options: Array<{ value: string; label: string }>;
}

export default function SelectInset01({
  label = "Select an option",
  options = [],
  value,
  onChange,
  fullWidth = true,
  ...props
}: SelectInset01Props) {
  const selectId = React.useId();

  return (
    <FormControl fullWidth={fullWidth} variant="filled">
      <InputLabel
        htmlFor={selectId}
        sx={{
          "&.MuiInputLabel-shrink": {
            transform: "translate(12px, 7px) scale(0.9)",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        variant="filled"
        id={selectId}
        value={value}
        onChange={onChange}
        displayEmpty
        IconComponent={ChevronDown}
        sx={{
          minHeight: 56,
          borderRadius: 1,
          border: 1,
          borderColor: "divider",
          backgroundColor: "background.paper",
          "&:hover, &.Mui-focused": {
            backgroundColor: "background.paper",
            borderColor: "primary.main",
          },
          "& .MuiSelect-select": {
            pt: 1.5,
            pb: 1.5,
            px: 2,
          },
          "&::before,::after": {
            display: "none",
          },
          "& .MuiSelect-icon": {
            fontSize: "1.25rem",
            width: "1em",
            height: "1em",
          },
        }}
        {...props}
      >
        <MenuItem value="NONE">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
