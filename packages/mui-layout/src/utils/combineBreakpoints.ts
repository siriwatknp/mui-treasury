import { Breakpoint } from '@material-ui/system';
import { MapBreakpoint } from '../types';
import { sortBreakpoints } from './createHiddenStyles';

export default (...args: MapBreakpoint<{}>[]): Breakpoint[] => {
  let result: Breakpoint[] = [];
  args.forEach(item => {
    const breakpoints = Object.keys(item) as Breakpoint[];
    breakpoints.forEach(k => {
      if (!result.includes(k)) {
        result.push(k);
      }
    });
  });
  return sortBreakpoints(result);
};
