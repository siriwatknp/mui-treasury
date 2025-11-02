import React from "react";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoBeatsStyles } from "./info-beats.styles";

export default function InfoBeats() {
  return (
    <Info variant="beats" useStyles={getInfoBeatsStyles}>
      <InfoTitle>Beats</InfoTitle>
      <InfoSubtitle>Headphone X</InfoSubtitle>
      <InfoEyebrow>Price starts from $345</InfoEyebrow>
    </Info>
  );
}
