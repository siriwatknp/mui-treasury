import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

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
  "colorPrimary",
  "colorSecondary",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
  "colorGrey",
]);
