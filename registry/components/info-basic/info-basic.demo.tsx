"use client";

import { Info } from "./info";
import { InfoCaption } from "./info-caption";
import { InfoEyebrow } from "./info-eyebrow";
import { InfoSubtitle } from "./info-subtitle";
import { InfoTitle } from "./info-title";

export default function InfoBasicDemo() {
  return (
    <Info>
      <InfoEyebrow>Material Blog</InfoEyebrow>
      <InfoTitle>Unveiling Material You</InfoTitle>
      <InfoSubtitle>The next stage for Material Design</InfoSubtitle>
      <InfoCaption>10 FEB 2021</InfoCaption>
    </Info>
  );
}
