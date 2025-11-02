"use client";
import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 360,
  maxWidth: "100%",
  borderRadius: theme.spacing(2),
  transition: "0.3s",
  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
  position: "relative",
  overflow: "initial",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingLeft: 8,
  paddingRight: 8,
  background:
    "linear-gradient(34deg, rgba(55,16,83,1) 0%, rgba(162,73,190,1) 29%, rgba(33,16,83,1) 92%)",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    flexDirection: "row-reverse",
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0px 14px 80px rgba(0, 0, 0, 0.5)",
  }),
}));

const CardMediaMedia = styled(CardMedia)(({ theme }) => ({
  flexShrink: 0,
  width: "30%",
  paddingTop: "30%",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("sm")]: {
    marginRight: "initial",
  },
}));

const TypographyOverline = styled(Typography)(() => ({
  lineHeight: 2,
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: "0.625rem",
  opacity: 0.7,
}));

const TypographyHeading = styled(Typography)(() => ({
  fontWeight: 900,
  color: "#ffffff",
  letterSpacing: 0.5,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  borderRadius: 100,
  paddingLeft: 32,
  paddingRight: 32,
  color: "#ffffff",
  textTransform: "none",
  width: "100%",
  "@media (hover: hover)": {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.32)",
    },
  },
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export default function CardReward() {
  return (
    <StyledCard>
      <CardMediaMedia
        image={"https://jkkm.info/ui/images/awards/victory.png"}
      />
      <CardContent>
        <TypographyOverline variant={"overline"}>
          Songkran Festival Contest
        </TypographyOverline>
        <TypographyHeading variant={"h6"} gutterBottom>
          Result Announced
        </TypographyHeading>
        <StyledButton>View Winners</StyledButton>
      </CardContent>
    </StyledCard>
  );
}
