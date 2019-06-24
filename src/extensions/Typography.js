import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import MuiTypography from '@material-ui/core/Typography';

const injectColor = color => {
  if (
    color === 'default' ||
    color === 'inherit' ||
    color === 'primary' ||
    color === 'secondary' ||
    color === 'textPrimary' ||
    color === 'textSecondary' ||
    color === 'error'
  ) {
    return color;
  }
  return undefined;
};

const injectDisplay = display => {
  if (display === 'initial' || display === 'inline' || display === 'block') {
    return display;
  }
  return undefined;
};

const generateMediaQueries = (css, breakpoints, object) => {
  if (!breakpoints) return '';
  const keys = Object.keys(object);
  const result = {};
  keys.forEach(key => {
    if (key === 'xs') {
      result[css] = object[key];
    } else {
      result[breakpoints.up(key)] = { [css]: object[key] };
    }
  });
  return result;
};

const createStylesBySize = (css, cls, values, breakpoints) =>
  values.reduce(
    (result, val) => ({
      ...result,
      [`${cls}${val[0]}`]:
        typeof val[1] === 'object'
          ? generateMediaQueries(css, breakpoints, val[1])
          : {
              [css]: val[1],
            },
    }),
    {},
  );

// call Typography.setSecondFamily("your font family") in App.js
// before using
let secondFamilyVar = '';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => {
  const invertedColor = palette.common.white;
  const codeStyle = {
    // change code style here!
    // default style is similar to antd
    // https://ant.design/components/typography/#components-typography-demo-text
    margin: '0 .2em',
    padding: '.2em .4em .1em',
    fontSize: '75%',
    background: 'rgba(218,218,218,0.38)',
    border: `1px solid ${palette.grey[300]}`,
    borderRadius: 3,
    fontFamily:
      // eslint-disable-next-line max-len
      "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace",
  };
  const blockQuoteStyle = {
    // change code style here!
    // default style is similar to reactjs.org
    // https://reactjs.org/docs/
    backgroundColor: 'rgba(255,229,100,0.3)',
    borderLeftColor: '#ffe564',
    borderLeftWidth: 9,
    borderLeftStyle: 'solid',
    padding: spacing(2.5, 5, 2.5, 3),
    margin: spacing(2.5, -3, 3),
  };
  return {
    root: {
      '&.-code, & code': codeStyle,
      '&.-blockquote, & blockquote': blockQuoteStyle,
      '& ul, ol': {
        paddingLeft: spacing(3),
      },
      '& li': {
        marginBottom: '0.5em',
      },
      '& b': {
        fontWeight: 'bold',
      },
      '&.-inverted:not(.-code)': {
        color: invertedColor,
      },
      // family
      // call Typography.setSecondFamily("your font family") in App.js
      // before using
      '&.-second-family': {
        fontFamily: secondFamilyVar,
      },
      // colors
      ...createStylesBySize('color', '&.-color-', [
        ['hint', palette.grey[500]],
        ['danger', palette.error.main],
      ]),
      // displays
      ...createStylesBySize('display', '&.-display-', [
        ['inline-block', 'inline-block'],
        ['inline-flex', 'inline-flex'],
      ]),
      // sizes
      ...createStylesBySize('fontSize', '&.-size-', [
        ['small', 12],
        ['big', 20],
        ['large', 24],
      ]),
      // indents
      ...createStylesBySize('textIndent', '&.-indent-', [
        ['small', spacing(2)],
        ['medium', spacing(3)],
        ['big', spacing(4)],
      ]),
      // spacings
      ...createStylesBySize('letterSpacing', '&.-spacing-', [
        ['small', '0.5px'],
        ['medium', '1px'],
        ['big', '2px'],
      ]),
      // weights
      ...createStylesBySize('fontWeight', '&.-weight-', [
        ['100', 100],
        ['200', 200],
        ['300', 300],
        ['400', 400],
        ['500', 500],
        ['600', 600],
        ['700', 700],
        ['800', 800],
        ['900', 900],
        ['normal', 'normal'],
        ['bold', 'bold'],
      ]),
      // space bottom
      ...createStylesBySize(
        'marginTop',
        '&.-mt-',
        [
          ['none', '0px !important'],
          ['small', { xs: spacing(1), md: spacing(1.5) }],
          ['medium', { xs: spacing(2), md: spacing(3) }],
          ['big', { xs: spacing(4), md: spacing(5) }],
        ],
        breakpoints,
      ),
      // space top
      ...createStylesBySize(
        'marginBottom',
        '&.-mb-',
        [
          ['none', '0px !important'],
          ['small', { xs: spacing(1), md: spacing(1.5) }],
          ['medium', { xs: spacing(2), md: spacing(3) }],
          ['big', { xs: spacing(4), md: spacing(5) }],
        ],
        breakpoints,
      ),
      // push
      '&.-push-right': {
        marginRight: spacing(1.5),
        [breakpoints.up('md')]: {
          marginRight: spacing(2.5),
        },
      },
      '&.-push-left': {
        marginLeft: spacing(1.5),
        [breakpoints.up('md')]: {
          marginLeft: spacing(2.5),
        },
      },
      '&.-anchor': {
        '&:hover': {
          '& .-anchor-link': {
            visibility: 'visible',
          },
        },
        '& .-anchor-link': {
          margin: spacing(0, 1),
          visibility: 'hidden',
          color: palette.grey[600],
          '& > *': {
            verticalAlign: 'middle',
          },
          '&:hover': {
            color: palette.grey[900],
          },
        },
      },
    },
    button: {
      verticalAlign: 'unset',
    },
  };
});

const Typography = ({
  anchor,
  hrefAnchor,
  component,
  children,
  className,
  blockquote,
  display,
  bottomSpace,
  topSpace,
  push,
  indent,
  code,
  color,
  link,
  weight,
  size,
  inverted,
  secondFamily,
  spacing,
  ...props
}) => {
  const classes = useStyles();
  const similarProps = {
    ...props,
    className: cx(
      'MuiTypography-root',
      className,
      anchor && `-anchor`,
      display && `-display-${display}`,
      size && `-size-${size}`,
      indent && `-indent-${indent}`,
      inverted && '-inverted',
      code && '-code',
      blockquote && '-blockquote',
      color && `-color-${color}`,
      weight && `-weight-${weight}`,
      spacing && `-spacing-${spacing}`,
      bottomSpace && `-mb-${bottomSpace}`,
      topSpace && `-mt-${topSpace}`,
      push && `-push-${push}`,
      secondFamily && '-second-family',
    ),
    display: injectDisplay(display),
    color: injectColor(color),
    component: code ? 'span' : component,
    classes,
  };
  if (link) {
    return (
      <Link {...similarProps} color={injectColor(color || 'secondary')}>
        {children}
        {anchor && (
          <a href={hrefAnchor} className={'-anchor-link'} aria-label={'Anchor'}>
            {anchor}
          </a>
        )}
      </Link>
    );
  }
  return (
    <MuiTypography {...similarProps}>
      {children}
      {anchor && (
        <a href={hrefAnchor} className={'-anchor-link'} aria-label={'Anchor'}>
          {anchor}
        </a>
      )}
    </MuiTypography>
  );
};

Typography.propTypes = {
  anchor: PropTypes.node,
  hrefAnchor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  blockquote: PropTypes.bool,
  display: PropTypes.oneOf([
    'initial',
    'block',
    'inline',
    'inline-block',
    'inline-flex',
  ]),
  inverted: PropTypes.bool,
  code: PropTypes.bool,
  indent: PropTypes.oneOf(['', 'small', 'medium', 'big']),
  size: PropTypes.oneOf(['small', '', 'big', 'large']),
  spacing: PropTypes.oneOf(['', 'small', 'medium', 'big']),
  bottomSpace: PropTypes.oneOf(['', 'none', 'small', 'medium', 'big']),
  topSpace: PropTypes.oneOf(['', 'none', 'small', 'medium', 'big']),
  push: PropTypes.oneOf(['', 'left', 'right']),
  color: PropTypes.oneOf([
    'error',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    // custom
    'danger',
    'hint',
  ]),
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  link: PropTypes.bool,
  component: PropTypes.elementType,
  secondFamily: PropTypes.bool,
};
Typography.defaultProps = {
  anchor: null,
  hrefAnchor: '',
  className: '',
  children: null,
  blockquote: false,
  display: undefined,
  color: undefined,
  bottomSpace: '',
  topSpace: '',
  push: '',
  inverted: false,
  code: false,
  indent: '',
  size: '',
  spacing: '',
  weight: undefined,
  link: false,
  component: undefined,
  secondFamily: false,
};
Typography.getTheme = () => {};
Typography.setSecondFamily = family => {
  secondFamilyVar = family;
};

export default Typography;
