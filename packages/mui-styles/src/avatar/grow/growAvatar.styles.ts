export type GrowAvatarStyleProps = {
  src: string;
  blur?: string;
  size?: string | number;
  radius?: string | number;
};

export type GrowAvatarClassKey = keyof ReturnType<typeof growAvatarStyles>;

const growAvatarStyles = () => ({
  root: ({ src, blur = '8px', size, radius }: GrowAvatarStyleProps) => ({
    position: 'relative',
    zIndex: 0,
    width: size,
    height: size,
    overflow: 'visible',
    '& > img': {
      borderRadius: radius,
    },
    '&:before': {
      margin: -4,
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      borderRadius: radius,
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      filter: `blur(${blur})`,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  }),
});

export default growAvatarStyles;
