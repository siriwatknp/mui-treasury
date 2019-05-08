import Color from 'color';

export default ({ palette, spacing, breakpoints, shadows }) => {
  const buttonPadding = '0em 1.15em';
  const chubbyPadding = '6px 8px';
  const elongatedWidth = 160;
  const defaultFontWeight = 'bold';
  const defaultLetterSpacing = '0.25px';
  const defaultTextTransform = 'none';
  const invertedColor = palette.common.white;
  const outlinedBorderWidth = 2;
  const iconSelector =
    '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons, > svg';
  const bgIconSelector =
    // eslint-disable-next-line max-len
    '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons:not([class*="-bg-"]), > svg:not([class*="-bg-"])';
  const loaderSelector = '.MuiButton-label .MuiButton-loader';
  const defaultIconSize = 20;
  const defaultBgIconSize = defaultIconSize;
  const extraStyles = {
    // if you want to extend predefined button
    // add style to below variable is recommended.
    root: {
      color: palette.text.secondary,
    },
    containedPrimary: {
      color: invertedColor,
    },
    containedSecondary: {
      color: invertedColor,
    },
    outlinedPrimary: {
      color: palette.text.secondary,
      borderWidth: '2px !important',
    },
    outlinedSecondary: {},
  };
  const labelSizes = {
    small: 12,
    normal: 14,
    big: 16,
    large: 20,
  };
  const minHeights = {
    small: 32,
    normal: 44,
    big: 48,
    large: 56,
  };
  return {
    MuiButton: {
      root: {
        ...extraStyles.root,
        fontSize: labelSizes.normal,
        padding: buttonPadding,
        minHeight: minHeights.normal,
        minWidth: minHeights.normal,
        // STANDALONE
        '&.-color-danger': {
          color: palette.error.main,
          '&:hover': {
            backgroundColor: Color(palette.error.main)
              .fade(0.92)
              .toString(),
          },
        },
        '&.-compact': {
          paddingTop: 3,
          paddingBottom: 3,
        },
        '&.-elongated': {
          minWidth: elongatedWidth,
        },
        '&.-inverted': {
          color: invertedColor,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
        '&.-labelExpanded': {
          [`& ${bgIconSelector}`]: {
            '&:first-of-type': {
              marginLeft: '-0.4em',
            },
            '&:last-of-type': {
              marginRight: '-0.4em',
            },
          },
          '& .MuiButton-span': {
            marginLeft: 'auto !important',
            marginRight: 'auto !important',
          },
        },
        '&.-mobileFullWidth': {
          [breakpoints.only('xs')]: {
            width: '100%',
          },
        },
        // icon
        [`& ${iconSelector}`]: {
          // default icon size
          fontSize: defaultIconSize,
        },
        [`&:not([class*="-size"]) ${iconSelector}`]: {
          '&[class*="-bg"]': {
            fontSize: defaultBgIconSize,
          },
        },
        '&:not([class*="-shape-circular"])': {
          '& .MuiButton-label > .material-icons, > svg': {
            // don't change upper code to var:iconSelector
            // fixed styles
            '&:first-of-type': {
              marginRight: spacing.unit,
            },
            '&:last-of-type': {
              marginLeft: spacing.unit,
            },
          },
        },
        // loading
        '&.-loading': {
          pointerEvents: 'none',
          '& .MuiButton-label': {
            color: 'rgba(0,0,0,0)',
            '& .MuiButton-loader': {
              color: palette.text.primary,
            },
          },
        },
        '& .MuiButton-loader': {
          position: 'absolute',
          top: '50%',
          left: '50%',
        },
        // sizes
        '&.-size-small': {
          fontSize: labelSizes.small,
          minHeight: minHeights.small,
          minWidth: minHeights.small,
          padding: buttonPadding,
          [`& ${iconSelector}`]: {
            fontSize: 18,
            '&[class*="-bg"]': {
              fontSize: '0.75rem',
            },
          },
        },
        '&.-size-big': {
          fontSize: labelSizes.big,
          minHeight: minHeights.big,
          minWidth: minHeights.big,
          padding: buttonPadding,
          [`& ${iconSelector}`]: {
            fontSize: 24,
            '&[class*="-bg"]': {
              fontSize: '1.25rem',
            },
          },
        },
        '&.-size-large': {
          fontSize: labelSizes.large,
          minHeight: minHeights.large,
          minWidth: minHeights.large,
          padding: buttonPadding,
          [`& ${iconSelector}`]: {
            fontSize: 26,
            '&[class*="-bg"]': {
              fontSize: '1.5rem',
            },
          },
        },
        '&.-shape-square': {
          borderRadius: 0,
        },
        '&.-shape-chubby': {
          borderRadius: 100,
          padding: chubbyPadding,
          '& .MuiButton-span': {
            '&:first-of-type': {
              marginLeft: '0.4em',
            },
            '&:last-of-type': {
              marginRight: '0.4em',
            },
          },
        },
        '&.-shape-circular': {
          borderRadius: '50%',
          padding: 12,
          [`& ${iconSelector}`]: {
            margin: 0,
            fontSize: 20,
          },
        },
        // COMBINATION
        '&.-shape-circular.-size-small': {
          padding: spacing.unit * 1.25,
          [`& ${iconSelector}`]: {
            fontSize: 16,
          },
        },
        '&.-shape-circular.-size-big': {
          padding: spacing.unit * 1.5,
          [`& ${iconSelector}`]: {
            fontSize: 28,
          },
        },
        '&.-shape-circular.-size-large': {
          padding: spacing.unit * 1.75,
          [`& ${iconSelector}`]: {
            fontSize: 36,
          },
        },
        '&.-size-big.-compact': {
          paddingTop: 4,
          paddingBottom: 4,
        },
        '&.-size-large.-compact': {
          paddingTop: 6,
          paddingBottom: 6,
        },
        '&$disabled.-inverted': {
          borderColor: 'rgba(255, 255, 255, 0.38)',
          color: 'rgba(255, 255, 255, 0.38)',
        },
        '&.-loading.-inverted': {
          [`& ${loaderSelector}`]: {
            color: invertedColor,
          },
        },
      },
      label: {
        letterSpacing: defaultLetterSpacing,
        textTransform: defaultTextTransform,
        fontWeight: defaultFontWeight,
      },
      contained: {
        '&.-color-danger': {
          backgroundColor: palette.error.main,
          color: invertedColor,
          '&:hover': {
            backgroundColor: palette.error.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: palette.error.dark,
            },
          },
          '&$disabled': {
            color: palette.action.disabled,
            boxShadow: shadows[0],
            backgroundColor: palette.action.disabledBackground,
          },
        },
        // No Shadow
        '&$focusVisible.-shadowless': {
          boxShadow: 'none',
        },
        '&.-shadowless': {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
        // ---------
        '&.-inverted': {
          transition: 'unset',
          backgroundColor: 'unset',
          color: invertedColor,
          borderWidth: outlinedBorderWidth,
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
        ...extraStyles.containedPrimary,
        '&.-inverted': {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          '&:hover': {
            background: palette.primary.main,
            color: palette.common.white,
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.common.white,
        },
      },
      containedSecondary: {
        ...extraStyles.containedSecondary,
        '&.-inverted': {
          borderColor: palette.secondary.main,
          color: palette.secondary.main,
          '&:hover': {
            background: palette.secondary.main,
            color: palette.common.white,
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.common.white,
        },
      },
      outlined: {
        '&.-color-danger': {
          borderColor: Color(palette.error.main)
            .fade(0.5)
            .toString(),
          '&:hover': {
            borderColor: palette.error.main,
          },
        },
        '&.-inverted': {
          borderWidth: outlinedBorderWidth,
          transition: 'unset',
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
        ...extraStyles.outlinedPrimary,
        borderWidth: outlinedBorderWidth,
        '&:hover': {
          borderWidth: outlinedBorderWidth,
        },
        '&.-inverted': {
          '&:hover': {
            color: palette.primary.main,
            borderColor: palette.primary.main,
            backgroundColor: Color(palette.primary.main)
              .alpha(0.1)
              .lighten(0.5)
              .string(),
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.primary.main,
        },
      },
      outlinedSecondary: {
        ...extraStyles.outlinedSecondary,
        borderWidth: outlinedBorderWidth,
        '&:hover': {
          borderWidth: outlinedBorderWidth,
        },
        '&.-inverted': {
          '&:hover': {
            color: palette.secondary.main,
            borderColor: palette.secondary.main,
            backgroundColor: Color(palette.secondary.main)
              .alpha(0.1)
              .lighten(0.5)
              .string(),
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.secondary.main,
        },
      },
    },
  };
};
