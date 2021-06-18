import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import Search from "@material-ui/icons/Search";

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
