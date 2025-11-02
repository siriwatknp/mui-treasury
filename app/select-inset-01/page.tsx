"use client";

import * as React from "react";
import { PreviewComponent } from "@/components/preview-page";
import SelectInset01 from "@/registry/components/select-inset-01/select-inset-01";
import Box from "@mui/material/Box";

const deviceOptions = [
  { value: "iphone-16", label: "iPhone 16" },
  { value: "iphone-15", label: "iPhone 15" },
  { value: "iphone-14", label: "iPhone 14" },
  { value: "iphone-13", label: "iPhone 13" },
  { value: "samsung-s24", label: "Samsung Galaxy S24" },
  { value: "pixel-8", label: "Google Pixel 8" },
];

export default function Page() {
  const [device, setDevice] = React.useState("iphone-16");

  return (
    <PreviewComponent>
      <Box sx={{ maxWidth: 520 }}>
        <SelectInset01
          label="Your trade-in device"
          value={device}
          onChange={(e) => setDevice(e.target.value as string)}
          options={deviceOptions}
        />
      </Box>
    </PreviewComponent>
  );
}
