import { StyleRules } from "@material-ui/core/styles";
import { EmailSubscribeFormProps } from "./EmailSubscribe";
import { emailSubscribeClasses } from "./emailSubscribeClasses";

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunEmailSubscribe?: {
      defaultProps?: Partial<EmailSubscribeFormProps>;
      styleOverrides?: Partial<StyleRules<keyof typeof emailSubscribeClasses>>;
    };
  }
}
