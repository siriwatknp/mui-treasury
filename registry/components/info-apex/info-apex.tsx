import React from "react";
import { Info } from "../info-basic/info";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoApexStyles } from "./info-apex.styles";

export default function InfoApex() {
  return (
    <Info variant="apex" useStyles={getInfoApexStyles}>
      <InfoTitle>APEX Legends: Assemble!</InfoTitle>
      <InfoSubtitle>Created by siriwatknp</InfoSubtitle>
    </Info>
  );
}
