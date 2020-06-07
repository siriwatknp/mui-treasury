export type GradientAvatarStyleProps = {
  size?: number;
  color?: string;
  thickness?: number;
  gap?: number;
  gapColor?: string;
};

export type GradientAvatarClassKey = keyof ReturnType<
  typeof gradientAvatarStyles
>;

const gradientAvatarStyles = () => ({
  root: ({
    color = 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
    size = 40,
    gap = 2,
    gapColor = '#fff',
    thickness = 2,
  }: GradientAvatarStyleProps) => ({
    position: 'relative' as const,
    display: 'inline-block',
    zIndex: 0,
    '& > *': {
      width: size + gap * 2,
      height: size + gap * 2,
      border: `${gap}px solid`,
      borderColor: gapColor,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute' as const,
      borderRadius: '50%',
      zIndex: -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      margin: -thickness,
      background: color,
    },
  }),
});

export default gradientAvatarStyles;
