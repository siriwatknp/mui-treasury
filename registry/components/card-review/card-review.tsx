"use client";

import React from "react";
import Favorite from "@mui/icons-material/Favorite";
import LocationOn from "@mui/icons-material/LocationOn";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function CardReview() {
  return (
    <Card
      variant="elevation"
      elevation={0}
      sx={{
        overflow: "initial",
        maxWidth: 304,
        backgroundColor: "transparent",
      }}
    >
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        }
        sx={{
          width: "100%",
          height: 0,
          borderRadius: 0.5,
          paddingBottom: "56.25%",
          backgroundColor: "rgba(0 0 0 / 0.08)",
        }}
      />
      <CardContent
        sx={(theme) => ({
          boxShadow:
            "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
          position: "relative",
          padding: 3,
          margin: "-24% 16px 0",
          backgroundColor: (theme.vars || theme).palette.common.white,
          borderRadius: "4px",
          ...theme.applyStyles("dark", {
            backgroundColor: (theme.vars || theme).palette.background.paper,
            boxShadow:
              "0 2px 4px -2px rgba(0,0,0,0.5), 0 4px 24px -2px rgba(0, 0, 0, 0.6)",
          }),
        })}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
          }}
        >
          <Favorite />
        </IconButton>
        <Box
          component="h3"
          sx={{
            mb: 0,
            fontWeight: "bold",
            fontSize: "1.35824rem",
            lineHeight: 1.45,
          }}
        >
          Colloseo
        </Box>
        <Box color={"grey.500"} display={"flex"} alignItems={"center"} mb={1}>
          <LocationOn sx={{ marginRight: "4px", fontSize: 18 }} />
          <span>Rome</span>
        </Box>
        <Box display={"flex"} alignItems={"center"} mb={1}>
          <Rating name={"rating"} value={2} size={"small"} />
          <Typography
            variant={"body2"}
            sx={{ fontWeight: "bold", marginTop: "2px", ml: 1 }}
          >
            4.0
          </Typography>
        </Box>
        <Typography color={"textSecondary"} variant={"body2"}>
          Talking about travelling or new jobs, many people often think of
          change of environment...
        </Typography>
        <Box
          mt={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} alignItems={"center"}>
            {[
              "https://i.pravatar.cc/300?img=1",
              "https://i.pravatar.cc/300?img=2",
              "https://i.pravatar.cc/300?img=3",
              "https://i.pravatar.cc/300?img=4",
            ].map((src, index) => (
              <Avatar
                key={index}
                src={src}
                sx={(theme) => ({
                  width: 32,
                  height: 32,
                  display: "inline-block",
                  border: `2px solid ${
                    (theme.vars || theme).palette.common.white
                  }`,
                  "&:not(:first-of-type)": {
                    marginLeft: "-12px",
                  },
                  ...theme.applyStyles("dark", {
                    border: `2px solid ${
                      (theme.vars || theme).palette.background.paper
                    }`,
                  }),
                })}
              />
            ))}
            <Typography
              component={"span"}
              variant={"body2"}
              color={"textSecondary"}
              sx={{ ml: 1 }}
            >
              +420
            </Typography>
          </Box>
          <IconButton size={"small"}>
            <MoreHoriz />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
