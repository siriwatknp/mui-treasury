import { Theme } from "@mui/material/styles";

declare module "@mui/private-theming/defaultTheme" {
  interface DefaultTheme extends Theme {}
}
