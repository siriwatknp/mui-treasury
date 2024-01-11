import React from "react";
import AppRegistrationRounded from "@mui/icons-material/AppRegistrationRounded";
import EventNoteRounded from "@mui/icons-material/EventNoteRounded";
import ForumRounded from "@mui/icons-material/ForumRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import Box, { BoxProps } from "@mui/material/Box";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { alpha } from "@mui/material/styles";
import { getLightestGrey } from "../mockup-utils";

const defaultIcons = [
  <SearchRounded />,
  <HomeRounded />,
  <ForumRounded />,
  <SettingsRounded />,
  <AppRegistrationRounded />,
  <EventNoteRounded />,
];

export const IconNavMockup = ({
  activeIndex = 1,
  icons = defaultIcons,
  size,
  ...props
}: { icons?: Array<React.ReactNode>; activeIndex?: number } & Pick<
  IconButtonProps,
  "size"
> &
  BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        bgcolor: getLightestGrey,
        "& .MuiIconButton-root": {
          borderRadius: 2,
        },
        ...props.sx,
      }}
    >
      {icons.map((icon, index) => (
        <IconButton
          key={index}
          disableTouchRipple
          size={size}
          sx={{
            ...(index === 0 && { mb: 0 }),
            ...(index === activeIndex && {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
              "& svg": {
                color: (theme) => theme.palette.primary.main,
              },
            }),
          }}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
};
