import React from "react";
import { Info, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoApexStyles } from "./InfoApex.styles";

export function InfoApex() {
  return (
    <Info variant="apex" useStyles={getInfoApexStyles}>
      <InfoTitle>APEX Legends: Assemble!</InfoTitle>
      <InfoSubtitle>Created by siriwatknp</InfoSubtitle>
    </Info>
  );
}
