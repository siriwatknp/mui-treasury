"use client";
import { Theme } from "@mui/material/styles";

export const getBaseGrey = (theme: Theme): string =>
  theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "grey.300";

export const getLightGrey = (theme: Theme): string =>
  theme.palette.mode === "dark" ? "rgba(255,255,255,0.09)" : "grey.200";

export const getLightestGrey = (theme: Theme): string =>
  theme.palette.mode === "dark" ? "rgba(255,255,255,0.07)" : "grey.50";

let seed = 0;
function seededRandom() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

export const randomBetween = (min: number, max: number, unit?: string) => {
  const result = Math.floor(seededRandom() * (max - min)) + min;
  if (unit) return `${result}${unit}`;
  return result;
};
