import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Dictionary } from '../types';
import mapValues from 'lodash.mapvalues';

export default (
  hiddenBreakpoints: Breakpoint[] = [],
  bp: Breakpoint,
  style: Dictionary<string | number> = {}
) => {
  if (!hiddenBreakpoints.includes(bp)) return style;
  return mapValues(style, () => 'unset');
};
