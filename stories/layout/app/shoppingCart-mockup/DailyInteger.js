import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    padding: 4,
    borderRadius: 40,
    border: "1px solid",
    borderColor: palette.grey[300],
  },
  iconBtn: {
    padding: 8,
    "& svg": {
      fontSize: 16,
    },
  },
  value: {
    padding: "0px 8px",
  },
}));

const DailyInteger = ({ children }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <IconButton className={styles.iconBtn}>
        <Remove />
      </IconButton>
      <span className={styles.value}>{children}</span>
      <IconButton className={styles.iconBtn}>
        <Add />
      </IconButton>
    </div>
  );
};

export default DailyInteger;
