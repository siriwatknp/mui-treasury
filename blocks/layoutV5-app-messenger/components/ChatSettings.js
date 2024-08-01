import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Search from "@mui/icons-material/Search";
import Edit from "@mui/icons-material/Edit";
import ThumbUp from "@mui/icons-material/ThumbUp";
import FormatPaint from "@mui/icons-material/FormatPaint";

const StyledAvatar = styled(Avatar)(() => ({
  width: 100,
  height: 100,
  margin: "auto",
}));

const TypographyName = styled(Typography)(() => ({
  marginTop: "14px",
  fontSize: "22px !important",
  fontWeight: "bold",
}));

const SettingHeader = ({ children, opened }) => {
  return (
    <Box
      p={"14px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.08)",
        },
      }}
    >
      <Typography
        sx={{
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.08)",
          },
        }}
      >
        {children}
      </Typography>
      {opened ? <KeyboardArrowDown /> : <KeyboardArrowLeft />}
    </Box>
  );
};

const Setting = ({ label, icon, blue }) => {
  return (
    <Box
      height={"44px"}
      pl={"14px"}
      pr={"12px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant={"body2"}>{label}</Typography>
      {React.cloneElement(icon, {
        sx: {
          padding: "6px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.04)",
          width: 32,
          height: 32,
          ...(blue && {
            color: "rgb(0, 153, 255)",
            background: "none",
          }),
        },
      })}
    </Box>
  );
};

const ChatSettings = () => {
  return (
    <div>
      <Box p={"14px 14px 16px 14px"} textAlign={"center"}>
        <StyledAvatar src={"https://i.pravatar.cc/300?img=13"} />
        <TypographyName variant={"h1"} align={"center"}>
          Imaad Casey
        </TypographyName>
      </Box>
      <Divider />
      <SettingHeader opened>Options</SettingHeader>
      <Box pb={2}>
        <Setting label={"Search in Conversation"} icon={<Search />} />
        <Setting label={"Edit Nicknames"} icon={<Edit />} />
        <Setting label={"Change Theme"} icon={<FormatPaint />} blue />
        <Setting label={"Change Emoji"} icon={<ThumbUp />} blue />
      </Box>
      <Divider />
      <SettingHeader>Privacy & Support</SettingHeader>
      <Divider />
      <SettingHeader>Shared files</SettingHeader>
      <Divider />
      <SettingHeader>Shared Photos</SettingHeader>
    </div>
  );
};

export default ChatSettings;
