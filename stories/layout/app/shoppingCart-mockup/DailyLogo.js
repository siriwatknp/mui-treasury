import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  root: {
    fontWeight: 900,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
}));

const DailyLogo = () => {
  const styles = useStyles();
  return (
    <Typography variant={"h5"} className={styles.root}>
      <span>#</span> Daily.
    </Typography>
  );
};

export default DailyLogo;
