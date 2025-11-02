import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";

export default function CardBlog() {
  return (
    <Card
      sx={(theme) => ({
        margin: "auto",
        borderRadius: theme.spacing(2),
        transition: "0.3s",
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        position: "relative",
        maxWidth: 500,
        marginLeft: "auto",
        overflow: "initial",
        background: (theme.vars || theme).palette.background.paper,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
          paddingTop: theme.spacing(2),
        },
        ...theme.applyStyles("dark", {
          boxShadow: "0px 14px 80px rgba(0, 0, 0, 0.5)",
        }),
      })}
    >
      <CardMedia
        image={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
        }
        sx={(theme) => ({
          width: "88%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: theme.spacing(-3),
          height: 0,
          paddingBottom: "48%",
          borderRadius: theme.spacing(2),
          backgroundColor: (theme.vars || theme).palette.common.white,
          position: "relative",
          [theme.breakpoints.up("md")]: {
            width: "100%",
            marginLeft: theme.spacing(-3),
            marginTop: 0,
            transform: "translateX(-8px)",
          },
          "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
            borderRadius: theme.spacing(2),
            opacity: 0.5,
          },
          ...theme.applyStyles("dark", {
            backgroundColor: (theme.vars || theme).palette.grey[900],
            "&:after": {
              opacity: 0.7,
            },
          }),
        })}
      />
      <CardContent>
        <Info
          useStyles={(theme) => {
            const family =
              "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
            return {
              eyebrow: {
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: 12,
                marginBottom: "0.875em",
                display: "inline-block",
              },
              title: {
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: "0.35em",
                fontFamily: family,
              },
              subtitle: {
                marginBottom: theme.spacing(2),
                fontSize: "0.8rem",
                letterSpacing: "0.00938em",
                fontFamily: family,
              },
            };
          }}
        >
          <InfoEyebrow>28 MAR 2019</InfoEyebrow>
          <InfoTitle>What is Git ?</InfoTitle>
          <InfoSubtitle>
            Git is a distributed version control system. Every dev has a working
            copy of the code and...
          </InfoSubtitle>
        </Info>
        <Button
          sx={{
            backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
            boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
            borderRadius: 100,
            paddingLeft: 3,
            paddingRight: 3,
            color: "#ffffff",
          }}
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
}
