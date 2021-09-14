import { CSSInterpolation } from "@mui/system";
import { EmailSubscribeFormProps } from "./EmailSubscribe";
import { emailSubscribeClasses } from "./emailSubscribeClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunEmailSubscribe?: {
      defaultProps?: Partial<EmailSubscribeFormProps>;
      styleOverrides?: Partial<
        OverridesStyleRules<keyof typeof emailSubscribeClasses>
      >;
    };
  }
}
