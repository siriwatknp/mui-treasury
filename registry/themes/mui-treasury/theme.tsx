"use client";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { colors } from "./colors";
import { typography } from "./typography";
import { buttonTheme } from "./components/button";
import { textFieldTheme } from "./components/text-field";
import { selectTheme } from "./components/select";
import { autocompleteTheme } from "./components/autocomplete";
import { chipTheme } from "./components/chip";
import { avatarTheme } from "./components/avatar";
import { menuTheme } from "./components/menu";
import { tableTheme } from "./components/table";
import { cardTheme } from "./components/card";
import { dialogTheme } from "./components/dialog";
import { datePickerTheme } from "./components/date-picker";
import { svgIconTheme } from "./components/svg-icon";
import { dataGridTheme } from "./components/data-grid";
import { alertTheme } from "./components/alert";
import { treeViewTheme } from "./components/tree-view";
import { layoutTheme } from "./components/layout";
import { linkTheme } from "./components/link";
import { controlsTheme } from "./components/controls";
import { shadows } from "./shadows";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
    cssVarPrefix: "plus",
  },
  colorSchemes: colors,
  shape: {
    borderRadius: 8,
  },
  components: {
    ...buttonTheme,
    ...textFieldTheme,
    ...selectTheme,
    ...menuTheme,
    ...autocompleteTheme,
    ...chipTheme,
    ...avatarTheme,
    ...tableTheme,
    ...cardTheme,
    ...dialogTheme,
    ...datePickerTheme,
    ...svgIconTheme,
    ...dataGridTheme,
    ...alertTheme,
    ...treeViewTheme,
    ...layoutTheme,
    ...linkTheme,
    ...controlsTheme,
  },
  typography,
  shadows,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default theme;
