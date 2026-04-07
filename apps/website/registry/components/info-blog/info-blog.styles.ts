import type { CSSObject, Theme } from "@mui/material/styles";
import { InfoSlotStyles } from "../info-basic/info";

export const getInfoBlogStyles = (
  arg: Theme | { theme: Theme },
): CSSObject & Partial<InfoSlotStyles> => {
  const { spacing } = "theme" in arg ? arg.theme : arg;
  const family =
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
  return {
    eyebrow: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontFamily: 'Maven Pro, "Helvetica Neue", Arial, sans-serif',
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "0.35em",
      fontFamily: family,
    },
    subtitle: {
      marginBottom: spacing(2),
      fontSize: "0.8rem",
      letterSpacing: "0.00938em",
      fontFamily: family,
    },
  };
};
