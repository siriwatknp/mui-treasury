import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export function AvatarGradient() {
  const color = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
  const size = 40;
  const gap = 2;
  const gapColor = "#fff";
  const thickness = 2;
  return (
    <Box
      sx={{
        position: "relative" as const,
        display: "inline-block",
        zIndex: 0,
        "& > *": {
          width: size + gap * 2,
          height: size + gap * 2,
          border: `${gap}px solid`,
          borderColor: gapColor,
        },
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute" as const,
          borderRadius: "50%",
          zIndex: -1,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: `-${thickness}px`,
          background: color,
        },
      }}
    >
      <Avatar src="https://i.pravatar.cc/300?img=30" />
    </Box>
  );
}
