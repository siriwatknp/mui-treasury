import { Theme } from "@material-ui/core/styles";

declare module "@material-ui/private-theming/defaultTheme" {
  interface DefaultTheme extends Theme {}
}
