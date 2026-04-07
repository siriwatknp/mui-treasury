"use client";
import React from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Menu = ({
  active,
  children,
  ...props
}: { active?: boolean } & BoxProps) => (
  <Box
    {...props}
    sx={{
      display: "inline-flex",
      alignItems: "center",
      alignSelf: "stretch",
      position: "relative",
      px: 2,
      color: active ? "secondary.main" : "common.white",
      fontSize: 18,
      ...props.sx,
    }}
  >
    {children}
    {active && (
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "secondary.main",
          height: 4,
        }}
      />
    )}
  </Box>
);

const ReactHeader = ({ concise }: { concise?: boolean }) => (
  <>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mr: 2,
        flexShrink: 0,
        flexBasis: "calc(100% / 6)",
      }}
    >
      <img
        src={
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        }
        alt={"react logo"}
        style={{ height: 20 }}
      />
      <Typography color={"secondary"} variant={"h6"} style={{ marginLeft: 8 }}>
        <b>React</b>
      </Typography>
    </Box>
    <Box
      component={"nav"}
      sx={{
        display: "flex",
        alignItems: "center",
        alignSelf: "stretch",
        overflow: "auto",
      }}
    >
      <Menu active>Docs</Menu>
      <Menu>Tutorial</Menu>
      <Menu>Blog</Menu>
      <Menu>Community</Menu>
    </Box>
    {!concise && (
      <Box sx={{ ml: "auto" }}>
        <Menu sx={{ fontSize: 16 }}>v16.12.0</Menu>
        <Menu sx={{ fontSize: 16 }}>Languages</Menu>
        <Menu sx={{ fontSize: 16 }}>Github</Menu>
      </Box>
    )}
  </>
);

export default ReactHeader;
