import React from "react";

import { alpha } from "@material-ui/core/styles";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Box, { BoxProps } from "@material-ui/core/Box";

import SearchRounded from "@material-ui/icons/SearchRounded";
import HomeRounded from "@material-ui/icons/HomeRounded";
import ForumRounded from "@material-ui/icons/ForumRounded";
import SettingsRounded from "@material-ui/icons/SettingsRounded";
import AppRegistrationRounded from "@material-ui/icons/AppRegistrationRounded";
import EventNoteRounded from "@material-ui/icons/EventNoteRounded";

import { getLightestGrey } from "../utils";

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
