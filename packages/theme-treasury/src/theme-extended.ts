import { ExtendedThemeOutput, PaletteSwatch } from "./types";

declare module "@mui/material/styles/createTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor extends PaletteSwatch {}
}
