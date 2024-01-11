import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { Circle } from "../mockup-shape";
import { Word } from "../mockup-typography";
import { getLightestGrey, getLightGrey } from "../mockup-utils";

export const SideNavUserInfoMockup = ({
  collapsed,
  ...props
}: { collapsed?: boolean } & BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        borderRadius: 1,
        bgcolor: getLightestGrey,
        p: 1.5,
        display: "flex",
        alignItems: "center",
        ...props.sx,
      }}
    >
      <Circle sx={{ fontSize: collapsed ? 36 : 48, transition: "0.2s" }} />
      {!collapsed && (
        <Box sx={{ ml: 1.5, minWidth: "0px" }}>
          <Word />
          <Word
            sx={{
              height: 10,
              borderRadius: 2,
              mt: 0.75,
              bgcolor: getLightGrey,
            }}
          />
        </Box>
      )}
    </Box>
  );
};
