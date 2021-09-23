import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { FlexCol, Item } from "@mui-treasury/component-flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/component-info";

const StyledCard = styled(Card)(() => ({
  position: "relative",
  borderRadius: 16,
  padding: 12,
  backgroundColor: "#e5fcfb",
  minWidth: 300,
  boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
  },
}));

const ButtonLearnMore = styled(Button)(() => ({
  backgroundColor: "#fff !important",
  color: "#fb703c",
  boxShadow: "0 2px 6px #d0efef",
  borderRadius: 12,
  minWidth: 120,
  minHeight: 4,
  textTransform: "initial",
  fontSize: "0.875rem",
  fontWeight: 700,
  letterSpacing: 0,
}));

const StyledImg = styled("img")(() => ({
  position: "absolute",
  width: "40%",
  bottom: 0,
  right: 0,
  display: "block",
}));

const StyledDiv = styled("div")(() => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  transform: "translate(70%, 50%)",
  borderRadius: "50%",
  backgroundColor: "rgba(71, 167, 162, 0.12)",
  padding: "40%",

  "&:before": {
    position: "absolute",
    borderRadius: "50%",
    content: '""',
    display: "block",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "-16%",
    backgroundColor: "rgba(71, 167, 162, 0.08)",
  },
}));

const useOfferInfoStyles = () => {
  return {
    title: {
      color: "#fb703c",
      fontSize: "1.125rem",
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      marginBottom: 0,
    },
    subtitle: {
      color: "#48bbb5",
      fontSize: "0.875rem",
      fontWeight: 500,
    },
  };
};

export default function CardOffer() {
  return (
    <StyledCard>
      <FlexCol gap={2} mr={2}>
        <Info useStyles={useOfferInfoStyles}>
          <InfoTitle>50 Days of Premium!</InfoTitle>
          <InfoSubtitle>Get it before 01.01.2020</InfoSubtitle>
        </Info>
        <Item mt={2}>
          <ButtonLearnMore>Learn more</ButtonLearnMore>
        </Item>
      </FlexCol>
      <StyledImg
        alt={""}
        src={
          "https://pathwaychurch.life/wp-content/uploads/2018/09/bow-transparent-background-1.png"
        }
      />
      <StyledDiv />
    </StyledCard>
  );
}
