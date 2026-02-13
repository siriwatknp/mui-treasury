"use client";
import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Phone from "@mui/icons-material/Phone";
import Videocam from "@mui/icons-material/Videocam";
import Info from "@mui/icons-material/Info";

const ConversationHead = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <ListItem
        sx={{ padding: "8px 8px 8px 16px" }}
        secondaryAction={
          <>
            <IconButton
              sx={{
                "& svg": {
                  color: "rgb(0, 153, 255)",
                },
              }}
            >
              <Phone />
            </IconButton>
            <IconButton
              sx={{
                "& svg": {
                  color: "rgb(0, 153, 255)",
                },
              }}
            >
              <Videocam />
            </IconButton>
            <IconButton
              sx={{
                "& svg": {
                  color: "rgb(0, 153, 255)",
                },
              }}
            >
              <Info />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar>
          <Avatar src={"https://i.pravatar.cc/300?img=13"} />
        </ListItemAvatar>
        <ListItemText
          primary={"Imaad Casey"}
          secondary={"active 17m ago"}
          primaryTypographyProps={{
            sx: {
              fontWeight: "bold",
            },
          }}
          secondaryTypographyProps={{
            sx: {
              fontSize: 12,
            },
          }}
        />
      </ListItem>
    </Box>
  );
};

export default ConversationHead;
