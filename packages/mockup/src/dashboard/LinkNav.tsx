import React from "react";

import { alpha } from "@mui/material/styles";
import List, { ListProps } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { Word } from "../typography";

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
        "& .MuiListItem-root": {
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
        <ListItem key={index} button>
          <Word sx={{ my: 1 }} />
        </ListItem>
      ))}
    </List>
  );
};
