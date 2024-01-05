import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoChatzStyles } from "./InfoChatz.styles";

export function InfoChatz() {
  return (
    <Info variant="chatz" useStyles={getInfoChatzStyles}>
      <InfoTitle>Phawta Tuntayakul</InfoTitle>
      <InfoSubtitle>Great, I'll join you tomorrow...</InfoSubtitle>
      <InfoEyebrow>10 m</InfoEyebrow>
    </Info>
  );
}
