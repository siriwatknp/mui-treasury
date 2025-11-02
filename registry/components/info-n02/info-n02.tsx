import React from "react";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoN02Styles } from "./info-n02.styles";

export default function InfoN02() {
  return (
    <Info variant="n02" useStyles={getInfoN02Styles}>
      <InfoEyebrow>MARCH 8, 2016</InfoEyebrow>
      <InfoTitle>First Snow Storm</InfoTitle>
      <InfoSubtitle>
        Snow storm coming in Sommaroy island, Arctic Norway. This is something
        that you definitely wanna see in your life.
      </InfoSubtitle>
    </Info>
  );
}
