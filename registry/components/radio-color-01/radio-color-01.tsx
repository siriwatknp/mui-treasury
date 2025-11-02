"use client";

import * as React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const colors = [
  { value: "silver", color: "#c0c0c0", label: "Silver" },
  { value: "orange", color: "#ff8c42", label: "Orange" },
  { value: "navy", color: "#3d4d6a", label: "Navy" },
] as const;

interface ColorSwatchIconProps {
  color: string;
  checked?: boolean;
}

function ColorSwatchIcon({ color, checked = false }: ColorSwatchIconProps) {
  return (
    <Box
      sx={(theme) => ({
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: theme.transitions.create(["box-shadow"], {
          duration: theme.transitions.duration.shortest,
        }),
        ...(checked && {
          boxShadow: `0 0 0 2px ${
            (theme.vars || theme).palette.background.paper
          }, 0 0 0 4px ${(theme.vars || theme).palette.primary.main}`,
        }),
      })}
    />
  );
}

export default function RadioColor01() {
  const [selectedColor, setSelectedColor] = React.useState("silver");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6">
        Color - {colors.find((c) => c.value === selectedColor)?.label}
      </Typography>
      <RadioGroup
        aria-label="Color selection"
        value={selectedColor}
        onChange={handleChange}
        sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}
      >
        {colors.map(({ value, color, label }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={
              <Radio
                disableTouchRipple
                disableFocusRipple
                icon={<ColorSwatchIcon color={color} />}
                checkedIcon={<ColorSwatchIcon color={color} checked />}
                sx={{ p: 0 }}
              />
            }
            label=""
            aria-label={label}
            sx={{ m: 0 }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}
