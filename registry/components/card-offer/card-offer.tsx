"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { Info } from "../info-basic/info";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  padding: 12,
  backgroundColor: "#e5fcfb",
  minWidth: 300,
  boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
  transition: "0.3s",
  "@media (hover: hover)": {
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
    },
  },
  ...theme.applyStyles("dark", {
    backgroundColor: (theme.vars || theme).palette.grey[900],
    boxShadow: "0 0 20px 0 rgba(0,0,0,0.5)",
  }),
}));

const ButtonLearnMore = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff !important",
  color: "#fb703c",
  boxShadow: "0 2px 6px #d0efef",
  borderRadius: 12,
  minWidth: 120,
  minHeight: 4,
  fontSize: "0.875rem",
  fontWeight: 700,
  letterSpacing: 0,
  ...theme.applyStyles("dark", {
    backgroundColor: `${(theme.vars || theme).palette.grey[800]} !important`,
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  }),
}));

const StyledImg = styled("img")(() => ({
  position: "absolute",
  width: "40%",
  bottom: 0,
  right: 0,
  display: "block",
}));

const StyledDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  transform: "translate(70%, 50%)",
  borderRadius: "50%",
  backgroundColor: "rgba(71, 167, 162, 0.12)",
  padding: "40%",

  "&:before": {
    position: "absolute",
    borderRadius: "50%",
    content: '""',
    display: "block",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "-16%",
    backgroundColor: "rgba(71, 167, 162, 0.08)",
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(71, 167, 162, 0.2)",
    "&:before": {
      backgroundColor: "rgba(71, 167, 162, 0.15)",
    },
  }),
}));

const useOfferInfoStyles = () => {
  return {
    title: {
      color: "#fb703c",
      fontSize: "1.125rem",
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      marginBottom: 0,
    },
    subtitle: {
      color: "#48bbb5",
      fontSize: "0.875rem",
      fontWeight: 500,
    },
  };
};

export default function CardOffer() {
  return (
    <StyledCard>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mr: 2 }}>
        <Info useStyles={useOfferInfoStyles}>
          <InfoTitle>50 Days of Premium!</InfoTitle>
          <InfoSubtitle>Get it before 01.01.2020</InfoSubtitle>
        </Info>
        <Box sx={{ mt: 2 }}>
          <ButtonLearnMore>Learn more</ButtonLearnMore>
        </Box>
      </Box>
      <StyledImg
        alt={""}
        src={
          "https://pathwaychurch.life/wp-content/uploads/2018/09/bow-transparent-background-1.png"
        }
      />
      <StyledDiv />
    </StyledCard>
  );
}
