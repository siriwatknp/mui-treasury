import { CSSInterpolation } from "@mui/system";
import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { StickerClassKey, StickerProps } from "./Sticker";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/createTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@mui/material/styles/components" {
  interface Components {
    JunSticker?: {
      defaultProps?: Partial<StickerProps>;
      styleOverrides?: Partial<OverridesStyleRules<StickerClassKey>>;
    };
  }
}
