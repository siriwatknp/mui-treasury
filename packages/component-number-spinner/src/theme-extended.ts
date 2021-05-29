import { StyleRules } from "@material-ui/core/styles";
import { NumberSpinnerClassKey, NumberSpinnerProps } from "./NumberSpinner";

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunNumberSpinner?: {
      defaultProps?: Partial<NumberSpinnerProps>;
      styleOverrides?: Partial<StyleRules<NumberSpinnerClassKey>>;
    };
  }
}
