import type { CssVarsThemeOptions } from "@mui/material/styles";

// Augment the palette to include custom 'text' property
declare module "@mui/material/styles" {
  interface PaletteColor {
    text: string;
  }

  interface SimplePaletteColorOptions {
    text?: string;
  }

  interface TypeText {
    icon: string;
    tertiary: string;
  }
}

export const colors: CssVarsThemeOptions["colorSchemes"] = {
  light: {
    palette: {
      text: {
        icon: "rgb(0 0 0 / 0.4)", // systemGray for icons
        tertiary: "rgb(0 0 0 / 0.54)", // lowest contrast text to pass AAA
      },
      action: {
        activatedOpacity: 0.38, // Reduced from 0.54
        selectedOpacity: 0.06, // Reduced from 0.08
        disabledOpacity: 0.2, // Reduced from 0.38
        focusOpacity: 0.08, // Reduced from 0.12
      },
      primary: {
        main: "#000",
        text: "#212121",
      },
      secondary: {
        main: "rgb(229, 229, 234)", // systemGray
        text: "rgb(108, 108, 112)", // systemGray increased contrast
      },
      success: {
        main: "rgb(52, 199, 89)", // green
        text: "rgb(0, 137, 50)", // green increased contrast
      },
      error: {
        main: "rgb(255, 56, 60)", // red
        text: "rgb(233, 21, 45)", // red increased contrast
      },
      warning: {
        main: "rgb(255, 204, 0)", // yellow
        text: "rgb(161, 106, 0)", // yellow increased contrast
      },
      info: {
        main: "rgb(0, 136, 255)", // blue
        text: "rgb(30, 110, 244)", // blue increased contrast
      },
      background: {
        default: "rgb(248, 248, 248)",
      },
    },
  },
  dark: {
    palette: {
      text: {
        icon: "rgb(255 255 255 / 0.54)", // systemGray for icons in dark mode
        tertiary: "rgb(255 255 255 / 0.6)", // systemGray for tertiary text
      },
      action: {
        activatedOpacity: 0.38, // Reduced intensity
        selectedOpacity: 0.06, // Subtle selection
        disabledOpacity: 0.2, // Reduced opacity
        focusOpacity: 0.08, // Subtle focus
      },
      primary: {
        main: "#fff",
        text: "#f5f5f5",
      },
      secondary: {
        main: "rgb(142, 142, 147)", // systemGray
        text: "rgb(174, 174, 178)", // systemGray for dark mode
      },
      success: {
        main: "rgb(48, 209, 88)", // green for dark
        text: "rgb(71, 217, 104)", // green for dark
      },
      error: {
        main: "rgb(255, 69, 58)", // red for dark
        text: "rgb(255, 97, 101)", // red for dark
      },
      warning: {
        main: "rgb(255, 214, 10)", // yellow for dark
        text: "rgb(254, 223, 67)", // yellow for dark
      },
      info: {
        main: "rgb(0, 145, 255)", // blue for dark
        text: "rgb(92, 184, 255)", // blue for dark
      },
      background: {
        default: "rgb(0, 0, 0)", // systemGrayDark
        paper: "rgb(18, 18, 18)", // systemGrayDark
      },
    },
  },
};
