import React from "react";
import { CSSObject } from "@mui/system";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  Info,
  InfoHead,
  InfoBody,
  InfoEyebrow,
  InfoSlotStyles,
} from "@mui-treasury/component-info";

const useStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    eyebrow: {
      color: "rgba(255, 255, 255, 0.92)",
      lineHeight: 1.4,
      letterSpacing: "1px",
      textTransform: "initial",
    },
    head: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: "bold" as const,
      lineHeight: 1.2,
    },
    body: {
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

export default function CardGalaxy(props: { style?: React.CSSProperties }) {
  return (
    <StyledCard {...props}>
      <StyledCardMedia
        image={
          "https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$"
        }
      />
      <Content>
        <Info useStyles={useStyles}>
          <InfoEyebrow>Galaxy</InfoEyebrow>
          <InfoHead>Buds 2019</InfoHead>
          <InfoBody>Perfect for everyone</InfoBody>
        </Info>
      </Content>
    </StyledCard>
  );
}
