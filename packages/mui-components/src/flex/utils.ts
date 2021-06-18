import { Theme } from '@material-ui/core';
import { Gap } from './core';
import { Breakpoint } from '@material-ui/system';
import { createTheme } from '@material-ui/core/styles';

const baseTheme = createTheme();

const toCssValue = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value;

export const getThemeCssValue = (
  gap: string | number,
  theme: Pick<Theme, 'spacing'> = baseTheme
) =>
  `calc(${typeof gap === 'number' ? toCssValue(theme.spacing(gap)) : gap} / 2)`;

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
    return breakpoints.down(breakpoints.keys[breakpoints.keys.indexOf(bp)]);
  }
  return breakpoints.down(bp);
};
