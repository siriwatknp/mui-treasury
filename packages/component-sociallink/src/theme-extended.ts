import { CSSInterpolation } from "@mui/system";
import { SocialLinkClassKey, SocialLinkProps } from "./SocialLink";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunSocialLink?: {
      defaultProps?: Partial<SocialLinkProps>;
      styleOverrides?: Partial<OverridesStyleRules<SocialLinkClassKey>>;
    };
  }
}
