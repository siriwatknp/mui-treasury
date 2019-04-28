import Color from 'color';

export default ({ palette, spacing, breakpoints }) => {
  const elongatedWidth = 160;
  const defaultTextTransform = 'none';
  const defaultFontWeight = 'bold';
  const defaultLetterSpacing = '0.25px';
  const invertedColor = palette.common.white;
  const borderWidth = 2;
  return {
    MuiButton: {
      root: {
        minHeight: 44,
        color: palette.text.secondary,
        '&.-labelExpanded': {
          '& .MuiButton-text': {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
        '&.-chubby': {
          borderRadius: 100,
          padding: '6px 12px',
        },
        '&.-elongated': {
          minWidth: elongatedWidth,
        },
        '&.-circular': {
          borderRadius: '50%',
          padding: spacing.unit,
          minWidth: 'auto',
          '& .MuiButton-label > .material-icons, > svg': {
            margin: 0,
            fontSize: 20,
          },
          '&.-small': {
            padding: spacing.unit,
            '& .MuiButton-label > .material-icons, > svg': {
              fontSize: 16,
            },
          },
          '&.-big': {
            padding: spacing.unit * 1.5,
            '& .MuiButton-label > .material-icons, > svg': {
              fontSize: 28,
            },
          },
          '&.-large': {
            padding: spacing.unit * 2,
            '& .MuiButton-label > .material-icons, > svg': {
              fontSize: 32,
            },
          },
        },
        '&.-mobileFullWidth': {
          [breakpoints.only('xs')]: {
            width: '100%',
          },
        },
        '&.-color-danger': {
          color: palette.error.main,
        },
        '&.-inverted': {
          color: invertedColor,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
        '&.-compact': {
          paddingTop: 3,
          paddingBottom: 3,
        },
        '&.-small': {
          padding: '3px 12px',
          fontSize: '0.75rem',
          // '& .MuiButton-label > .material-icons, > svg': {
          //   fontSize: '0.75rem',
          // },
        },
        '&.-big': {
          padding: '8px 24px',
          fontSize: '1rem',
          '& .MuiButton-label > .material-icons, > svg': {
            fontSize: '1rem',
          },
          '&.-compact': {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
        '&.-large': {
          padding: '12px 32px',
          fontSize: '1.25rem',
          '& .MuiButton-label > .material-icons, > svg': {
            fontSize: '1.25rem',
          },
          '&.-compact': {
            paddingTop: 6,
            paddingBottom: 6,
          },
        },
        '&$disabled.-inverted': {
          borderColor: 'rgba(255, 255, 255, 0.38)',
          color: 'rgba(255, 255, 255, 0.38)',
        },
        // LOADER
        '&.-loading': {
          pointerEvents: 'none',
          '& .MuiButton-label': {
            color: 'rgba(0,0,0,0)',
            '& .MuiButton-loader': {
              color: palette.text.primary,
            },
          },
          '&.-inverted': {
            '& .MuiButton-label .MuiButton-loader': {
              color: invertedColor,
            },
          },
        },
        '& .MuiButton-loader': {
          position: 'absolute',
          top: '50%',
          left: '50%',
        },
      },
      text: {
        paddingLeft: 16,
        paddingRight: 16,
      },
      label: {
        letterSpacing: defaultLetterSpacing,
        textTransform: defaultTextTransform,
        fontWeight: defaultFontWeight,
        // ICON
        '& > .material-icons, > svg': {
          fontSize: 22,
          '&:first-child': {
            marginRight: spacing.unit,
            marginLeft: -spacing.unit / 2,
          },
          '&:last-child': {
            marginLeft: spacing.unit,
            marginRight: -spacing.unit / 2,
          },
        },
      },
      contained: {
        '&.-color-danger': {
          backgroundColor: palette.error.main,
          color: invertedColor,
        },
        '&$focusVisible.-shadowless': {
          boxShadow: 'none',
        },
        '&.-shadowless': {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
        '&.-inverted': {
          transition: 'unset',
          backgroundColor: 'unset',
          color: invertedColor,
          borderWidth,
          borderStyle: 'solid',
          borderColor: invertedColor,
          '&:hover': {
            background: invertedColor,
            color: palette.text.primary,
          },
          '& .MuiButton-label': {
            fontWeight: 'bold',
          },
        },
      },
      containedPrimary: {
        color: invertedColor,
        '&.-inverted': {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          '&:hover': {
            background: palette.primary.main,
            color: palette.common.white,
          },
        },
        '&.-loading .MuiButton-label .MuiButton-loader': {
          color: palette.common.white,
        },
      },
      containedSecondary: {
        color: invertedColor,
        '&.-inverted': {
          borderColor: palette.secondary.main,
          color: palette.secondary.main,
          '&:hover': {
            background: palette.secondary.main,
            color: palette.common.white,
          },
        },
        '&.-loading .MuiButton-label .MuiButton-loader': {
          color: palette.common.white,
        },
      },
      outlined: {
        borderWidth: 2,
        '&.-inverted': {
          transition: 'unset',
          borderWidth,
          borderColor: 'rgba(255, 255, 255, 0.54)',
          color: 'rgba(255, 255, 255, 0.87)',
          '&:hover': {
            borderColor: invertedColor,
            background: 'rgba(255, 255, 255, 0.24)',
            color: invertedColor,
          },
          '& .MuiButton-label': {
            fontWeight: 'bold',
          },
        },
      },
      outlinedPrimary: {
        color: palette.text.secondary,
        borderWidth: '2px !important',
        '&.-inverted': {
          borderWidth,
          '&:hover': {
            color: palette.primary.main,
            borderColor: palette.primary.main,
            backgroundColor: Color(palette.primary.main)
              .alpha(0.1)
              .lighten(0.5)
              .string(),
          },
        },
        '&.-loading .MuiButton-label .MuiButton-loader': {
          color: palette.primary.main,
        },
      },
      outlinedSecondary: {
        '&.-inverted': {
          borderWidth,
          '&:hover': {
            color: palette.secondary.main,
            borderColor: palette.secondary.main,
            backgroundColor: Color(palette.secondary.main)
              .alpha(0.1)
              .lighten(0.5)
              .string(),
          },
        },
        '&.-loading .MuiButton-label .MuiButton-loader': {
          color: palette.secondary.main,
        },
      },
    },
  };
};
