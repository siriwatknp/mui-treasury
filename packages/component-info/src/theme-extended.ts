import { CSSObject } from "@mui/system";
import { InfoProps } from "./Info";
import { InfoClassKey } from "./infoClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSObject
>;

export type InfoThemeVariant = {
  props: Partial<InfoProps>;
  style: CSSObject;
};

declare module "@mui/material/styles/components" {
  interface Components {
    JunInfo?: {
      defaultProps?: Partial<InfoProps>;
      styleOverrides?: Partial<OverridesStyleRules<InfoClassKey>>;
      variants?: Array<InfoThemeVariant>;
    };
  }
}
