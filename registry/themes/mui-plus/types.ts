import { createTheme } from "@mui/material/styles";

export type ThemeOptions = NonNullable<Parameters<typeof createTheme>[0]>;

export type ThemeComponents = NonNullable<
  Parameters<typeof createTheme>[0]
>["components"];
