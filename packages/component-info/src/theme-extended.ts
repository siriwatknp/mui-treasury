import { CSSProperties } from "react";
import { InfoProps } from "./Info";
import { InfoClassKey } from "./infoClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSProperties
>;

export type InfoThemeVariant = {
  props: Partial<InfoProps>;
  style: CSSProperties;
};

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunInfo?: {
      defaultProps?: Partial<InfoProps>;
      styleOverrides?: Partial<OverridesStyleRules<InfoClassKey>>;
      variants?: Array<InfoThemeVariant>;
    };
  }
}
