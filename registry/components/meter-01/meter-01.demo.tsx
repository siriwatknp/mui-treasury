import * as React from "react";
import Stack from "@mui/material/Stack";
import { Meter01 } from "./meter-01";

export default function Meter01Demo() {
  return (
    <Stack spacing={4} sx={{ width: 240, maxWidth: "100%" }}>
      <Meter01 label="Memory" value={92} />
      <Meter01 label="Bandwidth" value={45} showValue={false} />
      <Meter01 label="Custom Range" value={175} min={100} max={200} />
    </Stack>
  );
}
