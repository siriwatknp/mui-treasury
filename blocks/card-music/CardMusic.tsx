import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN04Styles } from "../info-n04";

export function CardMusic() {
  return (
    <Card
      sx={{
        width: 343,
        maxWidth: "100%",
        borderRadius: "12px",
        padding: 1.5,
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      }}
    >
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        }
        sx={{
          borderRadius: "6px",
          width: "100%",
          height: 0,
          paddingBottom: "min(75%, 240px)",
          backgroundColor: "rgba(0,0,0,0.08)",
        }}
      />
      <CardContent>
        <Info useStyles={getInfoN04Styles}>
          <InfoEyebrow>Kesha</InfoEyebrow>
          <InfoTitle>Inner Varnika</InfoTitle>
          <InfoSubtitle>
            That year, collection of songs, review melodies, memories full, this
            is a long and warm journey
          </InfoSubtitle>
        </Info>
      </CardContent>
    </Card>
  );
}
