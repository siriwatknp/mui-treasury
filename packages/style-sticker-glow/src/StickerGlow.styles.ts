import { alpha } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { StickerProps } from "@mui-treasury/component-sticker";

type Props = Pick<StickerProps, "palette">;

export const useStickerGlowStyles = makeStyles(
  ({ treasury, ...theme }) => ({
    root: (props: Props) => ({
      boxShadow: `0 2px 8px 0 ${
        props.palette
          ? alpha(treasury.getColor(props?.palette, "500")!, 0.6)
          : "rgba(0,0,0,0.2)"
      }`,
      border: "4px solid",
      borderColor: theme.palette.background.paper,
    }),
    none: {
      backgroundColor: theme.palette.background.paper,
    },
    outlined: (props: Props) => ({
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

export type StickerGlowClassKey = keyof ReturnType<typeof useStickerGlowStyles>;
export type StickerGlowClasses = Partial<Record<StickerGlowClassKey, string>>;
