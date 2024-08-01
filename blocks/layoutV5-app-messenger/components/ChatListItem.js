import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

const ChatListItem = ({
  bold,
  active,
  avatar,
  name,
  info,
  responded,
  concise,
}) => {
  return (
    <Box px={1}>
      <ListItem
        sx={{
          paddingLeft: "8px",
          paddingRight: "8px",
          borderRadius: "10px",
          ...(active && {
            backgroundColor: "rgba(0, 0, 0, .05)",
          }),
          "&:hover": {
            "& .ChatListItem-dot": {
              display: "none",
            },
            "& .ChatListItem-responded": {
              display: "none",
            },
            "& .ChatListItem-more": {
              visibility: "visible",
            },
          },
        }}
      >
        <Avatar
          src={avatar}
          sx={{ width: 50, height: 50, marginRight: "12px" }}
        />
        {!concise && (
          <>
            <ListItemText
              primary={name}
              secondary={info}
              primaryTypographyProps={{
                noWrap: true,
                sx: { ...(bold && { fontWeight: "bold" }) },
              }}
              secondaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontSize: 13,
                  color: "#999",
                  ...(bold && {
                    fontWeight: "bold",
                    color: "text.primary",
                  }),
                },
              }}
            />
            <Box position={"relative"}>
              <MoreHoriz
                className="ChatListItem-more"
                sx={{ visibility: "hidden", fontSize: 20 }}
              />
              {bold && (
                <Box
                  className="ChatListItem-dot"
                  sx={{
                    width: 12,
                    height: 12,
                    backgroundColor: "#09f",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              )}
              {responded && (
                <Avatar
                  src={avatar}
                  className="ChatListItem-responded"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 16,
                    height: 16,
                  }}
                />
              )}
            </Box>
          </>
        )}
      </ListItem>
    </Box>
  );
};

export default ChatListItem;
