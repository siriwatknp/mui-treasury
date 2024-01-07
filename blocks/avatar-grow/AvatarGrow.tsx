import React from "react";
import Avatar from "@mui/material/Avatar";

export function AvatarGrow() {
  const size = 100;
  const radius = "16px";
  const blur = "16px";
  const src =
    "https://freedesignfile.com/upload/2017/05/Sunrise-tropical-island-beach-view-HD-picture-01.jpg";
  return (
    <Avatar
      src={src}
      sx={{
        position: "relative",
        zIndex: 0,
        width: size,
        height: size,
        overflow: "visible",
        "& > div": {
          width: size,
          height: size,
          borderRadius: radius,
        },
        "&:before": {
          margin: "-0.25rem",
          content: '""',
          display: "block",
          position: "absolute",
          zIndex: -1,
          borderRadius: radius,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: `blur(${blur})`,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: 0.8,
        },
      }}
    />
  );
}
