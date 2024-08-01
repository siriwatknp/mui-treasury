import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsApplications from "@mui/icons-material/SettingsApplications";
import Edit from "@mui/icons-material/Edit";

const ChatsHeader = () => {
  return (
    <Box py={"10px"} px={2} display={"flex"} alignItems={"center"}>
      <Avatar alt={"me"} src={"https://i.pravatar.cc/300?img=10"} />
      <Typography variant={"h5"} sx={{ flex: "auto", marginLeft: "16px" }}>
        <b>Chats</b>
      </Typography>
      <IconButton
        sx={{
          padding: "8px",
          backgroundColor: "rgba(0, 0, 0, .04)",
          "&:not(:last-child)": {
            marginRight: "16px",
          },
        }}
      >
        <SettingsApplications />
      </IconButton>
      <IconButton
        sx={{
          padding: "8px",
          backgroundColor: "rgba(0, 0, 0, .04)",
          "&:not(:last-child)": {
            marginRight: "16px",
          },
        }}
      >
        <Edit />
      </IconButton>
    </Box>
  );
};

export default ChatsHeader;
