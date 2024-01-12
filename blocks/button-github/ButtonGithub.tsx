import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const GithubButton = styled(Button)(({ theme }) => ({
  lineHeight: "20px",
  padding: "6px 12px",
  minHeight: "auto",
  color: "#24292e",
  textTransform: "none",
  fontWeight: 600,
  "& svg": {
    fontSize: 16,
    marginLeft: -2,
    marginRight: theme.spacing(0.5),
  },
  variants: [
    {
      props: { variant: "contained" },
      style: {
        transition: "none",
        boxShadow: "none",
        border: "1px solid rgba(27,31,35,.2)",
        backgroundPosition: "-1px -1px",
        backgroundRepeat: "repeat-x",
        backgroundSize: "110% 110%",
        backgroundColor: "#eff3f6",
        backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
        "&:hover": {
          backgroundColor: "#e6ebf1",
          backgroundImage: "linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%)",
          backgroundPosition: "-0.5em",
          borderColor: "rgba(27,31,35,.35)",
          boxShadow: "none",
        },
        "&:active": {
          backgroundColor: "#e9ecef",
          backgroundImage: "none",
          borderColor: "rgba(27,31,35,.35)",
          boxShadow: "inset 0 0.15em 0.3em rgba(27,31,35,.15)",
        },
      },
    },
    {
      props: { variant: "contained", color: "primary" },
      style: {
        color: (theme.vars || theme).palette.common.white,
        backgroundColor: "#28a745",
        backgroundImage: "linear-gradient(-180deg,#34d058,#28a745 90%)",
        "&:hover": {
          backgroundColor: "#269f42",
          backgroundImage: "linear-gradient(-180deg,#2fcb53,#269f42 90%)",
        },
        "&:active": {
          backgroundColor: "#279f43",
          borderColor: "rgba(27,31,35,.35)",
        },
      },
    },
  ],
}));

export function ButtonGithub() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <GithubButton variant={"contained"}>Default</GithubButton>
      <GithubButton variant={"contained"} color={"primary"}>
        Contained
      </GithubButton>
    </Box>
  );
}
