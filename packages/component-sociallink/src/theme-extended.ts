import { CSSInterpolation } from "@material-ui/system";
import { SocialLinkClassKey, SocialLinkProps } from "./SocialLink";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunSocialLink?: {
      defaultProps?: Partial<SocialLinkProps>;
      styleOverrides?: Partial<OverridesStyleRules<SocialLinkClassKey>>;
    };
  }
}
