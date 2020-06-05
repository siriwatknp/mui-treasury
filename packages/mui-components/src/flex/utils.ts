import { Theme } from '@material-ui/core';
import { Gutter } from './core';
import { Breakpoint, Breakpoints } from '@material-ui/core/styles/createBreakpoints';

type Callback = (value: string | number) => any;

// @ts-ignore
export const gutterToCss = (theme: Pick<Theme, 'breakpoints' | 'spacing'>) => (
  gutter: Gutter,
  callback: Callback = val => val
) => {
  if (typeof gutter === 'undefined' || gutter === null) return undefined;
  const { breakpoints: bp, spacing } = theme;
  if (typeof gutter === 'string') {
    return callback(gutter);
  }
  if (typeof gutter === 'number') {
    return callback(spacing(gutter));
  }
  return Object.entries(gutter).reduce(
    (result, current) => ({
      ...result,
      [bp.up(current[0] as Breakpoint)]: gutterToCss(theme)(
        current[1],
        value => value
      ),
    }),
    {}
  );
};

export const getLowerMediaQuery = ({ breakpoints }: Pick<Theme, 'breakpoints'>, bp: Breakpoint | number) => {
  if (typeof bp === 'string') {
    return breakpoints.down(breakpoints.keys[breakpoints.keys.indexOf(bp) - 1])
  }
  return breakpoints.down(bp)
}
