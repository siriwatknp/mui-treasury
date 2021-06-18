import { Theme } from '@material-ui/core/styles/createTheme';
import { Breakpoint } from '@material-ui/system';
import { Dictionary, ResultStyle } from '../types';
import resolveDirection from './resolveDirection';

export type Value = Dictionary<string | number>;
export type MediaQueries = Dictionary<Value | string | number>;

export default (
  breakpointsObject: ResultStyle,
  theme: Pick<Theme, 'breakpoints' | 'direction'>
) => {
  const entries = Object.entries(breakpointsObject);
  let mediaQueries: MediaQueries = {};
  entries.forEach(([key, value]: [Breakpoint, Value]) => {
    if (key === 'xs') {
      mediaQueries = {
        ...mediaQueries,
        ...resolveDirection(theme.direction, value),
      };
    } else {
      mediaQueries[theme.breakpoints.up(key)] = resolveDirection(
        theme.direction,
        value
      );
    }
  });

  return mediaQueries;
};
