import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsApplications from "@mui/icons-material/SettingsApplications";
import Edit from "@mui/icons-material/Edit";

const useStyles = makeStyles(() => ({
  middle: {
    flex: "auto",
    marginLeft: 16,
  },
  iconBtn: {
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, .04)",
    "&:not(:last-child)": {
      marginRight: 16,
    },
  },
}));

const ChatsHeader = () => {
  const styles = useStyles();
  return (
    <Box py={"10px"} px={2} display={"flex"} alignItems={"center"}>
      <Avatar alt={"me"} src={"https://i.pravatar.cc/300?img=10"} />
      <Typography variant={"h5"} className={styles.middle}>
        <b>Chats</b>
      </Typography>
      <IconButton className={styles.iconBtn}>
        <SettingsApplications />
      </IconButton>
      <IconButton className={styles.iconBtn}>
        <Edit />
      </IconButton>
    </Box>
  );
};

export default ChatsHeader;
