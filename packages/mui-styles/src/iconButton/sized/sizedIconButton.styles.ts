import Color from 'color';

export type SizedIconButtonStyleProps = {
  padding?: string | number;
  color?: string;
  childSize?: string | number;
  radius?: string | number;
};

export type SizedIconButtonClassKey = keyof ReturnType<typeof sizedIconButtonStyles>

const sizedIconButtonStyles = () => ({
  root: ({ padding = 8, color = '', radius = 100 }: SizedIconButtonStyleProps) => ({
    color,
    padding,
    borderRadius: radius,
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

export default sizedIconButtonStyles
