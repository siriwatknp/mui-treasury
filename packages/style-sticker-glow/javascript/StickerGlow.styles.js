import "@mui-treasury/component-sticker";
import { alpha } from "@mui/material/styles";
import { stickerClasses } from "@mui-treasury/component-sticker";
import { capitalize } from "@mui/material";
const PALETTE = [
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
  "grey",
];
export const getStickerGlowStyles = (arg) => {
  const { palette, treasury } = "theme" in arg ? arg.theme : arg;
  return {
    border: "4px solid",
    borderColor: palette.background.paper,
    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.2)",
    [`&.${stickerClasses.none}`]: {
      backgroundColor: palette.background.paper,
    },
    [`&.${stickerClasses.outlined}`]: {
      "&:before": {
        display: "none",
      },
    },
    ...PALETTE.reduce(
      (result, curr) => ({
        ...result,
        [`&.${stickerClasses[`color${capitalize(curr)}`]}`]: {
          boxShadow: `0 2px 8px 0 ${alpha(
            treasury.getColor(curr, "500"),
            0.6
          )}`,
          [`&.${stickerClasses.outlined}`]: {
            borderColor: treasury.getColor(curr, "500"),
          },
        },
      }),
      {}
    ),
  };
};
export const getStickerGlowTheme = (theme) => {
  return {
    JunSticker: {
      styleOverrides: {
        root: getStickerGlowStyles(theme),
      },
    },
  };
};
