"use client";

import React from "react";
import RestaurantMenuRounded from "@mui/icons-material/RestaurantMenuRounded";
import TripOrigin from "@mui/icons-material/TripOrigin";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "180px",
  height: "230px",
  margin: "20px 0 0 0",
  border: "none",
  borderTopLeftRadius: "0px",
  borderTopRightRadius: "0px",
  background: (theme.vars || theme).palette.grey[100],
  position: "relative",
  overflow: "visible",
  ...theme.applyStyles("dark", {
    background: (theme.vars || theme).palette.grey[800],
  }),

  "&:before": {
    content: "' '",
    width: "100%",
    borderBottom: `30px solid ${(theme.vars || theme).palette.grey[100]}`,
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    position: "absolute",
    top: "-30px",
    ...theme.applyStyles("dark", {
      borderBottom: `30px solid ${(theme.vars || theme).palette.grey[800]}`,
    }),
  },
}));

const TripOriginHole = styled(TripOrigin)(() => ({
  position: "absolute",
  top: "-20px",
  margin: "auto",
  width: "100%",
  left: 0,
}));

export default function CardTag() {
  return (
    <StyledCard elevation={0}>
      <CardContent>
        <TripOriginHole />
        <RestaurantMenuRounded sx={{ fontSize: 83, width: "100%" }} />
        <Typography align="center" gutterBottom>
          BreakFast
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align="center"
          component="p"
        >
          eggs benedict <br />
          BLT sandwich <br />
          french omelette
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
