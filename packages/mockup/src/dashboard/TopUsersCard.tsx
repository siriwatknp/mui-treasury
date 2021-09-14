import React from "react";

import Avatar from "@mui/material/Avatar";
import Box, { BoxProps } from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Circle } from "../shape";
import { Word } from "../typography";
import { getLightGrey } from "../utils";

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
        {[...Array(userCount)].map((_, index) => (
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
