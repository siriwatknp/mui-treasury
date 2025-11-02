import React from "react";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoN03Styles } from "./info-n03.styles";

export default function InfoN03() {
  return (
    <Info variant="n03" useStyles={getInfoN03Styles}>
      <InfoEyebrow>GOOGLE INC.</InfoEyebrow>
      <InfoTitle>Project Polymer</InfoTitle>
      <InfoSubtitle>
        Web components usher in a new era of web development based on
        encapsulated and interoperable custom
      </InfoSubtitle>
    </Info>
  );
}
