import { CSSObject } from "@material-ui/system";
import { alpha, Theme } from "@material-ui/core/styles";
import { StickerProps, stickerClasses } from "@mui-treasury/component-sticker";
import { Components } from "@material-ui/core/styles/components";
import { capitalize } from "@material-ui/core";

type Output = Required<Pick<Components, "JunSticker">>;

const PALETTE: Array<NonNullable<StickerProps["palette"]>> = [
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
  "grey",
];

export const getStickerGlowStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
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
        [`&.${
          stickerClasses[
            `color${capitalize(curr)}` as `color${Capitalize<typeof curr>}`
          ]
        }`]: {
          boxShadow: `0 2px 8px 0 ${alpha(
            treasury.getColor(curr, "500")!,
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

export const getStickerGlowTheme = (theme: Theme): Output => {
  return {
    JunSticker: {
      styleOverrides: {
        root: getStickerGlowStyles(theme),
      },
    },
  };
};
