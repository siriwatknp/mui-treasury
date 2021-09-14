import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ClearAll from "@mui/icons-material/ClearAll";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import DailyLogo from "./DailyLogo";
import DailySearch from "./DailySearch";

const useStyles = makeStyles(() => ({
  cart: {
    backgroundColor: "#F6F7F9",
    borderRadius: 40,
    minWidth: 24,
    minHeight: 24,
    lineHeight: "24px",
    textAlign: "center",
    padding: "0 8px",
    marginLeft: 8,
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
  },
}));

const DailyHeader = () => {
  const styles = useStyles();
  return (
    <Toolbar disableGutters>
      <DailyLogo />
      <Box ml={"auto"}>
        <DailySearch />
      </Box>
      <Box
        ml={{ xs: 2, md: 10, lg: 15 }}
        className={styles.flexCenter}
        justifyContent={"flex-end"}
      >
        <Box className={styles.flexCenter} mr={2}>
          <ShoppingBasket />
          <div className={styles.cart}>4</div>
        </Box>
        <IconButton>
          <ClearAll />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default DailyHeader;
