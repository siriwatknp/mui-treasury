import React from "react";
import Add from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Info, InfoSubtitle, InfoTitle } from "../info-basic";

const titleFontSize = "1rem";
const subtitleFontSize = "0.75rem";
const family = "'Open Sans', sans-serif";

const tutorInfoStyles = () => ({
  title: {
    fontFamily: family,
    color: "#4d4b5f",
    fontSize: titleFontSize,
    lineHeight: 1.2,
    fontWeight: 700,
    marginBottom: "0.125rem",
  },
  subtitle: {
    fontFamily: family,
    color: "#696c6f",
    fontWeight: 500,
    fontSize: subtitleFontSize,
    lineHeight: 1.4,
  },
});

const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: "#fff",
  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
  color: "rgba(0, 0, 0, 0.54)",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
  },
}));

export function CardTutor() {
  return (
    <Box
      display="flex"
      p={1.5}
      gap={2}
      bgcolor={"#f5f5f5"}
      borderRadius={4}
      sx={{ alignItems: "center" }}
    >
      <Box>
        <Avatar
          src={
            "https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"
          }
          sx={{ borderRadius: 3, width: 48, height: 48 }}
        />
      </Box>
      <Info sx={{ flex: "auto" }} useStyles={tutorInfoStyles}>
        <InfoTitle>Kenny Foster</InfoTitle>
        <InfoSubtitle>@fosterlive</InfoSubtitle>
      </Info>
      <Box ml={1}>
        <StyledIconButton size="small">
          <Add />
        </StyledIconButton>
      </Box>
    </Box>
  );
}
