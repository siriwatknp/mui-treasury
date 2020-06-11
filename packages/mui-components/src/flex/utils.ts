import { Theme } from '@material-ui/core';
import { Gap } from './core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme();

export const getThemeCssValue = (
  gap: string | number,
  theme: Pick<Theme, 'spacing'> = baseTheme
) => `calc(${typeof gap === 'number' ? theme.spacing(gap) + 'px' : gap} / 2)`;

export const resolveGap = (
  gap: string | number,
  theme: Pick<Theme, 'spacing'> = baseTheme
) => (process.env.NODE_ENV === 'test' ? gap : getThemeCssValue(gap, theme));

// @ts-ignore
export const gapToCss = (
  theme: Pick<Theme, 'breakpoints' | 'spacing'>,
  resolver = resolveGap
) => (gap: Gap): Gap => {
  if (typeof gap === 'undefined' || gap === null) return undefined;
  if (typeof gap === 'string' || typeof gap === 'number') {
    return resolver(gap, theme);
  }
  return Object.entries(gap).reduce(
    (result, current) => ({
      ...result,
      [current[0]]: gapToCss(theme, resolver)(current[1]),
    }),
    {}
  );
};

export const getLowerMediaQuery = (
  { breakpoints }: Pick<Theme, 'breakpoints'>,
  bp: Breakpoint | number
) => {
  if (typeof bp === 'string') {
    return breakpoints.down(breakpoints.keys[breakpoints.keys.indexOf(bp) - 1]);
  }
  return breakpoints.down(bp);
};
