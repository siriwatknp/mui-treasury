import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

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
