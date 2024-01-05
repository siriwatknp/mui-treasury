import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN02Styles } from "./InfoN02.styles";

export function InfoN02() {
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
