import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";
import { treasuryPalette, TreasuryPalette } from "@mui-treasury/theme-treasury";

export function getStickerUtilityClass(slot: string) {
  return generateUtilityClass("JunSticker", slot);
}

export const stickerClasses = generateUtilityClasses("JunSticker", [
  "root",
  "none",
  "solid",
  "soft",
  "outlined",
  "round",
  "hasText",
  ...(Object.keys(treasuryPalette) as Array<keyof TreasuryPalette>),
]);
