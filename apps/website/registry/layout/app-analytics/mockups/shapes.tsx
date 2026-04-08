"use client";
import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { getBaseGrey } from "./utils";

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
