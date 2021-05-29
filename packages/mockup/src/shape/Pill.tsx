import React from "react";
import Box, { BoxProps } from "@material-ui/core/Box";
import { getBaseGrey } from "../utils";

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
