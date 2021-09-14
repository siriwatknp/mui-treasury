import { ComboBoxClassKey, ComboBoxProps } from "./ComboBox";
// uncomment these lines if this style has @mui-treasury/theme-treasury as dependency
import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";

declare module "@mui/material/styles/createTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@mui/material/styles/overrides" {
  interface ComponentNameToClassKey {
    MuiComboBox: ComboBoxClassKey;
  }
}

declare module "@mui/material/styles/props" {
  interface ComponentsPropsList {
    MuiComboBox: ComboBoxProps;
  }
}
