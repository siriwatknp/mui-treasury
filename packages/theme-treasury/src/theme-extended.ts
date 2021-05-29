import { ExtendedThemeOutput, PaletteSwatch } from "./types";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteColor extends PaletteSwatch {}
}
