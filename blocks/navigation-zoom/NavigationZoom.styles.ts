import { CSSObject, Theme } from "@mui/material/styles";
import { navigationClasses } from "../navigation-basic";

const itemHorzPadding = 3;

export const getNavigationZoomStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette, spacing } = "theme" in arg ? arg.theme : arg;
  return {
    [`& .${navigationClasses.item}`]: {
      "&:not(.Mui-disabled)": {
        color: palette.text.primary,
      },
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "1px",
      "&.Mui-active": {
        "&:after": {
          opacity: 1,
          transform: "scale(1, 1)",
        },
      },
      "&:after": {
        content: '""',
        display: "block",
        position: "absolute",
        bottom: 0,
        left: spacing(itemHorzPadding / 2),
        width: `calc(100% - ${spacing(itemHorzPadding)})`,
        height: 2,
        transform: "scale(0, 1)",
        backgroundColor: palette.text.primary,
      },
      "&:hover": {
        "&:after": {
          opacity: 0.38,
          transform: "scale(1, 1)",
        },
      },
    },
  };
};
