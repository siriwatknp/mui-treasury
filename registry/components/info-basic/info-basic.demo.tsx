"use client";

import { Info } from "@/registry/components/info-basic/info";
import { InfoCaption } from "@/registry/components/info-basic/info-caption";
import { InfoEyebrow } from "@/registry/components/info-basic/info-eyebrow";
import { InfoSubtitle } from "@/registry/components/info-basic/info-subtitle";
import { InfoTitle } from "@/registry/components/info-basic/info-title";

export function Demo() {
  return (
    <Info>
      <InfoEyebrow>Material Blog</InfoEyebrow>
      <InfoTitle>Unveiling Material You</InfoTitle>
      <InfoSubtitle>The next stage for Material Design</InfoSubtitle>
      <InfoCaption>10 FEB 2021</InfoCaption>
    </Info>
  );
}
