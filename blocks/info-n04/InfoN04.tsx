import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN04Styles } from "./InfoN04.styles";

export function InfoN04() {
  return (
    <Info variant="n04" useStyles={getInfoN04Styles}>
      <InfoEyebrow>Kesha</InfoEyebrow>
      <InfoTitle>Inner Varnika</InfoTitle>
      <InfoSubtitle>
        That year, collection of songs, review melodies, memories full, this is
        a long and warm journey
      </InfoSubtitle>
    </Info>
  );
}
