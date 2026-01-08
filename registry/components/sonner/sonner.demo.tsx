"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Sonner, toast } from "./sonner";

export default function SonnerDemo() {
  return (
    <>
      <Sonner />
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Button variant="outlined" onClick={() => toast("Default toast")}>
          Default
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() => toast.success("Success toast")}
        >
          Success
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => toast.error("Error toast")}
        >
          Error
        </Button>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => toast.warning("Warning toast")}
        >
          Warning
        </Button>
        <Button
          variant="outlined"
          color="info"
          onClick={() => toast.info("Info toast")}
        >
          Info
        </Button>
      </Stack>
    </>
  );
}
