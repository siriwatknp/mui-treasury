import { Breakpoint, Breakpoints } from '@material-ui/system';
import { MediaQueries } from './createBreakpointStyles';

export default (hidden?: Breakpoint[], breakpoints?: Breakpoints) => {
  if (!hidden || !breakpoints) return {};
  const mediaQueries: MediaQueries = {};
  hidden.forEach(bp => {
    mediaQueries[breakpoints.only(bp)] = {
      display: 'none',
    };
  });
  return mediaQueries;
};
