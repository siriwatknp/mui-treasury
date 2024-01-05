import React from "react";
import RestaurantMenuRounded from "@mui/icons-material/RestaurantMenuRounded";
import TripOrigin from "@mui/icons-material/TripOrigin";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(({ theme: { palette } }) => ({
  width: "180px",
  height: "230px",
  margin: "20px 0 0 0",
  background: palette.mode === "dark" ? palette.grey[800] : palette.grey[100],
  position: "relative",
  overflow: "visible",

  "&:before": {
    content: "' '",
    width: "100%",
    "border-bottom": `30px solid ${
      palette.mode === "dark" ? palette.grey[800] : palette.grey[100]
    }`,
    "border-left": " 20px solid transparent",
    "border-right": "20px solid transparent",
    position: "absolute",
    top: "-30px",
  },
}));

const TripOriginHole = styled(TripOrigin)(({}) => ({
  position: "absolute",
  top: "-20px",
  margin: "auto",
  width: "100%",
  left: 0,
}));

export function CardTag() {
  return (
    <StyledCard elevation={0}>
      <CardContent>
        <TripOriginHole />
        <RestaurantMenuRounded sx={{ fontSize: 83, width: "100%" }} />
        <Typography align="center" gutterBottom>
          BreakFast
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align="center"
          component="p"
        >
          eggs benedict <br />
          BLT sandwich <br />
          french omelette
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
