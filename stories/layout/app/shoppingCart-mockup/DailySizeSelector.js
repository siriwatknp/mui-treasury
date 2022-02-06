import React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const DailySizeSelector = ({ children }) => {
  return (
    <ButtonBase sx={{ borderRadius: "40px" }}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 40px 8px 12px",
          position: "relative",
          borderRadius: "40px",
          border: "1px solid",
          borderColor: "grey.300",
          fontSize: 14,
          minHeight: 42,
        }}
      >
        {children}{" "}
        <KeyboardArrowDown
          sx={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            color: "grey.700",
          }}
        />
      </Box>
    </ButtonBase>
  );
};

export default DailySizeSelector;
