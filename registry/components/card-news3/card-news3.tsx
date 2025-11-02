import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Info } from "../info-basic/info";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";

const titleFontSize = "1rem";
const subtitleFontSize = "0.875rem";
const family = "'Sen', sans-serif";

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 320,
  position: "relative",
  boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
  overflow: "visible",
  borderRadius: "1.5rem",
  transition: "0.4s",

  "&:hover": {
    transform: "translateY(-2px)",
    "& .Shadow1": {
      bottom: "-1.5rem",
    },
    "& .Shadow2": {
      bottom: "-2.5rem",
    },
  },

  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 0,
    display: "block",
    width: "100%",
    bottom: -1,
    height: "100%",
    borderRadius: "1.5rem",
    backgroundColor: "rgba(0,0,0,0.08)",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,0.08)",
    }),
  },
}));

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  backgroundPosition: "center",
});

const BoxMain = styled(Box)(() => ({
  overflow: "hidden",
  borderTopLeftRadius: "1.5rem",
  borderTopRightRadius: "1.5rem",
  zIndex: 1,

  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    display: "block",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, #014a7d, rgba(0,0,0,0))",
  },
}));

const StyledDivContent = styled("div")(() => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  zIndex: 1,
  padding: "1.5rem 1.5rem 1rem",
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: 48,
  height: 48,
}));

const StyledDivTag = styled("div")(() => ({
  display: "inline-block",
  fontFamily: "'Sen', sans-serif",
  backgroundColor: "#ff5dac",
  borderRadius: "0.5rem",
  padding: "2px 0.5rem",
  color: "#fff",
  marginBottom: "0.5rem",
}));

const TypographyTitle = styled(Typography)(() => ({
  fontFamily: "'Sen', sans-serif",
  fontSize: "2rem",
  fontWeight: 800,
  color: "#fff",
}));

const RowAuthor = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  minWidth: 0,
  padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(3)}`,
  margin: 0,
  backgroundColor: "#fff",
  zIndex: 1,
  position: "relative",
  borderBottomLeftRadius: "1.5rem",
  borderBottomRightRadius: "1.5rem",
  ...theme.applyStyles("dark", {
    backgroundColor: (theme.vars || theme).palette.grey[900],
  }),
}));

const Shadow = styled("div")(({ theme }) => ({
  transition: "0.2s",
  position: "absolute",
  zIndex: 0,
  width: "88%",
  height: "100%",
  bottom: 0,
  borderRadius: "1.5rem",
  backgroundColor: "rgba(0,0,0,0.06)",
  left: "50%",
  transform: "translateX(-50%)",
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255,255,255,0.08)",
  }),
  "& + &": {
    bottom: 0,
    width: "72%",
    backgroundColor: "rgba(0,0,0,0.04)",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,0.03)",
    }),
  },
}));

const newsInfoStyles = (arg: Theme | { theme: Theme }) => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      lineHeight: 1.2,
      marginBottom: 0,
      fontWeight: 500,
    },
    subtitle: {
      fontFamily: family,
      color: (theme.vars || theme).palette.grey[500],
      fontSize: subtitleFontSize,
      lineHeight: 1.75,
    },
  };
};

export default function CardNews3() {
  return (
    <StyledCard>
      <BoxMain minHeight={300} position={"relative"}>
        <StyledCardMedia
          image={
            "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          }
        />
        <StyledDivContent>
          <StyledDivTag>Fashion</StyledDivTag>
          <TypographyTitle variant={"h2"}>
            Diana Marvel Has a City Take on the Cowboy Boot
          </TypographyTitle>
        </StyledDivContent>
      </BoxMain>
      <RowAuthor>
        <Box>
          <StyledAvatar src={"https://i.pravatar.cc/300?img=13"} />
        </Box>
        <Info useStyles={newsInfoStyles} sx={{ alignSelf: "center" }}>
          <InfoTitle>Nadine Petrolli</InfoTitle>
          <InfoSubtitle>Jul 20 | 2 Min Read</InfoSubtitle>
        </Info>
      </RowAuthor>
      <Shadow className="Shadow1" />
      <Shadow className="Shadow2" />
    </StyledCard>
  );
}
