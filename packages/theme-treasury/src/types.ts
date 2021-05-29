import { ThemeOptions, Theme } from "@material-ui/core/styles";

import { treasuryPalette } from "./treasuryPalette";

export type TreasuryPalette = typeof treasuryPalette;

export type Palette = keyof TreasuryPalette;

export type Swatch =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type PaletteSwatch = Record<Swatch, string>;

export type ExtendedThemeInput = {
  palette?: Partial<TreasuryPalette>;
};

export type ExtendedThemeOutput = {
  treasury: {
    getColor: (
      palette: keyof TreasuryPalette | undefined,
      swatch: Swatch
    ) => string;
    getContrastColor: (
      palette: keyof TreasuryPalette | undefined,
      swatch: Swatch
    ) => string;
  };
};

export type TreasuryTheme = Theme & ExtendedThemeOutput;

export type TreasuryThemeOptions = ThemeOptions & ExtendedThemeInput;
