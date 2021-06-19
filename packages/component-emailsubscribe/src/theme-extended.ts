import { CSSInterpolation } from "@material-ui/system";
import { EmailSubscribeFormProps } from "./EmailSubscribe";
import { emailSubscribeClasses } from "./emailSubscribeClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunEmailSubscribe?: {
      defaultProps?: Partial<EmailSubscribeFormProps>;
      styleOverrides?: Partial<
        OverridesStyleRules<keyof typeof emailSubscribeClasses>
      >;
    };
  }
}
