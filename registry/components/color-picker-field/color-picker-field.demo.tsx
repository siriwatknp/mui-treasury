"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import { ColorPickerField } from "./color-picker-field";

export default function ColorPickerFieldDemo() {
  const [color, setColor] = React.useState("#ffffff");
  const [color2, setColor2] = React.useState("#3b82f6");

  return (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: 400 }}>
      <ColorPickerField
        label="Pick a color"
        helperText="Click to open color picker"
        value={color}
        onChange={setColor}
      />

      <ColorPickerField
        size="small"
        label="Primary color (small)"
        value={color2}
        onChange={setColor2}
      />

      <ColorPickerField label="Disabled" disabled value="#cccccc" />
    </Stack>
  );
}
