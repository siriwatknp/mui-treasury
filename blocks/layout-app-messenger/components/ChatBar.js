import React from "react";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import AddCircle from "@mui/icons-material/AddCircle";
import Gif from "@mui/icons-material/Gif";
import Image from "@mui/icons-material/Image";
import Note from "@mui/icons-material/Note";
import ThumbUp from "@mui/icons-material/ThumbUp";
import TagFaces from "@mui/icons-material/TagFaces";

const ChatBar = ({ concise }) => {
  const styles = {
    icon: {
      color: "rgb(0, 153, 255)",
      width: 44,
      height: 44,
      padding: "6px",
      "&:not(:first-child)": {
        marginLeft: "4px",
      },
    },
    input: {
      flex: "auto",
      borderRadius: "40px",
      paddingLeft: "16px",
      backgroundColor: "rgba(0,0,0,0.04)",
      margin: "0 8px",
      height: 36,
      fontSize: 13,
    },
  };
  return (
    <>
      <AddCircle sx={styles.icon} />
      {!concise && (
        <>
          <Gif sx={styles.icon} />
          <Note sx={styles.icon} />
          <Image sx={styles.icon} />
        </>
      )}
      <InputBase
        placeholder={"Type a message..."}
        endAdornment={
          <InputAdornment position={"end"}>
            <TagFaces sx={styles.icon} />
          </InputAdornment>
        }
        sx={styles.input}
      />
      <ThumbUp sx={styles.icon} />
    </>
  );
};

export default ChatBar;
