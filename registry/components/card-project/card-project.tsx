"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoN03Styles } from "../info-n03/info-n03.styles";

export default function CardProject() {
  return (
    <Card
      sx={(theme) => ({
        maxWidth: 343,
        borderRadius: "20px",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        transition: "0.3s",
        ...theme.applyStyles("dark", {
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.6)",
        }),
      })}
    >
      <Box sx={{ minWidth: 256 }}>
        <Box
          sx={{
            padding: `4px 24px 0`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            alt={"brand logo"}
            src="https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
            sx={(theme) => ({
              width: 48,
              height: 48,
              transform: "translateY(50%)",
              "& > img": {
                margin: 0,
                backgroundColor: "common.white",
              },
              [theme.breakpoints.up("sm")]: {
                width: 60,
                height: 60,
              },
            })}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 14,
              color: "grey.500",
              letterSpacing: "1px",
            }}
          >
            7 minutes
          </Typography>
        </Box>
        <Box
          component="hr"
          sx={(theme) => ({
            backgroundColor: (theme.vars || theme).palette.grey[200],
            marginBottom: `${24 - 1}px`,
            ...theme.applyStyles("dark", {
              backgroundColor: (theme.vars || theme).palette.grey[800],
            }),
            [theme.breakpoints.up("sm")]: {
              marginBottom: `${30 - 1}px`,
            },
          })}
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Info useStyles={getInfoN03Styles}>
          <InfoEyebrow>FACEBOOK INC.</InfoEyebrow>
          <InfoTitle>React</InfoTitle>
          <InfoSubtitle>
            A JavaScript library for building user interfaces. Build
            encapsulated components that manage their own state, then compose
            them to make complex UIs.
          </InfoSubtitle>
        </Info>
      </CardContent>
    </Card>
  );
}
