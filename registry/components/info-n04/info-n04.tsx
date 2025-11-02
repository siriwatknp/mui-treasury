import React from "react";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoN04Styles } from "./info-n04.styles";

export default function InfoN04() {
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
