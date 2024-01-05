import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN03Styles } from "./InfoN03.styles";

export function InfoN03() {
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
