export default ({ palette, spacing }) => {
  const invertedColor = palette.common.white;
  return {
    MuiTypography: {
      root: {
        '&.-code, & code': {
          margin: '0 .2em',
          padding: '.2em .4em .1em',
          fontSize: '75%',
          background: palette.grey[100],
          border: `1px solid ${palette.grey[300]}`,
          borderRadius: 3,
          fontFamily:
            // eslint-disable-next-line max-len
            "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace",
        },
        '& ul, ol': {
          paddingLeft: spacing.unit * 3,
        },
        '& li': {
          marginBottom: '0.5em',
        },
        '&.-inverted:not(.-code)': {
          color: invertedColor,
        },
        // colors
        '&.-color-hint': {
          color: palette.grey[500],
        },
        '&.-color-danger': {
          color: palette.error.main,
        },
        // sizes
        '&.-size-small': {
          fontSize: 12,
        },
        '&.-size-big': {
          fontSize: 20,
        },
        '&.-size-large': {
          fontSize: 24,
        },
        // indents
        '&.-indent-small': {
          textIndent: spacing.unit * 2,
        },
        '&.-indent-big': {
          textIndent: spacing.unit * 3,
        },
        '&.-indent-large': {
          textIndent: spacing.unit * 4,
        },
        // spacings
        '&.-space-small': {
          letterSpacing: '0.5px',
        },
        '&.-space-big': {
          letterSpacing: '1px',
        },
        '&.-space-large': {
          letterSpacing: '2px',
        },
        // weights
        '&.-weight-100': {
          fontWeight: 100,
        },
        '&.-weight-200': {
          fontWeight: 200,
        },
        '&.-weight-300': {
          fontWeight: 300,
        },
        '&.-weight-400': {
          fontWeight: 400,
        },
        '&.-weight-500': {
          fontWeight: 500,
        },
        '&.-weight-600': {
          fontWeight: 600,
        },
        '&.-weight-700': {
          fontWeight: 700,
        },
        '&.-weight-800': {
          fontWeight: 800,
        },
        '&.-weight-900': {
          fontWeight: 900,
        },
        '&.-weight-normal': {
          fontWeight: 'normal',
        },
        '&.-weight-bold': {
          fontWeight: 'bold',
        },
      },
      body1: {
        color: palette.text.secondary,
      },
      body2: {
        color: palette.text.secondary,
      },
    },
    MuiLink: {
      button: {
        verticalAlign: 'unset',
      },
    },
  };
};
