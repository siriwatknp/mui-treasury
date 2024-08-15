---
to: ../blocks/<%= h.toFolder(name) %>/<%= h.toName(name) %>.tsx
unless_exists: true
---
import React from "react";
import Box from "@mui/material/Box";

export function <%= h.toName(name) %>() {
  return (
    <Box>It's working</Box>
  );
}
