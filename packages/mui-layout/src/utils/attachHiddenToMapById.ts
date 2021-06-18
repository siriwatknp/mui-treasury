import { Breakpoint } from '@material-ui/system';
import { Dictionary, MapBreakpoint } from '../types';
import pickNearestBreakpoint from './pickNearestBreakpoint';

export default <T>(
  mapById: Dictionary<MapBreakpoint<T>>,
  hiddenById: Dictionary<Breakpoint[]>
) => {
  const clone: Dictionary<MapBreakpoint<T & { hidden?: boolean }>> = JSON.parse(
    JSON.stringify(mapById)
  );
  Object.keys(clone).forEach(id => {
    const hiddenBreakpoints = hiddenById[id] || [];
    hiddenBreakpoints.forEach(bp => {
      const config = pickNearestBreakpoint(clone[id], bp);
      clone[id][bp] = { ...config, hidden: true };
    });
  });
  return clone;
};
