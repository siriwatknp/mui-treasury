"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Color from "color"; // v3.2.1

const defaultColor = "#747f84";

const StyledRoot = styled("div")<{ color?: string }>(
  ({ color = defaultColor }) => ({
    position: "relative",
    borderRadius: "1rem",
    minWidth: 320,
    paddingTop: 160,
    "&:before": {
      transition: "0.2s",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      borderRadius: "1rem",
      zIndex: 0,
      bottom: 0,
      backgroundColor: Color(color).darken(0.3).desaturate(0.2).string(),
    },
    "&:hover": {
      "&:before": {
        bottom: -6,
      },
      "& .MuiAvatar-root": {
        transform: "scale(1.1)",
        boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",
      },
    },
  })
);

const CardMediaCover = styled(CardMedia)(() => ({
  borderRadius: "1rem",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  backgroundPosition: "center",
}));

const StyledH2 = styled("h2")(() => ({
  fontFamily: "Fjalla One",
  fontSize: "1.25rem",
  color: "#fff",
  margin: 0,
}));

const StyledContent = styled("div")<{ color?: string }>(
  ({ color = defaultColor }) => ({
    position: "relative",
    zIndex: 1,
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 1,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
      borderRadius: "1rem",
      background: `linear-gradient(to top, ${color}, ${Color(color)
        .rotate(24)
        .lighten(0.12)})`,
    },
  })
);

const AvatarLogo = styled(Avatar)(() => ({
  transition: "0.3s",
  width: 100,
  height: 100,
  boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
  borderRadius: "1rem",
}));

const StyledDivTeam = styled("div")(() => ({
  fontFamily: "Sen",
  fontSize: "0.75rem",
  color: "rgba(255 255 255 / 80%)",
}));

const StyledDivDate = styled("div")(({ theme }) => ({
  fontFamily: "Sen",
  color: "#fff",
  backgroundColor: theme.palette.text.disabled,
  opacity: 0.72,
  fontSize: "0.75rem",
  padding: "0 0.5rem",
  borderRadius: 12,
}));

const CustomCard = ({
  color,
  cover,
  logo,
  title,
  brand,
  date,
}: {
  color?: string;
  cover: string;
  logo: string;
  title: React.ReactNode;
  brand: string;
  date: string;
}) => {
  return (
    <StyledRoot color={color}>
      <CardMediaCover image={cover} />
      <StyledContent color={color}>
        <Box position={"relative"} zIndex={1}>
          <Box display="flex" p={0} gap={2} sx={{ flexWrap: "nowrap" }}>
            <Box>
              <AvatarLogo src={logo} />
            </Box>
            <Box alignSelf="flex-end">
              <StyledH2>{title}</StyledH2>
            </Box>
          </Box>
          <Box display="flex" mt={4} alignItems={"center"}>
            <Box>
              <StyledDivTeam>{brand}</StyledDivTeam>
            </Box>
            <Box ml="auto">
              <StyledDivDate>{date}</StyledDivDate>
            </Box>
          </Box>
        </Box>
      </StyledContent>
    </StyledRoot>
  );
};

export default function CardHighlight() {
  return (
    <Stack direction="row" spacing={4} sx={{ flexWrap: "nowrap" }}>
      <CustomCard
        color="#fc7944"
        brand={"Overwatch Official"}
        date={"02.04.2020"}
        cover={
          "https://cdn.vox-cdn.com/thumbor/C6_-SDnnoFdS19XRH4XvAYN1BT8=/148x0:1768x1080/1400x1400/filters:focal(148x0:1768x1080):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49641465/tracer_overwatch.0.0.jpg"
        }
        logo={"https://d3fa68hw0m2vcc.cloudfront.net/bf4/156511609.jpeg"}
        title={
          <>
            Astronomy Binoculars
            <br />A Great Alternative
          </>
        }
      />
      <CustomCard
        color="#5357ce"
        brand={"League of Legends Official"}
        date={"02.04.2020"}
        cover={"https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg"}
        logo={
          "https://cm1.narvii.com/7153/05204b8d8dcbb652dd1a8ceaafde997bc1909468_00.jpg"
        }
        title={
          <>
            Astronomy Binoculars
            <br />A Great Alternative
          </>
        }
      />
    </Stack>
  );
}
