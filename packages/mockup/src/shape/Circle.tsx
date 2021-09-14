import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { getBaseGrey } from "../utils";

export const Circle = (props: BoxProps) => (
  <Box
    {...props}
    sx={{
      width: "1em",
      height: "1em",
      fontSize: "40px",
      backgroundColor: getBaseGrey,
      borderRadius: 10,
      flexShrink: 0,
      ...props.sx,
    }}
  />
);
