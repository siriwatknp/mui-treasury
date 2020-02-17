import { blueGrey } from '@material-ui/core/colors';

export default () => {
  const defaultImageSize = 40;
  const defaultSpacingY = 16;
  const defaultSpacingX = 12;
  const defaultOutline = `1px solid ${blueGrey[200]}`;
  const createTipStyle = () => ({
    '&:before': {
      height: ({ spacingY = defaultSpacingY }) => spacingY,
      top: ({ spacingY = defaultSpacingY }) => -spacingY,
      outline: ({ outline = defaultOutline }) => outline,
    },
  });
  return {
    tree: {
      display: 'flex',
      margin: 0,
    },
    root: {
      lineHeight: 0,
      textAlign: 'center',
      listStyle: 'none',
      display: 'block',
      padding: ({ spacingX = defaultSpacingX }) => `0 ${spacingX}px`,
    },
    stem: {
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...createTipStyle(),
    },
    spouse: {
      display: 'inline-flex',
      position: 'relative',
      marginLeft: defaultSpacingX * 2,
      '&:before': {
        content: '""',
        position: 'absolute',
        width: defaultSpacingX * 2,
        outline: defaultOutline,
        top: '50%',
        left: -defaultSpacingX * 2,
      },
    },
    branches: {
      display: 'flex',
      justifyContent: 'center',
      margin: ({ spacingX = defaultSpacingX, spacingY = defaultSpacingY }) =>
        `${spacingY}px -${spacingX}px 0`,
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: '50%',
        height: ({ spacingY = defaultSpacingY }) => spacingY,
        top: ({ spacingY = defaultSpacingY }) => -spacingY,
        outline: ({ outline = defaultOutline }) => outline,
      },
    },
    stretch: {
      marginTop: () => 88,
      '&:before': {
        height: () => 88,
        top: () => -88,
      },
    },
    parented: {
      '&:before': {
        left: 'calc(50% - 20px - 12px)',
      },
    },
    spouseWithChildren: {
      '&:after': {
        content: '""',
        position: 'absolute',
        height: '50%',
        outline: defaultOutline,
        top: '50%',
        left: -defaultSpacingX,
      },
    },
    aBranch: {
      display: 'block',
      listStyle: 'none',
      padding: ({ spacingX = defaultSpacingX, spacingY = defaultSpacingY }) =>
        `${spacingY}px ${spacingX}px 0`,
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        outline: ({ outline = defaultOutline }) => outline,
        top: 0,
        left: 0,
        right: 0,
      },
      '&:first-child:before': {
        left: '50%',
      },
      '&:last-child:before': {
        right: '50%',
      },
      '& $stem, $tip': {
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          left: '50%',
        },
      },
    },
    hasOneSpouse: {
      '&:first-child:before': {
        left: `calc(50% - ${defaultImageSize / 2}px - ${defaultSpacingX}px)`,
      },
      '&:last-child:before': {
        right: `calc(50% + ${defaultImageSize / 2}px + ${defaultSpacingX}px)`,
      },
    },
    tip: {
      display: 'block',
      ...createTipStyle(),
    },
  };
};
