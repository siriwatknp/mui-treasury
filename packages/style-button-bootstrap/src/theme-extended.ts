import { ButtonBootstrapClassKey } from "./ButtonBootstrap.styles";
// uncomment these lines if this style has @mui-treasury/theme-treasury as dependency
// ButtonBootstrapimport { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";

// declare module "@material-ui/core/styles/createTheme" {
//   interface Theme extends ExtendedThemeOutput {}
// }

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    MuiButtonBootstrap: ButtonBootstrapClassKey;
  }
}
