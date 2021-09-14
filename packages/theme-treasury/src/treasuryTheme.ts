import {
  createTheme,
  getContrastRatio,
  ThemeOptions,
} from "@mui/material/styles";

import {
  TreasuryPalette,
  TreasuryThemeOptions,
  Swatch,
  TreasuryTheme,
  ExtendedThemeOutput,
} from "./types";
import { treasuryPalette } from "./treasuryPalette";

const getMainColor = (
  palette: TreasuryThemeOptions["palette"] = treasuryPalette,
  key: keyof typeof treasuryPalette
) => (palette[key] ?? treasuryPalette[key])["500"];

export const getColor = (
  palette: Partial<TreasuryPalette> | undefined,
  name: keyof TreasuryPalette | undefined,
  swatch: Swatch
) => (palette && name ? palette?.[name]?.[swatch] ?? "" : "");

export const light = {
  // The palette used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.54)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)",
    // Text hints.
    hint: "rgba(0, 0, 0, 0.38)",
  },
};

export const dark = {
  text: {
    primary: "#fff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
  },
};

export const createTreasuryTheme = (
  options?: TreasuryThemeOptions,
  ...args: object[]
) => {
  const themePalette = {
    ...options?.palette,
    primary: {
      ...treasuryPalette.primary,
      ...options?.palette?.primary,
      main: getMainColor(options?.palette ?? treasuryPalette, "primary"),
    },
    secondary: {
      ...treasuryPalette.secondary,
      ...options?.palette?.secondary,
      main: getMainColor(options?.palette ?? treasuryPalette, "secondary"),
    },
    success: {
      ...treasuryPalette.success,
      ...options?.palette?.success,
      main: getMainColor(options?.palette ?? treasuryPalette, "success"),
    },
    warning: {
      ...treasuryPalette.warning,
      ...options?.palette?.warning,
      main: getMainColor(options?.palette ?? treasuryPalette, "warning"),
    },
    error: {
      ...treasuryPalette.error,
      ...options?.palette?.error,
      main: getMainColor(options?.palette ?? treasuryPalette, "error"),
    },
    info: {
      ...treasuryPalette.info,
      ...options?.palette?.info,
      main: getMainColor(options?.palette ?? treasuryPalette, "info"),
    },
    grey: {
      ...treasuryPalette.grey,
      ...options?.palette?.grey,
    },
  };
  const placeholderColor =
    options?.palette?.mode === "dark" ? dark.text.primary : light.text.primary;
  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background: string) {
    const contrastThreshold = options?.palette?.contrastThreshold ?? 3;
    return getContrastRatio(background, dark.text.primary) >= contrastThreshold
      ? dark.text.primary
      : light.text.primary;
  }
  const input: ExtendedThemeOutput & ThemeOptions = {
    ...options,
    treasury: {
      getColor: (palette, swatch) =>
        getColor(themePalette, palette, swatch) || placeholderColor,
      getContrastColor: (palette, swatch) =>
        getContrastText(
          getColor(themePalette, palette, swatch) || placeholderColor
        ),
    },
    palette: themePalette,
  };
  return createTheme(input, ...args) as TreasuryTheme;
};
