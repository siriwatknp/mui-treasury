import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import Search from "@mui/icons-material/Search";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    backgroundColor: "#F6F7F9",
    padding: spacing(1, 3),
    borderRadius: 40,
    flexShrink: 0,
    display: "none",
    [breakpoints.up("sm")]: {
      display: "inline-flex",
    },
    [breakpoints.up("md")]: {
      minWidth: 300,
    },
  },
  iconBtn: {
    [breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const DailySearch = () => {
  const styles = useStyles();
  return (
    <>
      <InputBase
        className={styles.root}
        placeholder={"Search"}
        endAdornment={
          <InputAdornment position={"end"}>
            <Search />
          </InputAdornment>
        }
      />
      <IconButton className={styles.iconBtn}>
        <Search />
      </IconButton>
    </>
  );
};

export default DailySearch;
