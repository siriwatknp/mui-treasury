"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import Search from "@mui/icons-material/Search";

const DailySearch = () => {
  return (
    <>
      <InputBase
        placeholder={"Search"}
        endAdornment={
          <InputAdornment position={"end"}>
            <Search />
          </InputAdornment>
        }
        sx={(theme) => ({
          backgroundColor: "#F6F7F9",
          padding: theme.spacing(1, 3),
          borderRadius: "40px",
          flexShrink: 0,
          display: "none",
          [theme.breakpoints.up("sm")]: {
            display: "inline-flex",
          },
          [theme.breakpoints.up("md")]: {
            minWidth: 300,
          },
        })}
      />
      <IconButton
        sx={(theme) => ({
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
        })}
      >
        <Search />
      </IconButton>
    </>
  );
};

export default DailySearch;
