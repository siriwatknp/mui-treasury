import { StyleRules } from "@material-ui/core/styles";
import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { StickerClassKey, StickerProps } from "./Sticker";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunSticker?: {
      defaultProps?: Partial<StickerProps>;
      styleOverrides?: Partial<StyleRules<StickerClassKey>>;
    };
  }
}
