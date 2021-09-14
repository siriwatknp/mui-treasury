import React from "react";
import Divider from "@mui/material/Divider";
import { BoxProps } from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { Square } from "../shape";
import { randomBetween } from "../utils";

export const Paragraph = ({
  lineCount = 5,
  sx,
}: {
  lineCount?: number;
  sx?: BoxProps["sx"];
}) => {
  return (
    <>
      {[...Array(lineCount)].map((_, index) => (
        <Square
          key={index}
          sx={{
            height: 16,
            width: randomBetween(96, 100, "%"),
            ...(index !== 0 && { mt: 1.5 }),
            ...sx,
          }}
        />
      ))}
    </>
  );
};

export const ContentMockup = () => {
  return (
    <div>
      <Square sx={{ height: 32, width: 160 }} />
      <Square sx={{ height: 18, width: 120, mt: 1.5 }} />
      <br />
      <br />
      <Paragraph />
      <br />
      <Divider />
      <br />
      <Paragraph />
      <br />
      <br />
      <Stack direction="row" spacing={1}>
        <Square sx={{ height: 200, flexGrow: 1 }} />
        <Square sx={{ height: 200, flexGrow: 1 }} />
        <Square sx={{ height: 200, flexGrow: 1 }} />
      </Stack>
      <br />
      <br />
      <Square sx={{ height: 32, width: 240, mx: "auto" }} />
      <Square sx={{ height: 18, width: 120, mt: 1.5, mx: "auto" }} />
      <br />
      <br />
      <Paragraph sx={{ mx: "auto" }} />
      <br />
      <Stack direction="row" spacing={1}>
        <Square sx={{ height: 100, flexGrow: 1 }} />
        <Square sx={{ height: 100, flexGrow: 1 }} />
        <Square sx={{ height: 100, flexGrow: 1 }} />
        <Square sx={{ height: 100, flexGrow: 1 }} />
      </Stack>
    </div>
  );
};
