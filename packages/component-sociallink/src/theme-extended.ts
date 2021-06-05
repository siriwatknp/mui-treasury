import { StyleRules } from "@material-ui/core/styles";
import { SocialLinkClassKey, SocialLinkProps } from "./SocialLink";

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunSocialLink?: {
      defaultProps?: Partial<SocialLinkProps>;
      styleOverrides?: Partial<StyleRules<SocialLinkClassKey>>;
    };
  }
}
