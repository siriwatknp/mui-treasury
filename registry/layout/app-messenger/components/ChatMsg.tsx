"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TagFaces from "@mui/icons-material/TagFaces";
import Reply from "@mui/icons-material/Reply";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

type ChatMessage =
  | string
  | { type: "image"; alt: string; src: string; [key: string]: unknown };

interface ChatMsgProps {
  avatar?: string;
  messages?: ChatMessage[];
  side?: "left" | "right";
}

const ChatMsg = ({
  avatar = "",
  messages = [],
  side = "left",
}: ChatMsgProps) => {
  const { spacing, palette } = useTheme();
  const radius = spacing(2.5);
  const rightBgColor = palette.primary.main;
  const attachClass = (index: number) => {
    if (index === 0) {
      return {
        leftFirst: {
          borderTopLeftRadius: radius,
        },
        rightFirst: {
          borderTopRightRadius: radius,
        },
      }[`${side}First`];
    }
    if (index === messages.length - 1) {
      return {
        leftLast: {
          borderBottomLeftRadius: radius,
        },
        rightLast: {
          borderBottomRightRadius: radius,
        },
      }[`${side}Last`];
    }
    return "";
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent={side === "right" ? "flex-end" : "flex-start"}
    >
      {side === "left" && (
        <Grid size="auto">
          <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
        </Grid>
      )}
      <Grid size="grow">
        {messages.map((msg, i) => {
          const key = typeof msg === "string" ? i : msg.src || i;
          return (
            <Box
              key={key}
              sx={{
                ...(side === "right" && {
                  marginLeft: "auto",
                }),
                "& .MuiIconButton-root": {
                  opacity: 0,
                  padding: "6px",
                  color: "rgba(0,0,0,0.34)",
                  "&:hover": {
                    color: "rgba(0,0,0,0.87)",
                    opacity: 1,
                  },
                  margin: "0 4px",
                  "& svg": {
                    fontSize: 20,
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "4px",
                  "&:hover .MuiIconButton-root": {
                    opacity: 1,
                  },
                  ...{
                    left: {
                      textAlign: "left" as const,
                    },
                    right: {
                      textAlign: "right" as const,
                      flexDirection: "row-reverse" as const,
                    },
                  }[side],
                }}
              >
                {typeof msg === "string" && (
                  <Typography
                    align={"left"}
                    sx={{
                      maxWidth: "70%",
                      padding: spacing(1, 2),
                      borderRadius: "4px",
                      display: "inline-block",
                      wordBreak: "break-word",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                      fontSize: "14px",
                      ...{
                        left: {
                          borderTopRightRadius: radius,
                          borderBottomRightRadius: radius,
                          backgroundColor: palette.grey[100],
                        },
                        right: {
                          borderTopLeftRadius: radius,
                          borderBottomLeftRadius: radius,
                          backgroundColor: rightBgColor,
                          color: palette.common.white,
                        },
                      }[side],
                      ...attachClass(i),
                    }}
                  >
                    {msg}
                  </Typography>
                )}
                {typeof msg === "object" && msg.type === "image" && (
                  <Box
                    component="img"
                    alt={msg.alt}
                    src={msg.src}
                    sx={{ maxWidth: 120, maxHeight: 120 }}
                  />
                )}
                <IconButton>
                  <TagFaces />
                </IconButton>
                <IconButton>
                  <Reply />
                </IconButton>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ChatMsg;
