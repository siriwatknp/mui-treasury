export interface OverridableComponent<Props> {
  <P extends { component?: React.ElementType }>(
    props: P extends { component: infer As }
      ? As extends keyof JSX.IntrinsicElements
        ? P & Props & JSX.IntrinsicElements[As]
        : As extends React.ComponentType<infer AsProps>
        ? P & Props & AsProps
        : P & Props
      : P & Props
  ): JSX.Element | null;
}

// from @mui/styles
export type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;
