import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { StickerGlowClassKey } from "./StickerGlow.styles";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    JunStickerGlow: StickerGlowClassKey;
  }
}
