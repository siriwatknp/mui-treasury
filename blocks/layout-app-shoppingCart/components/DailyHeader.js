import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ClearAll from "@mui/icons-material/ClearAll";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import DailyLogo from "./DailyLogo";
import DailySearch from "./DailySearch";

const DailyHeader = () => {
  return (
    <Toolbar disableGutters>
      <DailyLogo />
      <Box ml={"auto"}>
        <DailySearch />
      </Box>
      <Box
        ml={{ xs: 2, md: 10, lg: 15 }}
        justifyContent={"flex-end"}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          mr={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ShoppingBasket />
          <Box
            sx={{
              backgroundColor: "#F6F7F9",
              borderRadius: 40,
              minWidth: 24,
              minHeight: 24,
              lineHeight: "24px",
              textAlign: "center",
              padding: "0 8px",
              marginLeft: 8,
            }}
          >
            4
          </Box>
        </Box>
        <IconButton>
          <ClearAll />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default DailyHeader;
