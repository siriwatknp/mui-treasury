"use client";

import React from "react";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoN01Styles } from "../info-n01/info-n01.styles";

export default function CardNews() {
  return (
    <Card
      sx={(theme) => ({
        maxWidth: 304,
        margin: "auto",
        boxShadow: "none",
        borderRadius: 0,
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        "@media (hover: hover)": {
          "&:hover": {
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
            transform: "scale(1.04)",
          },
        },
        ...theme.applyStyles("dark", {
          "@media (hover: hover)": {
            "&:hover": {
              boxShadow: "0 4px 20px 0 rgba(0,0,0,0.5)",
            },
          },
        }),
      })}
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
        <Button color={"primary"} fullWidth sx={{ mt: 3 }}>
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
  );
}
