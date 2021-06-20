import { CSSInterpolation } from "@material-ui/system";
import { InfoProps } from "./Info";
import { InfoClassKey } from "./infoClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunInfo?: {
      defaultProps?: Partial<InfoProps>;
      styleOverrides?: Partial<OverridesStyleRules<InfoClassKey>>;
      variants?: Array<{
        props: Partial<InfoProps>;
        style: CSSInterpolation;
      }>;
    };
  }
}
