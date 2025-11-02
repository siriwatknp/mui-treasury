"use client";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardNews2() {
  return (
    <Card
      sx={{
        maxWidth: 304,
        margin: "auto",
        borderRadius: 0,
        position: "relative",
      }}
    >
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1519810755548-39cd217da494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        }
        sx={(theme) => ({
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          backgroundPosition: "center",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          transition: "0.3s",
          ...theme.applyStyles("dark", {
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.6)",
          }),
        })}
      />
      <CardActionArea>
        <CardContent sx={{ p: 3 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={360}
            color={"common.white"}
            textAlign={"center"}
            sx={{
              "& h2": {
                color: "#fff",
                letterSpacing: "2px",
                fontSize: "2.15rem",
                fontWeight: 700,
                lineHeight: 1.45,
                fontFamily: "'Playfair Display',serif",
                mb: "1.275rem",
              },
            }}
          >
            <h2>Space</h2>
            <p>The space between the stars and galaxies is largely empty.</p>
          </Box>
          <Typography
            variant={"overline"}
            sx={{
              display: "block",
              textAlign: "center",
              color: "#fff",
              letterSpacing: "3px",
              fontWeight: 200,
              fontSize: 12,
            }}
          >
            Explore
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
