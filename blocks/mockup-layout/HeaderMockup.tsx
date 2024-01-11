import React from "react";
import Avatar from "@mui/material/Avatar";
import Box, { BoxProps } from "@mui/material/Box";
import { Pill, Square } from "../mockup-shape";

export const HeaderMockup = ({
  trigger,
  ...props
}: { trigger?: React.ReactNode } & BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", sm: "flex-start" },
        gap: 2,
        px: 2,
        flex: 1,
        ...props.sx,
      }}
    >
      {trigger}
      <Square />

      <Box
        ml="auto"
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: { xs: 2, md: 3 },
        }}
      >
        <Pill />
        <Pill />
        <Pill />
        <Pill />
      </Box>

      <Avatar sx={{ width: 32, height: 32, ml: { xs: 0, sm: 2 } }} />
    </Box>
  );
};
