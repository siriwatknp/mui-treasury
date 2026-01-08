"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { PreviewComponent } from "@/components/preview-page";
import {
  Dropzone01,
  DropzoneFile,
} from "@/registry/components/dropzone-01/dropzone-01";

export default function Page() {
  const [files, setFiles] = React.useState<DropzoneFile[]>([]);

  return (
    <PreviewComponent>
      <Box sx={{ maxWidth: 480, mx: "auto" }}>
        <Dropzone01
          value={files}
          onChange={setFiles}
          accept={{
            "image/*": [".png", ".jpg", ".jpeg", ".gif"],
            "application/pdf": [".pdf"],
          }}
          maxSize={10 * 1024 * 1024}
        />
      </Box>
    </PreviewComponent>
  );
}
