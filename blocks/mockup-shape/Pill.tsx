import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { getBaseGrey } from "../mockup-utils";

export const Pill = (props: BoxProps) => (
  <Box
    {...props}
    sx={{
      width: 56,
      height: 24,
      backgroundColor: getBaseGrey,
      borderRadius: 5,
      ...props.sx,
    }}
  />
);
