# `@mui-treasury/theme-treasury`

appends some utilities and more color swatches to the theme object with type safe

## Basic Usage

replace `createTheme` with `createTreasuryTheme` from the library

```tsx
// import { createTheme } from "@material-ui/core/styles";
import { createTreasuryTheme } from "@mui-treasury/theme-treasury";

const theme = createTreasuryTheme();

// usually, at the root of the app
function App({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
```

If there is no arg provided, it will use default color palette. Then, there will some fields added to the theme.

```ts
// theme
{
  treasury: {
    getColor: (palette: Palette, swatch: Swatch) => string,
    getContrastColor: (palette: Palette, swatch: Swatch) => string,
  },
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    },
    secondary: {
      // ...fields are same as primary
    },
    success: {
      // ...fields are same as primary
    },
    info: {
      // ...fields are same as primary
    },
    warning: {
      // ...fields are same as primary
    },
    error: {
      // ...fields are same as primary
    },
  }
}
```

## Customisation

To customise the palette, it is needed to provide the whole swatches to the creator function.

```ts
import { createTreasuryTheme } from "@mui-treasury/theme-treasury";

// ex. custom only primary color
const theme = createTreasuryTheme({
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    // if "main" is not specified, it will use swatch number "500".
  },
});
```
