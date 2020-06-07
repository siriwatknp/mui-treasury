export type OnlineAvatarStyleProps = {
  color?: string;
  size?: number;
  thickness?: number;
  gap?: number;
};

export type OnlineAvatarClassKey = keyof ReturnType<typeof onlineAvatarStyles>;

const onlineAvatarStyles = () => ({
  root: ({
    color,
    size = 40,
    thickness = 2,
    gap = 2,
  }: OnlineAvatarStyleProps) => ({
    position: 'relative' as const,
    display: 'inline-block',
    '& > *': {
      width: size,
      height: size,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute' as const,
      width: size + thickness * 2 + gap * 2,
      height: size + thickness * 2 + gap * 2,
      left: '50%',
      top: '50%',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      border: `${thickness}px solid`,
      borderColor: color,
    },
  }),
});

export default onlineAvatarStyles;
