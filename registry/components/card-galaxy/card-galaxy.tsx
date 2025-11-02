"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import type { CSSObject } from "@mui/material/styles";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import type { InfoSlotStyles } from "../info-basic/info";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";

const useStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    eyebrow: {
      color: "rgba(255, 255, 255, 0.92)",
      fontFamily: '"Spartan", san-serif',
      lineHeight: 1.4,
      fontSize: "1.0625rem",
      letterSpacing: "1px",
      textTransform: "initial",
      marginBottom: 0,
    },
    title: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: "bold" as const,
      lineHeight: 1.2,
    },
    subtitle: {
      color: "rgba(255, 255, 255, 0.72)",
      lineHeight: 1.5,
      "&:last-child": {
        marginTop: "1rem",
      },
    },
  };
};

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  minWidth: 200,
  minHeight: 360,
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "64%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "top",
});

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 2),
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
}));

export default function CardGalaxy() {
  return (
    <StyledCard>
      <StyledCardMedia
        image={
          "https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$"
        }
      />
      <Content>
        <Info useStyles={useStyles}>
          <InfoEyebrow>Galaxy</InfoEyebrow>
          <InfoTitle>Buds 2019</InfoTitle>
          <InfoSubtitle>Perfect for everyone</InfoSubtitle>
        </Info>
      </Content>
    </StyledCard>
  );
}
