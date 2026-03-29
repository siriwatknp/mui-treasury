import type React from "react";

interface OverridableComponentMeta<
  Props,
  DefaultComponent extends React.ElementType,
> {
  readonly $$ownProps?: Props;
  readonly $$defaultComponent?: DefaultComponent;
}

type InferProps<C extends React.ElementType> =
  C extends OverridableComponentMeta<infer P, infer D extends React.ElementType>
    ? (P & {}) & React.ComponentPropsWithoutRef<D>
    : React.ComponentPropsWithoutRef<C>;

export type OverridableComponent<
  Props extends { component?: React.ElementType },
  DefaultComponent extends React.ElementType = "button",
> = {
  <C extends React.ElementType = DefaultComponent>(
    props: Omit<Props, "component"> &
      Omit<InferProps<C>, keyof Props> & {
        component?: C;
      } & React.RefAttributes<React.ComponentRef<C>>,
  ): React.JSX.Element;
} & OverridableComponentMeta<Props, DefaultComponent>;
