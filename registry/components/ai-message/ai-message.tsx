"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import type { UIMessage } from "ai";
import { memo, type ComponentProps } from "react";

export type MessageProps = ComponentProps<typeof Box> & {
  from: UIMessage["role"];
};

export const Message = memo(({ from, sx, ...props }: MessageProps) => (
  <Box
    data-from={from}
    sx={{
      display: "flex",
      width: "100%",
      alignItems: "flex-end",
      gap: 1,
      py: 2,
      '&[data-from="user"]': {
        flexDirection: "row-reverse",
        "&:has(.MuiAvatar-root:last-child)": {
          flexDirection: "row",
          justifyContent: "flex-end",
        },
      },
      '&:not([data-from="user"]):has(.MuiAvatar-root:last-child)': {
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
      },
      ...sx,
    }}
    {...props}
  />
));

Message.displayName = "Message";

export type MessageContentProps = ComponentProps<typeof Box> & {
  variant?: "contained" | "flat";
};

export const MessageContent = memo(
  ({ children, variant = "contained", sx, ...props }: MessageContentProps) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflow: "hidden",
        borderRadius: 2,
        fontSize: "0.875rem",
        lineHeight: 1.6,

        ...(variant === "contained" && {
          maxWidth: "80%",
          px: 2,
          py: 1.5,
          // User message styles
          "[data-from='user'] > &": {
            bgcolor: "primary.main",
            color: "primary.contrastText",
          },
          // Assistant message styles
          "[data-from='assistant'] > &, [data-from='system'] > &": {
            bgcolor: "action.hover",
            color: "text.primary",
          },
        }),

        ...(variant === "flat" && {
          // User message with flat variant
          "[data-from='user'] > &": {
            maxWidth: "80%",
            bgcolor: "action.hover",
            px: 2,
            py: 1.5,
            color: "text.primary",
          },
          // Assistant message with flat variant
          "[data-from='assistant'] > &, [data-from='system'] > &": {
            borderRadius: 0,
            color: "text.primary",
          },
        }),

        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  ),
);

MessageContent.displayName = "MessageContent";

export type MessageAvatarProps = ComponentProps<typeof Avatar> & {
  src?: string;
  name?: string;
};

export const MessageAvatar = memo(
  ({ src, name, sx, ...props }: MessageAvatarProps) => (
    <Avatar
      src={src}
      sx={{
        width: 32,
        height: 32,
        border: 1,
        borderColor: "divider",
        fontSize: "0.75rem",
        ...sx,
      }}
      {...props}
    >
      {!src && (name?.slice(0, 2).toUpperCase() || "ME")}
    </Avatar>
  ),
);

MessageAvatar.displayName = "MessageAvatar";
