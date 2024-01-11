import React from "react";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN01Styles } from "../info-n01";

export function CardNews() {
  return (
    <Card
      sx={{
        maxWidth: 304,
        margin: "auto",
        boxShadow: "none",
        borderRadius: 0,
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        "&:hover": {
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
          transform: "scale(1.04)",
        },
      }}
    >
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
        }
        sx={{
          width: "100%",
          height: 0,
          paddingBottom: "56.25%",
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        }}
      />
      <CardContent sx={{ p: 3 }}>
        <Info useStyles={getInfoN01Styles}>
          <InfoEyebrow>March 20, 2019</InfoEyebrow>
          <InfoTitle>What happened in Thailand?</InfoTitle>
          <InfoSubtitle>
            Kayaks crowd Three Sisters Springs, where people and manatees
            maintain controversial coexistence.
          </InfoSubtitle>
        </Info>
        <Button
          color={"primary"}
          fullWidth
          sx={{ mt: 3, textTransform: "initial" }}
        >
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
  );
}
