import { CSSInterpolation } from "@material-ui/system";
import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { StickerClassKey, StickerProps } from "./Sticker";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/createTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunSticker?: {
      defaultProps?: Partial<StickerProps>;
      styleOverrides?: Partial<OverridesStyleRules<StickerClassKey>>;
    };
  }
}
