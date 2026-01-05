"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PreviewComponent } from "@/components/preview-page";
import { ColorPickerField } from "@/registry/components/color-picker-field/color-picker-field";

export default function Page() {
  const [color, setColor] = React.useState("#ffffff");
  const [color2, setColor2] = React.useState("#3b82f6");

  return (
    <PreviewComponent>
      <Box sx={{ maxWidth: 400, mx: "auto" }}>
        <Stack spacing={3}>
          <Typography variant="h4">Color Picker Field</Typography>

          <ColorPickerField
            label="Input label"
            helperText="Input description"
            value={color}
            onChange={setColor}
          />

          <ColorPickerField
            label="Primary color"
            value={color2}
            onChange={setColor2}
          />

          <ColorPickerField label="Disabled" disabled value="#cccccc" />
        </Stack>
      </Box>
    </PreviewComponent>
  );
}
