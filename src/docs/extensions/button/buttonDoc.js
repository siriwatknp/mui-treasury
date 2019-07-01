/* eslint-disable */
import React from 'react';
import Button from 'extensions/Button';
import Icon from 'docs/extensions/icon';
import { mergeInfo } from 'helpers/function';
import code from './buttonCode';

const VERSION = 'v1.4';

const sizes = ['small', '', 'big', 'large'];
const props1 = {
  variant: 'contained',
  color: 'danger',
  icon: <Icon>delete</Icon>,
  shadowless: true,
  children: 'Delete',
};
const props2 = {
  shape: 'chubby',
  variant: 'contained',
  color: 'primary',
  icon: 'fab fa-facebook-f',
  iconProps: {
    bgColor: 'white',
    shape: 'circular',
    color: 'primary',
  },
  children: 'Facebook sign in',
};
const props3 = {
  fullWidth: true,
  labelExpanded: true,
  shape: 'rectangle',
  variant: 'outlined',
  color: 'primary',
  icon: 'fab fa-twitter',
  iconProps: {
    shape: 'circular',
    color: 'primary',
    size: 'big',
  },
  children: 'Twitter sign in',
};
const colors = {
  small: 'primary',
  big: 'secondary',
  large: 'danger',
};
const components = [
  {
    name: 'Inverted Icon Button',
    description: '',
    inverted: true,
    render: () =>
      sizes.map(s => (
        <Button
          key={s}
          size={s}
          inverted
          shape={'square'}
          color={colors[s]}
          icon={<Icon>sim_card</Icon>}
        />
      )),
    code: code.invertedIconButton,
  },
  {
    name: 'Square Icon Button',
    description: '',
    render: () =>
      sizes.map(s => (
        <Button
          key={s}
          size={s}
          color={colors[s]}
          shape={'square'}
          icon={<Icon>camera_alt</Icon>}
        />
      )),
    code: code.squareIconButton,
  },
  {
    name: 'Circular Icon Button',
    description: '',
    render: () =>
      sizes.map(s => (
        <Button
          key={s}
          size={s}
          color={colors[s]}
          shape={'circular'}
          variant={'contained'}
          iconIsolated
          icon={
            <Icon size={s} inverted>
              far fa-rocket
            </Icon>
          }
        >
          button
        </Button>
      )),
    code: code.circularIconButton,
  },
  {
    name: 'Outlined Icon Button',
    description: '',
    render: () =>
      sizes.map(s => (
        <Button
          key={s}
          size={s}
          color={colors[s]}
          shape={'circular'}
          variant={'outlined'}
          icon={<Icon>camera</Icon>}
        >
          button
        </Button>
      )),
    code: code.outlineIconButton,
  },
  {
    name: 'Deleted Button',
    description: '',
    render: () =>
      sizes.map((s, i) => (
        <div key={s} style={{ width: '100%', textAlign: 'center' }}>
          <Button size={s} {...props1} />
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
    code: code.deletedButton,
  },
  {
    name: 'Facebook Button',
    description: '',
    render: () =>
      sizes.map((s, i) => (
        <div key={s}>
          <Button size={s} {...props2} />
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
    code: code.facebookButton,
  },
  {
    name: 'Paypal Button',
    description: '',
    render: () =>
      sizes.map((s, i) => (
        <div key={s}>
          <Button
            {...props2}
            fullWidth
            size={s}
            labelExpanded
            color={''}
            icon={'fab fa-paypal'}
          >
            Paypal Checkout
          </Button>
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
    code: code.paypalButton,
  },
  {
    name: 'Twitter Button',
    description: '',
    bgColor: 'white',
    render: () =>
      sizes.map((s, i) => (
        <div key={s} style={{ width: '100%', textAlign: 'center' }}>
          <Button size={s} {...props3} />
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
    code: code.twitterButton,
  },
  {
    name: 'Loading Button',
    description: '',
    render: () =>
      sizes.map((s, i) => (
        <div key={s} style={{ width: '100%', textAlign: 'center' }}>
          <Button size={s} loading variant={'contained'} color={'secondary'}>
            Loading...
          </Button>
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
    code: code.loadingButton,
  },
];

const coreCode = `
  /**
   * Current VERSION ${VERSION}
   *
   * vX.Y meaning
   * X = major changes ex. add/remove/rename some props/className,
   *     could affect other components
   * Y = minor changes ex. fix bug or internal logic, won't effect other component
   */
  import React, { forwardRef } from 'react';
  import PropTypes from 'prop-types';
  import Color from 'color';
  import cx from 'clsx';
  import { makeStyles } from '@material-ui/styles';
  import MuiButton from '@material-ui/core/Button';
  import Icon from 'extensions/Icon';
  import CircularProgress from '@material-ui/core/CircularProgress';
  
  const getLoaderSize = size => {
    if (size === 'small') return 16;
    if (size === 'big') return 28;
    if (size === 'large') return 36;
    return 20;
  };
  
  const injectColor = color => {
    if (
      color === 'inherit' ||
      color === 'primary' ||
      color === 'secondary' ||
      color === 'default'
    ) {
      return color;
    }
    return undefined;
  };
  
  const useStyles = makeStyles(({ breakpoints, palette, spacing, shadows }) => {
    const labelSizes = {
      small: 14,
      normal: 16,
      big: 18,
      large: 22,
    };
    const btnHeights = {
      small: 28,
      normal: 36,
      big: 48,
      large: 56,
    };
    const elongatedWidth = 160;
    const defaultFontWeight = 500;
    const defaultLetterSpacing = 0;
    const defaultTextTransform = 'none';
    const invertedColor = palette.common.white;
    const outlinedBorderWidth = 1;
    const extraStyles = {
      // if you want to extend predefined button
      // add style to below variable is recommended.
      root: {
        // ex.
        // minHeight: 44,
        // color: palette.text.secondary,
      },
      containedPrimary: {},
      containedSecondary: {},
      outlinedPrimary: {},
      outlinedSecondary: {},
    };
  
    // >>>> To request more features, open issue here <<<<
  
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
      padding: \`0 \${btnHeights[size] / 2}px\`,
      minHeight: btnHeights[size],
      minWidth: btnHeights[size],
      // icon
      [\`& \${iconSelector}\`]: {
        // default icon size
        fontSize: getIconSize(btnHeights[size]),
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      [\`& \${bgIconSelector}\`]: {
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
          minWidth: \`\${elongatedWidth}px!important\`,
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
          [\`& \${notBgIconSelector}\`]: {
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
          [\`& \${notBgIconSelector}\`]: {
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
          [\`& \${iconSelector}\`]: {
            margin: 0,
            fontSize: 20,
          },
        },
        '&.-shape-square, &.-shape-rectangle': {
          borderRadius: 0,
        },
        // COMBINATION
        '&.-shape-circular.-size-small, &.-shape-square.-size-small': {
          padding: spacing(1.25),
          // [\`& \${iconSelector}\`]: {
          //   fontSize: 16,
          // },
        },
        '&.-shape-circular.-size-big, &.-shape-square.-size-big': {
          padding: spacing(1.5),
          // [\`& \${iconSelector}\`]: {
          //   fontSize: 28,
          // },
        },
        '&.-shape-circular.-size-large, &.-shape-square.-size-large': {
          padding: spacing(1.75),
          // [\`& \${iconSelector}\`]: {
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
          [\`& \${loaderSelector}\`]: {
            color: invertedColor,
          },
        },
      },
      text: {
        padding: \`0 \${btnHeights.normal / 2}px\`,
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
        [\`&.-loading \${loaderSelector}\`]: {
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
        [\`&.-loading \${loaderSelector}\`]: {
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
        [\`&.-loading \${loaderSelector}\`]: {
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
        [\`&.-loading \${loaderSelector}\`]: {
          color: palette.secondary.main,
        },
      },
      focusVisible: {},
      disabled: {},
    };
  });
  
  const Button = forwardRef(
    (
      {
        className,
        color,
        inverted,
        loading,
        elongated,
        size,
        shape,
        compact,
        shadowless,
        labelExpanded,
        mobileFullWidth,
        icon,
        iconIsolated,
        iconProps,
        iconPosition,
        children,
        loaderProps,
        ...props
      },
      ref,
    ) => {
      const iconComponent =
        typeof icon === 'string' ? <Icon {...iconProps}>{icon}</Icon> : icon;
      const loaderSize = getLoaderSize(size);
      const renderChildren = () =>
        icon ? <span className={'MuiButton-span'}>{children}</span> : children;
      const { root, label, ...classes } = useStyles();
      return (
        <MuiButton
          ref={ref}
          className={cx(
            className,
            inverted && '-inverted',
            loading && '-loading',
            elongated && '-elongated',
            color && \`-color-\${color}\`,
            size && \`-size-\${size}\`,
            shape && \`-shape-\${shape}\`,
            labelExpanded && '-labelExpanded',
            mobileFullWidth && '-mobileFullWidth',
            shadowless && '-shadowless',
            compact && '-compact',
          )}
          color={injectColor(color)}
          {...props}
          classes={{
            root: cx('MuiButton-root', root),
            label: cx('MuiButton-label', iconIsolated && '-icon-isolated', label),
            ...classes,
          }}
        >
          {loading && (
            <CircularProgress
              thickness={6}
              {...loaderProps}
              size={loaderSize}
              style={{
                marginLeft: -loaderSize / 2,
                marginTop: -loaderSize / 2,
              }}
              className={'MuiButton-loader'}
            />
          )}
          {icon && iconPosition === 'start' && iconComponent}
          {shape !== 'circular' && renderChildren()}
          {icon && iconPosition === 'end' && iconComponent}
        </MuiButton>
      );
    },
  );
  
  Button.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.shape({}),
    color: PropTypes.oneOf([
      'default',
      'inherit',
      'primary',
      'secondary',
      // custom
      'danger',
    ]),
    compact: PropTypes.bool,
    inverted: PropTypes.bool,
    loading: PropTypes.bool,
    elongated: PropTypes.bool,
    labelExpanded: PropTypes.bool,
    mobileFullWidth: PropTypes.bool,
    shadowless: PropTypes.bool,
    size: PropTypes.oneOf(['small', '', 'big', 'large']),
    shape: PropTypes.oneOf(['', 'chubby', 'circular', 'square', 'rectangle']),
    children: PropTypes.node,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    iconIsolated: PropTypes.bool,
    iconPosition: PropTypes.oneOf(['start', 'end']),
    iconProps: PropTypes.shape({}),
    loaderProps: PropTypes.shape({}),
  };
  Button.defaultProps = {
    className: '',
    classes: {},
    children: null,
    color: 'default',
    compact: false,
    inverted: false,
    loading: false,
    elongated: false,
    labelExpanded: false,
    mobileFullWidth: false,
    shadowless: false,
    size: '',
    shape: '',
    icon: '',
    iconIsolated: false,
    iconPosition: 'start',
    iconProps: {},
    loaderProps: {},
  };
  Button.getTheme = () => {};
  
  export default Button;

`;

Button.components = components;
Button.code = coreCode;
Button.info = mergeInfo(
  {
    name: 'Extended Button',
    description:
      'A well-customized and hand-crafted Material-UI button that extends a lot of real-world usages to provide better experience for developers.',
    links: [
      { label: 'Button API', url: 'https://material-ui.com/api/button/' },
    ],
    files: [
      {
        label: 'Button.js',
        code: coreCode,
        core: true,
      },
    ],
    libraries: [],
    dependencies: [],
  },
  Icon.info,
);
Button.version = VERSION;

export default Button;
