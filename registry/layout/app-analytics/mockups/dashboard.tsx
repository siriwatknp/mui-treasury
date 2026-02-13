"use client";
import React from "react";
import AppRegistrationRounded from "@mui/icons-material/AppRegistrationRounded";
import EventNoteRounded from "@mui/icons-material/EventNoteRounded";
import ForumRounded from "@mui/icons-material/ForumRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import Avatar from "@mui/material/Avatar";
import Box, { BoxProps } from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import List, { ListProps } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { Circle, Square } from "./shapes";
import { Word } from "./typography";
import { getLightestGrey, getLightGrey } from "./utils";

// --- IconNav ---

const defaultIcons = [
  <SearchRounded key="search" />,
  <HomeRounded key="home" />,
  <ForumRounded key="forum" />,
  <SettingsRounded key="settings" />,
  <AppRegistrationRounded key="app" />,
  <EventNoteRounded key="event" />,
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

// --- LinkNav ---

export const LinkNavMockup = ({
  lineCount = 5,
  ...props
}: { lineCount?: number } & ListProps) => {
  return (
    <List
      {...props}
      sx={{
        flexGrow: 1,
        p: 2,
        "& .MuiListItemButton-root": {
          borderRadius: 2,
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.grey[300], 0.2),
            color: "grey.500",
          },
        },
        ...props.sx,
      }}
    >
      {[...Array(lineCount).fill(undefined)].map((_, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <Word sx={{ my: 1 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

// --- SideNavUserInfo ---

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

// --- StatCard ---

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

// --- TopUsersCard ---

export const TopUsersCardMockup = ({
  userCount = 5,
  ...props
}: { userCount?: number } & BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        borderRadius: 1,
        border: "1px solid",
        borderColor: getLightGrey,
        bgcolor: "background.paper",
        boxShadow: "0 2px 6px 0 rgba(0,0,0,0.08)",
        ...props.sx,
      }}
    >
      <Box sx={{ display: "flex", p: 1.5, alignItems: "center" }}>
        <Box>
          <Word
            sx={{
              height: 10,
              borderRadius: 3,
              bgcolor: getLightGrey,
              m: 0,
              width: 40,
            }}
          />
          <Word sx={{ mt: 0.5, mb: 0 }} />
        </Box>
        <Circle sx={{ ml: "auto", fontSize: 24 }} />
      </Box>
      <Divider />
      <List>
        {[...Array(userCount).fill(undefined)].map((_, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <Word />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

// --- UserActiveCard ---

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
