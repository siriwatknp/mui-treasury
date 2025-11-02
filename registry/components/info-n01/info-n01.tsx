import React from "react";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoN01Styles } from "./info-n01.styles";

export default function InfoN01() {
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
