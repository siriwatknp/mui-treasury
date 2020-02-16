import { blueGrey } from '@material-ui/core/colors';

export default () => {
  const defaultSpacingY = 16;
  const defaultSpacingX = 8;
  const defaultOutline = `1px solid ${blueGrey[100]}`;
  const createTipStyle = () => ({
    '&:before': {
      height: ({ spacingY = defaultSpacingY }) => spacingY,
      top: ({ spacingY = defaultSpacingY }) => -spacingY,
      outline: ({ outline = defaultOutline }) => outline,
    },
  });
  return {
    tree: {
      display: 'table',
      margin: 0,
    },
    root: {
      listStyle: 'none',
      display: 'table-cell',
      padding: ({ spacingX = defaultSpacingX }) => `0 ${spacingX}px`,
    },
    stem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...createTipStyle(),
    },
    branches: {
      display: 'table',
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
    aBranch: {
      display: 'table-cell',
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
    tip: {
      display: 'table-cell',
      ...createTipStyle(),
    },
  };
};
