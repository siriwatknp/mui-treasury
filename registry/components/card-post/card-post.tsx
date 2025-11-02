import React from "react";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import Share from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { Info } from "../info-basic/info";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoN01Styles } from "../info-n01/info-n01.styles";

export default function CardPost() {
  return (
    <Card
      sx={{
        maxWidth: 304,
        margin: "auto",
        boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
        transition: "0.3s",
      }}
    >
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80"
        }
        sx={{
          width: "100%",
          paddingBottom: "56.25%",
          clipPath: "polygon(0 0, 100% 0%, 100% 84%, 0% 100%)",
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        }}
      />
      <Avatar
        src={"https://i.pravatar.cc/300"}
        sx={{
          width: 50,
          height: 50,
          border: "2px solid #fff",
          margin: "-48px 32px 0 auto",
          "& > img": {
            margin: 0,
          },
        }}
      />
      <CardContent sx={{ p: 3 }}>
        <Info useStyles={getInfoN01Styles}>
          <InfoTitle>First Snow Storm</InfoTitle>
          <InfoSubtitle>
            Snow storm coming in Sommaroy island, Arctic Norway. This is
            something that you definitely wanna see in your life.
          </InfoSubtitle>
        </Info>
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
      </Box>
    </Card>
  );
}
