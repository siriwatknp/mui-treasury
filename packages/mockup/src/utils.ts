import { Theme } from "@material-ui/core/styles";

export const getBaseGrey = (theme: Theme) =>
  theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "grey.300";

export const getLightGrey = (theme: Theme) =>
  theme.palette.mode === "dark" ? "rgba(255,255,255,0.09)" : "grey.200";

export const getLightestGrey = (theme: Theme) =>
  theme.palette.mode === "dark" ? "rgba(255,255,255,0.07)" : "grey.50";

export const randomBetween = (min: number, max: number, unit?: string) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  if (unit) return `${result}${unit}`;
  return result;
};
