import Color from 'color';

export type SizedIconButtonStyleProps = {
  padding: string | number;
  color: string;
  childSize?: string | number;
};

export default () => ({
  root: ({ padding = 12, color = '' }: SizedIconButtonStyleProps) => ({
    color,
    padding,
    '&:hover': {
      backgroundColor: color ? Color(color).rotate(-6).fade(0.92).toString() : ''
    }
  }),
  label: ({ childSize }: SizedIconButtonStyleProps) => ({
    '& > *': {
      fontSize: childSize,
      width: childSize,
      height: childSize
    },
  }),
});
