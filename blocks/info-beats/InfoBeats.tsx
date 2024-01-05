import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoBeatsStyles } from "./InfoBeats.styles";

export function InfoBeats() {
  return (
    <Info variant="beats" useStyles={getInfoBeatsStyles}>
      <InfoTitle>Beats</InfoTitle>
      <InfoSubtitle>Headphone X</InfoSubtitle>
      <InfoEyebrow>Price starts from $345</InfoEyebrow>
    </Info>
  );
}
