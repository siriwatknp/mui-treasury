import { PropsWithChildren } from "react";

export interface OverridableComponent<Props> {
  <P extends { as?: React.ElementType }>(
    props: P extends { as: infer As }
      ? As extends keyof JSX.IntrinsicElements
        ? P & Props & JSX.IntrinsicElements[As]
        : As extends React.ComponentType<infer AsProps>
        ? P & Props & AsProps
        : PropsWithChildren<P & Props>
      : PropsWithChildren<P & Props>
  ): JSX.Element | null;
}
