export interface OverridableComponent<
  Props,
  PropsWithoutAs = {},
  BaseRef = any
> {
  <P extends { component?: React.ElementType }>(
    props: P extends { component: infer As }
      ? As extends keyof JSX.IntrinsicElements
        ? { component: As } & Props & JSX.IntrinsicElements[As]
        : As extends React.ComponentType<infer AsProps>
        ? { component: As } & Props & AsProps
        : never
      : P & Props & { ref?: React.Ref<BaseRef> } & PropsWithoutAs
  ): JSX.Element | null;
}

export type CompositeWithRef<T, P, C = {}> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> &
  C;

export type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;
