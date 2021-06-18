import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";

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
