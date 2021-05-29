import React from "react";
import Box, { BoxProps } from "@material-ui/core/Box";
import { getBaseGrey } from "../utils";

export const Square = (props: BoxProps) => (
  <Box
    {...props}
    sx={{
      width: "1em",
      height: "1em",
      fontSize: "40px",
      backgroundColor: getBaseGrey,
      borderRadius: 1,
      flexShrink: 0,
      ...props.sx,
    }}
  />
);
