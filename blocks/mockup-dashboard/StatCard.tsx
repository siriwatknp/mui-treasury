import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { Square } from "../mockup-shape";
import { Word } from "../mockup-typography";
import { getLightGrey } from "../mockup-utils";

export const StatCardMockup = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        borderRadius: 1,
        border: "1px solid",
        borderColor: getLightGrey,
        bgcolor: "background.paper",
        p: 1.5,
        display: "flex",
        alignItems: "center",
        boxShadow: "0 2px 6px 0 rgba(0,0,0,0.08)",
        ...props.sx,
      }}
    >
      <Square />
      <Box sx={{ ml: 1.5, minWidth: "0px" }}>
        <Word
          sx={{
            height: 10,
            borderRadius: 3,
            bgcolor: getLightGrey,
            m: 0,
          }}
        />
        <Word sx={{ mt: 0.5, mb: 0 }} />
      </Box>
    </Box>
  );
};
