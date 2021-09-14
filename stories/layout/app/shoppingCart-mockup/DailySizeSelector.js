import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles(({ palette }) => ({
  btnBase: {
    borderRadius: 40,
  },
  root: {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 40px 8px 12px",
    position: "relative",
    borderRadius: 40,
    border: "1px solid",
    borderColor: palette.grey[300],
    fontSize: 14,
    minHeight: 42,
  },
  icon: {
    position: "absolute",
    right: 8,
    top: "50%",
    transform: "translateY(-50%)",
    color: palette.grey[700],
  },
}));

const DailySizeSelector = ({ children }) => {
  const styles = useStyles();
  return (
    <ButtonBase className={styles.btnBase}>
      <div className={styles.root}>
        {children} <KeyboardArrowDown className={styles.icon} />
      </div>
    </ButtonBase>
  );
};

export default DailySizeSelector;
