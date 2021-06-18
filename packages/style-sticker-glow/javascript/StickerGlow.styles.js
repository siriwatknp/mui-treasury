import { alpha } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
export const useStickerGlowStyles = makeStyles(
  ({ treasury, ...theme }) => ({
    root: (props) => ({
      boxShadow: `0 2px 8px 0 ${
        props.palette
          ? alpha(treasury.getColor(props?.palette, "500"), 0.6)
          : "rgba(0,0,0,0.2)"
      }`,
      border: "4px solid",
      borderColor: theme.palette.background.paper,
    }),
    none: {
      backgroundColor: theme.palette.background.paper,
    },
    outlined: (props) => ({
      "&:before": {
        display: "none",
      },
      borderColor: treasury.getColor(props?.palette, "500"),
    }),
  }),
  {
    name: "JunSquareSticker",
  }
);
