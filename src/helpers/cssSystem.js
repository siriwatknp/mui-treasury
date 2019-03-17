import { style, compose } from '@material-ui/system';
import borders from '@material-ui/system/borders';
import display from '@material-ui/system/display';
import flexbox from '@material-ui/system/flexbox';
import palette from '@material-ui/system/palette';
import positions from '@material-ui/system/positions';
import shadows from '@material-ui/system/shadows';
import sizing from '@material-ui/system/sizing';
import spacing from '@material-ui/system/spacing';
import typography from '@material-ui/system/typography';
import css from '@material-ui/system/css';

export const flex = style({
  prop: 'flex',
  cssProperty: 'flex',
});

export const flexGrow = style({
  prop: 'flexGrow',
  cssProperty: 'flexGrow',
});

export const flexShrink = style({
  prop: 'flexShrink',
  cssProperty: 'flexShrink',
});

export const flexBasis = style({
  prop: 'flexBasis',
  cssProperty: 'flexBasis',
});

export const transform = style({
  prop: 'transform',
  cssProperty: 'transform',
});

export const transformOrigin = style({
  prop: 'transformOrigin',
  cssProperty: 'transformOrigin',
});

export const transition = style({
  prop: 'transition',
  cssProperty: 'transition',
});

export const overflow = style({
  prop: 'overflow',
  cssProperty: 'overflow',
});

export const visibility = style({
  prop: 'visibility',
  cssProperty: 'visibility',
});

export const lineHeight = style({
  prop: 'lineHeight',
  cssProperty: 'lineHeight',
});

export const letterSpacing = style({
  prop: 'letterSpacing',
  cssProperty: 'letterSpacing',
});

export const allCssSystem = css(
  compose(
    borders,
    display,
    flexbox,
    positions,
    palette,
    shadows,
    sizing,
    spacing,
    typography,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    transform,
    transition,
    transformOrigin,
    overflow,
    visibility,
  ),
);

export default compose(
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  transform,
  transition,
  overflow,
  visibility,
  transformOrigin,
);
