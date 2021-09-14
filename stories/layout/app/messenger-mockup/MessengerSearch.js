import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, .04)",
    borderRadius: 40,
    width: "100%",
  },
  input: {
    boxSizing: "border-box",
    minHeight: 36,
  },
}));

const useAdornStyles = makeStyles(() => ({
  root: {
    paddingLeft: 12,
    "& svg": {
      color: "rgba(0,0,0,0.38)",
    },
  },
}));

const MessengerSearch = () => {
  const styles = useStyles();
  const adornStyles = useAdornStyles();
  return (
    <InputBase
      classes={styles}
      startAdornment={
        <InputAdornment position={"start"} classes={adornStyles}>
          <Search />
        </InputAdornment>
      }
      placeholder={"Search Messenger"}
    />
  );
};

export default MessengerSearch;
