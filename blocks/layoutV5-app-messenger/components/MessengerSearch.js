import React from "react";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

const MessengerSearch = () => {
  return (
    <InputBase
      startAdornment={
        <InputAdornment
          position={"start"}
          sx={{
            paddingLeft: "12px",
            "& svg": {
              color: "rgba(0,0,0,0.38)",
            },
          }}
        >
          <Search />
        </InputAdornment>
      }
      placeholder={"Search Messenger"}
      sx={{
        backgroundColor: "rgba(0, 0, 0, .04)",
        borderRadius: "40px",
        width: "100%",
        "& .MuiInputBase-input": {
          boxSizing: "border-box",
          minHeight: 36,
        },
      }}
    />
  );
};

export default MessengerSearch;
