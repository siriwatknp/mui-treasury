"use client";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const DailyInteger = ({ children }: React.PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px",
        borderRadius: "40px",
        border: "1px solid",
        borderColor: "grey.300",
      }}
    >
      <IconButton
        sx={{
          padding: "8px",
          "& svg": {
            fontSize: 16,
          },
        }}
      >
        <Remove />
      </IconButton>
      <Box component="span" sx={{ padding: "0px 8px" }}>
        {children}
      </Box>
      <IconButton
        sx={{
          padding: "8px",
          "& svg": {
            fontSize: 16,
          },
        }}
      >
        <Add />
      </IconButton>
    </Box>
  );
};

export default DailyInteger;
