import { ComboBoxClassKey, ComboBoxProps } from "./ComboBox";
// uncomment these lines if this style has @mui-treasury/theme-treasury as dependency
import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    MuiComboBox: ComboBoxClassKey;
  }
}

declare module "@material-ui/core/styles/props" {
  interface ComponentsPropsList {
    MuiComboBox: ComboBoxProps;
  }
}
