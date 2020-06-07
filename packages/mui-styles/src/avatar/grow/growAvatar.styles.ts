import { createStyles } from '@material-ui/core/styles';

export type GrowAvatarStyleProps = {
  src: string;
  blur?: string;
  size?: string | number;
  radius?: string | number;
  opacity?: number;
};

export type GrowAvatarClassKey = keyof ReturnType<typeof growAvatarStyles>;

const growAvatarStyles = () =>
  createStyles({
    root: ({
      src,
      blur = '8px',
      size,
      radius = '50%',
      opacity = 0.8,
    }: GrowAvatarStyleProps) => ({
      position: 'relative',
      zIndex: 0,
      width: size,
      height: size,
      overflow: 'visible',
      '& > div': {
        width: size,
        height: size,
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
        opacity,
      },
    }),
  });

export default growAvatarStyles;
