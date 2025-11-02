"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

export default function CardProfile() {
  return (
    <Card
      sx={(theme) => ({
        borderRadius: 1.5,
        minWidth: 256,
        textAlign: "center",
        boxShadow: (theme.vars || theme).shadows[8],
      })}
    >
      <CardContent>
        <Avatar
          src={"https://i.pravatar.cc/300"}
          sx={{
            width: 60,
            height: 60,
            margin: "auto",
          }}
        />
        <Box
          component="h3"
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            letterSpacing: "0.5px",
            mt: 1,
            mb: 0,
          }}
        >
          Alan Podemski
        </Box>
        <Box
          component="span"
          sx={{
            fontSize: 14,
            color: "grey.500",
            mb: "0.875em",
          }}
        >
          Poland
        </Box>
      </CardContent>
      <Divider light />
      <Box display="flex">
        <Box
          p={2}
          flex="auto"
          sx={(theme) => ({
            position: "relative",
            "&:not(:last-of-type)": {
              "&:after": {
                content: '" "',
                display: "block",
                position: "absolute",
                height: "50%",
                width: "1px",
                backgroundColor: (theme.vars || theme).palette.divider,
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
              },
            },
          })}
        >
          <Box
            sx={(theme) => ({
              fontSize: 12,
              color: (theme.vars || theme).palette.grey[500],
              fontWeight: 500,
              fontFamily: theme.typography.fontFamily,
              margin: 0,
            })}
          >
            Followers
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              mb: 0.5,
              letterSpacing: "1px",
            }}
          >
            6941
          </Box>
        </Box>
        <Box
          p={2}
          flex="auto"
          sx={(theme) => ({
            position: "relative",
            "&:not(:last-of-type)": {
              "&:after": {
                content: '" "',
                display: "block",
                position: "absolute",
                height: "50%",
                width: "1px",
                backgroundColor: (theme.vars || theme).palette.divider,
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
              },
            },
          })}
        >
          <Box
            sx={(theme) => ({
              fontSize: 12,
              color: (theme.vars || theme).palette.grey[500],
              fontWeight: 500,
              fontFamily: theme.typography.fontFamily,
              margin: 0,
            })}
          >
            Following
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              mb: 0.5,
              letterSpacing: "1px",
            }}
          >
            12
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
