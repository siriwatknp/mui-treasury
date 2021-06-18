import { Breakpoint, Breakpoints, keys } from '@material-ui/system';
import { MediaQueries } from './createBreakpointStyles';
import createDisplayNone from './createDisplayNone';
import { ResultStyle } from '../types';

interface CreateHiddenStyles {
  (
    self: ResultStyle,
    siblings: ResultStyle[],
    breakpoints: Breakpoints
  ): MediaQueries;
}

export const sortBreakpoints = (breakpoints: Breakpoint[]) =>
  breakpoints.sort((a, b) => keys.indexOf(a) - keys.indexOf(b));

export const combineSiblings = (siblings: ResultStyle[]) =>
  siblings.reduce((result, curr) => [...result, ...Object.keys(curr)], []);

export const isLowerBreakpointFromSibling = (
  selfBreakpoints: Breakpoint[],
  siblingsBreakpoints: Breakpoint[],
  bp: Breakpoint
) => {
  const keysUtilBreakpoint = keys.slice(0, keys.indexOf(bp));
  let isSibling = false;
  let isSelf = false;
  keysUtilBreakpoint.reverse().forEach(v => {
    if (!isSibling && !isSelf) {
      if (siblingsBreakpoints.includes(v)) {
        isSibling = true;
      }
      if (selfBreakpoints.includes(v)) {
        isSelf = true;
      }
    }
  });
  return isSibling;
};

export const getHiddenRange = (self: ResultStyle, siblings: ResultStyle[]) => {
  const selfBreakpoints = sortBreakpoints(Object.keys(self) as Breakpoint[]);
  const siblingsBreakpoints = sortBreakpoints(combineSiblings(siblings));
  let found = false;
  let result: Breakpoint[] = [];
  keys.forEach(bp => {
    if (selfBreakpoints.includes(bp) || siblingsBreakpoints.includes(bp)) {
      found = true;
      // logic continue
      if (selfBreakpoints.includes(bp) && siblingsBreakpoints.includes(bp)) {
        console.warn(
          `[Warning]! seems like there are multiple configs for breakpoint: ${bp}, this can cause unexpected behavior. Please make sure that you only have one variant config for each breakpoint.`
        );
      }
      if (siblingsBreakpoints.includes(bp)) {
        result.push(bp);
      }
    } else {
      if (!found) {
        result.push(bp);
      } else if (
        isLowerBreakpointFromSibling(selfBreakpoints, siblingsBreakpoints, bp)
      ) {
        result.push(bp);
      }
    }
  });
  return result;
};

const createHiddenStyles: CreateHiddenStyles = (
  self,
  siblings = [],
  breakpoints
) => {
  if (!self || !breakpoints) return {};
  const hiddenRange = getHiddenRange(self, siblings);

  return createDisplayNone(hiddenRange, breakpoints);
};

export default createHiddenStyles;
