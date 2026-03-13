"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import { FileUploadField } from "@/registry/components/file-upload-field/file-upload-field";

export function Demo() {
  const [file, setFile] = React.useState<File | null>(null);
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  return (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: 400 }}>
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

      <FileUploadField label="Disabled" disabled placeholder="Cannot upload" />
    </Stack>
  );
}
