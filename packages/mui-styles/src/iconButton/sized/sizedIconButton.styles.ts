export type SizedIconButtonStyleProps = {
  padding: string | number;
  color: string;
  childSize: string | number;
};

export default () => ({
  root: ({ padding = 12, color = '' }: SizedIconButtonStyleProps) => ({
    color,
    padding,
  }),
  label: ({ childSize = 24 }) => ({
    '& > *': {
      fontSize: childSize,
    },
  }),
});
