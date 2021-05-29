import React from "react";

import Box, { BoxProps } from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { Square, Circle } from "../shape";
import { Word, H1 } from "../typography";
import { getLightGrey } from "../utils";

export const UserActiveCardMockup = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        borderRadius: 1,
        border: "1px solid",
        borderColor: getLightGrey,
        bgcolor: "background.paper",
        p: 1.5,
        boxShadow: "0 2px 6px 0 rgba(0,0,0,0.08)",
        ...props.sx,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Word sx={{ bgcolor: getLightGrey }} />
        <Circle sx={{ fontSize: 20, ml: "auto" }} />
      </Box>
      <br />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Square sx={{ fontSize: 16, bgcolor: "primary.main", mr: 1 }} />
            <Typography variant="h4">
              <b>92%</b>
            </Typography>
          </Box>
          <Word
            sx={{
              bgcolor: getLightGrey,
              ml: 3,
              height: 12,
              borderRadius: 2,
              width: 48,
            }}
          />
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Square sx={{ fontSize: 16, bgcolor: "error.main", mr: 1 }} />
            <Typography variant="h4">
              <b>8%</b>
            </Typography>
          </Box>
          <Word
            sx={{
              bgcolor: getLightGrey,
              ml: 3,
              height: 12,
              borderRadius: 2,
              width: 48,
            }}
          />
        </Box>
      </Box>
      <br />
      <LinearProgress
        variant="determinate"
        value={92}
        sx={{
          height: 10,
          borderRadius: 3,
          bgcolor: getLightGrey,
          "& > .MuiLinearProgress-bar": {
            borderRadius: 3,
          },
        }}
      />
      <Box height={16} />
      <LinearProgress
        variant="determinate"
        value={8}
        sx={{
          height: 10,
          borderRadius: 3,
          bgcolor: getLightGrey,
          "& > .MuiLinearProgress-bar": {
            borderRadius: 3,
            bgcolor: "error.main",
          },
        }}
      />
      <br />
    </Box>
  );
};
