"use client";

import * as React from "react";
import { Dropzone01, DropzoneFile } from "./dropzone-01";

export default function Dropzone01Demo() {
  const [files, setFiles] = React.useState<DropzoneFile[]>([]);

  return (
    <div className="w-full max-w-md mx-auto p-8">
      <Dropzone01
        value={files}
        onChange={setFiles}
        accept={{
          "image/*": [".png", ".jpg", ".jpeg", ".gif"],
          "application/pdf": [".pdf"],
        }}
        maxSize={10 * 1024 * 1024}
      />
    </div>
  );
}
