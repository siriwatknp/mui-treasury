import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Dictionary } from '../types';

export default (
  hiddenBreakpoints: Breakpoint[] = [],
  bp: Breakpoint,
  style: Dictionary<string | number> = {}
) => {
  if (!hiddenBreakpoints.includes(bp)) return style;
  const result: Dictionary<string | number> = {};
  Object.keys(style).forEach(key => {
    result[key] = 'unset';
  });
  return result;
};
