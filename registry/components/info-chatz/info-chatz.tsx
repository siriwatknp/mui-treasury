import React from "react";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoChatzStyles } from "./info-chatz.styles";

export default function InfoChatz() {
  return (
    <Info variant="chatz" useStyles={getInfoChatzStyles}>
      <InfoTitle>Phawta Tuntayakul</InfoTitle>
      <InfoSubtitle>Great, I'll join you tomorrow...</InfoSubtitle>
      <InfoEyebrow>10 m</InfoEyebrow>
    </Info>
  );
}
