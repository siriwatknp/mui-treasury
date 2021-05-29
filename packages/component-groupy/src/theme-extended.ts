import { StyleRules } from "@material-ui/core/styles";
import { GroupyClassKey, GroupyProps } from "./Groupy";

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunGroupy?: {
      defaultProps?: Partial<GroupyProps>;
      styleOverrides?: Partial<StyleRules<GroupyClassKey>>;
    };
  }
}
