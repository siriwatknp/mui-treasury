import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN01Styles } from "./InfoN01.styles";

export function InfoN01() {
  return (
    <Info variant="n01" useStyles={getInfoN01Styles}>
      <InfoEyebrow>March 20, 2019</InfoEyebrow>
      <InfoTitle>Nature Around Us</InfoTitle>
      <InfoSubtitle>
        We are going to learn different kinds of species in nature that live
        together to form amazing environment.
      </InfoSubtitle>
    </Info>
  );
}
