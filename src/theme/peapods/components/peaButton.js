import Color from 'color';

export default ({ palette, spacing, breakpoints, shadows }) => {
  const labelSizes = {
    small: 14,
    normal: 14,
    big: 18,
    large: 22,
  };
  const btnHeights = {
    small: 38,
    normal: 44,
    big: 48,
    large: 56,
  };
  const elongatedWidth = 160;
  const defaultFontWeight = 'bold';
  const defaultLetterSpacing = 0;
  const defaultTextTransform = 'none';
  const invertedColor = palette.common.white;
  const outlinedBorderWidth = 2;
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
    },
    outlinedSecondary: {},
  };
  // https://github.com/siriwatknp/mui-treasury/issues/new

  // ------------ !READ ONLY -------------- //
  // ---- DO NOT EDIT, MIGHT RUIN YOUR BTN ---- //
  const iconSelector =
    '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons, > svg';
  const bgIconSelector =
    // eslint-disable-next-line max-len
    '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons[class*="-bg-"], > svg[class*="-bg-"]';
  const notBgIconSelector =
    // eslint-disable-next-line max-len
    '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons:not([class*="-bg-"]), > svg:not([class*="-bg-"])';
  const loaderSelector = '.MuiButton-label .MuiButton-loader';
  const mapBtnHeight = x => 36 - Math.exp(3.72 - x / 38.6);
  const getIconSize = btnHeight => {
    const icon = Math.round(mapBtnHeight(btnHeight));
    if (icon % 2 === 0) {
      return icon;
    }
    return icon + 1;
  };
  const getBgIconSize = btnSize => {
    const mapping = {
      small: btnHeights.small - 6,
      normal: btnHeights.normal - 8,
      big: btnHeights.big - 12,
      large: btnHeights.large - 16,
    };
    return mapping[btnSize];
  };
  const generateStylesBySize = size => ({
    fontSize: labelSizes[size],
    padding: `0 ${btnHeights[size] / 2}px`,
    minHeight: btnHeights[size],
    minWidth: btnHeights[size],
    // icon
    [`& ${iconSelector}`]: {
      // default icon size
      fontSize: getIconSize(btnHeights[size]),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [`& ${bgIconSelector}`]: {
      margin: '0 !important',
      fontSize: getIconSize(btnHeights[size]) - 2,
      width: getBgIconSize(size),
      height: getBgIconSize(size),
      '&:first-of-type': {
        transform: 'translateX(-50%)',
      },
      '&:last-of-type': {
        transform: 'translateX(50%)',
      },
    },
  });
  // ---------------- END OF READ ONLY ------------------- //
  return {
    MuiButton: {
      label: {
        letterSpacing: defaultLetterSpacing,
        textTransform: defaultTextTransform,
        fontWeight: defaultFontWeight,
      },
      root: {
        ...extraStyles.root,
        ...generateStylesBySize('normal'),
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
          minWidth: `${elongatedWidth}px!important`,
        },
        '&.-inverted': {
          color: invertedColor,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
        // Icon
        // eslint-disable-next-line max-len
        '&[class*="-shape-rectangle"], &[class*="-shape-chubby"], &:not([class*="-shape-"])': {
          [`& ${notBgIconSelector}`]: {
            '&:first-of-type': {
              marginLeft: '-0.3em',
              marginRight: 8,
            },
            '&:last-of-type': {
              marginRight: '-0.3em',
              marginLeft: 8,
            },
          },
        },
        '&.-labelExpanded': {
          [`& ${notBgIconSelector}`]: {
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
          ...generateStylesBySize('small'),
        },
        '&.-size-big': {
          ...generateStylesBySize('big'),
        },
        '&.-size-large': {
          ...generateStylesBySize('large'),
        },
        '&.-shape-chubby': {
          borderRadius: 100,
          '& .MuiButton-span': {
            '&:first-of-type': {
              marginLeft: '0.4em',
            },
            '&:last-of-type': {
              marginRight: '0.4em',
            },
          },
        },
        '&.-shape-circular, &.-shape-square': {
          borderRadius: '50%',
          padding: 12,
          [`& ${iconSelector}`]: {
            margin: 0,
            fontSize: 20,
          },
        },
        '&.-shape-square, &.-shape-rectangle': {
          borderRadius: 0,
        },
        // COMBINATION
        '&.-shape-circular.-size-small, &.-shape-square.-size-small': {
          padding: spacing.unit * 1.25,
          // [`& ${iconSelector}`]: {
          //   fontSize: 16,
          // },
        },
        '&.-shape-circular.-size-big, &.-shape-square.-size-big': {
          padding: spacing.unit * 1.5,
          // [`& ${iconSelector}`]: {
          //   fontSize: 28,
          // },
        },
        '&.-shape-circular.-size-large, &.-shape-square.-size-large': {
          padding: spacing.unit * 1.75,
          // [`& ${iconSelector}`]: {
          //   fontSize: 36,
          // },
        },
        '&.-size-big.-compact': {
          minHeight: btnHeights.big - 8,
        },
        '&.-size-large.-compact': {
          minHeight: btnHeights.large - 8,
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
      text: {
        padding: `0 ${btnHeights.normal / 2}px`,
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
