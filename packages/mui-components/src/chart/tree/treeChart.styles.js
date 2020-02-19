import { blueGrey } from '@material-ui/core/colors';

const defaultLength = 16;
const defaultGutter = 12;
const defaultOutline = `1px solid ${blueGrey[100]}`;
const createTipStyle = () => ({
  height: ({ length = defaultLength }) => length,
  top: ({ length = defaultLength }) => -length,
  outline: ({ outline = defaultOutline }) => outline,
});

export const DEFAULT_VAR = {
  length: defaultLength,
  gutter: defaultGutter,
  outline: defaultOutline,
};

export default () => {
  return {
    tree: {},
    trunk: {
      lineHeight: 1.4,
      textAlign: 'center',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: ({ gutter = defaultGutter }) => `0 ${gutter}px`,
      '& > $branches:first-child': {
        '&:before': {
          display: 'none',
        },
      },
    },
    branches: {
      paddingLeft: 0,
      display: 'flex',
      justifyContent: 'center',
      margin: ({ gutter = defaultGutter, length = defaultLength }) =>
        `${length}px -${gutter}px 0`,
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: '50%',
        ...createTipStyle(),
      },
    },
    stem: {
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      '&:before': createTipStyle(),
    },
    twig: {
      lineHeight: 1.4,
      listStyle: 'none',
      display: 'inline-block',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      padding: ({ gutter = defaultGutter, length = defaultLength }) =>
        `${length}px ${gutter}px 0`,
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
      '& $stem': {
        '&:before': {
          content: '""',
          position: 'absolute',
          left: '50%',
        },
      },
    },
  };
};
