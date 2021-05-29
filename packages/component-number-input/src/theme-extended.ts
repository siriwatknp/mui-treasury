import { StyleRules } from "@material-ui/core/styles";
import { NumberInputClassKey, NumberInputProps } from "./NumberInput";

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunNumberInput?: {
      defaultProps?: Partial<NumberInputProps>;
      styleOverrides?: Partial<StyleRules<NumberInputClassKey>>;
    };
  }
}
