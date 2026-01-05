"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PreviewComponent } from "@/components/preview-page";
import { FileUploadField } from "@/registry/components/file-upload-field/file-upload-field";

export default function Page() {
  const [file, setFile] = React.useState<File | null>(null);
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  return (
    <PreviewComponent>
      <Box sx={{ maxWidth: 400, mx: "auto" }}>
        <Stack spacing={3}>
          <Typography variant="h4">File Upload Field</Typography>

          <FileUploadField
            label="Upload any file"
            value={file}
            onChange={setFile}
          />

          <FileUploadField
            label="Upload image"
            value={imageFile}
            onChange={setImageFile}
            accept="image/*"
            helperText="Only image files are accepted"
          />

          <FileUploadField
            label="Disabled"
            disabled
            placeholder="Cannot upload"
          />
        </Stack>
      </Box>
    </PreviewComponent>
  );
}
